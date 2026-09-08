import type { ProductStatus } from "@/config/products";
import { cn } from "@/lib/cn";

const styles: Record<ProductStatus, string> = {
  available: "border-teal/30 bg-teal/10 text-teal",
  "coming-soon": "border-teal-secondary/30 bg-teal-secondary/10 text-teal-secondary",
  future: "border-light/15 bg-light/5 text-muted",
};

const defaultLabels: Record<ProductStatus, string> = {
  available: "Available",
  "coming-soon": "Coming Soon",
  future: "Future",
};

type ProductStatusBadgeProps = {
  status: ProductStatus;
  label?: string;
  className?: string;
};

export function ProductStatusBadge({
  status,
  label,
  className,
}: ProductStatusBadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex rounded-full border px-2.5 py-1 text-[0.68rem] font-semibold tracking-[0.16em] uppercase",
        styles[status],
        className,
      )}
    >
      {label ?? defaultLabels[status]}
    </span>
  );
}
