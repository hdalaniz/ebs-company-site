import Link from "next/link";
import { SectionHeading } from "@/components/marketing/SectionHeading";
import { growthLoop } from "@/config/products";

export function GrowthLoop() {
  return (
    <section
      id="how-ebs-works"
      aria-labelledby="how-ebs-works-heading"
      className="mx-auto w-full max-w-7xl scroll-mt-24 px-5 py-10 sm:px-8 sm:py-14 lg:py-16"
    >
      <SectionHeading
        headingId="how-ebs-works-heading"
        eyebrow="How EBS Works"
        heading="A growth loop, not a pile of tools."
        supporting="Each product covers a stage of the same journey: build the foundation, capture demand, measure what creates revenue, then act on what matters next."
      />

      <ol className="mt-8 grid gap-4 md:grid-cols-4 md:gap-3">
        {growthLoop.map((step, index) => {
          const isLast = index === growthLoop.length - 1;

          return (
            <li key={step.key} className="relative">
              {!isLast ? (
                <>
                  <span
                    aria-hidden="true"
                    className="pointer-events-none absolute top-7 left-[calc(100%-0.25rem)] hidden h-px w-[calc(100%-1.5rem)] bg-gradient-to-r from-teal/50 to-transparent md:block"
                  />
                  <span
                    aria-hidden="true"
                    className="pointer-events-none absolute top-[4.25rem] left-6 h-[calc(100%-1.5rem)] w-px bg-gradient-to-b from-teal/40 to-transparent md:hidden"
                  />
                </>
              ) : null}

              <Link
                href={step.href}
                className="ebs-card relative z-10 block rounded-2xl p-5 transition-colors hover:border-teal/25 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-teal"
              >
                <p className="text-[0.68rem] font-semibold tracking-[0.18em] text-teal uppercase">
                  {String(index + 1).padStart(2, "0")}
                </p>
                <h3 className="mt-3 text-lg font-semibold tracking-tight text-light">
                  {step.name}
                </h3>
                <p className="mt-2 text-sm leading-6 text-light/80">
                  {step.description}
                </p>
              </Link>
            </li>
          );
        })}
      </ol>

      <p className="mt-6 text-sm text-muted">
        Then the loop continues: better presence, better capture, clearer
        measurement, and a sharper next action.
      </p>
    </section>
  );
}
