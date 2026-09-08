'use client';

import { ArrowRight } from 'lucide-react';
import Image from 'next/image';
import { useState } from 'react';
import { FlagRibbon, LevelBadge } from '@/components/catalog/ProgramBadges';
import { FadeInLi, StaggerList } from '@/components/ui/fade-in';
import { PROGRAM_IMAGE } from '@/data/program-images';
import { CATEGORY_LABEL, CATEGORY_ORDER, PROGRAMS } from '@/data/programs';
import { SECTION_IDS, type Locale } from '@/i18n/config';
import { fill, type UiDictionary } from '@/i18n/ui';
import type { Program, ProgramCategory } from '@/lib/types';

/** Next bookable appearance per program, prepared on the server. */
export type NextDates = Readonly<Record<string, { dateLabel: string; availabilityLabel: string }>>;

/** Stated recommendations lead each family (client feedback 2026-09). */
function flagRank(program: Program): number {
  if (program.flag === 'einstieg') return 0;
  if (program.flag === 'neu') return 1;
  if (program.flag) return 2;
  return 3;
}

function CourseCard({
  program,
  next,
  t,
  locale,
}: {
  program: Program;
  next: { dateLabel: string; availabilityLabel: string } | undefined;
  t: UiDictionary;
  locale: Locale;
}) {
  const image = PROGRAM_IMAGE[program.id];

  return (
    <FadeInLi className="h-full">
      <a
        id={`kurs-${program.slug}`}
        href={`#${SECTION_IDS.contact}?kurs=${program.slug}`}
        className="group flex h-full scroll-mt-32 flex-col overflow-hidden rounded-lg bg-paper outline outline-black/10 transition-colors duration-150 hover:outline-teal/50"
      >
        {/* Media: the photograph if the course has one, otherwise the house
            monogram — never a stock placeholder. */}
        <div className="relative aspect-[16/10] overflow-hidden bg-muted">
          {image ? (
            <Image
              src={image.src}
              alt={image.alt[locale]}
              fill
              sizes="(max-width: 640px) 92vw, (max-width: 1280px) 45vw, 28vw"
              className="object-cover transition-transform duration-300 ease-out group-hover:scale-[1.04]"
            />
          ) : (
            <span
              aria-hidden
              className={`absolute inset-0 grid place-items-center bg-teal-deep font-serif text-6xl leading-none text-aqua ${
                locale === 'th' ? 'thai font-sans font-semibold' : ''
              }`}
            >
              {program.title[locale].charAt(0)}
            </span>
          )}
          {program.flag ? (
            <span className="absolute left-3 top-3">
              <FlagRibbon flag={program.flag} t={t} locale={locale} />
            </span>
          ) : null}
        </div>

        <div className="flex flex-1 flex-col p-5">
          <h3 className="font-serif text-xl leading-tight tracking-tight transition-colors duration-150 group-hover:text-teal">
            {program.title[locale]}
          </h3>
          {locale === 'de' ? (
            <p className="thai mt-0.5 text-sm text-muted-foreground" lang="th">
              {program.title.th}
            </p>
          ) : null}
          <p className="mt-2 line-clamp-2 text-sm leading-relaxed text-muted-foreground">
            {program.subtitle[locale]}
          </p>

          <dl className="numeric mt-4 flex flex-wrap items-center gap-x-4 gap-y-1 border-t border-border pt-3 text-sm text-muted-foreground">
            <div>
              <dt className="sr-only">{t.nextCourse.time}</dt>
              <dd>{program.durationLabel[locale]}</dd>
            </div>
            <div className="ml-auto text-right">
              <dt className="sr-only">{t.nextCourse.price}</dt>
              <dd className="font-semibold text-foreground">
                {program.price} €
                {program.priceNote ? (
                  <span className="block text-xs font-normal text-muted-foreground">
                    {program.priceNote[locale]}
                  </span>
                ) : null}
              </dd>
            </div>
          </dl>

          <div className="mt-3">
            <LevelBadge program={program} t={t} />
          </div>

          <div className="mt-auto flex items-center justify-between gap-3 pt-4">
            <p className="numeric text-xs text-teal">
              {next
                ? `${fill(t.catalog.nextTerm, { date: next.dateLabel })} · ${next.availabilityLabel}`
                : t.catalog.noTerm}
            </p>
            <span className="inline-flex shrink-0 items-center gap-1.5 text-sm font-semibold text-teal">
              {t.catalog.requestCourse}
              <ArrowRight
                aria-hidden
                className="size-4 transition-transform duration-150 group-hover:translate-x-0.5"
              />
            </span>
          </div>
        </div>
      </a>
    </FadeInLi>
  );
}

/**
 * The catalog as a calm card grid. Default family is the Ausbildungen —
 * the entry points — because most visitors arrive without basics
 * (client feedback 2026-09). Cards answer in scan order:
 * flag (why pushed) → name → level badge (may I take it) → next date.
 */
export function CourseGrid({
  nextDates,
  t,
  locale,
}: {
  nextDates: NextDates;
  t: UiDictionary;
  locale: Locale;
}) {
  const [category, setCategory] = useState<ProgramCategory>('ausbildung');
  const programs = PROGRAMS.filter((program) => program.category === category).sort(
    (a, b) => flagRank(a) - flagRank(b),
  );
  const group = t.catalog.groups[category];

  return (
    <div>
      {/* Category pills — a filter switch, so group + aria-pressed, not tabs. */}
      <div role="group" aria-label={group.kicker} className="flex flex-wrap items-center gap-1.5">
        {CATEGORY_ORDER.map((key) => {
          const isActive = category === key;
          return (
            <button
              key={key}
              type="button"
              aria-pressed={isActive}
              onClick={() => setCategory(key)}
              className={`min-h-11 rounded-full px-5 text-sm font-semibold transition-colors duration-150 ${
                isActive ? 'bg-ink text-paper' : 'text-muted-foreground hover:bg-muted hover:text-ink'
              }`}
            >
              {CATEGORY_LABEL[key][locale]}
            </button>
          );
        })}
      </div>

      <div className="mt-6 flex flex-wrap items-end justify-between gap-4">
        <h3 className="font-serif text-xl leading-tight tracking-tight sm:text-2xl">
          {group.title}
        </h3>
        <p className="max-w-[52ch] text-sm leading-relaxed text-muted-foreground">
          {group.description}
        </p>
      </div>

      <StaggerList className="mt-8 grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
        {programs.map((program) => (
          <CourseCard
            key={program.id}
            program={program}
            next={nextDates[program.id]}
            t={t}
            locale={locale}
          />
        ))}
      </StaggerList>
    </div>
  );
}
