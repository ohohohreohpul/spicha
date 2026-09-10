'use client';

import { useState } from 'react';
import { FadeIn } from '@/components/ui/fade-in';
import type { UiDictionary } from '@/i18n/ui';

/** A visitor-paced look at the teaching method, with one idea in focus. */
export function LearningSequence({ t }: { t: UiDictionary }) {
  const [active, setActive] = useState(0);
  const step = t.learn.items[active];

  return (
    <FadeIn>
      <div className="grid gap-8 lg:grid-cols-[1fr_1.2fr] lg:gap-16">
        <div role="group" aria-label={t.sections.learn.kicker} className="border-t border-border">
          {t.learn.items.map((item, index) => (
            <button
              key={item.title}
              type="button"
              aria-pressed={index === active}
              aria-controls="learning-detail"
              onClick={() => setActive(index)}
              className={`flex min-h-16 w-full items-center gap-5 border-b border-border px-3 py-4 text-left text-sm transition-colors duration-200 ${index === active ? 'bg-muted font-semibold text-teal' : 'text-muted-foreground hover:bg-muted/60 hover:text-ink'}`}
            >
              <span className="numeric text-xs">0{index + 1}</span>
              {item.title}
              <span aria-hidden className="ml-auto">{index === active ? '↗' : '→'}</span>
            </button>
          ))}
        </div>
        <div id="learning-detail" aria-live="polite" aria-atomic="true" className="flex min-h-80 flex-col justify-center rounded-lg bg-muted p-8 sm:p-12">
          <p className="numeric text-sm text-teal">0{active + 1} {t.learn.of} 0{t.learn.items.length}</p>
          <h3 className="mt-6 max-w-[20ch] font-serif text-3xl leading-tight tracking-tight sm:text-4xl">{step.title}</h3>
          <p className="mt-5 max-w-[45ch] text-base leading-relaxed text-muted-foreground">{step.text}</p>
        </div>
      </div>
      <p className="mt-8 text-sm text-muted-foreground">{t.learn.note}</p>
    </FadeIn>
  );
}
