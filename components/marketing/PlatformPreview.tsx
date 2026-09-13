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
      className="mx-auto w-full max-w-7xl px-5 pt-14 pb-10 sm:px-8 sm:pt-16 sm:pb-12 lg:pt-20 lg:pb-14"
    >
      <div>
        <p className="text-xs font-semibold tracking-[0.18em] text-teal uppercase">
          Product vision preview
        </p>
        <h2
          id="platform-preview-heading"
          className="mt-3 max-w-xl text-2xl font-bold tracking-tight text-ink sm:text-3xl lg:text-[2.15rem]"
        >
          A clearer view of what needs attention.
        </h2>
        <p className="mt-4 max-w-2xl text-base leading-7 text-ink/75 sm:text-[1.05rem] sm:leading-8">
          See opportunities, priorities, and business impact in one place.
        </p>
      </div>

      <figure className="ebs-card relative mt-10 overflow-hidden">
        <figcaption className="flex flex-wrap items-center justify-between gap-2 border-b border-border px-5 py-3.5 sm:px-6">
          <span className="text-xs font-semibold tracking-[0.16em] text-muted uppercase">
            Conceptual preview
          </span>
          <span className="text-xs font-semibold tracking-[0.16em] text-teal uppercase">
            Product vision preview
          </span>
        </figcaption>

        <div className="px-5 py-7 sm:px-8 sm:py-9 lg:px-10 lg:py-10">
          <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-5">
            {metrics.map((metric) => (
              <div
                key={metric.label}
                className="rounded-2xl border border-border bg-sky/40 px-4 py-5"
              >
                <p className="text-xs font-semibold tracking-[0.14em] text-muted uppercase">
                  {metric.label}
                </p>
                <p className="mt-2.5 text-2xl font-semibold tracking-tight text-ink">
                  {metric.value}
                </p>
              </div>
            ))}
          </div>

          <article className="mt-6 rounded-2xl border border-teal/25 bg-teal/5 px-5 py-5 sm:px-6 sm:py-6">
            <p className="text-xs font-semibold tracking-[0.18em] text-teal uppercase">
              Recommended next action
            </p>
            <h3 className="mt-3 text-lg font-semibold tracking-tight text-ink sm:text-xl">
              Improve after-hours lead capture
            </h3>
            <p className="mt-2 text-sm leading-6 text-ink/75 sm:text-[0.95rem] sm:leading-7">
              Impact: <span className="font-medium text-teal">High</span>
            </p>
          </article>
        </div>
      </figure>
    </section>
  );
}
