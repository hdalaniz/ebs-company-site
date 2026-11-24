import assert from "node:assert/strict";
import { describe, it } from "node:test";
import { CUSTOMER_MESSAGES } from "@/lib/commercial-leads/types";
import { handleGetStartedPost } from "@/lib/commercial-leads/handle-get-started";
import type { CommercialInquiryRequest } from "@/lib/commercial-leads/types";

function request(body: unknown, headers: Record<string, string> = {}) {
  return new Request("https://risecurrentsystems.com/api/get-started", {
    method: "POST",
    headers: {
      "content-type": "application/json",
      origin: "https://risecurrentsystems.com",
      ...headers,
    },
    body: JSON.stringify(body),
  });
}

const validBody = {
  businessName: "Summit Air",
  trade: "plumbing",
  websiteSituation: "no-website",
  websiteUrl: "https://should-not-forward.example",
  productInterest: "presence",
  contactName: "Ada Owner",
  email: "ada@example.com",
  phone: "",
  biggestProblem: "",
  productQuery: "launch",
  source: "insight_results",
  recommendation: "weak-foundation",
  opportunityRef: "opp_ab12cd34",
  submissionToken: "33333333-3333-4333-8333-333333333333",
};

describe("handleGetStartedPost", () => {
  it("rejects a cross-origin post before any inquiry call", async () => {
    let called = false;
    const response = await handleGetStartedPost(
      request(validBody, { origin: "https://evil.example" }),
      {
        submit: async () => {
          called = true;
          return { ok: false, code: "UPSTREAM" };
        },
      },
    );

    assert.equal(response.status, 403);
    assert.equal(called, false);
  });

  it("returns field errors and does not forward an incomplete request", async () => {
    let called = false;
    const response = await handleGetStartedPost(
      request({
        productInterest: "launch",
        submissionToken: validBody.submissionToken,
        source: "direct_get_started",
      }),
      {
        submit: async () => {
          called = true;
          return { ok: false, code: "UPSTREAM" };
        },
      },
    );
    const body = await response.json();

    assert.equal(response.status, 400);
    assert.equal(called, false);
    assert.equal(body.fields.businessName, "Enter the business name.");
    assert.equal(body.fields.email, "Enter an email address.");
  });

  it("maps UI values to the Insight commercial-inquiry contract", async () => {
    const forwarded: CommercialInquiryRequest[] = [];
    const response = await handleGetStartedPost(request(validBody), {
      submit: async (payload) => {
        forwarded.push(payload);
        return {
          ok: true,
          inquiryId: "44444444-4444-4444-8444-444444444444",
          recommendedRoute: "consultation",
          duplicate: false,
          publishedStartingPrice: null,
        };
      },
    });
    const body = await response.json();

    assert.equal(response.status, 200);
    assert.equal(forwarded.length, 1);
    assert.equal(forwarded[0]?.websiteSituation, "none");
    assert.equal(forwarded[0]?.website, undefined);
    assert.equal(forwarded[0]?.productInterest, "presence");
    assert.equal(forwarded[0]?.source, "insight_results");
    assert.equal(forwarded[0]?.insightRecommendation, "launch");
    assert.equal(forwarded[0]?.insightOpportunityId, "opp_ab12cd34");
    assert.equal(forwarded[0]?.sourceDetail?.recommendation, "weak-foundation");
    assert.equal(forwarded[0]?.sourceDetail?.entryProduct, "launch");
    assert.equal(body.recommendedRoute, "consultation");
    assert.equal(body.inquiryId, "44444444-4444-4444-8444-444444444444");
    assert.equal(body.ok, true);
    assert.equal(JSON.stringify(body).includes("COMMERCIAL_INQUIRY"), false);
  });

  it("tells the visitor nothing was saved when forwarding is not configured", async () => {
    const response = await handleGetStartedPost(request(validBody), {
      submit: async () => ({ ok: false, code: "NOT_CONFIGURED" }),
    });
    const body = await response.json();

    assert.equal(response.status, 503);
    assert.equal(body.message, CUSTOMER_MESSAGES.notConfigured);
    assert.match(body.message, /Nothing was saved/);
  });
});
