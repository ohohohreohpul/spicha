'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { MOTION_OK } from '@/lib/motion';
import { whenVisible } from '@/lib/when-visible';

/**
 * A hairline that draws itself from one end when it scrolls into view.
 * Used wherever the layout would otherwise just present a static border.
 */
export function RuleDraw({
  className = '',
  delay = 0,
  origin = 'left',
}: {
  className?: string;
  delay?: number;
  origin?: 'left' | 'right';
}) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const mm = gsap.matchMedia();
    mm.add(MOTION_OK, () =>
      whenVisible(() => {
        const tween = gsap.fromTo(
          el,
          { scaleX: 0 },
          {
            scaleX: 1,
            duration: 1.1,
            ease: 'outExpo',
            delay,
            scrollTrigger: { trigger: el, start: 'top 94%', once: true },
          },
        );
        return () => {
          tween.scrollTrigger?.kill();
          tween.kill();
        };
      }),
    );

    return () => mm.revert();
  }, [delay]);

  return (
    <div
      aria-hidden
      ref={ref}
      className={`h-px bg-hairline ${origin === 'left' ? 'origin-left' : 'origin-right'} ${className}`}
    />
  );
}
