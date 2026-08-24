'use client';

import { useEffect, useRef, type ReactNode } from 'react';
import { gsap } from 'gsap';
import { MOTION_OK } from '@/lib/motion';
import { whenVisible } from '@/lib/when-visible';

/**
 * Scroll-linked depth for a framed image or clip: the media drifts and swells
 * inside a fixed window, so the frame stays put while its contents move.
 *
 * Linear easing on purpose — the tween is scrubbed by the scrollbar, and any
 * curve on top of the reader's own scrolling reads as lag.
 */
export function ParallaxMedia({
  children,
  className = '',
  /** Percent of the frame height the media travels across the whole pass. */
  travel = 14,
  zoom = 1.14,
}: {
  children: ReactNode;
  className?: string;
  travel?: number;
  zoom?: number;
}) {
  const frame = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = frame.current;
    if (!el) return;
    const media = el.firstElementChild;
    if (!media) return;

    const mm = gsap.matchMedia();
    mm.add(MOTION_OK, () =>
      whenVisible(() => {
        const tween = gsap.fromTo(
          media,
          { yPercent: -travel / 2, scale: zoom },
          {
            yPercent: travel / 2,
            scale: 1,
            ease: 'none',
            scrollTrigger: {
              trigger: el,
              start: 'top bottom',
              end: 'bottom top',
              scrub: 0.6,
            },
          },
        );
        return () => {
          tween.scrollTrigger?.kill();
          tween.revert();
        };
      }),
    );

    return () => mm.revert();
  }, [travel, zoom]);

  return (
    <div ref={frame} className={`overflow-hidden ${className}`}>
      {children}
    </div>
  );
}
