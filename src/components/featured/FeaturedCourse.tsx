import Image from 'next/image';
import { AvailabilityBadge } from '@/components/ui/Availability';
import { LinkButton } from '@/components/ui/Button';
import { Reveal } from '@/components/ui/Reveal';
import { BODY_AREA_BY_ID } from '@/data/body-areas';
import { PROGRAM_BY_ID } from '@/data/programs';
import { SCHOOL } from '@/data/school';
import type { Locale } from '@/i18n/config';
import type { UiDictionary } from '@/i18n/ui';
import type { SessionView } from '@/lib/types';

/**
 * One programme shown in full depth, so the catalogue's promise is provable.
 * Every other programme uses the same field model.
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
  const areas = program.bodyAreas.map((id) => BODY_AREA_BY_ID.get(id)?.label[locale]).filter(Boolean);

  return (
    <div className="mt-12 grid gap-12 lg:grid-cols-[minmax(0,7fr)_minmax(0,5fr)] lg:gap-20">
      <div>
        <Reveal>
          <div className="relative aspect-16/10 overflow-hidden bg-porcelain-deep">
            <Image
              src="/img/t-office.jpg"
              alt={t.featured.imageAlt}
              fill
              sizes="(max-width: 1024px) 92vw, 55vw"
              className="object-cover"
            />
          </div>
        </Reveal>

        <div className="mt-10">
          <p className="kicker">{t.featured.kicker}</p>
          <h3 className="mt-3 font-display text-[clamp(2rem,1.3rem+2.4vw,3.25rem)] leading-[1.08]">
            {program.title[locale]}
          </h3>
          {locale === 'de' ? (
            <p className="thai mt-1 text-ink-muted" lang="th">
              {program.title.th}
            </p>
          ) : null}
          <p className="mt-5 max-w-[58ch] text-[length:var(--text-lead)] leading-relaxed">
            {program.subtitle[locale]}. {t.featured.leadSuffix}
          </p>
          <p className="mt-4 max-w-[58ch] leading-relaxed text-ink-muted">
            {program.audience[locale]}
          </p>
        </div>

        <div className="mt-10 grid gap-10 sm:grid-cols-2">
          <section>
            <h4 className="text-sm font-semibold uppercase tracking-[0.12em] text-teal">
              {t.featured.outcomes}
            </h4>
            <ul className="mt-4 space-y-3">
              {program.outcomes?.[locale].map((outcome) => (
                <li key={outcome} className="flex gap-3 text-sm leading-relaxed">
                  <span aria-hidden className="mt-2 h-1 w-4 shrink-0 bg-gold" />
                  {outcome}
                </li>
              ))}
            </ul>
          </section>

          <section>
            <h4 className="text-sm font-semibold uppercase tracking-[0.12em] text-teal">
              {t.featured.curriculum}
            </h4>
            <ol className="numeric mt-4 space-y-3">
              {program.curriculum?.[locale].map((item, index) => (
                <li key={item} className="flex gap-3 text-sm leading-relaxed">
                  <span className="w-5 shrink-0 text-ink-muted">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  {item}
                </li>
              ))}
            </ol>
          </section>
        </div>

        {program.faq ? (
          <section className="mt-12">
            <h4 className="text-sm font-semibold uppercase tracking-[0.12em] text-teal">
              {t.featured.faq}
            </h4>
            <div className="mt-4 border-t border-hairline">
              {program.faq.map((entry) => (
                <details key={entry.q[locale]} className="group border-b border-hairline">
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-6 py-4 text-base font-medium marker:hidden">
                    {entry.q[locale]}
                    <span
                      aria-hidden
                      className="grid h-7 w-7 shrink-0 place-items-center rounded-full border border-hairline transition-transform duration-[var(--dur-3)] ease-[var(--ease-in-out-cubic)] group-open:rotate-45"
                    >
                      <svg width="11" height="11" viewBox="0 0 11 11" aria-hidden>
                        <path
                          d="M5.5 0v11M0 5.5h11"
                          stroke="currentColor"
                          strokeWidth="1.3"
                          strokeLinecap="round"
                        />
                      </svg>
                    </span>
                  </summary>
                  <p className="max-w-[62ch] pb-5 text-sm leading-relaxed text-ink-muted">
                    {entry.a[locale]}
                  </p>
                </details>
              ))}
            </div>
          </section>
        ) : null}
      </div>

      {/* Facts rail */}
      <aside className="lg:sticky lg:top-28 lg:self-start">
        <div className="border-t-2 border-ink bg-paper p-7">
          <dl className="numeric divide-y divide-hairline text-sm">
            <Fact label={t.featured.facts.price}>
              <span className="font-display text-2xl">{program.price} €</span>
              {program.priceNote ? (
                <span className="ml-2 text-xs text-ink-muted">{program.priceNote[locale]}</span>
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

          <div className="mt-7 border-t border-hairline pt-6">
            <p className="kicker">{t.featured.nextDates}</p>
            {upcoming.length === 0 ? (
              <p className="mt-3 text-sm text-ink-muted">{t.featured.noDates}</p>
            ) : (
              <ul className="mt-3 space-y-3">
                {upcoming.map((session) => (
                  <li key={session.id} className="numeric flex items-center justify-between gap-3 text-sm">
                    <span>{session.dateLabel}</span>
                    <AvailabilityBadge status={session.status} label={session.availabilityLabel} />
                  </li>
                ))}
              </ul>
            )}

            <LinkButton href={`#anfrage?kurs=${program.slug}`} className="mt-6 w-full">
              {t.featured.cta}
            </LinkButton>
            <p className="mt-3 text-xs leading-relaxed text-ink-muted">{t.featured.ctaNote}</p>
          </div>
        </div>
      </aside>
    </div>
  );
}

function Fact({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div className="grid grid-cols-[8rem_minmax(0,1fr)] gap-4 py-3.5 first:pt-0">
      <dt className="text-[0.7rem] uppercase tracking-[0.12em] text-ink-muted">{label}</dt>
      <dd className="leading-relaxed">{children}</dd>
    </div>
  );
}
