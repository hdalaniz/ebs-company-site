"use client";

import { motion, useReducedMotion } from "motion/react";
import { useIsClient } from "@/lib/use-is-client";

type SpotlightNewProps = {
  gradientFirst?: string;
  gradientSecond?: string;
  gradientThird?: string;
  translateY?: number;
  width?: number;
  height?: number;
  smallWidth?: number;
  duration?: number;
  xOffset?: number;
};

const ebsGradientFirst =
  "radial-gradient(68.54% 68.72% at 55.02% 31.46%, color-mix(in srgb, var(--teal) 14%, transparent) 0, color-mix(in srgb, var(--brand-slate-blue) 6%, transparent) 50%, transparent 80%)";
const ebsGradientSecond =
  "radial-gradient(50% 50% at 50% 50%, color-mix(in srgb, var(--teal) 10%, transparent) 0, color-mix(in srgb, var(--brand-sky) 8%, transparent) 80%, transparent 100%)";
const ebsGradientThird =
  "radial-gradient(50% 50% at 50% 50%, color-mix(in srgb, var(--brand-slate-blue) 8%, transparent) 0, transparent 80%)";

/**
 * Aceternity Spotlight New — adapted to EBS tokens.
 * Drift is intentionally slow and low-contrast so the scenic photo stays primary.
 */
export function SpotlightNew({
  gradientFirst = ebsGradientFirst,
  gradientSecond = ebsGradientSecond,
  gradientThird = ebsGradientThird,
  translateY = -350,
  width = 560,
  height = 1380,
  smallWidth = 240,
  duration = 14,
  xOffset = 48,
}: SpotlightNewProps = {}) {
  const reduceMotion = useReducedMotion();
  const isClient = useIsClient();
  const drift = isClient && !reduceMotion;

  return (
    <div
      className="pointer-events-none absolute inset-0 h-full w-full overflow-hidden opacity-100"
      aria-hidden="true"
    >
      <motion.div
        animate={drift ? { x: [0, xOffset, 0] } : { x: 0 }}
        transition={
          drift
            ? {
                duration,
                repeat: Infinity,
                repeatType: "reverse",
                ease: "easeInOut",
              }
            : { duration: 0 }
        }
        className="pointer-events-none absolute top-0 left-0 z-[1] h-full w-full"
      >
        <div
          style={{
            transform: `translateY(${translateY}px) rotate(-45deg)`,
            background: gradientFirst,
            width: `${width}px`,
            height: `${height}px`,
          }}
          className="absolute top-0 left-0"
        />
        <div
          style={{
            transform: "rotate(-45deg) translate(5%, -50%)",
            background: gradientSecond,
            width: `${smallWidth}px`,
            height: `${height}px`,
          }}
          className="absolute top-0 left-0 origin-top-left"
        />
        <div
          style={{
            transform: "rotate(-45deg) translate(-180%, -70%)",
            background: gradientThird,
            width: `${smallWidth}px`,
            height: `${height}px`,
          }}
          className="absolute top-0 left-0 origin-top-left"
        />
      </motion.div>

      <motion.div
        animate={drift ? { x: [0, -xOffset, 0] } : { x: 0 }}
        transition={
          drift
            ? {
                duration,
                repeat: Infinity,
                repeatType: "reverse",
                ease: "easeInOut",
              }
            : { duration: 0 }
        }
        className="pointer-events-none absolute top-0 right-0 z-[1] h-full w-full"
      >
        <div
          style={{
            transform: `translateY(${translateY}px) rotate(45deg)`,
            background: gradientFirst,
            width: `${width}px`,
            height: `${height}px`,
          }}
          className="absolute top-0 right-0"
        />
        <div
          style={{
            transform: "rotate(45deg) translate(-5%, -50%)",
            background: gradientSecond,
            width: `${smallWidth}px`,
            height: `${height}px`,
          }}
          className="absolute top-0 right-0 origin-top-right"
        />
        <div
          style={{
            transform: "rotate(45deg) translate(180%, -70%)",
            background: gradientThird,
            width: `${smallWidth}px`,
            height: `${height}px`,
          }}
          className="absolute top-0 right-0 origin-top-right"
        />
      </motion.div>
    </div>
  );
}
