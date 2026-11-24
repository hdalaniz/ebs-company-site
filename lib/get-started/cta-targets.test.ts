import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import { describe, it } from "node:test";
import { pricing, site } from "@/config/site";
import { currentProducts } from "@/config/products";
import { GET_STARTED_LINKS } from "@/lib/attribution";
import { getStartedHref } from "@/lib/get-started/links";
import { ctaEventForHref } from "@/lib/analytics";
import { PRODUCT_INTERESTS } from "@/lib/get-started/model";

describe("Get Started CTA targets", () => {
  it("points the generic, Launch, and Presence entries at /get-started with source", () => {
    assert.equal(
      site.getStartedHref,
      "/get-started?product=not-sure&source=company_header",
    );
    assert.equal(
      GET_STARTED_LINKS.direct.href,
      "/get-started?product=not-sure&source=direct_get_started",
    );
    assert.equal(
      GET_STARTED_LINKS.launchPage.href,
      "/get-started?product=launch&source=launch_page",
    );
    assert.equal(
      GET_STARTED_LINKS.presencePage.href,
      "/get-started?product=presence&source=presence_page",
    );
    assert.equal(getStartedHref("not-sure"), "/get-started?product=not-sure");
    assert.equal(
      ctaEventForHref(GET_STARTED_LINKS.launchPage.href),
      "cta_get_started_click",
    );
  });

  it("keeps Launch and Presence available at the published starting prices", () => {
    assert.equal(pricing.launch, "Starting at $3,500");
    assert.equal(pricing.presence, "Starting at $399/month");
    assert.equal(pricing.insight, "Free");

    const launch = currentProducts.find((product) => product.key === "launch");
    const presence = currentProducts.find(
      (product) => product.key === "presence",
    );
    const insight = currentProducts.find((product) => product.key === "insight");
    assert.equal(launch?.status, "available");
    assert.equal(presence?.status, "available");
    assert.equal(insight?.pricing, "Free");
    assert.equal(
      PRODUCT_INTERESTS.find((option) => option.value === "launch")?.detail,
      "Starting at $3,500. Available now.",
    );
    assert.equal(
      PRODUCT_INTERESTS.find((option) => option.value === "presence")?.detail,
      "Starting at $399/month. Available now.",
    );
  });

  it("wires customer-facing Get Started controls to the qualification route", () => {
    const launch = readFileSync(
      "components/products/LaunchSections.tsx",
      "utf8",
    );
    const presence = readFileSync(
      "components/products/PresenceSections.tsx",
      "utf8",
    );
    const homepage = readFileSync("components/marketing/FinalCta.tsx", "utf8");
    const header = readFileSync("components/layout/Header.tsx", "utf8");

    assert.equal(launch.match(/GET_STARTED_LINKS\.launchPage\.href/g)?.length, 3);
    assert.equal(
      presence.match(/GET_STARTED_LINKS\.presencePage\.href/g)?.length,
      2,
    );
    assert.match(homepage, /GET_STARTED_LINKS\.direct\.href/);
    assert.match(homepage, /cta_get_started_click/);
    assert.match(header, /GET_STARTED_LINKS\.companyHeader|site\.getStartedHref/);
    assert.doesNotMatch(launch, /href="#launch-get-started"/);
    assert.doesNotMatch(launch, /Coming Soon/);
    assert.doesNotMatch(presence, /Coming Soon/);
  });
});
