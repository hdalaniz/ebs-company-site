import Image from "next/image";
import { brand } from "@/config/brand";
import { cn } from "@/lib/cn";

type BrandMarkProps = {
  className?: string;
  priority?: boolean;
};

export function BrandMark({
  className = "size-8",
  priority = false,
}: BrandMarkProps) {
  return (
    <Image
      src={brand.assets.logoMark}
      alt={brand.companyName}
      width={32}
      height={32}
      className={cn("brand-mark-shadow shrink-0 rounded-lg", className)}
      priority={priority}
    />
  );
}
