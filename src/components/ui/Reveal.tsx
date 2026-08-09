'use client';

import { useEffect, useRef, useState, type ElementType, type ReactNode } from 'react';

const FAILSAFE_MS = 2500;

type RevealProps = {
  children: ReactNode;
  /** Stagger delay in ms. Keep cascades under ~400ms total. */
  delay?: number;
  as?: ElementType;
  className?: string;
};

/**
 * Scroll reveal built on IntersectionObserver — never a scroll listener.
 * Purpose: spatial continuity as sections enter. Fires once, then disconnects.
 */
export function Reveal({ children, delay = 0, as: Tag = 'div', className = '' }: RevealProps) {
  const ref = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node || typeof IntersectionObserver === 'undefined') {
      setVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        setVisible(true);
        observer.disconnect();
      },
      { rootMargin: '0px 0px -12% 0px', threshold: 0.1 },
    );

    observer.observe(node);

    // Failsafe: content must never stay hidden because an observer went quiet
    // (background tab, hidden pane, odd viewport). Reveal regardless.
    const failsafe = window.setTimeout(() => {
      setVisible(true);
      observer.disconnect();
    }, FAILSAFE_MS);

    return () => {
      window.clearTimeout(failsafe);
      observer.disconnect();
    };
  }, []);

  return (
    <Tag
      ref={ref}
      className={`reveal ${className}`}
      data-visible={visible}
      style={{ '--reveal-delay': `${delay}ms` } as React.CSSProperties}
    >
      {children}
    </Tag>
  );
}
