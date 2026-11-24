import type { GetStartedContext } from "@/lib/attribution";
import type {
  CommercialInquiryRequest,
  GetStartedBrowserPayload,
} from "@/lib/commercial-leads/types";
import type {
  ProductInterest,
  WebsiteSituation,
} from "@/lib/get-started/model";

/**
 * Map customer-facing website labels to Agent B persisted values.
 *
 * UI "Not sure" becomes `usable` so deterministic routing can produce
 * consultation when product interest is also not sure, instead of forcing
 * Launch. Hard Launch paths still require No website or major improvement.
 */
export function toPersistedWebsiteSituation(
  value: WebsiteSituation,
): CommercialInquiryRequest["websiteSituation"] {
  switch (value) {
    case "no-website":
      return "none";
    case "needs-major-improvement":
      return "outdated";
    case "needs-better-conversion":
      return "usable";
    case "not-sure":
      return "usable";
  }
}

export function toPersistedProductInterest(
  value: ProductInterest,
): CommercialInquiryRequest["productInterest"] {
  if (value === "not-sure") return "not_sure";
  return value;
}

/**
 * Build the Insight commercial-inquiry payload from a validated qualification
 * plus Get Started attribution context.
 */
export function toCommercialInquiryRequest(
  payload: GetStartedBrowserPayload,
  context: Pick<
    GetStartedContext,
    | "source"
    | "productInterest"
    | "recommendationCategory"
    | "opportunityRef"
    | "fromInsightResults"
  >,
): CommercialInquiryRequest {
  const sourceDetail: Record<string, string> = {
    path: "get-started",
  };

  if (payload.productQuery) {
    // Avoid sourceDetail keys that match Agent B's blocked substring list (e.g. "name").
    sourceDetail.entryProduct = payload.productQuery;
  }

  const recommendation =
    payload.recommendationCategory ?? context.recommendationCategory;
  if (recommendation) {
    sourceDetail.recommendation = recommendation;
  }

  const request: CommercialInquiryRequest = {
    businessName: payload.businessName,
    trade: payload.trade,
    websiteSituation: toPersistedWebsiteSituation(payload.websiteSituation),
    productInterest: toPersistedProductInterest(payload.productInterest),
    contactName: payload.contactName,
    email: payload.email,
    source: payload.source || context.source,
    submissionToken: payload.submissionToken,
    sourceDetail,
  };

  if (payload.phone) request.phone = payload.phone;
  if (payload.websiteUrl) request.website = payload.websiteUrl;
  if (payload.biggestProblem) request.biggestProblem = payload.biggestProblem;

  // Insight product handoff is the arrival product, not the customer's final pick.
  if (context.fromInsightResults) {
    const insightProduct = context.productInterest;
    if (insightProduct === "launch" || insightProduct === "presence") {
      request.insightRecommendation = insightProduct;
    }
  }

  const opportunityId = payload.opportunityRef ?? context.opportunityRef;
  if (opportunityId) {
    request.insightOpportunityId = opportunityId;
  }

  return request;
}
