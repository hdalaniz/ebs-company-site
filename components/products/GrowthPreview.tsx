import { PreviewFrame } from "@/components/marketing/ComingSoonProduct";

const metrics = [
  { label: "New Leads", value: "12" },
  { label: "Awaiting Response", value: "4" },
  { label: "Follow-Ups Due", value: "7" },
  { label: "Recovered Leads", value: "3" },
] as const;

export function GrowthPreview() {
  return (
    <PreviewFrame title="EBS Growth · Product preview">
      <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
        {metrics.map((metric) => (
          <div
            key={metric.label}
            className="rounded-2xl border border-border bg-surface-elevated/80 px-4 py-4"
          >
            <p className="text-[0.68rem] font-semibold tracking-[0.16em] text-muted uppercase">
              {metric.label}
            </p>
            <p className="mt-2 text-2xl font-semibold tracking-tight text-light">
              {metric.value}
            </p>
          </div>
        ))}
      </div>

      <article className="mt-5 rounded-2xl border border-teal/25 bg-teal/5 p-5">
        <p className="text-[0.68rem] font-semibold tracking-[0.18em] text-teal uppercase">
          Sample lead
        </p>
        <h3 className="mt-2 text-lg font-semibold text-light">
          Customer inquiry
        </h3>
        <dl className="mt-4 grid gap-3 text-sm sm:grid-cols-3">
          <div>
            <dt className="text-muted">Lead source</dt>
            <dd className="mt-1 text-light">Website contact form</dd>
          </div>
          <div>
            <dt className="text-muted">Time since inquiry</dt>
            <dd className="mt-1 text-light">2 hours</dd>
          </div>
          <div>
            <dt className="text-muted">Recommended action</dt>
            <dd className="mt-1 text-teal">Call before end of day</dd>
          </div>
        </dl>
      </article>
    </PreviewFrame>
  );
}
