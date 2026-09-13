import { SectionHeading } from "@/components/marketing/SectionHeading";

const metrics = [
  { label: "Growth Score", value: "78" },
  { label: "Revenue Opportunities", value: "4" },
  { label: "Missed Lead Risk", value: "High" },
  { label: "Booking Experience", value: "82" },
  { label: "Trust & Reputation", value: "71" },
] as const;

export function PlatformPreview() {
  return (
    <section
      aria-labelledby="platform-preview-heading"
      className="mx-auto w-full max-w-7xl px-5 pt-8 pb-8 sm:px-8 sm:pt-10 sm:pb-10 lg:pt-12 lg:pb-12"
    >
      <SectionHeading
        headingId="platform-preview-heading"
        heading="Your business growth command center."
        supporting="A clearer view of opportunities, priorities, and business impact."
      />

      <figure className="ebs-card relative mt-8 overflow-hidden border-teal/40">
        <figcaption className="flex flex-wrap items-center justify-between gap-2 border-b border-border px-5 py-3 sm:px-6">
          <span className="text-[0.68rem] font-semibold tracking-[0.2em] text-teal uppercase">
            Command center
          </span>
          <span className="text-[0.68rem] font-semibold tracking-[0.16em] text-muted uppercase">
            Product vision preview
          </span>
        </figcaption>

        <div className="px-5 py-6 sm:px-8 sm:py-8 lg:px-10 lg:py-10">
          <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-5">
            {metrics.map((metric) => (
              <div
                key={metric.label}
                className="rounded-xl border border-border bg-surface-elevated/70 px-4 py-4"
              >
                <p className="text-[0.68rem] font-semibold tracking-[0.16em] text-muted uppercase">
                  {metric.label}
                </p>
                <p className="mt-2 text-2xl font-semibold tracking-tight text-ink">
                  {metric.value}
                </p>
              </div>
            ))}
          </div>

          <article className="mt-8 rounded-xl border border-border bg-surface-elevated/70 p-5">
            <p className="text-[0.7rem] font-semibold tracking-[0.18em] text-teal uppercase">
              Recommended next action
            </p>
            <h3 className="mt-3 text-lg font-semibold tracking-tight text-ink sm:text-xl">
              Improve after-hours lead capture
            </h3>
            <p className="mt-3 text-sm leading-6 text-ink/80 sm:text-[0.95rem] sm:leading-7">
              Impact: <span className="font-medium text-teal">High</span>
            </p>
          </article>
        </div>
      </figure>
    </section>
  );
}
