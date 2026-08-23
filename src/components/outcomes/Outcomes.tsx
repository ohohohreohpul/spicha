import { Reveal } from '@/components/motion/Reveal';
import type { UiDictionary } from '@/i18n/ui';

export function Outcomes({ t }: { t: UiDictionary }) {
  return (
    <div className="mt-[var(--space-block)]">
      <ul className="grid border-t border-ink/15 md:grid-cols-2">
        {t.outcomes.items.map((path, index) => {
          const isLead = index === 0;
          // Second column of each row carries the vertical hairline.
          const isRightColumn = !isLead && index % 2 === 0;

          return (
            <li
              key={path.title}
              className={`border-b border-hairline ${isLead ? 'md:col-span-2' : ''} ${
                isRightColumn ? 'md:border-l md:border-l-hairline md:pl-10' : ''
              } ${!isLead && !isRightColumn ? 'md:pr-10' : ''}`}
            >
              <Reveal delay={Math.min(index * 0.07, 0.28)} className="h-full">
                <div className="flex h-full flex-col justify-between gap-6 py-[var(--space-row-lg)]">
                  <h3
                    className={`font-display leading-tight ${
                      isLead
                        ? 'max-w-[20ch] text-[clamp(1.75rem,1.2rem+2vw,3rem)]'
                        : 'max-w-[26ch] text-[clamp(1.35rem,1.1rem+0.9vw,1.75rem)]'
                    }`}
                  >
                    {path.title}
                  </h3>
                  <p className="max-w-[52ch] leading-relaxed text-ink-muted">{path.text}</p>
                </div>
              </Reveal>
            </li>
          );
        })}
      </ul>

      <p className="mt-8 max-w-[70ch] border-t border-hairline pt-5 text-xs leading-relaxed text-ink-muted">
        {t.outcomes.disclaimer}
      </p>
    </div>
  );
}
