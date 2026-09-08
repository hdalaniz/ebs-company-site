import { GrowthMountain } from "@/components/brand/GrowthMountain";
import { Spotlight } from "@/components/brand/Spotlight";
import { ButtonLink } from "@/components/marketing/ButtonLink";
import { getInsightUrl } from "@/config/site";

const signals = [
  "Identify revenue opportunities",
  "Take the right action",
  "Grow with confidence",
] as const;

export function Hero() {
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
          Elevate Business Systems
        </p>
        <h1 className="mt-4 max-w-xl text-[2.05rem] leading-[1.08] font-bold tracking-tight text-light sm:text-5xl lg:text-[3.25rem]">
          Turn more demand into{" "}
          <span className="text-teal">booked revenue</span>.
        </h1>
        <p className="mt-6 max-w-lg text-[1.0625rem] leading-7 text-light/80 sm:text-lg sm:leading-8">
          Elevate Business Systems helps service businesses build a stronger
          digital presence, uncover revenue leaks, and take the next best action
          to grow.
        </p>
        <div className="mt-8 flex flex-wrap items-center gap-x-5 gap-y-3">
          <ButtonLink href="/#products">Explore EBS Products</ButtonLink>
          <ButtonLink href={getInsightUrl("/analyze")} variant="ghost">
            Run a Growth Assessment
          </ButtonLink>
        </div>
        <ul className="mt-4 space-y-2.5 text-sm text-muted sm:flex sm:flex-wrap sm:gap-x-5 sm:space-y-0">
          {signals.map((signal) => (
            <li key={signal} className="flex gap-2.5">
              <LineCheckIcon />
              {signal}
            </li>
          ))}
        </ul>
      </div>

      <div className="relative z-10 flex w-full flex-col">
        <div className="relative -mx-2 overflow-hidden sm:mx-0 lg:-mt-8 lg:-mr-6 lg:overflow-visible">
          <GrowthMountain className="pointer-events-none h-auto w-full lg:w-[118%] lg:max-w-none" />
        </div>
      </div>
    </section>
  );
}

function LineCheckIcon() {
  return (
    <svg
      viewBox="0 0 16 16"
      className="mt-0.5 size-4 shrink-0 text-growth"
      aria-hidden="true"
    >
      <circle
        cx="8"
        cy="8"
        r="6.25"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.25"
      />
      <path
        d="M5 8.15 7.05 10.2 11.15 5.7"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.25"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
