import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import { describe, it } from "node:test";
import { createElement } from "react";
import { renderToStaticMarkup } from "react-dom/server";
import { GetStartedExperience } from "@/components/get-started/GetStartedExperience";
import type { GetStartedContext } from "@/lib/attribution";

const baseAttribution: GetStartedContext = {
  productInterest: "launch",
  source: "launch_page",
  recommendationCategory: null,
  opportunityRef: null,
  fromInsightResults: false,
};

function inputTag(html: string, id: string): string {
  const match = html.match(new RegExp(`<input\\b[^>]*\\bid="${id}"[^>]*>`));
  assert.ok(match, `missing input ${id}`);
  return match[0];
}

describe("Get Started form", () => {
  it("preselects Launch and leaves the other offers changeable", () => {
    const html = renderToStaticMarkup(
      createElement(GetStartedExperience, {
        initialProduct: "launch",
        productQuery: "launch",
        attribution: baseAttribution,
      }),
    );

    assert.match(html, /data-initial-product="launch"/);
    assert.match(html, /data-source="launch_page"/);
    assert.match(inputTag(html, "product-interest-launch"), /\schecked=""/);
    assert.doesNotMatch(
      inputTag(html, "product-interest-presence"),
      /\schecked=/,
    );
    assert.doesNotMatch(
      inputTag(html, "product-interest-not-sure"),
      /\schecked=/,
    );
    for (const id of [
      "product-interest-launch",
      "product-interest-presence",
      "product-interest-not-sure",
    ]) {
      assert.doesNotMatch(inputTag(html, id), /disabled/);
    }
    assert.match(html, /Change offer/);
    assert.match(html, /No website/);
    assert.match(html, /You can continue without one/);
    assert.match(html, /Starting at \$3,500/);
    assert.match(html, /Starting at \$399\/month/);
    assert.doesNotMatch(html, /Coming Soon/);
    assert.doesNotMatch(html, /Elevate Business Systems/);
  });

  it("preselects Presence or Not sure from the entry context", () => {
    const presence = renderToStaticMarkup(
      createElement(GetStartedExperience, {
        initialProduct: "presence",
        productQuery: "presence",
        attribution: {
          ...baseAttribution,
          productInterest: "presence",
          source: "presence_page",
        },
      }),
    );
    const direct = renderToStaticMarkup(
      createElement(GetStartedExperience, {
        initialProduct: "not-sure",
        productQuery: null,
        attribution: {
          ...baseAttribution,
          productInterest: "not-sure",
          source: "direct_get_started",
        },
      }),
    );

    assert.match(
      inputTag(presence, "product-interest-presence"),
      /\schecked="/,
    );
    assert.match(inputTag(direct, "product-interest-not-sure"), /\schecked="/);
  });

  it("does not put the inquiry secret into the client module", () => {
    const source = readFileSync(
      "components/get-started/GetStartedExperience.tsx",
      "utf8",
    );
    assert.doesNotMatch(source, /COMMERCIAL_INQUIRY_SECRET/);
    assert.doesNotMatch(source, /RISECURRENT_COMMERCIAL/);
    assert.doesNotMatch(source, /@vercel\/analytics/);
  });
});
