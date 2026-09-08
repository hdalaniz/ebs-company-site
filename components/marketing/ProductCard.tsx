import type { Product } from "@/config/products";
import { ButtonLink } from "@/components/marketing/ButtonLink";
import { ProductStatusBadge } from "@/components/marketing/ProductStatusBadge";

export function ProductCard({ product }: { product: Product }) {
  return (
    <article className="ebs-card flex h-full flex-col p-6 sm:p-7">
      <div className="flex flex-wrap items-center gap-3">
        <p className="text-[0.7rem] font-semibold tracking-[0.2em] text-teal uppercase">
          {product.name}
        </p>
        <ProductStatusBadge status={product.status} label={product.statusLabel} />
      </div>
      <h3 className="mt-4 text-xl font-semibold tracking-tight text-light sm:text-[1.35rem]">
        {product.cardHeadline}
      </h3>
      <p className="mt-3 text-sm leading-6 text-light/80 sm:leading-7">
        {product.cardDescription}
      </p>
      {product.cardSupporting ? (
        <p className="mt-3 text-sm text-muted">{product.cardSupporting}</p>
      ) : null}
      <div className="mt-6 flex flex-1 items-end">
        <ButtonLink
          href={product.href}
          variant={product.status === "available" ? "primary" : "secondary"}
          className="w-full sm:w-auto"
        >
          {product.cta}
        </ButtonLink>
      </div>
    </article>
  );
}
