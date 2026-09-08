import { CourseGuide } from '@/components/catalog/CourseGuide';
import type { NextDates } from '@/components/catalog/CourseGrid';
import { PersonaPanel } from '@/components/orientation/PersonaPanel';
import { PathStrip } from '@/components/orientation/PathStrip';
import { FadeIn, StaggerList } from '@/components/ui/fade-in';
import { Button } from '@/components/ui/hero-08-utils/button';
import { PROGRAMS } from '@/data/programs';
import { SECTION_IDS, type Locale } from '@/i18n/config';
import { fill, type UiDictionary } from '@/i18n/ui';

/**
 * The orientation section — the page's answer to "I have no idea what to
 * study" (client feedback 2026-09). Three layers, in order:
 *
 * 1. Persona panels: three life situations, each ending in a named first
 *    course with price, duration and a direct inquiry link.
 * 2. The learning path: foundation → techniques → studio, so the
 *    prerequisite structure is visible instead of hidden in a FAQ.
 * 3. The three-question guide for anyone still undecided, closing with a
 *    personal-recommendation band that routes the remainder to the form.
 *
 * Visual language since the 2026-09 rebuild: calm cards, quiet labels.
 */
export function Wegweiser({
  nextDates,
  t,
  locale,
}: {
  nextDates: NextDates;
  t: UiDictionary;
  locale: Locale;
}) {
  return (
    <div>
      <FadeIn>
        <p className="text-sm font-semibold text-teal">{t.wegweiser.personaKicker}</p>
      </FadeIn>
      <StaggerList className="mt-6 grid gap-5 lg:grid-cols-3">
        {t.wegweiser.personas.map((persona) => (
          <PersonaPanel key={persona.id} persona={persona} t={t} locale={locale} />
        ))}
      </StaggerList>

      <PathStrip t={t} />

      <div className="mt-16 sm:mt-20">
        <FadeIn>
          <p className="text-sm font-semibold text-teal">{t.wegweiser.guideTitle}</p>
        </FadeIn>
        <CourseGuide nextDates={nextDates} t={t} locale={locale} />
        <FadeIn className="mt-4">
          <a
            href={`#${SECTION_IDS.catalog}`}
            className="text-sm font-semibold text-teal underline underline-offset-4 transition-colors duration-150 hover:text-teal-deep"
          >
            {fill(t.wegweiser.allCourses, { count: PROGRAMS.length })} →
          </a>
        </FadeIn>
      </div>

      {/* The remainder, honestly handled: some people want a human answer. */}
      <FadeIn className="mt-16">
        <div className="rounded-lg bg-muted px-6 py-8 sm:flex sm:items-center sm:justify-between sm:gap-10 sm:px-10">
          <div>
            <h3 className="font-serif text-2xl leading-tight tracking-tight">
              {t.wegweiser.unsureTitle}
            </h3>
            <p className="mt-2 max-w-[52ch] text-sm leading-relaxed text-muted-foreground">
              {t.wegweiser.unsureText}
            </p>
          </div>
          <Button asChild className="mt-5 shrink-0 sm:mt-0">
            <a href={`#${SECTION_IDS.contact}`}>{t.wegweiser.unsureCta}</a>
          </Button>
        </div>
      </FadeIn>
    </div>
  );
}
