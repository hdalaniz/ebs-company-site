"use client";

import Link from "next/link";
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
import { products } from "@/config/products";
import { ctaCopy, getInsightUrl } from "@/config/site";
import { cn } from "@/lib/cn";

const whyCards = [
  {
    title: "Missed demand",
    description:
      "Calls, forms, and inquiries can disappear before someone responds.",
    icon: "missed" as const,
  },
  {
    title: "Unclear next steps",
    description:
      "Owners often know something needs improvement but not what matters most.",
    icon: "unclear" as const,
  },
  {
    title: "Limited revenue visibility",
    description:
      "It is difficult to connect marketing and customer activity to actual bookings and revenue.",
    icon: "visibility" as const,
  },
] as const;

const productJourney = [
  {
    key: "presence" as const,
    action: "Build + Improve",
    detail: "Build and improve the digital foundation customers see first.",
  },
  {
    key: "growth" as const,
    action: "Capture + Convert",
    detail: "Capture demand and convert more of it into booked work.",
  },
  {
    key: "revenue-intelligence" as const,
    action: "Measure + Prove",
    detail: "Measure and prove what actually becomes booked revenue.",
  },
  {
    key: "assist" as const,
    action: "Recommend",
    detail: "Recommend the next best action from measured business outcomes.",
  },
];

const serviceCategories = [
  { name: "HVAC", icon: "hvac" as const },
  { name: "Plumbing", icon: "plumbing" as const },
  { name: "Electrical", icon: "electrical" as const },
  { name: "Roofing", icon: "roofing" as const },
  { name: "Landscaping", icon: "landscaping" as const },
  { name: "Other home services", icon: "other" as const },
] as const;

const approachSteps = [
  {
    title: "Diagnose",
    description: "Find the revenue leak.",
  },
  {
    title: "Capture",
    description: "Make sure demand reaches the business.",
  },
  {
    title: "Convert",
    description: "Turn opportunities into booked work.",
  },
  {
    title: "Prove",
    description: "Measure what actually created revenue.",
  },
  {
    title: "Learn",
    description: "Use outcomes to improve the next decision.",
  },
] as const;

const notCards = [
  {
    title: "Not a website agency",
    description:
      "EBS Presence can help with websites, but the goal is stronger demand capture and conversion — not selling website projects.",
  },
  {
    title: "Not a generic AI automation shop",
    description:
      "AI is a tool inside the system, not the product promise.",
  },
  {
    title: "Not a CRM or field-service replacement",
    description:
      "EBS is intended to work around the revenue journey, not replace every operational system a business already uses.",
  },
  {
    title: "Not “AI for everything”",
    description:
      "EBS focuses on specific workflows where value can be measured.",
  },
] as const;

export function AboutHero() {
  return (
    <section className="relative isolate overflow-hidden lg:min-h-[36rem]">
      <div className="absolute inset-0 motion-safe:origin-center motion-safe:animate-photo-settle">
        <ScenicPhoto
          src={brand.assets.heroLandscape}
          alt={brand.photography.heroLandscapeAlt}
          priority
          variant="band"
          objectPosition="object-[center_35%]"
        />
      </div>

      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-gradient-to-b from-navy-deep/58 via-navy-deep/42 to-navy-deep/68"
      />

      <div className="pointer-events-none absolute inset-0 z-[1] hidden md:block">
        <SpotlightNew duration={16} xOffset={28} />
      </div>

      <div className="relative z-10 flex items-center justify-center px-5 py-16 sm:px-8 sm:py-20 lg:min-h-[36rem] lg:py-24">
        <div className="w-full max-w-[820px] rounded-[1.75rem] border border-on-dark/15 bg-on-dark/[0.1] px-6 py-8 text-center shadow-[0_28px_60px_-34px_rgba(0,0,0,0.5)] backdrop-blur-lg motion-safe:animate-fade-up sm:rounded-[2rem] sm:px-10 sm:py-11 lg:px-12 lg:py-12">
          <p className="text-xs font-semibold tracking-[0.18em] text-teal uppercase">
            About EBS
          </p>
          <h1 className="mt-4 text-[2.05rem] leading-[1.1] font-bold tracking-tight text-on-dark sm:text-4xl lg:text-[2.85rem] lg:leading-[1.08]">
            Better systems for stronger local businesses.
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-on-dark/85 sm:text-lg sm:leading-8">
            Elevate Business Systems is building practical software for service
            businesses that want to capture more demand, convert more
            opportunities, and understand what actually drives growth.
          </p>
          <p className="mx-auto mt-4 max-w-xl text-sm font-medium leading-6 text-on-dark/75 sm:text-[0.95rem]">
            Built around real business outcomes — not more software for
            software’s sake.
          </p>
          <div className="mt-8 flex flex-col items-stretch justify-center gap-3 sm:flex-row sm:flex-wrap sm:items-center sm:gap-x-5 sm:gap-y-3">
            <ButtonLink
              href="/products/presence"
              className="w-full sm:w-auto"
            >
              {ctaCopy.presence}
            </ButtonLink>
            <ButtonLink
              href="/#how-ebs-works"
              variant="ghost"
              className="w-full justify-center text-on-dark hover:text-teal sm:w-auto"
            >
              See How EBS Works
            </ButtonLink>
          </div>
        </div>
      </div>
    </section>
  );
}

export function AboutWhyExists() {
  return (
    <section
      aria-labelledby="about-why-heading"
      className="section-sky section-topo relative overflow-hidden"
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
        <div className="max-w-3xl">
          <p className="text-xs font-semibold tracking-[0.18em] text-teal uppercase">
            Why EBS exists
          </p>
          <h2
            id="about-why-heading"
            className="mt-3 text-2xl font-bold tracking-tight text-ink sm:text-3xl lg:text-[2.15rem] lg:leading-[1.15]"
          >
            Good businesses should not lose revenue because the systems around
            them are weak.
          </h2>
          <p className="mt-4 max-w-2xl text-base leading-7 text-ink/75 sm:text-[1.05rem] sm:leading-8">
            Local service businesses often already have demand. The problem is
            what happens next — missed calls, slow follow-up, unclear websites,
            weak trust signals, and little visibility into what actually becomes
            booked work.
          </p>
        </div>

        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {whyCards.map((card) => (
            <HoverBorderGradient
              key={card.title}
              as="article"
              duration={1.2}
              className="h-full bg-white p-5 shadow-none sm:p-6"
            >
              <span className="flex size-11 items-center justify-center rounded-full border border-teal/30 bg-teal/10 text-teal">
                <WhyIcon type={card.icon} />
              </span>
              <h3 className="mt-4 text-lg font-semibold tracking-tight text-ink">
                {card.title}
              </h3>
              <p className="mt-2 text-sm leading-6 text-ink/75">
                {card.description}
              </p>
            </HoverBorderGradient>
          ))}
        </div>
      </div>
    </section>
  );
}

export function AboutProductJourney() {
  return (
    <section
      aria-labelledby="about-platform-heading"
      className="relative overflow-hidden bg-gradient-to-b from-warm via-warm to-[color-mix(in_srgb,var(--brand-sky)_22%,var(--brand-warm))]"
    >
      <div className="mx-auto w-full max-w-7xl px-5 py-14 sm:px-8 sm:py-16 lg:py-20">
        <div className="max-w-3xl">
          <p className="text-xs font-semibold tracking-[0.18em] text-teal uppercase">
            What EBS is building
          </p>
          <h2
            id="about-platform-heading"
            className="mt-3 text-2xl font-bold tracking-tight text-ink sm:text-3xl lg:text-[2.15rem]"
          >
            One platform. A clearer path from presence to revenue.
          </h2>
          <p className="mt-4 max-w-2xl text-base leading-7 text-ink/75 sm:text-[1.05rem] sm:leading-8">
            Each product is designed to strengthen a different part of the
            growth journey — from the digital front door to clearer decisions
            about what to do next.
          </p>
        </div>

        <ol className="relative mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-4 xl:gap-4">
          <span
            aria-hidden="true"
            className="pointer-events-none absolute top-12 right-6 left-6 hidden h-px bg-gradient-to-r from-teal/40 via-teal/30 to-teal/15 xl:block"
          />
          {productJourney.map((step, index) => {
            const product = products.find((item) => item.key === step.key);
            if (!product) {
              return null;
            }

            return (
              <li key={step.key} className="relative">
                {index < productJourney.length - 1 ? (
                  <span
                    aria-hidden="true"
                    className="pointer-events-none absolute top-full left-6 h-5 w-px bg-gradient-to-b from-teal/35 to-transparent xl:hidden"
                  />
                ) : null}
                <Link
                  href={product.href}
                  className={cn(
                    "ebs-card group relative z-10 block h-full rounded-2xl p-5 transition-[transform,box-shadow] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-teal motion-safe:hover:-translate-y-0.5 sm:p-6",
                    step.key === "presence" &&
                      "shadow-[0_22px_50px_-28px_rgba(30,200,165,0.4)] ring-1 ring-teal/25",
                  )}
                >
                  <div className="flex items-start justify-between gap-3">
                    <span className="flex size-11 items-center justify-center rounded-full border border-teal/30 bg-teal/10 text-teal">
                      <ProductIcon index={index} />
                    </span>
                    <ProductStatusBadge
                      status={product.status}
                      label={product.statusLabel}
                    />
                  </div>
                  <p className="mt-4 text-[0.68rem] font-semibold tracking-[0.16em] text-teal uppercase">
                    {step.action}
                  </p>
                  <h3 className="mt-2 text-lg font-semibold tracking-tight text-ink">
                    {product.name}
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-ink/75">
                    {step.detail}
                  </p>
                  <p className="mt-4 text-sm font-semibold text-teal motion-safe:transition-transform motion-safe:duration-200 motion-safe:group-hover:translate-x-0.5">
                    {product.cta}
                    <span aria-hidden="true"> →</span>
                  </p>
                </Link>
              </li>
            );
          })}
        </ol>
      </div>
    </section>
  );
}

export function AboutAudience() {
  return (
    <section
      aria-labelledby="about-audience-heading"
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
        className="pointer-events-none absolute inset-0 bg-gradient-to-r from-navy-deep/80 via-navy-deep/58 to-navy-deep/22 sm:via-navy-deep/50 sm:to-transparent"
      />

      <div className="relative z-10 mx-auto w-full max-w-7xl px-5 py-16 sm:px-8 sm:py-20 lg:py-24">
        <div className="grid items-end gap-10 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,0.85fr)] lg:gap-14">
          <div className="max-w-2xl">
            <p className="text-xs font-semibold tracking-[0.18em] text-teal uppercase">
              Built for service businesses
            </p>
            <h2
              id="about-audience-heading"
              className="mt-4 text-3xl font-bold tracking-tight text-on-dark sm:text-4xl lg:text-[2.55rem] lg:leading-[1.12]"
            >
              Designed around the businesses that keep homes and communities
              running.
            </h2>
            <p className="mt-5 max-w-xl text-base leading-7 text-on-dark/85 sm:text-lg sm:leading-8">
              EBS is starting with home-service businesses where trust, response
              speed, and follow-up directly influence whether demand turns into
              booked work.
            </p>
          </div>

          <div>
            <ul className="grid gap-2.5 sm:grid-cols-2">
              {serviceCategories.map((category) => (
                <li
                  key={category.name}
                  className="flex items-center gap-3 rounded-2xl border border-on-dark/15 bg-on-dark/10 px-3.5 py-3 text-sm font-medium text-on-dark shadow-[0_10px_28px_-22px_rgba(0,0,0,0.55)] backdrop-blur-md"
                >
                  <span className="flex size-9 shrink-0 items-center justify-center rounded-full border border-on-dark/15 bg-on-dark/10 text-teal">
                    <CategoryIcon type={category.icon} />
                  </span>
                  {category.name}
                </li>
              ))}
            </ul>

            <aside className="mt-4 rounded-2xl border border-on-dark/15 bg-on-dark/12 px-4 py-4 backdrop-blur-md sm:px-5">
              <p className="text-[0.68rem] font-semibold tracking-[0.16em] text-teal uppercase">
                Local business reality
              </p>
              <p className="mt-2 text-sm leading-6 text-on-dark/88">
                A strong online presence may create the opportunity. Fast
                response and consistent follow-up help convert it. Clear
                measurement shows what actually worked.
              </p>
            </aside>
          </div>
        </div>
      </div>
    </section>
  );
}

export function AboutApproach() {
  return (
    <section
      aria-labelledby="about-approach-heading"
      className="section-sky section-topo relative overflow-hidden"
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
        <div className="max-w-3xl">
          <p className="text-xs font-semibold tracking-[0.18em] text-teal uppercase">
            Our approach
          </p>
          <h2
            id="about-approach-heading"
            className="mt-3 text-2xl font-bold tracking-tight text-ink sm:text-3xl lg:text-[2.15rem]"
          >
            Diagnose. Capture. Convert. Prove. Learn.
          </h2>
          <p className="mt-4 max-w-2xl text-base leading-7 text-ink/75 sm:text-[1.05rem] sm:leading-8">
            EBS is built around a practical operating philosophy: find where
            revenue is leaking, strengthen the systems that catch demand, and
            keep improving from measured outcomes.
          </p>
        </div>

        <JourneyReveal className="relative mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-5 lg:gap-4">
          {approachSteps.map((step, index) => (
            <JourneyStep
              key={step.title}
              className="group/step relative rounded-2xl border border-border bg-white/90 p-5 shadow-[0_14px_32px_-24px_rgba(14,36,56,0.3)] sm:p-6"
            >
              {index < approachSteps.length - 1 ? (
                <span
                  aria-hidden="true"
                  className="pointer-events-none absolute top-full left-8 h-5 w-px bg-gradient-to-b from-teal/30 to-transparent lg:hidden"
                />
              ) : null}
              <p className="text-xs font-semibold tracking-[0.18em] text-teal uppercase">
                {String(index + 1).padStart(2, "0")}
              </p>
              <h3 className="mt-3 text-lg font-semibold tracking-tight text-ink">
                {step.title}
              </h3>
              <p className="mt-2 text-sm leading-6 text-ink/75">
                {step.description}
              </p>
            </JourneyStep>
          ))}
        </JourneyReveal>
      </div>
    </section>
  );
}

export function AboutPositioning() {
  return (
    <section
      aria-labelledby="about-positioning-heading"
      className="relative overflow-hidden bg-warm"
    >
      <div className="mx-auto w-full max-w-7xl px-5 py-14 sm:px-8 sm:py-16 lg:py-20">
        <div className="max-w-3xl">
          <p className="text-xs font-semibold tracking-[0.18em] text-teal uppercase">
            Clear positioning
          </p>
          <h2
            id="about-positioning-heading"
            className="mt-3 text-2xl font-bold tracking-tight text-ink sm:text-3xl lg:text-[2.15rem]"
          >
            Focused on outcomes, not software sprawl.
          </h2>
        </div>

        <div className="mt-10 grid gap-4 sm:grid-cols-2">
          {notCards.map((card) => (
            <HoverBorderGradient
              key={card.title}
              as="article"
              duration={1.15}
              className="h-full bg-white p-5 shadow-none sm:p-6"
            >
              <h3 className="text-base font-semibold tracking-tight text-ink sm:text-lg">
                {card.title}
              </h3>
              <p className="mt-2 text-sm leading-6 text-ink/75">
                {card.description}
              </p>
            </HoverBorderGradient>
          ))}
        </div>
      </div>
    </section>
  );
}

export function AboutBrandStory() {
  return (
    <section
      aria-labelledby="about-brand-heading"
      className="relative isolate overflow-hidden"
    >
      <div className="absolute inset-0 motion-safe:origin-center motion-safe:animate-photo-settle">
        <ScenicPhoto
          src={brand.assets.heroLandscape}
          alt={brand.photography.heroLandscapeAlt}
          variant="band"
          objectPosition="object-[center_40%]"
        />
      </div>

      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-gradient-to-b from-navy-deep/55 via-navy-deep/45 to-navy-deep/65"
      />

      <div className="relative z-10 mx-auto flex w-full max-w-7xl justify-center px-5 py-16 sm:px-8 sm:py-20 lg:py-24">
        <div className="w-full max-w-[760px] rounded-[1.75rem] border border-on-dark/15 bg-on-dark/[0.1] px-6 py-8 text-center shadow-[0_28px_60px_-34px_rgba(0,0,0,0.45)] backdrop-blur-lg sm:rounded-[2rem] sm:px-10 sm:py-10">
          <h2
            id="about-brand-heading"
            className="text-3xl font-bold tracking-tight text-on-dark sm:text-4xl lg:text-[2.45rem] lg:leading-[1.12]"
          >
            Modern software should still feel close to the businesses it serves.
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-on-dark/85 sm:text-lg sm:leading-8">
            EBS combines modern software with a practical, local-business
            mindset — clear communication, strong relationships, simple next
            steps, and measurable results.
          </p>
          <p className="mt-6 text-sm font-semibold tracking-[0.14em] text-teal uppercase">
            Northwest personality. National product.
          </p>
        </div>
      </div>
    </section>
  );
}

export function AboutFinalCta() {
  return (
    <section
      aria-labelledby="about-final-cta-heading"
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
              id="about-final-cta-heading"
              className="mt-4 text-3xl font-bold tracking-tight text-on-dark sm:text-4xl lg:text-[2.45rem] lg:leading-[1.12]"
            >
              Start with the part of your business customers see first.
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-base leading-7 text-on-dark/85 sm:text-lg sm:leading-8">
              EBS Presence helps you understand whether your current online
              presence is helping or holding you back — and gives you a clearer
              next step.
            </p>
            <div className="mt-7 flex flex-col items-stretch justify-center gap-3 sm:mt-8 sm:flex-row sm:flex-wrap sm:items-center sm:gap-x-5 sm:gap-y-3">
              <ButtonLink
                href="/products/presence"
                className="w-full sm:w-auto"
              >
                {ctaCopy.presence}
              </ButtonLink>
              <ButtonLink
                href={getInsightUrl("/analyze")}
                variant="ghost"
                className="w-full justify-center text-on-dark hover:text-teal sm:w-auto"
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

function WhyIcon({ type }: { type: (typeof whyCards)[number]["icon"] }) {
  const className = "size-4";
  if (type === "missed") {
    return (
      <svg viewBox="0 0 16 16" className={className} aria-hidden="true">
        <path
          d="M3.5 4.5h7.5a1.5 1.5 0 0 1 1.5 1.5v3a1.5 1.5 0 0 1-1.5 1.5H7l-2.5 2v-2h-1A1.5 1.5 0 0 1 2 9V6a1.5 1.5 0 0 1 1.5-1.5Z"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.4"
          strokeLinejoin="round"
        />
        <path
          d="M6.2 6.8 9.8 9.2M9.8 6.8 6.2 9.2"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.3"
          strokeLinecap="round"
        />
      </svg>
    );
  }
  if (type === "unclear") {
    return (
      <svg viewBox="0 0 16 16" className={className} aria-hidden="true">
        <circle
          cx="8"
          cy="8"
          r="5.2"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.4"
        />
        <path
          d="M8 7.2v3.2M8 5.2h.01"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
      </svg>
    );
  }
  return (
    <svg viewBox="0 0 16 16" className={className} aria-hidden="true">
      <path
        d="M3 11.5 6.2 8l2 2 4.3-5"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M10.2 5h2.3v2.3"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function ProductIcon({ index }: { index: number }) {
  const className = "size-4";
  if (index === 0) {
    return (
      <svg viewBox="0 0 16 16" className={className} aria-hidden="true">
        <path
          d="M2.5 8 8 3.5 13.5 8"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.4"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M4.2 7.2V12.5h7.6V7.2"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.4"
          strokeLinejoin="round"
        />
      </svg>
    );
  }
  if (index === 1) {
    return (
      <svg viewBox="0 0 16 16" className={className} aria-hidden="true">
        <path
          d="M3 11.5 6.5 7l2.2 2.2L13 4.5"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.4"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  }
  if (index === 2) {
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
          d="M5 9.2 7 7.2l2 2 2.2-2.5"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.3"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  }
  return (
    <svg viewBox="0 0 16 16" className={className} aria-hidden="true">
      <circle
        cx="8"
        cy="8"
        r="5.2"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.4"
      />
      <path
        d="M8 5.2v3l2 1.2"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinecap="round"
      />
    </svg>
  );
}

function CategoryIcon({
  type,
}: {
  type: (typeof serviceCategories)[number]["icon"];
}) {
  const className = "size-4";

  if (type === "hvac") {
    return (
      <svg viewBox="0 0 16 16" className={className} aria-hidden="true">
        <circle
          cx="8"
          cy="8"
          r="5.2"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.4"
        />
        <path
          d="M8 4.2v7.6M4.2 8h7.6M5.4 5.4l5.2 5.2M10.6 5.4 5.4 10.6"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.2"
          strokeLinecap="round"
        />
      </svg>
    );
  }
  if (type === "plumbing") {
    return (
      <svg viewBox="0 0 16 16" className={className} aria-hidden="true">
        <path
          d="M4 3.5h4.5a2.5 2.5 0 0 1 0 5H7v4"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.4"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M10.5 4.5h1.8M10.5 7.5h1.8"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.3"
          strokeLinecap="round"
        />
      </svg>
    );
  }
  if (type === "electrical") {
    return (
      <svg viewBox="0 0 16 16" className={className} aria-hidden="true">
        <path
          d="M9 2.5 5.5 9h3l-1.5 4.5L12 7H9l1.5-4.5Z"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.4"
          strokeLinejoin="round"
        />
      </svg>
    );
  }
  if (type === "roofing") {
    return (
      <svg viewBox="0 0 16 16" className={className} aria-hidden="true">
        <path
          d="M2.5 8 8 3.5 13.5 8"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.4"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M4.2 7.2V12.5h7.6V7.2"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.4"
          strokeLinejoin="round"
        />
      </svg>
    );
  }
  if (type === "landscaping") {
    return (
      <svg viewBox="0 0 16 16" className={className} aria-hidden="true">
        <path
          d="M8 13.2V7.2"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.4"
          strokeLinecap="round"
        />
        <path
          d="M8 8.2c-2.4-.2-4.2-1.6-4.8-3.8 2.4.1 4.4 1.4 4.8 3.8Z"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.3"
          strokeLinejoin="round"
        />
        <path
          d="M8 9.2c2.2-.1 4-1.3 4.8-3.2-2.1.2-3.9 1.3-4.8 3.2Z"
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
      <circle
        cx="8"
        cy="8"
        r="5.2"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.4"
      />
      <path
        d="M5.5 8h5M8 5.5v5"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.3"
        strokeLinecap="round"
      />
    </svg>
  );
}
