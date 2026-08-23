'use client';

import { useEffect, useRef, useState } from 'react';
import { ProgressPath } from '@/components/learn/ProgressPath';
import type { UiDictionary } from '@/i18n/ui';

/**
 * Illustrative sequence. No scroll hijacking: the page scrolls normally and
 * a sticky rail simply tracks which step is in view.
 */
export function LearningSequence({ t }: { t: UiDictionary }) {
  const [active, setActive] = useState(0);
  const stepRefs = useRef<(HTMLLIElement | null)[]>([]);
  const steps = t.learn.items;

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          const index = Number((entry.target as HTMLElement).dataset.index);
          if (!Number.isNaN(index)) setActive(index);
        });
      },
      { rootMargin: '-45% 0px -45% 0px', threshold: 0 },
    );

    stepRefs.current.forEach((node) => node && observer.observe(node));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="mt-[var(--space-block)] grid gap-12 lg:grid-cols-[16rem_minmax(0,1fr)] lg:gap-20">
      <div className="lg:sticky lg:top-32 lg:h-fit lg:self-start">
        <p className="numeric font-display text-[clamp(3.5rem,2rem+6vw,7rem)] leading-none text-teal">
          {String(active + 1).padStart(2, '0')}
        </p>
        <p className="numeric mt-1 text-sm text-ink-muted">
          {t.learn.of} {steps.length} {t.learn.steps}
        </p>

        {/* Vertical path, drawn by the scrollbar rather than stepped. */}
        <div className="mt-6 hidden lg:block">
          <ProgressPath trackSelector="[data-learn-track]" />
        </div>

        <p className="mt-6 max-w-[30ch] text-sm leading-relaxed text-ink-muted">{t.learn.note}</p>
      </div>

      <ol data-learn-track className="border-t border-ink/15">
        {steps.map((step, index) => {
          const isActive = index === active;
          return (
            <li
              key={step.title}
              data-index={index}
              ref={(node) => {
                stepRefs.current[index] = node;
              }}
              className="border-b border-hairline py-[var(--space-row-lg)]"
            >
              <div className="flex gap-6">
                <span
                  aria-hidden
                  className="mt-3 h-px shrink-0 transition-[width,background-color] duration-[var(--dur-4)] ease-[var(--ease-out-quart)]"
                  style={{
                    width: isActive ? '3.5rem' : '1.5rem',
                    backgroundColor: isActive ? 'var(--color-teal)' : 'var(--color-hairline)',
                  }}
                />
                <div>
                  <h3
                    className="font-display text-[clamp(1.5rem,1.1rem+1.4vw,2.25rem)] leading-tight transition-colors duration-[var(--dur-4)]"
                    style={{
                      color: isActive ? 'var(--color-ink)' : 'var(--color-ink-muted)',
                    }}
                  >
                    {step.title}
                  </h3>
                  <p className="mt-3 max-w-[54ch] leading-relaxed text-ink-muted">{step.text}</p>
                </div>
              </div>
            </li>
          );
        })}
      </ol>
    </div>
  );
}
