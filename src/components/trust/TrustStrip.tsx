import { Reveal } from '@/components/ui/Reveal';
import { RECOGNITION, SCHOOL } from '@/data/school';
import { SECTION_IDS, type Locale } from '@/i18n/config';
import type { UiDictionary } from '@/i18n/ui';

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
      className="bg-porcelain-deep"
    >
      <div className="shell py-14 md:py-20">
        <h2 id="vertrauen-titel" className="sr-only">
          {t.trust.srTitle}
        </h2>

        {/* Hairline-divided rows, not a card grid. */}
        <ul className="grid grid-cols-1 gap-px bg-hairline md:grid-cols-2 lg:grid-cols-5">
          {points.map((point, index) => (
            <li key={point.label} className="bg-porcelain-deep">
              <Reveal delay={index * 70} className="h-full">
                <div className="flex h-full flex-col gap-2 px-0 py-6 md:px-6 md:first:pl-0 lg:px-5">
                  <p
                    className={`text-[0.65rem] font-semibold uppercase tracking-[0.16em] ${
                      point.gold ? 'text-gold' : 'text-ink-muted'
                    }`}
                  >
                    {point.label}
                  </p>
                  <p className="font-display text-lg leading-snug">{point.value}</p>
                  <p className="text-sm leading-relaxed text-ink-muted">{point.detail}</p>
                </div>
              </Reveal>
            </li>
          ))}
        </ul>

        <p className="mt-8 max-w-[76ch] border-t border-hairline pt-5 text-xs leading-relaxed text-ink-muted">
          {t.trust.disclaimer}
        </p>
      </div>
    </section>
  );
}
