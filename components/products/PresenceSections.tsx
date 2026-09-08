import { ButtonLink } from "@/components/marketing/ButtonLink";
import { ProductStatusBadge } from "@/components/marketing/ProductStatusBadge";
import { getInsightUrl, isInsightConfigured } from "@/config/site";

export function PresenceDecision() {
  return (
    <section
      aria-labelledby="presence-decision-heading"
      className="mx-auto w-full max-w-7xl scroll-mt-24 px-5 py-10 sm:px-8 sm:py-14"
    >
      <h2
        id="presence-decision-heading"
        className="text-2xl font-bold tracking-tight text-light sm:text-3xl"
      >
        Do you already have a website?
      </h2>

      <div className="mt-8 grid gap-5 lg:grid-cols-2">
        <article className="ebs-card flex flex-col p-6 sm:p-8">
          <p className="text-[0.68rem] font-semibold tracking-[0.2em] text-teal uppercase">
            Yes — I already have a website
          </p>
          <div className="mt-4 flex flex-wrap items-center gap-3">
            <p className="text-sm font-semibold text-light">EBS Insight</p>
            <ProductStatusBadge status="available" label="Available" />
          </div>
          <h3 className="mt-4 text-2xl font-semibold tracking-tight text-light">
            Find what&apos;s holding your website back.
          </h3>
          <p className="mt-3 text-sm leading-6 text-light/80 sm:text-base sm:leading-7">
            Analyze your existing online presence, uncover conversion problems,
            and get prioritized recommendations for what to improve next.
          </p>
          <div className="mt-6">
            <ButtonLink href={getInsightUrl("/analyze")}>
              Analyze My Website
            </ButtonLink>
            {!isInsightConfigured() ? (
              <p
                id="configure-ebs-insight-url"
                className="mt-3 text-xs leading-5 text-muted"
              >
                EBS Insight URL is not configured yet. Set{" "}
                <code className="text-light/80">NEXT_PUBLIC_EBS_INSIGHT_URL</code>{" "}
                in <code className="text-light/80">.env.local</code>. Do not
                invent a production URL.
              </p>
            ) : null}
          </div>
        </article>

        <article className="ebs-card flex flex-col p-6 sm:p-8">
          <p className="text-[0.68rem] font-semibold tracking-[0.2em] text-teal uppercase">
            No — I need a website
          </p>
          <div className="mt-4 flex flex-wrap items-center gap-3">
            <p className="text-sm font-semibold text-light">EBS Launch</p>
            <ProductStatusBadge status="coming-soon" />
          </div>
          <h3 className="mt-4 text-2xl font-semibold tracking-tight text-light">
            Build your digital foundation.
          </h3>
          <p className="mt-3 text-sm leading-6 text-light/80 sm:text-base sm:leading-7">
            Tell EBS about your business, goals, visual preferences, services,
            and desired features through a guided website-building experience.
          </p>
          <div className="mt-6">
            <ButtonLink href="#ebs-launch" variant="secondary">
              Start EBS Launch
            </ButtonLink>
          </div>
        </article>
      </div>
    </section>
  );
}

export function PresencePaths() {
  return (
    <section
      aria-labelledby="presence-paths-heading"
      className="mx-auto w-full max-w-7xl px-5 py-6 sm:px-8 sm:py-8"
    >
      <h2
        id="presence-paths-heading"
        className="text-xl font-semibold tracking-tight text-light"
      >
        Two paths inside EBS Presence
      </h2>

      <div className="mt-6 grid gap-5 md:grid-cols-2">
        <div className="ebs-card p-6">
          <p className="text-[0.68rem] font-semibold tracking-[0.18em] text-teal uppercase">
            Existing website
          </p>
          <ol className="mt-4 flex flex-wrap items-center gap-2 text-sm text-light">
            <li>Existing website</li>
            <li aria-hidden="true" className="text-teal">
              →
            </li>
            <li>EBS Insight</li>
            <li aria-hidden="true" className="text-teal">
              →
            </li>
            <li>Analyze</li>
            <li aria-hidden="true" className="text-teal">
              →
            </li>
            <li>Improve</li>
          </ol>
        </div>

        <div className="ebs-card p-6">
          <p className="text-[0.68rem] font-semibold tracking-[0.18em] text-teal uppercase">
            No website
          </p>
          <ol className="mt-4 flex flex-wrap items-center gap-2 text-sm text-light">
            <li>No website</li>
            <li aria-hidden="true" className="text-teal">
              →
            </li>
            <li>EBS Launch</li>
            <li aria-hidden="true" className="text-teal">
              →
            </li>
            <li>Design</li>
            <li aria-hidden="true" className="text-teal">
              →
            </li>
            <li>Build</li>
          </ol>
        </div>
      </div>
    </section>
  );
}

export function LaunchComingSoon() {
  return (
    <section
      id="ebs-launch"
      aria-labelledby="ebs-launch-heading"
      className="mx-auto w-full max-w-7xl scroll-mt-24 px-5 py-10 pb-16 sm:px-8 sm:py-14 sm:pb-20"
    >
      <div className="ebs-card p-6 sm:p-8">
        <ProductStatusBadge status="coming-soon" />
        <h2
          id="ebs-launch-heading"
          className="mt-4 text-2xl font-semibold tracking-tight text-light"
        >
          EBS Launch is not built yet.
        </h2>
        <p className="mt-3 max-w-2xl text-sm leading-6 text-light/80 sm:text-base sm:leading-7">
          The guided website-building experience will live here. For now, if you
          already have a website, EBS Insight is the available path inside EBS
          Presence.
        </p>
        <div className="mt-6">
          <ButtonLink href={getInsightUrl("/analyze")}>
            Analyze My Website
          </ButtonLink>
        </div>
      </div>
    </section>
  );
}
