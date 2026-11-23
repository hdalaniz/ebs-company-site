import assert from "node:assert/strict";
import { describe, it } from "node:test";
import { createElement } from "react";
import { renderToStaticMarkup } from "react-dom/server";
import {
  GetStartedError,
  GetStartedSuccess,
} from "@/components/get-started/GetStartedResult";

describe("Get Started result", () => {
  it("shows the recommended route and what happens next", () => {
    const html = renderToStaticMarkup(
      createElement(GetStartedSuccess, {
        result: {
          leadId: "lead_123",
          recommendedRoute: "launch",
          nextStep: "We'll review the Launch request and follow up with scope questions.",
        },
      }),
    );

    assert.match(html, /data-testid="get-started-success"/);
    assert.match(html, /We received your request/);
    assert.match(html, /Recommended next step/);
    assert.match(html, /RiseCurrent Launch/);
    assert.match(html, /What happens next/);
    assert.match(html, /follow up with scope questions/);
    assert.match(html, /Your request is with RiseCurrent for follow-up/);
    assert.match(html, /does not reserve time or start payment/);
    assert.match(html, /Reference lead_123/);
    assert.match(html, /href="\/products\/launch"/);
    assert.doesNotMatch(html, /within \d+|stripe|checkout|calendar/i);
  });

  it("shows an error without claiming the request was saved", () => {
    const html = renderToStaticMarkup(
      createElement(GetStartedError, {
        message: "We couldn't send this request. Nothing was saved.",
      }),
    );

    assert.match(html, /role="alert"/);
    assert.match(html, /data-testid="get-started-error"/);
    assert.match(html, /Nothing was saved/);
    assert.doesNotMatch(html, /We received your request/);
  });

  it("offers free Insight only when that is the returned route", () => {
    const html = renderToStaticMarkup(
      createElement(GetStartedSuccess, {
        result: {
          recommendedRoute: "insight",
          nextStep: "A free diagnostic is the clearest next look at the current site.",
        },
      }),
    );

    assert.match(html, /RiseCurrent Insight/);
    assert.match(html, /Run free Insight/);
    assert.match(html, /\/analyze/);
  });
});
