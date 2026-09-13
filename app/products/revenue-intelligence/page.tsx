import type { Metadata } from "next";
import { RevenuePreview } from "@/components/products/RevenuePreview";
import {
  FutureProductCta,
  FutureProductHero,
  FutureProductPreviewSection,
  IdeaCardGrid,
  PlatformRelationship,
  SpotlightCallout,
  StageFlow,
} from "@/components/products/FutureProductSections";
import { SectionHeading } from "@/components/marketing/SectionHeading";
import { getInsightUrl } from "@/config/site";

export const metadata: Metadata = {
  title: "EBS Revenue Intelligence",
  description:
    "A future EBS product being designed to connect lead sources, response activity, bookings, jobs, and revenue so owners can see what is working. Not currently available.",
};

const sourceToRevenue = [
  { label: "Source" },
  { label: "Lead" },
  { label: "Response" },
  { label: "Booking" },
  { label: "Job" },
  { label: "Revenue", current: true },
] as const;

const capabilities = [
  {
    title: "Source Attribution",
    description:
      "Designed to connect lead sources to later activity so owners can see where demand actually starts.",
  },
  {
    title: "Booking Measurement",
    description:
      "Planned to show booking rate alongside volume, instead of treating more leads as the only success metric.",
  },
  {
    title: "Revenue Influence",
    description:
      "Designed to connect follow-through to booked work and revenue, not just messages sent or clicks recorded.",
  },
  {
    title: "Opportunity Detection",
    description:
      "Future capability for surfacing where money is being lost in the source-to-revenue chain.",
  },
] as const;

export default function RevenueIntelligencePage() {
  return (
    <>
      <FutureProductHero
        eyebrow="EBS Revenue Intelligence"
        status="coming-soon"
        headline={
          <>
            Know what actually{" "}
            <span className="text-teal">drives revenue.</span>
          </>
        }
        description="EBS Revenue Intelligence is being designed to connect lead sources, response activity, bookings, jobs, and revenue so business owners can see what is working and where money is being lost."
      />

      <section
        aria-labelledby="revenue-chain-heading"
        className="mx-auto w-full max-w-7xl px-5 pt-2 pb-12 sm:px-8 sm:pt-4 sm:pb-16 lg:pt-6 lg:pb-20"
      >
        <SectionHeading
          headingId="revenue-chain-heading"
          heading="From source to revenue."
          supporting="The product is intended to make this chain visible — not as a report of activity, but as a way to understand what becomes booked work."
        />
        <div className="ebs-card mt-8 p-5 sm:p-8">
          <StageFlow
            ariaLabel="Source to revenue chain"
            variant="cards"
            stages={sourceToRevenue}
          />
        </div>
      </section>

      <FutureProductPreviewSection
        headingId="revenue-preview-heading"
        heading="A conceptual look at the measurement layer."
        supporting="The figures below are fictional demonstration values used to show the intended product, not EBS customer outcomes."
      >
        <RevenuePreview />
      </FutureProductPreviewSection>

      <IdeaCardGrid
        headingId="revenue-capabilities-heading"
        heading="Key capabilities"
        supporting="These are product-vision directions for a future measurement layer, not features available today."
        items={capabilities}
      />

      <SpotlightCallout
        headingId="revenue-why-heading"
        heading="More activity is not the goal. More measurable revenue is."
      >
        <p>
          EBS is intended to focus on business outcomes rather than messages
          sent, clicks, or generic automation volume. Revenue Intelligence is
          being designed as the layer that shows which activity actually turns
          into booked work.
        </p>
      </SpotlightCallout>

      <PlatformRelationship
        headingId="revenue-platform-heading"
        heading="The measurement layer for the rest of EBS."
        supporting="Revenue Intelligence is intended to sit between Growth activity and Assist recommendations — creating the measurement layer that eventually helps EBS Assist suggest better next moves."
        steps={[
          {
            name: "EBS Presence",
            href: "/products/presence",
            description: "Create the digital context customers encounter first.",
          },
          {
            name: "EBS Growth",
            href: "/products/growth",
            description: "Turn incoming demand into opportunities that can be worked.",
          },
          {
            name: "EBS Revenue Intelligence",
            href: "/products/revenue-intelligence",
            description: "Measure what activity becomes booked revenue.",
            current: true,
          },
          {
            name: "EBS Assist",
            href: "/products/assist",
            description: "Use those measured outcomes to recommend what happens next.",
          },
        ]}
      />

      <FutureProductCta
        headingId="revenue-final-cta-heading"
        headline="Start with the revenue leaks you can see today."
        supporting="EBS Revenue Intelligence is not available yet. EBS Insight can already help you understand what is holding your current website back."
        primary={{ href: getInsightUrl("/analyze"), label: "Run EBS Insight" }}
        secondary={{ href: "/products/presence", label: "Explore EBS Presence" }}
      />
    </>
  );
}
