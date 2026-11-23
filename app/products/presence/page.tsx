import type { Metadata } from "next";
import {
  PresenceBoundaries,
  PresenceFinalCta,
  PresenceHero,
  PresenceIncludes,
  PresenceJourney,
  PresenceLocalBreak,
} from "@/components/products/PresenceSections";
import { pricing } from "@/config/site";

export const metadata: Metadata = {
  title: {
    absolute: "RiseCurrent Presence | Monitor and Improve Conversion",
  },
  description: `RiseCurrent Presence continuously monitors and improves the systems that help turn demand into customers. ${pricing.presence}.`,
};

export default function PresencePage() {
  return (
    <>
      <PresenceHero />
      <PresenceIncludes />
      <PresenceBoundaries />
      <PresenceJourney />
      <PresenceLocalBreak />
      <PresenceFinalCta />
    </>
  );
}
