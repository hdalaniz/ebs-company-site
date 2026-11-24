/**
 * P6 commercial attribution for /get-started.
 * Keep this aligned with ebs-insight-v2 `src/lib/handoff/vocabulary.ts`.
 *
 * Agent A owns the Get Started form. Agent B owns inquiry persistence.
 * This module is the shared contract: query parsing, normalization, and
 * the fields Agent B should store. It does not persist leads.
 *
 * Browser referrer is intentionally unused.
 */

export const PRODUCT_INTERESTS = ["launch", "presence", "not-sure"] as const;
export type ProductInterest = (typeof PRODUCT_INTERESTS)[number];

export const ATTRIBUTION_SOURCES = [
  "company_header",
  "launch_page",
  "presence_page",
  "insight_results",
  "direct_get_started",
] as const;
export type AttributionSource = (typeof ATTRIBUTION_SOURCES)[number];

export const RECOMMENDATION_CATEGORIES = [
  "weak-foundation",
  "conversion-optimization",
  "healthy-foundation",
  "ambiguous",
] as const;
export type RecommendationCategory =
  (typeof RECOMMENDATION_CATEGORIES)[number];

/** Route chosen after qualification. Agent B sets this; it is not a URL param. */
export const COMMERCIAL_ROUTES = [
  "launch",
  "presence",
  "consultation",
] as const;
export type CommercialRoute = (typeof COMMERCIAL_ROUTES)[number];

export const QUALIFICATION_FAILURE_REASONS = [
  "validation",
  "network",
  "unavailable",
] as const;
export type QualificationFailureReason =
  (typeof QUALIFICATION_FAILURE_REASONS)[number];

export const GET_STARTED_PATH = "/get-started";

/**
 * Agent B persisted attribution names on POST /api/commercial-inquiries.
 * Recommendation category stays in sourceDetail.recommendation.
 */
export const COMMERCIAL_INQUIRY_ATTRIBUTION_FIELDS = {
  productInterest: "productInterest",
  source: "source",
  sourceDetail: "sourceDetail",
  insightRecommendation: "insightRecommendation",
  insightOpportunityId: "insightOpportunityId",
  recommendedRoute: "recommendedRoute",
} as const;

export type CommercialInquiryAttribution = {
  productInterest: ProductInterest;
  source: AttributionSource;
  /** Controlled recommendation category for sourceDetail — not a parallel Insight product signal. */
  recommendationCategory: RecommendationCategory | null;
  insightOpportunityId: string | null;
  recommendedRoute: CommercialRoute | null;
};

export type GetStartedContext = {
  productInterest: ProductInterest;
  source: AttributionSource;
  recommendationCategory: RecommendationCategory | null;
  opportunityRef: string | null;
  /** True only when the explicit source is the Insight results handoff. */
  fromInsightResults: boolean;
};

export type SearchParamInput =
  | URLSearchParams
  | string
  | Record<string, string | string[] | undefined>;

const OPAQUE_REF_PATTERN =
  /^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-8][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|opp_[a-z0-9_-]{8,40})$/i;

const PRODUCT_SET: ReadonlySet<string> = new Set(PRODUCT_INTERESTS);
const SOURCE_SET: ReadonlySet<string> = new Set(ATTRIBUTION_SOURCES);
const RECOMMENDATION_SET: ReadonlySet<string> = new Set(
  RECOMMENDATION_CATEGORIES,
);
const ROUTE_SET: ReadonlySet<string> = new Set(COMMERCIAL_ROUTES);
const FAILURE_SET: ReadonlySet<string> = new Set(QUALIFICATION_FAILURE_REASONS);

const SOURCE_ALIASES: Readonly<Record<string, AttributionSource>> = {
  insight: "insight_results",
};

const PRODUCT_ALIASES: Readonly<Record<string, ProductInterest>> = {
  not_sure: "not-sure",
};

function token(value: unknown): string | null {
  if (typeof value !== "string") return null;
  const trimmed = value.trim().toLowerCase();
  if (!trimmed || trimmed.length > 40) return null;
  if (/[^a-z0-9_-]/.test(trimmed)) return null;
  return trimmed;
}

export function parseProductInterest(value: unknown): ProductInterest | null {
  const parsed = token(value);
  if (!parsed) return null;
  if (PRODUCT_SET.has(parsed)) return parsed as ProductInterest;
  return PRODUCT_ALIASES[parsed] ?? null;
}

export function normalizeProductInterest(value: unknown): ProductInterest {
  return parseProductInterest(value) ?? "not-sure";
}

export function parseAttributionSource(
  value: unknown,
): AttributionSource | null {
  const parsed = token(value);
  if (!parsed) return null;
  if (SOURCE_SET.has(parsed)) return parsed as AttributionSource;
  return SOURCE_ALIASES[parsed] ?? null;
}

export function normalizeAttributionSource(value: unknown): AttributionSource {
  return parseAttributionSource(value) ?? "direct_get_started";
}

export function parseRecommendationCategory(
  value: unknown,
): RecommendationCategory | null {
  const parsed = token(value);
  if (!parsed) return null;
  if (!RECOMMENDATION_SET.has(parsed)) return null;
  return parsed as RecommendationCategory;
}

export function parseOpportunityRef(value: unknown): string | null {
  if (typeof value !== "string") return null;
  const trimmed = value.trim();
  if (!OPAQUE_REF_PATTERN.test(trimmed)) return null;
  return trimmed.toLowerCase();
}

export function parseCommercialRoute(value: unknown): CommercialRoute | null {
  const parsed = token(value);
  if (!parsed || !ROUTE_SET.has(parsed)) return null;
  return parsed as CommercialRoute;
}

export function normalizeCommercialRoute(value: unknown): CommercialRoute {
  return parseCommercialRoute(value) ?? "consultation";
}

export function parseQualificationFailureReason(
  value: unknown,
): QualificationFailureReason | null {
  const parsed = token(value);
  if (!parsed || !FAILURE_SET.has(parsed)) return null;
  return parsed as QualificationFailureReason;
}

export type CommercialHandoffInput = {
  product?: unknown;
  source?: unknown;
  recommendation?: unknown;
  ref?: unknown;
};

/** Relative href for in-site links. Always includes normalized product and source. */
export function buildGetStartedPath(input: CommercialHandoffInput = {}): string {
  const params = new URLSearchParams();
  params.set("product", normalizeProductInterest(input.product));
  params.set("source", normalizeAttributionSource(input.source));

  const recommendation = parseRecommendationCategory(input.recommendation);
  if (recommendation) params.set("recommendation", recommendation);

  const ref = parseOpportunityRef(input.ref);
  if (ref) params.set("ref", ref);

  return `${GET_STARTED_PATH}?${params.toString()}`;
}

function entry(
  product: ProductInterest,
  source: AttributionSource,
): { product: ProductInterest; source: AttributionSource; href: string } {
  return {
    product,
    source,
    href: buildGetStartedPath({ product, source }),
  };
}

export const GET_STARTED_LINKS = {
  companyHeader: entry("not-sure", "company_header"),
  direct: entry("not-sure", "direct_get_started"),
  launchPage: entry("launch", "launch_page"),
  presencePage: entry("presence", "presence_page"),
} as const;

export function parseGetStartedContext(input: SearchParamInput): GetStartedContext {
  const params = toSearchParams(input);
  const productInterest = normalizeProductInterest(params.get("product"));
  const source = normalizeAttributionSource(params.get("source"));

  return {
    productInterest,
    source,
    recommendationCategory: parseRecommendationCategory(
      params.get("recommendation"),
    ),
    opportunityRef: parseOpportunityRef(params.get("ref")),
    fromInsightResults: source === "insight_results",
  };
}

export function attributionForInquiry(
  context: GetStartedContext,
  recommendedRoute?: unknown,
): CommercialInquiryAttribution {
  return {
    productInterest: context.productInterest,
    source: context.source,
    recommendationCategory: context.recommendationCategory,
    insightOpportunityId: context.opportunityRef,
    recommendedRoute:
      recommendedRoute === undefined
        ? null
        : normalizeCommercialRoute(recommendedRoute),
  };
}

function toSearchParams(input: SearchParamInput): URLSearchParams {
  if (typeof input === "string") {
    const query = input.startsWith("?") ? input.slice(1) : input;
    return new URLSearchParams(query);
  }

  if (input instanceof URLSearchParams) {
    return input;
  }

  const params = new URLSearchParams();
  for (const [key, value] of Object.entries(input)) {
    const first = Array.isArray(value) ? value[0] : value;
    if (typeof first === "string") params.append(key, first);
  }
  return params;
}
