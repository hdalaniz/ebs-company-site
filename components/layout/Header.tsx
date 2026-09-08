"use client";

import { useEffect, useId, useState } from "react";
import Link from "next/link";
import { BrandMark } from "@/components/brand/BrandMark";
import { ProductStatusBadge } from "@/components/marketing/ProductStatusBadge";
import { products } from "@/config/products";
import { site } from "@/config/site";
import { cn } from "@/lib/cn";

const navLinkClass =
  "text-sm text-muted transition-colors hover:text-light focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-teal";

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileProductsOpen, setMobileProductsOpen] = useState(true);
  const productsMenuId = useId();
  const mobileMenuId = useId();

  useEffect(() => {
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setMobileOpen(false);
      }
    }

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  function closeMenus() {
    window.setTimeout(() => setMobileOpen(false), 0);
  }

  return (
    <header className="sticky top-0 z-50 border-b border-light/10 bg-background/80 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-5 py-3.5 sm:px-8">
        <Link
          href="/"
          className="flex min-w-0 items-center gap-3 rounded-md focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-teal"
          onClick={closeMenus}
        >
          <BrandMark className="size-8" />
          <span className="truncate text-[0.95rem] font-semibold tracking-tight text-light">
            Elevate Business Systems
          </span>
        </Link>

        <nav aria-label="Primary" className="hidden items-center gap-7 lg:flex">
          <div className="group relative">
            <button
              type="button"
              className={cn(navLinkClass, "inline-flex items-center gap-1.5")}
              aria-haspopup="true"
              aria-controls={productsMenuId}
            >
              Products
              <ChevronIcon className="group-hover:rotate-180 group-focus-within:rotate-180" />
            </button>

            <div
              id={productsMenuId}
              className="absolute top-full left-1/2 z-50 w-[min(28rem,calc(100vw-2.5rem))] -translate-x-1/2 pt-3 opacity-0 pointer-events-none transition-opacity group-hover:pointer-events-auto group-hover:opacity-100 group-focus-within:pointer-events-auto group-focus-within:opacity-100"
            >
              <ul className="ebs-card overflow-hidden rounded-2xl p-2">
                {products.map((product) => (
                  <li key={product.key}>
                    <Link
                      href={product.href}
                      className="block rounded-xl px-3.5 py-3 transition-colors hover:bg-light/5 focus-visible:bg-light/5 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal"
                      onClick={closeMenus}
                    >
                      <span className="flex items-center justify-between gap-3">
                        <span className="text-sm font-semibold text-light">
                          {product.name}
                        </span>
                        <ProductStatusBadge status={product.status} />
                      </span>
                      <span className="mt-1 block text-sm text-muted">
                        {product.navDescription}
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <Link href="/#how-ebs-works" className={navLinkClass} onClick={closeMenus}>
            How EBS Works
          </Link>
          <Link href="/#why-ebs" className={navLinkClass} onClick={closeMenus}>
            Why EBS
          </Link>
          <Link href="/about" className={navLinkClass} onClick={closeMenus}>
            About
          </Link>
        </nav>

        <div className="hidden items-center gap-4 lg:flex">
          <Link href={site.signInHref} className={navLinkClass} onClick={closeMenus}>
            Sign In
          </Link>
          <Link
            href={site.getStartedHref}
            className="hero-cta inline-flex items-center rounded-md bg-teal px-3.5 py-2 text-sm font-semibold text-on-teal transition-colors hover:bg-teal-hover focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal"
            onClick={closeMenus}
          >
            Get Started
          </Link>
        </div>

        <button
          type="button"
          className="inline-flex size-10 items-center justify-center rounded-md border border-light/10 text-light lg:hidden focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal"
          aria-expanded={mobileOpen}
          aria-controls={mobileMenuId}
          onClick={() => setMobileOpen((open) => !open)}
        >
          <span className="sr-only">{mobileOpen ? "Close menu" : "Open menu"}</span>
          <MenuIcon open={mobileOpen} />
        </button>
      </div>

      <div
        id={mobileMenuId}
        hidden={!mobileOpen}
        className="border-t border-light/10 bg-background lg:hidden"
      >
        <nav aria-label="Mobile" className="mx-auto max-w-7xl space-y-1 px-5 py-4 sm:px-8">
          <button
            type="button"
            className="flex w-full items-center justify-between rounded-md py-2.5 text-left text-sm font-medium text-light focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal"
            aria-expanded={mobileProductsOpen}
            onClick={() => setMobileProductsOpen((open) => !open)}
          >
            Products
            <ChevronIcon className={cn(mobileProductsOpen && "rotate-180")} />
          </button>

          {mobileProductsOpen ? (
            <ul className="space-y-1 pb-2 pl-1">
              {products.map((product) => (
                <li key={product.key}>
                  <Link
                    href={product.href}
                    className="block rounded-xl px-3 py-3 hover:bg-light/5"
                    onClick={closeMenus}
                  >
                    <span className="flex items-center justify-between gap-3">
                      <span className="text-sm font-semibold text-light">
                        {product.name}
                      </span>
                      <ProductStatusBadge status={product.status} />
                    </span>
                    <span className="mt-1 block text-sm text-muted">
                      {product.navDescription}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          ) : null}

          <Link
            href="/#how-ebs-works"
            className="block py-2.5 text-sm text-muted"
            onClick={closeMenus}
          >
            How EBS Works
          </Link>
          <Link
            href="/#why-ebs"
            className="block py-2.5 text-sm text-muted"
            onClick={closeMenus}
          >
            Why EBS
          </Link>
          <Link
            href="/about"
            className="block py-2.5 text-sm text-muted"
            onClick={closeMenus}
          >
            About
          </Link>

          <div className="flex flex-col gap-3 border-t border-light/10 pt-4">
            <Link
              href={site.signInHref}
              className="text-sm text-muted"
              onClick={closeMenus}
            >
              Sign In
            </Link>
            <Link
              href={site.getStartedHref}
              className="hero-cta inline-flex items-center justify-center rounded-md bg-teal px-4 py-2.5 text-sm font-semibold text-on-teal"
              onClick={closeMenus}
            >
              Get Started
            </Link>
          </div>
        </nav>
      </div>
    </header>
  );
}

function ChevronIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 16 16"
      className={cn("size-3.5 transition-transform", className)}
      aria-hidden="true"
    >
      <path
        d="M4 6.25 8 10.25 12 6.25"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function MenuIcon({ open }: { open: boolean }) {
  if (open) {
    return (
      <svg viewBox="0 0 20 20" className="size-5" aria-hidden="true">
        <path
          d="M5 5 15 15M15 5 5 15"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinecap="round"
        />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 20 20" className="size-5" aria-hidden="true">
      <path
        d="M4 6h12M4 10h12M4 14h12"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
    </svg>
  );
}
