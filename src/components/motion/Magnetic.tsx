"use client";

import { useEffect, useRef, type ReactNode } from "react";
import { gsap } from "gsap";
import { MOTION_OK } from "@/lib/motion";

/**
 * The child drifts toward the pointer while it is over the element, then
 * springs back on exit.
 *
 * Driven by gsap.quickTo, never React state: a pointermove handler that calls
 * setState re-renders on every mouse frame and collapses on mid-range phones.
 * Hover-capable pointers only, so a touch tap does not leave it displaced.
 */
export function Magnetic({
  children,
  strength = 0.32,
  className = "",
}: {
  children: ReactNode;
  /** Fraction of the pointer's offset from centre that the child follows. */
  strength?: number;
  className?: string;
}) {
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const mm = gsap.matchMedia();
    mm.add(`${MOTION_OK} and (hover: hover) and (pointer: fine)`, () => {
      const target = el.firstElementChild ?? el;
      const xTo = gsap.quickTo(target, "x", {
        duration: 0.45,
        ease: "outQuart",
      });
      const yTo = gsap.quickTo(target, "y", {
        duration: 0.45,
        ease: "outQuart",
      });

      const onMove = (event: PointerEvent) => {
        const box = el.getBoundingClientRect();
        xTo((event.clientX - (box.left + box.width / 2)) * strength);
        yTo((event.clientY - (box.top + box.height / 2)) * strength);
      };

      const onLeave = () => {
        xTo(0);
        yTo(0);
      };

      el.addEventListener("pointermove", onMove);
      el.addEventListener("pointerleave", onLeave);

      return () => {
        el.removeEventListener("pointermove", onMove);
        el.removeEventListener("pointerleave", onLeave);
        gsap.set(target, { x: 0, y: 0 });
      };
    });

    return () => mm.revert();
  }, [strength]);

  return (
    <span ref={ref} className={`inline-block ${className}`}>
      {children}
    </span>
  );
}
