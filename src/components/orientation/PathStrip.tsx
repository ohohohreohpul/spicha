import { FadeIn, StaggerList, FadeInLi } from '@/components/ui/fade-in';
import type { UiDictionary } from '@/i18n/ui';

/**
 * The prerequisite structure of the programme, made visible as one quiet
 * strip: foundation (no experience) → one-day techniques → running a
 * studio. Words, not numerals — "1/2/3" step counters read as generated
 * boilerplate (client feedback 2026-08).
 */
export function PathStrip({ t }: { t: UiDictionary }) {
  return (
    <div className="mt-16">
      <FadeIn>
        <p className="text-sm font-semibold text-teal">{t.wegweiser.pathKicker}</p>
      </FadeIn>
      <StaggerList className="mt-5 grid gap-10 md:grid-cols-3 md:gap-8">
        {t.wegweiser.path.map((station, index) => (
          <FadeInLi key={station.when}>
            <div className="relative border-t border-border pt-5">
              {index < t.wegweiser.path.length - 1 ? (
                <span aria-hidden className="absolute right-0 top-5 hidden text-teal md:block">
                  →
                </span>
              ) : null}
              <p className="text-xs font-semibold text-muted-foreground">{station.when}</p>
              <h4 className="mt-2 font-serif text-xl leading-tight tracking-tight">
                {station.title}
              </h4>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{station.text}</p>
            </div>
          </FadeInLi>
        ))}
      </StaggerList>
    </div>
  );
}
