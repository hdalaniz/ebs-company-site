import Image from "next/image";
import { brand } from "@/config/brand";

export function GrowthMountain({ className = "" }: { className?: string }) {
  return (
    <div className={`relative isolate block aspect-[16/11] w-full ${className}`.trim()}>
      <div className="hero-mountain-glow pointer-events-none absolute inset-[-18%] rounded-full" />
      <Image
        src={brand.assets.mountain}
        alt={`${brand.companyName} mountain graphic representing elevation, insight, and growth`}
        fill
        sizes="(max-width: 640px) 90vw, (max-width: 1024px) 56vw, 42rem"
        className="hero-mountain-mask relative object-contain opacity-88"
        priority
      />
    </div>
  );
}
