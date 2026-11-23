import type { ProductInterest } from "@/lib/get-started/model";
import type { QualificationValue } from "@/lib/get-started/model";

/**
 * Recommended route is chosen by the Insight commercial-lead service.
 * The company site displays it and does not invent a second decision.
 */
export const RECOMMENDED_ROUTES = [
  "launch",
  "presence",
  "insight",
  "follow-up",
] as const;

export type RecommendedRoute = (typeof RECOMMENDED_ROUTES)[number];

export const SAFE_NEXT_STEP =
  "We'll review what you shared and follow up with a recommended next step. This request does not reserve time or start payment.";

export type CommercialLeadRequest = QualificationValue & {
  source: {
    surface: "company-site";
    path: "/get-started";
    /** URL product context. Null on a direct visit with no valid product query. */
    productQuery: ProductInterest | null;
  };
};

export type CommercialLeadSuccess = {
  ok: true;
  leadId?: string;
  recommendedRoute: RecommendedRoute | null;
  nextStep: string;
};

export type CommercialLeadFailureCode =
  | "NOT_CONFIGURED"
  | "UPSTREAM"
  | "UNCONFIRMED";

export type CommercialLeadFailure = {
  ok: false;
  code: CommercialLeadFailureCode;
};

export type CommercialLeadResult = CommercialLeadSuccess | CommercialLeadFailure;

export const CUSTOMER_MESSAGES = {
  notConfigured: "We couldn't send this request yet. Nothing was saved.",
  upstream: "We couldn't send this request. Nothing was saved.",
  unconfirmed:
    "We couldn't confirm that the request was received. Please try again before submitting a second time.",
  invalid: "Check the form and try again.",
  forbidden: "Submit this form from the RiseCurrent site.",
  tooLarge: "That request is too large. Shorten the note and try again.",
} as const;

export function customerMessageForFailure(code: CommercialLeadFailureCode): string {
  if (code === "NOT_CONFIGURED") return CUSTOMER_MESSAGES.notConfigured;
  if (code === "UNCONFIRMED") return CUSTOMER_MESSAGES.unconfirmed;
  return CUSTOMER_MESSAGES.upstream;
}

export function isRecommendedRoute(value: string): value is RecommendedRoute {
  return (
    value === "launch" ||
    value === "presence" ||
    value === "insight" ||
    value === "follow-up"
  );
}
