'use client';

import { useEffect, useRef, type ReactNode } from 'react';
import { gsap } from 'gsap';
import { MOTION_OK } from '@/lib/motion';

/**
 * Pointer-following drift for the contents of an interactive element.
 *
 * Two rules are baked in, because breaking either produces a visible defect:
 *
 *  1. **Never move the hit area.** This listens on its own box but translates a
 *     descendant. Translating the button itself pulls it out of alignment with
 *     its neighbours — a pill in a row visibly floats above the one beside it —
 *     and lets the element slide out from under the cursor, which flickers the
 *     hover on and off. Pass `target` to pick the descendant that moves.
 *  2. **Clamp the travel.** The drift is a fraction of the pointer's distance
 *     from centre, which is unbounded on a wide element; without a ceiling the
 *     label slides out through its own padding.
 *
 * Driven by gsap.quickTo, never React state: a pointermove handler that calls
 * setState re-renders on every mouse frame and collapses on mid-range phones.
 * Hover-capable pointers only, so a touch tap never leaves anything displaced.
 */
export function Magnetic({
  children,
  target,
  strength = 0.24,
  max = 9,
  className = '',
}: {
  children: ReactNode;
  /** Selector for the descendant that moves. Defaults to the first child. */
  target?: string;
  /** Fraction of the pointer's offset from centre that the target follows. */
  strength?: number;
  /** Ceiling on the travel, in px, on each axis. */
  max?: number;
  className?: string;
}) {
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const mm = gsap.matchMedia();
    mm.add(`${MOTION_OK} and (hover: hover) and (pointer: fine)`, () => {
      const moved = target ? el.querySelector(target) : el.firstElementChild;
      if (!moved) return;

      const clamp = gsap.utils.clamp(-max, max);
      const xTo = gsap.quickTo(moved, 'x', { duration: 0.45, ease: 'outQuart' });
      const yTo = gsap.quickTo(moved, 'y', { duration: 0.45, ease: 'outQuart' });

      const onMove = (event: PointerEvent) => {
        const box = el.getBoundingClientRect();
        xTo(clamp((event.clientX - (box.left + box.width / 2)) * strength));
        yTo(clamp((event.clientY - (box.top + box.height / 2)) * strength));
      };

      const onLeave = () => {
        xTo(0);
        yTo(0);
      };

      el.addEventListener('pointermove', onMove);
      el.addEventListener('pointerleave', onLeave);

      return () => {
        el.removeEventListener('pointermove', onMove);
        el.removeEventListener('pointerleave', onLeave);
        gsap.set(moved, { x: 0, y: 0 });
      };
    });

    return () => mm.revert();
  }, [target, strength, max]);

  return (
    <span ref={ref} className={`inline-flex ${className}`}>
      {children}
    </span>
  );
}
