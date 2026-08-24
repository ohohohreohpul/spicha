'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { DrawSVGPlugin } from 'gsap/DrawSVGPlugin';
import { MOTION_OK } from '@/lib/motion';
import { whenVisible } from '@/lib/when-visible';

/**
 * A line that draws itself down the rail as the reader moves through the steps.
 *
 * Scrubbed rather than triggered, so it always reflects the true position in
 * the sequence — including on the way back up. Linear, because it reports
 * progress; a curve here would read as the line lagging behind the scroll.
 */
export function ProgressPath({ trackSelector }: { trackSelector: string }) {
  const svg = useRef<SVGSVGElement>(null);

  useEffect(() => {
    const el = svg.current;
    if (!el) return;
    const line = el.querySelector('.draw');
    const track = document.querySelector(trackSelector);
    if (!line || !track) return;

    const mm = gsap.matchMedia();
    mm.add(MOTION_OK, () =>
      whenVisible(() => {
        gsap.registerPlugin(DrawSVGPlugin);

        const tween = gsap.fromTo(
          line,
          { drawSVG: '0%' },
          {
            drawSVG: '100%',
            ease: 'none',
            scrollTrigger: {
              trigger: track,
              start: 'top 65%',
              end: 'bottom 75%',
              scrub: 0.5,
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
  }, [trackSelector]);

  return (
    <svg
      ref={svg}
      aria-hidden
      viewBox="0 0 2 100"
      preserveAspectRatio="none"
      className="h-40 w-[2px] overflow-visible"
    >
      <line x1="1" y1="0" x2="1" y2="100" stroke="var(--color-hairline)" strokeWidth="2" />
      <line
        className="draw"
        x1="1"
        y1="0"
        x2="1"
        y2="100"
        stroke="var(--color-teal)"
        strokeWidth="2"
      />
    </svg>
  );
}
