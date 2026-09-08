import { ProductCard } from "@/components/marketing/ProductCard";
import { SectionHeading } from "@/components/marketing/SectionHeading";
import { products } from "@/config/products";

export function ProductPlatform() {
  const presence = products[0];
  const futureProducts = products.slice(1);

  if (!presence) {
    return null;
  }

  return (
    <section
      id="products"
      aria-labelledby="products-heading"
      className="mx-auto w-full max-w-7xl scroll-mt-6 px-5 pt-2 pb-16 sm:px-8 sm:pt-4 sm:pb-20 lg:pt-6 lg:pb-24"
    >
      <SectionHeading
        headingId="products-heading"
        heading="One platform. Built around business growth."
        supporting="EBS products are designed to help service businesses improve each stage of the customer and revenue journey."
      />

      <div className="mt-8">
        <ProductCard product={presence} featured />
      </div>

      <div className="mt-5 grid gap-4 sm:grid-cols-2 md:gap-5 lg:grid-cols-3">
        {futureProducts.map((product) => (
          <ProductCard key={product.key} product={product} />
        ))}
      </div>
    </section>
  );
}
