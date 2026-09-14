"use client";

import { useEffect, useId, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { BrandMark } from "@/components/brand/BrandMark";
import { buttonLinkVariants } from "@/components/marketing/ButtonLink";
import { ProductStatusBadge } from "@/components/marketing/ProductStatusBadge";
import { products } from "@/config/products";
import { site } from "@/config/site";
import { cn } from "@/lib/cn";

const navLinkClass =
  "text-sm font-medium text-muted transition-colors hover:text-ink focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-teal";

export function Header() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileProductsOpen, setMobileProductsOpen] = useState(true);
  const [productsOpen, setProductsOpen] = useState(false);
  const productsMenuId = useId();
  const mobileMenuId = useId();
  const mobileProductsId = useId();
  const productsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setMobileOpen(false);
        setProductsOpen(false);
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

  useEffect(() => {
    if (!productsOpen) {
      return;
    }

    function onPointerDown(event: PointerEvent) {
      if (
        productsRef.current &&
        event.target instanceof Node &&
        !productsRef.current.contains(event.target)
      ) {
        setProductsOpen(false);
      }
    }

    document.addEventListener("pointerdown", onPointerDown);
    return () => document.removeEventListener("pointerdown", onPointerDown);
  }, [productsOpen]);

  function closeMenus() {
    setProductsOpen(false);
    window.setTimeout(() => setMobileOpen(false), 0);
  }

  return (
    <header className="relative z-20 border-b border-navy/10 bg-white/90 shadow-[0_8px_24px_-18px_rgba(14,36,56,0.35)] backdrop-blur-xl">
      <div className="mx-auto grid max-w-7xl grid-cols-[1fr_auto] items-center gap-4 px-5 py-3.5 sm:px-8 lg:grid-cols-[1fr_auto_1fr]">
        <Link
          href="/"
          className="flex min-w-0 items-center gap-3 rounded-md focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-teal"
          onClick={closeMenus}
        >
          <BrandMark className="size-8 shrink-0" priority />
          <div className="min-w-0">
            <p className="text-[0.95rem] font-semibold tracking-tight text-ink">
              EBS
            </p>
            <p className="hidden truncate text-xs leading-snug tracking-wide text-teal sm:block">
              Elevate Business Systems
            </p>
          </div>
        </Link>

        <nav
          aria-label="Primary"
          className="hidden items-center gap-7 lg:col-start-2 lg:flex"
        >
          <div
            ref={productsRef}
            className="relative"
            onBlur={(event) => {
              const next = event.relatedTarget;
              if (!(next instanceof Node) || !event.currentTarget.contains(next)) {
                setProductsOpen(false);
              }
            }}
          >
            <button
              type="button"
              className={cn(navLinkClass, "inline-flex items-center gap-1.5")}
              aria-expanded={productsOpen}
              aria-haspopup="true"
              aria-controls={productsMenuId}
              onClick={() => setProductsOpen((open) => !open)}
            >
              Products
              <ChevronIcon className={cn(productsOpen && "rotate-180")} />
            </button>

            <div
              id={productsMenuId}
              hidden={!productsOpen}
              className={cn(
                "absolute top-full left-1/2 z-50 w-[min(30rem,calc(100vw-2.5rem))] -translate-x-1/2 pt-3",
                productsOpen ? "pointer-events-auto" : "pointer-events-none",
              )}
            >
              <ul className="ebs-card overflow-hidden rounded-2xl p-2">
                {products.map((product) => (
                  <li key={product.key}>
                    <Link
                      href={product.href}
                      aria-current={pathname === product.href ? "page" : undefined}
                      className={cn(
                        "block rounded-xl px-3.5 py-3 transition-colors hover:bg-sky/80 focus-visible:bg-sky/80 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal",
                        pathname === product.href &&
                          "bg-teal/10 ring-1 ring-inset ring-teal/25",
                      )}
                      onClick={closeMenus}
                    >
                      <span className="flex items-center justify-between gap-3">
                        <span className="text-sm font-semibold text-ink">
                          {product.name}
                        </span>
                        <ProductStatusBadge
                          status={product.status}
                          label={product.statusLabel}
                        />
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
          <Link
            href="/about"
            className={cn(navLinkClass, pathname === "/about" && "text-ink")}
            aria-current={pathname === "/about" ? "page" : undefined}
            onClick={closeMenus}
          >
            About
          </Link>
        </nav>

        <div className="hidden items-center justify-self-end gap-4 lg:col-start-3 lg:flex">
          <Link href={site.signInHref} className={navLinkClass} onClick={closeMenus}>
            Sign In
          </Link>
          <Link
            href={site.getStartedHref}
            className={cn(buttonLinkVariants.primary, "px-4")}
            onClick={closeMenus}
          >
            Get Started
          </Link>
        </div>

        <div className="flex items-center justify-self-end gap-3 lg:hidden">
          <Link
            href={site.getStartedHref}
            className={cn(buttonLinkVariants.primary, "px-3.5")}
            onClick={closeMenus}
          >
            Get Started
          </Link>
          <button
            type="button"
            className="inline-flex size-11 items-center justify-center rounded-lg border border-navy/15 text-ink focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal"
            aria-expanded={mobileOpen}
            aria-controls={mobileMenuId}
            onClick={() => setMobileOpen((open) => !open)}
          >
            <span className="sr-only">{mobileOpen ? "Close menu" : "Open menu"}</span>
            <MenuIcon open={mobileOpen} />
          </button>
        </div>
      </div>

      <div
        id={mobileMenuId}
        hidden={!mobileOpen}
        className="border-t border-navy/10 bg-white lg:hidden"
      >
        <nav aria-label="Mobile" className="mx-auto max-w-7xl space-y-1 px-5 py-4 sm:px-8">
          <button
            type="button"
            className="flex min-h-11 w-full items-center justify-between rounded-md py-2.5 text-left text-base font-medium text-ink focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal"
            aria-expanded={mobileProductsOpen}
            aria-controls={mobileProductsId}
            onClick={() => setMobileProductsOpen((open) => !open)}
          >
            Products
            <ChevronIcon className={cn(mobileProductsOpen && "rotate-180")} />
          </button>

          <ul
            id={mobileProductsId}
            hidden={!mobileProductsOpen}
            className="space-y-1 pb-2 pl-1"
          >
              {products.map((product) => (
                <li key={product.key}>
                  <Link
                    href={product.href}
                    aria-current={pathname === product.href ? "page" : undefined}
                    className={cn(
                      "block rounded-xl px-3 py-3 hover:bg-sky/80 focus-visible:bg-sky/80 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal",
                      pathname === product.href &&
                        "bg-teal/10 ring-1 ring-inset ring-teal/25",
                    )}
                    onClick={closeMenus}
                  >
                    <span className="flex items-center justify-between gap-3">
                      <span className="text-base font-semibold text-ink">
                        {product.name}
                      </span>
                      <ProductStatusBadge
                        status={product.status}
                        label={product.statusLabel}
                      />
                    </span>
                    <span className="mt-1 block text-sm text-muted">
                      {product.navDescription}
                    </span>
                  </Link>
                </li>
              ))}
          </ul>

          <Link
            href="/#how-ebs-works"
            className="block min-h-11 rounded-md py-3 text-base text-muted focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal"
            onClick={closeMenus}
          >
            How EBS Works
          </Link>
          <Link
            href="/#why-ebs"
            className="block min-h-11 rounded-md py-3 text-base text-muted focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal"
            onClick={closeMenus}
          >
            Why EBS
          </Link>
          <Link
            href="/about"
            className="block min-h-11 rounded-md py-3 text-base text-muted focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal"
            aria-current={pathname === "/about" ? "page" : undefined}
            onClick={closeMenus}
          >
            About
          </Link>
          <Link
            href={site.signInHref}
            className="block min-h-11 rounded-md py-3 text-base text-muted focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal"
            aria-current={pathname === site.signInHref ? "page" : undefined}
            onClick={closeMenus}
          >
            Sign In
          </Link>
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
