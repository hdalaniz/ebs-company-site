import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import { describe, it } from "node:test";
import { createElement } from "react";
import { renderToStaticMarkup } from "react-dom/server";
import { GetStartedExperience } from "@/components/get-started/GetStartedExperience";

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
      }),
    );

    assert.match(html, /data-initial-product="launch"/);
    assert.match(inputTag(html, "product-interest-launch"), /\schecked=""/);
    assert.doesNotMatch(inputTag(html, "product-interest-presence"), /\schecked=/);
    assert.doesNotMatch(inputTag(html, "product-interest-not-sure"), /\schecked=/);
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
      }),
    );
    const direct = renderToStaticMarkup(
      createElement(GetStartedExperience, {
        initialProduct: "not-sure",
        productQuery: null,
      }),
    );

    assert.match(inputTag(presence, "product-interest-presence"), /\schecked=""/);
    assert.match(inputTag(direct, "product-interest-not-sure"), /\schecked=""/);
  });

  it("does not put the lead secret or form analytics into the client module", () => {
    const source = readFileSync(
      "components/get-started/GetStartedExperience.tsx",
      "utf8",
    );
    assert.doesNotMatch(source, /RISECURRENT_COMMERCIAL_LEAD_SECRET/);
    assert.doesNotMatch(source, /trackCta|@vercel\/analytics/);
  });
});
