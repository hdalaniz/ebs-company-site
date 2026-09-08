import Link from "next/link";
import { BrandMark } from "@/components/brand/BrandMark";
import { products } from "@/config/products";
import { site } from "@/config/site";

const footerLinkClass =
  "text-sm text-muted transition-colors hover:text-light focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-teal";

export function Footer() {
  return (
    <footer className="relative z-10 mt-auto border-t border-light/10 bg-background">
      <div className="mx-auto grid max-w-7xl gap-12 px-5 py-14 sm:px-8 md:grid-cols-[1.3fr_repeat(3,minmax(0,1fr))] md:gap-10 lg:py-16">
        <div>
          <Link
            href="/"
            className="inline-flex items-center gap-3 rounded-md focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-teal"
          >
            <BrandMark className="size-8 shrink-0" />
            <span className="min-w-0">
              <span className="block text-[0.95rem] font-semibold tracking-tight text-light">
                EBS
              </span>
              <span className="block text-[0.7rem] leading-snug tracking-wide text-teal">
                Elevate Business Systems
              </span>
            </span>
          </Link>
          <p className="mt-5 max-w-sm text-sm leading-6 text-muted">
            {site.description}
          </p>
        </div>

        <div>
          <p className="text-[0.7rem] font-semibold tracking-[0.18em] text-teal uppercase">
            Products
          </p>
          <ul className="mt-4 space-y-3">
            {products.map((product) => (
              <li key={product.key}>
                <Link href={product.href} className={footerLinkClass}>
                  {product.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="text-[0.7rem] font-semibold tracking-[0.18em] text-teal uppercase">
            Company
          </p>
          <ul className="mt-4 space-y-3">
            <li>
              <Link href="/about" className={footerLinkClass}>
                About
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <p className="text-[0.7rem] font-semibold tracking-[0.18em] text-teal uppercase">
            Legal
          </p>
          <ul className="mt-4 space-y-3">
            <li>
              <Link href="/privacy" className={footerLinkClass}>
                Privacy
              </Link>
            </li>
            <li>
              <Link href="/terms" className={footerLinkClass}>
                Terms
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
