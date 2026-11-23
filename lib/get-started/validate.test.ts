import assert from "node:assert/strict";
import { describe, it } from "node:test";
import { createDraft, type QualificationDraft } from "@/lib/get-started/model";
import { validateQualification } from "@/lib/get-started/validate";

function ready(overrides: Partial<QualificationDraft> = {}): QualificationDraft {
  return {
    ...createDraft("not-sure"),
    businessName: "Summit Air",
    trade: "hvac",
    websiteSituation: "needs-better-conversion",
    contactName: "Ada Owner",
    email: "ada@example.com",
    productInterest: "launch",
    ...overrides,
  };
}

describe("qualification validation", () => {
  it("accepts a business with no website and no optional fields", () => {
    const result = validateQualification(
      ready({
        websiteSituation: "no-website",
        websiteUrl: "",
        phone: "",
        biggestProblem: "",
      }),
    );

    assert.equal(result.ok, true);
    if (!result.ok) return;
    assert.equal(result.value.websiteSituation, "no-website");
    assert.equal(result.value.websiteUrl, undefined);
    assert.equal(result.value.phone, undefined);
  });

  it("drops a website URL when the customer says they have no website", () => {
    const result = validateQualification(
      ready({
        websiteSituation: "no-website",
        websiteUrl: "https://old.example",
      }),
    );

    assert.equal(result.ok, true);
    if (!result.ok) return;
    assert.equal(result.value.websiteUrl, undefined);
  });

  it("allows a blank website URL when a site exists", () => {
    const result = validateQualification(
      ready({ websiteSituation: "needs-major-improvement", websiteUrl: "  " }),
    );
    assert.equal(result.ok, true);
    if (!result.ok) return;
    assert.equal(result.value.websiteUrl, undefined);
  });

  it("requires the commercial fields", () => {
    const result = validateQualification(createDraft("launch"));
    assert.equal(result.ok, false);
    if (result.ok) return;
    assert.equal(result.fields.businessName, "Enter the business name.");
    assert.equal(result.fields.trade, "Choose HVAC, plumbing, or other.");
    assert.equal(result.fields.websiteSituation, "Choose the website situation.");
    assert.equal(result.fields.contactName, "Enter a contact name.");
    assert.equal(result.fields.email, "Enter an email address.");
    assert.equal(result.fields.productInterest, undefined);
  });

  it("rejects an invalid email and an invalid website address", () => {
    const result = validateQualification(
      ready({ email: "not-an-email", websiteUrl: "not a url" }),
    );
    assert.equal(result.ok, false);
    if (result.ok) return;
    assert.equal(result.fields.email, "Enter a valid email address.");
    assert.equal(result.fields.websiteUrl, "Enter a valid website address, or leave it blank.");
  });

  it("accepts a blank phone and rejects a phone that is not dialable", () => {
    assert.equal(validateQualification(ready({ phone: "" })).ok, true);
    const invalid = validateQualification(ready({ phone: "call me" }));
    assert.equal(invalid.ok, false);
    if (invalid.ok) return;
    assert.match(invalid.fields.phone ?? "", /7 to 15 digits/);
  });
});
