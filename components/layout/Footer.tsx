import Link from "next/link";
import { BrandMark } from "@/components/brand/BrandMark";
import { products } from "@/config/products";
import { site } from "@/config/site";

const footerLinkClass =
  "text-sm text-on-dark-muted transition-colors hover:text-on-dark focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-teal";

export function Footer() {
  return (
    <footer className="relative z-10 mt-auto bg-navy-deep">
      <div className="mx-auto grid max-w-7xl gap-12 px-5 py-16 sm:px-8 md:grid-cols-[1.35fr_repeat(3,minmax(0,1fr))] md:gap-10 lg:py-20">
        <div>
          <Link
            href="/"
            className="inline-flex items-center gap-3 rounded-md focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-teal"
          >
            <BrandMark className="size-8 shrink-0" />
            <span className="min-w-0">
              <span className="block text-[0.95rem] font-semibold tracking-tight text-on-dark">
                EBS
              </span>
              <span className="block text-xs leading-snug tracking-wide text-teal">
                Elevate Business Systems
              </span>
            </span>
          </Link>
          <p className="mt-5 max-w-sm text-sm leading-6 text-on-dark-muted">
            {site.description}
          </p>
        </div>

        <div>
          <p className="text-xs font-semibold tracking-[0.18em] text-teal uppercase">
            Products
          </p>
          <ul className="mt-4 space-y-3.5">
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
          <p className="text-xs font-semibold tracking-[0.18em] text-teal uppercase">
            Company
          </p>
          <ul className="mt-4 space-y-3.5">
            <li>
              <Link href="/about" className={footerLinkClass}>
                About
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <p className="text-xs font-semibold tracking-[0.18em] text-teal uppercase">
            Legal
          </p>
          <ul className="mt-4 space-y-3.5">
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
