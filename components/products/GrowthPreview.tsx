import { ProductVisionFrame } from "@/components/products/FutureProductSections";

const metrics = [
  { label: "New Leads", value: "14" },
  { label: "Awaiting Response", value: "3" },
  { label: "Follow-Ups Due", value: "6" },
  { label: "Recovered Opportunities", value: "4" },
] as const;

const leads = [
  {
    name: "Sarah M.",
    request: "AC Repair Request",
    source: "Website",
    time: "4 minutes ago",
    status: "Needs Response",
    action: "Respond now",
    featured: true,
  },
  {
    name: "James R.",
    request: "Estimate follow-up",
    source: "Estimate",
    time: "2 days ago",
    status: "Follow-up due",
    action: "Send estimate reminder",
    featured: false,
  },
  {
    name: "Maria L.",
    request: "Missed-call recovery",
    source: "Phone",
    time: "Yesterday",
    status: "Missed call",
    action: "Return the call",
    featured: false,
  },
  {
    name: "David K.",
    request: "Reactivation opportunity",
    source: "Previous customer",
    time: "Last season",
    status: "Reactivation",
    action: "Reconnect when appropriate",
    featured: false,
  },
] as const;

export function GrowthPreview() {
  return (
    <ProductVisionFrame
      productName="EBS Growth"
      caption="Product vision preview"
      disclaimer="Illustrative interface — not live customer records. EBS Growth does not currently capture or act on leads."
    >
      <div className="grid grid-cols-2 gap-3 xl:grid-cols-4">
        {metrics.map((metric) => (
          <div
            key={metric.label}
            className="rounded-2xl border border-border bg-surface-elevated/80 px-4 py-4"
          >
            <p className="text-[0.7rem] font-semibold tracking-[0.14em] text-muted uppercase">
              {metric.label}
            </p>
            <p className="mt-2 text-2xl font-semibold tracking-tight text-ink sm:text-3xl">
              {metric.value}
            </p>
          </div>
        ))}
      </div>

      <div className="mt-6">
        <p className="text-[0.7rem] font-semibold tracking-[0.18em] text-teal uppercase">
          Sample lead inbox
        </p>
        <ul className="mt-4 space-y-3" aria-label="Illustrative lead inbox">
          {leads.map((lead) => (
            <li
              key={lead.name}
              className={
                lead.featured
                  ? "rounded-2xl border border-teal/30 bg-teal/5 p-4 sm:p-5"
                  : "rounded-2xl border border-border bg-surface-elevated/80 p-4 sm:p-5"
              }
            >
              <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                <div>
                  <p className="text-base font-semibold tracking-tight text-ink">
                    {lead.name}
                  </p>
                  <p className="mt-1 text-sm leading-6 text-ink/80">{lead.request}</p>
                  <p className="mt-1 text-sm text-muted">
                    {lead.source} · {lead.time}
                  </p>
                </div>
                <p className="text-sm font-medium text-teal">{lead.status}</p>
              </div>
              <p className="mt-3 text-sm leading-6 text-ink/80">
                Recommended next action:{" "}
                <span className="font-medium text-teal">{lead.action}</span>
              </p>
            </li>
          ))}
        </ul>
      </div>
    </ProductVisionFrame>
  );
}
