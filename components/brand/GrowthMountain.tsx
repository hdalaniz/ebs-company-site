import Image from "next/image";
import { brand } from "@/config/brand";
import { cn } from "@/lib/cn";

export function GrowthMountain({ className = "" }: { className?: string }) {
  return (
    <div
      className={cn(
        "relative isolate block aspect-[16/11] w-full overflow-hidden rounded-[1.75rem] bg-navy",
        className,
      )}
    >
      <div className="hero-mountain-glow pointer-events-none absolute inset-[-18%] rounded-full" />
      <Image
        src={brand.assets.mountain}
        alt={`${brand.companyName} mountain graphic representing elevation, insight, and growth`}
        fill
        sizes="(max-width: 640px) 90vw, (max-width: 1024px) 56vw, 42rem"
        className="hero-mountain-mask relative object-contain opacity-90"
        priority
      />
    </div>
  );
}
