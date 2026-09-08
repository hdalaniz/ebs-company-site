import { FinalCta } from "@/components/marketing/FinalCta";
import { GrowthLoop } from "@/components/marketing/GrowthLoop";
import { Hero } from "@/components/marketing/Hero";
import { ProductPlatform } from "@/components/marketing/ProductPlatform";
import { WhyEbs } from "@/components/marketing/WhyEbs";

export default function Home() {
  return (
    <>
      <Hero />
      <ProductPlatform />
      <GrowthLoop />
      <WhyEbs />
      <FinalCta />
    </>
  );
}
