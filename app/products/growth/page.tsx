import type { Metadata } from "next";
import { GrowthPreview } from "@/components/products/GrowthPreview";
import {
  GrowthCapabilities,
  GrowthFinalCta,
  GrowthHero,
  GrowthPlatformRelationship,
  GrowthWorkflow,
} from "@/components/products/GrowthSections";
import { FutureProductPreviewSection } from "@/components/products/FutureProductSections";

export const metadata: Metadata = {
  title: {
    absolute: "EBS Growth | Capture and Convert Demand",
  },
  description:
    "A future EBS product being designed to help service businesses respond faster, follow up consistently, recover missed opportunities, and reactivate previous customers. Not currently available.",
};

export default function GrowthPage() {
  return (
    <>
      <GrowthHero />
      <GrowthWorkflow />
      <FutureProductPreviewSection
        headingId="growth-preview-heading"
        heading="A look at the intended Growth experience."
        supporting="This is a conceptual product vision — not a live inbox, and not a record of real customers."
      >
        <div className="rounded-[1.5rem] bg-gradient-to-b from-white to-sky/20 p-1">
          <GrowthPreview />
        </div>
      </FutureProductPreviewSection>
      <GrowthCapabilities />
      <GrowthPlatformRelationship />
      <GrowthFinalCta />
    </>
  );
}
