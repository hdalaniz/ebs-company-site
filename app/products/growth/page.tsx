import type { Metadata } from "next";
import { ComingSoonProduct } from "@/components/marketing/ComingSoonProduct";
import { GrowthPreview } from "@/components/products/GrowthPreview";

export const metadata: Metadata = {
  title: "EBS Growth",
  description:
    "A future EBS product to capture, respond to, follow up with, and reactivate demand. Not currently available.",
};

export default function GrowthPage() {
  return (
    <ComingSoonProduct
      name="EBS Growth"
      status="coming-soon"
      headline="Capture more demand. Lose fewer opportunities."
      description="EBS Growth is intended to help service businesses respond faster, follow up consistently, recover missed opportunities, and reactivate previous customers."
      capabilities={[
        "See new leads in one place as they come in.",
        "Know which inquiries are still waiting for a response.",
        "Stay on top of follow-ups before opportunities go cold.",
        "Revisit missed or inactive demand instead of starting from zero.",
      ]}
      preview={<GrowthPreview />}
    />
  );
}
