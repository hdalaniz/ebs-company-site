import assert from "node:assert/strict";
import { describe, it } from "node:test";
import {
  attributionForInquiry,
  buildGetStartedPath,
  GET_STARTED_LINKS,
  normalizeAttributionSource,
  normalizeProductInterest,
  parseGetStartedContext,
  parseOpportunityRef,
} from "@/lib/attribution";

describe("get started attribution", () => {
  it("preselects Launch and Presence from explicit product params", () => {
    const launch = parseGetStartedContext(
      "product=launch&source=insight_results&recommendation=weak-foundation",
    );
    assert.equal(launch.productInterest, "launch");
    assert.equal(launch.source, "insight_results");
    assert.equal(launch.recommendationCategory, "weak-foundation");
    assert.equal(launch.fromInsightResults, true);

    const presence = parseGetStartedContext(
      new URLSearchParams(
        "product=presence&source=presence_page&recommendation=conversion-optimization",
      ),
    );
    assert.equal(presence.productInterest, "presence");
    assert.equal(presence.source, "presence_page");
    assert.equal(presence.fromInsightResults, false);
  });

  it("routes a generic company CTA as not-sure with an explicit source", () => {
    assert.equal(
      GET_STARTED_LINKS.companyHeader.href,
      "/get-started?product=not-sure&source=company_header",
    );
    assert.equal(
      GET_STARTED_LINKS.direct.href,
      "/get-started?product=not-sure&source=direct_get_started",
    );
    assert.equal(GET_STARTED_LINKS.launchPage.product, "launch");
    assert.equal(GET_STARTED_LINKS.launchPage.source, "launch_page");
    assert.equal(GET_STARTED_LINKS.presencePage.product, "presence");
    assert.equal(GET_STARTED_LINKS.presencePage.source, "presence_page");
  });

  it("normalizes the insight alias and falls back invalid source and product", () => {
    assert.equal(normalizeAttributionSource("insight"), "insight_results");
    assert.equal(normalizeAttributionSource("not-a-source"), "direct_get_started");
    assert.equal(normalizeAttributionSource("owner@example.com"), "direct_get_started");
    assert.equal(normalizeProductInterest("not_sure"), "not-sure");
    assert.equal(normalizeProductInterest("custom website"), "not-sure");

    const parsed = parseGetStartedContext({
      product: "something-else",
      source: "campaign-xyz",
      recommendation: "score-87",
      ref: "no-clickable-phone",
      email: "owner@example.com",
      name: "Ada",
    });

    assert.deepEqual(parsed, {
      productInterest: "not-sure",
      source: "direct_get_started",
      recommendationCategory: null,
      opportunityRef: null,
      fromInsightResults: false,
    });
    assert.equal("email" in parsed, false);
    assert.equal("name" in parsed, false);
  });

  it("keeps an opaque ref and drops finding ids", () => {
    assert.equal(parseOpportunityRef("opp_ab12cd34"), "opp_ab12cd34");
    assert.equal(parseOpportunityRef("no-homepage-form"), null);

    const href = buildGetStartedPath({
      product: "launch",
      source: "insight",
      recommendation: "weak-foundation",
      ref: "no-homepage-form",
    });
    assert.equal(
      href,
      "/get-started?product=launch&source=insight_results&recommendation=weak-foundation",
    );
    assert.equal(href.includes("no-homepage-form"), false);
  });

  it("does not place PII, findings, scores, or tokens in the generated path", () => {
    const href = buildGetStartedPath({
      product: "Ada Lovelace",
      source: "owner@example.com",
      recommendation: "homepage score 87 call 208-555-0100",
      ref: "https://secret.example/token",
    });

    assert.equal(
      href,
      "/get-started?product=not-sure&source=direct_get_started",
    );
    const lowered = href.toLowerCase();
    for (const leaked of [
      "ada",
      "lovelace",
      "owner@",
      "score",
      "208",
      "homepage",
      "secret",
      "token",
      "example",
    ]) {
      assert.equal(lowered.includes(leaked), false, leaked);
    }
  });

  it("maps context onto Agent B inquiry fields without inventing a route", () => {
    const context = parseGetStartedContext(
      "product=launch&source=insight&recommendation=weak-foundation&ref=opp_ab12cd34",
    );
    const pending = attributionForInquiry(context);
    assert.deepEqual(pending, {
      productInterest: "launch",
      source: "insight_results",
      recommendationCategory: "weak-foundation",
      insightOpportunityId: "opp_ab12cd34",
      recommendedRoute: null,
    });

    const routed = attributionForInquiry(context, "presence");
    assert.equal(routed.recommendedRoute, "presence");
    assert.equal(
      attributionForInquiry(context, "free-form").recommendedRoute,
      "consultation",
    );
  });
});
