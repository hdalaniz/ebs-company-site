import {
  ConceptualButton,
  ProductVisionFrame,
} from "@/components/products/FutureProductSections";

const actions: {
  label: string;
  title: string;
  why: string;
  opportunity?: string;
  suggested: string;
}[] = [
  {
    label: "Action 1",
    title: "Follow up with unclosed estimates.",
    why: "3 estimates have had no activity for more than 5 days.",
    opportunity: "$7,800",
    suggested: "Review Follow-Ups",
  },
  {
    label: "Action 2",
    title: "Review slow-response opportunities.",
    why: "7 leads waited longer than your target response time.",
    suggested: "Review Lead Workflow",
  },
  {
    label: "Action 3",
    title: "Request reviews from recent customers.",
    why: "6 completed jobs are eligible for a review request.",
    suggested: "Prepare Review Requests",
  },
];

export function AssistPreview() {
  return (
    <ProductVisionFrame
      productName="EBS Assist"
      caption="Future product vision"
      disclaimer="Future preview — actions are not currently automated. EBS Assist does not take autonomous actions today."
    >
      <div className="rounded-2xl border border-border bg-surface-elevated/80 p-5 sm:p-6">
        <p className="text-sm font-medium text-teal">Good morning.</p>
        <p className="mt-2 max-w-xl text-xl font-semibold tracking-tight text-ink sm:text-2xl">
          You have 3 opportunities worth reviewing today.
        </p>
      </div>

      <ol className="mt-4 grid gap-4 lg:grid-cols-3">
        {actions.map((action) => (
          <li
            key={action.label}
            className="flex h-full flex-col rounded-2xl border border-border bg-surface-elevated/80 p-5 sm:p-6"
          >
            <p className="text-[0.7rem] font-semibold tracking-[0.18em] text-teal uppercase">
              {action.label}
            </p>
            <h3 className="mt-3 text-lg font-semibold tracking-tight text-ink">
              {action.title}
            </h3>
            <p className="mt-4 text-sm font-medium text-muted">Why</p>
            <p className="mt-1 text-sm leading-6 text-ink/80">{action.why}</p>
            {action.opportunity ? (
              <>
                <p className="mt-4 text-sm font-medium text-muted">
                  Potential opportunity
                </p>
                <p className="mt-1 text-lg font-semibold tracking-tight text-ink">
                  {action.opportunity}
                </p>
              </>
            ) : null}
            <div className="mt-auto pt-4">
              <p className="text-sm font-medium text-muted">Suggested action</p>
              <div className="mt-3">
                <ConceptualButton>{action.suggested}</ConceptualButton>
              </div>
            </div>
          </li>
        ))}
      </ol>
    </ProductVisionFrame>
  );
}
