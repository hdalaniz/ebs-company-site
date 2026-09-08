import { ElevationVisual } from "@/components/brand/ElevationVisual";
import { ButtonLink } from "@/components/marketing/ButtonLink";
import { getInsightUrl } from "@/config/site";

export function Hero() {
  return (
    <section className="relative mx-auto grid w-full max-w-7xl items-center gap-10 px-5 pt-12 pb-8 sm:px-8 sm:pt-16 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] lg:gap-16 lg:pt-20 lg:pb-10">
      <div>
        <p className="inline-flex rounded-full border border-teal/20 bg-teal/10 px-3 py-1 text-[0.7rem] font-semibold tracking-[0.22em] text-teal uppercase">
          Elevate Business Systems
        </p>
        <h1 className="mt-4 max-w-xl text-[2.05rem] leading-[1.08] font-bold tracking-tight text-light sm:text-5xl lg:text-[3.25rem]">
          Turn more demand into booked revenue.
        </h1>
        <p className="mt-6 max-w-lg text-[1.0625rem] leading-7 text-light/80 sm:text-lg sm:leading-8">
          Elevate Business Systems helps service businesses build a stronger
          digital presence, uncover revenue leaks, and take the next best action
          to grow.
        </p>
        <div className="mt-8 flex flex-wrap items-center gap-3">
          <ButtonLink href="/#products">Explore EBS Products</ButtonLink>
          <ButtonLink href={getInsightUrl("/analyze")} variant="secondary">
            Run a Growth Assessment
          </ButtonLink>
        </div>
      </div>

      <ElevationVisual className="lg:-mr-4" />
    </section>
  );
}
