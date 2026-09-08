import { SectionHeading } from "@/components/marketing/SectionHeading";

const reasons = [
  {
    title: "Stop guessing what to improve.",
    description:
      "EBS identifies where the customer journey is breaking down.",
    accent: "teal" as const,
    visual: "leak" as const,
  },
  {
    title: "Know what to do next.",
    description:
      "Recommendations prioritize the highest-value next action instead of overwhelming owners with another large report.",
    accent: "cyan" as const,
    visual: "next" as const,
  },
  {
    title: "Connect improvements to outcomes.",
    description:
      "EBS is being designed to connect growth actions with leads, bookings, and revenue influenced.",
    accent: "teal" as const,
    visual: "outcomes" as const,
  },
] as const;

export function WhyEbs() {
  return (
    <section
      id="why-ebs"
      aria-labelledby="why-ebs-heading"
      className="mx-auto w-full max-w-7xl scroll-mt-6 px-5 pt-2 pb-16 sm:px-8 sm:pt-4 sm:pb-20 lg:pt-6 lg:pb-24"
    >
      <SectionHeading
        headingId="why-ebs-heading"
        heading="More than tools. A clearer path to growth."
        supporting="EBS helps service businesses understand what's working, what needs attention, and what to do next."
      />

      <div className="mt-8 grid gap-4 sm:grid-cols-2 md:grid-cols-3 md:gap-5">
        {reasons.map((reason) => (
          <article key={reason.title} className="ebs-card group/bento flex h-full flex-col overflow-hidden p-0">
            <div
              className={
                reason.accent === "cyan"
                  ? "relative h-24 overflow-hidden border-b border-border bg-gradient-to-br from-teal-secondary/10 to-transparent text-teal-secondary sm:h-28"
                  : "relative h-24 overflow-hidden border-b border-border bg-gradient-to-br from-teal/12 to-transparent text-teal sm:h-28"
              }
              aria-hidden="true"
            >
              <ReasonVisual visual={reason.visual} />
            </div>
            <div className="flex flex-1 flex-col justify-between px-5 py-5 sm:px-6 sm:py-6">
              <div className="motion-safe:transition-transform motion-safe:duration-200 motion-safe:group-hover/bento:translate-x-1">
                <h3 className="text-lg font-semibold tracking-tight text-light sm:text-xl">
                  {reason.title}
                </h3>
                <p className="mt-2 text-[0.95rem] leading-6 text-light/80 sm:text-base sm:leading-7">
                  {reason.description}
                </p>
              </div>
            </div>
          </article>
        ))}
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
