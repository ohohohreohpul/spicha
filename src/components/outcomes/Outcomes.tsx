import { StaggerList, FadeInLi, FadeIn } from '@/components/ui/fade-in';
import type { UiDictionary } from '@/i18n/ui';

/** What a skill becomes afterwards — a plain spoken list, no reveal show. */
export function Outcomes({ t }: { t: UiDictionary }) {
  return (
    <div>
      <StaggerList className="grid gap-x-8 gap-y-10 sm:grid-cols-2">
        {t.outcomes.items.map((path) => (
          <FadeInLi key={path.title}>
            <div className="border-t border-border pt-5">
              <h3 className="font-serif text-lg leading-snug tracking-tight">{path.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{path.text}</p>
            </div>
          </FadeInLi>
        ))}
      </StaggerList>
      <FadeIn>
        <p className="mt-10 max-w-[72ch] text-xs leading-relaxed text-muted-foreground">
          {t.outcomes.disclaimer}
        </p>
      </FadeIn>
    </div>
  );
}
