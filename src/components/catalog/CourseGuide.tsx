'use client';

import { useMemo, useState } from 'react';
import { FlagRibbon, LevelBadge } from '@/components/catalog/ProgramBadges';
import { FadeIn } from '@/components/ui/fade-in';
import { PROGRAMS } from '@/data/programs';
import type { Locale } from '@/i18n/config';
import type { UiDictionary } from '@/i18n/ui';
import type { Program, ProgramCategory } from '@/lib/types';

/**
 * Guided program discovery, embedded in the Wegweiser section. Three pill
 * choices re-filter the offer instantly. Kurzkurse are Weiterbildung
 * (client instruction): they drop out when a visitor brings no basics, and
 * the hint explains why instead of silently swapping categories.
 *
 * Visual language since 2026-09: a plain paper panel, no ceremonies.
 */
const CATEGORY_BY_ZIEL: Record<string, ProgramCategory> = {
  technik: 'kurzkurs',
  ausbildung: 'ausbildung',
  betrieb: 'betrieb',
};

const MAX_RESULTS = 2;

/** Stated recommendations lead the shortlist. */
function flagRank(program: Program): number {
  if (program.flag === 'einstieg') return 0;
  if (program.flag === 'neu') return 1;
  if (program.flag) return 2;
  return 3;
}

export function CourseGuide({
  t,
  locale,
}: {
  t: UiDictionary;
  locale: Locale;
}) {
  const [answers, setAnswers] = useState<Readonly<Record<string, string>>>({});
  const guide = t.catalog.guide;
  const complete = guide.steps.every((step) => answers[step.id]);

  const { matches, dropHint } = useMemo(() => {
    const category = answers.ziel ? CATEGORY_BY_ZIEL[answers.ziel] : undefined;
    const needsBasics = (p: Program) => p.category === 'kurzkurs';

    let pool = category ? PROGRAMS.filter((p) => p.category === category) : [...PROGRAMS];
    const time = answers.zeit;
    if (time === 'kurz') pool = pool.filter((p) => p.durationDays === 1);
    if (time === 'mehr') pool = pool.filter((p) => p.durationDays > 1);

    const removed = answers.basis === 'nein' && pool.some(needsBasics);
    if (removed) pool = pool.filter((p) => !needsBasics(p));
    // Nothing suitable within the chosen goal: fall back to the Ausbildungen,
    // which are built exactly for people starting from zero.
    if (removed && pool.length === 0) pool = PROGRAMS.filter((p) => p.category === 'ausbildung');

    pool = [...pool].sort((a, b) => flagRank(a) - flagRank(b));

    return { matches: pool.slice(0, MAX_RESULTS), dropHint: removed };
  }, [answers]);

  return (
    <FadeIn className="mt-6">
      <div className="rounded-lg bg-paper p-6 shadow-sm outline outline-black/5 sm:p-8 lg:p-10">
        <div className="grid gap-10 lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] lg:gap-14">
          {/* Questions */}
          <div>
            <h3 className="font-serif text-xl leading-tight tracking-tight sm:text-2xl">
              {guide.title}
            </h3>

            <ol className="mt-8 space-y-7">
              {guide.steps.map((step) => (
                <li key={step.id}>
                  <p className="text-sm font-semibold">{step.question}</p>
                  <div
                    role="group"
                    aria-label={step.question}
                    className="mt-3 flex flex-wrap gap-2"
                  >
                    {step.options.map((option) => {
                      const isActive = answers[step.id] === option.id;
                      return (
                        <button
                          key={option.id}
                          type="button"
                          aria-pressed={isActive}
                          onClick={() =>
                            setAnswers({ ...answers, [step.id]: option.id })
                          }
                          className={`min-h-11 rounded-full border px-4 text-sm font-medium transition-colors duration-150 ${
                            isActive
                              ? 'border-teal bg-teal text-paper'
                              : 'border-border text-muted-foreground hover:border-teal hover:text-teal'
                          }`}
                        >
                          {option.label}
                        </button>
                      );
                    })}
                  </div>
                </li>
              ))}
            </ol>
          </div>

          {/* Results */}
          <div aria-live="polite" className="border-t border-border pt-6 lg:border-l lg:border-t-0 lg:pl-10 lg:pt-0">
            <p className="text-sm font-semibold text-teal">{guide.resultLabel}</p>

            {complete && dropHint ? (
              <p className="mt-4 border-l-2 border-gold/60 pl-3 text-sm leading-relaxed text-muted-foreground">
                {guide.basisHint}
              </p>
            ) : null}

            {!complete ? (
              <p className="mt-6 max-w-[38ch] text-lg leading-relaxed text-muted-foreground">
                {locale === 'de' ? 'Erzählen Sie uns kurz von Ihrem Ziel. Ihre Empfehlung erscheint, sobald Sie alle drei Fragen beantwortet haben.' : 'บอกเป้าหมายของคุณสักนิด เมื่อตอบครบสามข้อ เราจะแสดงหลักสูตรที่เหมาะกับคุณ'}
              </p>
            ) : matches.length === 0 ? (
              <p className="mt-6 text-sm leading-relaxed">
                {locale === 'de' ? 'Für diese Auswahl gibt es keinen passenden Kurs. Ändern Sie eine Antwort oder lassen Sie sich persönlich beraten.' : 'ยังไม่มีหลักสูตรที่ตรงกับตัวเลือกนี้ ลองเปลี่ยนคำตอบ หรือปรึกษาครูโดยตรง'}
              </p>
            ) : null}
            <ul className="mt-6 space-y-3">
              {(complete ? matches : []).map((program) => (
                <li key={program.id}>
                  {/* One job per surface: the guide answers "which course can
                      I take" — name, level, recommendation, price. Dates and
                      detail live in Katalog and Termine. */}
                  <a
                    href={`#anfrage?kurs=${program.slug}`}
                    className="group flex items-center justify-between gap-4 rounded-md border border-border bg-background px-5 py-4 transition-colors duration-150 hover:border-teal"
                  >
                    <span className="min-w-0">
                      <span className="flex flex-wrap items-center gap-2">
                        <LevelBadge program={program} t={t} />
                        {program.flag ? (
                          <FlagRibbon flag={program.flag} t={t} locale={locale} />
                        ) : null}
                      </span>
                      <span className="mt-1.5 block truncate font-serif text-xl leading-tight tracking-tight transition-colors duration-150 group-hover:text-teal">
                        {program.title[locale]}
                      </span>
                    </span>
                    <span className="numeric shrink-0 text-right">
                      <span className="block text-base font-semibold">{program.price} €</span>
                      <span className="mt-0.5 block text-xs font-semibold text-teal underline underline-offset-4">
                        {t.catalog.requestCourse}
                      </span>
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </FadeIn>
  );
}
