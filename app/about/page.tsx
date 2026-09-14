import type { Metadata } from "next";
import {
  AboutApproach,
  AboutAudience,
  AboutBrandStory,
  AboutFinalCta,
  AboutHero,
  AboutPositioning,
  AboutProductJourney,
  AboutWhyExists,
} from "@/components/marketing/AboutSections";

export const metadata: Metadata = {
  title: "About",
  description:
    "Elevate Business Systems is building practical software for service businesses that want to capture more demand, convert more opportunities, and understand what actually drives growth.",
};

export default function AboutPage() {
  return (
    <>
      <AboutHero />
      <AboutWhyExists />
      <AboutProductJourney />
      <AboutAudience />
      <AboutApproach />
      <AboutPositioning />
      <AboutBrandStory />
      <AboutFinalCta />
    </>
  );
}
