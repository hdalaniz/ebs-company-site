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
      className="mx-auto w-full max-w-7xl scroll-mt-6 px-5 pt-4 pb-16 sm:px-8 sm:pt-6 sm:pb-20 lg:pt-8 lg:pb-24"
    >
      <SectionHeading
        headingId="products-heading"
        heading="One platform. Built around business growth."
        supporting="EBS products help service businesses strengthen their presence, capture more demand, and turn more opportunities into booked revenue."
      />

      <div className="mt-10">
        <ProductCard product={presence} featured />
      </div>

      <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {futureProducts.map((product) => (
          <ProductCard key={product.key} product={product} />
        ))}
      </div>
    </section>
  );
}
