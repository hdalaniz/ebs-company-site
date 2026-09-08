import { GrowthMountain } from "@/components/brand/GrowthMountain";
import { Spotlight } from "@/components/brand/Spotlight";
import { ButtonLink, buttonLinkVariants } from "@/components/marketing/ButtonLink";
import { ProductStatusBadge } from "@/components/marketing/ProductStatusBadge";
import { SectionHeading } from "@/components/marketing/SectionHeading";
import { getInsightUrl } from "@/config/site";
import { cn } from "@/lib/cn";

const insightJourney = ["Analyze", "Understand", "Improve"] as const;
const launchJourney = ["Define", "Design", "Build"] as const;
const launchSetupSteps = [
  { label: "Business", complete: true },
  { label: "Goals", complete: true },
  { label: "Style", complete: true },
  { label: "Content", complete: false },
  { label: "Features", complete: false },
  { label: "Preview", complete: false },
] as const;
const launchStyles = [
  { name: "Quiet Professional", tones: ["#0c131c", "#1ec8a5", "#eef3f7"], current: true },
  { name: "Warm & Local", tones: ["#121b27", "#38bdf8", "#8b9aab"], current: false },
  { name: "Bold Contrast", tones: ["#05080d", "#2adbb6", "#eef3f7"], current: false },
] as const;

export function PresenceHero() {
  return (
    <section className="relative mx-auto grid w-full max-w-7xl items-start gap-10 px-5 pt-12 pb-6 sm:px-8 sm:pt-16 sm:pb-8 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] lg:gap-16 lg:pt-20 lg:pb-8">
      <div
        className="pointer-events-none absolute inset-0 overflow-hidden"
        aria-hidden="true"
      >
        <Spotlight className="-top-40 left-0 md:-top-20 md:left-60" />
      </div>

      <div className="relative z-10">
        <p className="inline-flex rounded-full border border-teal/20 bg-teal/10 px-3 py-1 text-[0.7rem] font-semibold tracking-[0.22em] text-teal uppercase">
          EBS Presence
        </p>
        <h1 className="mt-4 max-w-2xl text-[2.05rem] leading-[1.08] font-bold tracking-tight text-light sm:text-5xl lg:text-[3.25rem]">
          Make your online presence{" "}
          <span className="text-teal">work harder</span> for your business.
        </h1>
        <p className="mt-6 max-w-xl text-[1.0625rem] leading-7 text-light/80 sm:text-lg sm:leading-8">
          Whether you&apos;re starting from scratch or already have a website,
          EBS Presence helps you build, understand, and improve the digital
          foundation customers see first.
        </p>
        <div className="mt-8">
          <ButtonLink href="/products/presence#presence-decision" className="w-full sm:w-auto">
            Choose your path
          </ButtonLink>
        </div>
      </div>

      <div className="relative z-10 flex w-full flex-col">
        <div className="relative -mx-2 overflow-hidden sm:mx-0 lg:-mt-8 lg:-mr-6 lg:overflow-visible">
          <GrowthMountain className="pointer-events-none h-auto w-full lg:w-[118%] lg:max-w-none" />
        </div>
      </div>
    </section>
  );
}

export function PresenceDecision() {
  return (
    <section
      id="presence-decision"
      aria-labelledby="presence-decision-heading"
      className="mx-auto w-full max-w-7xl scroll-mt-6 px-5 pt-2 pb-12 sm:px-8 sm:pt-4 sm:pb-16 lg:pt-6 lg:pb-20"
    >
      <SectionHeading
        headingId="presence-decision-heading"
        heading="Do you already have a website?"
        supporting="Choose the path that best matches where your business is today."
      />

      <div className="mt-8 grid items-stretch gap-5 lg:grid-cols-2 lg:gap-6">
        <article
          id="ebs-insight"
          className="ebs-card group flex h-full flex-col overflow-hidden ring-1 ring-inset ring-teal/20"
        >
          <div
            className="relative h-24 overflow-hidden border-b border-border bg-gradient-to-br from-teal/12 to-transparent text-teal sm:h-28"
            aria-hidden="true"
          >
            <InsightIconography />
          </div>

          <div className="flex flex-1 flex-col px-5 py-6 sm:px-7 sm:py-7">
            <p className="text-[0.7rem] font-semibold tracking-[0.18em] text-teal uppercase">
              Yes — I already have a website
            </p>
            <div className="mt-3 flex flex-wrap items-center gap-3">
              <p className="text-sm font-semibold text-light">EBS Insight</p>
              <ProductStatusBadge status="available" label="Available" />
            </div>
            <h3 className="mt-4 text-xl font-semibold tracking-tight text-light sm:text-2xl">
              Find what&apos;s holding your website back.
            </h3>
            <p className="mt-3 text-sm leading-6 text-light/80 sm:text-[0.95rem] sm:leading-7">
              Analyze your existing online presence, uncover conversion
              problems, and get prioritized recommendations for what to improve
              next.
            </p>

            <CompactJourney steps={insightJourney} accent="teal" />
            <InsightPreview />

            <div className="mt-auto pt-6">
              <ButtonLink
                href={getInsightUrl("/analyze")}
                className="w-full sm:w-auto"
              >
                Analyze My Website
              </ButtonLink>
            </div>
          </div>
        </article>

        <article
          id="ebs-launch-path"
          className="ebs-card group flex h-full flex-col overflow-hidden ring-1 ring-inset ring-teal-secondary/15"
        >
          <div
            className="relative h-24 overflow-hidden border-b border-border bg-gradient-to-br from-teal-secondary/10 to-transparent text-teal-secondary sm:h-28"
            aria-hidden="true"
          >
            <LaunchIconography />
          </div>

          <div className="flex flex-1 flex-col px-5 py-6 sm:px-7 sm:py-7">
            <p className="text-[0.7rem] font-semibold tracking-[0.18em] text-teal-secondary uppercase">
              No — I need a website
            </p>
            <div className="mt-3 flex flex-wrap items-center gap-3">
              <p className="text-sm font-semibold text-light">EBS Launch</p>
              <ProductStatusBadge status="coming-soon" />
            </div>
            <h3 className="mt-4 text-xl font-semibold tracking-tight text-light sm:text-2xl">
              Build your digital foundation.
            </h3>
            <p className="mt-3 text-sm leading-6 text-light/80 sm:text-[0.95rem] sm:leading-7">
              Tell EBS about your business, goals, visual preferences, services,
              and desired features through a guided website-building experience.
            </p>

            <CompactJourney steps={launchJourney} accent="cyan" />
            <LaunchCardPreview />

            <div className="mt-auto pt-6">
              <ButtonLink
                href="/products/presence#ebs-launch"
                variant="secondary"
                className="w-full sm:w-auto"
              >
                Preview EBS Launch
              </ButtonLink>
            </div>
          </div>
        </article>
      </div>
    </section>
  );
}

export function PresenceRelationship() {
  return (
    <section
      aria-labelledby="presence-relationship-heading"
      className="mx-auto w-full max-w-7xl px-5 pt-2 pb-10 sm:px-8 sm:pt-4 sm:pb-12 lg:pt-6 lg:pb-14"
    >
      <p className="text-[0.7rem] font-semibold tracking-[0.22em] text-teal uppercase">
        EBS Presence
      </p>
      <h2
        id="presence-relationship-heading"
        className="sr-only"
      >
        How EBS Presence connects Insight and Launch
      </h2>

      <div className="ebs-card mt-4 grid gap-0 overflow-hidden md:grid-cols-2">
        <div className="border-b border-border px-5 py-5 sm:px-6 sm:py-6 md:border-r md:border-b-0">
          <p className="text-[0.68rem] font-semibold tracking-[0.16em] text-muted uppercase">
            Existing website
          </p>
          <p className="mt-3 text-base font-semibold tracking-tight text-light">
            EBS Insight
          </p>
          <p className="mt-2 text-sm text-light/80">Analyze + Improve</p>
        </div>
        <div className="px-5 py-5 sm:px-6 sm:py-6">
          <p className="text-[0.68rem] font-semibold tracking-[0.16em] text-muted uppercase">
            No website
          </p>
          <p className="mt-3 text-base font-semibold tracking-tight text-light">
            EBS Launch
          </p>
          <p className="mt-2 text-sm text-light/80">Design + Build</p>
        </div>
      </div>
    </section>
  );
}

export function LaunchPreview() {
  return (
    <section
      id="ebs-launch"
      aria-labelledby="ebs-launch-heading"
      className="mx-auto w-full max-w-7xl scroll-mt-6 px-5 pt-2 pb-10 sm:px-8 sm:pt-4 sm:pb-12 lg:pt-6 lg:pb-16"
    >
      <SectionHeading
        eyebrow="Coming Soon"
        headingId="ebs-launch-heading"
        heading="Meet EBS Launch."
        supporting="A guided website-building experience designed to turn your business information, goals, visual preferences, services, and desired features into a professional digital foundation."
      />

      <figure className="ebs-card relative mt-8 overflow-hidden border-teal-secondary/30">
        <figcaption className="flex flex-wrap items-center justify-between gap-2 border-b border-border px-5 py-3 sm:px-6">
          <span className="text-[0.68rem] font-semibold tracking-[0.2em] text-teal-secondary uppercase">
            Website setup
          </span>
          <span className="text-[0.68rem] font-semibold tracking-[0.16em] text-muted uppercase">
            Product vision preview
          </span>
        </figcaption>

        <div className="px-5 py-6 sm:px-8 sm:py-8">
          <ol className="flex flex-wrap gap-2">
            {launchSetupSteps.map((step) => (
              <li
                key={step.label}
                className={cn(
                  "inline-flex items-center gap-2 rounded-full border px-3 py-1.5 text-sm",
                  step.complete
                    ? "border-teal/30 bg-teal/10 text-light"
                    : "border-border bg-surface-elevated/70 text-muted",
                )}
              >
                <span
                  className={cn(
                    "size-2 rounded-full",
                    step.complete ? "bg-teal" : "border border-muted/50",
                  )}
                  aria-hidden="true"
                />
                {step.label}
              </li>
            ))}
          </ol>

          <div className="mt-8">
            <p className="text-[0.7rem] font-semibold tracking-[0.18em] text-teal uppercase">
              Current step
            </p>
            <h3 className="mt-2 text-lg font-semibold tracking-tight text-light sm:text-xl">
              Choose a visual direction
            </h3>
          </div>

          <div className="mt-5 grid gap-3 sm:grid-cols-3">
            {launchStyles.map((style) => (
              <div
                key={style.name}
                className={cn(
                  "rounded-xl border bg-surface-elevated/70 p-4",
                  style.current
                    ? "border-teal/40 ring-1 ring-inset ring-teal/20"
                    : "border-border",
                )}
              >
                <div className="flex gap-1.5" aria-hidden="true">
                  {style.tones.map((tone) => (
                    <span
                      key={tone}
                      className="size-6 rounded-full border border-light/10"
                      style={{ backgroundColor: tone }}
                    />
                  ))}
                </div>
                <p className="mt-3 text-sm font-medium text-light">{style.name}</p>
                {style.current ? (
                  <p className="mt-1 text-xs font-medium text-teal">Selected</p>
                ) : (
                  <p className="mt-1 text-xs text-muted">Preview</p>
                )}
              </div>
            ))}
          </div>
        </div>
      </figure>

      <div className="mt-6">
        <span
          className={cn(buttonLinkVariants.secondary, "pointer-events-none w-full sm:w-auto")}
          aria-disabled="true"
        >
          Coming Soon
        </span>
      </div>
    </section>
  );
}

export function PresenceFinalCta() {
  return (
    <section
      aria-labelledby="presence-final-cta-heading"
      className="mx-auto w-full max-w-7xl px-5 pt-4 pb-16 sm:px-8 sm:pt-6 sm:pb-20 lg:pt-8 lg:pb-24"
    >
      <div className="ebs-card relative overflow-hidden px-6 py-12 sm:px-12 sm:py-16 lg:px-16 lg:py-20">
        <div className="final-cta-glow" aria-hidden="true" />
        <div className="relative z-10">
          <h2
            id="presence-final-cta-heading"
            className="max-w-2xl text-3xl font-bold tracking-tight text-light sm:text-4xl lg:text-[2.65rem] lg:leading-[1.12]"
          >
            Start with where your business is today.
          </h2>
          <p className="mt-5 max-w-2xl text-base leading-7 text-light/80 sm:text-lg sm:leading-8">
            Already have a website? Use EBS Insight to understand what to
            improve. Starting from scratch? EBS Launch is being built for you.
          </p>
          <div className="mt-8 flex flex-col items-stretch gap-3 sm:flex-row sm:flex-wrap sm:items-center sm:gap-x-5">
            <ButtonLink
              href={getInsightUrl("/analyze")}
              className="w-full sm:w-auto"
            >
              Run EBS Insight
            </ButtonLink>
            <ButtonLink
              href="/#products"
              variant="ghost"
              className="w-full sm:w-auto"
            >
              Explore EBS Products
            </ButtonLink>
          </div>
        </div>
      </div>
    </section>
  );
}

function CompactJourney({
  steps,
  accent,
}: {
  steps: readonly string[];
  accent: "teal" | "cyan";
}) {
  const isTeal = accent === "teal";

  return (
    <ol className="mt-5 flex flex-wrap items-center gap-x-2 gap-y-2">
      {steps.map((step, index) => (
        <li key={step} className="flex items-center gap-2">
          <span
            className={
              isTeal
                ? "flex size-7 items-center justify-center rounded-full border border-teal/40 bg-teal/10 text-[0.65rem] font-semibold text-teal"
                : "flex size-7 items-center justify-center rounded-full border border-teal-secondary/40 bg-teal-secondary/10 text-[0.65rem] font-semibold text-teal-secondary"
            }
          >
            {index + 1}
          </span>
          <span className="text-sm font-medium text-light">{step}</span>
          {index < steps.length - 1 ? (
            <span
              className={isTeal ? "text-teal/50" : "text-teal-secondary/50"}
              aria-hidden="true"
            >
              →
            </span>
          ) : null}
        </li>
      ))}
    </ol>
  );
}

function InsightPreview() {
  return (
    <figure className="mt-6 overflow-hidden rounded-xl border border-border bg-surface-elevated/70">
      <figcaption className="flex items-center justify-between gap-2 border-b border-border px-4 py-2.5">
        <span className="text-[0.65rem] font-semibold tracking-[0.16em] text-teal uppercase">
          Insight snapshot
        </span>
        <span className="text-[0.65rem] font-semibold tracking-[0.14em] text-muted uppercase">
          Conceptual preview
        </span>
      </figcaption>
      <div className="grid gap-px bg-border sm:grid-cols-3">
        <div className="bg-surface-elevated/70 px-4 py-3">
          <p className="text-[0.65rem] font-semibold tracking-[0.14em] text-muted uppercase">
            Website Growth Score
          </p>
          <p className="mt-1 text-xl font-semibold tracking-tight text-light">78</p>
        </div>
        <div className="bg-surface-elevated/70 px-4 py-3">
          <p className="text-[0.65rem] font-semibold tracking-[0.14em] text-muted uppercase">
            Key Opportunities
          </p>
          <p className="mt-1 text-xl font-semibold tracking-tight text-light">4</p>
        </div>
        <div className="bg-surface-elevated/70 px-4 py-3 sm:col-span-1">
          <p className="text-[0.65rem] font-semibold tracking-[0.14em] text-muted uppercase">
            Recommended Next Action
          </p>
          <p className="mt-1 text-sm font-medium leading-5 text-light">
            Improve after-hours lead capture
          </p>
        </div>
      </div>
    </figure>
  );
}

function LaunchCardPreview() {
  const steps = [
    "Business Setup",
    "Visual Style",
    "Colors",
    "Services",
    "Features",
    "Preview",
  ] as const;

  return (
    <figure className="mt-6 overflow-hidden rounded-xl border border-border bg-surface-elevated/70">
      <figcaption className="flex flex-wrap items-center justify-between gap-2 border-b border-border px-4 py-2.5">
        <span className="text-[0.65rem] font-semibold tracking-[0.16em] text-teal-secondary uppercase">
          Step 2 of 6
        </span>
        <span className="text-[0.65rem] font-semibold tracking-[0.14em] text-muted uppercase">
          Conceptual preview
        </span>
      </figcaption>
      <div className="px-4 py-4">
        <p className="text-sm font-medium text-light">Choose your visual style</p>
        <ol className="mt-3 flex flex-wrap gap-1.5">
          {steps.map((step) => (
            <li
              key={step}
              className={
                step === "Visual Style"
                  ? "rounded-full border border-teal-secondary/40 bg-teal-secondary/10 px-2.5 py-1 text-xs font-medium text-light"
                  : "rounded-full border border-border px-2.5 py-1 text-xs text-muted"
              }
            >
              {step}
            </li>
          ))}
        </ol>
      </div>
    </figure>
  );
}

function InsightIconography() {
  return (
    <svg viewBox="0 0 320 112" className="absolute inset-0 h-full w-full">
      <rect
        x="36"
        y="28"
        width="92"
        height="60"
        rx="10"
        fill="none"
        stroke="currentColor"
        strokeOpacity="0.4"
        strokeWidth="1.6"
      />
      <path
        d="M52 68 74 48l18 14 22-24"
        fill="none"
        stroke="currentColor"
        strokeOpacity="0.8"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle
        cx="198"
        cy="56"
        r="22"
        fill="none"
        stroke="currentColor"
        strokeOpacity="0.7"
        strokeWidth="1.8"
      />
      <path
        d="M198 42v14l10 6"
        fill="none"
        stroke="currentColor"
        strokeOpacity="0.7"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
    </svg>
  );
}

function LaunchIconography() {
  return (
    <svg viewBox="0 0 320 112" className="absolute inset-0 h-full w-full">
      <rect
        x="42"
        y="26"
        width="88"
        height="62"
        rx="8"
        fill="none"
        stroke="currentColor"
        strokeOpacity="0.45"
        strokeWidth="1.6"
      />
      <path
        d="M42 44h88"
        fill="none"
        stroke="currentColor"
        strokeOpacity="0.28"
        strokeWidth="1.3"
      />
      <rect
        x="156"
        y="34"
        width="52"
        height="46"
        rx="8"
        fill="none"
        stroke="currentColor"
        strokeOpacity="0.7"
        strokeWidth="1.6"
      />
      <rect
        x="222"
        y="42"
        width="52"
        height="38"
        rx="8"
        fill="none"
        stroke="currentColor"
        strokeOpacity="0.3"
        strokeWidth="1.5"
      />
    </svg>
  );
}
