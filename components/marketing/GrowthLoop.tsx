"use client";

import Link from "next/link";
import {
  JourneyReveal,
  JourneyStep,
} from "@/components/ui/journey-reveal";
import { customerJourney, philosophyLoop } from "@/config/products";
import { trackCta } from "@/lib/analytics";
import { cn } from "@/lib/cn";

export function GrowthLoop() {
  return (
    <section
      id="how-it-works"
      aria-labelledby="how-it-works-heading"
      className="section-sky section-topo relative scroll-mt-24 overflow-hidden"
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
            How it works
          </p>
          <h2
            id="how-it-works-heading"
            className="mt-3 max-w-xl text-2xl font-bold tracking-tight text-ink sm:text-3xl lg:text-[2.15rem]"
          >
            Insight → Launch → Presence
          </h2>
          <p className="mt-4 max-w-2xl text-base leading-7 text-ink/75 sm:text-[1.05rem] sm:leading-8">
            A clear path for home-service businesses: find the leak, build the
            conversion foundation, then keep improving performance over time.
          </p>
        </div>

        <div className="relative mt-12 lg:mt-14">
          <RisingPathGraphic />

          <JourneyReveal className="relative grid grid-cols-1 gap-8 lg:grid-cols-3 lg:gap-6 lg:pt-2">
            {customerJourney.map((step, index) => {
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
                    {step.name}
                  </h3>
                  <p className="mt-1.5 text-sm font-medium text-ink/85">
                    {step.action}
                  </p>
                  <p className="mt-1.5 text-sm leading-6 text-ink/75">
                    {step.support}
                  </p>
                </>
              );

              return (
                <JourneyStep key={step.key} className="group/step lg:flex lg:flex-col">
                  <div
                    className={cn(
                      index === 1 && "lg:mt-3",
                      index === 2 && "lg:mt-6",
                    )}
                  >
                    {"external" in step && step.external ? (
                      <a
                        href={step.href}
                        rel="noopener noreferrer"
                        className="relative z-10 block rounded-md focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-teal"
                        onClick={() => trackCta("cta_insight_click")}
                      >
                        {content}
                      </a>
                    ) : (
                      <Link
                        href={step.href}
                        className="relative z-10 block rounded-md focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-teal"
                        onClick={() => {
                          if (step.key === "launch") {
                            trackCta("cta_launch_click");
                          }
                          if (step.key === "presence") {
                            trackCta("cta_presence_click");
                          }
                        }}
                      >
                        {content}
                      </Link>
                    )}
                  </div>
                </JourneyStep>
              );
            })}
          </JourneyReveal>
        </div>

        <div className="mt-14 rounded-2xl border border-border bg-white/70 px-5 py-6 sm:px-7 sm:py-7">
          <p className="text-xs font-semibold tracking-[0.18em] text-teal uppercase">
            Long-term product system
          </p>
          <p className="mt-2 text-sm leading-6 text-ink/75 sm:text-[0.95rem]">
            Behind the current offer, RiseCurrent is built around a lasting
            operating philosophy:
          </p>
          <ol className="mt-4 flex flex-wrap items-center gap-x-2 gap-y-2">
            {philosophyLoop.map((step, index) => (
              <li key={step.key} className="flex items-center gap-2">
                <span className="text-sm font-semibold text-ink">{step.name}</span>
                {index < philosophyLoop.length - 1 ? (
                  <span className="text-teal/50" aria-hidden="true">
                    →
                  </span>
                ) : null}
              </li>
            ))}
          </ol>
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
          d="M80 88 C280 88, 360 54, 500 48 C640 42, 720 28, 920 18"
          fill="none"
          stroke="color-mix(in srgb, var(--teal) 35%, transparent)"
          strokeWidth="3"
          strokeLinecap="round"
        />
        <path
          d="M80 88 C280 88, 360 54, 500 48 C640 42, 720 28, 920 18"
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

  if (index === 1) {
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
