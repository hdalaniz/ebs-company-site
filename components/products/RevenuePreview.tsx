import { ProductVisionFrame } from "@/components/products/FutureProductSections";

const supportingMetrics = [
  {
    label: "Leads",
    value: "142",
    note: "Opportunities raised",
  },
  {
    label: "Bookings",
    value: "61",
    note: "Work committed",
  },
] as const;

export function RevenuePreview() {
  return (
    <ProductVisionFrame
      productName="EBS Revenue Intelligence"
      caption="Product vision preview"
      disclaimer="Illustrative product preview — not customer data. These values are fictional demonstration figures only."
    >
      <div className="rounded-[1.35rem] border border-navy/10 bg-gradient-to-br from-white via-white to-sky/50 p-5 shadow-[0_18px_40px_-28px_rgba(14,36,56,0.28)] sm:p-6 lg:p-7">
        <p className="text-[0.7rem] font-semibold tracking-[0.14em] text-muted uppercase">
          Revenue Influenced
        </p>
        <p className="mt-2 text-4xl font-semibold tracking-tight text-ink sm:text-5xl lg:text-[3.35rem]">
          $48,240
        </p>
        <p className="mt-3 max-w-xl text-sm leading-6 text-ink/70">
          Designed to show booked work connected back to the demand that started
          it — not a live total.
        </p>
      </div>

      <div className="mt-4 grid gap-4 md:grid-cols-3">
        {supportingMetrics.map((metric) => (
          <div
            key={metric.label}
            className="rounded-2xl border border-border bg-white px-4 py-5 shadow-[0_12px_28px_-22px_rgba(14,36,56,0.28)] sm:px-5"
          >
            <p className="text-[0.7rem] font-semibold tracking-[0.14em] text-muted uppercase">
              {metric.label}
            </p>
            <p className="mt-2 text-3xl font-semibold tracking-tight text-ink sm:text-[2.15rem]">
              {metric.value}
            </p>
            <p className="mt-2 text-sm leading-6 text-ink/70">{metric.note}</p>
          </div>
        ))}

        <div className="rounded-2xl border border-border bg-white px-4 py-5 shadow-[0_12px_28px_-22px_rgba(14,36,56,0.28)] sm:px-5">
          <p className="text-[0.7rem] font-semibold tracking-[0.14em] text-muted uppercase">
            Booking Rate
          </p>
          <div className="mt-3 flex items-center gap-4">
            <BookingRateRing />
            <div>
              <p className="text-2xl font-semibold tracking-tight text-ink">43%</p>
              <p className="mt-1 text-sm leading-6 text-ink/70">
                Bookings from leads in this preview
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-4 rounded-2xl border border-teal/30 bg-gradient-to-br from-teal/12 via-white to-sky/40 px-5 py-5 shadow-[0_16px_36px_-26px_rgba(30,200,165,0.4)] sm:px-6 sm:py-6">
        <div className="flex flex-wrap items-end justify-between gap-3">
          <div>
            <p className="text-[0.7rem] font-semibold tracking-[0.18em] text-teal uppercase">
              Recovered Revenue
            </p>
            <p className="mt-2 max-w-lg text-sm leading-6 text-ink/75">
              Conceptual value from opportunities that might otherwise have
              stalled before booked work.
            </p>
          </div>
          <p className="text-3xl font-semibold tracking-tight text-ink sm:text-[2.15rem]">
            $8,460
          </p>
        </div>
      </div>
    </ProductVisionFrame>
  );
}

function BookingRateRing() {
  const radius = 28;
  const circumference = 2 * Math.PI * radius;
  const progress = 0.43;

  return (
    <svg
      viewBox="0 0 72 72"
      className="size-[4.5rem] shrink-0 text-teal"
      aria-hidden="true"
    >
      <circle
        cx="36"
        cy="36"
        r={radius}
        fill="none"
        stroke="color-mix(in srgb, var(--brand-sky) 80%, var(--brand-navy))"
        strokeWidth="7"
      />
      <circle
        cx="36"
        cy="36"
        r={radius}
        fill="none"
        stroke="currentColor"
        strokeWidth="7"
        strokeLinecap="round"
        strokeDasharray={`${circumference * progress} ${circumference}`}
        transform="rotate(-90 36 36)"
      />
    </svg>
  );
}
