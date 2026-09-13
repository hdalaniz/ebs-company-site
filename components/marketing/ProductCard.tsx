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
        className="ebs-card ebs-card-featured group/bento relative isolate grid overflow-hidden focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-teal lg:grid-cols-[minmax(0,1.15fr)_minmax(0,0.85fr)]"
      >
        <div className="flex flex-col px-6 py-7 sm:px-8 sm:py-9 lg:px-10 lg:py-11">
          <div className="flex flex-wrap items-center gap-3">
            <p className="text-xs font-semibold tracking-[0.18em] text-teal uppercase">
              {product.name}
            </p>
            <ProductStatusBadge
              status={product.status}
              label={product.statusLabel}
            />
          </div>
          <h3 className="mt-4 max-w-3xl text-2xl font-semibold tracking-tight text-ink sm:text-[1.75rem] lg:text-3xl">
            {product.cardHeadline}
          </h3>
          <p className="mt-3 max-w-xl text-[0.95rem] leading-6 text-ink/75 sm:text-base sm:leading-7">
            {product.cardDescription}
          </p>
          {product.cardSupporting ? (
            <p className="mt-4 text-sm font-medium text-muted">
              {product.cardSupporting}
            </p>
          ) : null}
          <div className="mt-8">
            <span className={cn(buttonLinkVariants.primary, "pointer-events-none")}>
              {product.cta}
            </span>
          </div>
        </div>
        <div
          className="relative min-h-36 overflow-hidden border-t border-border bg-gradient-to-br from-sky via-white to-teal/10 text-navy sm:min-h-40 lg:min-h-full lg:border-t-0 lg:border-l"
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
        className="relative h-28 overflow-hidden border-b border-border bg-gradient-to-br from-sky/80 via-white to-teal/8 text-teal sm:h-32"
        aria-hidden="true"
      >
        <FuturePreviewGraphic productKey={product.key} />
      </div>
      <div className="flex flex-1 flex-col justify-between px-5 py-5 sm:px-6 sm:py-6">
        <div className="motion-safe:transition-transform motion-safe:duration-200 motion-safe:group-hover/bento:translate-x-1">
          <div className="flex flex-wrap items-center gap-2.5">
            <p className="text-xs font-semibold tracking-[0.18em] text-teal uppercase">
              {product.name}
            </p>
            <ProductStatusBadge
              status={product.status}
              label={product.statusLabel}
            />
          </div>
          <h3 className="mt-3 text-lg font-semibold tracking-tight text-ink sm:text-xl">
            {product.cardHeadline}
          </h3>
          <p className="mt-2 text-sm leading-6 text-ink/75">
            {product.cardDescription}
          </p>
        </div>
        <p className="mt-5 text-sm font-medium text-teal">{product.cta}</p>
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
      <rect x="0" y="0" width="420" height="280" fill="url(#presence-sky)" />
      <defs>
        <linearGradient id="presence-sky" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#e6eef4" />
          <stop offset="55%" stopColor="#ffffff" />
          <stop offset="100%" stopColor="#d8f3ec" />
        </linearGradient>
      </defs>
      <path
        d="M0 198c42-18 78-34 118-28 48 8 72 36 124 30 36-4 62-24 96-34 28-8 52-6 82 8v106H0V198Z"
        fill="#143049"
        fillOpacity="0.08"
      />
      <rect
        x="58"
        y="48"
        width="236"
        height="156"
        rx="14"
        fill="#fff"
        stroke="#143049"
        strokeOpacity="0.14"
        strokeWidth="1.5"
      />
      <path
        d="M58 78h236"
        fill="none"
        stroke="#143049"
        strokeOpacity="0.1"
        strokeWidth="1.3"
      />
      <circle cx="78" cy="63" r="4" fill="#1ec8a5" fillOpacity="0.8" />
      <circle cx="94" cy="63" r="4" fill="#143049" fillOpacity="0.18" />
      <circle cx="110" cy="63" r="4" fill="#143049" fillOpacity="0.12" />
      <rect
        x="78"
        y="98"
        width="88"
        height="10"
        rx="5"
        fill="#143049"
        fillOpacity="0.12"
      />
      <rect
        x="78"
        y="118"
        width="148"
        height="8"
        rx="4"
        fill="#143049"
        fillOpacity="0.08"
      />
      <rect
        x="78"
        y="136"
        width="128"
        height="8"
        rx="4"
        fill="#143049"
        fillOpacity="0.08"
      />
      <path
        d="M78 174 118 146l28 18 42-36 34 24"
        fill="none"
        stroke="#1ec8a5"
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <rect
        x="312"
        y="92"
        width="58"
        height="104"
        rx="12"
        fill="#fff"
        stroke="#143049"
        strokeOpacity="0.14"
        strokeWidth="1.4"
      />
      <path
        d="M328 172h26"
        fill="none"
        stroke="#1ec8a5"
        strokeOpacity="0.7"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
    </svg>
  );
}

function FuturePreviewGraphic({ productKey }: { productKey: Product["key"] }) {
  if (productKey === "growth") {
    return (
      <svg viewBox="0 0 320 128" className="absolute inset-0 h-full w-full">
        <path
          d="M28 86h54"
          fill="none"
          stroke="currentColor"
          strokeOpacity="0.25"
          strokeWidth="1.5"
          strokeDasharray="4 5"
        />
        <circle cx="28" cy="86" r="7" fill="currentColor" fillOpacity="0.18" />
        <circle cx="88" cy="54" r="8" fill="currentColor" fillOpacity="0.55" />
        <path
          d="M96 54h46"
          fill="none"
          stroke="currentColor"
          strokeOpacity="0.3"
          strokeWidth="1.5"
          strokeDasharray="4 5"
        />
        <circle cx="150" cy="70" r="8" fill="currentColor" fillOpacity="0.4" />
        <path
          d="M158 70h46"
          fill="none"
          stroke="currentColor"
          strokeOpacity="0.3"
          strokeWidth="1.5"
          strokeDasharray="4 5"
        />
        <circle cx="214" cy="46" r="9" fill="currentColor" fillOpacity="0.7" />
        <path
          d="M223 46h42"
          fill="none"
          stroke="currentColor"
          strokeOpacity="0.25"
          strokeWidth="1.5"
          strokeDasharray="4 5"
        />
        <circle cx="276" cy="62" r="7" fill="currentColor" fillOpacity="0.28" />
        <text
          x="214"
          y="50"
          textAnchor="middle"
          fontSize="8"
          fill="#143049"
          fillOpacity="0.55"
          fontFamily="ui-sans-serif, system-ui, sans-serif"
        >
          ✓
        </text>
      </svg>
    );
  }

  if (productKey === "revenue-intelligence") {
    return (
      <svg viewBox="0 0 320 128" className="absolute inset-0 h-full w-full">
        <path
          d="M36 92h48l24-28h48l24-24h48l24 18"
          fill="none"
          stroke="currentColor"
          strokeOpacity="0.35"
          strokeWidth="1.7"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <circle cx="36" cy="92" r="6" fill="currentColor" fillOpacity="0.35" />
        <circle cx="108" cy="64" r="6" fill="currentColor" fillOpacity="0.45" />
        <circle cx="180" cy="40" r="6" fill="currentColor" fillOpacity="0.55" />
        <circle cx="252" cy="58" r="7" fill="currentColor" fillOpacity="0.75" />
        <path
          d="M36 104h216"
          fill="none"
          stroke="currentColor"
          strokeOpacity="0.12"
          strokeWidth="1.4"
        />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 320 128" className="absolute inset-0 h-full w-full">
      <rect
        x="42"
        y="34"
        width="170"
        height="60"
        rx="12"
        fill="none"
        stroke="currentColor"
        strokeOpacity="0.55"
        strokeWidth="1.7"
      />
      <path
        d="M58 54h90M58 70h64"
        fill="none"
        stroke="currentColor"
        strokeOpacity="0.4"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <circle
        cx="238"
        cy="64"
        r="22"
        fill="none"
        stroke="currentColor"
        strokeOpacity="0.7"
        strokeWidth="1.8"
      />
      <path
        d="M238 52v12l8 5"
        fill="none"
        stroke="currentColor"
        strokeOpacity="0.7"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
