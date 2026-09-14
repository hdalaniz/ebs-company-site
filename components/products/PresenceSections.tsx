"use client";

import { ScenicPhoto } from "@/components/brand/ScenicPhoto";
import { ButtonLink } from "@/components/marketing/ButtonLink";
import { ProductStatusBadge } from "@/components/marketing/ProductStatusBadge";
import { HoverBorderGradient } from "@/components/ui/hover-border-gradient";
import { SpotlightNew } from "@/components/ui/spotlight-new";
import { brand } from "@/config/brand";
import { products } from "@/config/products";
import { ctaCopy, getInsightUrl } from "@/config/site";
import { cn } from "@/lib/cn";

const insightJourney = ["Analyze", "Understand", "Improve"] as const;
const launchJourney = ["Define", "Design", "Build"] as const;
const insightPath = [
  { label: "Analyze", icon: "analyze" },
  { label: "Prioritize", icon: "prioritize" },
  { label: "Improve", icon: "improve" },
] as const;
const launchPath = [
  { label: "Define", icon: "define" },
  { label: "Design", icon: "design" },
  { label: "Build", icon: "build" },
] as const;
const launchSetupSteps: ReadonlyArray<{
  label: string;
  complete: boolean;
  active?: boolean;
}> = [
  { label: "Business", complete: true },
  { label: "Goals", complete: true },
  { label: "Style", complete: true, active: true },
  { label: "Services", complete: false },
  { label: "Features", complete: false },
  { label: "Preview", complete: false },
];
const launchStyles = [
  {
    name: "Modern",
    tones: ["#143049", "#1ec8a5", "#e6eef4"],
    current: true,
    vibe: "cool",
  },
  {
    name: "Warm",
    tones: ["#4d6b5a", "#1ec8a5", "#f6f3ee"],
    current: false,
    vibe: "warm",
  },
  {
    name: "Bold",
    tones: ["#0e2438", "#17b395", "#ffffff"],
    current: false,
    vibe: "bold",
  },
] as const;

const presenceBenefits = [
  {
    title: "Build trust quickly",
    label: "Trust",
    icon: "trust" as const,
    description:
      "A clear, professional online presence helps customers feel confident choosing your business.",
  },
  {
    title: "Make it easy to take the next step",
    label: "Conversion",
    icon: "conversion" as const,
    description:
      "When contact paths are obvious, more visitors become calls, forms, and booked jobs.",
  },
  {
    title: "Turn more visits into opportunities",
    label: "Opportunity",
    icon: "opportunity" as const,
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

      <div className="pointer-events-none absolute inset-0 z-[1] hidden md:block">
        <SpotlightNew duration={16} xOffset={36} />
      </div>

      <div className="relative z-10 mx-auto w-full max-w-7xl px-5 pt-24 pb-14 sm:px-8 sm:pt-28 sm:pb-16 lg:pt-16 lg:pb-20">
        <div className="max-w-2xl motion-safe:animate-fade-up">
          <div className="flex flex-wrap items-center gap-3">
            <p className="text-xs font-semibold tracking-[0.18em] text-teal uppercase">
              EBS Presence
            </p>
            <ProductStatusBadge
              status="available"
              label={
                products.find((product) => product.key === "presence")
                  ?.statusLabel
              }
            />
          </div>
          <h1 className="mt-4 text-[2.15rem] leading-[1.12] font-bold tracking-tight text-ink sm:text-5xl lg:text-[3.25rem] lg:leading-[1.08]">
            Make your online presence work harder for your business.
          </h1>
          <p className="mt-5 max-w-xl text-[1.0625rem] leading-7 text-ink/80 sm:text-lg sm:leading-8">
            Whether you&apos;re starting from scratch or already have a website,
            EBS Presence helps you build, understand, and improve the digital
            foundation customers see first.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center sm:gap-x-5 sm:gap-y-3">
            <ButtonLink
              href="/products/presence#presence-decision"
              className="w-full sm:w-auto"
            >
              Choose your path
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
      </div>
    </section>
  );
}

export function PresenceDecision() {
  return (
    <section
      id="presence-decision"
      aria-labelledby="presence-decision-heading"
      className="mx-auto w-full max-w-7xl scroll-mt-24 px-5 pt-6 pb-14 sm:px-8 sm:pt-8 sm:pb-16 lg:pt-10 lg:pb-20"
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
        <HoverBorderGradient
          as="article"
          id="ebs-insight"
          containerClassName="scroll-mt-24 shadow-[var(--shadow-card-featured)]"
          className="ebs-card-featured group flex h-full flex-col overflow-hidden shadow-none"
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
                {ctaCopy.insight}
              </ButtonLink>
            </div>
          </div>
        </HoverBorderGradient>

        <HoverBorderGradient
          as="article"
          id="ebs-launch-path"
          className="ebs-card-muted group flex h-full flex-col overflow-hidden shadow-none"
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
                {ctaCopy.launch}
              </ButtonLink>
            </div>
          </div>
        </HoverBorderGradient>
      </div>
    </section>
  );
}

export function PresenceRelationship() {
  return (
    <section
      aria-labelledby="presence-relationship-heading"
      className="section-sky relative overflow-hidden"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 h-14 bg-gradient-to-b from-warm/70 to-transparent"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 bottom-0 h-14 bg-gradient-to-t from-warm/60 to-transparent"
      />

      <div className="relative z-10 mx-auto w-full max-w-7xl px-5 py-14 sm:px-8 sm:py-16 lg:py-20">
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
          <HoverBorderGradient
            as="article"
            duration={1.15}
            containerClassName="shadow-[var(--shadow-card-featured)]"
            className="ebs-card-featured group relative overflow-hidden p-6 shadow-none sm:p-7"
          >
            <span
              aria-hidden="true"
              className="absolute inset-y-4 left-0 w-1 rounded-full bg-teal/80"
            />
            <div className="pl-2">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="text-sm font-medium text-muted">
                    Already have a website
                  </p>
                  <p className="mt-2 text-lg font-semibold tracking-tight text-ink">
                    EBS Insight
                  </p>
                </div>
                <span className="flex size-10 shrink-0 items-center justify-center rounded-full border border-teal/30 bg-teal/10 text-teal">
                  <BrowserGlyph />
                </span>
              </div>

              <VisualPath steps={insightPath} accent="teal" />

              <div
                aria-hidden="true"
                className="mt-5 flex items-end justify-between rounded-xl border border-border bg-white/80 px-3.5 py-3"
              >
                <div>
                  <p className="text-[0.62rem] font-semibold tracking-[0.12em] text-muted uppercase">
                    Growth Score
                  </p>
                  <p className="mt-1 text-xl font-semibold tracking-tight text-ink">
                    78
                  </p>
                </div>
                <svg viewBox="0 0 48 20" className="mb-1 h-5 w-12 text-teal">
                  <path
                    d="M1 15 12 10l9 5 12-11 13 5"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.7"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
            </div>
          </HoverBorderGradient>

          <HoverBorderGradient
            as="article"
            duration={1.25}
            className="ebs-card-muted group relative overflow-hidden p-6 shadow-none sm:p-7"
          >
            <span
              aria-hidden="true"
              className="absolute inset-y-4 left-0 w-1 rounded-full bg-navy/25"
            />
            <div className="pl-2">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="text-sm font-medium text-muted">Need a website</p>
                  <div className="mt-2 flex flex-wrap items-center gap-2.5">
                    <p className="text-lg font-semibold tracking-tight text-ink">
                      EBS Launch
                    </p>
                    <ProductStatusBadge status="coming-soon" />
                  </div>
                </div>
                <span className="flex size-10 shrink-0 items-center justify-center rounded-full border border-navy/15 bg-white text-muted">
                  <LayoutGlyph />
                </span>
              </div>

              <VisualPath steps={launchPath} accent="slate" />

              <div
                aria-hidden="true"
                className="mt-5 rounded-xl border border-border bg-white/80 px-3.5 py-3"
              >
                <p className="text-[0.62rem] font-semibold tracking-[0.12em] text-teal uppercase">
                  Step 2 of 6
                </p>
                <p className="mt-1 text-sm font-medium text-ink">
                  Choose your style
                </p>
                <div className="mt-2.5 grid grid-cols-3 gap-1.5">
                  {launchStyles.map((style, index) => (
                    <div
                      key={style.name}
                      className={cn(
                        "overflow-hidden rounded-md border",
                        index === 0
                          ? "border-teal/50 ring-1 ring-teal/20"
                          : "border-border",
                      )}
                    >
                      <div className="flex h-4">
                        {style.tones.map((tone) => (
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
            </div>
          </HoverBorderGradient>
        </div>
      </div>
    </section>
  );
}

export function PresenceWhy() {
  return (
    <section
      aria-labelledby="presence-why-heading"
      className="relative overflow-hidden bg-gradient-to-b from-warm via-warm to-[color-mix(in_srgb,var(--brand-sky)_28%,var(--brand-warm))]"
    >
      <div className="mx-auto w-full max-w-7xl px-5 pt-14 pb-10 sm:px-8 sm:pt-16 sm:pb-12 lg:pt-20 lg:pb-14">
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
            <article
              key={benefit.title}
              className="ebs-card group overflow-hidden p-0 motion-safe:transition-transform motion-safe:duration-300 motion-safe:hover:-translate-y-0.5"
            >
              <div className="border-b border-border bg-gradient-to-br from-sky via-white to-teal/10 px-6 py-5">
                <div className="flex items-center justify-between gap-3">
                  <span className="flex size-11 items-center justify-center rounded-full border border-teal/30 bg-white text-teal shadow-[0_10px_22px_-16px_rgba(14,36,56,0.35)]">
                    <BenefitIcon type={benefit.icon} />
                  </span>
                  <p className="text-[0.68rem] font-semibold tracking-[0.16em] text-teal uppercase">
                    {benefit.label}
                  </p>
                </div>
              </div>
              <div className="px-6 py-6 sm:px-7 sm:py-7">
                <h3 className="text-lg font-semibold tracking-tight text-ink">
                  {benefit.title}
                </h3>
                <p className="mt-2 text-sm leading-6 text-ink/75 sm:text-[0.95rem] sm:leading-7">
                  {benefit.description}
                </p>
              </div>
            </article>
          ))}
        </div>
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
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_45%,rgba(14,36,56,0.35)_100%)]"
      />

      <div className="relative z-10 mx-auto w-full max-w-7xl px-5 py-16 sm:px-8 sm:py-20 lg:py-24">
        <div className="grid items-end gap-8 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,0.85fr)] lg:gap-12">
          <div className="max-w-2xl motion-safe:animate-fade-up">
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

          <aside className="motion-safe:animate-fade-up rounded-2xl border border-on-dark/15 bg-on-dark/12 p-5 shadow-[0_18px_40px_-28px_rgba(0,0,0,0.55)] backdrop-blur-md sm:p-6 [animation-delay:100ms]">
            <p className="text-[0.68rem] font-semibold tracking-[0.16em] text-teal uppercase">
              Local business reality
            </p>
            <p className="mt-3 text-sm leading-6 text-on-dark/90 sm:text-[0.95rem] sm:leading-7">
              Your website is often the first place a homeowner decides whether
              your business feels trustworthy, professional, and easy to
              contact.
            </p>
            <ul className="mt-4 flex flex-wrap gap-2">
              {["Trust", "Clarity", "Easy Contact"].map((chip) => (
                <li
                  key={chip}
                  className="rounded-full border border-on-dark/15 bg-on-dark/10 px-3 py-1 text-xs font-medium text-on-dark"
                >
                  {chip}
                </li>
              ))}
            </ul>
          </aside>
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
      className="relative scroll-mt-24 overflow-hidden bg-gradient-to-b from-[color-mix(in_srgb,var(--brand-sky)_22%,var(--brand-warm))] to-warm"
    >
      <div className="mx-auto w-full max-w-7xl px-5 pt-14 pb-10 sm:px-8 sm:pt-16 sm:pb-12 lg:pt-20 lg:pb-16">
        <div>
          <div className="flex flex-wrap items-center gap-3">
            <p className="text-xs font-semibold tracking-[0.18em] text-teal uppercase">
              EBS Launch
            </p>
            <ProductStatusBadge status="coming-soon" />
          </div>
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

        <figure className="ebs-card relative mt-10 overflow-hidden shadow-[0_28px_60px_-36px_rgba(14,36,56,0.4)]">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-teal/70 via-teal/30 to-transparent"
          />
          <figcaption className="flex flex-wrap items-center justify-between gap-2 border-b border-border bg-sky/35 px-5 py-3.5 sm:px-6">
            <span className="text-xs font-semibold tracking-[0.16em] text-muted uppercase">
              Website setup
            </span>
            <span className="text-xs font-semibold tracking-[0.16em] text-teal uppercase">
              Product vision preview
            </span>
          </figcaption>

          <div className="bg-gradient-to-b from-white to-sky/20 px-5 py-7 sm:px-8 sm:py-9">
            <ol className="relative flex flex-wrap gap-2 lg:flex-nowrap lg:gap-0">
              {launchSetupSteps.map((step, index) => {
                const isLast = index === launchSetupSteps.length - 1;
                return (
                  <li
                    key={step.label}
                    className="relative flex min-w-[6.5rem] flex-1 items-center gap-2"
                  >
                    <div
                      className={cn(
                        "relative z-10 inline-flex items-center gap-2 rounded-full border px-3 py-1.5 text-sm",
                        step.active
                          ? "border-teal/45 bg-teal/12 text-ink shadow-[0_10px_22px_-16px_rgba(30,200,165,0.55)]"
                          : step.complete
                            ? "border-teal/25 bg-teal/8 text-ink"
                            : "border-border bg-sky/40 text-muted",
                      )}
                    >
                      <span
                        className={cn(
                          "flex size-4 items-center justify-center rounded-full text-[0.65rem] font-semibold",
                          step.active
                            ? "bg-teal text-on-teal"
                            : step.complete
                              ? "bg-teal text-on-teal"
                              : "border border-muted/45",
                        )}
                        aria-hidden="true"
                      >
                        {step.complete || step.active ? "✓" : null}
                      </span>
                      {step.label}
                    </div>
                    {!isLast ? (
                      <span
                        aria-hidden="true"
                        className="pointer-events-none absolute top-1/2 right-0 hidden h-px w-[calc(100%-0.5rem)] -translate-y-1/2 bg-gradient-to-r from-teal/35 to-transparent lg:block"
                      />
                    ) : null}
                  </li>
                );
              })}
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
                    "rounded-2xl border bg-white p-3.5 transition-[box-shadow,transform] duration-300",
                    style.current
                      ? "border-teal/50 shadow-[0_16px_36px_-22px_rgba(30,200,165,0.55)] ring-1 ring-teal/25 motion-safe:-translate-y-0.5"
                      : "border-border shadow-[0_10px_24px_-22px_rgba(14,36,56,0.28)]",
                  )}
                >
                  <StyleThumbnail vibe={style.vibe} tones={style.tones} />
                  <div className="mt-3 flex items-center justify-between gap-2">
                    <p className="text-sm font-medium text-ink">{style.name}</p>
                    {style.current ? (
                      <span className="inline-flex items-center gap-1 text-xs font-semibold text-teal">
                        <span aria-hidden="true">✓</span> Selected
                      </span>
                    ) : (
                      <span className="text-xs text-muted">Preview</span>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </figure>
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
              Better systems. Stronger businesses.
            </p>
            <h2
              id="presence-final-cta-heading"
              className="mt-4 text-3xl font-bold tracking-tight text-on-dark sm:text-4xl lg:text-[2.45rem] lg:leading-[1.12]"
            >
              Start with where your business is today.
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-base leading-7 text-on-dark/85 sm:text-lg sm:leading-8">
              Already have a website? Use EBS Insight to understand what to
              improve. Starting from scratch? EBS Launch is being built for you.
            </p>
            <div className="mt-7 flex flex-col items-stretch justify-center gap-3 sm:mt-8 sm:flex-row sm:flex-wrap sm:items-center sm:gap-x-5 sm:gap-y-3">
              <ButtonLink
                href={getInsightUrl("/analyze")}
                className="w-full sm:w-auto"
              >
                {ctaCopy.insight}
              </ButtonLink>
              <ButtonLink
                href="/products/presence#ebs-launch"
                variant="ghost"
                className="w-full justify-center text-on-dark hover:text-teal sm:w-auto"
              >
                {ctaCopy.launch}
              </ButtonLink>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function VisualPath({
  steps,
  accent,
}: {
  steps: readonly { label: string; icon: string }[];
  accent: "teal" | "slate";
}) {
  const isTeal = accent === "teal";

  return (
    <ol className="mt-5 flex flex-wrap items-center gap-x-2 gap-y-3">
      {steps.map((step, index) => (
        <li key={step.label} className="flex items-center gap-2">
          <span
            className={cn(
              "flex size-8 items-center justify-center rounded-full border",
              isTeal
                ? "border-teal/35 bg-teal/10 text-teal"
                : "border-navy/15 bg-white text-muted",
            )}
          >
            <PathIcon type={step.icon} />
          </span>
          <span className="text-sm font-medium text-ink">{step.label}</span>
          {index < steps.length - 1 ? (
            <span
              className={isTeal ? "text-teal/45" : "text-muted/55"}
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

function StyleThumbnail({
  vibe,
  tones,
}: {
  vibe: "cool" | "warm" | "bold";
  tones: readonly string[];
}) {
  return (
    <div
      className="relative overflow-hidden rounded-xl border border-border"
      style={{ backgroundColor: tones[2] }}
      aria-hidden="true"
    >
      <div className="flex h-24 flex-col">
        <div
          className="flex h-5 items-center gap-1 px-2.5"
          style={{ backgroundColor: tones[0] }}
        >
          <span className="size-1 rounded-full bg-white/50" />
          <span className="size-1 rounded-full bg-white/35" />
          <span className="size-1 rounded-full bg-white/25" />
        </div>
        <div className="flex flex-1 gap-2 p-2.5">
          <div className="w-[42%] rounded-md bg-white/80 p-1.5 shadow-sm">
            <div
              className="h-1.5 w-8 rounded-full"
              style={{ backgroundColor: tones[0], opacity: 0.35 }}
            />
            <div
              className="mt-1.5 h-1 w-full rounded-full"
              style={{ backgroundColor: tones[0], opacity: 0.15 }}
            />
            <div
              className="mt-1 h-1 w-[80%] rounded-full"
              style={{ backgroundColor: tones[0], opacity: 0.12 }}
            />
          </div>
          <div className="flex flex-1 flex-col justify-between">
            <div
              className="h-8 rounded-md"
              style={{
                background:
                  vibe === "warm"
                    ? `linear-gradient(135deg, ${tones[1]}33, ${tones[0]}22)`
                    : `linear-gradient(135deg, ${tones[1]}44, ${tones[0]}18)`,
              }}
            />
            <div
              className="h-4 rounded-md"
              style={{ backgroundColor: tones[1], opacity: 0.85 }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

function BrowserGlyph() {
  return (
    <svg viewBox="0 0 16 16" className="size-4" aria-hidden="true">
      <rect
        x="1.5"
        y="2.5"
        width="13"
        height="11"
        rx="2"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.4"
      />
      <path d="M1.5 5.5h13" stroke="currentColor" strokeWidth="1.3" />
    </svg>
  );
}

function LayoutGlyph() {
  return (
    <svg viewBox="0 0 16 16" className="size-4" aria-hidden="true">
      <rect
        x="2"
        y="2.5"
        width="12"
        height="11"
        rx="1.5"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.4"
      />
      <path d="M2 6h12M6.5 6v7.5" stroke="currentColor" strokeWidth="1.3" />
    </svg>
  );
}

function PathIcon({ type }: { type: string }) {
  const className = "size-3.5";
  if (type === "analyze") {
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
          stroke="currentColor"
          strokeWidth="1.4"
          strokeLinecap="round"
        />
      </svg>
    );
  }
  if (type === "prioritize") {
    return (
      <svg viewBox="0 0 16 16" className={className} aria-hidden="true">
        <path
          d="M3 11.5 7 5.5l2.2 2.6L13 4.5"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.4"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  }
  if (type === "improve") {
    return (
      <svg viewBox="0 0 16 16" className={className} aria-hidden="true">
        <path
          d="M4 10.5 8 5l4 5.5"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.4"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  }
  if (type === "define") {
    return (
      <svg viewBox="0 0 16 16" className={className} aria-hidden="true">
        <path
          d="M4 4.5h8M4 8h6M4 11.5h4"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.4"
          strokeLinecap="round"
        />
      </svg>
    );
  }
  if (type === "design") {
    return (
      <svg viewBox="0 0 16 16" className={className} aria-hidden="true">
        <circle
          cx="8"
          cy="8"
          r="4.5"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.4"
        />
        <circle cx="8" cy="8" r="1.4" fill="currentColor" />
      </svg>
    );
  }
  return (
    <svg viewBox="0 0 16 16" className={className} aria-hidden="true">
      <path
        d="M3 12.5 8 3.5l5 9H3Z"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function BenefitIcon({
  type,
}: {
  type: (typeof presenceBenefits)[number]["icon"];
}) {
  const className = "size-4";
  if (type === "trust") {
    return (
      <svg viewBox="0 0 16 16" className={className} aria-hidden="true">
        <path
          d="M8 2.5 12.5 4.2v3.4c0 3-2 5.2-4.5 6.1C5.5 12.8 3.5 10.6 3.5 7.6V4.2L8 2.5Z"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.4"
          strokeLinejoin="round"
        />
        <path
          d="m5.8 7.8 1.6 1.6 2.8-3"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.4"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  }
  if (type === "conversion") {
    return (
      <svg viewBox="0 0 16 16" className={className} aria-hidden="true">
        <path
          d="M3.5 8h7.5M8.5 4.8 11.8 8 8.5 11.2"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.4"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <circle
          cx="3.5"
          cy="8"
          r="1.2"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.2"
        />
      </svg>
    );
  }
  return (
    <svg viewBox="0 0 16 16" className={className} aria-hidden="true">
      <path
        d="M2.5 11.5 6 7.5l2.3 2.2L13 4.5"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M10.2 4.5H13v2.8"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
