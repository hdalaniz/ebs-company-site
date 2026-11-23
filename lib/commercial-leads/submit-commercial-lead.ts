import "server-only";

import {
  isRecommendedRoute,
  type CommercialInquiryRequest,
  type CommercialInquiryResult,
} from "@/lib/commercial-leads/types";

export type CommercialInquiryEnv = {
  endpointUrl?: string;
  secret?: string;
  /** Used when RISECURRENT_COMMERCIAL_INQUIRY_URL is unset. */
  fallbackEndpoint: string;
};

const INQUIRY_ID_PATTERN =
  /^[0-9a-f]{8}-[0-9a-f]{4}-[1-8][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i;

const PRICE_PATTERN = /^Starting at \$[\d,]+(?:\/month)?$/;

export function resolveCommercialInquiryEndpoint(
  env: CommercialInquiryEnv,
): string | null {
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

function parseSuccess(body: unknown): CommercialInquiryResult {
  if (!isPlainObject(body) || body.ok !== true) {
    return { ok: false, code: "UNCONFIRMED" };
  }

  if (
    typeof body.recommendedRoute !== "string" ||
    !isRecommendedRoute(body.recommendedRoute)
  ) {
    return { ok: false, code: "UNCONFIRMED" };
  }

  if (
    typeof body.inquiryId !== "string" ||
    !INQUIRY_ID_PATTERN.test(body.inquiryId)
  ) {
    return { ok: false, code: "UNCONFIRMED" };
  }

  if (typeof body.duplicate !== "boolean") {
    return { ok: false, code: "UNCONFIRMED" };
  }

  let publishedStartingPrice: string | null = null;
  if (body.publishedStartingPrice === null) {
    publishedStartingPrice = null;
  } else if (
    typeof body.publishedStartingPrice === "string" &&
    PRICE_PATTERN.test(body.publishedStartingPrice)
  ) {
    publishedStartingPrice = body.publishedStartingPrice;
  } else if (body.publishedStartingPrice !== undefined) {
    return { ok: false, code: "UNCONFIRMED" };
  }

  return {
    ok: true,
    inquiryId: body.inquiryId.toLowerCase(),
    recommendedRoute: body.recommendedRoute,
    duplicate: body.duplicate,
    publishedStartingPrice,
  };
}

/**
 * Forwards a validated commercial inquiry to Insight.
 * Does not persist locally. The shared secret stays in the Authorization header.
 */
export async function submitCommercialInquiry(
  payload: CommercialInquiryRequest,
  env: CommercialInquiryEnv,
  fetchImpl: typeof fetch = fetch,
): Promise<CommercialInquiryResult> {
  const secret = env.secret?.trim();
  const endpoint = resolveCommercialInquiryEndpoint(env);
  if (!secret || secret.length < 16 || !endpoint) {
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

/** @deprecated Use submitCommercialInquiry. */
export const submitCommercialLead = submitCommercialInquiry;

/** @deprecated Use CommercialInquiryEnv. */
export type CommercialLeadEnv = CommercialInquiryEnv;

/** @deprecated Endpoint resolver renamed. */
export const resolveCommercialLeadEndpoint = resolveCommercialInquiryEndpoint;
