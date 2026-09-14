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
    "Whether you're starting from scratch or already have a website, EBS Presence helps you build, understand, and improve the digital foundation customers see first.",
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
