"use client";

import Link from "next/link";
import type { ReactNode } from "react";
import {
  type AttributionAnalyticsInput,
  type CtaEventName,
  trackCta,
  trackGetStartedClicked,
} from "@/lib/analytics";
import { cn } from "@/lib/cn";

type ButtonLinkProps = {
  href: string;
  children: ReactNode;
  variant?: "primary" | "secondary" | "ghost";
  className?: string;
  trackEvent?: CtaEventName;
  /** Safe product/source context for Get Started clicks. */
  trackContext?: AttributionAnalyticsInput;
};

function isExternal(href: string) {
  return href.startsWith("http://") || href.startsWith("https://");
}

const base =
  "inline-flex min-h-11 items-center justify-center rounded-lg text-sm font-semibold focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal";

export const buttonLinkVariants = {
  primary: cn(
    base,
    "hero-cta bg-teal px-5 py-3 text-on-teal transition-colors hover:bg-teal-hover",
  ),
  secondary: cn(
    base,
    "border border-navy/20 bg-white px-5 py-3 text-ink transition-colors hover:border-navy/35 hover:bg-sky/70",
  ),
  ghost: cn(
    base,
    "group gap-1.5 px-1 py-2 text-ink transition-colors hover:text-teal focus-visible:outline-offset-4",
  ),
} as const;

export function ButtonLink({
  href,
  children,
  variant = "primary",
  className,
  trackEvent,
  trackContext,
}: ButtonLinkProps) {
  const classes = cn(buttonLinkVariants[variant], className);
  const content =
    variant === "ghost" ? (
      <>
        {children}
        <CtaArrow />
      </>
    ) : (
      children
    );

  function handleClick() {
    if (trackEvent === "cta_get_started_click") {
      trackGetStartedClicked(trackContext);
      return;
    }
    if (trackEvent) {
      trackCta(trackEvent);
    }
  }

  if (isExternal(href)) {
    return (
      <a
        href={href}
        className={classes}
        rel="noopener noreferrer"
        onClick={handleClick}
      >
        {content}
      </a>
    );
  }

  return (
    <Link href={href} className={classes} onClick={handleClick}>
      {content}
    </Link>
  );
}

function CtaArrow() {
  return (
    <svg
      viewBox="0 0 16 16"
      className="cta-arrow size-3.5 shrink-0 motion-safe:transition-transform motion-safe:duration-200 motion-safe:group-hover:translate-x-0.5"
      aria-hidden="true"
    >
      <path
        d="M3.5 8h9M8.5 4.5 12.5 8 8.5 11.5"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
