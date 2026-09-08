import { PreviewFrame } from "@/components/marketing/ComingSoonProduct";

const metrics = [
  { label: "Revenue Influenced", value: "$48k" },
  { label: "Leads", value: "86" },
  { label: "Bookings", value: "31" },
  { label: "Booking Rate", value: "36%" },
  { label: "Recovered Revenue", value: "$9.4k" },
] as const;

const funnel = [
  "Source",
  "Lead",
  "Response",
  "Booking",
  "Job",
  "Revenue",
] as const;

export function RevenuePreview() {
  return (
    <PreviewFrame title="EBS Revenue Intelligence · Product preview">
      <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
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

      <div className="mt-6">
        <p className="text-[0.68rem] font-semibold tracking-[0.18em] text-teal uppercase">
          Conceptual funnel
        </p>
        <ol className="mt-4 flex flex-col gap-2 md:flex-row md:flex-wrap md:items-center">
          {funnel.map((stage, index) => (
            <li key={stage} className="flex items-center gap-2">
              <span className="rounded-full border border-teal/30 bg-teal/10 px-3.5 py-1.5 text-sm font-medium text-light">
                {stage}
              </span>
              {index < funnel.length - 1 ? (
                <span aria-hidden="true" className="text-teal md:inline">
                  →
                </span>
              ) : null}
            </li>
          ))}
        </ol>
      </div>
    </PreviewFrame>
  );
}
