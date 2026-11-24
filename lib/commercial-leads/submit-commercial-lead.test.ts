import assert from "node:assert/strict";
import { describe, it } from "node:test";
import {
  submitCommercialInquiry,
  type CommercialInquiryEnv,
} from "@/lib/commercial-leads/submit-commercial-lead";
import type { CommercialInquiryRequest } from "@/lib/commercial-leads/types";

const payload: CommercialInquiryRequest = {
  businessName: "Summit Air",
  trade: "hvac",
  websiteSituation: "none",
  productInterest: "launch",
  contactName: "Ada Owner",
  email: "ada@example.com",
  source: "launch_page",
  submissionToken: "11111111-1111-4111-8111-111111111111",
};

const env: CommercialInquiryEnv = {
  endpointUrl: "https://insight.example/api/commercial-inquiries",
  secret: "test-secret-at-least-16",
  fallbackEndpoint: "https://insight.example/api/commercial-inquiries",
};

describe("submitCommercialInquiry", () => {
  it("does not call Insight or store anything when the secret is missing", async () => {
    let called = false;
    const result = await submitCommercialInquiry(
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
    const result = await submitCommercialInquiry(
      payload,
      env,
      async (input, init) => {
        calls.push({ url: String(input), init });
        return Response.json({
          ok: true,
          inquiryId: "22222222-2222-4222-8222-222222222222",
          recommendedRoute: "presence",
          duplicate: false,
          publishedStartingPrice: "Starting at $399/month",
        });
      },
    );

    assert.equal(calls.length, 1);
    assert.equal(calls[0]?.url, env.endpointUrl);
    const headers = new Headers(calls[0]?.init?.headers);
    assert.equal(
      headers.get("authorization"),
      "Bearer test-secret-at-least-16",
    );
    assert.equal(String(calls[0]?.init?.body).includes("test-secret"), false);
    assert.match(String(calls[0]?.init?.body), /Summit Air/);
    assert.equal(result.ok, true);
    if (!result.ok) return;
    assert.equal(result.recommendedRoute, "presence");
    assert.equal(result.inquiryId, "22222222-2222-4222-8222-222222222222");
    assert.equal(result.publishedStartingPrice, "Starting at $399/month");
    assert.equal(result.duplicate, false);
  });

  it("reports an upstream failure when Insight does not accept the request", async () => {
    const result = await submitCommercialInquiry(payload, env, async () => {
      return Response.json({ ok: false }, { status: 503 });
    });
    assert.deepEqual(result, { ok: false, code: "UPSTREAM" });
  });

  it("treats a 200 with an unusable body as unconfirmed", async () => {
    const result = await submitCommercialInquiry(payload, env, async () => {
      return Response.json({ ok: true, recommendedRoute: "launch" });
    });
    assert.deepEqual(result, { ok: false, code: "UNCONFIRMED" });
  });
});
