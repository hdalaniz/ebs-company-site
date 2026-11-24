import type { Ref } from "react";
import Link from "next/link";
import { buttonLinkVariants } from "@/components/marketing/ButtonLink";
import { getInsightUrl } from "@/config/site";
import { SAFE_NEXT_STEP } from "@/lib/commercial-leads/types";
import type { RecommendedRoute } from "@/lib/commercial-leads/types";
import type { PublicGetStartedSuccess } from "@/lib/get-started/public-response";

type RoutePresentation = {
  label: string;
  summary: string;
  href: string;
  cta: string;
  external?: boolean;
};

const ROUTE_COPY: Record<RecommendedRoute, RoutePresentation> = {
  launch: {
    label: "RiseCurrent Launch",
    summary: "A conversion foundation is the recommended next step.",
    href: "/products/launch",
    cta: "Review Launch",
  },
  presence: {
    label: "RiseCurrent Presence",
    summary: "Ongoing monitoring and improvement is the recommended next step.",
    href: "/products/presence",
    cta: "Review Presence",
  },
  consultation: {
    label: "Personal follow-up",
    summary:
      "We'll review what you shared and follow up with a recommended next step.",
    href: "/",
    cta: "Back to home",
  },
};

function nextStepCopy(result: PublicGetStartedSuccess): string {
  if (result.recommendedRoute === "consultation") {
    return SAFE_NEXT_STEP;
  }

  if (result.publishedStartingPrice) {
    return `Published starting price for ${ROUTE_COPY[result.recommendedRoute].label}: ${result.publishedStartingPrice}. That figure is informational only — it is not a custom quote, and submitting this form does not start payment or reserve time.`;
  }

  return SAFE_NEXT_STEP;
}

type GetStartedSuccessProps = {
  result: PublicGetStartedSuccess;
  headingRef?: Ref<HTMLHeadingElement>;
};

export function GetStartedSuccess({
  result,
  headingRef,
}: GetStartedSuccessProps) {
  const route = ROUTE_COPY[result.recommendedRoute];
  const nextStep = nextStepCopy(result);
  const showHome = route.href !== "/";
  const showInsight =
    result.recommendedRoute === "consultation"
      ? {
          href: getInsightUrl("/analyze"),
          cta: "Run free Insight",
        }
      : null;

  return (
    <section
      aria-labelledby="get-started-success-heading"
      className="ebs-card p-5 sm:p-8"
      data-testid="get-started-success"
      data-route={result.recommendedRoute}
      data-duplicate={result.duplicate ? "true" : "false"}
    >
      <p className="text-xs font-semibold tracking-[0.18em] text-teal uppercase">
        Request received
      </p>
      <h2
        id="get-started-success-heading"
        ref={headingRef}
        tabIndex={-1}
        className="mt-3 text-2xl font-bold tracking-tight text-ink sm:text-3xl"
      >
        We received your request.
      </h2>
      <p className="mt-3 text-base leading-7 text-ink/75">
        Your request is with RiseCurrent for follow-up. It does not reserve time
        or start payment.
      </p>

      <div className="mt-6 rounded-xl border border-teal/30 bg-teal/10 px-4 py-4">
        <p className="text-xs font-semibold tracking-[0.16em] text-teal uppercase">
          Recommended next step
        </p>
        <p className="mt-2 text-lg font-semibold tracking-tight text-ink">
          {route.label}
        </p>
        <p className="mt-2 text-sm leading-6 text-ink/80">{route.summary}</p>
        {result.publishedStartingPrice ? (
          <p className="mt-3 text-sm font-medium text-ink">
            {result.publishedStartingPrice}
          </p>
        ) : null}
      </div>

      <div className="mt-6">
        <h3 className="text-sm font-semibold tracking-tight text-ink">
          What happens next
        </h3>
        <p className="mt-2 text-sm leading-6 text-ink/80">{nextStep}</p>
      </div>

      <p className="mt-4 text-xs tracking-wide text-muted">
        Reference {result.inquiryId}
      </p>

      <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
        <ResultLink
          href={route.href}
          external={route.external}
          variant="primary"
        >
          {route.cta}
        </ResultLink>
        {showInsight ? (
          <ResultLink href={showInsight.href} external variant="secondary">
            {showInsight.cta}
          </ResultLink>
        ) : null}
        {showHome ? (
          <ResultLink href="/" variant="secondary">
            Back to home
          </ResultLink>
        ) : null}
      </div>
    </section>
  );
}

export function GetStartedError({ message }: { message: string }) {
  return (
    <div
      role="alert"
      data-testid="get-started-error"
      className="rounded-xl border border-navy/20 bg-sky px-4 py-3 text-sm leading-6 text-ink"
    >
      {message}
    </div>
  );
}

function ResultLink({
  href,
  children,
  variant,
  external = false,
}: {
  href: string;
  children: string;
  variant: "primary" | "secondary";
  external?: boolean;
}) {
  const className = `${buttonLinkVariants[variant]} w-full sm:w-auto`;
  if (external) {
    return (
      <a href={href} className={className} rel="noopener noreferrer">
        {children}
      </a>
    );
  }
  return (
    <Link href={href} className={className}>
      {children}
    </Link>
  );
}
