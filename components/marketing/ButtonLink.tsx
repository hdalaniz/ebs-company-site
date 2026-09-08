import Link from "next/link";
import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

type ButtonLinkProps = {
  href: string;
  children: ReactNode;
  variant?: "primary" | "secondary" | "ghost";
  className?: string;
};

function isExternal(href: string) {
  return href.startsWith("http://") || href.startsWith("https://");
}

export const buttonLinkVariants = {
  primary:
    "hero-cta inline-flex items-center justify-center rounded-md bg-teal px-5 py-3 text-sm font-semibold text-on-teal transition-colors hover:bg-teal-hover focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal",
  secondary:
    "inline-flex items-center justify-center rounded-md border border-light/15 bg-light/5 px-5 py-3 text-sm font-semibold text-light transition-colors hover:border-light/25 hover:bg-light/10 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal",
  ghost:
    "inline-flex items-center justify-center text-sm font-medium text-muted transition-colors hover:text-light focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-teal",
} as const;

export function ButtonLink({
  href,
  children,
  variant = "primary",
  className,
}: ButtonLinkProps) {
  const classes = cn(buttonLinkVariants[variant], className);

  if (isExternal(href)) {
    return (
      <a href={href} className={classes} rel="noreferrer">
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={classes}>
      {children}
    </Link>
  );
}
