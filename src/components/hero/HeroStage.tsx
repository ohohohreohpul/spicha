"use client";

import { useEffect, useRef, type ReactNode } from "react";
import { gsap } from "gsap";
import { SplitText } from "gsap/SplitText";
import { MOTION_OK } from "@/lib/motion";
import { whenVisible } from "@/lib/when-visible";

const q = (root: HTMLElement, name: string) =>
  root.querySelector<HTMLElement>(`[data-hero="${name}"]`);
const qq = (root: HTMLElement, name: string) =>
  gsap.utils.toArray<HTMLElement>(
    root.querySelectorAll(`[data-hero="${name}"]`),
  );

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
  className = "",
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
        const film = q(el, "film");
        const veil = q(el, "veil");
        const copy = q(el, "copy");
        const panel = q(el, "panel");
        const headline = q(el, "headline");
        const prose = qq(el, "prose");

        const splits: SplitText[] = [];
        const lines = (target: HTMLElement | null) => {
          if (!target) return [];
          const split = SplitText.create(target, {
            type: "lines",
            mask: "lines",
          });
          splits.push(split);
          return split.lines;
        };

        const headlineLines = lines(headline);
        const proseLines = prose.flatMap((node) => lines(node));

        const tl = gsap.timeline({ defaults: { ease: "outExpo" } });

        if (film)
          tl.from(film, { scale: 1.18, duration: 2.8, ease: "outQuint" }, 0);
        tl.from(
          qq(el, "rule"),
          { scaleX: 0, duration: 1.1, stagger: 0.1 },
          0.1,
        );
        tl.from(
          lines(q(el, "kicker")),
          { yPercent: 130, duration: 0.85 },
          0.16,
        );
        if (headlineLines.length)
          tl.from(
            headlineLines,
            { yPercent: 118, duration: 1.35, stagger: 0.085 },
            0.24,
          );
        if (proseLines.length)
          tl.from(
            proseLines,
            { yPercent: 105, duration: 1.0, stagger: 0.045 },
            0.66,
          );

        // Buttons wipe open from their leading edge rather than popping in.
        tl.from(
          qq(el, "cta"),
          {
            clipPath: "inset(0% 100% 0% 0%)",
            y: 14,
            duration: 1.0,
            stagger: 0.09,
          },
          0.88,
        );
        if (panel)
          tl.from(
            panel,
            { clipPath: "inset(0% 0% 100% 0%)", y: 34, duration: 1.25 },
            0.7,
          );
        tl.from(lines(q(el, "foot")), { yPercent: 110, duration: 0.9 }, 1.05);

        // Exit: three travel rates plus a closing veil.
        const scrub = {
          trigger: el,
          start: "top top",
          end: "bottom top",
          scrub: 0.4,
        };
        const exits = [
          film &&
            gsap.to(film, {
              yPercent: 13,
              scale: 1.1,
              ease: "none",
              scrollTrigger: scrub,
            }),
          copy &&
            gsap.to(copy, {
              yPercent: -17,
              ease: "none",
              scrollTrigger: scrub,
            }),
          panel &&
            gsap.to(panel, {
              yPercent: -7,
              ease: "none",
              scrollTrigger: scrub,
            }),
          veil &&
            gsap.fromTo(
              veil,
              { opacity: 0 },
              { opacity: 0.62, ease: "none", scrollTrigger: scrub },
            ),
        ].filter(Boolean) as gsap.core.Tween[];

        return () => {
          tl.kill();
          for (const tween of exits) {
            tween.scrollTrigger?.kill();
            tween.kill();
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
