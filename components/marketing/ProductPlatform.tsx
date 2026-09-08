import { ProductCard } from "@/components/marketing/ProductCard";
import { SectionHeading } from "@/components/marketing/SectionHeading";
import { products } from "@/config/products";

export function ProductPlatform() {
  return (
    <section
      id="products"
      aria-labelledby="products-heading"
      className="mx-auto w-full max-w-7xl scroll-mt-24 px-5 py-10 sm:px-8 sm:py-14 lg:py-16"
    >
      <SectionHeading
        headingId="products-heading"
        heading="One platform. Built around business growth."
        supporting="EBS products help service businesses improve different stages of the customer and revenue journey—from the first digital impression to the next action that turns demand into booked work."
      />

      <div className="mt-8 grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
        {products.map((product) => (
          <ProductCard key={product.key} product={product} />
        ))}
      </div>
    </section>
  );
}
