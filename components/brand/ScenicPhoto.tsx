import Image from "next/image";
import { cn } from "@/lib/cn";

type ScenicPhotoProps = {
  src: string;
  alt: string;
  priority?: boolean;
  objectPosition?: string;
  className?: string;
};

export function ScenicPhoto({
  src,
  alt,
  priority = false,
  objectPosition = "object-center",
  className,
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
      <div className="photo-scrim-hero" aria-hidden="true" />
      <div className="photo-accent-glow" aria-hidden="true" />
      <div className="photo-fade-bottom" aria-hidden="true" />
    </div>
  );
}
