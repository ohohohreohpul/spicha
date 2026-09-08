import { StaggerList, FadeInLi, FadeIn } from '@/components/ui/fade-in';
import type { UiDictionary } from '@/i18n/ui';

/**
 * The course day, as six quiet steps. (The pinned scroll-spine is gone —
 * client feedback 2026-09: the page shouted. The sequence reads fine as a
 * plain list; the words carry it.)
 */
export function LearningSequence({ t }: { t: UiDictionary }) {
  return (
    <div>
      <StaggerList className="grid gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
        {t.learn.items.map((step) => (
          <FadeInLi key={step.title}>
            <div className="border-t border-border pt-5">
              <h3 className="font-serif text-lg leading-snug tracking-tight">{step.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{step.text}</p>
            </div>
          </FadeInLi>
        ))}
      </StaggerList>
      <FadeIn>
        <p className="mt-10 text-sm text-muted-foreground">{t.learn.note}</p>
      </FadeIn>
    </div>
  );
}
