import "server-only";

import {
  isRecommendedRoute,
  SAFE_NEXT_STEP,
  type CommercialLeadRequest,
  type CommercialLeadResult,
} from "@/lib/commercial-leads/types";

export type CommercialLeadEnv = {
  endpointUrl?: string;
  secret?: string;
  /** Used when RISECURRENT_COMMERCIAL_LEAD_URL is unset. */
  fallbackEndpoint: string;
};

const UNSAFE_NEXT_STEP =
  /\b(within\s+\d+|guarante|calendar|stripe|checkout|book(?:ed|ing)\s+(?:a\s+)?(?:call|time|meeting|appointment|demo)|start(?:s|ed)?\s+(?:your\s+)?(?:subscription|billing|payment))\b/i;

const LEAD_ID_PATTERN = /^[A-Za-z0-9_-]{1,80}$/;

export function sanitizeNextStep(value: unknown): string {
  if (typeof value !== "string") return SAFE_NEXT_STEP;
  let cleaned = "";
  for (const char of value) {
    const code = char.charCodeAt(0);
    if (code < 32 || code === 127 || char === "<" || char === ">") {
      cleaned += " ";
      continue;
    }
    cleaned += char;
  }
  cleaned = cleaned.replace(/\s+/g, " ").trim().slice(0, 500);
  if (!cleaned || UNSAFE_NEXT_STEP.test(cleaned)) return SAFE_NEXT_STEP;
  return cleaned;
}

export function resolveCommercialLeadEndpoint(env: CommercialLeadEnv): string | null {
  const configured = env.endpointUrl?.trim();
  const candidate = configured || env.fallbackEndpoint;
  try {
    const url = new URL(candidate);
    if (url.protocol !== "https:" && url.protocol !== "http:") return null;
    if (url.username || url.password) return null;
    return url.toString();
  } catch {
    return null;
  }
}

function isPlainObject(value: unknown): value is Record<string, unknown> {
  return Boolean(value) && typeof value === "object" && !Array.isArray(value);
}

function parseSuccess(body: unknown): CommercialLeadResult {
  if (!isPlainObject(body) || body.ok !== true) {
    return { ok: false, code: "UNCONFIRMED" };
  }

  const recommendedRoute =
    typeof body.recommendedRoute === "string" &&
    isRecommendedRoute(body.recommendedRoute)
      ? body.recommendedRoute
      : null;

  const leadId =
    typeof body.leadId === "string" && LEAD_ID_PATTERN.test(body.leadId)
      ? body.leadId
      : undefined;

  return {
    ok: true,
    ...(leadId ? { leadId } : {}),
    recommendedRoute,
    nextStep: sanitizeNextStep(body.nextStep),
  };
}

/**
 * Forwards a validated qualification to the Insight commercial-lead endpoint.
 * Does not persist locally. The shared secret stays in the Authorization header.
 */
export async function submitCommercialLead(
  payload: CommercialLeadRequest,
  env: CommercialLeadEnv,
  fetchImpl: typeof fetch = fetch,
): Promise<CommercialLeadResult> {
  const secret = env.secret?.trim();
  const endpoint = resolveCommercialLeadEndpoint(env);
  if (!secret || !endpoint) {
    return { ok: false, code: "NOT_CONFIGURED" };
  }

  let response: Response;
  try {
    response = await fetchImpl(endpoint, {
      method: "POST",
      headers: {
        Accept: "application/json",
        Authorization: `Bearer ${secret}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
      cache: "no-store",
      signal: AbortSignal.timeout(12_000),
    });
  } catch {
    return { ok: false, code: "UPSTREAM" };
  }

  let body: unknown;
  try {
    body = await response.json();
  } catch {
    return { ok: false, code: response.ok ? "UNCONFIRMED" : "UPSTREAM" };
  }

  if (!response.ok) {
    return { ok: false, code: "UPSTREAM" };
  }

  return parseSuccess(body);
}
