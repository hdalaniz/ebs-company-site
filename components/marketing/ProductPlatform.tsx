"use client";

import { ProductCard } from "@/components/marketing/ProductCard";
import { SectionHeading } from "@/components/marketing/SectionHeading";
import { FocusCard, FocusCards } from "@/components/ui/focus-cards";
import { currentProducts } from "@/config/products";

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
    </section>
  );
}
