"use client";

import { ScenicPhoto } from "@/components/brand/ScenicPhoto";
import { ButtonLink } from "@/components/marketing/ButtonLink";
import { ProductStatusBadge } from "@/components/marketing/ProductStatusBadge";
import { SpotlightNew } from "@/components/ui/spotlight-new";
import { brand } from "@/config/brand";
import { ctaCopy, getInsightUrl, pricing } from "@/config/site";
import { GET_STARTED_LINKS } from "@/lib/attribution";

const launchScope = [
  "Guided strategy and intake",
  "Approximately 5–8 core pages",
  "Mobile-first design",
  "Service-area structure",
  "Lead forms and strong calls to action",
  "Trust and review sections",
  "Analytics and tracking setup",
  "Basic on-page SEO",
  "Initial RiseCurrent Insight assessment",
  "Two revision rounds",
  "Launch and handoff into RiseCurrent Presence",
] as const;

const launchSteps = [
  {
    title: "Strategy intake",
    description:
      "We learn your services, service areas, goals, and what conversion success looks like for your business.",
  },
  {
    title: "Conversion foundation",
    description:
      "We build a clear, mobile-first site structure designed to turn visitors into calls, forms, and booked jobs.",
  },
  {
    title: "Launch + handoff",
    description:
      "We launch with tracking in place, then hand off into Presence so performance keeps improving.",
  },
] as const;

/** Isolated to prevent accidental adjacent JSX/index concatenation in preview. */
const LAUNCH_GET_STARTED_HEADING = "Ready to get started?";

export function LaunchHero() {
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
              RiseCurrent Launch
            </p>
            <ProductStatusBadge status="available" label="Available" />
          </div>
          <h1 className="mt-4 text-[2.15rem] leading-[1.12] font-bold tracking-tight text-ink sm:text-5xl lg:text-[3.25rem] lg:leading-[1.08]">
            Build a conversion foundation that turns demand into customers.
          </h1>
          <p className="mt-5 max-w-xl text-[1.0625rem] leading-7 text-ink/80 sm:text-lg sm:leading-8">
            RiseCurrent Launch is a managed, conversion-focused website
            foundation for home-service businesses — designed to turn demand
            into booked work with clear scope and a path into Presence.
          </p>
          <p className="mt-4 text-base font-semibold tracking-tight text-ink">
            {pricing.launch}
          </p>
          <p className="mt-2 text-sm text-ink/70">
            Larger or custom scopes are {pricing.custom.toLowerCase()}.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center sm:gap-x-5 sm:gap-y-3">
            <ButtonLink
              href={GET_STARTED_LINKS.launchPage.href}
              className="w-full sm:w-auto"
              trackEvent="cta_get_started_click"
              trackContext={GET_STARTED_LINKS.launchPage}
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

export function LaunchScope() {
  return (
    <section
      aria-labelledby="launch-scope-heading"
      className="mx-auto w-full max-w-7xl px-5 pt-6 pb-14 sm:px-8 sm:pt-8 sm:pb-16 lg:pt-10 lg:pb-20"
    >
      <div className="max-w-2xl">
        <p className="text-xs font-semibold tracking-[0.18em] text-teal uppercase">
          What&apos;s included
        </p>
        <h2
          id="launch-scope-heading"
          className="mt-3 text-2xl font-bold tracking-tight text-ink sm:text-3xl lg:text-[2.15rem]"
        >
          A managed conversion foundation with clear scope.
        </h2>
        <p className="mt-4 text-base leading-7 text-ink/75 sm:text-[1.05rem] sm:leading-8">
          Launch is a founder-led engagement that builds the pages, forms,
          trust signals, and tracking home-service businesses need to convert
          demand — then hands off into Presence.
        </p>
      </div>

      <ul className="mt-10 grid gap-3 sm:grid-cols-2">
        {launchScope.map((item) => (
          <li
            key={item}
            className="ebs-card flex items-start gap-3 rounded-2xl px-5 py-4"
          >
            <span
              className="mt-0.5 flex size-6 shrink-0 items-center justify-center rounded-full bg-teal/12 text-sm font-semibold text-teal"
              aria-hidden="true"
            >
              ✓
            </span>
            <span className="text-sm leading-6 text-ink/85 sm:text-[0.95rem]">
              {item}
            </span>
          </li>
        ))}
      </ul>
    </section>
  );
}

export function LaunchProcess() {
  return (
    <section
      aria-labelledby="launch-process-heading"
      className="section-sky relative overflow-hidden"
    >
      <div className="relative z-10 mx-auto w-full max-w-7xl px-5 py-14 sm:px-8 sm:py-16 lg:py-20">
        <div className="max-w-2xl">
          <p className="text-xs font-semibold tracking-[0.18em] text-teal uppercase">
            How Launch works
          </p>
          <h2
            id="launch-process-heading"
            className="mt-3 text-2xl font-bold tracking-tight text-ink sm:text-3xl lg:text-[2.15rem]"
          >
            From intake to launch to Presence.
          </h2>
        </div>

        <ol className="mt-10 grid gap-5 lg:grid-cols-3">
          {launchSteps.map((step, index) => (
            <li key={step.title} className="ebs-card rounded-2xl p-6 sm:p-7">
              <p className="text-xs font-semibold tracking-[0.18em] text-teal uppercase">
                Step {index + 1}
              </p>
              <h3 className="mt-3 text-lg font-semibold tracking-tight text-ink">
                {step.title}
              </h3>
              <p className="mt-2 text-sm leading-6 text-ink/75">
                {step.description}
              </p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

export function LaunchPricing() {
  return (
    <section
      aria-labelledby="launch-pricing-heading"
      className="mx-auto w-full max-w-7xl px-5 py-14 sm:px-8 sm:py-16 lg:py-20"
    >
      <div className="ebs-card overflow-hidden rounded-[1.75rem]">
        <div className="grid gap-0 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="px-6 py-8 sm:px-8 sm:py-10">
            <p className="text-xs font-semibold tracking-[0.18em] text-teal uppercase">
              Pricing
            </p>
            <h2
              id="launch-pricing-heading"
              className="mt-3 text-2xl font-bold tracking-tight text-ink sm:text-3xl"
            >
              {pricing.launch}
            </h2>
            <p className="mt-4 text-base leading-7 text-ink/75">
              Starting price for a conversion-focused website foundation with a
              clear handoff into RiseCurrent Presence. Larger, custom, or urgent
              work is {pricing.custom.toLowerCase()}.
            </p>
            <p className="mt-5 text-sm leading-6 text-ink/70">
              Delivered as a managed engagement with defined revision rounds.
              Larger or custom scopes are quoted separately.
            </p>
          </div>
          <div
            id="launch-get-started"
            className="scroll-mt-24 border-t border-border bg-sky/40 px-6 py-8 sm:px-8 sm:py-10 lg:border-t-0 lg:border-l"
          >
            <h3
              data-testid="launch-get-started-heading"
              className="text-lg font-semibold tracking-tight text-ink"
            >
              {LAUNCH_GET_STARTED_HEADING}
            </h3>
            <p className="mt-3 text-sm leading-6 text-ink/75">
              Tell RiseCurrent you are interested in Launch. We follow up on
              the commercial next step from there. A free Insight assessment
              is still available at the top of this page.
            </p>
            <div className="mt-6 flex flex-col gap-3">
              <ButtonLink
                href={GET_STARTED_LINKS.launchPage.href}
                className="w-full sm:w-auto"
                trackEvent="cta_get_started_click"
                trackContext={GET_STARTED_LINKS.launchPage}
              >
                {ctaCopy.getStarted}
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
          </div>
        </div>
      </div>
    </section>
  );
}

export function LaunchFinalCta() {
  return (
    <section
      aria-labelledby="launch-final-cta-heading"
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
              Insight → Launch → Presence
            </p>
            <h2
              id="launch-final-cta-heading"
              className="mt-4 text-3xl font-bold tracking-tight text-on-dark sm:text-4xl lg:text-[2.45rem] lg:leading-[1.12]"
            >
              Establish the foundation. Keep improving from there.
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-base leading-7 text-on-dark/85 sm:text-lg sm:leading-8">
              Launch builds the conversion system. Presence monitors and
              improves it over time.
            </p>
            <div className="mt-7 flex flex-col items-stretch justify-center gap-3 sm:mt-8 sm:flex-row sm:flex-wrap sm:items-center sm:gap-x-5 sm:gap-y-3">
              <ButtonLink
                href={GET_STARTED_LINKS.launchPage.href}
                className="w-full sm:w-auto"
                trackEvent="cta_get_started_click"
                trackContext={GET_STARTED_LINKS.launchPage}
              >
                {ctaCopy.getStarted}
              </ButtonLink>
              <ButtonLink
                href="/products/presence"
                variant="ghost"
                className="w-full justify-center text-on-dark hover:text-teal sm:w-auto"
                trackEvent="cta_presence_click"
              >
                {ctaCopy.presence}
              </ButtonLink>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
