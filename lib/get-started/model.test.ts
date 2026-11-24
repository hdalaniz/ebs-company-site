import assert from "node:assert/strict";
import { describe, it } from "node:test";
import { readProductQuery, withProductInterest, createDraft } from "@/lib/get-started/model";

describe("product preselection", () => {
  it("preselects Launch, Presence, and Not sure from the product query", () => {
    assert.deepEqual(readProductQuery("launch"), {
      initial: "launch",
      explicit: "launch",
    });
    assert.deepEqual(readProductQuery("presence"), {
      initial: "presence",
      explicit: "presence",
    });
    assert.deepEqual(readProductQuery("not-sure"), {
      initial: "not-sure",
      explicit: "not-sure",
    });
  });

  it("starts a direct visit on Not sure without recording a chosen query", () => {
    assert.deepEqual(readProductQuery(undefined), {
      initial: "not-sure",
      explicit: null,
    });
    assert.deepEqual(readProductQuery("growth"), {
      initial: "not-sure",
      explicit: null,
    });
    assert.deepEqual(readProductQuery(["presence", "launch"]), {
      initial: "presence",
      explicit: "presence",
    });
  });

  it("lets the customer change the preselected offer", () => {
    const draft = withProductInterest(createDraft("launch"), "presence");
    assert.equal(draft.productInterest, "presence");
    assert.equal(withProductInterest(draft, "not-sure").productInterest, "not-sure");
  });
});
