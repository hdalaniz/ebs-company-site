import assert from "node:assert/strict";
import { describe, it } from "node:test";
import { CUSTOMER_MESSAGES } from "@/lib/commercial-leads/types";
import { handleGetStartedPost } from "@/lib/commercial-leads/handle-get-started";
import type { CommercialLeadRequest } from "@/lib/commercial-leads/types";

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
};

describe("handleGetStartedPost", () => {
  it("rejects a cross-origin post before any lead call", async () => {
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
    const response = await handleGetStartedPost(request({ productInterest: "launch" }), {
      submit: async () => {
        called = true;
        return { ok: false, code: "UPSTREAM" };
      },
    });
    const body = await response.json();

    assert.equal(response.status, 400);
    assert.equal(called, false);
    assert.equal(body.fields.businessName, "Enter the business name.");
    assert.equal(body.fields.email, "Enter an email address.");
  });

  it("forwards a no-website qualification and returns the backend route", async () => {
    const forwarded: CommercialLeadRequest[] = [];
    const response = await handleGetStartedPost(request(validBody), {
      submit: async (payload) => {
        forwarded.push(payload);
        return {
          ok: true,
          leadId: "lead_123",
          recommendedRoute: "presence",
          nextStep: "We'll review Presence fit and follow up with the monthly scope.",
        };
      },
    });
    const body = await response.json();

    assert.equal(response.status, 200);
    assert.equal(forwarded.length, 1);
    assert.equal(forwarded[0]?.websiteSituation, "no-website");
    assert.equal(forwarded[0]?.websiteUrl, undefined);
    assert.equal(forwarded[0]?.productInterest, "presence");
    assert.equal(forwarded[0]?.source.productQuery, "launch");
    assert.equal(body.recommendedRoute, "presence");
    assert.equal(body.ok, true);
    assert.equal(JSON.stringify(body).includes("RISECURRENT"), false);
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
