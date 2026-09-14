"use client";

import Link from "next/link";
import { GrowthMountain } from "@/components/brand/GrowthMountain";
import { ScenicPhoto } from "@/components/brand/ScenicPhoto";
import { ButtonLink } from "@/components/marketing/ButtonLink";
import { ProductStatusBadge } from "@/components/marketing/ProductStatusBadge";
import { HoverBorderGradient } from "@/components/ui/hover-border-gradient";
import { SpotlightNew } from "@/components/ui/spotlight-new";
import { brand } from "@/config/brand";
import { ctaCopy, getInsightUrl } from "@/config/site";

const workflowStages = [
  {
    title: "Capture",
    description: "Bring calls, forms, and inquiries into a clearer workflow.",
    icon: "capture" as const,
  },
  {
    title: "Respond",
    description: "Reduce the time valuable leads wait for a reply.",
    icon: "respond" as const,
  },
  {
    title: "Follow Up",
    description:
      "Keep opportunities from disappearing after the first interaction.",
    icon: "followup" as const,
  },
  {
    title: "Reactivate",
    description:
      "Reconnect with previous leads and customers when appropriate.",
    icon: "reactivate" as const,
  },
] as const;

const capabilities = [
  {
    title: "Lead Capture",
    label: "Inbound",
    description:
      "Designed to gather incoming calls, forms, and inquiries into one place owners can actually work from.",
    icon: "capture" as const,
  },
  {
    title: "Fast Response",
    label: "Speed",
    description:
      "Planned to surface which leads are still waiting so valuable demand is not left unanswered.",
    icon: "respond" as const,
  },
  {
    title: "Follow-Up Workflows",
    label: "Continuity",
    description:
      "Future capability for keeping estimates, callbacks, and open opportunities moving after the first reply.",
    icon: "followup" as const,
  },
  {
    title: "Reactivation",
    label: "Return",
    description:
      "Designed to help businesses revisit previous leads and customers instead of starting from zero.",
    icon: "reactivate" as const,
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
    current: true,
  },
  {
    name: "EBS Revenue Intelligence",
    role: "Measurement",
    href: "/products/revenue-intelligence",
    detail: "Measure what becomes revenue",
    current: false,
  },
] as const;

const journeyNodes = [
  { label: "New lead", x: 12 },
  { label: "Responded", x: 38 },
  { label: "Follow-up", x: 64 },
  { label: "Booked", x: 88 },
] as const;

export function GrowthHero() {
  return (
    <section className="relative isolate overflow-hidden">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-gradient-to-b from-sky/40 via-warm to-warm"
      />

      <div className="relative z-10 mx-auto grid w-full max-w-7xl items-center gap-10 px-5 pt-12 pb-10 sm:px-8 sm:pt-16 sm:pb-12 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] lg:gap-14 lg:pt-20 lg:pb-14">
        <div className="motion-safe:animate-fade-up">
          <p className="inline-flex rounded-full border border-teal/20 bg-teal/10 px-3 py-1 text-xs font-semibold tracking-[0.18em] text-teal uppercase">
            EBS Growth
          </p>
          <div className="mt-4">
            <ProductStatusBadge status="coming-soon" />
          </div>
          <h1 className="mt-5 max-w-2xl text-[2.05rem] leading-[1.08] font-bold tracking-tight text-ink sm:text-5xl lg:text-[3.25rem]">
            Capture more demand.{" "}
            <span className="text-teal">Lose fewer opportunities.</span>
          </h1>
          <p className="mt-6 max-w-xl text-[1.0625rem] leading-7 text-ink/80 sm:text-lg sm:leading-8">
            EBS Growth is being designed to help service businesses respond
            faster, follow up consistently, recover missed opportunities, and
            reactivate previous customers.
          </p>
          <p className="mt-5 max-w-lg text-sm font-medium leading-6 text-ink/70 sm:text-[0.95rem]">
            Built to help local service businesses respond while the opportunity
            is still warm.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center sm:gap-x-5 sm:gap-y-3">
            <ButtonLink href="/products/presence" className="w-full sm:w-auto">
              {ctaCopy.presence}
            </ButtonLink>
            <ButtonLink
              href={getInsightUrl("/analyze")}
              variant="ghost"
              className="w-full sm:w-auto"
            >
              {ctaCopy.insight}
            </ButtonLink>
          </div>
        </div>

        <div className="relative motion-safe:animate-fade-up [animation-delay:120ms]">
          <div className="relative overflow-hidden rounded-[1.75rem] border border-navy/20 bg-navy shadow-[0_28px_60px_-34px_rgba(14,36,56,0.55)]">
            <GrowthMountain className="rounded-none" />
            <LeadJourneyOverlay />
          </div>
        </div>
      </div>
    </section>
  );
}

function LeadJourneyOverlay() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-x-0 bottom-0 bg-gradient-to-t from-navy-deep/90 via-navy-deep/45 to-transparent px-4 pt-16 pb-5 sm:px-6 sm:pb-6"
    >
      <p className="text-[0.62rem] font-semibold tracking-[0.16em] text-teal uppercase">
        Conceptual lead journey
      </p>
      <svg viewBox="0 0 100 36" className="mt-3 h-16 w-full" preserveAspectRatio="none">
        <path
          d="M8 28 C24 28, 30 18, 42 16 C54 14, 60 10, 72 9 C82 8, 88 7, 94 6"
          fill="none"
          stroke="color-mix(in srgb, var(--teal) 55%, transparent)"
          strokeWidth="1.4"
          strokeLinecap="round"
        />
        <path
          d="M8 28 C24 28, 30 18, 42 16 C54 14, 60 10, 72 9 C82 8, 88 7, 94 6"
          fill="none"
          stroke="color-mix(in srgb, var(--teal) 80%, white)"
          strokeWidth="0.7"
          strokeLinecap="round"
          strokeDasharray="2 4"
        />
        {journeyNodes.map((node, index) => {
          const y = 28 - index * 6.5;
          const active = index === 1;
          return (
            <g key={node.label}>
              <circle
                cx={node.x}
                cy={y}
                r={active ? 3.2 : 2.4}
                fill={active ? "var(--teal)" : "color-mix(in srgb, var(--teal) 45%, white)"}
                opacity={active ? 1 : 0.85}
              />
              {active ? (
                <circle
                  cx={node.x}
                  cy={y}
                  r="5.5"
                  fill="none"
                  stroke="var(--teal)"
                  strokeOpacity="0.35"
                  strokeWidth="1"
                />
              ) : null}
            </g>
          );
        })}
      </svg>
      <ol className="mt-1 grid grid-cols-4 gap-1 text-center">
        {journeyNodes.map((node) => (
          <li
            key={node.label}
            className="text-[0.62rem] font-medium tracking-wide text-on-dark/75 sm:text-[0.68rem]"
          >
            {node.label}
          </li>
        ))}
      </ol>
    </div>
  );
}

export function GrowthWorkflow() {
  return (
    <section
      aria-labelledby="growth-purpose-heading"
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
            Intended workflow
          </p>
          <h2
            id="growth-purpose-heading"
            className="mt-3 max-w-2xl text-2xl font-bold tracking-tight text-ink sm:text-3xl lg:text-[2.15rem]"
          >
            A clearer path from inquiry to follow-through.
          </h2>
          <p className="mt-4 max-w-2xl text-base leading-7 text-ink/75 sm:text-[1.05rem] sm:leading-8">
            EBS Growth is intended to help service businesses keep incoming
            demand from stalling between the first contact and booked work.
          </p>
        </div>

        <ol className="relative mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-4 xl:gap-4">
          <span
            aria-hidden="true"
            className="pointer-events-none absolute top-10 right-4 left-4 hidden h-px bg-gradient-to-r from-teal/40 via-teal/25 to-teal/10 xl:block"
          />
          {workflowStages.map((stage, index) => (
            <li key={stage.title} className="relative">
              {index < workflowStages.length - 1 ? (
                <span
                  aria-hidden="true"
                  className="pointer-events-none absolute top-12 left-6 h-[calc(100%-0.5rem)] w-px bg-gradient-to-b from-teal/35 to-transparent xl:hidden"
                />
              ) : null}
              <HoverBorderGradient
                as="article"
                duration={1.2}
                className="group relative h-full overflow-hidden bg-white p-5 shadow-none sm:p-6"
              >
                <span
                  aria-hidden="true"
                  className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-teal/70 to-teal/20"
                />
                <div className="flex items-center gap-3">
                  <span className="flex size-11 items-center justify-center rounded-full border border-teal/30 bg-teal/10 text-teal">
                    <WorkflowIcon type={stage.icon} />
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
                {index < workflowStages.length - 1 ? (
                  <p className="mt-4 text-sm font-semibold text-teal motion-safe:transition-transform motion-safe:duration-200 motion-safe:group-hover:translate-x-0.5">
                    Next
                    <span aria-hidden="true"> →</span>
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

export function GrowthCapabilities() {
  return (
    <section
      aria-labelledby="growth-capabilities-heading"
      className="relative overflow-hidden bg-gradient-to-b from-warm via-warm to-[color-mix(in_srgb,var(--brand-sky)_25%,var(--brand-warm))]"
    >
      <div className="mx-auto w-full max-w-7xl px-5 py-14 sm:px-8 sm:py-16 lg:py-20">
        <div>
          <p className="text-xs font-semibold tracking-[0.18em] text-teal uppercase">
            Product direction
          </p>
          <h2
            id="growth-capabilities-heading"
            className="mt-3 max-w-2xl text-2xl font-bold tracking-tight text-ink sm:text-3xl lg:text-[2.15rem]"
          >
            Planned capabilities
          </h2>
          <p className="mt-4 max-w-2xl text-base leading-7 text-ink/75 sm:text-[1.05rem] sm:leading-8">
            These are product directions, not features you can use today.
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
                    <WorkflowIcon type={capability.icon} />
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

export function GrowthPlatformRelationship() {
  return (
    <section
      aria-labelledby="growth-platform-heading"
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
            id="growth-platform-heading"
            className="mt-3 max-w-2xl text-2xl font-bold tracking-tight text-ink sm:text-3xl lg:text-[2.15rem]"
          >
            Where Growth sits in the EBS platform.
          </h2>
          <p className="mt-4 max-w-2xl text-base leading-7 text-ink/75 sm:text-[1.05rem] sm:leading-8">
            Presence helps create or improve the digital front door. Growth is
            intended to turn incoming demand into opportunities. Revenue
            Intelligence will measure what actually becomes booked revenue.
          </p>
        </div>

        <ol className="relative mt-10 grid grid-cols-1 gap-5 lg:grid-cols-3 lg:gap-4">
          <span
            aria-hidden="true"
            className="pointer-events-none absolute top-12 right-8 left-8 hidden h-px bg-gradient-to-r from-teal/35 via-teal/45 to-teal/25 lg:block"
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
                    className="pointer-events-none absolute top-full left-6 h-5 w-px bg-gradient-to-b from-teal/35 to-transparent lg:hidden"
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

export function GrowthFinalCta() {
  return (
    <section
      aria-labelledby="growth-final-cta-heading"
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
              id="growth-final-cta-heading"
              className="mt-4 text-3xl font-bold tracking-tight text-on-dark sm:text-4xl lg:text-[2.45rem] lg:leading-[1.12]"
            >
              Start by understanding where your business stands today.
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-base leading-7 text-on-dark/85 sm:text-lg sm:leading-8">
              EBS Growth is coming soon. Start with your digital foundation and
              identify the opportunities already visible today.
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

function WorkflowIcon({
  type,
}: {
  type: "capture" | "respond" | "followup" | "reactivate";
}) {
  const className = "size-4";
  if (type === "capture") {
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
          d="M5 7.5h6M5 10h4"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.3"
          strokeLinecap="round"
        />
      </svg>
    );
  }
  if (type === "respond") {
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
  if (type === "followup") {
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
        <path
          d="M8 5.2v3.1l2.1 1.3"
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
