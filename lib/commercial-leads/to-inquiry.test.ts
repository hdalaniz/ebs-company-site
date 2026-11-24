import assert from "node:assert/strict";
import { describe, it } from "node:test";
import {
  toCommercialInquiryRequest,
  toPersistedProductInterest,
  toPersistedWebsiteSituation,
} from "@/lib/commercial-leads/to-inquiry";

describe("commercial inquiry mapping", () => {
  it("maps customer-facing website labels to Agent B values", () => {
    assert.equal(toPersistedWebsiteSituation("no-website"), "none");
    assert.equal(
      toPersistedWebsiteSituation("needs-major-improvement"),
      "outdated",
    );
    assert.equal(
      toPersistedWebsiteSituation("needs-better-conversion"),
      "usable",
    );
    assert.equal(toPersistedWebsiteSituation("not-sure"), "usable");
    assert.equal(toPersistedProductInterest("not-sure"), "not_sure");
    assert.equal(toPersistedProductInterest("launch"), "launch");
  });

  it("keeps Insight product signal separate from the customer's final selection", () => {
    const request = toCommercialInquiryRequest(
      {
        businessName: "Summit Air",
        trade: "hvac",
        websiteSituation: "needs-better-conversion",
        productInterest: "not-sure",
        contactName: "Ada Owner",
        email: "ada@example.com",
        websiteUrl: "https://summit.example",
        submissionToken: "55555555-5555-4555-8555-555555555555",
        source: "insight_results",
        productQuery: "presence",
        recommendationCategory: "conversion-optimization",
        opportunityRef: "opp_ab12cd34",
      },
      {
        productInterest: "presence",
        source: "insight_results",
        recommendationCategory: "conversion-optimization",
        opportunityRef: "opp_ab12cd34",
        fromInsightResults: true,
      },
    );

    assert.equal(request.websiteSituation, "usable");
    assert.equal(request.productInterest, "not_sure");
    assert.equal(request.website, "https://summit.example");
    assert.equal(request.insightRecommendation, "presence");
    assert.equal(request.insightOpportunityId, "opp_ab12cd34");
    assert.equal(request.sourceDetail?.recommendation, "conversion-optimization");
  });
});
