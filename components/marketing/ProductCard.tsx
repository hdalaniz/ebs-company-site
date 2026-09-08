import Link from "next/link";
import type { Product } from "@/config/products";
import { buttonLinkVariants } from "@/components/marketing/ButtonLink";
import { ProductStatusBadge } from "@/components/marketing/ProductStatusBadge";
import { cn } from "@/lib/cn";

export function ProductCard({
  product,
  featured = false,
}: {
  product: Product;
  featured?: boolean;
}) {
  if (featured) {
    return (
      <Link
        href={product.href}
        className="ebs-card group/bento relative isolate grid overflow-hidden ring-1 ring-inset ring-teal/20 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-teal lg:grid-cols-[minmax(0,1.15fr)_minmax(0,0.85fr)]"
      >
        <div className="flex flex-col px-5 py-6 sm:px-8 sm:py-8 lg:px-10 lg:py-10">
          <div className="flex flex-wrap items-center gap-3">
            <p className="text-[0.68rem] font-semibold tracking-[0.2em] text-teal uppercase">
              {product.name}
            </p>
            <ProductStatusBadge
              status={product.status}
              label={product.statusLabel}
            />
          </div>
          <h3 className="mt-4 max-w-3xl text-2xl font-semibold tracking-tight text-light sm:text-[1.75rem] lg:text-3xl">
            {product.cardHeadline}
          </h3>
          <p className="mt-3 max-w-xl text-[0.95rem] leading-6 text-light/80 sm:text-base sm:leading-7">
            {product.cardDescription}
          </p>
          {product.cardSupporting ? (
            <p className="mt-3 text-sm text-muted">{product.cardSupporting}</p>
          ) : null}
          <div className="mt-8">
            <span className={cn(buttonLinkVariants.primary, "pointer-events-none")}>
              {product.cta}
            </span>
          </div>
        </div>
        <div
          className="relative min-h-28 overflow-hidden border-t border-border bg-gradient-to-br from-teal/12 to-transparent text-teal sm:min-h-32 lg:min-h-full lg:border-t-0 lg:border-l"
          aria-hidden="true"
        >
          <PresencePreviewGraphic />
        </div>
      </Link>
    );
  }

  return (
    <Link
      href={product.href}
      className="ebs-card group/bento flex h-full flex-col overflow-hidden p-0 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-teal"
    >
      <div
        className="relative h-24 overflow-hidden border-b border-border bg-gradient-to-br from-teal/12 to-transparent text-teal sm:h-28"
        aria-hidden="true"
      >
        <FuturePreviewGraphic productKey={product.key} />
      </div>
      <div className="flex flex-1 flex-col justify-between px-5 py-5 sm:px-6 sm:py-6">
        <div className="motion-safe:transition-transform motion-safe:duration-200 motion-safe:group-hover/bento:translate-x-1">
          <div className="flex flex-wrap items-center gap-2.5">
            <p className="text-[0.68rem] font-semibold tracking-[0.2em] text-teal uppercase">
              {product.name}
            </p>
            <ProductStatusBadge
              status={product.status}
              label={product.statusLabel}
            />
          </div>
          <h3 className="mt-3 text-lg font-semibold tracking-tight text-light sm:text-xl">
            {product.cardHeadline}
          </h3>
        </div>
        <p className="mt-4 text-sm font-medium text-teal">{product.cta}</p>
      </div>
    </Link>
  );
}

function PresencePreviewGraphic() {
  return (
    <svg
      viewBox="0 0 420 280"
      className="absolute inset-0 h-full w-full"
      preserveAspectRatio="xMidYMid slice"
      aria-hidden="true"
    >
      <rect
        x="48"
        y="42"
        width="250"
        height="168"
        rx="14"
        fill="none"
        stroke="currentColor"
        strokeOpacity="0.45"
        strokeWidth="1.6"
      />
      <path
        d="M48 72h250"
        fill="none"
        stroke="currentColor"
        strokeOpacity="0.28"
        strokeWidth="1.3"
      />
      <circle cx="68" cy="57" r="4" fill="currentColor" fillOpacity="0.55" />
      <circle cx="84" cy="57" r="4" fill="currentColor" fillOpacity="0.35" />
      <path
        d="M72 112 118 74l36 28 48-52 42 38 62 22"
        fill="none"
        stroke="currentColor"
        strokeOpacity="0.7"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <rect
        x="318"
        y="86"
        width="64"
        height="112"
        rx="12"
        fill="none"
        stroke="currentColor"
        strokeOpacity="0.4"
        strokeWidth="1.5"
      />
      <path
        d="M338 178h24"
        fill="none"
        stroke="currentColor"
        strokeOpacity="0.45"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
}

function FuturePreviewGraphic({ productKey }: { productKey: Product["key"] }) {
  if (productKey === "growth") {
    return (
      <svg viewBox="0 0 320 112" className="absolute inset-0 h-full w-full">
        <path
          d="M36 76c28-28 48-28 76 0s48 28 76 0 48-28 76 0"
          fill="none"
          stroke="currentColor"
          strokeOpacity="0.5"
          strokeWidth="1.7"
          strokeLinecap="round"
        />
        <circle cx="36" cy="76" r="5" fill="currentColor" fillOpacity="0.7" />
        <circle cx="112" cy="48" r="5" fill="currentColor" fillOpacity="0.7" />
        <circle cx="188" cy="76" r="5" fill="currentColor" fillOpacity="0.45" />
        <circle cx="264" cy="48" r="5" fill="currentColor" fillOpacity="0.35" />
      </svg>
    );
  }

  if (productKey === "revenue-intelligence") {
    return (
      <svg viewBox="0 0 320 112" className="absolute inset-0 h-full w-full">
        <path
          d="M48 84v-18M96 84V36M144 84V48M192 84V28M240 84V56"
          fill="none"
          stroke="currentColor"
          strokeOpacity="0.5"
          strokeWidth="8"
          strokeLinecap="round"
        />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 320 112" className="absolute inset-0 h-full w-full">
      <circle
        cx="86"
        cy="56"
        r="16"
        fill="none"
        stroke="currentColor"
        strokeOpacity="0.45"
        strokeWidth="1.6"
      />
      <path
        d="M102 56h46"
        fill="none"
        stroke="currentColor"
        strokeOpacity="0.4"
        strokeWidth="1.6"
      />
      <circle
        cx="180"
        cy="56"
        r="20"
        fill="none"
        stroke="currentColor"
        strokeOpacity="0.7"
        strokeWidth="1.8"
      />
      <path
        d="M172 56h16M180 48v16"
        fill="none"
        stroke="currentColor"
        strokeOpacity="0.7"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
    </svg>
  );
}
