import { KineticMarquee } from '@/components/motion/KineticMarquee';
import { Reveal } from '@/components/motion/Reveal';
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
    <section id={SECTION_IDS.trust} aria-labelledby="vertrauen-titel" className="bg-porcelain-deep">
      <div className="shell py-14 md:py-20">
        <h2 id="vertrauen-titel" className="sr-only">
          {t.trust.srTitle}
        </h2>

        {/* Credential ribbon. Drifts on its own, speeds up with the reader's
            scrolling and reverses when they reverse. The same facts are listed
            in full below, so nothing here is load-bearing. */}
        <KineticMarquee className="-mt-2 mb-10 border-y border-hairline py-4">
          {points.map((point) => (
            <span
              key={`ribbon-${point.label}`}
              className="flex shrink-0 items-center gap-5 pr-5 text-sm uppercase tracking-[0.14em] text-ink-muted"
            >
              <span aria-hidden className={point.gold ? 'text-gold' : 'text-teal'}>
                &#9670;
              </span>
              {point.value}
            </span>
          ))}
        </KineticMarquee>

        {/* Hairline-divided columns, not a card grid. The dividers are the
            parent's background showing through a 1px grid gap.

            The negative margin is what buys the text its distance from those
            dividers. Every cell is padded on both sides, and the grid is then
            pulled back out by the same amount, so the outer text still lines up
            with the shell edge. The outdent tracks the shell's own padding at
            each breakpoint — overshooting it pushes the grid past the viewport
            and gives the whole document a horizontal scrollbar.

            Doing this with a first-child exception instead does not work here:
            the padded element is the only child of its own wrapper, so
            `first:` matches in every column and silently removes the left
            padding from all of them. */}
        <ul className="grid grid-cols-1 gap-px bg-hairline sm:-mx-4 sm:grid-cols-2 md:-mx-6 lg:grid-cols-3 xl:-mx-7 xl:grid-cols-5">
          {points.map((point, index) => (
            <li key={point.label} className="bg-porcelain-deep">
              <Reveal delay={index * 0.07} className="h-full">
                <div className="flex h-full flex-col gap-2.5 px-0 py-7 sm:px-4 md:px-6 xl:px-7">
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
