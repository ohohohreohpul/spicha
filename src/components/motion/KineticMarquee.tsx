"use client";

import { useEffect, useRef, type ReactNode } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { MOTION_OK } from "@/lib/motion";

const BASE_RATE = 0.045;
const VELOCITY_DAMPING = 900;

/**
 * A band that drifts on its own and reacts to the reader's scrolling: faster
 * with a hard scroll, and it reverses when the page reverses.
 *
 * The track is rendered twice and wrapped at -50%, so the seam never arrives.
 */
export function KineticMarquee({
  children,
  className = "",
  reverse = false,
}: {
  children: ReactNode;
  className?: string;
  reverse?: boolean;
}) {
  const track = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = track.current;
    if (!el) return;

    const mm = gsap.matchMedia();
    mm.add(MOTION_OK, () => {
      const direction = reverse ? 1 : -1;
      const wrap = gsap.utils.wrap(-50, 0);
      let offset = reverse ? -50 : 0;
      let boost = 1;

      const tick = (_time: number, delta: number) => {
        offset += direction * BASE_RATE * boost * (delta / 16.67);
        gsap.set(el, { xPercent: wrap(offset) });
        boost = gsap.utils.interpolate(boost, 1, 0.045);
      };

      gsap.ticker.add(tick);

      // Scroll velocity feeds the band's speed and can flip its direction.
      const trigger = ScrollTrigger.create({
        start: 0,
        end: "max",
        onUpdate: (self) => {
          const velocity = self.getVelocity();
          boost = gsap.utils.clamp(
            -6,
            6,
            1 + Math.abs(velocity) / VELOCITY_DAMPING,
          );
          if (velocity < 0) boost *= -1;
        },
      });

      return () => {
        gsap.ticker.remove(tick);
        trigger.kill();
      };
    });

    return () => mm.revert();
  }, [reverse]);

  return (
    <div className={`relative overflow-hidden ${className}`}>
      <div ref={track} className="flex w-max will-change-transform">
        {children}
        {children}
      </div>
    </div>
  );
}
