'use client';

import { useEffect, useRef, type ElementType, type ReactNode } from 'react';
import { gsap } from 'gsap';
import { DUR, MOTION_OK } from '@/lib/motion';
import { whenVisible } from '@/lib/when-visible';

type Edge = 'bottom' | 'left' | 'right';

const FROM: Record<Edge, string> = {
  bottom: 'inset(0% 0% 100% 0%)',
  left: 'inset(0% 100% 0% 0%)',
  right: 'inset(0% 0% 0% 100%)',
};

/**
 * Block reveal by wiping the mask open, with a short travel behind it.
 *
 * Replaces the old opacity fade. A wipe has a direction and an edge, so it
 * tells the reader where the block came from; a fade only tells them that
 * JavaScript ran. The from-state is set in JS, so without it the content is
 * simply visible.
 */
export function Reveal({
  children,
  as: Tag = 'div',
  className = '',
  delay = 0,
  from = 'bottom',
  distance = 26,
}: {
  children: ReactNode;
  as?: ElementType;
  className?: string;
  /** Seconds. */
  delay?: number;
  from?: Edge;
  distance?: number;
}) {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const mm = gsap.matchMedia();
    mm.add(MOTION_OK, () =>
      whenVisible(() => {
        const offset =
          from === 'bottom' ? { y: distance } : { x: from === 'left' ? -distance : distance };

        const tween = gsap.fromTo(
          el,
          { clipPath: FROM[from], ...offset },
          {
            clipPath: 'inset(0% 0% 0% 0%)',
            x: 0,
            y: 0,
            duration: DUR.cinematic,
            ease: 'outExpo',
            delay,
            scrollTrigger: { trigger: el, start: 'top 90%', once: true },
          },
        );

        return () => {
          tween.scrollTrigger?.kill();
          tween.kill();
        };
      }),
    );

    return () => mm.revert();
  }, [delay, from, distance]);

  return (
    <Tag ref={ref} className={className}>
      {children}
    </Tag>
  );
}
