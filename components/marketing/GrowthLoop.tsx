import Link from "next/link";
import { SectionHeading } from "@/components/marketing/SectionHeading";
import { platformJourney } from "@/config/products";

const continuousStep = {
  key: "continuous",
  name: "Continuous Improvement",
  action: "Then elevate again",
} as const;

export function GrowthLoop() {
  const steps = [...platformJourney, continuousStep];

  return (
    <section
      id="how-ebs-works"
      aria-labelledby="how-ebs-works-heading"
      className="mx-auto w-full max-w-7xl scroll-mt-6 px-5 pt-4 pb-10 sm:px-8 sm:pt-6 sm:pb-12 lg:pt-8 lg:pb-14"
    >
      <SectionHeading
        headingId="how-ebs-works-heading"
        heading="From presence to revenue."
      />

      <ol className="mt-8 grid grid-cols-1 gap-8 overflow-visible lg:grid-cols-5 lg:gap-6">
        {steps.map((step, index) => {
          const isLast = index === steps.length - 1;
          const href = "href" in step ? step.href : undefined;
          const isTeal = index % 2 === 0;

          const content = (
            <>
              <div
                className={
                  isTeal
                    ? "relative z-10 flex size-10 items-center justify-center rounded-full border border-teal/40 bg-teal/10 text-teal"
                    : "relative z-10 flex size-10 items-center justify-center rounded-full border border-teal-secondary/40 bg-teal-secondary/10 text-teal-secondary"
                }
              >
                <JourneyIcon index={index} />
              </div>
              <p
                className={
                  isTeal
                    ? "mt-4 text-[0.7rem] font-semibold tracking-[0.18em] text-teal uppercase"
                    : "mt-4 text-[0.7rem] font-semibold tracking-[0.18em] text-teal-secondary uppercase"
                }
              >
                {String(index + 1).padStart(2, "0")}
              </p>
              <h3 className="mt-2 text-lg font-semibold tracking-tight text-light">
                {step.name}
              </h3>
              <p className="mt-2 text-sm leading-6 text-light/80 sm:leading-7">
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
                    className="pointer-events-none absolute top-5 left-10 hidden h-px w-[calc(100%+0.75rem)] bg-gradient-to-r from-teal/45 via-teal-secondary/30 to-transparent lg:block"
                  />
                  <span
                    aria-hidden="true"
                    className="pointer-events-none absolute top-10 left-5 h-[calc(100%+1.5rem)] w-px bg-gradient-to-b from-teal/40 to-transparent lg:hidden"
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
