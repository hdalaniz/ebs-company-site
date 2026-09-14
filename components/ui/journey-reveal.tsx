"use client";

import {
  Children,
  cloneElement,
  isValidElement,
  useState,
  type ReactElement,
  type ReactNode,
} from "react";
import { motion, useReducedMotion } from "motion/react";
import { cn } from "@/lib/cn";
import { useIsClient } from "@/lib/use-is-client";

type JourneyRevealProps = {
  children: ReactNode;
  className?: string;
};

type JourneyStepProps = {
  children: ReactNode;
  className?: string;
  index?: number;
  active?: boolean;
  onActivate?: () => void;
  motionEnabled?: boolean;
};

/**
 * Lightweight scroll-aware step highlighting inspired by Aceternity sticky scroll,
 * without scroll-jacking or nested scroll containers.
 */
export function JourneyReveal({ children, className }: JourneyRevealProps) {
  const reduceMotion = useReducedMotion();
  const isClient = useIsClient();
  const [activeIndex, setActiveIndex] = useState(0);
  const items = Children.toArray(children);
  const motionEnabled = isClient && !reduceMotion;

  return (
    <ol className={cn(className)}>
      {items.map((child, index) => {
        if (!isValidElement(child)) {
          return child;
        }

        return cloneElement(child as ReactElement<JourneyStepProps>, {
          index,
          active: motionEnabled ? activeIndex === index : true,
          motionEnabled,
          onActivate: () => setActiveIndex(index),
        });
      })}
    </ol>
  );
}

export function JourneyStep({
  children,
  className,
  index = 0,
  active = false,
  onActivate,
  motionEnabled = false,
}: JourneyStepProps) {
  return (
    <motion.li
      data-active={active ? "true" : "false"}
      className={cn(
        "relative transition-[opacity,transform] duration-500 ease-out",
        motionEnabled && (active ? "opacity-100" : "opacity-50"),
        className,
      )}
      initial={false}
      whileInView={motionEnabled ? { y: 0 } : undefined}
      viewport={{ amount: 0.55, margin: "-8% 0px -35% 0px" }}
      onViewportEnter={() => {
        if (motionEnabled) {
          onActivate?.();
        }
      }}
      transition={{ duration: 0.45, ease: "easeOut", delay: index * 0.02 }}
    >
      {children}
    </motion.li>
  );
}
