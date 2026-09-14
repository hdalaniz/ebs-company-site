"use client";

import {
  Children,
  cloneElement,
  isValidElement,
  useState,
  type FocusEvent,
  type KeyboardEvent,
  type ReactElement,
  type ReactNode,
} from "react";
import { cn } from "@/lib/cn";

type FocusCardsProps = {
  children: ReactNode;
  className?: string;
};

type FocusCardProps = {
  children: ReactNode;
  className?: string;
  index?: number;
  hovered?: number | null;
  setHovered?: (index: number | null) => void;
};

/**
 * Aceternity Focus Cards pattern — restrained for product cards.
 * Emphasizes the active card and softens neighbors without heavy blur.
 */
export function FocusCards({ children, className }: FocusCardsProps) {
  const [hovered, setHovered] = useState<number | null>(null);
  const items = Children.toArray(children);

  return (
    <div className={cn(className)}>
      {items.map((child, index) => {
        if (!isValidElement(child)) {
          return child;
        }

        return cloneElement(child as ReactElement<FocusCardProps>, {
          index,
          hovered,
          setHovered,
        });
      })}
    </div>
  );
}

export function FocusCard({
  children,
  className,
  index = 0,
  hovered = null,
  setHovered,
}: FocusCardProps) {
  const isDimmed = hovered !== null && hovered !== index;
  const isActive = hovered === index;

  const activate = () => setHovered?.(index);
  const clear = () => setHovered?.(null);

  return (
    <div
      className={cn(
        "h-full transition-[opacity,transform] duration-300 ease-out motion-reduce:transition-none",
        isActive &&
          "z-[1] motion-safe:-translate-y-0.5 motion-safe:scale-[1.015]",
        isDimmed && "opacity-55 motion-safe:scale-[0.985]",
        className,
      )}
      onMouseEnter={activate}
      onMouseLeave={clear}
      onFocusCapture={(event: FocusEvent<HTMLDivElement>) => {
        if (event.currentTarget.contains(event.target as Node)) {
          activate();
        }
      }}
      onBlurCapture={(event: FocusEvent<HTMLDivElement>) => {
        if (!event.currentTarget.contains(event.relatedTarget as Node)) {
          clear();
        }
      }}
      onKeyDown={(event: KeyboardEvent<HTMLDivElement>) => {
        if (event.key === "Escape") {
          clear();
        }
      }}
    >
      {children}
    </div>
  );
}
