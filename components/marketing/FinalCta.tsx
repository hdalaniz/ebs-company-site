import { ScenicPhoto } from "@/components/brand/ScenicPhoto";
import { ButtonLink } from "@/components/marketing/ButtonLink";
import { brand } from "@/config/brand";
import { getInsightUrl } from "@/config/site";

export function FinalCta() {
  return (
    <section
      aria-labelledby="final-cta-heading"
      className="relative isolate overflow-hidden"
    >
      <ScenicPhoto
        src={brand.assets.ctaValley}
        alt={brand.photography.ctaValleyAlt}
        variant="cta"
        objectPosition="object-[center_45%]"
      />

      <div className="relative z-10 mx-auto w-full max-w-7xl px-5 py-16 sm:px-8 sm:py-20 lg:py-24">
        <div className="max-w-2xl">
          <h2
            id="final-cta-heading"
            className="text-3xl font-bold tracking-tight text-on-dark sm:text-4xl lg:text-[2.65rem] lg:leading-[1.12]"
          >
            Build a stronger system for growth.
          </h2>
          <p className="mt-5 max-w-xl text-base leading-7 text-on-dark/85 sm:text-lg sm:leading-8">
            Whether you&apos;re establishing your online presence or improving
            how existing demand becomes revenue, EBS helps you find the best
            next step.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center sm:gap-x-5 sm:gap-y-3">
            <ButtonLink
              href="/products/presence"
              className="w-full sm:w-auto"
            >
              Explore EBS Presence
            </ButtonLink>
            <ButtonLink
              href={getInsightUrl("/analyze")}
              variant="ghost"
              className="w-full text-on-dark hover:text-teal sm:w-auto"
            >
              Run EBS Insight
            </ButtonLink>
          </div>
          <p className="mt-7 text-sm font-medium tracking-wide text-on-dark/70">
            Better systems. Stronger businesses.
          </p>
        </div>
      </div>
    </section>
  );
}
