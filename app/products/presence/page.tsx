import type { Metadata } from "next";
import {
  LaunchPreview,
  PresenceDecision,
  PresenceFinalCta,
  PresenceHero,
  PresenceLocalBreak,
  PresenceRelationship,
  PresenceWhy,
} from "@/components/products/PresenceSections";

export const metadata: Metadata = {
  title: {
    absolute: "EBS Presence | Build and Improve Your Online Presence",
  },
  description:
    "Already have a website? Run EBS Insight now. Need a website? EBS Launch is Coming Soon. EBS Presence is the digital foundation path for home-service businesses.",
};

export default function PresencePage() {
  return (
    <>
      <PresenceHero />
      <PresenceDecision />
      <PresenceRelationship />
      <PresenceWhy />
      <PresenceLocalBreak />
      <LaunchPreview />
      <PresenceFinalCta />
    </>
  );
}
