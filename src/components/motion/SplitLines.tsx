'use client';

import { useEffect, useRef, type ElementType, type ReactNode } from 'react';
import { gsap } from 'gsap';
import { SplitText } from 'gsap/SplitText';
import { DUR, MOTION_OK } from '@/lib/motion';
import { whenVisible } from '@/lib/when-visible';

/**
 * Headline choreography: each line rides up from behind its own mask.
 *
 * This is the house reveal — not a fade. The type is never transparent, it is
 * occluded, so it reads as something moving into place behind the page rather
 * than materialising out of nothing.
 */
export function SplitLines({
  children,
  as: Tag = 'div',
  className = '',
  delay = 0,
  stagger = 0.08,
  duration = DUR.cinematic,
  start = 'top 88%',
}: {
  children: ReactNode;
  as?: ElementType;
  className?: string;
  delay?: number;
  stagger?: number;
  duration?: number;
  start?: string;
}) {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const mm = gsap.matchMedia();
    mm.add(MOTION_OK, () =>
      whenVisible(() => {
        // autoSplit re-splits on resize and on webfont swap; onSplit rebuilds the
        // tween against the new line boxes so nothing is left mid-transform.
        const split = SplitText.create(el, {
          type: 'lines',
          mask: 'lines',
          autoSplit: true,
          onSplit: (self) =>
            gsap.from(self.lines, {
              yPercent: 118,
              duration,
              ease: 'outExpo',
              stagger,
              delay,
              scrollTrigger: { trigger: el, start, once: true },
            }),
        });

        return () => split.revert();
      }),
    );

    return () => mm.revert();
  }, [delay, stagger, duration, start]);

  return (
    <Tag ref={ref} className={className}>
      {children}
    </Tag>
  );
}
