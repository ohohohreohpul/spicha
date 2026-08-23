"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { MOTION_OK } from "@/lib/motion";

/**
 * A gold hairline across the top of the document that tracks reading progress.
 * Linear, because it visualises position rather than reacting to a gesture.
 */
export function ScrollProgress() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const bar = ref.current;
    if (!bar) return;

    const mm = gsap.matchMedia();
    mm.add(MOTION_OK, () => {
      const tween = gsap.fromTo(
        bar,
        { scaleX: 0 },
        {
          scaleX: 1,
          ease: "none",
          scrollTrigger: { start: 0, end: "max", scrub: 0.3 },
        },
      );
      return () => {
        tween.scrollTrigger?.kill();
        tween.kill();
      };
    });

    return () => mm.revert();
  }, []);

  return (
    <div
      aria-hidden
      className="pointer-events-none fixed inset-x-0 top-0 z-[70] h-[2px] origin-left scale-x-0 bg-gradient-to-r from-gold/70 via-gold to-aqua/80"
      ref={ref}
    />
  );
}
