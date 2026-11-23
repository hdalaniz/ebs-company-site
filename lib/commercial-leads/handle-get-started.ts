import { getInsightUrl } from "@/config/site";
import {
  CUSTOMER_MESSAGES,
  customerMessageForFailure,
  type CommercialLeadRequest,
  type CommercialLeadResult,
} from "@/lib/commercial-leads/types";
import {
  isProductInterest,
  type ProductInterest,
  type QualificationDraft,
} from "@/lib/get-started/model";
import { validateQualification } from "@/lib/get-started/validate";

const MAX_BODY_CHARS = 20_000;

export type GetStartedSubmit = (
  payload: CommercialLeadRequest,
) => Promise<CommercialLeadResult>;

function json(body: unknown, status: number): Response {
  return Response.json(body, { status });
}

function isPlainObject(value: unknown): value is Record<string, unknown> {
  return Boolean(value) && typeof value === "object" && !Array.isArray(value);
}

function requestHost(request: Request): string | null {
  const host = request.headers.get("host")?.trim();
  if (host) return host;
  try {
    return new URL(request.url).host;
  } catch {
    return null;
  }
}

export function isSameOriginSubmission(request: Request): boolean {
  const origin = request.headers.get("origin");
  const host = requestHost(request);
  if (!origin || !host) return false;
  try {
    return new URL(origin).host === host;
  } catch {
    return false;
  }
}

function stringField(body: Record<string, unknown>, key: string): string {
  const value = body[key];
  return typeof value === "string" ? value.trim() : "";
}

function draftFromBody(body: Record<string, unknown>): QualificationDraft | null {
  const productInterest =
    typeof body.productInterest === "string" ? body.productInterest.trim() : "";
  if (!isProductInterest(productInterest)) {
    return null;
  }

  return {
    businessName: stringField(body, "businessName"),
    trade: stringField(body, "trade") as QualificationDraft["trade"],
    websiteSituation: stringField(
      body,
      "websiteSituation",
    ) as QualificationDraft["websiteSituation"],
    websiteUrl: stringField(body, "websiteUrl"),
    productInterest,
    biggestProblem: stringField(body, "biggestProblem"),
    contactName: stringField(body, "contactName"),
    email: stringField(body, "email"),
    phone: stringField(body, "phone"),
  };
}

function productQueryFromBody(
  body: Record<string, unknown>,
): ProductInterest | null | "invalid" {
  if (body.productQuery === undefined || body.productQuery === null) return null;
  if (typeof body.productQuery !== "string") return "invalid";
  const productQuery = body.productQuery.trim();
  if (isProductInterest(productQuery)) return productQuery;
  return "invalid";
}

/**
 * Company-site boundary for Get Started. Validates, then delegates persistence
 * to the injected Insight client. This module does not write a database.
 */
export async function handleGetStartedPost(
  request: Request,
  deps: { submit: GetStartedSubmit },
): Promise<Response> {
  if (!isSameOriginSubmission(request)) {
    return json(
      { ok: false, code: "FORBIDDEN", message: CUSTOMER_MESSAGES.forbidden },
      403,
    );
  }

  const contentType = request.headers.get("content-type") ?? "";
  if (!contentType.toLowerCase().startsWith("application/json")) {
    return json(
      { ok: false, code: "INVALID_REQUEST", message: CUSTOMER_MESSAGES.invalid },
      400,
    );
  }

  const contentLengthHeader = request.headers.get("content-length");
  if (contentLengthHeader && Number(contentLengthHeader) > MAX_BODY_CHARS) {
    return json(
      { ok: false, code: "INVALID_REQUEST", message: CUSTOMER_MESSAGES.tooLarge },
      400,
    );
  }

  let raw = "";
  try {
    raw = await request.text();
  } catch {
    return json(
      { ok: false, code: "INVALID_REQUEST", message: CUSTOMER_MESSAGES.invalid },
      400,
    );
  }

  if (raw.length > MAX_BODY_CHARS) {
    return json(
      { ok: false, code: "INVALID_REQUEST", message: CUSTOMER_MESSAGES.tooLarge },
      400,
    );
  }

  let parsed: unknown;
  try {
    parsed = JSON.parse(raw);
  } catch {
    return json(
      { ok: false, code: "INVALID_REQUEST", message: CUSTOMER_MESSAGES.invalid },
      400,
    );
  }

  if (!isPlainObject(parsed)) {
    return json(
      { ok: false, code: "INVALID_REQUEST", message: CUSTOMER_MESSAGES.invalid },
      400,
    );
  }

  const draft = draftFromBody(parsed);
  const productQuery = productQueryFromBody(parsed);
  if (!draft || productQuery === "invalid") {
    return json(
      {
        ok: false,
        code: "INVALID_REQUEST",
        message: CUSTOMER_MESSAGES.invalid,
        fields: {
          ...(!draft ? { productInterest: "Choose Launch, Presence, or not sure." } : {}),
        },
      },
      400,
    );
  }

  const validation = validateQualification(draft);
  if (!validation.ok) {
    return json(
      {
        ok: false,
        code: "INVALID_REQUEST",
        message: CUSTOMER_MESSAGES.invalid,
        fields: validation.fields,
      },
      400,
    );
  }

  const payload: CommercialLeadRequest = {
    ...validation.value,
    source: {
      surface: "company-site",
      path: "/get-started",
      productQuery,
    },
  };

  let result: CommercialLeadResult;
  try {
    result = await deps.submit(payload);
  } catch {
    return json(
      {
        ok: false,
        code: "UPSTREAM",
        message: CUSTOMER_MESSAGES.upstream,
      },
      502,
    );
  }

  if (!result.ok) {
    const status = result.code === "NOT_CONFIGURED" ? 503 : 502;
    return json(
      {
        ok: false,
        code: result.code,
        message: customerMessageForFailure(result.code),
      },
      status,
    );
  }

  return json(
    {
      ok: true,
      ...(result.leadId ? { leadId: result.leadId } : {}),
      recommendedRoute: result.recommendedRoute,
      nextStep: result.nextStep,
    },
    200,
  );
}

export function commercialLeadFallbackEndpoint(): string {
  return getInsightUrl("/api/commercial-leads");
}
