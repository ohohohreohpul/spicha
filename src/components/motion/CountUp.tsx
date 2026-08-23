'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { MOTION_OK } from '@/lib/motion';
import { whenVisible } from '@/lib/when-visible';

/**
 * A number that counts to its value when it scrolls into view.
 *
 * The final value is rendered server-side and only replaced once the tween
 * starts, so crawlers and readers without JS see the real figure.
 */
export function CountUp({
  value,
  locale,
  suffix = '',
  className = '',
}: {
  value: number;
  locale: string;
  suffix?: string;
  className?: string;
}) {
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const mm = gsap.matchMedia();
    mm.add(MOTION_OK, () =>
      whenVisible(() => {
        const format = new Intl.NumberFormat(locale);
        const counter = { n: 0 };

        const tween = gsap.to(counter, {
          n: value,
          duration: 1.6,
          ease: 'outQuart',
          snap: { n: 1 },
          onUpdate: () => {
            el.textContent = `${format.format(counter.n)}${suffix}`;
          },
          scrollTrigger: { trigger: el, start: 'top 92%', once: true },
        });

        return () => {
          tween.scrollTrigger?.kill();
          tween.kill();
        };
      }),
    );

    return () => mm.revert();
  }, [value, locale, suffix]);

  return (
    <span ref={ref} className={`numeric ${className}`}>
      {new Intl.NumberFormat(locale).format(value)}
      {suffix}
    </span>
  );
}
