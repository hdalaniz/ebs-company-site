import type { ProductInterest } from "@/lib/get-started/model";
import type { QualificationValue } from "@/lib/get-started/model";
import type {
  AttributionSource,
  RecommendationCategory,
} from "@/lib/attribution";

/**
 * Recommended route values from Insight POST /api/commercial-inquiries.
 * The company site displays them and does not invent a second decision.
 */
export const RECOMMENDED_ROUTES = [
  "launch",
  "presence",
  "consultation",
] as const;

export type RecommendedRoute = (typeof RECOMMENDED_ROUTES)[number];

export const SAFE_NEXT_STEP =
  "We'll review what you shared and follow up with a recommended next step. This request does not reserve time or start payment.";

/** Browser → company-site qualification body (customer-facing vocabulary). */
export type GetStartedBrowserPayload = QualificationValue & {
  submissionToken: string;
  source: AttributionSource;
  productQuery: ProductInterest | null;
  recommendationCategory?: RecommendationCategory | null;
  opportunityRef?: string | null;
};

/**
 * Canonical Insight commercial inquiry body (Agent B contract).
 * Built only on the company-site server. Never sent from the browser directly.
 */
export type CommercialInquiryRequest = {
  businessName: string;
  trade: string;
  websiteSituation: "none" | "outdated" | "usable";
  productInterest: "launch" | "presence" | "not_sure";
  contactName: string;
  email: string;
  source: string;
  submissionToken: string;
  phone?: string;
  website?: string;
  biggestProblem?: string;
  sourceDetail?: Record<string, string>;
  insightRecommendation?: "launch" | "presence" | "talk" | "consultation";
  insightOpportunityId?: string;
};

export type CommercialInquirySuccess = {
  ok: true;
  inquiryId: string;
  recommendedRoute: RecommendedRoute;
  duplicate: boolean;
  publishedStartingPrice: string | null;
};

export type CommercialInquiryFailureCode =
  | "NOT_CONFIGURED"
  | "UPSTREAM"
  | "UNCONFIRMED";

export type CommercialInquiryFailure = {
  ok: false;
  code: CommercialInquiryFailureCode;
};

export type CommercialInquiryResult =
  | CommercialInquirySuccess
  | CommercialInquiryFailure;

export const CUSTOMER_MESSAGES = {
  notConfigured: "We couldn't send this request yet. Nothing was saved.",
  upstream: "We couldn't send this request. Nothing was saved.",
  unconfirmed:
    "We couldn't confirm that the request was received. Please try again before submitting a second time.",
  invalid: "Check the form and try again.",
  forbidden: "Submit this form from the RiseCurrent site.",
  tooLarge: "That request is too large. Shorten the note and try again.",
} as const;

export function customerMessageForFailure(
  code: CommercialInquiryFailureCode,
): string {
  if (code === "NOT_CONFIGURED") return CUSTOMER_MESSAGES.notConfigured;
  if (code === "UNCONFIRMED") return CUSTOMER_MESSAGES.unconfirmed;
  return CUSTOMER_MESSAGES.upstream;
}

export function isRecommendedRoute(value: string): value is RecommendedRoute {
  return (
    value === "launch" || value === "presence" || value === "consultation"
  );
}

/** @deprecated Prefer CommercialInquiryRequest — kept for local naming clarity. */
export type CommercialLeadRequest = CommercialInquiryRequest;
export type CommercialLeadResult = CommercialInquiryResult;
