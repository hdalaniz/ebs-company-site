"use client";

import { ProductVisionFrame } from "@/components/products/FutureProductSections";
import { FocusCard, FocusCards } from "@/components/ui/focus-cards";
import { cn } from "@/lib/cn";

const actions = [
  {
    rank: "1",
    title: "Follow up with unclosed estimates",
    why: "3 estimates have had no activity for more than 5 days.",
    opportunity: "$7,800",
    suggested: "Review follow-ups",
    featured: true,
  },
  {
    rank: "2",
    title: "Review slow-response opportunities",
    why: "7 leads waited longer than your target response time.",
    opportunity: undefined,
    suggested: "Review lead workflow",
    featured: false,
  },
  {
    rank: "3",
    title: "Request reviews from recent customers",
    why: "6 completed jobs are eligible for a review request.",
    opportunity: undefined,
    suggested: "Prepare review requests",
    featured: false,
  },
] as const;

export function AssistPreview() {
  return (
    <ProductVisionFrame
      productName="EBS Assist"
      caption="Future product vision"
      disclaimer="Future product vision — these examples are illustrative and are not currently automated. EBS Assist does not take autonomous actions today."
    >
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div>
          <p className="text-[0.7rem] font-semibold tracking-[0.18em] text-teal uppercase">
            Today’s priorities
          </p>
          <p className="mt-2 max-w-xl text-lg font-semibold tracking-tight text-ink sm:text-xl">
            A guided look at what might deserve attention next.
          </p>
        </div>
        <p className="inline-flex rounded-full border border-navy/12 bg-sky/80 px-2.5 py-1 text-[0.68rem] font-semibold tracking-[0.16em] text-muted uppercase">
          Future product vision
        </p>
      </div>

      <FocusCards className="mt-6 grid gap-4 lg:grid-cols-3">
        {actions.map((action) => (
          <FocusCard key={action.rank}>
            <article
              className={cn(
                "flex h-full flex-col rounded-2xl border bg-white p-5 sm:p-6",
                action.featured
                  ? "border-teal/35 shadow-[0_18px_40px_-26px_rgba(30,200,165,0.45)]"
                  : "border-border shadow-[0_12px_28px_-24px_rgba(14,36,56,0.28)]",
              )}
            >
              <div className="flex items-center gap-3">
                <span className="flex size-9 items-center justify-center rounded-full border border-teal/35 bg-teal/10 text-sm font-semibold text-teal">
                  {action.rank}
                </span>
                <p className="text-[0.68rem] font-semibold tracking-[0.16em] text-teal uppercase">
                  Priority
                </p>
              </div>
              <h3 className="mt-4 text-lg font-semibold tracking-tight text-ink">
                {action.title}
              </h3>
              <p className="mt-4 text-sm font-medium text-muted">Why</p>
              <p className="mt-1 text-sm leading-6 text-ink/80">{action.why}</p>
              {action.opportunity ? (
                <>
                  <p className="mt-4 text-sm font-medium text-muted">
                    Potential opportunity
                  </p>
                  <p className="mt-1 text-xl font-semibold tracking-tight text-ink">
                    {action.opportunity}
                  </p>
                </>
              ) : null}
              <div className="mt-auto pt-5">
                <p className="text-sm font-medium text-muted">Suggested action</p>
                <p className="mt-3 inline-flex items-center gap-1.5 rounded-full border border-teal/25 bg-white px-3.5 py-2 text-sm font-semibold text-teal">
                  {action.suggested}
                  <span aria-hidden="true">→</span>
                </p>
              </div>
            </article>
          </FocusCard>
        ))}
      </FocusCards>

      <p className="mt-5 text-sm leading-6 text-muted">
        Actions are not currently automated. A person would review every
        suggested next step.
      </p>
    </ProductVisionFrame>
  );
}
