import Link from "next/link";
import type { ReactNode } from "react";
import { GrowthMountain } from "@/components/brand/GrowthMountain";
import { Spotlight } from "@/components/brand/Spotlight";
import { ButtonLink } from "@/components/marketing/ButtonLink";
import { ProductStatusBadge } from "@/components/marketing/ProductStatusBadge";
import { SectionHeading } from "@/components/marketing/SectionHeading";
import type { ProductStatus } from "@/config/products";
import { cn } from "@/lib/cn";

export function FutureProductHero({
  eyebrow,
  status,
  statusLabel,
  headline,
  description,
}: {
  eyebrow: string;
  status: ProductStatus;
  statusLabel?: string;
  headline: ReactNode;
  description: string;
}) {
  return (
    <section className="relative mx-auto grid w-full max-w-7xl items-start gap-10 px-5 pt-12 pb-6 sm:px-8 sm:pt-16 sm:pb-8 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] lg:gap-16 lg:pt-20 lg:pb-8">
      <div
        className="pointer-events-none absolute inset-0 overflow-hidden"
        aria-hidden="true"
      >
        <Spotlight className="-top-40 left-0 md:-top-20 md:left-60" />
      </div>

      <div className="relative z-10">
        <p className="inline-flex rounded-full border border-teal/20 bg-teal/10 px-3 py-1 text-[0.7rem] font-semibold tracking-[0.22em] text-teal uppercase">
          {eyebrow}
        </p>
        <div className="mt-4">
          <ProductStatusBadge status={status} label={statusLabel} />
        </div>
        <h1 className="mt-5 max-w-2xl text-[2.05rem] leading-[1.08] font-bold tracking-tight text-ink sm:text-5xl lg:text-[3.25rem]">
          {headline}
        </h1>
        <p className="mt-6 max-w-xl text-[1.0625rem] leading-7 text-ink/80 sm:text-lg sm:leading-8">
          {description}
        </p>
      </div>

      <div className="relative z-10 flex w-full flex-col">
        <div className="relative -mx-2 overflow-hidden sm:mx-0 lg:-mt-8 lg:-mr-6 lg:overflow-visible">
          <GrowthMountain className="pointer-events-none h-auto w-full lg:w-[118%] lg:max-w-none" />
        </div>
      </div>
    </section>
  );
}

export function FutureProductPreviewSection({
  headingId,
  heading,
  supporting,
  children,
}: {
  headingId: string;
  heading: string;
  supporting?: string;
  children: ReactNode;
}) {
  return (
    <section
      aria-labelledby={headingId}
      className="mx-auto w-full max-w-7xl px-5 pt-2 pb-12 sm:px-8 sm:pt-4 sm:pb-16 lg:pt-6 lg:pb-20"
    >
      <SectionHeading
        headingId={headingId}
        heading={heading}
        supporting={supporting}
      />
      <div className="mt-8">{children}</div>
    </section>
  );
}

export function ProductVisionFrame({
  productName,
  caption = "Product vision preview",
  disclaimer,
  children,
}: {
  productName: string;
  caption?: string;
  disclaimer?: string;
  children: ReactNode;
}) {
  return (
    <figure className="ebs-card overflow-hidden rounded-[1.5rem]">
      <figcaption className="flex flex-wrap items-center justify-between gap-2 border-b border-border px-5 py-3 sm:px-6">
        <span className="text-[0.68rem] font-semibold tracking-[0.18em] text-teal uppercase">
          {productName}
        </span>
        <span className="text-[0.68rem] font-semibold tracking-[0.16em] text-muted uppercase">
          {caption}
        </span>
      </figcaption>
      <div className="p-5 sm:p-6 lg:p-8">{children}</div>
      {disclaimer ? (
        <p className="border-t border-border px-5 py-3 text-sm leading-6 text-muted sm:px-6">
          {disclaimer}
        </p>
      ) : null}
    </figure>
  );
}

export function IdeaCardGrid({
  headingId,
  heading,
  supporting,
  items,
  columns = 2,
}: {
  headingId: string;
  heading: string;
  supporting?: string;
  items: readonly { title: string; description: string }[];
  columns?: 2 | 3 | 4;
}) {
  return (
    <section
      aria-labelledby={headingId}
      className="mx-auto w-full max-w-7xl px-5 pt-2 pb-12 sm:px-8 sm:pt-4 sm:pb-16 lg:pt-6 lg:pb-20"
    >
      <SectionHeading
        headingId={headingId}
        heading={heading}
        supporting={supporting}
      />
      <ul
        className={cn(
          "mt-8 grid gap-4",
          columns === 3 && "sm:grid-cols-2 lg:grid-cols-3",
          columns === 4 && "sm:grid-cols-2 xl:grid-cols-4",
          columns === 2 && "sm:grid-cols-2",
        )}
      >
        {items.map((item) => (
          <li key={item.title} className="ebs-card rounded-2xl p-5 sm:p-6">
            <h3 className="text-lg font-semibold tracking-tight text-ink">
              {item.title}
            </h3>
            <p className="mt-2 text-sm leading-6 text-ink/80 sm:text-[0.95rem] sm:leading-7">
              {item.description}
            </p>
          </li>
        ))}
      </ul>
    </section>
  );
}

export function StageFlow({
  ariaLabel,
  stages,
  variant = "pills",
}: {
  ariaLabel: string;
  stages: readonly {
    label: string;
    detail?: string;
    current?: boolean;
  }[];
  variant?: "pills" | "cards";
}) {
  if (variant === "cards") {
    return (
      <ol
        aria-label={ariaLabel}
        className={cn(
          "grid grid-cols-1 gap-4",
          stages.length === 3 && "md:grid-cols-3",
          stages.length === 4 && "sm:grid-cols-2 xl:grid-cols-4",
          stages.length >= 5 && "sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6",
        )}
      >
        {stages.map((stage, index) => (
          <li
            key={stage.label}
            className={cn(
              "rounded-2xl border bg-surface-elevated/80 px-4 py-5",
              stage.current
                ? "border-teal/40 ring-1 ring-inset ring-teal/20"
                : "border-border",
            )}
          >
            <p className="text-[0.68rem] font-semibold tracking-[0.16em] text-teal uppercase">
              {String(index + 1).padStart(2, "0")}
            </p>
            <p className="mt-2 text-base font-semibold tracking-tight text-ink">
              {stage.label}
            </p>
            {stage.detail ? (
              <p className="mt-2 text-sm leading-6 text-ink/80">{stage.detail}</p>
            ) : null}
          </li>
        ))}
      </ol>
    );
  }

  return (
    <ol
      aria-label={ariaLabel}
      className="flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center"
    >
      {stages.map((stage, index) => (
        <li key={stage.label} className="flex items-center gap-3">
          <span
            className={cn(
              "inline-flex rounded-full border px-3.5 py-1.5 text-sm font-medium",
              stage.current
                ? "border-teal/40 bg-teal/10 text-ink"
                : "border-border bg-surface-elevated/80 text-ink",
            )}
          >
            {stage.label}
          </span>
          {index < stages.length - 1 ? (
            <span aria-hidden="true" className="hidden text-teal sm:inline">
              →
            </span>
          ) : null}
        </li>
      ))}
    </ol>
  );
}

export function PlatformRelationship({
  headingId,
  heading,
  supporting,
  steps,
  loopNote,
}: {
  headingId: string;
  heading: string;
  supporting: string;
  steps: readonly {
    name: string;
    href: string;
    description: string;
    current?: boolean;
  }[];
  loopNote?: string;
}) {
  return (
    <section
      aria-labelledby={headingId}
      className="mx-auto w-full max-w-7xl px-5 pt-2 pb-12 sm:px-8 sm:pt-4 sm:pb-16 lg:pt-6 lg:pb-20"
    >
      <SectionHeading
        headingId={headingId}
        heading={heading}
        supporting={supporting}
      />

      <ol
        className={cn(
          "mt-8 grid grid-cols-1 gap-8 overflow-visible lg:gap-6",
          steps.length === 3 && "lg:grid-cols-3",
          steps.length === 4 && "lg:grid-cols-4",
        )}
      >
        {steps.map((step, index) => {
          const isLast = index === steps.length - 1;
          const content = (
            <>
              <p className="text-[0.68rem] font-semibold tracking-[0.16em] text-teal uppercase">
                {String(index + 1).padStart(2, "0")}
              </p>
              <h3 className="mt-2 text-lg font-semibold tracking-tight text-ink">
                {step.name}
              </h3>
              <p className="mt-2 text-sm leading-6 text-ink/80">{step.description}</p>
              {step.current ? (
                <p className="mt-3 text-sm font-medium text-teal">This product</p>
              ) : null}
            </>
          );

          return (
            <li key={step.name} className="relative">
              {!isLast ? (
                <>
                  <span
                    aria-hidden="true"
                    className="pointer-events-none absolute top-5 left-[calc(100%+0.15rem)] hidden h-px w-[calc(100%-0.5rem)] bg-gradient-to-r from-teal/45 via-teal-secondary/30 to-transparent lg:block"
                  />
                  <span
                    aria-hidden="true"
                    className="pointer-events-none absolute top-full left-4 h-8 w-px bg-gradient-to-b from-teal/40 to-transparent lg:hidden"
                  />
                </>
              ) : null}

              {step.current ? (
                <div className="ebs-card relative z-10 h-full rounded-2xl p-5 ring-1 ring-inset ring-teal/20 sm:p-6">
                  {content}
                </div>
              ) : (
                <Link
                  href={step.href}
                  className="ebs-card relative z-10 block h-full rounded-2xl p-5 transition-colors hover:border-teal/25 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-teal sm:p-6"
                >
                  {content}
                </Link>
              )}
            </li>
          );
        })}
      </ol>

      {loopNote ? (
        <p className="mt-6 max-w-3xl text-sm leading-6 text-muted sm:text-[0.95rem] sm:leading-7">
          {loopNote}
        </p>
      ) : null}
    </section>
  );
}

export function SpotlightCallout({
  headingId,
  heading,
  children,
}: {
  headingId: string;
  heading: string;
  children: ReactNode;
}) {
  return (
    <section
      aria-labelledby={headingId}
      className="mx-auto w-full max-w-7xl px-5 pt-2 pb-12 sm:px-8 sm:pt-4 sm:pb-16 lg:pt-6 lg:pb-20"
    >
      <div className="ebs-card relative overflow-hidden px-6 py-10 sm:px-10 sm:py-12 lg:px-14 lg:py-14">
        <div className="final-cta-glow" aria-hidden="true" />
        <div className="relative z-10">
          <h2
            id={headingId}
            className="max-w-3xl text-2xl font-bold tracking-tight text-ink sm:text-3xl lg:text-[2.15rem]"
          >
            {heading}
          </h2>
          <div className="mt-4 max-w-2xl text-base leading-7 text-ink/80 sm:text-[1.05rem] sm:leading-8">
            {children}
          </div>
        </div>
      </div>
    </section>
  );
}

export function FutureProductCta({
  headingId,
  headline,
  supporting,
  primary,
  secondary,
}: {
  headingId: string;
  headline: string;
  supporting?: string;
  primary: { href: string; label: string };
  secondary: { href: string; label: string };
}) {
  return (
    <section
      aria-labelledby={headingId}
      className="mx-auto w-full max-w-7xl px-5 pt-4 pb-16 sm:px-8 sm:pt-6 sm:pb-20 lg:pt-8 lg:pb-24"
    >
      <div className="ebs-card relative overflow-hidden px-6 py-12 sm:px-12 sm:py-16 lg:px-16 lg:py-20">
        <div className="final-cta-glow" aria-hidden="true" />
        <div className="relative z-10">
          <h2
            id={headingId}
            className="max-w-2xl text-3xl font-bold tracking-tight text-ink sm:text-4xl lg:text-[2.65rem] lg:leading-[1.12]"
          >
            {headline}
          </h2>
          {supporting ? (
            <p className="mt-5 max-w-2xl text-base leading-7 text-ink/80 sm:text-lg sm:leading-8">
              {supporting}
            </p>
          ) : null}
          <div className="mt-8 flex flex-col items-stretch gap-3 sm:flex-row sm:flex-wrap sm:items-center sm:gap-x-5">
            <ButtonLink href={primary.href} className="w-full sm:w-auto">
              {primary.label}
            </ButtonLink>
            <ButtonLink
              href={secondary.href}
              variant="ghost"
              className="w-full sm:w-auto"
            >
              {secondary.label}
            </ButtonLink>
          </div>
        </div>
      </div>
    </section>
  );
}

export function ConceptualButton({ children }: { children: ReactNode }) {
  return (
    <span
      className="inline-flex items-center justify-center rounded-lg border border-navy/20 bg-white px-4 py-2.5 text-sm font-semibold text-ink"
      aria-disabled="true"
    >
      {children}
    </span>
  );
}
