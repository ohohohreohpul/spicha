'use client';

import { useEffect, useRef, type ReactNode } from 'react';
import { gsap } from 'gsap';
import { MOTION_OK } from '@/lib/motion';

/**
 * Publishes the pointer position onto the element as --mx / --my so CSS can
 * light the border and surface under the cursor.
 *
 * quickSetter writes straight to the style object without a React render, and
 * the values are only ever read by a paint-time gradient.
 */
export function Spotlight({
  children,
  className = '',
  as: Tag = 'div',
}: {
  children: ReactNode;
  className?: string;
  as?: 'div' | 'article' | 'li';
}) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const mm = gsap.matchMedia();
    mm.add(`${MOTION_OK} and (hover: hover) and (pointer: fine)`, () => {
      const setX = gsap.quickSetter(el, '--mx', 'px');
      const setY = gsap.quickSetter(el, '--my', 'px');

      const onMove = (event: PointerEvent) => {
        const box = el.getBoundingClientRect();
        setX(event.clientX - box.left);
        setY(event.clientY - box.top);
      };

      el.addEventListener('pointermove', onMove);
      return () => el.removeEventListener('pointermove', onMove);
    });

    return () => mm.revert();
  }, []);

  return (
    <Tag ref={ref as never} className={`spotlight ${className}`}>
      {children}
    </Tag>
  );
}
