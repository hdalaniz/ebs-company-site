import { ScenicPhoto } from "@/components/brand/ScenicPhoto";
import { ButtonLink } from "@/components/marketing/ButtonLink";
import { ProductStatusBadge } from "@/components/marketing/ProductStatusBadge";
import { brand } from "@/config/brand";
import { getInsightUrl } from "@/config/site";
import { cn } from "@/lib/cn";

const insightJourney = ["Analyze", "Understand", "Improve"] as const;
const launchJourney = ["Define", "Design", "Build"] as const;
const launchSetupSteps = [
  { label: "Business", complete: true },
  { label: "Goals", complete: true },
  { label: "Style", complete: true },
  { label: "Services", complete: false },
  { label: "Features", complete: false },
  { label: "Preview", complete: false },
] as const;
const launchStyles = [
  {
    name: "Modern",
    tones: ["#143049", "#1ec8a5", "#e6eef4"],
    current: true,
  },
  {
    name: "Warm",
    tones: ["#4d6b5a", "#1ec8a5", "#f6f3ee"],
    current: false,
  },
  {
    name: "Bold",
    tones: ["#0e2438", "#17b395", "#ffffff"],
    current: false,
  },
] as const;

const presenceBenefits = [
  {
    title: "Build trust quickly",
    description:
      "A clear, professional online presence helps customers feel confident choosing your business.",
  },
  {
    title: "Make it easy to take the next step",
    description:
      "When contact paths are obvious, more visitors become calls, forms, and booked jobs.",
  },
  {
    title: "Turn more visits into opportunities",
    description:
      "Presence helps you strengthen the digital front door customers see before they ever pick up the phone.",
  },
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

      <div className="relative z-10 mx-auto w-full max-w-7xl px-5 pt-24 pb-14 sm:px-8 sm:pt-28 sm:pb-16 lg:pt-16 lg:pb-20">
        <div className="max-w-2xl">
          <p className="text-xs font-semibold tracking-[0.18em] text-teal uppercase">
            EBS Presence
          </p>
          <h1 className="mt-4 text-[2.15rem] leading-[1.12] font-bold tracking-tight text-ink sm:text-5xl lg:text-[3.25rem] lg:leading-[1.08]">
            Make your online presence work harder for your business.
          </h1>
          <p className="mt-5 max-w-xl text-[1.0625rem] leading-7 text-ink/80 sm:text-lg sm:leading-8">
            Whether you&apos;re starting from scratch or already have a website,
            EBS Presence helps you build, understand, and improve the digital
            foundation customers see first.
          </p>
          <div className="mt-8">
            <ButtonLink
              href="/products/presence#presence-decision"
              className="w-full sm:w-auto"
            >
              Choose your path
            </ButtonLink>
          </div>
          <p className="mt-6 text-sm font-medium tracking-wide text-ink/70">
            Built for local businesses. Designed for growth.
          </p>
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
      className="mx-auto w-full max-w-7xl scroll-mt-6 px-5 pt-6 pb-14 sm:px-8 sm:pt-8 sm:pb-16 lg:pt-10 lg:pb-20"
    >
      <div>
        <h2
          id="presence-decision-heading"
          className="max-w-2xl text-2xl font-bold tracking-tight text-ink sm:text-3xl lg:text-[2.15rem]"
        >
          Do you already have a website?
        </h2>
        <p className="mt-4 max-w-2xl text-base leading-7 text-ink/75 sm:text-[1.05rem] sm:leading-8">
          Choose the path that best matches where your business is today.
        </p>
      </div>

      <div className="mt-10 grid items-stretch gap-5 lg:grid-cols-2 lg:gap-6">
        <article
          id="ebs-insight"
          className="ebs-card ebs-card-featured group flex h-full flex-col overflow-hidden"
        >
          <div className="flex flex-1 flex-col px-5 py-6 sm:px-7 sm:py-8">
            <p className="text-xs font-semibold tracking-[0.18em] text-teal uppercase">
              Yes — I already have a website
            </p>
            <div className="mt-3 flex flex-wrap items-center gap-3">
              <p className="text-lg font-semibold tracking-tight text-ink">
                EBS Insight
              </p>
              <ProductStatusBadge status="available" label="Available" />
            </div>
            <h3 className="mt-4 text-xl font-semibold tracking-tight text-ink sm:text-2xl">
              Find what&apos;s holding your website back.
            </h3>
            <p className="mt-3 text-sm leading-6 text-ink/75 sm:text-[0.95rem] sm:leading-7">
              Analyze your existing online presence, uncover conversion
              problems, and get prioritized recommendations for what to improve
              next.
            </p>

            <CompactJourney steps={insightJourney} accent="teal" />
            <InsightPreview />

            <div className="mt-auto pt-7">
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
          className="ebs-card group flex h-full flex-col overflow-hidden"
        >
          <div className="flex flex-1 flex-col px-5 py-6 sm:px-7 sm:py-8">
            <p className="text-xs font-semibold tracking-[0.18em] text-muted uppercase">
              No — I need a website
            </p>
            <div className="mt-3 flex flex-wrap items-center gap-3">
              <p className="text-lg font-semibold tracking-tight text-ink">
                EBS Launch
              </p>
              <ProductStatusBadge status="coming-soon" />
            </div>
            <h3 className="mt-4 text-xl font-semibold tracking-tight text-ink sm:text-2xl">
              Build your digital foundation.
            </h3>
            <p className="mt-3 text-sm leading-6 text-ink/75 sm:text-[0.95rem] sm:leading-7">
              Tell EBS about your business, goals, visual preferences, services,
              and desired features through a guided website-building experience.
            </p>

            <CompactJourney steps={launchJourney} accent="slate" />
            <LaunchCardPreview />

            <div className="mt-auto pt-7">
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
      className="section-sky"
    >
      <div className="mx-auto w-full max-w-7xl px-5 py-14 sm:px-8 sm:py-16 lg:py-20">
        <div>
          <p className="text-xs font-semibold tracking-[0.18em] text-teal uppercase">
            EBS Presence
          </p>
          <h2
            id="presence-relationship-heading"
            className="mt-3 max-w-2xl text-2xl font-bold tracking-tight text-ink sm:text-3xl lg:text-[2.15rem]"
          >
            Two ways to strengthen your online presence.
          </h2>
        </div>

        <div className="mt-10 grid gap-5 lg:grid-cols-2 lg:gap-6">
          <div className="ebs-card p-6 sm:p-7">
            <p className="text-sm font-medium text-muted">
              Already have a website
            </p>
            <p className="mt-2 text-lg font-semibold tracking-tight text-ink">
              EBS Insight
            </p>
            <ol className="mt-5 flex flex-wrap items-center gap-x-2 gap-y-2 text-sm text-ink/80">
              <li className="font-medium text-ink">Analyze</li>
              <li aria-hidden="true" className="text-teal/50">
                →
              </li>
              <li className="font-medium text-ink">Prioritize</li>
              <li aria-hidden="true" className="text-teal/50">
                →
              </li>
              <li className="font-medium text-ink">Improve</li>
            </ol>
          </div>

          <div className="ebs-card p-6 sm:p-7">
            <p className="text-sm font-medium text-muted">Need a website</p>
            <p className="mt-2 text-lg font-semibold tracking-tight text-ink">
              EBS Launch
            </p>
            <ol className="mt-5 flex flex-wrap items-center gap-x-2 gap-y-2 text-sm text-ink/80">
              <li className="font-medium text-ink">Define</li>
              <li aria-hidden="true" className="text-teal/50">
                →
              </li>
              <li className="font-medium text-ink">Design</li>
              <li aria-hidden="true" className="text-teal/50">
                →
              </li>
              <li className="font-medium text-ink">Build</li>
            </ol>
          </div>
        </div>
      </div>
    </section>
  );
}

export function PresenceWhy() {
  return (
    <section
      aria-labelledby="presence-why-heading"
      className="mx-auto w-full max-w-7xl px-5 pt-14 pb-10 sm:px-8 sm:pt-16 sm:pb-12 lg:pt-20 lg:pb-14"
    >
      <div>
        <p className="text-xs font-semibold tracking-[0.18em] text-teal uppercase">
          Why EBS Presence
        </p>
        <h2
          id="presence-why-heading"
          className="mt-3 max-w-2xl text-2xl font-bold tracking-tight text-ink sm:text-3xl lg:text-[2.15rem]"
        >
          Your online presence is often your first impression.
        </h2>
        <p className="mt-4 max-w-2xl text-base leading-7 text-ink/75 sm:text-[1.05rem] sm:leading-8">
          For local service businesses, a website is more than a brochure. It
          helps customers decide whether to call, trust, and choose your
          business.
        </p>
      </div>

      <div className="mt-10 grid gap-5 sm:grid-cols-2 md:grid-cols-3">
        {presenceBenefits.map((benefit) => (
          <article key={benefit.title} className="ebs-card p-6 sm:p-7">
            <h3 className="text-lg font-semibold tracking-tight text-ink">
              {benefit.title}
            </h3>
            <p className="mt-2 text-sm leading-6 text-ink/75 sm:text-[0.95rem] sm:leading-7">
              {benefit.description}
            </p>
          </article>
        ))}
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
      <ScenicPhoto
        src={brand.assets.localNeighborhood}
        alt={brand.photography.localNeighborhoodAlt}
        variant="band"
        objectPosition="object-[center_40%]"
      />

      <div className="relative z-10 mx-auto w-full max-w-7xl px-5 py-16 sm:px-8 sm:py-20 lg:py-24">
        <div className="max-w-2xl">
          <h2
            id="presence-local-heading"
            className="text-3xl font-bold tracking-tight text-on-dark sm:text-4xl lg:text-[2.65rem] lg:leading-[1.12]"
          >
            A stronger digital front door for a stronger local business.
          </h2>
          <p className="mt-5 max-w-xl text-base leading-7 text-on-dark/85 sm:text-lg sm:leading-8">
            EBS Presence is being built around the way home-service businesses
            actually win customers — through trust, clarity, local reputation,
            and an easy path to contact.
          </p>
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
      className="mx-auto w-full max-w-7xl scroll-mt-6 px-5 pt-14 pb-10 sm:px-8 sm:pt-16 sm:pb-12 lg:pt-20 lg:pb-16"
    >
      <div>
        <p className="text-xs font-semibold tracking-[0.18em] text-teal uppercase">
          Coming Soon
        </p>
        <h2
          id="ebs-launch-heading"
          className="mt-3 max-w-2xl text-2xl font-bold tracking-tight text-ink sm:text-3xl lg:text-[2.15rem]"
        >
          Meet EBS Launch.
        </h2>
        <p className="mt-4 max-w-2xl text-base leading-7 text-ink/75 sm:text-[1.05rem] sm:leading-8">
          A guided website-building experience designed to turn your business
          information, goals, services, and visual preferences into a
          professional online presence.
        </p>
      </div>

      <figure className="ebs-card relative mt-10 overflow-hidden">
        <figcaption className="flex flex-wrap items-center justify-between gap-2 border-b border-border px-5 py-3.5 sm:px-6">
          <span className="text-xs font-semibold tracking-[0.16em] text-muted uppercase">
            Website setup
          </span>
          <span className="text-xs font-semibold tracking-[0.16em] text-teal uppercase">
            Product vision preview
          </span>
        </figcaption>

        <div className="px-5 py-7 sm:px-8 sm:py-9">
          <ol className="flex flex-wrap gap-2">
            {launchSetupSteps.map((step) => (
              <li
                key={step.label}
                className={cn(
                  "inline-flex items-center gap-2 rounded-full border px-3 py-1.5 text-sm",
                  step.complete
                    ? "border-teal/30 bg-teal/10 text-ink"
                    : "border-border bg-sky/40 text-muted",
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
            <p className="text-xs font-semibold tracking-[0.18em] text-teal uppercase">
              Step 2 of 6
            </p>
            <h3 className="mt-2 text-lg font-semibold tracking-tight text-ink sm:text-xl">
              Choose your visual style
            </h3>
          </div>

          <div className="mt-5 grid gap-3 sm:grid-cols-3">
            {launchStyles.map((style) => (
              <div
                key={style.name}
                className={cn(
                  "rounded-2xl border bg-sky/30 p-4",
                  style.current
                    ? "border-teal/40 ring-1 ring-inset ring-teal/20"
                    : "border-border",
                )}
              >
                <div className="flex gap-1.5" aria-hidden="true">
                  {style.tones.map((tone) => (
                    <span
                      key={tone}
                      className="size-6 rounded-full border border-navy/15"
                      style={{ backgroundColor: tone }}
                    />
                  ))}
                </div>
                <p className="mt-3 text-sm font-medium text-ink">{style.name}</p>
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
    </section>
  );
}

export function PresenceFinalCta() {
  return (
    <section
      aria-labelledby="presence-final-cta-heading"
      className="relative isolate overflow-hidden"
    >
      <ScenicPhoto
        src={brand.assets.ctaValley}
        alt={brand.photography.ctaValleyAlt}
        variant="cta"
        objectPosition="object-[center_45%]"
      />

      <div className="relative z-10 mx-auto w-full max-w-7xl px-5 py-16 sm:px-8 sm:py-20 lg:py-24">
        <div className="max-w-2xl">
          <h2
            id="presence-final-cta-heading"
            className="text-3xl font-bold tracking-tight text-on-dark sm:text-4xl lg:text-[2.65rem] lg:leading-[1.12]"
          >
            Start with where your business is today.
          </h2>
          <p className="mt-5 max-w-xl text-base leading-7 text-on-dark/85 sm:text-lg sm:leading-8">
            Already have a website? Use EBS Insight to understand what to
            improve. Starting from scratch? EBS Launch is being built for you.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center sm:gap-x-5 sm:gap-y-3">
            <ButtonLink
              href={getInsightUrl("/analyze")}
              className="w-full sm:w-auto"
            >
              Run EBS Insight
            </ButtonLink>
            <ButtonLink
              href="/#products"
              variant="ghost"
              className="w-full text-on-dark hover:text-teal sm:w-auto"
            >
              Explore EBS Products
            </ButtonLink>
          </div>
          <p className="mt-7 text-sm font-medium tracking-wide text-on-dark/70">
            Better systems. Stronger businesses.
          </p>
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
  accent: "teal" | "slate";
}) {
  const isTeal = accent === "teal";

  return (
    <ol className="mt-5 flex flex-wrap items-center gap-x-2 gap-y-2">
      {steps.map((step, index) => (
        <li key={step} className="flex items-center gap-2">
          <span
            className={
              isTeal
                ? "flex size-7 items-center justify-center rounded-full border border-teal/40 bg-teal/10 text-xs font-semibold text-teal"
                : "flex size-7 items-center justify-center rounded-full border border-navy/15 bg-sky text-xs font-semibold text-muted"
            }
          >
            {index + 1}
          </span>
          <span className="text-sm font-medium text-ink">{step}</span>
          {index < steps.length - 1 ? (
            <span
              className={isTeal ? "text-teal/50" : "text-muted/60"}
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
    <figure className="mt-6 overflow-hidden rounded-2xl border border-border bg-sky/35">
      <figcaption className="flex items-center justify-between gap-2 border-b border-border px-4 py-2.5">
        <span className="text-xs font-semibold tracking-[0.14em] text-teal uppercase">
          Insight snapshot
        </span>
        <span className="text-xs font-semibold tracking-[0.14em] text-muted uppercase">
          Conceptual preview
        </span>
      </figcaption>
      <div className="grid gap-px bg-border sm:grid-cols-3">
        <div className="bg-white/80 px-4 py-3.5">
          <p className="text-xs font-semibold tracking-[0.12em] text-muted uppercase">
            Website Growth Score
          </p>
          <p className="mt-1.5 text-xl font-semibold tracking-tight text-ink">
            78
          </p>
        </div>
        <div className="bg-white/80 px-4 py-3.5">
          <p className="text-xs font-semibold tracking-[0.12em] text-muted uppercase">
            Key Opportunities
          </p>
          <p className="mt-1.5 text-xl font-semibold tracking-tight text-ink">
            4
          </p>
        </div>
        <div className="bg-white/80 px-4 py-3.5">
          <p className="text-xs font-semibold tracking-[0.12em] text-muted uppercase">
            Recommended Next Action
          </p>
          <p className="mt-1.5 text-sm font-medium leading-5 text-ink">
            Improve after-hours lead capture
          </p>
        </div>
      </div>
    </figure>
  );
}

function LaunchCardPreview() {
  const steps = [
    "Business",
    "Goals",
    "Style",
    "Services",
    "Features",
    "Preview",
  ] as const;

  return (
    <figure className="mt-6 overflow-hidden rounded-2xl border border-border bg-sky/35">
      <figcaption className="flex flex-wrap items-center justify-between gap-2 border-b border-border px-4 py-2.5">
        <span className="text-xs font-semibold tracking-[0.14em] text-muted uppercase">
          Step 2 of 6
        </span>
        <span className="text-xs font-semibold tracking-[0.14em] text-muted uppercase">
          Conceptual preview
        </span>
      </figcaption>
      <div className="px-4 py-4">
        <p className="text-sm font-medium text-ink">Choose your visual style</p>
        <ol className="mt-3 flex flex-wrap gap-1.5">
          {steps.map((step) => (
            <li
              key={step}
              className={
                step === "Style"
                  ? "rounded-full border border-teal/35 bg-teal/10 px-2.5 py-1 text-xs font-medium text-ink"
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
