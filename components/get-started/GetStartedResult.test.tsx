import assert from "node:assert/strict";
import { describe, it } from "node:test";
import { createElement } from "react";
import { renderToStaticMarkup } from "react-dom/server";
import {
  GetStartedError,
  GetStartedSuccess,
} from "@/components/get-started/GetStartedResult";

describe("Get Started result", () => {
  it("shows the recommended route, published price, and reference id", () => {
    const html = renderToStaticMarkup(
      createElement(GetStartedSuccess, {
        result: {
          inquiryId: "66666666-6666-4666-8666-666666666666",
          recommendedRoute: "launch",
          duplicate: false,
          publishedStartingPrice: "Starting at $3,500",
        },
      }),
    );

    assert.match(html, /data-testid="get-started-success"/);
    assert.match(html, /We received your request/);
    assert.match(html, /Recommended next step/);
    assert.match(html, /RiseCurrent Launch/);
    assert.match(html, /Starting at \$3,500/);
    assert.match(html, /informational only/);
    assert.match(html, /Your request is with RiseCurrent for follow-up/);
    assert.match(html, /does not reserve time or start payment/);
    assert.match(html, /Reference 66666666-6666-4666-8666-666666666666/);
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

  it("offers free Insight on consultation without promising a booked call", () => {
    const html = renderToStaticMarkup(
      createElement(GetStartedSuccess, {
        result: {
          inquiryId: "77777777-7777-4777-8777-777777777777",
          recommendedRoute: "consultation",
          duplicate: true,
          publishedStartingPrice: null,
        },
      }),
    );

    assert.match(html, /Personal follow-up/);
    assert.match(html, /Run free Insight/);
    assert.match(html, /\/analyze/);
    assert.match(html, /data-duplicate="true"/);
    assert.doesNotMatch(html, /book(?:ed|ing)|guarante|within \d+/i);
  });
});
