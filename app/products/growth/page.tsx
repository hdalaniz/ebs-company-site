import type { Metadata } from "next";
import { GrowthPreview } from "@/components/products/GrowthPreview";
import {
  FutureProductCta,
  FutureProductHero,
  FutureProductPreviewSection,
  IdeaCardGrid,
  PlatformRelationship,
} from "@/components/products/FutureProductSections";
import { getInsightUrl } from "@/config/site";

export const metadata: Metadata = {
  title: "EBS Growth",
  description:
    "A future EBS product being designed to help service businesses respond faster, follow up consistently, recover missed opportunities, and reactivate previous customers. Not currently available.",
};

const purposeItems = [
  {
    title: "Capture",
    description:
      "Bring calls, forms, and inquiries into a clearer workflow.",
  },
  {
    title: "Respond",
    description: "Reduce the time valuable leads wait for a reply.",
  },
  {
    title: "Follow Up",
    description:
      "Keep opportunities from disappearing after the first interaction.",
  },
  {
    title: "Reactivate",
    description:
      "Reconnect with previous leads and customers when appropriate.",
  },
] as const;

const capabilities = [
  {
    title: "Lead Capture",
    description:
      "Designed to gather incoming calls, forms, and inquiries into one place owners can actually work from.",
  },
  {
    title: "Fast Response",
    description:
      "Planned to surface which leads are still waiting so valuable demand is not left unanswered.",
  },
  {
    title: "Follow-Up Workflows",
    description:
      "Future capability for keeping estimates, callbacks, and open opportunities moving after the first reply.",
  },
  {
    title: "Reactivation",
    description:
      "Designed to help businesses revisit previous leads and customers instead of starting from zero.",
  },
] as const;

export default function GrowthPage() {
  return (
    <>
      <FutureProductHero
        eyebrow="EBS Growth"
        status="coming-soon"
        headline={
          <>
            Capture more demand.{" "}
            <span className="text-teal">Lose fewer opportunities.</span>
          </>
        }
        description="EBS Growth is being designed to help service businesses respond faster, follow up consistently, recover missed opportunities, and reactivate previous customers."
      />

      <IdeaCardGrid
        headingId="growth-purpose-heading"
        heading="A clearer path from inquiry to follow-through."
        supporting="EBS Growth is intended to help service businesses keep incoming demand from stalling between the first contact and booked work."
        items={purposeItems}
        columns={4}
      />

      <FutureProductPreviewSection
        headingId="growth-preview-heading"
        heading="A look at the intended Growth experience."
        supporting="This is a conceptual product vision — not a live inbox, and not a record of real customers."
      >
        <GrowthPreview />
      </FutureProductPreviewSection>

      <IdeaCardGrid
        headingId="growth-capabilities-heading"
        heading="Planned capabilities"
        supporting="These are product directions, not features you can use today."
        items={capabilities}
      />

      <PlatformRelationship
        headingId="growth-platform-heading"
        heading="Where Growth sits in the EBS platform."
        supporting="Presence helps create or improve the digital front door. Growth is intended to turn incoming demand into opportunities. Revenue Intelligence will measure what actually becomes booked revenue."
        steps={[
          {
            name: "EBS Presence",
            href: "/products/presence",
            description: "Create or improve the digital front door customers see first.",
          },
          {
            name: "EBS Growth",
            href: "/products/growth",
            description: "Turn incoming demand into opportunities that can be worked.",
            current: true,
          },
          {
            name: "EBS Revenue Intelligence",
            href: "/products/revenue-intelligence",
            description: "Measure what actually becomes booked revenue.",
          },
        ]}
      />

      <FutureProductCta
        headingId="growth-final-cta-heading"
        headline="Start by understanding where your business stands today."
        supporting="EBS Growth is not available yet. The most useful next step is still to strengthen the digital presence customers see first."
        primary={{ href: "/products/presence", label: "Explore EBS Presence" }}
        secondary={{ href: getInsightUrl("/analyze"), label: "Run EBS Insight" }}
      />
    </>
  );
}
