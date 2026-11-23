import assert from "node:assert/strict";
import { afterEach, describe, it } from "node:test";
import {
  type AttributionAnalyticsInput,
  commercialAnalyticsProps,
  interestEventForProduct,
  P6_COMMERCIAL_EVENTS,
  setCommercialAnalyticsTransportForTests,
  trackCommercialRouteReturned,
  trackGetStartedClicked,
  trackInsightHandoffArrived,
  trackQualificationFailed,
  trackQualificationSubmitted,
} from "@/lib/analytics";

afterEach(() => {
  setCommercialAnalyticsTransportForTests(undefined);
});

describe("P6 analytics sanitization", () => {
  it("keeps normalized attribution and drops PII, findings, and scores", () => {
    const props = commercialAnalyticsProps({
      product: "launch",
      source: "insight",
      recommendation: "weak-foundation",
      ref: "opp_ab12cd34",
      route: "launch",
      reason: "validation",
    });

    assert.deepEqual(props, {
      product: "launch",
      source: "insight_results",
      recommendation: "weak-foundation",
      ref: "opp_ab12cd34",
      route: "launch",
      reason: "validation",
    });

    const dirty = commercialAnalyticsProps({
      product: "owner@example.com",
      source: "please call 208-555-0100",
      recommendation: "score 87",
      ref: "no-clickable-phone",
      route: "talk to Ada",
      reason: "email owner@example.com",
    });

    assert.deepEqual(dirty, {
      product: "not-sure",
      source: "direct_get_started",
    });
    const serialized = JSON.stringify(dirty);
    assert.equal(serialized.includes("@"), false);
    assert.equal(serialized.includes("208"), false);
    assert.equal(serialized.includes("Ada"), false);
    assert.equal(serialized.includes("score"), false);
    assert.equal(serialized.includes("no-clickable-phone"), false);
  });

  it("emits one Get Started click with explicit source and product", () => {
    const events: Array<{ name: string; props?: Record<string, string> }> = [];
    setCommercialAnalyticsTransportForTests((name, props) => {
      events.push({ name, props });
    });

    trackGetStartedClicked({
      product: "not-sure",
      source: "company_header",
      email: "owner@example.com",
      name: "Ada",
    } as AttributionAnalyticsInput);

    assert.deepEqual(events, [
      {
        name: P6_COMMERCIAL_EVENTS.getStartedClicked,
        props: { product: "not-sure", source: "company_header" },
      },
    ]);
  });

  it("emits qualification submitted plus one interest event", () => {
    const events: string[] = [];
    setCommercialAnalyticsTransportForTests((name) => {
      events.push(name);
    });

    trackQualificationSubmitted({ product: "launch", source: "launch_page" });
    assert.deepEqual(events, [
      "qualification_submitted",
      "launch_interest_submitted",
    ]);

    events.length = 0;
    trackQualificationSubmitted({ product: "presence", source: "presence_page" });
    assert.deepEqual(events, [
      "qualification_submitted",
      "presence_interest_submitted",
    ]);

    events.length = 0;
    trackQualificationSubmitted({ product: "website", source: "nope" });
    assert.deepEqual(events, [
      "qualification_submitted",
      "not_sure_interest_submitted",
    ]);

    assert.equal(interestEventForProduct("launch"), "launch_interest_submitted");
    assert.equal(
      interestEventForProduct("presence"),
      "presence_interest_submitted",
    );
    assert.equal(interestEventForProduct("not-sure"), "not_sure_interest_submitted");
  });

  it("records route and failure codes without free-form detail", () => {
    const events: Array<{ name: string; props?: Record<string, string> }> = [];
    setCommercialAnalyticsTransportForTests((name, props) => {
      events.push({ name, props });
    });

    trackQualificationFailed({
      product: "presence",
      source: "insight_results",
      reason: "network",
      message: "owner@example.com timed out",
    } as AttributionAnalyticsInput);
    trackCommercialRouteReturned({
      product: "presence",
      source: "insight_results",
      route: "presence",
    });
    trackInsightHandoffArrived({
      product: "presence",
      source: "insight",
      recommendation: "healthy-foundation",
    });
    trackInsightHandoffArrived({
      product: "launch",
      source: "launch_page",
    });

    assert.deepEqual(events, [
      {
        name: "qualification_failed",
        props: {
          product: "presence",
          source: "insight_results",
          reason: "network",
        },
      },
      {
        name: "commercial_route_returned",
        props: {
          product: "presence",
          source: "insight_results",
          route: "presence",
        },
      },
      {
        name: "insight_handoff_arrived",
        props: {
          product: "presence",
          source: "insight_results",
          recommendation: "healthy-foundation",
        },
      },
    ]);
  });
});
