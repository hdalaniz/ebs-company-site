import { PreviewFrame } from "@/components/marketing/ComingSoonProduct";

const recommendations = [
  {
    title: "Follow up with unclosed estimates",
    reason: "Three estimates have had no owner follow-up in 5+ days.",
    impact: "Recover stalled demand before it goes cold.",
    action: "Call the highest-value open estimate first.",
  },
  {
    title: "Review slow-response opportunities",
    reason: "Two new inquiries waited more than two hours for a reply.",
    impact: "Faster response is more likely to convert to a booking.",
    action: "Reply to the oldest unanswered inquiry now.",
  },
  {
    title: "Request reviews from recent customers",
    reason: "Four completed jobs in the last 14 days have no public review ask.",
    impact: "Stronger proof can improve the next customer’s decision.",
    action: "Send a review request to the most recent completed job.",
  },
] as const;

export function AssistPreview() {
  return (
    <PreviewFrame title="EBS Assist · Product preview">
      <p className="mb-5 text-sm text-muted">
        Recommendations are illustrative. EBS Assist does not currently take
        autonomous actions.
      </p>
      <div className="grid gap-4 lg:grid-cols-3">
        {recommendations.map((item, index) => (
          <article
            key={item.title}
            className="rounded-2xl border border-border bg-surface-elevated/80 p-5"
          >
            <p className="text-[0.68rem] font-semibold tracking-[0.18em] text-teal uppercase">
              Priority {index + 1}
            </p>
            <h3 className="mt-2 text-base font-semibold tracking-tight text-light">
              {item.title}
            </h3>
            <dl className="mt-4 space-y-3 text-sm">
              <div>
                <dt className="text-muted">Reason</dt>
                <dd className="mt-1 text-light/80">{item.reason}</dd>
              </div>
              <div>
                <dt className="text-muted">Potential impact</dt>
                <dd className="mt-1 text-light/80">{item.impact}</dd>
              </div>
              <div>
                <dt className="text-muted">Suggested action</dt>
                <dd className="mt-1 text-teal">{item.action}</dd>
              </div>
            </dl>
          </article>
        ))}
      </div>
    </PreviewFrame>
  );
}
