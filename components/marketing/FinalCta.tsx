import { ButtonLink } from "@/components/marketing/ButtonLink";
import { getInsightUrl } from "@/config/site";

export function FinalCta() {
  return (
    <section
      aria-labelledby="final-cta-heading"
      className="mx-auto w-full max-w-7xl px-5 pt-4 pb-16 sm:px-8 sm:pt-6 sm:pb-20 lg:pt-8 lg:pb-24"
    >
      <div className="ebs-card relative overflow-hidden px-6 py-12 sm:px-12 sm:py-16 lg:px-16 lg:py-20">
        <div className="final-cta-glow" aria-hidden="true" />
        <div className="relative z-10">
          <h2
            id="final-cta-heading"
            className="max-w-2xl text-3xl font-bold tracking-tight text-light sm:text-4xl lg:text-[2.65rem] lg:leading-[1.12]"
          >
            Build a stronger system for growth.
          </h2>
          <p className="mt-5 max-w-2xl text-base leading-7 text-light/80 sm:text-lg sm:leading-8">
            Whether you&apos;re establishing your online presence or improving
            how existing demand becomes revenue, EBS helps you find the best
            next step.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-x-5 gap-y-3">
            <ButtonLink href="/products/presence">
              Explore EBS Presence
            </ButtonLink>
            <ButtonLink href={getInsightUrl("/analyze")} variant="ghost">
              Run EBS Insight
            </ButtonLink>
          </div>
        </div>
      </div>
    </section>
  );
}
