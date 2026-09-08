import { StaggerList, FadeInLi, FadeIn } from '@/components/ui/fade-in';
import { RECOGNITION, SCHOOL } from '@/data/school';
import { SECTION_IDS, type Locale } from '@/i18n/config';
import type { UiDictionary } from '@/i18n/ui';

/**
 * The facts, plainly stated. (The kinetic marquee is gone — client feedback
 * 2026-09: the page shouted. Five quiet cells carry the same proof.)
 */
export function TrustStrip({ t, locale }: { t: UiDictionary; locale: Locale }) {
  const points = [
    {
      label: t.trust.recognition,
      value: RECOGNITION.bfdShort[locale],
      detail: RECOGNITION.bfdDetail[locale],
      gold: true,
    },
    {
      label: t.trust.licence,
      value: t.trust.licenceValue,
      detail: t.trust.licenceDetail,
      gold: true,
    },
    {
      label: t.trust.teaching,
      value: t.trust.teachingValue,
      detail: t.trust.teachingDetail,
      gold: false,
    },
    {
      label: t.trust.practice,
      value: t.trust.practiceValue,
      detail: t.trust.practiceDetail,
      gold: false,
    },
    {
      label: t.trust.travel,
      value: t.trust.travelValue,
      detail: SCHOOL.travelFrom.join(' · '),
      gold: false,
    },
  ];

  return (
    <section
      id={SECTION_IDS.trust}
      aria-labelledby="vertrauen-titel"
      className="border-y border-hairline"
    >
      <div className="mx-auto max-w-6xl px-6 py-12 sm:py-16">
        <h2 id="vertrauen-titel" className="sr-only">
          {t.trust.srTitle}
        </h2>

        <StaggerList className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-5 lg:gap-6">
          {points.map((point) => (
            <FadeInLi key={point.label}>
              <p
                className={`text-xs font-semibold ${point.gold ? 'text-gold' : 'text-muted-foreground'}`}
              >
                {point.label}
              </p>
              <p className="mt-1.5 font-serif text-lg leading-snug">{point.value}</p>
              <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{point.detail}</p>
            </FadeInLi>
          ))}
        </StaggerList>

        <FadeIn>
          <p className="mt-10 max-w-[76ch] border-t border-border pt-5 text-xs leading-relaxed text-muted-foreground">
            {t.trust.disclaimer}
          </p>
        </FadeIn>
      </div>
    </section>
  );
}
