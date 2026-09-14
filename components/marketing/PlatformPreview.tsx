export function PlatformPreview() {
  return (
    <section
      aria-labelledby="platform-preview-heading"
      className="section-platform relative overflow-hidden"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 h-20 bg-gradient-to-b from-warm to-transparent"
      />

      <div className="relative z-10 mx-auto w-full max-w-7xl px-5 pt-14 pb-10 sm:px-8 sm:pt-16 sm:pb-12 lg:pt-20 lg:pb-14">
        <div>
          <p className="text-xs font-semibold tracking-[0.18em] text-teal uppercase">
            Product vision preview
          </p>
          <h2
            id="platform-preview-heading"
            className="mt-3 max-w-xl text-2xl font-bold tracking-tight text-ink sm:text-3xl lg:text-[2.15rem]"
          >
            A clearer view of what needs attention.
          </h2>
          <p className="mt-4 max-w-2xl text-base leading-7 text-ink/75 sm:text-[1.05rem] sm:leading-8">
            See opportunities, priorities, and business impact in one place.
          </p>
        </div>

        <figure className="ebs-card relative mt-10 overflow-hidden shadow-[0_28px_60px_-36px_rgba(14,36,56,0.42)]">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-teal/70 via-teal/35 to-transparent"
          />
          <figcaption className="flex flex-wrap items-center justify-between gap-2 border-b border-border bg-sky/35 px-5 py-3.5 sm:px-6">
            <span className="inline-flex items-center gap-2 text-xs font-semibold tracking-[0.16em] text-muted uppercase">
              <span className="size-1.5 rounded-full bg-teal" />
              Conceptual preview
            </span>
            <span className="text-xs font-semibold tracking-[0.16em] text-teal uppercase">
              Product vision preview
            </span>
          </figcaption>

          <div className="bg-gradient-to-b from-white to-sky/25 px-5 py-7 sm:px-8 sm:py-9 lg:px-10 lg:py-10">
            <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-5">
              <GrowthScoreCard />
              <OpportunitiesCard />
              <RiskCard />
              <BookingCard />
              <TrustCard />
            </div>

            <article className="mt-6 rounded-2xl border border-teal/30 bg-white px-5 py-5 shadow-[0_18px_40px_-28px_rgba(14,36,56,0.35)] sm:px-6 sm:py-6">
              <div className="flex flex-wrap items-start justify-between gap-4">
                <div className="max-w-2xl">
                  <p className="text-xs font-semibold tracking-[0.18em] text-teal uppercase">
                    Recommended next action
                  </p>
                  <h3 className="mt-3 text-lg font-semibold tracking-tight text-ink sm:text-xl">
                    Improve after-hours lead capture
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-ink/75 sm:text-[0.95rem] sm:leading-7">
                    Why: Potential customers may be waiting too long outside
                    business hours.
                  </p>
                  <p className="mt-3 text-sm">
                    Impact:{" "}
                    <span className="inline-flex rounded-full bg-teal/12 px-2.5 py-0.5 text-xs font-semibold tracking-wide text-teal uppercase">
                      High
                    </span>
                  </p>
                </div>
                <p className="inline-flex items-center gap-1.5 rounded-full border border-teal/25 bg-teal/8 px-3.5 py-2 text-sm font-semibold text-teal">
                  Review opportunity
                  <span aria-hidden="true">→</span>
                </p>
              </div>
            </article>
          </div>
        </figure>
      </div>
    </section>
  );
}

function GrowthScoreCard() {
  const score = 78;
  const radius = 28;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference * (1 - score / 100);

  return (
    <div className="rounded-2xl border border-border bg-white px-4 py-5 shadow-[0_12px_28px_-22px_rgba(14,36,56,0.28)]">
      <p className="text-xs font-semibold tracking-[0.14em] text-muted uppercase">
        Growth Score
      </p>
      <div className="mt-3 flex items-center gap-3">
        <svg viewBox="0 0 72 72" className="size-16" aria-hidden="true">
          <circle
            cx="36"
            cy="36"
            r={radius}
            fill="none"
            stroke="color-mix(in srgb, var(--brand-sky) 80%, white)"
            strokeWidth="6"
          />
          <circle
            cx="36"
            cy="36"
            r={radius}
            fill="none"
            stroke="var(--teal)"
            strokeWidth="6"
            strokeLinecap="round"
            strokeDasharray={circumference}
            strokeDashoffset={offset}
            transform="rotate(-90 36 36)"
          />
          <text
            x="36"
            y="41"
            textAnchor="middle"
            fill="var(--ink)"
            fontSize="17"
            fontWeight="600"
          >
            {score}
          </text>
        </svg>
        <p className="text-sm leading-5 text-ink/70">
          Overall digital growth health
        </p>
      </div>
    </div>
  );
}

function OpportunitiesCard() {
  return (
    <div className="rounded-2xl border border-border bg-white px-4 py-5 shadow-[0_12px_28px_-22px_rgba(14,36,56,0.28)]">
      <p className="text-xs font-semibold tracking-[0.14em] text-muted uppercase">
        Revenue Opportunities
      </p>
      <div className="mt-3 flex items-end justify-between gap-3">
        <p className="text-3xl font-semibold tracking-tight text-ink">4</p>
        <span className="mb-1 flex size-9 items-center justify-center rounded-full bg-teal/12 text-teal">
          <svg viewBox="0 0 16 16" className="size-4" aria-hidden="true">
            <path
              d="M3 11.5 7 6.5l2.2 2.4L13 4.5"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M10.2 4.5H13v2.8"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </span>
      </div>
      <p className="mt-2 text-sm text-ink/70">Prioritized improvements</p>
    </div>
  );
}

function RiskCard() {
  return (
    <div className="rounded-2xl border border-border bg-white px-4 py-5 shadow-[0_12px_28px_-22px_rgba(14,36,56,0.28)]">
      <p className="text-xs font-semibold tracking-[0.14em] text-muted uppercase">
        Missed Lead Risk
      </p>
      <div className="mt-4">
        <span className="inline-flex rounded-full border border-navy/15 bg-navy/6 px-3 py-1.5 text-sm font-semibold text-navy">
          High
        </span>
      </div>
      <p className="mt-3 text-sm text-ink/70">Response timing needs attention</p>
    </div>
  );
}

function BookingCard() {
  return (
    <div className="rounded-2xl border border-border bg-white px-4 py-5 shadow-[0_12px_28px_-22px_rgba(14,36,56,0.28)]">
      <p className="text-xs font-semibold tracking-[0.14em] text-muted uppercase">
        Booking Experience
      </p>
      <p className="mt-3 text-3xl font-semibold tracking-tight text-ink">82</p>
      <div className="mt-3 h-2 overflow-hidden rounded-full bg-sky">
        <div className="h-full w-[82%] rounded-full bg-teal" />
      </div>
      <p className="mt-2 text-sm text-ink/70">Path to contact clarity</p>
    </div>
  );
}

function TrustCard() {
  const score = 71;
  const radius = 22;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference * (1 - score / 100);

  return (
    <div className="rounded-2xl border border-border bg-white px-4 py-5 shadow-[0_12px_28px_-22px_rgba(14,36,56,0.28)] sm:col-span-2 xl:col-span-1">
      <p className="text-xs font-semibold tracking-[0.14em] text-muted uppercase">
        Trust & Reputation
      </p>
      <div className="mt-3 flex items-center gap-3">
        <svg viewBox="0 0 56 56" className="size-14" aria-hidden="true">
          <circle
            cx="28"
            cy="28"
            r={radius}
            fill="none"
            stroke="color-mix(in srgb, var(--brand-sky) 80%, white)"
            strokeWidth="5"
          />
          <circle
            cx="28"
            cy="28"
            r={radius}
            fill="none"
            stroke="color-mix(in srgb, var(--teal) 70%, var(--brand-slate-blue))"
            strokeWidth="5"
            strokeLinecap="round"
            strokeDasharray={circumference}
            strokeDashoffset={offset}
            transform="rotate(-90 28 28)"
          />
          <text
            x="28"
            y="32"
            textAnchor="middle"
            fill="var(--ink)"
            fontSize="14"
            fontWeight="600"
          >
            {score}
          </text>
        </svg>
        <p className="text-sm leading-5 text-ink/70">
          Local trust signals and reputation strength
        </p>
      </div>
    </div>
  );
}
