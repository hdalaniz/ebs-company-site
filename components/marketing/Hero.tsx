"use client";

import Link from "next/link";
import { useRef } from "react";
import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
} from "motion/react";
import { ScenicPhoto } from "@/components/brand/ScenicPhoto";
import { ButtonLink } from "@/components/marketing/ButtonLink";
import { ProductStatusBadge } from "@/components/marketing/ProductStatusBadge";
import { HoverBorderGradient } from "@/components/ui/hover-border-gradient";
import { SpotlightNew } from "@/components/ui/spotlight-new";
import { brand } from "@/config/brand";
import { ctaCopy, getInsightUrl, pricing, site } from "@/config/site";
import { trackCta } from "@/lib/analytics";
import { cn } from "@/lib/cn";
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
      className="relative isolate overflow-hidden lg:min-h-[44rem]"
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

      <div className="relative z-10 mx-auto grid w-full max-w-7xl items-center gap-8 px-5 pt-24 pb-14 sm:px-8 sm:pt-28 sm:pb-16 lg:grid-cols-[minmax(0,1.1fr)_minmax(20rem,0.9fr)] lg:gap-14 lg:pt-16 lg:pb-20">
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

        <div className="grid gap-4 motion-safe:animate-fade-up sm:grid-cols-2 lg:grid-cols-1 lg:gap-5 [animation-delay:120ms]">
          <InsightPathCard />
          <LaunchPathCard />
        </div>
      </div>
    </section>
  );
}

function InsightPathCard() {
  return (
    <HoverBorderGradient
      as="a"
      href={getInsightUrl("/analyze")}
      rel="noopener noreferrer"
      duration={1.1}
      containerClassName="shadow-[var(--shadow-card-featured)]"
      className="ebs-card-featured group relative block overflow-hidden shadow-none"
      onClick={() => trackCta("cta_insight_click")}
    >
      <span
        aria-hidden="true"
        className="absolute inset-y-3 left-0 w-1 rounded-full bg-teal/80"
      />
      <div className="grid gap-4 p-5 pl-6 sm:p-6 sm:pl-7 lg:grid-cols-[minmax(0,1fr)_7.5rem] lg:items-center lg:gap-5">
        <div>
          <div className="flex flex-wrap items-center gap-2.5">
            <p className="text-sm text-muted">Diagnose</p>
            <ProductStatusBadge status="available" label="Available" />
          </div>
          <p className="mt-2.5 text-xl font-semibold tracking-tight text-ink sm:text-[1.35rem]">
            RiseCurrent Insight
          </p>
          <p className="mt-2 text-[0.95rem] leading-6 text-ink/75">
            Find the leak. {pricing.insight} assessment.
          </p>
          <p className="mt-4 inline-flex items-center gap-1.5 rounded-full bg-teal/12 px-3 py-1.5 text-sm font-semibold text-teal motion-safe:transition-transform motion-safe:duration-200 motion-safe:group-hover:translate-x-0.5">
            {ctaCopy.insight}
            <span aria-hidden="true">→</span>
          </p>
        </div>
        <InsightPreviewMini />
      </div>
    </HoverBorderGradient>
  );
}

function LaunchPathCard() {
  return (
    <HoverBorderGradient
      as={Link}
      href="/products/launch"
      duration={1.25}
      className="ebs-card-muted group relative block overflow-hidden shadow-none"
      onClick={() => trackCta("cta_launch_click")}
    >
      <span
        aria-hidden="true"
        className="absolute inset-y-3 left-0 w-1 rounded-full bg-navy/25"
      />
      <div className="grid gap-4 p-5 pl-6 sm:p-6 sm:pl-7 lg:grid-cols-[minmax(0,1fr)_7.5rem] lg:items-center lg:gap-5">
        <div>
          <div className="flex flex-wrap items-center gap-2.5">
            <p className="text-sm text-muted">Establish</p>
            <ProductStatusBadge status="available" label="Available" />
          </div>
          <p className="mt-2.5 text-xl font-semibold tracking-tight text-ink sm:text-[1.35rem]">
            RiseCurrent Launch
          </p>
          <p className="mt-2 text-[0.95rem] leading-6 text-ink/75">
            Build the conversion foundation. {pricing.launch}.
          </p>
          <p className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-teal motion-safe:transition-transform motion-safe:duration-200 motion-safe:group-hover:translate-x-0.5">
            {ctaCopy.launch}
            <span aria-hidden="true">→</span>
          </p>
        </div>
        <LaunchPreviewMini />
      </div>
    </HoverBorderGradient>
  );
}

function InsightPreviewMini() {
  return (
    <div
      aria-hidden="true"
      className="rounded-xl border border-border bg-white p-2.5 shadow-[0_10px_24px_-18px_rgba(14,36,56,0.35)]"
    >
      <div className="flex items-center gap-1 border-b border-border pb-1.5">
        <span className="size-1.5 rounded-full bg-navy/20" />
        <span className="size-1.5 rounded-full bg-navy/20" />
        <span className="size-1.5 rounded-full bg-teal/55" />
      </div>
      <p className="mt-2 text-[0.62rem] font-semibold tracking-[0.12em] text-muted uppercase">
        Growth Score
      </p>
      <div className="mt-1 flex items-end justify-between gap-2">
        <p className="text-xl font-semibold tracking-tight text-ink">78</p>
        <svg viewBox="0 0 40 18" className="mb-1 h-4 w-10 text-teal">
          <path
            d="M1 14 10 10l8 4 10-10 10 4"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
      <p className="mt-1 text-[0.68rem] leading-4 text-ink/65">
        3 opportunities found
      </p>
    </div>
  );
}

function LaunchPreviewMini() {
  return (
    <div
      aria-hidden="true"
      className="rounded-xl border border-border bg-white/90 p-2.5 shadow-[0_10px_24px_-18px_rgba(14,36,56,0.28)]"
    >
      <p className="text-[0.62rem] font-semibold tracking-[0.12em] text-teal uppercase">
        Conversion foundation
      </p>
      <p className="mt-1 text-[0.72rem] font-medium text-ink">Managed launch</p>
      <div className="mt-2.5 grid grid-cols-3 gap-1.5">
        {[
          ["#143049", "#1ec8a5", "#e6eef4"],
          ["#4d6b5a", "#1ec8a5", "#f6f3ee"],
          ["#0e2438", "#17b395", "#ffffff"],
        ].map((tones, index) => (
          <div
            key={tones.join("-")}
            className={cn(
              "overflow-hidden rounded-md border",
              index === 0 ? "border-teal/55 ring-1 ring-teal/25" : "border-border",
            )}
          >
            <div className="flex h-5">
              {tones.map((tone) => (
                <span
                  key={tone}
                  className="h-full flex-1"
                  style={{ backgroundColor: tone }}
                />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
