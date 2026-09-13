import type { Metadata } from "next";
import { AssistPreview } from "@/components/products/AssistPreview";
import {
  FutureProductCta,
  FutureProductHero,
  FutureProductPreviewSection,
  IdeaCardGrid,
  PlatformRelationship,
  StageFlow,
} from "@/components/products/FutureProductSections";
import { SectionHeading } from "@/components/marketing/SectionHeading";
import { getInsightUrl } from "@/config/site";

export const metadata: Metadata = {
  title: "EBS Assist",
  description:
    "A future EBS intelligence layer designed to recommend, prioritize, and draft the next best business actions. Not currently available and does not take autonomous actions today.",
};

const positioning = [
  {
    title: "Recommendation",
    description:
      "Designed to identify what deserves attention based on business signals — not to act on its own.",
  },
  {
    title: "Prioritization",
    description:
      "Planned to rank opportunities so owners can see the highest-value next move first.",
  },
  {
    title: "Drafting",
    description:
      "Future capability for preparing suggested follow-ups and requests a person can review.",
  },
  {
    title: "Decision support",
    description:
      "Designed to help a person choose the next action. It is not an autonomous AI employee.",
  },
] as const;

const maturityStages = [
  {
    label: "Recommend",
    detail: "EBS identifies what deserves attention.",
  },
  {
    label: "Approve",
    detail: "A person reviews suggested actions.",
  },
  {
    label: "Automate Safely",
    detail:
      "Future bounded workflows may execute approved actions with controls and auditability.",
    current: true,
  },
] as const;

export default function AssistPage() {
  return (
    <>
      <FutureProductHero
        eyebrow="EBS Assist"
        status="future"
        headline={
          <>
            Know your{" "}
            <span className="text-teal">next best move.</span>
          </>
        }
        description="EBS Assist is the future intelligence layer of the EBS platform — designed to use business signals and measured outcomes to recommend the highest-value next actions."
      />

      <IdeaCardGrid
        headingId="assist-purpose-heading"
        heading="Decision support first. Automation only later."
        supporting="EBS Assist is intended to begin as recommendation, prioritization, drafting, and decision support. Bounded automation is a later stage, not the starting point."
        items={positioning}
      />

      <FutureProductPreviewSection
        headingId="assist-preview-heading"
        heading="A look at the intended Assist experience."
        supporting="This is a future product vision. The actions below are conceptual and are not currently automated."
      >
        <AssistPreview />
      </FutureProductPreviewSection>

      <section
        aria-labelledby="assist-maturity-heading"
        className="mx-auto w-full max-w-7xl px-5 pt-2 pb-12 sm:px-8 sm:pt-4 sm:pb-16 lg:pt-6 lg:pb-20"
      >
        <SectionHeading
          headingId="assist-maturity-heading"
          heading="Recommend. Approve. Automate safely."
          supporting="This progression reflects EBS’s bounded-AI philosophy: people stay in control, and automation is only considered after recommendation and approval."
        />
        <div className="ebs-card mt-8 p-5 sm:p-8">
          <StageFlow
            ariaLabel="Assist maturity model"
            variant="cards"
            stages={maturityStages}
          />
        </div>
      </section>

      <PlatformRelationship
        headingId="assist-platform-heading"
        heading="Assist uses the rest of the platform as signal."
        supporting="Presence creates context. Growth creates workflow activity. Revenue Intelligence measures outcomes. Assist is intended to use those signals to recommend what happens next."
        steps={[
          {
            name: "EBS Presence",
            href: "/products/presence",
            description: "Creates context through the digital front door.",
          },
          {
            name: "EBS Growth",
            href: "/products/growth",
            description: "Creates workflow activity around incoming demand.",
          },
          {
            name: "EBS Revenue Intelligence",
            href: "/products/revenue-intelligence",
            description: "Measures which activity becomes booked revenue.",
          },
          {
            name: "EBS Assist",
            href: "/products/assist",
            description: "Uses those signals to recommend the next best move.",
            current: true,
          },
        ]}
        loopNote="Then the cycle continues: better context, better activity, better measurement, and better recommendations."
      />

      <FutureProductCta
        headingId="assist-final-cta-heading"
        headline="The first step is understanding the opportunity."
        supporting="EBS Assist is a future product. The useful next step today is still to understand and strengthen the presence customers see first."
        primary={{ href: "/products/presence", label: "Explore EBS Presence" }}
        secondary={{ href: getInsightUrl("/analyze"), label: "Run EBS Insight" }}
      />
    </>
  );
}
