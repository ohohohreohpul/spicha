import Image from 'next/image';
import { AvailabilityBadge } from '@/components/ui/Availability';
import { FadeIn } from '@/components/ui/fade-in';
import { Button } from '@/components/ui/hero-08-utils/button';
import { BODY_AREA_BY_ID } from '@/data/body-areas';
import { PROGRAM_BY_ID } from '@/data/programs';
import { SCHOOL } from '@/data/school';
import { SECTION_IDS, type Locale } from '@/i18n/config';
import type { UiDictionary } from '@/i18n/ui';
import type { SessionView } from '@/lib/types';

/**
 * One programme shown in full depth, so the catalogue's promise is provable.
 * Every other programme uses the same field model.
 * (2026-09 rebuild: quiet two-column layout, no parallax, no display-ceremony.)
 */
export function FeaturedCourse({
  programId,
  sessions,
  t,
  locale,
}: {
  programId: string;
  sessions: readonly SessionView[];
  t: UiDictionary;
  locale: Locale;
}) {
  const program = PROGRAM_BY_ID.get(programId);
  if (!program) return null;

  const upcoming = sessions.filter((s) => s.programId === programId).slice(0, 3);
  const areas = program.bodyAreas
    .map((id) => BODY_AREA_BY_ID.get(id)?.label[locale])
    .filter(Boolean);

  return (
    <div className="grid gap-10 lg:grid-cols-[minmax(0,7fr)_minmax(0,5fr)] lg:gap-16">
      <div>
        <FadeIn>
          <div className="relative aspect-[16/10] overflow-hidden rounded-lg bg-muted outline outline-black/10">
            <Image
              src="/img/t-office.jpg"
              alt={t.featured.imageAlt}
              fill
              sizes="(max-width: 1024px) 92vw, 55vw"
              className="object-cover"
            />
          </div>
        </FadeIn>

        <FadeIn className="mt-8">
          <h3 className="font-serif text-2xl leading-tight tracking-tight sm:text-3xl">
            {program.title[locale]}
          </h3>
          {locale === 'de' ? (
            <p className="thai mt-1 text-muted-foreground" lang="th">
              {program.title.th}
            </p>
          ) : null}
          <p className="mt-4 max-w-[58ch] leading-relaxed text-muted-foreground">
            {program.subtitle[locale]}. {t.featured.leadSuffix}
          </p>
          <p className="mt-3 max-w-[58ch] text-sm leading-relaxed text-muted-foreground">
            {program.audience[locale]}
          </p>
        </FadeIn>

        <div className="mt-10 grid gap-10 sm:grid-cols-2">
          <section>
            <h4 className="text-sm font-semibold text-teal">{t.featured.outcomes}</h4>
            <ul className="mt-4 space-y-3">
              {program.outcomes?.[locale].map((outcome) => (
                <li key={outcome} className="text-sm leading-relaxed text-muted-foreground">
                  {outcome}
                </li>
              ))}
            </ul>
          </section>

          <section>
            <h4 className="text-sm font-semibold text-teal">{t.featured.curriculum}</h4>
            <ul className="mt-4 space-y-3">
              {program.curriculum?.[locale].map((item) => (
                <li key={item} className="text-sm leading-relaxed text-muted-foreground">
                  {item}
                </li>
              ))}
            </ul>
          </section>
        </div>

        {program.faq ? (
          <section className="mt-12">
            <h4 className="text-sm font-semibold text-teal">{t.featured.faq}</h4>
            <div className="mt-4 border-t border-border">
              {program.faq.map((entry) => (
                <details key={entry.q[locale]} className="group border-b border-border">
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-6 py-4 text-base font-medium marker:hidden">
                    {entry.q[locale]}
                    <span
                      aria-hidden
                      className="text-lg leading-none text-muted-foreground transition-transform duration-200 group-open:rotate-45"
                    >
                      +
                    </span>
                  </summary>
                  <p className="max-w-[62ch] pb-5 text-sm leading-relaxed text-muted-foreground">
                    {entry.a[locale]}
                  </p>
                </details>
              ))}
            </div>
          </section>
        ) : null}
      </div>

      {/* Facts rail */}
      <aside className="lg:sticky lg:top-24 lg:self-start">
        <FadeIn>
          <div className="rounded-lg bg-paper p-6 shadow-sm outline outline-black/5 sm:p-7">
            <dl className="numeric divide-y divide-border text-sm">
              <Fact label={t.featured.facts.price}>
                <span className="font-serif text-2xl">{program.price} €</span>
                {program.priceNote ? (
                  <span className="ml-2 text-xs text-muted-foreground">
                    {program.priceNote[locale]}
                  </span>
                ) : null}
              </Fact>
              <Fact label={t.featured.facts.duration}>{program.durationLabel[locale]}</Fact>
              <Fact label={t.featured.facts.language}>{t.trust.teachingValue}</Fact>
              <Fact label={t.featured.facts.location}>
                {SCHOOL.street}, {SCHOOL.postalCode} {SCHOOL.city}
              </Fact>
              <Fact label={t.featured.facts.prerequisites}>{program.prerequisites[locale]}</Fact>
              <Fact label={t.featured.facts.bodyArea}>{areas.join(' · ')}</Fact>
              <Fact label={t.featured.facts.included}>{program.included?.[locale].join(' · ')}</Fact>
              <Fact label={t.featured.facts.certificate}>{program.certificate[locale]}</Fact>
            </dl>

            <div className="mt-6 border-t border-border pt-6">
              <p className="text-sm font-semibold">{t.featured.nextDates}</p>
              {upcoming.length === 0 ? (
                <p className="mt-3 text-sm text-muted-foreground">{t.featured.noDates}</p>
              ) : (
                <ul className="mt-3 space-y-3">
                  {upcoming.map((session) => (
                    <li
                      key={session.id}
                      className="numeric flex items-center justify-between gap-3 text-sm"
                    >
                      <span>{session.dateLabel}</span>
                      <AvailabilityBadge status={session.status} label={session.availabilityLabel} />
                    </li>
                  ))}
                </ul>
              )}

              <Button asChild className="mt-6 w-full">
                <a href={`#${SECTION_IDS.contact}?kurs=${program.slug}`}>{t.featured.cta}</a>
              </Button>
              <p className="mt-3 text-xs leading-relaxed text-muted-foreground">
                {t.featured.ctaNote}
              </p>
            </div>
          </div>
        </FadeIn>
      </aside>
    </div>
  );
}

function Fact({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div className="grid grid-cols-[7.5rem_minmax(0,1fr)] gap-4 py-3.5 first:pt-0">
      <dt className="text-xs text-muted-foreground">{label}</dt>
      <dd className="leading-relaxed">{children}</dd>
    </div>
  );
}
