import Image from "next/image";
import { cn } from "@/lib/cn";

type ScenicPhotoProps = {
  src: string;
  alt: string;
  priority?: boolean;
  objectPosition?: string;
  className?: string;
  /** Overlay treatment for different homepage placements. */
  variant?: "hero" | "band" | "cta";
};

export function ScenicPhoto({
  src,
  alt,
  priority = false,
  objectPosition = "object-center",
  className,
  variant = "hero",
}: ScenicPhotoProps) {
  return (
    <div className={cn("absolute inset-0", className)}>
      <Image
        src={src}
        alt={alt}
        fill
        priority={priority}
        sizes="100vw"
        className={cn("object-cover", objectPosition)}
      />
      {variant === "hero" ? (
        <>
          <div className="photo-scrim-hero" aria-hidden="true" />
          <div className="photo-accent-glow" aria-hidden="true" />
          <div className="photo-fade-bottom" aria-hidden="true" />
        </>
      ) : null}
      {variant === "band" ? (
        <>
          <div className="photo-scrim-band" aria-hidden="true" />
          <div className="photo-fade-edges" aria-hidden="true" />
        </>
      ) : null}
      {variant === "cta" ? (
        <div className="photo-scrim-cta" aria-hidden="true" />
      ) : null}
    </div>
  );
}
