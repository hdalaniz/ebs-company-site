import type { Metadata } from "next";
import {
  RevenueAttribution,
  RevenueCapabilities,
  RevenueFinalCta,
  RevenueHero,
  RevenueJourney,
  RevenueOpportunity,
  RevenuePlatform,
  RevenueVision,
} from "@/components/products/RevenueSections";

export const metadata: Metadata = {
  title: "EBS Revenue Intelligence",
  description:
    "A future EBS product being designed to connect lead sources, response activity, bookings, jobs, and revenue so owners can see what is working. Not currently available.",
};

export default function RevenueIntelligencePage() {
  return (
    <>
      <RevenueHero />
      <RevenueJourney />
      <RevenueVision />
      <RevenueAttribution />
      <RevenueOpportunity />
      <RevenueCapabilities />
      <RevenuePlatform />
      <RevenueFinalCta />
    </>
  );
}
