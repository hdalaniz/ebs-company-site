"use client";

import { useRef } from "react";
import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
} from "motion/react";
import { ScenicPhoto } from "@/components/brand/ScenicPhoto";
import { ButtonLink } from "@/components/marketing/ButtonLink";
import { SpotlightNew } from "@/components/ui/spotlight-new";
import { brand } from "@/config/brand";
import { ctaCopy, getInsightUrl, site } from "@/config/site";
import { useIsClient } from "@/lib/use-is-client";

export function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const reduceMotion = useReducedMotion();
  const isClient = useIsClient();
  const parallax = isClient && !reduceMotion;

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });
  const photoY = useTransform(scrollYProgress, [0, 1], parallax ? [0, 36] : [0, 0]);
  const photoScale = useTransform(
    scrollYProgress,
    [0, 1],
    parallax ? [1.04, 1] : [1, 1],
  );

  return (
    <section
      ref={sectionRef}
      className="relative isolate overflow-hidden lg:min-h-[40rem]"
    >
      <motion.div
        className="absolute inset-0"
        style={{ y: photoY, scale: photoScale }}
      >
        <ScenicPhoto
          src={brand.assets.heroLandscape}
          alt={brand.photography.heroLandscapeAlt}
          priority
          objectPosition="object-[center_35%]"
        />
      </motion.div>

      <div className="pointer-events-none absolute inset-0 z-[1] hidden md:block">
        <SpotlightNew />
      </div>

      <div className="relative z-10 mx-auto flex w-full max-w-7xl items-center px-5 pt-24 pb-14 sm:px-8 sm:pt-28 sm:pb-16 lg:min-h-[40rem] lg:pt-16 lg:pb-20">
        <div className="max-w-xl motion-safe:animate-fade-up">
          <p className="text-xs font-semibold tracking-[0.18em] text-teal uppercase">
            {site.companyName}
          </p>
          <h1 className="mt-4 text-[2.15rem] leading-[1.12] font-bold tracking-tight text-ink sm:text-5xl lg:text-[3.35rem] lg:leading-[1.08]">
            Turn missed demand into booked revenue.
          </h1>
          <p className="mt-5 max-w-lg text-[1.0625rem] leading-7 text-ink/80 sm:text-lg sm:leading-8">
            RiseCurrent helps home-service businesses find where leads are
            leaking, fix the conversion gaps, and build a stronger system for
            growth.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center sm:gap-x-5 sm:gap-y-3">
            <ButtonLink
              href={getInsightUrl("/analyze")}
              className="w-full sm:w-auto"
              trackEvent="cta_insight_click"
            >
              {ctaCopy.insight}
            </ButtonLink>
            <ButtonLink
              href="/products/presence"
              variant="ghost"
              className="w-full sm:w-auto"
              trackEvent="cta_presence_click"
            >
              {ctaCopy.presence}
            </ButtonLink>
          </div>
          <p className="mt-6 text-sm font-medium tracking-wide text-ink/70">
            Built for home-service businesses.
          </p>
        </div>
      </div>
    </section>
  );
}
