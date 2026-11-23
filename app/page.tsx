import { FinalCta } from "@/components/marketing/FinalCta";
import { FutureCapabilities } from "@/components/marketing/FutureCapabilities";
import { GrowthLoop } from "@/components/marketing/GrowthLoop";
import { Hero } from "@/components/marketing/Hero";
import { LocalBusinessBreak } from "@/components/marketing/LocalBusinessBreak";
import { PlatformPreview } from "@/components/marketing/PlatformPreview";
import { ProductPlatform } from "@/components/marketing/ProductPlatform";
import { WhyEbs } from "@/components/marketing/WhyEbs";
import { site } from "@/config/site";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    absolute: "RiseCurrent | Turn Missed Demand Into Booked Revenue",
  },
  description: site.description,
};

export default function Home() {
  return (
    <>
      <Hero />
      <ProductPlatform />
      <GrowthLoop />
      <WhyEbs />
      <LocalBusinessBreak />
      <PlatformPreview />
      <FutureCapabilities />
      <FinalCta />
    </>
  );
}
