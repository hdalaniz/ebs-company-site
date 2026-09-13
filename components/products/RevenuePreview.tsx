import { ProductVisionFrame } from "@/components/products/FutureProductSections";

const metrics = [
  { label: "Revenue Influenced", value: "$48,240" },
  { label: "Leads", value: "142" },
  { label: "Bookings", value: "61" },
  { label: "Booking Rate", value: "43%" },
  { label: "Recovered Revenue", value: "$8,460" },
] as const;

const sources = [
  { label: "Google Search", value: "$19,280", width: "80%" },
  { label: "Website", value: "$12,060", width: "50%" },
  { label: "Referral", value: "$9,650", width: "40%" },
  { label: "Paid Ads", value: "$7,250", width: "30%" },
] as const;

const funnel = [
  { label: "Leads", value: "142" },
  { label: "Contacted", value: "118" },
  { label: "Booked", value: "61" },
  { label: "Completed Jobs", value: "48" },
] as const;

export function RevenuePreview() {
  return (
    <ProductVisionFrame
      productName="EBS Revenue Intelligence"
      caption="Product vision preview"
      disclaimer="Illustrative product preview — not customer data. These values are fictional demonstration figures only."
    >
      <div className="grid grid-cols-2 gap-3 lg:grid-cols-5">
        {metrics.map((metric) => (
          <div
            key={metric.label}
            className="rounded-2xl border border-border bg-surface-elevated/80 px-4 py-4"
          >
            <p className="text-[0.7rem] font-semibold tracking-[0.14em] text-muted uppercase">
              {metric.label}
            </p>
            <p className="mt-2 text-2xl font-semibold tracking-tight text-ink sm:text-[1.85rem]">
              {metric.value}
            </p>
          </div>
        ))}
      </div>

      <div className="mt-6 grid gap-4 lg:grid-cols-2">
        <article className="rounded-2xl border border-border bg-surface-elevated/80 p-5 sm:p-6">
          <h3 className="text-[0.7rem] font-semibold tracking-[0.18em] text-teal uppercase">
            Revenue by Lead Source
          </h3>
          <ul className="mt-5 space-y-4">
            {sources.map((source) => (
              <li key={source.label}>
                <div className="flex items-baseline justify-between gap-3">
                  <p className="text-sm font-medium text-ink">{source.label}</p>
                  <p className="text-sm font-semibold tabular-nums text-ink">
                    {source.value}
                  </p>
                </div>
                <div className="mt-2 h-2 rounded-full bg-navy/10">
                  <div
                    className="h-2 rounded-full bg-gradient-to-r from-teal to-teal-secondary"
                    style={{ width: source.width }}
                  />
                </div>
              </li>
            ))}
          </ul>
        </article>

        <article className="rounded-2xl border border-border bg-surface-elevated/80 p-5 sm:p-6">
          <h3 className="text-[0.7rem] font-semibold tracking-[0.18em] text-teal uppercase">
            Lead Conversion Funnel
          </h3>
          <p className="mt-4 flex flex-wrap items-center gap-x-2 gap-y-1 text-sm leading-7 text-ink/80">
            <span>142 Leads</span>
            <span aria-hidden="true">→</span>
            <span>118 Contacted</span>
            <span aria-hidden="true">→</span>
            <span>61 Booked</span>
            <span aria-hidden="true">→</span>
            <span>48 Completed Jobs</span>
          </p>
          <ol className="mt-5 grid grid-cols-1 gap-3 sm:grid-cols-2">
            {funnel.map((stage) => (
              <li
                key={stage.label}
                className="flex items-center justify-between gap-3 rounded-xl border border-border bg-background/50 px-4 py-3"
              >
                <p className="text-sm font-medium text-ink">{stage.label}</p>
                <p className="text-lg font-semibold tabular-nums tracking-tight text-ink">
                  {stage.value}
                </p>
              </li>
            ))}
          </ol>
        </article>
      </div>

      <article className="mt-4 rounded-2xl border border-teal/25 bg-teal/5 p-5 sm:p-6">
        <h3 className="text-[0.7rem] font-semibold tracking-[0.18em] text-teal uppercase">
          Revenue Opportunity
        </h3>
        <p className="mt-3 text-base leading-7 text-ink sm:text-lg">
          12 leads were not contacted within the target response window.
        </p>
        <p className="mt-2 text-sm leading-6 text-ink/80 sm:text-[0.95rem]">
          Potential action: Review lead-response workflow.
        </p>
      </article>
    </ProductVisionFrame>
  );
}
