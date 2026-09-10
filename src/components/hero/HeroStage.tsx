'use client';

import { useEffect, useRef, type ReactNode } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { SplitText } from 'gsap/SplitText';
import { MOTION_OK } from '@/lib/motion';
import { whenVisible } from '@/lib/when-visible';

gsap.registerPlugin(ScrollTrigger, SplitText);

const q = (root: HTMLElement, name: string) =>
  root.querySelector<HTMLElement>(`[data-hero="${name}"]`);
const qq = (root: HTMLElement, name: string) =>
  gsap.utils.toArray<HTMLElement>(root.querySelectorAll(`[data-hero="${name}"]`));

/**
 * The opening sequence, and the hero's behaviour as it leaves.
 *
 * Two jobs, deliberately separate:
 *
 *  1. An entrance timeline. Nothing fades in — every element is occluded by a
 *     mask or wiped open, so the frame assembles itself instead of developing
 *     like a photograph. The film settles from a slow push-in underneath it.
 *  2. A scrubbed exit. Film, copy and panel travel at three different rates
 *     while a veil closes over the whole thing, so the hero reads as depth
 *     rather than as one flat layer sliding away.
 */
export function HeroStage({
  children,
  className = '',
}: {
  children: ReactNode;
  className?: string;
}) {
  const root = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = root.current;
    if (!el) return;

    const mm = gsap.matchMedia();

    mm.add(MOTION_OK, () =>
      whenVisible(() => {
        const film = q(el, 'film');
        const veil = q(el, 'veil');
        const copy = q(el, 'copy');
        const panel = q(el, 'panel');
        const headline = q(el, 'headline');
        const prose = qq(el, 'prose');

        const splits: SplitText[] = [];
        const lines = (target: HTMLElement | null) => {
          if (!target) return [];
          const split = SplitText.create(target, {
            type: 'lines',
            mask: 'lines',
          });
          splits.push(split);
          return split.lines;
        };

        const headlineLines = lines(headline);
        const proseLines = prose.flatMap((node) => lines(node));

        // Every step is a fromTo with an explicit destination. A bare `from`
        // reads whatever the element currently sits at as its end value, and
        // in development React mounts effects twice: the first timeline writes
        // the start state, cleanup tears it down, and the second timeline then
        // treats that leftover offset as the place to land. That is how the
        // secondary CTA ended up parked 14px below the primary one for good.
        const tl = gsap.timeline({ defaults: { ease: 'outExpo' } });

        if (film)
          tl.fromTo(film, { scale: 1.18 }, { scale: 1, duration: 2.8, ease: 'outQuint' }, 0);
        tl.fromTo(qq(el, 'rule'), { scaleX: 0 }, { scaleX: 1, duration: 1.1, stagger: 0.1 }, 0.1);
        tl.fromTo(lines(q(el, 'kicker')), { yPercent: 130 }, { yPercent: 0, duration: 0.85 }, 0.16);
        if (headlineLines.length)
          tl.fromTo(
            headlineLines,
            { yPercent: 118 },
            { yPercent: 0, duration: 1.35, stagger: 0.085 },
            0.24,
          );
        if (proseLines.length)
          tl.fromTo(
            proseLines,
            { yPercent: 105 },
            { yPercent: 0, duration: 1.0, stagger: 0.045 },
            0.66,
          );

        // Buttons wipe open from their leading edge rather than popping in.
        tl.fromTo(
          qq(el, 'cta'),
          { clipPath: 'inset(0% 100% 0% 0%)', y: 14 },
          { clipPath: 'inset(0% 0% 0% 0%)', y: 0, duration: 1.0, stagger: 0.09 },
          0.88,
        );
        if (panel)
          tl.fromTo(
            panel,
            { clipPath: 'inset(0% 0% 100% 0%)', y: 34 },
            { clipPath: 'inset(0% 0% 0% 0%)', y: 0, duration: 1.25 },
            0.7,
          );
        tl.fromTo(lines(q(el, 'foot')), { yPercent: 110 }, { yPercent: 0, duration: 0.9 }, 1.05);

        // Exit: three travel rates plus a closing veil.
        const scrub = {
          trigger: el,
          start: 'top top',
          end: 'bottom top',
          scrub: 0.4,
        };
        const exits = [
          film &&
            gsap.to(film, {
              yPercent: 13,
              scale: 1.1,
              ease: 'none',
              scrollTrigger: scrub,
            }),
          copy &&
            gsap.to(copy, {
              yPercent: -17,
              ease: 'none',
              scrollTrigger: scrub,
            }),
          panel &&
            gsap.to(panel, {
              yPercent: -7,
              ease: 'none',
              scrollTrigger: scrub,
            }),
          veil &&
            gsap.fromTo(
              veil,
              { opacity: 0 },
              { opacity: 0.62, ease: 'none', scrollTrigger: scrub },
            ),
        ].filter(Boolean) as gsap.core.Tween[];

        return () => {
          // revert(), not kill(): kill() abandons whatever inline transform the
          // tween had written, leaving the element wherever it stopped.
          tl.revert();
          for (const tween of exits) {
            tween.scrollTrigger?.kill();
            tween.revert();
          }
          for (const split of splits) split.revert();
        };
      }),
    );

    return () => mm.revert();
  }, []);

  return (
    <section ref={root} className={className}>
      {children}
    </section>
  );
}
