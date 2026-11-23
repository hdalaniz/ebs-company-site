"use client";

import { ProductCard } from "@/components/marketing/ProductCard";
import { SectionHeading } from "@/components/marketing/SectionHeading";
import { FocusCard, FocusCards } from "@/components/ui/focus-cards";
import { currentProducts, futureProducts } from "@/config/products";

export function ProductPlatform() {
  return (
    <section
      id="products"
      aria-labelledby="products-heading"
      className="mx-auto w-full max-w-7xl scroll-mt-24 px-5 pt-4 pb-16 sm:px-8 sm:pt-6 sm:pb-20 lg:pt-8 lg:pb-24"
    >
      <SectionHeading
        headingId="products-heading"
        heading="Insight. Launch. Presence."
        supporting="Three products. One job: help home-service businesses turn missed demand into booked revenue."
      />

      <FocusCards className="mt-10 grid gap-5 lg:grid-cols-3">
        {currentProducts.map((product) => (
          <FocusCard key={product.key}>
            <ProductCard product={product} />
          </FocusCard>
        ))}
      </FocusCards>

      <div className="mt-12">
        <p className="text-xs font-semibold tracking-[0.18em] text-teal uppercase">
          Future capabilities
        </p>
        <p className="mt-2 max-w-2xl text-sm leading-6 text-ink/70">
          Longer-term products that extend the system. Clearly labeled and not
          part of the current offer.
        </p>
        <FocusCards className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {futureProducts.map((product) => (
            <FocusCard key={product.key}>
              <ProductCard product={product} />
            </FocusCard>
          ))}
        </FocusCards>
      </div>
    </section>
  );
}
