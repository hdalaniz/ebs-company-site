"use client";

import Image from "next/image";
import Link from "next/link";
import { AssistPreview } from "@/components/products/AssistPreview";
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
import { getInsightUrl } from "@/config/site";
import { cn } from "@/lib/cn";

const heroPriorities = [
  {
    rank: "1",
    title: "Follow up with unclosed estimates",
  },
  {
    rank: "2",
    title: "Review slow-response leads",
  },
  {
    rank: "3",
    title: "Request reviews from recent customers",
  },
] as const;

const maturityStages = [
  {
    title: "Recommend",
    description: "EBS identifies what deserves attention.",
    icon: "recommend" as const,
    highlight: false,
  },
  {
    title: "Approve",
    description: "A person reviews the suggested action.",
    icon: "approve" as const,
    highlight: true,
  },
  {
    title: "Automate Safely",
    description:
      "Future workflows may execute approved actions with controls and auditability.",
    icon: "automate" as const,
    highlight: false,
  },
] as const;

const signals = [
  {
    title: "Presence",
    description: "Website and digital foundation signals",
    icon: "presence" as const,
  },
  {
    title: "Growth",
    description: "Lead and follow-up activity",
    icon: "growth" as const,
  },
  {
    title: "Revenue Intelligence",
    description: "Booking and revenue outcomes",
    icon: "revenue" as const,
  },
  {
    title: "Business Rules",
    description: "Service areas, hours, consent, availability",
    icon: "rules" as const,
  },
] as const;

const capabilities = [
  {
    title: "Prioritized Recommendations",
    label: "Attention",
    description:
      "Designed to rank opportunities so owners can see what deserves attention first.",
    icon: "recommend" as const,
  },
  {
    title: "Drafted Next Actions",
    label: "Preparation",
    description:
      "Planned to prepare suggested follow-ups and requests a person can review.",
    icon: "draft" as const,
  },
  {
    title: "Human Approval",
    label: "Control",
    description:
      "Designed so a person stays in control of every suggested next move.",
    icon: "approve" as const,
  },
  {
    title: "Bounded Automation",
    label: "Later stage",
    description:
      "Future workflows may execute approved actions with controls and auditability — not autonomous operation.",
    icon: "automate" as const,
  },
] as const;

const platformLoop = [
  {
    name: "Presence",
    support: "creates context",
    href: "/products/presence",
    current: false,
  },
  {
    name: "Growth",
    support: "creates activity",
    href: "/products/growth",
    current: false,
  },
  {
    name: "Revenue Intelligence",
    support: "measures outcomes",
    href: "/products/revenue-intelligence",
    current: false,
  },
  {
    name: "Assist",
    support: "recommends what happens next",
    href: "/products/assist",
    current: true,
  },
  {
    name: "Continuous Improvement",
    support: "Then the cycle improves.",
    current: false,
  },
] as const;

export function AssistHero() {
  return (
    <section className="relative isolate overflow-hidden">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-gradient-to-b from-sky/40 via-warm to-warm"
      />

      <div className="relative z-10 mx-auto grid w-full max-w-7xl items-center gap-10 px-5 pt-12 pb-10 sm:px-8 sm:pt-16 sm:pb-12 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] lg:gap-14 lg:pt-20 lg:pb-14">
        <div className="motion-safe:animate-fade-up">
          <p className="inline-flex rounded-full border border-teal/20 bg-teal/10 px-3 py-1 text-[0.7rem] font-semibold tracking-[0.22em] text-teal uppercase">
            EBS Assist
          </p>
          <div className="mt-4">
            <ProductStatusBadge status="future" label="Future Product" />
          </div>
          <h1 className="mt-5 max-w-2xl text-[2.05rem] leading-[1.08] font-bold tracking-tight text-ink sm:text-5xl lg:text-[3.25rem]">
            Know your{" "}
            <span className="text-teal">next best move.</span>
          </h1>
          <p className="mt-6 max-w-xl text-[1.0625rem] leading-7 text-ink/80 sm:text-lg sm:leading-8">
            EBS Assist is the future intelligence layer of the EBS platform —
            designed to help service businesses prioritize the opportunities and
            actions most likely to matter.
          </p>
          <p className="mt-5 max-w-lg text-sm font-medium leading-6 text-ink/70 sm:text-[0.95rem]">
            Guided decision support for owners — not an autonomous AI employee.
          </p>
        </div>

        <div className="relative motion-safe:animate-fade-up [animation-delay:120ms]">
          <PriorityStackVisual />
        </div>
      </div>
    </section>
  );
}

function PriorityStackVisual() {
  return (
    <div className="relative overflow-hidden rounded-[1.75rem] border border-navy/15 bg-white shadow-[0_28px_60px_-34px_rgba(14,36,56,0.4)]">
      <div className="absolute inset-0" aria-hidden="true">
        <Image
          src={brand.assets.localNeighborhood}
          alt=""
          fill
          sizes="(max-width: 1024px) 90vw, 42rem"
          className="object-cover object-[center_40%] opacity-50"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-white/92 via-white/86 to-sky/80" />
      </div>

      <div className="relative z-10 p-5 sm:p-6">
        <p className="text-[0.62rem] font-semibold tracking-[0.16em] text-teal uppercase">
          Conceptual next-best-action stack
        </p>
        <ol className="mt-4 space-y-3">
          {heroPriorities.map((item, index) => (
            <li
              key={item.rank}
              className={cn(
                "flex items-start gap-3 rounded-2xl border bg-white/92 px-4 py-4 shadow-[0_12px_28px_-22px_rgba(14,36,56,0.3)]",
                index === 0 ? "border-teal/35" : "border-navy/10",
              )}
            >
              <span className="flex size-9 shrink-0 items-center justify-center rounded-full border border-teal/35 bg-teal/10 text-sm font-semibold text-teal">
                {item.rank}
              </span>
              <p className="pt-1.5 text-sm font-semibold leading-6 tracking-tight text-ink sm:text-base">
                {item.title}
              </p>
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
}

export function AssistPriorities() {
  return (
    <section
      aria-labelledby="assist-preview-heading"
      className="relative overflow-hidden bg-gradient-to-b from-warm via-warm to-[color-mix(in_srgb,var(--brand-sky)_22%,var(--brand-warm))]"
    >
      <div className="mx-auto w-full max-w-7xl px-5 py-14 sm:px-8 sm:py-16 lg:py-20">
        <div>
          <p className="text-xs font-semibold tracking-[0.18em] text-teal uppercase">
            Future product vision
          </p>
          <h2
            id="assist-preview-heading"
            className="mt-3 max-w-2xl text-2xl font-bold tracking-tight text-ink sm:text-3xl lg:text-[2.15rem]"
          >
            A look at the intended Assist experience.
          </h2>
          <p className="mt-4 max-w-2xl text-base leading-7 text-ink/75 sm:text-[1.05rem] sm:leading-8">
            These are illustrative examples. Actions are not currently
            automated, and Assist does not take autonomous actions today.
          </p>
        </div>
        <div className="mt-8 rounded-[1.5rem] bg-gradient-to-b from-white to-sky/20 p-1">
          <AssistPreview />
        </div>
      </div>
    </section>
  );
}

export function AssistMaturity() {
  return (
    <section
      aria-labelledby="assist-maturity-heading"
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
            Bounded AI philosophy
          </p>
          <h2
            id="assist-maturity-heading"
            className="mt-3 max-w-2xl text-2xl font-bold tracking-tight text-ink sm:text-3xl lg:text-[2.15rem]"
          >
            Recommend. Approve. Automate safely.
          </h2>
          <p className="mt-4 max-w-2xl text-base leading-7 text-ink/75 sm:text-[1.05rem] sm:leading-8">
            Assist is intended to begin as decision support. Human review stays
            central. Automation is a later, bounded stage — not the starting
            point.
          </p>
        </div>

        <ol className="relative mt-10 grid grid-cols-1 gap-5 lg:grid-cols-3 lg:gap-4">
          <span
            aria-hidden="true"
            className="pointer-events-none absolute top-12 right-8 left-8 hidden h-px bg-gradient-to-r from-teal/30 via-teal/50 to-teal/20 lg:block"
          />
          {maturityStages.map((stage, index) => (
            <li key={stage.title} className="relative">
              {index < maturityStages.length - 1 ? (
                <span
                  aria-hidden="true"
                  className="pointer-events-none absolute top-full left-6 h-5 w-px bg-gradient-to-b from-teal/35 to-transparent lg:hidden"
                />
              ) : null}
              <HoverBorderGradient
                as="article"
                duration={1.2}
                containerClassName={cn(
                  stage.highlight &&
                    "shadow-[0_22px_50px_-28px_rgba(30,200,165,0.5)]",
                )}
                className={cn(
                  "relative h-full overflow-hidden bg-white p-5 shadow-none sm:p-6",
                  stage.highlight && "ring-1 ring-inset ring-teal/25",
                )}
              >
                <span
                  aria-hidden="true"
                  className={cn(
                    "absolute inset-x-0 top-0 h-1 bg-gradient-to-r",
                    stage.highlight
                      ? "from-teal to-teal/40"
                      : "from-teal/50 to-teal/15",
                  )}
                />
                <div className="flex items-center gap-3">
                  <span
                    className={cn(
                      "flex size-11 items-center justify-center rounded-full border text-teal",
                      stage.highlight
                        ? "border-teal/45 bg-teal/15"
                        : "border-teal/30 bg-teal/10",
                    )}
                  >
                    <MaturityIcon type={stage.icon} />
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
                {stage.highlight ? (
                  <p className="mt-4 inline-flex rounded-full border border-teal/35 bg-teal/12 px-2.5 py-1 text-xs font-semibold tracking-wide text-teal uppercase">
                    Human review
                  </p>
                ) : null}
              </HoverBorderGradient>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

export function AssistSignals() {
  return (
    <section
      aria-labelledby="assist-signals-heading"
      className="relative overflow-hidden bg-gradient-to-b from-warm via-warm to-[color-mix(in_srgb,var(--brand-sky)_20%,var(--brand-warm))]"
    >
      <div className="mx-auto w-full max-w-7xl px-5 py-14 sm:px-8 sm:py-16 lg:py-20">
        <div>
          <p className="text-xs font-semibold tracking-[0.18em] text-teal uppercase">
            Why Assist comes last
          </p>
          <h2
            id="assist-signals-heading"
            className="mt-3 max-w-2xl text-2xl font-bold tracking-tight text-ink sm:text-3xl lg:text-[2.15rem]"
          >
            Better recommendations come from better context.
          </h2>
          <p className="mt-4 max-w-2xl text-base leading-7 text-ink/75 sm:text-[1.05rem] sm:leading-8">
            Assist is designed to sit at the end of the EBS product loop — using
            signals from the rest of the platform before suggesting a next move.
          </p>
        </div>

        <div className="mt-10 grid items-stretch gap-5 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,0.85fr)] lg:gap-6">
          <ul className="grid gap-4 sm:grid-cols-2">
            {signals.map((signal) => (
              <li key={signal.title}>
                <HoverBorderGradient
                  as="article"
                  duration={1.15}
                  className="h-full bg-white p-5 shadow-none sm:p-6"
                >
                  <span className="flex size-11 items-center justify-center rounded-full border border-teal/30 bg-teal/10 text-teal">
                    <SignalIcon type={signal.icon} />
                  </span>
                  <h3 className="mt-4 text-lg font-semibold tracking-tight text-ink">
                    {signal.title}
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-ink/75">
                    {signal.description}
                  </p>
                </HoverBorderGradient>
              </li>
            ))}
          </ul>

          <aside className="relative flex h-full flex-col justify-center rounded-[1.5rem] border border-teal/30 bg-gradient-to-br from-teal/10 via-white to-sky/40 p-6 shadow-[0_22px_50px_-28px_rgba(30,200,165,0.4)] sm:p-8">
            <p className="text-[0.68rem] font-semibold tracking-[0.18em] text-teal uppercase">
              Assist recommendation
            </p>
            <h3 className="mt-3 text-xl font-semibold tracking-tight text-ink sm:text-2xl">
              Follow up with unclosed estimates
            </h3>
            <p className="mt-3 text-sm leading-6 text-ink/75">
              Designed to combine Growth activity, Revenue Intelligence
              outcomes, and business rules into one suggested next step.
            </p>
            <p className="mt-5 inline-flex items-center gap-1.5 rounded-full border border-teal/25 bg-white px-3.5 py-2 text-sm font-semibold text-teal">
              Review suggested action
              <span aria-hidden="true">→</span>
            </p>
            <p className="mt-4 text-xs leading-5 text-muted">
              Conceptual only — a person would still approve the move.
            </p>
          </aside>
        </div>
      </div>
    </section>
  );
}

export function AssistCapabilities() {
  return (
    <section
      aria-labelledby="assist-capabilities-heading"
      className="relative overflow-hidden bg-gradient-to-b from-[color-mix(in_srgb,var(--brand-sky)_22%,var(--brand-warm))] via-warm to-warm"
    >
      <div className="mx-auto w-full max-w-7xl px-5 py-14 sm:px-8 sm:py-16 lg:py-20">
        <div>
          <p className="text-xs font-semibold tracking-[0.18em] text-teal uppercase">
            Product direction
          </p>
          <h2
            id="assist-capabilities-heading"
            className="mt-3 max-w-2xl text-2xl font-bold tracking-tight text-ink sm:text-3xl lg:text-[2.15rem]"
          >
            Planned capabilities
          </h2>
          <p className="mt-4 max-w-2xl text-base leading-7 text-ink/75 sm:text-[1.05rem] sm:leading-8">
            These are future-facing directions. Assist is not available today
            and is not designed as an autonomous agent.
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
                    <CapabilityIcon type={capability.icon} />
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

export function AssistPlatformLoop() {
  return (
    <section
      aria-labelledby="assist-platform-heading"
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
        <div>
          <p className="text-xs font-semibold tracking-[0.18em] text-teal uppercase">
            Platform loop
          </p>
          <h2
            id="assist-platform-heading"
            className="mt-3 max-w-2xl text-2xl font-bold tracking-tight text-ink sm:text-3xl lg:text-[2.15rem]"
          >
            Assist uses the rest of the platform as signal.
          </h2>
          <p className="mt-4 max-w-2xl text-base leading-7 text-ink/75 sm:text-[1.05rem] sm:leading-8">
            Presence creates context. Growth creates activity. Revenue
            Intelligence measures outcomes. Assist recommends what happens next.
            Then the cycle improves.
          </p>
        </div>

        <div className="relative mt-12 lg:mt-14">
          <LoopPathGraphic />
          <JourneyReveal className="relative grid grid-cols-1 gap-8 lg:grid-cols-5 lg:gap-4 lg:pt-2">
            {platformLoop.map((step, index) => {
              const href = "href" in step ? step.href : undefined;
              const content = (
                <>
                  <div
                    className={cn(
                      "relative z-10 flex size-12 items-center justify-center rounded-full border border-teal/35 bg-white text-teal shadow-[0_12px_28px_-16px_rgba(14,36,56,0.4)] transition-[transform,border-color,box-shadow,background-color] duration-300",
                      "group-data-[active=true]/step:scale-110 group-data-[active=true]/step:border-teal group-data-[active=true]/step:bg-teal/12 group-data-[active=true]/step:shadow-[0_14px_30px_-12px_rgba(30,200,165,0.5)]",
                      step.current && "border-teal bg-teal/12",
                    )}
                  >
                    <LoopIcon index={index} />
                  </div>
                  <p className="mt-4 text-xs font-semibold tracking-[0.18em] text-teal uppercase">
                    {index === 4 ? "↺" : String(index + 1).padStart(2, "0")}
                  </p>
                  <h3 className="mt-2 text-lg font-semibold tracking-tight text-ink">
                    {step.name}
                  </h3>
                  <p className="mt-1.5 text-sm leading-6 text-ink/75">
                    {step.support}
                  </p>
                  {step.current ? (
                    <p className="mt-3 inline-flex rounded-full border border-teal/35 bg-teal/12 px-2.5 py-1 text-xs font-semibold tracking-wide text-teal uppercase">
                      You are here
                    </p>
                  ) : null}
                </>
              );

              return (
                <JourneyStep key={step.name} className="group/step opacity-100 lg:flex lg:flex-col">
                  <div
                    className={cn(
                      index === 1 && "lg:mt-2.5",
                      index === 2 && "lg:mt-5",
                      index === 3 && "lg:mt-7",
                      index === 4 && "lg:mt-9",
                    )}
                  >
                    {href && !step.current ? (
                      <Link
                        href={href}
                        className="relative z-10 block rounded-md focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-teal"
                      >
                        {content}
                      </Link>
                    ) : (
                      <div className="relative z-10">{content}</div>
                    )}
                  </div>
                </JourneyStep>
              );
            })}
          </JourneyReveal>
        </div>
      </div>
    </section>
  );
}

export function AssistFinalCta() {
  return (
    <section
      aria-labelledby="assist-final-cta-heading"
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
              id="assist-final-cta-heading"
              className="mt-4 text-3xl font-bold tracking-tight text-on-dark sm:text-4xl lg:text-[2.45rem] lg:leading-[1.12]"
            >
              The first step is understanding the opportunity.
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-base leading-7 text-on-dark/85 sm:text-lg sm:leading-8">
              EBS Assist is a future product. Today, EBS Presence and Insight
              can help you understand where your business has room to improve.
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

function LoopPathGraphic() {
  return (
    <>
      <svg
        aria-hidden="true"
        viewBox="0 0 1000 120"
        preserveAspectRatio="none"
        className="pointer-events-none absolute top-4 right-0 left-0 hidden h-24 w-full lg:block"
      >
        <path
          d="M40 88 C220 88, 280 62, 420 54 C560 46, 620 34, 760 28 C860 24, 920 18, 960 16"
          fill="none"
          stroke="color-mix(in srgb, var(--teal) 35%, transparent)"
          strokeWidth="3"
          strokeLinecap="round"
        />
        <path
          d="M40 88 C220 88, 280 62, 420 54 C560 46, 620 34, 760 28 C860 24, 920 18, 960 16"
          fill="none"
          stroke="color-mix(in srgb, var(--teal) 55%, transparent)"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeDasharray="4 8"
        />
      </svg>
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-6 bottom-6 left-6 w-px bg-gradient-to-b from-teal/50 via-teal/25 to-transparent lg:hidden"
      />
    </>
  );
}

function MaturityIcon({
  type,
}: {
  type: (typeof maturityStages)[number]["icon"];
}) {
  const className = "size-4";
  if (type === "recommend") {
    return (
      <svg viewBox="0 0 16 16" className={className} aria-hidden="true">
        <path
          d="M3.5 4.5h9M3.5 8h9M3.5 11.5h6"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.4"
          strokeLinecap="round"
        />
      </svg>
    );
  }
  if (type === "approve") {
    return (
      <svg viewBox="0 0 16 16" className={className} aria-hidden="true">
        <circle
          cx="8"
          cy="5.4"
          r="2.1"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.4"
        />
        <path
          d="M3.8 13c.5-2.3 2-3.5 4.2-3.5 1.3 0 2.4.4 3.2 1.1"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.4"
          strokeLinecap="round"
        />
        <path
          d="m9.2 11.2 1.5 1.5 2.6-2.6"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.4"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  }
  return (
    <svg viewBox="0 0 16 16" className={className} aria-hidden="true">
      <path
        d="M8 3.2v1.4M8 11.4v1.4M3.2 8h1.4M11.4 8h1.4M4.6 4.6l1 1M10.4 10.4l1 1M11.4 4.6l-1 1M5.6 10.4l-1 1"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.3"
        strokeLinecap="round"
      />
      <circle
        cx="8"
        cy="8"
        r="2.4"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.4"
      />
    </svg>
  );
}

function SignalIcon({ type }: { type: (typeof signals)[number]["icon"] }) {
  const className = "size-4";
  if (type === "presence") {
    return (
      <svg viewBox="0 0 16 16" className={className} aria-hidden="true">
        <path
          d="m2.5 7.2 5.5-4.2 5.5 4.2V13a1 1 0 0 1-1 1H3.5a1 1 0 0 1-1-1V7.2Z"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.4"
          strokeLinejoin="round"
        />
      </svg>
    );
  }
  if (type === "growth") {
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
  if (type === "revenue") {
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
  return (
    <svg viewBox="0 0 16 16" className={className} aria-hidden="true">
      <path
        d="M3.5 5.5h9M3.5 10.5h9"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinecap="round"
      />
      <circle cx="6.2" cy="5.5" r="1.3" fill="currentColor" />
      <circle cx="10" cy="10.5" r="1.3" fill="currentColor" />
    </svg>
  );
}

function CapabilityIcon({
  type,
}: {
  type: (typeof capabilities)[number]["icon"];
}) {
  if (type === "draft") {
    return (
      <svg viewBox="0 0 16 16" className="size-4" aria-hidden="true">
        <rect
          x="3.2"
          y="2.8"
          width="9.6"
          height="10.4"
          rx="1.4"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.4"
        />
        <path
          d="M5.5 6.2h5M5.5 8.8h3.5"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.3"
          strokeLinecap="round"
        />
      </svg>
    );
  }
  return <MaturityIcon type={type} />;
}

function LoopIcon({ index }: { index: number }) {
  const className = "size-4";
  if (index === 0) {
    return (
      <svg viewBox="0 0 16 16" className={className} aria-hidden="true">
        <path
          d="m2.5 7.2 5.5-4.2 5.5 4.2V13a1 1 0 0 1-1 1H3.5a1 1 0 0 1-1-1V7.2Z"
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
          d="M3 12 8 4l5 8H3Z"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.4"
          strokeLinejoin="round"
        />
      </svg>
    );
  }
  if (index === 2) {
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
  if (index === 3) {
    return (
      <svg viewBox="0 0 16 16" className={className} aria-hidden="true">
        <path
          d="M3.5 4.5h9M3.5 8h9M3.5 11.5h6"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.4"
          strokeLinecap="round"
        />
      </svg>
    );
  }
  return (
    <svg viewBox="0 0 16 16" className={className} aria-hidden="true">
      <path
        d="M12.2 6.2A4.4 4.4 0 1 0 8 12.4"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinecap="round"
      />
      <path
        d="M10.2 6.2h2v-2"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
