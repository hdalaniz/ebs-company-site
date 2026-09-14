"use client";

import { ProductVisionFrame } from "@/components/products/FutureProductSections";
import { FocusCard, FocusCards } from "@/components/ui/focus-cards";
import { cn } from "@/lib/cn";

const metrics = [
  {
    label: "New Leads",
    value: "14",
    kind: "leads" as const,
    note: "Inbound activity",
  },
  {
    label: "Awaiting Response",
    value: "3",
    kind: "waiting" as const,
    note: "Still waiting",
  },
  {
    label: "Follow-Ups Due",
    value: "6",
    kind: "followups" as const,
    note: "Open next steps",
  },
  {
    label: "Recovered Opportunities",
    value: "4",
    kind: "recovered" as const,
    note: "Conceptual recoveries",
  },
] as const;

const leads = [
  {
    initials: "SM",
    name: "Sarah M.",
    request: "AC Repair Request",
    source: "Website",
    time: "4 minutes ago",
    status: "Needs Response",
    statusTone: "response" as const,
    action: "Respond now",
    featured: true,
  },
  {
    initials: "JR",
    name: "James R.",
    request: "Estimate follow-up",
    source: "Estimate",
    time: "2 days ago",
    status: "Follow-Up Due",
    statusTone: "followup" as const,
    action: "Send estimate reminder",
    featured: false,
  },
  {
    initials: "ML",
    name: "Maria L.",
    request: "Missed-call recovery",
    source: "Phone",
    time: "Yesterday",
    status: "Missed Call",
    statusTone: "missed" as const,
    action: "Return the call",
    featured: false,
  },
  {
    initials: "DK",
    name: "David K.",
    request: "Reactivation opportunity",
    source: "Previous customer",
    time: "Last season",
    status: "Reactivation",
    statusTone: "reactivation" as const,
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
          <MetricCard key={metric.label} {...metric} />
        ))}
      </div>

      <div className="mt-8 grid gap-5 lg:grid-cols-[minmax(0,1.35fr)_minmax(0,0.85fr)] lg:gap-6">
        <div>
          <p className="text-[0.7rem] font-semibold tracking-[0.18em] text-teal uppercase">
            Sample lead inbox
          </p>
          <div className="relative mt-4">
            <span
              aria-hidden="true"
              className="pointer-events-none absolute top-3 bottom-3 left-[1.35rem] hidden w-px bg-gradient-to-b from-teal/40 via-teal/20 to-transparent sm:block"
            />
            <FocusCards className="space-y-3">
              {leads.map((lead) => (
                <FocusCard key={lead.name}>
                  <LeadCard lead={lead} />
                </FocusCard>
              ))}
            </FocusCards>
          </div>
        </div>

        <aside className="rounded-2xl border border-teal/30 bg-gradient-to-br from-teal/8 via-white to-sky/40 p-5 shadow-[0_18px_40px_-28px_rgba(14,36,56,0.35)] sm:p-6 lg:mt-9">
          <p className="text-[0.68rem] font-semibold tracking-[0.18em] text-teal uppercase">
            Recommended next action
          </p>
          <h3 className="mt-3 text-lg font-semibold tracking-tight text-ink sm:text-xl">
            Respond to Sarah M.
          </h3>
          <p className="mt-3 text-sm leading-6 text-ink/75">
            Why: This inquiry arrived 4 minutes ago and is still waiting for a
            response.
          </p>
          <p className="mt-3 text-sm leading-6 text-ink/75">
            Suggested action:{" "}
            <span className="font-medium text-ink">Reply now</span>
          </p>
          <p className="mt-3 text-sm">
            Impact:{" "}
            <span className="inline-flex rounded-full bg-teal/12 px-2.5 py-0.5 text-xs font-semibold tracking-wide text-teal uppercase">
              High priority
            </span>
          </p>
          <p className="mt-5 inline-flex items-center gap-1.5 rounded-full border border-teal/25 bg-white px-3.5 py-2 text-sm font-semibold text-teal">
            Review opportunity
            <span aria-hidden="true">→</span>
          </p>
          <p className="mt-4 text-xs leading-5 text-muted">
            Conceptual UI only — not a live action.
          </p>
        </aside>
      </div>
    </ProductVisionFrame>
  );
}

function MetricCard({
  label,
  value,
  kind,
  note,
}: {
  label: string;
  value: string;
  kind: (typeof metrics)[number]["kind"];
  note: string;
}) {
  return (
    <div className="rounded-2xl border border-border bg-white px-4 py-4 shadow-[0_12px_28px_-22px_rgba(14,36,56,0.28)]">
      <div className="flex items-start justify-between gap-2">
        <p className="text-[0.7rem] font-semibold tracking-[0.14em] text-muted uppercase">
          {label}
        </p>
        <span className="flex size-8 items-center justify-center rounded-full bg-teal/10 text-teal">
          <MetricIcon kind={kind} />
        </span>
      </div>
      <p className="mt-2 text-2xl font-semibold tracking-tight text-ink sm:text-3xl">
        {value}
      </p>
      {kind === "leads" ? (
        <svg
          viewBox="0 0 64 18"
          className="mt-2 h-4 w-full text-teal"
          aria-hidden="true"
        >
          <path
            d="M1 13 12 10l10 4 12-9 14 5 14-3"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ) : (
        <p className="mt-2 text-xs text-ink/65">{note}</p>
      )}
    </div>
  );
}

function LeadCard({
  lead,
}: {
  lead: (typeof leads)[number];
}) {
  return (
    <article
      className={cn(
        "relative rounded-2xl border bg-white p-4 sm:p-5",
        lead.featured
          ? "border-teal/35 shadow-[0_16px_36px_-24px_rgba(30,200,165,0.45)]"
          : "border-border shadow-[0_12px_28px_-24px_rgba(14,36,56,0.28)]",
      )}
    >
      <div className="flex items-start gap-3 sm:gap-4">
        <span
          className={cn(
            "relative z-10 flex size-10 shrink-0 items-center justify-center rounded-full text-xs font-semibold",
            lead.featured
              ? "bg-teal/15 text-teal ring-2 ring-teal/25"
              : "bg-sky text-navy",
          )}
        >
          {lead.initials}
        </span>
        <div className="min-w-0 flex-1">
          <div className="flex flex-wrap items-start justify-between gap-2">
            <div>
              <p className="text-base font-semibold tracking-tight text-ink">
                {lead.name}
              </p>
              <p className="mt-1 text-sm leading-6 text-ink/80">{lead.request}</p>
              <p className="mt-1 text-sm text-muted">
                {lead.source} · {lead.time}
              </p>
            </div>
            <StatusBadge tone={lead.statusTone} label={lead.status} />
          </div>
          <p className="mt-3 text-sm leading-6 text-ink/75">
            Recommended next action{" "}
            <span className="font-semibold text-teal">
              {lead.action}
              <span aria-hidden="true"> →</span>
            </span>
          </p>
        </div>
      </div>
    </article>
  );
}

function StatusBadge({
  tone,
  label,
}: {
  tone: (typeof leads)[number]["statusTone"];
  label: string;
}) {
  return (
    <span
      className={cn(
        "inline-flex rounded-full border px-2.5 py-1 text-xs font-semibold tracking-wide",
        tone === "response" && "border-teal/35 bg-teal/12 text-teal",
        tone === "followup" &&
          "border-navy/15 bg-[color-mix(in_srgb,var(--brand-slate)_12%,white)] text-navy",
        tone === "missed" &&
          "border-navy/20 bg-navy/8 text-navy",
        tone === "reactivation" &&
          "border-teal/25 bg-[color-mix(in_srgb,var(--teal)_10%,white)] text-[color-mix(in_srgb,var(--teal)_70%,var(--brand-navy))]",
      )}
    >
      {label}
    </span>
  );
}

function MetricIcon({ kind }: { kind: (typeof metrics)[number]["kind"] }) {
  const className = "size-3.5";
  if (kind === "leads") {
    return (
      <svg viewBox="0 0 16 16" className={className} aria-hidden="true">
        <path
          d="M3 11.5 6.5 7l2.2 2.2L13 4.5"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.4"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  }
  if (kind === "waiting") {
    return (
      <svg viewBox="0 0 16 16" className={className} aria-hidden="true">
        <circle
          cx="8"
          cy="8"
          r="5.2"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.4"
        />
        <path
          d="M8 5.2v3l2 1.2"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.4"
          strokeLinecap="round"
        />
      </svg>
    );
  }
  if (kind === "followups") {
    return (
      <svg viewBox="0 0 16 16" className={className} aria-hidden="true">
        <rect
          x="3"
          y="3.5"
          width="10"
          height="9"
          rx="1.5"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.4"
        />
        <path
          d="M3 6.5h10M6 2.5v2M10 2.5v2"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.3"
          strokeLinecap="round"
        />
      </svg>
    );
  }
  return (
    <svg viewBox="0 0 16 16" className={className} aria-hidden="true">
      <path
        d="M12.2 6.2A4.4 4.4 0 1 0 8 12.4"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinecap="round"
      />
      <path
        d="M10.2 6.2h2v-2"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
