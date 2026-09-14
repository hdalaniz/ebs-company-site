const reasons = [
  {
    title: "Stop guessing what to improve.",
    description:
      "EBS helps you see where calls, leads, and customer journeys are breaking down — so you can focus on the problems that matter.",
    accent: "teal" as const,
    visual: "leak" as const,
  },
  {
    title: "Know what to do next.",
    description:
      "Clear next steps beat another long report. Recommendations prioritize the highest-value action for your business.",
    accent: "slate" as const,
    visual: "next" as const,
  },
  {
    title: "Connect improvements to outcomes.",
    description:
      "EBS is being designed to connect growth actions with leads, bookings, and revenue — so progress is visible.",
    accent: "teal" as const,
    visual: "outcomes" as const,
  },
] as const;

export function WhyEbs() {
  return (
    <section
      id="why-ebs"
      aria-labelledby="why-ebs-heading"
      className="relative scroll-mt-6 overflow-hidden bg-gradient-to-b from-[color-mix(in_srgb,var(--brand-sky)_35%,var(--brand-warm))] via-warm to-warm"
    >
      <div className="mx-auto w-full max-w-7xl px-5 pt-14 pb-10 sm:px-8 sm:pt-16 sm:pb-12 lg:pt-20 lg:pb-14">
      <div>
        <p className="text-xs font-semibold tracking-[0.18em] text-teal uppercase">
          Why EBS
        </p>
        <h2
          id="why-ebs-heading"
          className="mt-3 max-w-2xl text-2xl font-bold tracking-tight text-ink sm:text-3xl lg:text-[2.15rem]"
        >
          Clarity for the businesses that keep communities running.
        </h2>
        <p className="mt-4 max-w-2xl text-base leading-7 text-ink/75 sm:text-[1.05rem] sm:leading-8">
          EBS helps service businesses understand what&apos;s working, what
          needs attention, and what to do next.
        </p>
      </div>

      <div className="mt-10 grid gap-5 sm:grid-cols-2 md:grid-cols-3">
        {reasons.map((reason) => (
          <article
            key={reason.title}
            className="ebs-card group/bento flex h-full flex-col overflow-hidden p-0"
          >
            <div
              className={
                reason.accent === "slate"
                  ? "relative h-24 overflow-hidden border-b border-border bg-gradient-to-br from-sky to-transparent text-teal-secondary sm:h-28"
                  : "relative h-24 overflow-hidden border-b border-border bg-gradient-to-br from-teal/12 to-transparent text-teal sm:h-28"
              }
              aria-hidden="true"
            >
              <ReasonVisual visual={reason.visual} />
            </div>
            <div className="flex flex-1 flex-col px-5 py-5 sm:px-6 sm:py-6">
              <h3 className="text-lg font-semibold tracking-tight text-ink sm:text-xl">
                {reason.title}
              </h3>
              <p className="mt-2 text-[0.95rem] leading-6 text-ink/75 sm:text-base sm:leading-7">
                {reason.description}
              </p>
            </div>
          </article>
        ))}
      </div>
      </div>
    </section>
  );
}

function ReasonVisual({
  visual,
}: {
  visual: (typeof reasons)[number]["visual"];
}) {
  if (visual === "leak") {
    return (
      <svg viewBox="0 0 320 112" className="absolute inset-0 h-full w-full">
        <path
          d="M36 28h84v56H36z"
          fill="none"
          stroke="currentColor"
          strokeOpacity="0.35"
          strokeWidth="1.5"
        />
        <path
          d="M120 56h42"
          fill="none"
          stroke="currentColor"
          strokeOpacity="0.45"
          strokeWidth="1.5"
          strokeDasharray="4 6"
        />
        <circle
          cx="186"
          cy="56"
          r="16"
          fill="none"
          stroke="currentColor"
          strokeOpacity="0.8"
          strokeWidth="1.8"
        />
        <path
          d="M202 56h46L268 78"
          fill="none"
          stroke="currentColor"
          strokeOpacity="0.35"
          strokeWidth="1.5"
        />
      </svg>
    );
  }

  if (visual === "next") {
    return (
      <svg viewBox="0 0 320 112" className="absolute inset-0 h-full w-full">
        <rect
          x="40"
          y="28"
          width="70"
          height="56"
          rx="10"
          fill="none"
          stroke="currentColor"
          strokeOpacity="0.8"
          strokeWidth="1.7"
        />
        <path
          d="M58 56h24M74 44v24"
          fill="none"
          stroke="currentColor"
          strokeOpacity="0.8"
          strokeWidth="1.6"
          strokeLinecap="round"
        />
        <rect
          x="128"
          y="36"
          width="58"
          height="40"
          rx="8"
          fill="none"
          stroke="currentColor"
          strokeOpacity="0.28"
          strokeWidth="1.5"
        />
        <rect
          x="204"
          y="36"
          width="58"
          height="40"
          rx="8"
          fill="none"
          stroke="currentColor"
          strokeOpacity="0.18"
          strokeWidth="1.5"
        />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 320 112" className="absolute inset-0 h-full w-full">
      <circle
        cx="58"
        cy="56"
        r="12"
        fill="none"
        stroke="currentColor"
        strokeOpacity="0.7"
        strokeWidth="1.6"
      />
      <path
        d="M70 56h40"
        fill="none"
        stroke="currentColor"
        strokeOpacity="0.45"
        strokeWidth="1.5"
      />
      <circle
        cx="134"
        cy="56"
        r="12"
        fill="none"
        stroke="currentColor"
        strokeOpacity="0.7"
        strokeWidth="1.6"
      />
      <path
        d="M146 56h40"
        fill="none"
        stroke="currentColor"
        strokeOpacity="0.45"
        strokeWidth="1.5"
      />
      <circle
        cx="210"
        cy="56"
        r="14"
        fill="none"
        stroke="currentColor"
        strokeOpacity="0.85"
        strokeWidth="1.8"
      />
      <path
        d="M204 56h12M210 50v12"
        fill="none"
        stroke="currentColor"
        strokeOpacity="0.85"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
}
