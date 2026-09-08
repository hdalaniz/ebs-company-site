import Image from "next/image";
import { brand } from "@/config/brand";

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
      className={`brand-mark-shadow shrink-0 rounded-lg ${className}`.trim()}
      priority={priority}
    />
  );
}
