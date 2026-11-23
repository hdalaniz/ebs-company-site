import assert from "node:assert/strict";
import { describe, it } from "node:test";
import { SAFE_NEXT_STEP } from "@/lib/commercial-leads/types";
import {
  sanitizeNextStep,
  submitCommercialLead,
  type CommercialLeadEnv,
} from "@/lib/commercial-leads/submit-commercial-lead";
import type { CommercialLeadRequest } from "@/lib/commercial-leads/types";

const payload: CommercialLeadRequest = {
  businessName: "Summit Air",
  trade: "hvac",
  websiteSituation: "no-website",
  productInterest: "launch",
  contactName: "Ada Owner",
  email: "ada@example.com",
  source: {
    surface: "company-site",
    path: "/get-started",
    productQuery: "launch",
  },
};

const env: CommercialLeadEnv = {
  endpointUrl: "https://insight.example/api/commercial-leads",
  secret: "test-secret",
  fallbackEndpoint: "https://insight.example/api/commercial-leads",
};

describe("submitCommercialLead", () => {
  it("does not call Insight or store anything when the secret is missing", async () => {
    let called = false;
    const result = await submitCommercialLead(
      payload,
      { ...env, secret: "  " },
      async () => {
        called = true;
        return new Response(null, { status: 500 });
      },
    );

    assert.equal(called, false);
    assert.deepEqual(result, { ok: false, code: "NOT_CONFIGURED" });
  });

  it("sends the bearer token on the server request and not in the body", async () => {
    const calls: Array<{ url: string; init?: RequestInit }> = [];
    const result = await submitCommercialLead(payload, env, async (input, init) => {
      calls.push({ url: String(input), init });
      return Response.json({
        ok: true,
        leadId: "lead_123",
        recommendedRoute: "presence",
        nextStep: "We'll review Presence fit and follow up with the monthly scope.",
      });
    });

    assert.equal(calls.length, 1);
    const headers = new Headers(calls[0]?.init?.headers);
    assert.equal(headers.get("authorization"), "Bearer test-secret");
    assert.equal(String(calls[0]?.init?.body).includes("test-secret"), false);
    assert.match(String(calls[0]?.init?.body), /Summit Air/);
    assert.equal(result.ok, true);
    if (!result.ok) return;
    assert.equal(result.recommendedRoute, "presence");
    assert.equal(result.leadId, "lead_123");
  });

  it("reports an upstream failure when Insight does not accept the request", async () => {
    const result = await submitCommercialLead(payload, env, async () => {
      return Response.json({ ok: false }, { status: 503 });
    });
    assert.deepEqual(result, { ok: false, code: "UPSTREAM" });
  });

  it("keeps booked-revenue language and replaces a promised response time", () => {
    assert.match(
      sanitizeNextStep("We'll talk through how this becomes booked revenue."),
      /booked revenue/,
    );
    assert.equal(
      sanitizeNextStep("We'll reply within 24 hours and book a call."),
      SAFE_NEXT_STEP,
    );
  });
});
