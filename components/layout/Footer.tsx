import Link from "next/link";
import { BrandMark } from "@/components/brand/BrandMark";
import { products } from "@/config/products";

const footerLinkClass =
  "group/footer-link inline-flex items-center gap-1.5 text-sm text-on-dark-muted transition-colors hover:text-teal focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-teal";

export function Footer() {
  return (
    <footer className="relative z-10 mt-auto overflow-hidden bg-navy-deep">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-teal/35 to-transparent"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 h-20 bg-gradient-to-b from-teal/[0.07] to-transparent"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.14]"
      >
        <svg
          viewBox="0 0 1200 320"
          preserveAspectRatio="xMidYMax slice"
          className="absolute inset-x-0 bottom-0 h-48 w-full text-on-dark"
        >
          <path
            d="M0 220 C180 180, 260 250, 420 210 C580 170, 640 240, 820 200 C980 165, 1080 230, 1200 190 L1200 320 L0 320 Z"
            fill="currentColor"
            opacity="0.18"
          />
          <path
            d="M0 250 C200 210, 300 270, 480 235 C660 200, 740 260, 920 230 C1040 210, 1120 250, 1200 230"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            opacity="0.45"
          />
          <path
            d="M0 270 C160 245, 280 285, 460 255 C640 225, 760 280, 940 250 C1060 230, 1140 265, 1200 250"
            fill="none"
            stroke="currentColor"
            strokeWidth="1"
            opacity="0.3"
          />
        </svg>
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-5 pt-16 pb-10 sm:px-8 lg:pt-20 lg:pb-12">
        <div className="grid gap-12 md:grid-cols-[1.45fr_repeat(3,minmax(0,1fr))] md:gap-10">
          <div>
            <Link
              href="/"
              className="inline-flex items-center gap-3 rounded-md focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-teal"
            >
              <BrandMark className="size-9 shrink-0" />
              <span className="min-w-0">
                <span className="block text-base font-semibold tracking-tight text-on-dark">
                  EBS
                </span>
                <span className="block text-xs leading-snug tracking-wide text-teal">
                  Elevate Business Systems
                </span>
              </span>
            </Link>
            <p className="mt-6 text-lg font-semibold tracking-tight text-on-dark">
              Better systems.
              <br />
              Stronger businesses.
            </p>
            <p className="mt-4 max-w-sm text-sm leading-6 text-on-dark-muted">
              Helping service businesses turn missed demand into booked revenue.
            </p>
          </div>

          <div>
            <p className="text-xs font-semibold tracking-[0.18em] text-teal uppercase">
              Products
            </p>
            <ul className="mt-5 space-y-3.5">
              {products.map((product) => (
                <li key={product.key}>
                  <Link href={product.href} className={footerLinkClass}>
                    {product.name}
                    <span
                      aria-hidden="true"
                      className="translate-x-0 opacity-0 transition-[opacity,transform] duration-200 group-hover/footer-link:translate-x-0.5 group-hover/footer-link:opacity-100 motion-reduce:hidden"
                    >
                      →
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-xs font-semibold tracking-[0.18em] text-teal uppercase">
              Company
            </p>
            <ul className="mt-5 space-y-3.5">
              <li>
                <Link href="/about" className={footerLinkClass}>
                  About
                  <span
                    aria-hidden="true"
                    className="translate-x-0 opacity-0 transition-[opacity,transform] duration-200 group-hover/footer-link:translate-x-0.5 group-hover/footer-link:opacity-100 motion-reduce:hidden"
                  >
                    →
                  </span>
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <p className="text-xs font-semibold tracking-[0.18em] text-teal uppercase">
              Legal
            </p>
            <ul className="mt-5 space-y-3.5">
              <li>
                <Link href="/privacy" className={footerLinkClass}>
                  Privacy
                  <span
                    aria-hidden="true"
                    className="translate-x-0 opacity-0 transition-[opacity,transform] duration-200 group-hover/footer-link:translate-x-0.5 group-hover/footer-link:opacity-100 motion-reduce:hidden"
                  >
                    →
                  </span>
                </Link>
              </li>
              <li>
                <Link href="/terms" className={footerLinkClass}>
                  Terms
                  <span
                    aria-hidden="true"
                    className="translate-x-0 opacity-0 transition-[opacity,transform] duration-200 group-hover/footer-link:translate-x-0.5 group-hover/footer-link:opacity-100 motion-reduce:hidden"
                  >
                    →
                  </span>
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-on-dark/10 pt-6">
          <p className="text-xs tracking-wide text-on-dark-muted">
            © {new Date().getFullYear()} Elevate Business Systems. Built for
            local businesses.
          </p>
        </div>
      </div>
    </footer>
  );
}
