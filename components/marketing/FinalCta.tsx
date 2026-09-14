"use client";

import { ScenicPhoto } from "@/components/brand/ScenicPhoto";
import { ButtonLink } from "@/components/marketing/ButtonLink";
import { SpotlightNew } from "@/components/ui/spotlight-new";
import { brand } from "@/config/brand";
import { getInsightUrl } from "@/config/site";

export function FinalCta() {
  return (
    <section
      aria-labelledby="final-cta-heading"
      className="relative isolate overflow-hidden"
    >
      <div className="absolute inset-0 motion-safe:origin-center motion-safe:animate-photo-settle">
        <ScenicPhoto
          src={brand.assets.ctaValley}
          alt={brand.photography.ctaValleyAlt}
          variant="cta"
          objectPosition="object-[center_45%]"
        />
      </div>

      <div className="pointer-events-none absolute inset-0 z-[1] hidden md:block">
        <SpotlightNew duration={16} xOffset={32} />
      </div>

      <div className="relative z-10 py-14 sm:py-16 lg:py-20">
        <div className="mx-auto w-[min(820px,calc(100%-48px))] rounded-[1.75rem] border border-on-dark/15 bg-on-dark/[0.09] px-6 py-7 text-center shadow-[0_28px_60px_-34px_rgba(0,0,0,0.5)] backdrop-blur-lg sm:rounded-[2rem] sm:px-10 sm:py-10 lg:px-12 lg:py-12">
          <div className="mx-auto max-w-[40rem]">
            <p className="text-xs font-semibold tracking-[0.18em] text-teal uppercase">
              Better systems. Stronger businesses.
            </p>
            <h2
              id="final-cta-heading"
              className="mt-4 text-3xl font-bold tracking-tight text-on-dark sm:text-4xl lg:text-[2.45rem] lg:leading-[1.12]"
            >
              Build a stronger system for growth.
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-base leading-7 text-on-dark/85 sm:text-lg sm:leading-8">
              Whether you&apos;re improving an existing online presence or
              building one from scratch, EBS helps you find the right next step.
            </p>
            <div className="mt-7 flex flex-col items-stretch justify-center gap-3 sm:mt-8 sm:flex-row sm:flex-wrap sm:items-center sm:gap-x-5 sm:gap-y-3">
              <ButtonLink
                href="/products/presence"
                className="w-full sm:w-auto"
              >
                Explore EBS Presence
              </ButtonLink>
              <ButtonLink
                href={getInsightUrl("/analyze")}
                variant="ghost"
                className="w-full justify-center text-on-dark hover:text-teal sm:w-auto"
              >
                Run EBS Insight
              </ButtonLink>
            </div>
            <p className="mt-6 text-sm font-medium tracking-wide text-on-dark/70 sm:mt-7">
              Built for local businesses. Designed for growth.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
