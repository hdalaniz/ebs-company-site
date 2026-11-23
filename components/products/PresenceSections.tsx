"use client";

import { ScenicPhoto } from "@/components/brand/ScenicPhoto";
import { ButtonLink } from "@/components/marketing/ButtonLink";
import { ProductStatusBadge } from "@/components/marketing/ProductStatusBadge";
import { HoverBorderGradient } from "@/components/ui/hover-border-gradient";
import { SpotlightNew } from "@/components/ui/spotlight-new";
import { brand } from "@/config/brand";
import { ctaCopy, getInsightUrl, pricing } from "@/config/site";

const presenceIncludes = [
  {
    title: "Managed hosting",
    description:
      "Reliable hosting for the conversion systems customers see first.",
  },
  {
    title: "Routine maintenance",
    description:
      "Keep the foundation healthy so small issues do not become lost jobs.",
  },
  {
    title: "Ongoing monitoring",
    description:
      "Watch performance signals that affect how demand turns into customers.",
  },
  {
    title: "Small requested changes",
    description:
      "Handle focused updates that keep the experience clear and current.",
  },
  {
    title: "Proactive monthly review",
    description:
      "A recurring look at what is working and what deserves attention next.",
  },
  {
    title: "Conversion-focused improvements",
    description:
      "Small, practical changes that strengthen the path from visit to booked work.",
  },
] as const;

const presenceNot = [
  "unlimited agency work",
  "unlimited revisions",
  "basic website maintenance only",
  "a generic marketing retainer",
] as const;

export function PresenceHero() {
  return (
    <section className="relative isolate overflow-hidden lg:min-h-[36rem]">
      <ScenicPhoto
        src={brand.assets.heroLandscape}
        alt={brand.photography.heroLandscapeAlt}
        priority
        objectPosition="object-[center_35%]"
      />

      <div className="pointer-events-none absolute inset-0 z-[1] hidden md:block">
        <SpotlightNew duration={16} xOffset={36} />
      </div>

      <div className="relative z-10 mx-auto w-full max-w-7xl px-5 pt-24 pb-14 sm:px-8 sm:pt-28 sm:pb-16 lg:pt-16 lg:pb-20">
        <div className="max-w-2xl motion-safe:animate-fade-up">
          <div className="flex flex-wrap items-center gap-3">
            <p className="text-xs font-semibold tracking-[0.18em] text-teal uppercase">
              RiseCurrent Presence
            </p>
            <ProductStatusBadge status="available" label="Available" />
          </div>
          <h1 className="mt-4 text-[2.15rem] leading-[1.12] font-bold tracking-tight text-ink sm:text-5xl lg:text-[3.25rem] lg:leading-[1.08]">
            Continuously improve the systems that turn demand into customers.
          </h1>
          <p className="mt-5 max-w-xl text-[1.0625rem] leading-7 text-ink/80 sm:text-lg sm:leading-8">
            RiseCurrent Presence monitors and improves conversion performance
            over time — so your foundation keeps working harder after launch.
          </p>
          <p className="mt-4 text-base font-semibold tracking-tight text-ink">
            {pricing.presence}
          </p>
          <p className="mt-2 text-sm text-ink/70">
            Larger or urgent work is {pricing.custom.toLowerCase()}.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center sm:gap-x-5 sm:gap-y-3">
            <ButtonLink
              href="/products/launch"
              className="w-full sm:w-auto"
              trackEvent="cta_get_started_click"
            >
              {ctaCopy.getStarted}
            </ButtonLink>
            <ButtonLink
              href={getInsightUrl("/analyze")}
              variant="ghost"
              className="w-full sm:w-auto"
              trackEvent="cta_insight_click"
            >
              {ctaCopy.insight}
            </ButtonLink>
          </div>
        </div>
      </div>
    </section>
  );
}

export function PresenceIncludes() {
  return (
    <section
      aria-labelledby="presence-includes-heading"
      className="mx-auto w-full max-w-7xl px-5 pt-6 pb-14 sm:px-8 sm:pt-8 sm:pb-16 lg:pt-10 lg:pb-20"
    >
      <div className="max-w-2xl">
        <p className="text-xs font-semibold tracking-[0.18em] text-teal uppercase">
          What Presence includes
        </p>
        <h2
          id="presence-includes-heading"
          className="mt-3 text-2xl font-bold tracking-tight text-ink sm:text-3xl lg:text-[2.15rem]"
        >
          Managed monitoring and conversion improvement.
        </h2>
        <p className="mt-4 text-base leading-7 text-ink/75 sm:text-[1.05rem] sm:leading-8">
          Presence is not unlimited agency work and not basic website
          maintenance. It is ongoing attention to the systems that help turn
          demand into booked revenue.
        </p>
      </div>

      <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {presenceIncludes.map((item) => (
          <article key={item.title} className="ebs-card rounded-2xl p-5 sm:p-6">
            <h3 className="text-lg font-semibold tracking-tight text-ink">
              {item.title}
            </h3>
            <p className="mt-2 text-sm leading-6 text-ink/75">
              {item.description}
            </p>
          </article>
        ))}
      </div>
    </section>
  );
}

export function PresenceBoundaries() {
  return (
    <section
      aria-labelledby="presence-boundaries-heading"
      className="section-sky relative overflow-hidden"
    >
      <div className="relative z-10 mx-auto w-full max-w-7xl px-5 py-14 sm:px-8 sm:py-16 lg:py-20">
        <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-start lg:gap-12">
          <div>
            <p className="text-xs font-semibold tracking-[0.18em] text-teal uppercase">
              Clear boundaries
            </p>
            <h2
              id="presence-boundaries-heading"
              className="mt-3 text-2xl font-bold tracking-tight text-ink sm:text-3xl lg:text-[2.15rem]"
            >
              Focused improvement — not an unlimited retainer.
            </h2>
            <p className="mt-4 text-base leading-7 text-ink/75 sm:text-[1.05rem] sm:leading-8">
              Presence covers monitoring, maintenance, and small
              conversion-focused improvements. Larger or urgent work is quoted
              separately so expectations stay clear.
            </p>
          </div>
          <ul className="ebs-card space-y-3 rounded-2xl p-6">
            {presenceNot.map((item) => (
              <li
                key={item}
                className="flex items-start gap-3 text-sm leading-6 text-ink/80"
              >
                <span className="mt-0.5 text-muted" aria-hidden="true">
                  —
                </span>
                <span>Not {item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

export function PresenceJourney() {
  return (
    <section
      aria-labelledby="presence-journey-heading"
      className="mx-auto w-full max-w-7xl px-5 py-14 sm:px-8 sm:py-16 lg:py-20"
    >
      <div className="max-w-2xl">
        <p className="text-xs font-semibold tracking-[0.18em] text-teal uppercase">
          Where Presence fits
        </p>
        <h2
          id="presence-journey-heading"
          className="mt-3 text-2xl font-bold tracking-tight text-ink sm:text-3xl lg:text-[2.15rem]"
        >
          Insight finds the leak. Launch builds the foundation. Presence keeps
          improving it.
        </h2>
      </div>

      <div className="mt-10 grid gap-5 lg:grid-cols-3">
        <HoverBorderGradient
          as="a"
          href={getInsightUrl("/analyze")}
          rel="noopener noreferrer"
          className="ebs-card-featured h-full overflow-hidden p-6 shadow-none sm:p-7"
        >
          <p className="text-xs font-semibold tracking-[0.18em] text-teal uppercase">
            Diagnose
          </p>
          <h3 className="mt-3 text-lg font-semibold tracking-tight text-ink">
            RiseCurrent Insight
          </h3>
          <p className="mt-2 text-sm leading-6 text-ink/75">
            Free assessment to identify where revenue is leaking.
          </p>
          <p className="mt-4 text-sm font-semibold text-teal">
            {ctaCopy.insight} →
          </p>
        </HoverBorderGradient>

        <HoverBorderGradient
          as="a"
          href="/products/launch"
          className="ebs-card h-full overflow-hidden p-6 shadow-none sm:p-7"
        >
          <p className="text-xs font-semibold tracking-[0.18em] text-teal uppercase">
            Establish
          </p>
          <h3 className="mt-3 text-lg font-semibold tracking-tight text-ink">
            RiseCurrent Launch
          </h3>
          <p className="mt-2 text-sm leading-6 text-ink/75">
            Managed conversion foundation. {pricing.launch}.
          </p>
          <p className="mt-4 text-sm font-semibold text-teal">
            {ctaCopy.launch} →
          </p>
        </HoverBorderGradient>

        <HoverBorderGradient
          as="article"
          containerClassName="shadow-[var(--shadow-card-featured)]"
          className="ebs-card-featured h-full overflow-hidden p-6 shadow-none sm:p-7"
        >
          <p className="text-xs font-semibold tracking-[0.18em] text-teal uppercase">
            Improve
          </p>
          <h3 className="mt-3 text-lg font-semibold tracking-tight text-ink">
            RiseCurrent Presence
          </h3>
          <p className="mt-2 text-sm leading-6 text-ink/75">
            Continuous monitoring and conversion improvements.{" "}
            {pricing.presence}.
          </p>
        </HoverBorderGradient>
      </div>
    </section>
  );
}

export function PresenceLocalBreak() {
  return (
    <section
      aria-labelledby="presence-local-heading"
      className="relative isolate overflow-hidden"
    >
      <div className="absolute inset-0 motion-safe:origin-center motion-safe:animate-photo-settle">
        <ScenicPhoto
          src={brand.assets.localNeighborhood}
          alt={brand.photography.localNeighborhoodAlt}
          variant="band"
          objectPosition="object-[center_40%]"
        />
      </div>

      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-gradient-to-r from-navy-deep/82 via-navy-deep/58 to-navy-deep/18 sm:via-navy-deep/50 sm:to-transparent"
      />

      <div className="relative z-10 mx-auto w-full max-w-7xl px-5 py-16 sm:px-8 sm:py-20 lg:py-24">
        <div className="max-w-2xl motion-safe:animate-fade-up">
          <h2
            id="presence-local-heading"
            className="text-3xl font-bold tracking-tight text-on-dark sm:text-4xl lg:text-[2.65rem] lg:leading-[1.12]"
          >
            Built for home-service businesses that cannot afford silent leaks.
          </h2>
          <p className="mt-5 max-w-xl text-base leading-7 text-on-dark/85 sm:text-lg sm:leading-8">
            Presence keeps attention on trust, clarity, contact paths, and the
            small conversion gaps that quietly cost booked work.
          </p>
        </div>
      </div>
    </section>
  );
}

export function PresenceFinalCta() {
  return (
    <section
      aria-labelledby="presence-final-cta-heading"
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
              {pricing.presence}
            </p>
            <h2
              id="presence-final-cta-heading"
              className="mt-4 text-3xl font-bold tracking-tight text-on-dark sm:text-4xl lg:text-[2.45rem] lg:leading-[1.12]"
            >
              Keep improving after the foundation is in place.
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-base leading-7 text-on-dark/85 sm:text-lg sm:leading-8">
              Start with Insight or Launch, then use Presence to monitor and
              strengthen conversion performance over time.
            </p>
            <div className="mt-7 flex flex-col items-stretch justify-center gap-3 sm:mt-8 sm:flex-row sm:flex-wrap sm:items-center sm:gap-x-5 sm:gap-y-3">
              <ButtonLink
                href="/products/launch"
                className="w-full sm:w-auto"
                trackEvent="cta_get_started_click"
              >
                {ctaCopy.getStarted}
              </ButtonLink>
              <ButtonLink
                href={getInsightUrl("/analyze")}
                variant="ghost"
                className="w-full justify-center text-on-dark hover:text-teal sm:w-auto"
                trackEvent="cta_insight_click"
              >
                {ctaCopy.insight}
              </ButtonLink>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
