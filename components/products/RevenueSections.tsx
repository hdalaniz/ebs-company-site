"use client";

import Image from "next/image";
import Link from "next/link";
import { RevenuePreview } from "@/components/products/RevenuePreview";
import { ScenicPhoto } from "@/components/brand/ScenicPhoto";
import { ButtonLink } from "@/components/marketing/ButtonLink";
import { ProductStatusBadge } from "@/components/marketing/ProductStatusBadge";
import { HoverBorderGradient } from "@/components/ui/hover-border-gradient";
import {
  JourneyReveal,
  JourneyStep,
} from "@/components/ui/journey-reveal";
import { SpotlightNew } from "@/components/ui/spotlight-new";
import { brand } from "@/config/brand";
import { ctaCopy, getInsightUrl } from "@/config/site";
import { cn } from "@/lib/cn";

const heroSources = [
  { label: "Google", icon: "google" as const },
  { label: "Website", icon: "website" as const },
  { label: "Referral", icon: "referral" as const },
  { label: "Ads", icon: "ads" as const },
] as const;

const heroStages = [
  { label: "Leads", note: "Demand captured", featured: false },
  { label: "Bookings", note: "Work committed", featured: false },
  { label: "Revenue", note: "Impact visible", featured: true },
] as const;

const journeyStages = [
  {
    title: "Source",
    description: "Where the opportunity started",
    icon: "source" as const,
  },
  {
    title: "Lead",
    description: "A customer raises their hand",
    icon: "lead" as const,
  },
  {
    title: "Response",
    description: "The business engages",
    icon: "response" as const,
  },
  {
    title: "Booking",
    description: "The opportunity commits",
    icon: "booking" as const,
  },
  {
    title: "Job",
    description: "Work is completed",
    icon: "job" as const,
  },
  {
    title: "Revenue",
    description: "Business impact becomes visible",
    icon: "revenue" as const,
  },
] as const;

const sourceMix = [
  { label: "Google Search", bookings: 34, width: "100%" },
  { label: "Website", bookings: 15, width: "44%" },
  { label: "Referral", bookings: 8, width: "24%" },
  { label: "Paid Ads", bookings: 4, width: "12%" },
] as const;

const capabilities = [
  {
    title: "Source Attribution",
    label: "Origin",
    description: "Designed to help owners understand where demand originates.",
    icon: "source" as const,
  },
  {
    title: "Booking Measurement",
    label: "Conversion",
    description:
      "Planned to show which opportunities become booked work — not just lead volume.",
    icon: "booking" as const,
  },
  {
    title: "Revenue Influence",
    label: "Impact",
    description:
      "Designed to connect customer activity to the business impact that follows.",
    icon: "revenue" as const,
  },
  {
    title: "Opportunity Detection",
    label: "Recovery",
    description:
      "Future capability for surfacing places where revenue may be leaking.",
    icon: "opportunity" as const,
  },
] as const;

const platformSteps = [
  {
    name: "EBS Presence",
    role: "Foundation",
    href: "/products/presence",
    detail: "Create the digital front door",
    current: false,
  },
  {
    name: "EBS Growth",
    role: "Conversion",
    href: "/products/growth",
    detail: "Work the opportunities",
    current: false,
  },
  {
    name: "EBS Revenue Intelligence",
    role: "Measurement",
    href: "/products/revenue-intelligence",
    detail: "Measure what actually became business",
    current: true,
  },
  {
    name: "EBS Assist",
    role: "Next Best Action",
    href: "/products/assist",
    detail: "Recommend what happens next",
    current: false,
  },
] as const;

export function RevenueHero() {
  return (
    <section className="relative isolate overflow-hidden">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-gradient-to-b from-sky/40 via-warm to-warm"
      />

      <div className="relative z-10 mx-auto grid w-full max-w-7xl items-center gap-10 px-5 pt-12 pb-10 sm:px-8 sm:pt-16 sm:pb-12 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] lg:gap-14 lg:pt-20 lg:pb-14">
        <div className="motion-safe:animate-fade-up">
          <p className="inline-flex rounded-full border border-teal/20 bg-teal/10 px-3 py-1 text-xs font-semibold tracking-[0.18em] text-teal uppercase">
            EBS Revenue Intelligence
          </p>
          <div className="mt-4">
            <ProductStatusBadge status="coming-soon" />
          </div>
          <h1 className="mt-5 max-w-2xl text-[2.05rem] leading-[1.08] font-bold tracking-tight text-ink sm:text-5xl lg:text-[3.25rem]">
            Know what actually{" "}
            <span className="text-teal">drives revenue.</span>
          </h1>
          <p className="mt-6 max-w-xl text-[1.0625rem] leading-7 text-ink/80 sm:text-lg sm:leading-8">
            EBS Revenue Intelligence is being designed to connect lead sources,
            response activity, bookings, jobs, and revenue so service businesses
            can see what is working and where opportunities are being lost.
          </p>
          <p className="mt-5 max-w-lg text-sm font-medium leading-6 text-ink/70 sm:text-[0.95rem]">
            Built to help local service businesses see the path from demand to
            booked work.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center sm:gap-x-5 sm:gap-y-3">
            <ButtonLink
              href={getInsightUrl("/analyze")}
              className="w-full sm:w-auto"
            >
              {ctaCopy.insight}
            </ButtonLink>
            <ButtonLink
              href="/products/presence"
              variant="ghost"
              className="w-full sm:w-auto"
            >
              {ctaCopy.presence}
            </ButtonLink>
          </div>
        </div>

        <div className="relative motion-safe:animate-fade-up [animation-delay:120ms]">
          <SourceToRevenueVisual />
        </div>
      </div>
    </section>
  );
}

function SourceToRevenueVisual() {
  return (
    <div className="relative overflow-hidden rounded-[1.75rem] border border-navy/15 bg-white shadow-[0_28px_60px_-34px_rgba(14,36,56,0.4)]">
      <div className="absolute inset-0" aria-hidden="true">
        <Image
          src={brand.assets.heroLandscape}
          alt=""
          fill
          sizes="(max-width: 1024px) 90vw, 42rem"
          className="object-cover object-[center_35%] opacity-55"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-white/90 via-white/82 to-sky/75" />
      </div>

      <div className="relative z-10 p-5 sm:p-6">
        <p className="text-[0.62rem] font-semibold tracking-[0.16em] text-teal uppercase">
          Conceptual source-to-revenue flow
        </p>

        <ul className="mt-4 grid grid-cols-2 gap-2 sm:grid-cols-4">
          {heroSources.map((source) => (
            <li
              key={source.label}
              className="rounded-xl border border-navy/10 bg-white/90 px-3 py-3 text-center shadow-[0_10px_22px_-18px_rgba(14,36,56,0.35)]"
            >
              <span className="mx-auto flex size-8 items-center justify-center rounded-full border border-teal/25 bg-teal/10 text-teal">
                <SourceIcon type={source.icon} />
              </span>
              <p className="mt-2 text-xs font-semibold tracking-wide text-ink">
                {source.label}
              </p>
            </li>
          ))}
        </ul>

        <p className="my-3 text-center text-lg font-semibold text-teal" aria-hidden="true">
          ↓
        </p>

        <ol className="space-y-2">
          {heroStages.map((stage) => (
            <li
              key={stage.label}
              className={cn(
                "flex items-center justify-between gap-3 rounded-2xl border px-4 py-3",
                stage.featured
                  ? "border-teal/35 bg-teal/10 shadow-[0_14px_28px_-22px_rgba(30,200,165,0.45)]"
                  : "border-navy/10 bg-white/92",
              )}
            >
              <div>
                <p className="text-sm font-semibold tracking-tight text-ink">
                  {stage.label}
                </p>
                <p className="text-xs leading-5 text-ink/65">{stage.note}</p>
              </div>
              {stage.featured ? (
                <span className="text-[0.62rem] font-semibold tracking-[0.14em] text-teal uppercase">
                  Visible impact
                </span>
              ) : null}
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
}

export function RevenueJourney() {
  return (
    <section
      aria-labelledby="revenue-journey-heading"
      className="section-sky section-topo relative overflow-hidden"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 h-12 bg-gradient-to-b from-warm/80 to-transparent"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 bottom-0 h-12 bg-gradient-to-t from-warm/70 to-transparent"
      />

      <div className="relative z-10 mx-auto w-full max-w-7xl px-5 py-14 sm:px-8 sm:py-16 lg:py-20">
        <div>
          <p className="text-xs font-semibold tracking-[0.18em] text-teal uppercase">
            Source to booked revenue
          </p>
          <h2
            id="revenue-journey-heading"
            className="mt-3 max-w-2xl text-2xl font-bold tracking-tight text-ink sm:text-3xl lg:text-[2.15rem]"
          >
            From lead source to booked revenue.
          </h2>
          <p className="mt-4 max-w-2xl text-base leading-7 text-ink/75 sm:text-[1.05rem] sm:leading-8">
            The product is being designed to make this chain visible — so owners
            can see what becomes booked work, not just what created activity.
          </p>
        </div>

        <div className="relative mt-10 lg:mt-12">
          <RisingPathGraphic />
          <JourneyReveal className="relative grid grid-cols-1 gap-5 xl:grid-cols-6 xl:gap-3">
            {journeyStages.map((stage, index) => (
              <JourneyStep
                key={stage.title}
                className={cn(
                  "group/step opacity-100",
                  index === 1 && "xl:mt-2",
                  index === 2 && "xl:mt-4",
                  index === 3 && "xl:mt-6",
                  index === 4 && "xl:mt-8",
                  index === 5 && "xl:mt-10",
                )}
              >
                <HoverBorderGradient
                  as="article"
                  duration={1.2}
                  className="group relative h-full overflow-hidden bg-white p-5 shadow-none"
                >
                  <span
                    aria-hidden="true"
                    className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-teal/70 to-teal/20"
                  />
                  <div className="flex items-center gap-3">
                    <span className="flex size-11 items-center justify-center rounded-full border border-teal/30 bg-teal/10 text-teal">
                      <JourneyIcon type={stage.icon} />
                    </span>
                    <p className="text-xs font-semibold tracking-[0.18em] text-teal uppercase">
                      {String(index + 1).padStart(2, "0")}
                    </p>
                  </div>
                  <h3 className="mt-4 text-lg font-semibold tracking-tight text-ink">
                    {stage.title}
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-ink/75">
                    {stage.description}
                  </p>
                </HoverBorderGradient>
              </JourneyStep>
            ))}
          </JourneyReveal>
        </div>
      </div>
    </section>
  );
}

export function RevenueVision() {
  return (
    <section
      aria-labelledby="revenue-preview-heading"
      className="relative overflow-hidden bg-gradient-to-b from-warm via-warm to-[color-mix(in_srgb,var(--brand-sky)_22%,var(--brand-warm))]"
    >
      <div className="mx-auto w-full max-w-7xl px-5 py-14 sm:px-8 sm:py-16 lg:py-20">
        <div>
          <p className="text-xs font-semibold tracking-[0.18em] text-teal uppercase">
            Product vision preview
          </p>
          <h2
            id="revenue-preview-heading"
            className="mt-3 max-w-2xl text-2xl font-bold tracking-tight text-ink sm:text-3xl lg:text-[2.15rem]"
          >
            A clearer view of what became business.
          </h2>
          <p className="mt-4 max-w-2xl text-base leading-7 text-ink/75 sm:text-[1.05rem] sm:leading-8">
            Illustrative product preview — not customer data. These figures show
            the intended measurement layer, not live results.
          </p>
        </div>
        <div className="mt-8 rounded-[1.5rem] bg-gradient-to-b from-white to-sky/20 p-1">
          <RevenuePreview />
        </div>
      </div>
    </section>
  );
}

export function RevenueAttribution() {
  return (
    <section
      aria-labelledby="revenue-attribution-heading"
      className="relative overflow-hidden bg-warm"
    >
      <div className="mx-auto w-full max-w-7xl px-5 pb-14 sm:px-8 sm:pb-16 lg:pb-20">
        <div className="ebs-card overflow-hidden p-5 sm:p-7 lg:p-8">
          <div className="flex flex-wrap items-start justify-between gap-3">
            <div>
              <p className="text-xs font-semibold tracking-[0.18em] text-teal uppercase">
                Illustrative source mix
              </p>
              <h2
                id="revenue-attribution-heading"
                className="mt-3 max-w-xl text-2xl font-bold tracking-tight text-ink sm:text-3xl"
              >
                Where booked work started.
              </h2>
              <p className="mt-3 max-w-xl text-sm leading-6 text-ink/75 sm:text-base sm:leading-7">
                A friendly conceptual breakdown — not a performance claim, and
                not a record of real campaigns.
              </p>
            </div>
            <p className="rounded-full border border-navy/12 bg-sky/70 px-3 py-1 text-[0.68rem] font-semibold tracking-[0.14em] text-muted uppercase">
              Fictional example
            </p>
          </div>

          <ul className="mt-8 space-y-5">
            {sourceMix.map((source) => (
              <li key={source.label}>
                <div className="flex flex-wrap items-baseline justify-between gap-2">
                  <p className="text-sm font-semibold text-ink sm:text-base">
                    {source.label}
                  </p>
                  <p className="text-sm font-medium tabular-nums text-ink/80">
                    {source.bookings} bookings
                  </p>
                </div>
                <div className="mt-2 h-3 overflow-hidden rounded-full bg-navy/8">
                  <div
                    className="h-full rounded-full bg-gradient-to-r from-teal to-teal-secondary"
                    style={{ width: source.width }}
                  />
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

export function RevenueOpportunity() {
  return (
    <section
      aria-labelledby="revenue-opportunity-heading"
      className="relative overflow-hidden bg-gradient-to-b from-warm to-[color-mix(in_srgb,var(--brand-sky)_28%,var(--brand-warm))]"
    >
      <div className="mx-auto w-full max-w-7xl px-5 pb-14 sm:px-8 sm:pb-16 lg:pb-20">
        <article className="overflow-hidden rounded-[1.5rem] border border-teal/30 bg-gradient-to-br from-teal/10 via-white to-sky/40 shadow-[0_22px_50px_-28px_rgba(14,36,56,0.32)]">
          <div className="grid gap-0 lg:grid-cols-[minmax(0,1.2fr)_minmax(0,0.8fr)]">
            <div className="p-6 sm:p-8 lg:p-10">
              <p className="text-xs font-semibold tracking-[0.18em] text-teal uppercase">
                Revenue opportunity
              </p>
              <h2
                id="revenue-opportunity-heading"
                className="mt-3 max-w-xl text-2xl font-bold tracking-tight text-ink sm:text-3xl"
              >
                12 leads were not contacted within the target response window.
              </h2>
              <p className="mt-4 max-w-xl text-sm font-medium text-muted">
                Why this matters
              </p>
              <p className="mt-1 max-w-xl text-base leading-7 text-ink/80">
                Slow response can reduce the chance that existing demand becomes
                booked work.
              </p>
              <p className="mt-5 inline-flex items-center gap-1.5 rounded-full border border-teal/25 bg-white px-3.5 py-2 text-sm font-semibold text-teal">
                Suggested next step: Review lead-response workflow
                <span aria-hidden="true">→</span>
              </p>
              <p className="mt-4 text-sm leading-6 text-muted">
                Conceptual only — not a live recommendation or working action.
              </p>
            </div>
            <div className="border-t border-teal/20 bg-white/70 p-6 sm:p-8 lg:border-t-0 lg:border-l">
              <p className="text-xs font-semibold tracking-[0.18em] text-teal uppercase">
                Connected to Growth
              </p>
              <p className="mt-3 text-lg font-semibold tracking-tight text-ink">
                Measurement is designed to point back to follow-through.
              </p>
              <p className="mt-3 text-sm leading-6 text-ink/75">
                Revenue Intelligence is intended to surface leaks like delayed
                response so EBS Growth can help owners work those opportunities
                while they are still warm.
              </p>
              <Link
                href="/products/growth"
                className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-teal transition-colors hover:text-teal-hover focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-teal"
              >
                Preview EBS Growth
                <span aria-hidden="true">→</span>
              </Link>
            </div>
          </div>
        </article>
      </div>
    </section>
  );
}

export function RevenueCapabilities() {
  return (
    <section
      aria-labelledby="revenue-capabilities-heading"
      className="relative overflow-hidden bg-gradient-to-b from-[color-mix(in_srgb,var(--brand-sky)_25%,var(--brand-warm))] via-warm to-warm"
    >
      <div className="mx-auto w-full max-w-7xl px-5 py-14 sm:px-8 sm:py-16 lg:py-20">
        <div>
          <p className="text-xs font-semibold tracking-[0.18em] text-teal uppercase">
            Product direction
          </p>
          <h2
            id="revenue-capabilities-heading"
            className="mt-3 max-w-2xl text-2xl font-bold tracking-tight text-ink sm:text-3xl lg:text-[2.15rem]"
          >
            Planned capabilities
          </h2>
          <p className="mt-4 max-w-2xl text-base leading-7 text-ink/75 sm:text-[1.05rem] sm:leading-8">
            These are product-vision directions for a future measurement layer,
            not features available today.
          </p>
        </div>

        <div className="mt-10 grid gap-5 sm:grid-cols-2">
          {capabilities.map((capability) => (
            <HoverBorderGradient
              key={capability.title}
              as="article"
              duration={1.25}
              className="group overflow-hidden bg-white p-0 shadow-none"
            >
              <div className="border-b border-border bg-gradient-to-br from-sky via-white to-teal/10 px-5 py-4 sm:px-6">
                <div className="flex items-center justify-between gap-3">
                  <span className="flex size-11 items-center justify-center rounded-full border border-teal/30 bg-white text-teal">
                    <JourneyIcon type={capability.icon} />
                  </span>
                  <p className="text-[0.68rem] font-semibold tracking-[0.16em] text-teal uppercase">
                    {capability.label}
                  </p>
                </div>
              </div>
              <div className="px-5 py-5 sm:px-6 sm:py-6">
                <h3 className="text-lg font-semibold tracking-tight text-ink">
                  {capability.title}
                </h3>
                <p className="mt-2 text-sm leading-6 text-ink/75 sm:text-[0.95rem] sm:leading-7">
                  {capability.description}
                </p>
              </div>
            </HoverBorderGradient>
          ))}
        </div>
      </div>
    </section>
  );
}

export function RevenuePlatform() {
  return (
    <section
      aria-labelledby="revenue-platform-heading"
      className="section-sky relative overflow-hidden"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 h-12 bg-gradient-to-b from-warm/70 to-transparent"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 bottom-0 h-12 bg-gradient-to-t from-warm/70 to-transparent"
      />

      <div className="relative z-10 mx-auto w-full max-w-7xl px-5 py-14 sm:px-8 sm:py-16 lg:py-20">
        <div>
          <p className="text-xs font-semibold tracking-[0.18em] text-teal uppercase">
            Platform progression
          </p>
          <h2
            id="revenue-platform-heading"
            className="mt-3 max-w-2xl text-2xl font-bold tracking-tight text-ink sm:text-3xl lg:text-[2.15rem]"
          >
            Where Revenue Intelligence sits in the EBS platform.
          </h2>
          <p className="mt-4 max-w-2xl text-base leading-7 text-ink/75 sm:text-[1.05rem] sm:leading-8">
            Presence creates the digital front door. Growth works the
            opportunities. Revenue Intelligence measures what actually became
            business. Assist can eventually use those outcomes to recommend the
            next move.
          </p>
        </div>

        <ol className="relative mt-10 grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-4 xl:gap-4">
          <span
            aria-hidden="true"
            className="pointer-events-none absolute top-12 right-8 left-8 hidden h-px bg-gradient-to-r from-teal/30 via-teal/45 to-teal/25 xl:block"
          />
          {platformSteps.map((step, index) => {
            const content = (
              <>
                <p className="text-[0.68rem] font-semibold tracking-[0.16em] text-teal uppercase">
                  {step.role}
                </p>
                <h3 className="mt-2 text-lg font-semibold tracking-tight text-ink">
                  {step.name}
                </h3>
                <p className="mt-2 text-sm leading-6 text-ink/75">{step.detail}</p>
                {step.current ? (
                  <p className="mt-4 inline-flex rounded-full border border-teal/35 bg-teal/12 px-2.5 py-1 text-xs font-semibold tracking-wide text-teal uppercase">
                    You are here
                  </p>
                ) : null}
              </>
            );

            return (
              <li key={step.name} className="relative">
                {index < platformSteps.length - 1 ? (
                  <span
                    aria-hidden="true"
                    className="pointer-events-none absolute top-full left-6 h-5 w-px bg-gradient-to-b from-teal/35 to-transparent md:hidden"
                  />
                ) : null}
                {step.current ? (
                  <div className="ebs-card relative z-10 h-full rounded-2xl p-5 shadow-[0_22px_50px_-28px_rgba(30,200,165,0.45)] ring-1 ring-teal/30 sm:p-6">
                    {content}
                  </div>
                ) : (
                  <Link
                    href={step.href}
                    className="ebs-card relative z-10 block h-full rounded-2xl bg-white/80 p-5 opacity-90 transition-[opacity,transform] hover:opacity-100 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-teal motion-safe:hover:-translate-y-0.5 sm:p-6"
                  >
                    {content}
                  </Link>
                )}
              </li>
            );
          })}
        </ol>
      </div>
    </section>
  );
}

export function RevenueFinalCta() {
  return (
    <section
      aria-labelledby="revenue-final-cta-heading"
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
              id="revenue-final-cta-heading"
              className="mt-4 text-3xl font-bold tracking-tight text-on-dark sm:text-4xl lg:text-[2.45rem] lg:leading-[1.12]"
            >
              Start with the revenue leaks you can see today.
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-base leading-7 text-on-dark/85 sm:text-lg sm:leading-8">
              Revenue Intelligence is coming soon. EBS Insight can already help
              identify where your digital presence may be losing opportunities.
            </p>
            <div className="mt-7 flex flex-col items-stretch justify-center gap-3 sm:mt-8 sm:flex-row sm:flex-wrap sm:items-center sm:gap-x-5 sm:gap-y-3">
              <ButtonLink
                href={getInsightUrl("/analyze")}
                className="w-full sm:w-auto"
              >
                {ctaCopy.insight}
              </ButtonLink>
              <ButtonLink
                href="/products/presence"
                variant="ghost"
                className="w-full justify-center text-on-dark hover:text-teal sm:w-auto"
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

function RisingPathGraphic() {
  return (
    <>
      <svg
        aria-hidden="true"
        viewBox="0 0 1000 120"
        preserveAspectRatio="none"
        className="pointer-events-none absolute top-[2.85rem] right-0 left-0 hidden h-16 w-full xl:block"
      >
        <path
          d="M36 92 C170 92, 230 78, 360 68 C490 58, 560 44, 700 34 C820 26, 900 20, 964 16"
          fill="none"
          stroke="color-mix(in srgb, var(--teal) 35%, transparent)"
          strokeWidth="3"
          strokeLinecap="round"
        />
        <path
          d="M36 92 C170 92, 230 78, 360 68 C490 58, 560 44, 700 34 C820 26, 900 20, 964 16"
          fill="none"
          stroke="color-mix(in srgb, var(--teal) 55%, transparent)"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeDasharray="4 8"
        />
      </svg>
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-8 bottom-8 left-6 w-px bg-gradient-to-b from-teal/50 via-teal/25 to-transparent xl:hidden"
      />
    </>
  );
}

function SourceIcon({
  type,
}: {
  type: (typeof heroSources)[number]["icon"];
}) {
  const className = "size-3.5";
  if (type === "google") {
    return (
      <svg viewBox="0 0 16 16" className={className} aria-hidden="true">
        <circle
          cx="7"
          cy="7"
          r="4.2"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.4"
        />
        <path
          d="m10.2 10.2 3 3"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.4"
          strokeLinecap="round"
        />
      </svg>
    );
  }
  if (type === "website") {
    return (
      <svg viewBox="0 0 16 16" className={className} aria-hidden="true">
        <rect
          x="2.5"
          y="3.5"
          width="11"
          height="9"
          rx="1.5"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.4"
        />
        <path
          d="M2.5 6.2h11"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.3"
        />
      </svg>
    );
  }
  if (type === "referral") {
    return (
      <svg viewBox="0 0 16 16" className={className} aria-hidden="true">
        <circle
          cx="5.5"
          cy="6"
          r="2"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.3"
        />
        <circle
          cx="10.5"
          cy="6"
          r="2"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.3"
        />
        <path
          d="M2.8 12.2c.4-1.7 1.6-2.6 2.7-2.6s2.3.9 2.7 2.6M8.8 12.2c.4-1.7 1.6-2.6 2.7-2.6s2.3.9 2.7 2.6"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.3"
          strokeLinecap="round"
        />
      </svg>
    );
  }
  return (
    <svg viewBox="0 0 16 16" className={className} aria-hidden="true">
      <path
        d="M3.5 11.5 6.5 8l2 2 4-5"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function JourneyIcon({
  type,
}: {
  type: (typeof journeyStages)[number]["icon"] | "opportunity";
}) {
  const className = "size-4";
  if (type === "source") {
    return (
      <svg viewBox="0 0 16 16" className={className} aria-hidden="true">
        <circle
          cx="8"
          cy="8"
          r="5.25"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.4"
        />
        <circle cx="8" cy="8" r="1.4" fill="currentColor" />
      </svg>
    );
  }
  if (type === "lead") {
    return (
      <svg viewBox="0 0 16 16" className={className} aria-hidden="true">
        <circle
          cx="8"
          cy="5.5"
          r="2.2"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.4"
        />
        <path
          d="M3.8 13c.5-2.4 2-3.6 4.2-3.6S12.7 10.6 13.2 13"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.4"
          strokeLinecap="round"
        />
      </svg>
    );
  }
  if (type === "response") {
    return (
      <svg viewBox="0 0 16 16" className={className} aria-hidden="true">
        <path
          d="M3.5 4.5h7.5a1.5 1.5 0 0 1 1.5 1.5v3a1.5 1.5 0 0 1-1.5 1.5H7l-2.5 2v-2h-1A1.5 1.5 0 0 1 2 9V6a1.5 1.5 0 0 1 1.5-1.5Z"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.4"
          strokeLinejoin="round"
        />
      </svg>
    );
  }
  if (type === "booking") {
    return (
      <svg viewBox="0 0 16 16" className={className} aria-hidden="true">
        <rect
          x="2.75"
          y="3.75"
          width="10.5"
          height="9.5"
          rx="1.5"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.4"
        />
        <path
          d="M2.75 6.5h10.5M6 2.5v2.4M10 2.5v2.4"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.3"
          strokeLinecap="round"
        />
      </svg>
    );
  }
  if (type === "job") {
    return (
      <svg viewBox="0 0 16 16" className={className} aria-hidden="true">
        <path
          d="M6.2 9.8 3.4 12.6a1.2 1.2 0 0 0 1.7 1.7l2.8-2.8M9.4 6.2l3.4-3.4M8.2 4.4 11.6 7.8"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.4"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M7.4 8.6 12.2 3.8"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.4"
          strokeLinecap="round"
        />
      </svg>
    );
  }
  if (type === "opportunity") {
    return (
      <svg viewBox="0 0 16 16" className={className} aria-hidden="true">
        <path
          d="M8 3.2 9.3 6l3 .3-2.3 2 0.7 3L8 9.8 5.3 11.3l.7-3-2.3-2 3-.3L8 3.2Z"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.3"
          strokeLinejoin="round"
        />
      </svg>
    );
  }
  return (
    <svg viewBox="0 0 16 16" className={className} aria-hidden="true">
      <path
        d="M3 12V8M7 12V5M11 12V7M14 12V4"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
}
