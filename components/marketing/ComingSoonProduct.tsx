import type { ReactNode } from "react";
import { ButtonLink } from "@/components/marketing/ButtonLink";
import { ProductStatusBadge } from "@/components/marketing/ProductStatusBadge";
import type { ProductStatus } from "@/config/products";

type ComingSoonProductProps = {
  name: string;
  status: ProductStatus;
  statusLabel?: string;
  headline: string;
  description: string;
  capabilities: string[];
  preview: ReactNode;
};

export function ComingSoonProduct({
  name,
  status,
  statusLabel,
  headline,
  description,
  capabilities,
  preview,
}: ComingSoonProductProps) {
  return (
    <div className="mx-auto w-full max-w-7xl px-5 py-12 sm:px-8 sm:py-16 lg:py-20">
      <p className="inline-flex rounded-full border border-teal/20 bg-teal/10 px-3 py-1 text-[0.7rem] font-semibold tracking-[0.22em] text-teal uppercase">
        {name}
      </p>
      <div className="mt-4">
        <ProductStatusBadge status={status} label={statusLabel} />
      </div>
      <h1 className="mt-5 max-w-3xl text-[2.05rem] leading-[1.08] font-bold tracking-tight text-light sm:text-5xl">
        {headline}
      </h1>
      <p className="mt-5 max-w-2xl text-base leading-7 text-light/80 sm:text-lg sm:leading-8">
        {description}
      </p>

      <div className="mt-10">{preview}</div>

      <section className="mt-12" aria-labelledby="intended-capabilities-heading">
        <h2
          id="intended-capabilities-heading"
          className="text-xl font-semibold tracking-tight text-light"
        >
          Intended capabilities
        </h2>
        <ul className="mt-5 grid gap-4 sm:grid-cols-2">
          {capabilities.map((capability) => (
            <li key={capability} className="ebs-card rounded-2xl p-5 text-sm leading-6 text-light/80">
              {capability}
            </li>
          ))}
        </ul>
      </section>

      <aside className="ebs-card mt-10 p-6 sm:p-8">
        <p className="text-[0.7rem] font-semibold tracking-[0.18em] text-teal-secondary uppercase">
          Not available yet
        </p>
        <p className="mt-3 max-w-2xl text-sm leading-6 text-light/80 sm:text-base sm:leading-7">
          {name} is not currently available. The preview above is a conceptual
          look at what this product is intended to become. It does not represent
          live functionality.
        </p>
        <div className="mt-6">
          <ButtonLink href="/products/presence">Explore EBS Presence</ButtonLink>
        </div>
      </aside>
    </div>
  );
}

export function PreviewFrame({
  title,
  children,
}: {
  title: string;
  children: ReactNode;
}) {
  return (
    <figure className="ebs-card overflow-hidden rounded-[1.5rem]">
      <figcaption className="flex flex-wrap items-center justify-between gap-2 border-b border-border px-5 py-3 sm:px-6">
        <span className="text-[0.68rem] font-semibold tracking-[0.18em] text-teal uppercase">
          {title}
        </span>
        <span className="text-[0.68rem] font-semibold tracking-[0.16em] text-muted uppercase">
          Conceptual preview
        </span>
      </figcaption>
      <div className="p-5 sm:p-6">{children}</div>
    </figure>
  );
}
