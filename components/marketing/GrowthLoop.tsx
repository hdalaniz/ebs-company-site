"use client";

import Link from "next/link";
import {
  JourneyReveal,
  JourneyStep,
} from "@/components/ui/journey-reveal";
import { platformJourney } from "@/config/products";
import { cn } from "@/lib/cn";

const continuousStep = {
  key: "continuous",
  name: "Continuous Improvement",
  action: "Learn + Elevate",
} as const;

const journeyCopy = [
  {
    label: "Presence",
    support: "Build the foundation",
  },
  {
    label: "Growth",
    support: "Capture demand",
  },
  {
    label: "Revenue Intelligence",
    support: "Prove what works",
  },
  {
    label: "Assist",
    support: "Choose the next move",
  },
  {
    label: "Continuous Improvement",
    support: "Learn and elevate",
  },
] as const;

export function GrowthLoop() {
  const steps = [...platformJourney, continuousStep];

  return (
    <section
      id="how-ebs-works"
      aria-labelledby="how-ebs-works-heading"
      className="section-sky section-topo relative scroll-mt-6 overflow-hidden"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 h-16 bg-gradient-to-b from-warm/80 to-transparent"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-warm/70 to-transparent"
      />

      <div className="relative z-10 mx-auto w-full max-w-7xl px-5 py-14 sm:px-8 sm:py-16 lg:py-20">
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

        <div className="relative mt-12 lg:mt-14">
          <RisingPathGraphic />

          <JourneyReveal className="relative grid grid-cols-1 gap-8 lg:grid-cols-5 lg:gap-4 lg:pt-2">
            {steps.map((step, index) => {
              const href = "href" in step ? step.href : undefined;
              const copy = journeyCopy[index];

              const content = (
                <>
                  <div
                    className={cn(
                      "relative z-10 flex size-12 items-center justify-center rounded-full border border-teal/35 bg-white text-teal shadow-[0_12px_28px_-16px_rgba(14,36,56,0.4)] transition-[transform,border-color,box-shadow,background-color] duration-300",
                      "group-data-[active=true]/step:scale-110 group-data-[active=true]/step:border-teal group-data-[active=true]/step:bg-teal/12 group-data-[active=true]/step:shadow-[0_14px_30px_-12px_rgba(30,200,165,0.5)]",
                    )}
                  >
                    <JourneyIcon index={index} />
                  </div>
                  <p className="mt-4 text-xs font-semibold tracking-[0.18em] text-teal uppercase">
                    {String(index + 1).padStart(2, "0")}
                  </p>
                  <h3 className="mt-2 text-lg font-semibold tracking-tight text-ink">
                    {copy?.label ?? step.name}
                  </h3>
                  <p className="mt-1.5 text-sm leading-6 text-ink/75">
                    {copy?.support ?? step.action}
                  </p>
                </>
              );

              return (
                <JourneyStep key={step.key} className="group/step lg:flex lg:flex-col">
                  <div
                    className={cn(
                      index === 1 && "lg:mt-2.5",
                      index === 2 && "lg:mt-5",
                      index === 3 && "lg:mt-7",
                      index === 4 && "lg:mt-9",
                    )}
                  >
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

function RisingPathGraphic() {
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
