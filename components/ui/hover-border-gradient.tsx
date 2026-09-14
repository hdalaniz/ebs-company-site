"use client";

import {
  useEffect,
  useState,
  type ComponentPropsWithoutRef,
  type ElementType,
  type FocusEvent,
  type MouseEvent,
  type ReactNode,
} from "react";
import { motion, useReducedMotion } from "motion/react";
import { cn } from "@/lib/cn";
import { useIsClient } from "@/lib/use-is-client";

type Direction = "TOP" | "LEFT" | "BOTTOM" | "RIGHT";

type HoverBorderGradientOwnProps = {
  as?: ElementType;
  children?: ReactNode;
  containerClassName?: string;
  className?: string;
  duration?: number;
  clockwise?: boolean;
};

type HoverBorderGradientProps = HoverBorderGradientOwnProps &
  Omit<ComponentPropsWithoutRef<"div">, keyof HoverBorderGradientOwnProps> &
  Record<string, unknown>;

const movingMap: Record<Direction, string> = {
  TOP: "radial-gradient(20.7% 50% at 50% 0%, color-mix(in srgb, var(--teal) 55%, white) 0%, transparent 100%)",
  LEFT: "radial-gradient(16.6% 43.1% at 0% 50%, color-mix(in srgb, var(--teal) 45%, white) 0%, transparent 100%)",
  BOTTOM:
    "radial-gradient(20.7% 50% at 50% 100%, color-mix(in srgb, var(--brand-slate-blue) 40%, white) 0%, transparent 100%)",
  RIGHT:
    "radial-gradient(16.2% 41.2% at 100% 50%, color-mix(in srgb, var(--teal) 50%, white) 0%, transparent 100%)",
};

const highlight =
  "radial-gradient(75% 180% at 50% 50%, color-mix(in srgb, var(--teal) 72%, white) 0%, transparent 100%)";

/**
 * Aceternity Hover Border Gradient — adapted for light EBS cards.
 * Border animation runs only while hovered or keyboard-focused.
 */
export function HoverBorderGradient({
  children,
  containerClassName,
  className,
  as: Tag = "div",
  duration = 1.4,
  clockwise = true,
  ...props
}: HoverBorderGradientProps) {
  const reduceMotion = useReducedMotion();
  const isClient = useIsClient();
  const [active, setActive] = useState(false);
  const [direction, setDirection] = useState<Direction>("TOP");
  const animateBorder = isClient && !reduceMotion;

  useEffect(() => {
    if (!active || !animateBorder) {
      return;
    }

    const interval = setInterval(() => {
      setDirection((current) => {
        const directions: Direction[] = ["TOP", "LEFT", "BOTTOM", "RIGHT"];
        const currentIndex = directions.indexOf(current);
        const nextIndex = clockwise
          ? (currentIndex - 1 + directions.length) % directions.length
          : (currentIndex + 1) % directions.length;
        return directions[nextIndex] ?? "TOP";
      });
    }, duration * 1000);

    return () => clearInterval(interval);
  }, [active, animateBorder, clockwise, duration]);

  const {
    onMouseEnter,
    onMouseLeave,
    onFocus,
    onBlur,
    ...rest
  } = props as {
    onMouseEnter?: (event: MouseEvent<HTMLElement>) => void;
    onMouseLeave?: (event: MouseEvent<HTMLElement>) => void;
    onFocus?: (event: FocusEvent<HTMLElement>) => void;
    onBlur?: (event: FocusEvent<HTMLElement>) => void;
  } & Record<string, unknown>;

  return (
    <Tag
      onMouseEnter={(event: MouseEvent<HTMLElement>) => {
        setActive(true);
        onMouseEnter?.(event);
      }}
      onMouseLeave={(event: MouseEvent<HTMLElement>) => {
        setActive(false);
        onMouseLeave?.(event);
      }}
      onFocus={(event: FocusEvent<HTMLElement>) => {
        setActive(true);
        onFocus?.(event);
      }}
      onBlur={(event: FocusEvent<HTMLElement>) => {
        setActive(false);
        onBlur?.(event);
      }}
      className={cn(
        "relative flex h-full w-full overflow-visible rounded-[1.25rem] p-px transition-[transform,box-shadow] duration-300 ease-out",
        "motion-safe:hover:-translate-y-0.5 motion-safe:focus-visible:-translate-y-0.5",
        "focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-teal",
        active && "shadow-[0_22px_44px_-28px_rgba(14,36,56,0.38)]",
        containerClassName,
      )}
      {...rest}
    >
      <motion.div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-0 overflow-hidden rounded-[inherit]"
        style={{ filter: animateBorder ? "blur(1.5px)" : undefined }}
        initial={false}
        animate={
          animateBorder
            ? {
                background: active
                  ? [movingMap[direction], highlight]
                  : "linear-gradient(var(--border), var(--border))",
                opacity: 1,
              }
            : {
                background: active
                  ? "linear-gradient(135deg, color-mix(in srgb, var(--teal) 70%, transparent), color-mix(in srgb, var(--brand-slate-blue) 35%, transparent))"
                  : "linear-gradient(var(--border), var(--border))",
                opacity: active ? 1 : 0.4,
              }
        }
        transition={{
          ease: "linear",
          duration: animateBorder && active ? duration : 0.2,
        }}
      />

      <div
        className={cn(
          "relative z-10 h-full w-full rounded-[calc(1.25rem-1px)] bg-surface",
          className,
        )}
      >
        {children}
      </div>
    </Tag>
  );
}
