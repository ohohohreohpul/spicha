'use client';

import { useMemo, useState, useTransition } from 'react';
import { ScheduleRow } from '@/components/schedule/ScheduleRow';
import { ScheduleSkeleton } from '@/components/schedule/ScheduleSkeleton';
import { BODY_AREAS } from '@/data/body-areas';
import { CATEGORY_LABEL, CATEGORY_ORDER, PROGRAMS } from '@/data/programs';
import type { Locale } from '@/i18n/config';
import type { UiDictionary } from '@/i18n/ui';
import { isBookable } from '@/lib/schedule';
import type { BodyArea, ProgramCategory, SchedulePayload, SessionView } from '@/lib/types';

type View = 'naechste' | 'nach-kurs' | 'kalender';

type Filters = {
  readonly category: ProgramCategory | 'alle';
  readonly bodyArea: BodyArea | 'alle';
  readonly language: 'alle' | 'de' | 'th';
  readonly onlyAvailable: boolean;
};

const INITIAL_FILTERS: Filters = {
  category: 'alle',
  bodyArea: 'alle',
  language: 'alle',
  onlyAvailable: false,
};

function applyFilters(sessions: readonly SessionView[], filters: Filters): SessionView[] {
  return sessions.filter((session) => {
    if (filters.category !== 'alle' && session.category !== filters.category) return false;
    if (filters.bodyArea !== 'alle' && !session.bodyAreas.includes(filters.bodyArea)) return false;
    if (filters.language !== 'alle' && !session.languages.includes(filters.language)) return false;
    if (filters.onlyAvailable && !isBookable(session.status)) return false;
    return true;
  });
}

/** Groups by calendar month using the ISO start, not the localized label. */
const MONTH_FORMATTERS: Partial<Record<Locale, Intl.DateTimeFormat>> = {};

function monthKey(session: SessionView, locale: Locale): string {
  const start = new Date(session.startIso);
  const formatter = (MONTH_FORMATTERS[locale] ??= new Intl.DateTimeFormat(
    locale === 'de' ? 'de-DE' : 'th-TH-u-ca-gregory',
    { month: 'long', year: 'numeric', timeZone: 'Europe/Berlin' },
  ));
  return formatter.format(start);
}

export function Schedule({
  initial,
  t,
  locale,
}: {
  initial: SchedulePayload;
  t: UiDictionary;
  locale: Locale;
}) {
  const [payload, setPayload] = useState(initial);
  const [view, setView] = useState<View>('naechste');
  const [filters, setFilters] = useState<Filters>(INITIAL_FILTERS);
  const [programId, setProgramId] = useState(PROGRAMS[0].id);
  const [error, setError] = useState<string | null>(null);
  const [pending, startTransition] = useTransition();
  const [loading, setLoading] = useState(false);

  const views: readonly { id: View; label: string; hint: string }[] = [
    {
      id: 'naechste',
      label: t.schedule.views.next,
      hint: t.schedule.views.nextHint,
    },
    {
      id: 'nach-kurs',
      label: t.schedule.views.byProgram,
      hint: t.schedule.views.byProgramHint,
    },
    {
      id: 'kalender',
      label: t.schedule.views.byMonth,
      hint: t.schedule.views.byMonthHint,
    },
  ];

  const filtered = useMemo(
    () => applyFilters(payload.sessions, filters),
    [payload.sessions, filters],
  );

  const byProgram = useMemo(
    () => payload.sessions.filter((s) => s.programId === programId),
    [payload.sessions, programId],
  );

  const byMonth = useMemo(() => {
    const groups = new Map<string, SessionView[]>();
    filtered.forEach((session) => {
      const key = monthKey(session, locale);
      groups.set(key, [...(groups.get(key) ?? []), session]);
    });
    return [...groups.entries()];
  }, [filtered, locale]);

  const activeFilterCount =
    (filters.category !== 'alle' ? 1 : 0) +
    (filters.bodyArea !== 'alle' ? 1 : 0) +
    (filters.language !== 'alle' ? 1 : 0) +
    (filters.onlyAvailable ? 1 : 0);

  async function refresh() {
    setLoading(true);
    setError(null);
    try {
      const response = await fetch(`/api/schedule?locale=${locale}`, {
        cache: 'no-store',
      });
      if (!response.ok) throw new Error(`Response ${response.status}`);
      const next = (await response.json()) as SchedulePayload;
      startTransition(() => setPayload(next));
    } catch {
      // Keep showing the last confirmed schedule — never blank the section.
      setError(t.schedule.syncError);
    } finally {
      setLoading(false);
    }
  }

  const visible = view === 'nach-kurs' ? byProgram : filtered;
  const selectedProgram = PROGRAMS.find((p) => p.id === programId);

  return (
    <div>
      {/* View switch + sync stamp */}
      <div className="flex flex-wrap items-end justify-between gap-6 border-t border-border pt-6">
        {/* A filter switch, not tabs: no tabpanels or arrow-key pattern exist,
            so the controls are announced as a toggle-button group. */}
        <div
          role="group"
          aria-label={t.schedule.views.label}
          className="flex flex-wrap items-center gap-1"
        >
          {views.map((item) => {
            const isActive = view === item.id;
            return (
              <button
                key={item.id}
                aria-pressed={isActive}
                type="button"
                onClick={() => setView(item.id)}
                className={`min-h-11 rounded-full px-5 text-sm font-semibold transition-colors duration-150 ${
                  isActive
                    ? 'bg-ink text-paper'
                    : 'text-muted-foreground hover:bg-muted hover:text-ink'
                }`}
              >
                {item.label}
              </button>
            );
          })}
        </div>

        <div className="flex items-center gap-4">
          <p className="numeric text-xs text-muted-foreground">
            {payload.stale ? t.schedule.lastConfirmed : t.schedule.status} {payload.syncedAtLabel}{' '}
            {t.nextCourse.clock}
          </p>
          <button
            type="button"
            onClick={refresh}
            disabled={loading || pending}
            className="min-h-11 rounded-md border border-border px-4 text-xs font-semibold transition-colors duration-150 hover:border-teal hover:text-teal disabled:opacity-50"
          >
            {loading ? t.schedule.loading : t.schedule.refresh}
          </button>
        </div>
      </div>

      <p className="mt-3 text-sm text-muted-foreground">{views.find((v) => v.id === view)?.hint}</p>
      {/* The venue never varies — say it once here instead of on every row
          (client feedback 2026-08). */}
      <p className="numeric mt-1 text-xs text-muted-foreground/80">{t.schedule.sharedLocation}</p>

      {/* Controls */}
      {view === 'nach-kurs' ? (
        <div className="mt-6 flex flex-col gap-2">
          <label htmlFor="programm" className="text-sm font-semibold">
            {t.schedule.course}
          </label>
          <select
            id="programm"
            value={programId}
            onChange={(event) => setProgramId(event.target.value)}
            className="min-h-11 max-w-md rounded-md border border-input bg-paper px-5 text-sm"
          >
            {PROGRAMS.map((program) => (
              <option key={program.id} value={program.id}>
                {program.title[locale]} — {program.price} €
                {program.priceNote ? ` (${program.priceNote[locale]})` : ''}
              </option>
            ))}
          </select>
          {selectedProgram ? (
            <p className="mt-1 max-w-[60ch] text-sm text-muted-foreground">
              {selectedProgram.subtitle[locale]}
            </p>
          ) : null}
        </div>
      ) : (
        <fieldset className="mt-6 flex flex-wrap items-end gap-x-6 gap-y-4">
          <legend className="sr-only">{t.schedule.filterLegend}</legend>

          <Field label={t.schedule.courseType}>
            <select
              value={filters.category}
              onChange={(event) =>
                setFilters({
                  ...filters,
                  category: event.target.value as Filters['category'],
                })
              }
              className="min-h-11 rounded-md border border-input bg-paper px-4 text-sm"
            >
              <option value="alle">{t.schedule.all}</option>
              {CATEGORY_ORDER.map((key) => (
                <option key={key} value={key}>
                  {CATEGORY_LABEL[key][locale]}
                </option>
              ))}
            </select>
          </Field>

          <Field label={t.schedule.bodyArea}>
            <select
              value={filters.bodyArea}
              onChange={(event) =>
                setFilters({
                  ...filters,
                  bodyArea: event.target.value as Filters['bodyArea'],
                })
              }
              className="min-h-11 rounded-md border border-input bg-paper px-4 text-sm"
            >
              <option value="alle">{t.schedule.all}</option>
              {BODY_AREAS.map((area) => (
                <option key={area.id} value={area.id}>
                  {area.label[locale]}
                </option>
              ))}
            </select>
          </Field>

          <Field label={t.schedule.language}>
            <select
              value={filters.language}
              onChange={(event) =>
                setFilters({
                  ...filters,
                  language: event.target.value as Filters['language'],
                })
              }
              className="min-h-11 rounded-md border border-input bg-paper px-4 text-sm"
            >
              <option value="alle">{t.schedule.all}</option>
              <option value="de">{locale === 'de' ? 'Deutsch' : 'ภาษาเยอรมัน'}</option>
              <option value="th">{locale === 'de' ? 'Thailändisch' : 'ภาษาไทย'}</option>
            </select>
          </Field>

          <label className="flex min-h-11 cursor-pointer items-center gap-2.5 text-sm font-medium">
            <input
              type="checkbox"
              checked={filters.onlyAvailable}
              onChange={(event) => setFilters({ ...filters, onlyAvailable: event.target.checked })}
              className="h-4 w-4 accent-[var(--color-teal)]"
            />
            {t.schedule.onlyAvailable}
          </label>

          {activeFilterCount > 0 ? (
            <button
              type="button"
              onClick={() => setFilters(INITIAL_FILTERS)}
              className="min-h-11 text-sm font-semibold text-teal underline decoration-teal/30 underline-offset-4"
            >
              {t.schedule.resetFilters} ({activeFilterCount})
            </button>
          ) : null}
        </fieldset>
      )}

      {error ? (
        <p
          role="status"
          className="mt-6 border-l-2 border-pressure bg-pressure/5 px-4 py-3 text-sm text-foreground"
        >
          {error}
        </p>
      ) : null}

      {/* Results */}
      <div className="mt-8 border-t border-border">
        {loading ? (
          <ScheduleSkeleton label={t.schedule.loadingSr} />
        ) : visible.length === 0 ? (
          <EmptyState
            t={t}
            filtered={view !== 'nach-kurs' && activeFilterCount > 0}
            onReset={() => setFilters(INITIAL_FILTERS)}
          />
        ) : view === 'kalender' ? (
          byMonth.map(([month, sessions]) => (
            <section key={month} aria-label={month}>
              <h3 className="sticky top-16 z-10 bg-background/95 py-3 text-[0.7rem] font-semibold uppercase tracking-[0.16em] text-teal backdrop-blur-[2px]">
                {month}
              </h3>
              {sessions.map((session) => (
                <ScheduleRow key={session.id} session={session} t={t} locale={locale} />
              ))}
            </section>
          ))
        ) : (
          visible.map((session) => (
            <ScheduleRow key={session.id} session={session} t={t} locale={locale} />
          ))
        )}
      </div>

      {visible.length > 0 ? (
        <p className="numeric mt-5 text-sm text-muted-foreground">
          {visible.length} {visible.length === 1 ? t.schedule.countOne : t.schedule.countMany} ·{' '}
          {t.schedule.countNote}
        </p>
      ) : null}
    </div>
  );
}

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <label className="flex flex-col gap-2">
      <span className="text-sm font-semibold">{label}</span>
      {children}
    </label>
  );
}

function EmptyState({
  t,
  filtered,
  onReset,
}: {
  t: UiDictionary;
  filtered: boolean;
  onReset: () => void;
}) {
  return (
    <div className="py-14">
      <h3 className="font-serif text-2xl tracking-tight leading-tight">
        {filtered ? t.schedule.emptyFiltered : t.schedule.emptyAll}
      </h3>
      <p className="mt-3 max-w-[52ch] leading-relaxed text-muted-foreground">{t.schedule.emptyBody}</p>
      <div className="mt-6 flex flex-wrap gap-3">
        <a
          href="#anfrage"
          className="inline-flex min-h-11 items-center rounded-md bg-teal px-6 text-sm font-semibold text-paper transition-colors duration-150 hover:bg-teal-deep"
        >
          {t.schedule.emptyCta}
        </a>
        {filtered ? (
          <button
            type="button"
            onClick={onReset}
            className="inline-flex min-h-11 items-center rounded-md border border-border px-6 text-sm font-semibold transition-colors duration-150 hover:border-teal hover:text-teal"
          >
            {t.schedule.showAll}
          </button>
        ) : null}
      </div>
    </div>
  );
}
