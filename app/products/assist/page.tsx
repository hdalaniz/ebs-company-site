import type { Metadata } from "next";
import { ComingSoonProduct } from "@/components/marketing/ComingSoonProduct";
import { AssistPreview } from "@/components/products/AssistPreview";

export const metadata: Metadata = {
  title: "EBS Assist",
  description:
    "A future EBS product to recommend the next best business action. Not currently available and does not take autonomous actions today.",
};

export default function AssistPage() {
  return (
    <ComingSoonProduct
      name="EBS Assist"
      status="future"
      statusLabel="Future"
      headline="Know your next best move."
      description="EBS Assist is intended to use business signals and measured outcomes to recommend—and eventually automate—the highest-value next actions. It does not currently take actions on its own."
      capabilities={[
        "Prioritize follow-up on unclosed estimates.",
        "Surface slow-response opportunities before they go cold.",
        "Suggest review requests after recent completed work.",
        "Recommend the next action based on impact, not noise.",
      ]}
      preview={<AssistPreview />}
    />
  );
}
