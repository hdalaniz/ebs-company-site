import Link from "next/link";
import { ProductStatusBadge } from "@/components/marketing/ProductStatusBadge";
import { futureProducts } from "@/config/products";

/**
 * Compact, secondary listing of longer-term products.
 * Kept visually quieter than the current Insight → Launch → Presence offer.
 */
export function FutureCapabilities() {
  return (
    <section
      aria-labelledby="future-capabilities-heading"
      className="mx-auto w-full max-w-7xl px-5 pb-14 sm:px-8 sm:pb-16 lg:pb-20"
    >
      <div className="rounded-2xl border border-border/80 bg-sky/25 px-5 py-6 sm:px-7 sm:py-7">
        <p className="text-xs font-semibold tracking-[0.18em] text-muted uppercase">
          Later
        </p>
        <h2
          id="future-capabilities-heading"
          className="mt-2 text-lg font-semibold tracking-tight text-ink sm:text-xl"
        >
          Future capabilities
        </h2>
        <p className="mt-2 max-w-2xl text-sm leading-6 text-ink/70">
          Longer-term products that may extend the system. They are not part of
          the current commercial offer.
        </p>

        <ul className="mt-5 divide-y divide-border/80">
          {futureProducts.map((product) => (
            <li key={product.key}>
              <Link
                href={product.href}
                className="flex flex-col gap-2 py-3.5 transition-colors hover:text-teal focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-teal sm:flex-row sm:items-center sm:justify-between sm:gap-4"
              >
                <div className="min-w-0">
                  <p className="text-sm font-semibold text-ink">{product.name}</p>
                  <p className="mt-0.5 text-sm text-ink/65">
                    {product.navDescription}
                  </p>
                </div>
                <ProductStatusBadge
                  status={product.status}
                  label={product.statusLabel}
                />
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
