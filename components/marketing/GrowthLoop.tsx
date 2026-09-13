import Link from "next/link";
import { platformJourney } from "@/config/products";

const continuousStep = {
  key: "continuous",
  name: "Continuous Improvement",
  action: "Learn + Elevate",
} as const;

const stepLabels = [
  "Presence",
  "Growth",
  "Revenue Intelligence",
  "Assist",
  "Continuous Improvement",
] as const;

export function GrowthLoop() {
  const steps = [...platformJourney, continuousStep];

  return (
    <section
      id="how-ebs-works"
      aria-labelledby="how-ebs-works-heading"
      className="section-sky scroll-mt-6"
    >
      <div className="mx-auto w-full max-w-7xl px-5 py-14 sm:px-8 sm:py-16 lg:py-20">
        <div>
          <p className="text-xs font-semibold tracking-[0.18em] text-teal uppercase">
            How EBS works
          </p>
          <h2
            id="how-ebs-works-heading"
            className="mt-3 max-w-xl text-2xl font-bold tracking-tight text-ink sm:text-3xl lg:text-[2.15rem]"
          >
            From presence to revenue.
          </h2>
          <p className="mt-4 max-w-2xl text-base leading-7 text-ink/75 sm:text-[1.05rem] sm:leading-8">
            Each product builds on the last — so local businesses can improve
            their foundation, capture more demand, and grow with clearer
            direction.
          </p>
        </div>

        <ol className="mt-10 grid grid-cols-1 gap-8 overflow-visible lg:grid-cols-5 lg:gap-5">
          {steps.map((step, index) => {
            const isLast = index === steps.length - 1;
            const href = "href" in step ? step.href : undefined;
            const label = stepLabels[index] ?? step.name;

            const content = (
              <>
                <div className="relative z-10 flex size-11 items-center justify-center rounded-full border border-teal/35 bg-white text-teal shadow-[0_8px_20px_-14px_rgba(14,36,56,0.35)]">
                  <JourneyIcon index={index} />
                </div>
                <p className="mt-4 text-xs font-semibold tracking-[0.18em] text-teal uppercase">
                  {String(index + 1).padStart(2, "0")}
                </p>
                <h3 className="mt-2 text-lg font-semibold tracking-tight text-ink">
                  {label}
                </h3>
                <p className="mt-2 text-sm leading-6 text-ink/75 sm:leading-7">
                  {step.action}
                </p>
              </>
            );

            return (
              <li key={step.key} className="relative">
                {!isLast ? (
                  <>
                    <span
                      aria-hidden="true"
                      className="pointer-events-none absolute top-5 left-11 hidden h-px w-[calc(100%+0.5rem)] bg-gradient-to-r from-teal/50 via-teal/25 to-transparent lg:block"
                    />
                    <span
                      aria-hidden="true"
                      className="pointer-events-none absolute top-11 left-5 h-[calc(100%+1.5rem)] w-px bg-gradient-to-b from-teal/40 to-transparent lg:hidden"
                    />
                  </>
                ) : null}

                {href ? (
                  <Link
                    href={href}
                    className="relative z-10 block rounded-md focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-teal"
                  >
                    {content}
                  </Link>
                ) : (
                  <div className="relative z-10">{content}</div>
                )}
              </li>
            );
          })}
        </ol>
      </div>
    </section>
  );
}

function JourneyIcon({ index }: { index: number }) {
  const className = "size-4";

  if (index === 0) {
    return (
      <svg viewBox="0 0 16 16" className={className} aria-hidden="true">
        <path
          d="M2 13 6 7.5 8.2 10 12 4.5 14 13"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.4"
          strokeLinecap="round"
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
        <circle
          cx="8"
          cy="8"
          r="5.25"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.4"
        />
        <path
          d="M8 5.5v3l2 1.2"
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
