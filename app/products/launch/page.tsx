import type { Metadata } from "next";
import {
  LaunchFinalCta,
  LaunchHero,
  LaunchPricing,
  LaunchProcess,
  LaunchScope,
} from "@/components/products/LaunchSections";
import { pricing } from "@/config/site";

export const metadata: Metadata = {
  title: {
    absolute: "RiseCurrent Launch | Conversion Website Foundation",
  },
  description: `RiseCurrent Launch establishes a conversion-focused website foundation for home-service businesses. ${pricing.launch}.`,
};

export default function LaunchPage() {
  return (
    <>
      <LaunchHero />
      <LaunchScope />
      <LaunchProcess />
      <LaunchPricing />
      <LaunchFinalCta />
    </>
  );
}
