import {
  normalizeAttributionSource,
  normalizeProductInterest,
  parseCommercialRoute,
  parseOpportunityRef,
  parseQualificationFailureReason,
  parseRecommendationCategory,
  type AttributionSource,
  type CommercialRoute,
  type ProductInterest,
  type QualificationFailureReason,
  type RecommendationCategory,
} from "@/lib/attribution";

export type CtaEventName =
  | "cta_insight_click"
  | "cta_launch_click"
  | "cta_presence_click"
  | "cta_get_started_click";

/**
 * P6 measurement on top of the existing Vercel Analytics helper.
 * `cta_get_started_click` remains the Get Started click. The other names
 * are qualification and interest events for Agent A to call.
 * Do not send customer PII. Props are normalized before `track()`.
 */
export const P6_COMMERCIAL_EVENTS = {
  getStartedClicked: "cta_get_started_click",
  qualificationStarted: "qualification_started",
  qualificationSubmitted: "qualification_submitted",
  qualificationFailed: "qualification_failed",
  commercialRouteReturned: "commercial_route_returned",
  insightHandoffArrived: "insight_handoff_arrived",
  launchInterestSubmitted: "launch_interest_submitted",
  presenceInterestSubmitted: "presence_interest_submitted",
  notSureInterestSubmitted: "not_sure_interest_submitted",
} as const;

export type P6CommercialEventName =
  (typeof P6_COMMERCIAL_EVENTS)[keyof typeof P6_COMMERCIAL_EVENTS];

export type CommercialAnalyticsProps = {
  product: ProductInterest;
  source: AttributionSource;
  recommendation?: RecommendationCategory;
  ref?: string;
  route?: CommercialRoute;
  reason?: QualificationFailureReason;
};

export type CommercialAnalyticsTransport = (
  name: string,
  props?: Record<string, string>,
) => void;

let testTransport: CommercialAnalyticsTransport | undefined;

/** Test hook. Production keeps the Vercel Analytics dynamic import. */
export function setCommercialAnalyticsTransportForTests(
  transport: CommercialAnalyticsTransport | undefined,
): void {
  testTransport = transport;
}

export type AttributionAnalyticsInput = {
  product?: unknown;
  source?: unknown;
  recommendation?: unknown;
  ref?: unknown;
  route?: unknown;
  reason?: unknown;
};

/**
 * Normalize attribution for analytics.
 * Invalid product becomes `not-sure`. Invalid source becomes `direct_get_started`.
 * Sensitive or free-form values are not copied through.
 */
export function commercialAnalyticsProps(
  input: AttributionAnalyticsInput = {},
): CommercialAnalyticsProps {
  const props: CommercialAnalyticsProps = {
    product: normalizeProductInterest(input.product),
    source: normalizeAttributionSource(input.source),
  };

  const recommendation = parseRecommendationCategory(input.recommendation);
  if (recommendation) props.recommendation = recommendation;

  const ref = parseOpportunityRef(input.ref);
  if (ref) props.ref = ref;

  const route = parseCommercialRoute(input.route);
  if (route) props.route = route;

  const reason = parseQualificationFailureReason(input.reason);
  if (reason) props.reason = reason;

  return props;
}

export function interestEventForProduct(
  product: ProductInterest,
): P6CommercialEventName {
  switch (product) {
    case "launch":
      return P6_COMMERCIAL_EVENTS.launchInterestSubmitted;
    case "presence":
      return P6_COMMERCIAL_EVENTS.presenceInterestSubmitted;
    default:
      return P6_COMMERCIAL_EVENTS.notSureInterestSubmitted;
  }
}

function toPayload(props: CommercialAnalyticsProps): Record<string, string> {
  const payload: Record<string, string> = {
    product: props.product,
    source: props.source,
  };
  if (props.recommendation) payload.recommendation = props.recommendation;
  if (props.ref) payload.ref = props.ref;
  if (props.route) payload.route = props.route;
  if (props.reason) payload.reason = props.reason;
  return payload;
}

function emit(name: string, props?: Record<string, string>): void {
  try {
    if (testTransport) {
      testTransport(name, props);
      return;
    }

    if (typeof window === "undefined") {
      return;
    }

    void import("@vercel/analytics")
      .then(({ track }) => {
        if (props && Object.keys(props).length > 0) {
          track(name, props);
          return;
        }
        track(name);
      })
      .catch(() => {
        // Tracking must never break CTA navigation.
      });
  } catch {
    // Tracking must never break CTA navigation.
  }
}

/**
 * Minimal CTA tracking for P4.
 *
 * Event names:
 * - cta_insight_click
 * - cta_launch_click
 * - cta_presence_click
 * - cta_get_started_click
 *
 * Prefer `trackGetStartedClicked` for Get Started so product and source
 * are attached. Failures never block navigation.
 */
export function trackCta(event: CtaEventName) {
  emit(event);
}

export function trackGetStartedClicked(input: AttributionAnalyticsInput = {}) {
  emit(
    P6_COMMERCIAL_EVENTS.getStartedClicked,
    toPayload(commercialAnalyticsProps(input)),
  );
}

export function trackQualificationStarted(input: AttributionAnalyticsInput = {}) {
  emit(
    P6_COMMERCIAL_EVENTS.qualificationStarted,
    toPayload(commercialAnalyticsProps(input)),
  );
}

/**
 * Emits qualification_submitted and exactly one product-interest event.
 */
export function trackQualificationSubmitted(
  input: AttributionAnalyticsInput = {},
) {
  const props = commercialAnalyticsProps(input);
  const payload = toPayload(props);
  emit(P6_COMMERCIAL_EVENTS.qualificationSubmitted, payload);
  emit(interestEventForProduct(props.product), payload);
}

export function trackQualificationFailed(input: AttributionAnalyticsInput = {}) {
  emit(
    P6_COMMERCIAL_EVENTS.qualificationFailed,
    toPayload(commercialAnalyticsProps(input)),
  );
}

export function trackCommercialRouteReturned(
  input: AttributionAnalyticsInput = {},
) {
  emit(
    P6_COMMERCIAL_EVENTS.commercialRouteReturned,
    toPayload(commercialAnalyticsProps(input)),
  );
}

/** Company-site confirmation that an Insight handoff context was read. */
export function trackInsightHandoffArrived(
  input: AttributionAnalyticsInput = {},
) {
  const props = commercialAnalyticsProps(input);
  if (props.source !== "insight_results") return;
  emit(P6_COMMERCIAL_EVENTS.insightHandoffArrived, toPayload(props));
}

export function ctaEventForHref(href: string): CtaEventName | undefined {
  if (href.includes("/analyze") || href.includes("ebs-insight")) {
    return "cta_insight_click";
  }
  if (href.includes("/products/launch")) {
    return "cta_launch_click";
  }
  if (href.includes("/products/presence")) {
    return "cta_presence_click";
  }
  if (href.includes("/get-started")) {
    return "cta_get_started_click";
  }
  return undefined;
}
