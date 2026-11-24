import { getInsightUrl } from "@/config/site";
import {
  parseAttributionSource,
  parseOpportunityRef,
  parseRecommendationCategory,
  type AttributionSource,
  type GetStartedContext,
} from "@/lib/attribution";
import {
  CUSTOMER_MESSAGES,
  customerMessageForFailure,
  type CommercialInquiryRequest,
  type CommercialInquiryResult,
  type GetStartedBrowserPayload,
} from "@/lib/commercial-leads/types";
import { toCommercialInquiryRequest } from "@/lib/commercial-leads/to-inquiry";
import {
  isProductInterest,
  type ProductInterest,
  type QualificationDraft,
} from "@/lib/get-started/model";
import { validateQualification } from "@/lib/get-started/validate";

const MAX_BODY_CHARS = 20_000;
const SUBMISSION_TOKEN_PATTERN =
  /^[0-9a-f]{8}-[0-9a-f]{4}-[1-8][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i;

export type GetStartedSubmit = (
  payload: CommercialInquiryRequest,
) => Promise<CommercialInquiryResult>;

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

function sourceFromBody(
  body: Record<string, unknown>,
): AttributionSource | "invalid" {
  if (body.source === undefined || body.source === null || body.source === "") {
    return "direct_get_started";
  }
  if (typeof body.source !== "string") return "invalid";
  const parsed = parseAttributionSource(body.source);
  return parsed ?? "invalid";
}

function submissionTokenFromBody(
  body: Record<string, unknown>,
): string | "invalid" {
  if (typeof body.submissionToken !== "string") return "invalid";
  const token = body.submissionToken.trim();
  if (!SUBMISSION_TOKEN_PATTERN.test(token)) return "invalid";
  return token.toLowerCase();
}

/**
 * Company-site boundary for Get Started. Validates, maps to the Insight
 * commercial-inquiry contract, then delegates persistence to the injected client.
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
  const source = sourceFromBody(parsed);
  const submissionToken = submissionTokenFromBody(parsed);
  const recommendationCategory = parseRecommendationCategory(
    parsed.recommendation ?? parsed.recommendationCategory,
  );
  const opportunityRef = parseOpportunityRef(
    typeof parsed.opportunityRef === "string"
      ? parsed.opportunityRef
      : typeof parsed.ref === "string"
        ? parsed.ref
        : null,
  );

  if (
    !draft ||
    productQuery === "invalid" ||
    source === "invalid" ||
    submissionToken === "invalid"
  ) {
    return json(
      {
        ok: false,
        code: "INVALID_REQUEST",
        message: CUSTOMER_MESSAGES.invalid,
        fields: {
          ...(!draft
            ? { productInterest: "Choose Launch, Presence, or not sure." }
            : {}),
          ...(submissionToken === "invalid"
            ? { form: "Refresh the page and try again." }
            : {}),
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

  const browserPayload: GetStartedBrowserPayload = {
    ...validation.value,
    submissionToken,
    source,
    productQuery,
    recommendationCategory,
    opportunityRef,
  };

  const context: GetStartedContext = {
    productInterest: productQuery ?? "not-sure",
    source,
    recommendationCategory,
    opportunityRef,
    fromInsightResults: source === "insight_results",
  };

  const payload = toCommercialInquiryRequest(browserPayload, context);

  let result: CommercialInquiryResult;
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
      inquiryId: result.inquiryId,
      recommendedRoute: result.recommendedRoute,
      duplicate: result.duplicate,
      publishedStartingPrice: result.publishedStartingPrice,
    },
    200,
  );
}

export function commercialInquiryFallbackEndpoint(): string {
  return getInsightUrl("/api/commercial-inquiries");
}

/** @deprecated Use commercialInquiryFallbackEndpoint. */
export const commercialLeadFallbackEndpoint = commercialInquiryFallbackEndpoint;
