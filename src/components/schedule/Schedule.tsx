'use client';

import { useMemo, useState, useTransition } from 'react';
import { ScheduleRow } from '@/components/schedule/ScheduleRow';
import { ScheduleSkeleton } from '@/components/schedule/ScheduleSkeleton';
import { BODY_AREAS } from '@/data/body-areas';
import { CATEGORY_LABEL, PROGRAMS } from '@/data/programs';
import { isBookable } from '@/lib/schedule';
import type { BodyArea, ProgramCategory, SchedulePayload, SessionView } from '@/lib/types';

type View = 'naechste' | 'nach-kurs' | 'kalender';

const VIEWS: readonly { id: View; label: string; hint: string }[] = [
  { id: 'naechste', label: 'Nächste Termine', hint: 'Chronologisch, der nächste zuerst' },
  { id: 'nach-kurs', label: 'Nach Kurs', hint: 'Erst den Kurs wählen, dann Termine vergleichen' },
  { id: 'kalender', label: 'Nach Monat', hint: 'Nach Monaten gruppiert' },
];

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

function monthKey(session: SessionView): string {
  const [datePart] = session.dateLabel.split(' – ');
  const parts = datePart.split(' ');
  return `${parts[1]} ${parts[2]}`;
}

export function Schedule({ initial }: { initial: SchedulePayload }) {
  const [payload, setPayload] = useState(initial);
  const [view, setView] = useState<View>('naechste');
  const [filters, setFilters] = useState<Filters>(INITIAL_FILTERS);
  const [programId, setProgramId] = useState(PROGRAMS[0].id);
  const [error, setError] = useState<string | null>(null);
  const [pending, startTransition] = useTransition();
  const [loading, setLoading] = useState(false);

  const filtered = useMemo(() => applyFilters(payload.sessions, filters), [payload.sessions, filters]);

  const byProgram = useMemo(
    () => payload.sessions.filter((s) => s.programId === programId),
    [payload.sessions, programId],
  );

  const byMonth = useMemo(() => {
    const groups = new Map<string, SessionView[]>();
    filtered.forEach((session) => {
      const key = monthKey(session);
      groups.set(key, [...(groups.get(key) ?? []), session]);
    });
    return [...groups.entries()];
  }, [filtered]);

  const activeFilterCount =
    (filters.category !== 'alle' ? 1 : 0) +
    (filters.bodyArea !== 'alle' ? 1 : 0) +
    (filters.language !== 'alle' ? 1 : 0) +
    (filters.onlyAvailable ? 1 : 0);

  async function refresh() {
    setLoading(true);
    setError(null);
    try {
      const response = await fetch('/api/schedule', { cache: 'no-store' });
      if (!response.ok) throw new Error(`Antwort ${response.status}`);
      const next = (await response.json()) as SchedulePayload;
      startTransition(() => setPayload(next));
    } catch {
      // Keep showing the last confirmed schedule — never blank the section.
      setError(
        'Die Terminliste konnte gerade nicht aktualisiert werden. Sie sehen den zuletzt bestätigten Stand.',
      );
    } finally {
      setLoading(false);
    }
  }

  const visible = view === 'nach-kurs' ? byProgram : filtered;
  const selectedProgram = PROGRAMS.find((p) => p.id === programId);

  return (
    <div className="mt-12">
      {/* View switch + sync stamp */}
      <div className="flex flex-wrap items-end justify-between gap-6 border-t border-ink/15 pt-6">
        <div
          role="tablist"
          aria-label="Darstellung der Termine"
          className="flex flex-wrap items-center gap-1"
        >
          {VIEWS.map((item) => {
            const isActive = view === item.id;
            return (
              <button
                key={item.id}
                role="tab"
                aria-selected={isActive}
                type="button"
                onClick={() => setView(item.id)}
                className={`min-h-11 rounded-full px-5 text-sm font-semibold transition-colors duration-150 ${
                  isActive
                    ? 'bg-ink text-paper'
                    : 'text-ink-muted hover:bg-porcelain-deep hover:text-ink'
                }`}
              >
                {item.label}
              </button>
            );
          })}
        </div>

        <div className="flex items-center gap-4">
          <p className="numeric text-xs text-ink-muted">
            {payload.stale ? 'Zuletzt bestätigt' : 'Stand'} {payload.syncedAtLabel} Uhr
          </p>
          <button
            type="button"
            onClick={refresh}
            disabled={loading || pending}
            className="min-h-11 rounded-full border border-hairline px-4 text-xs font-semibold transition-colors duration-150 hover:border-teal hover:text-teal disabled:opacity-50"
          >
            {loading ? 'Wird geladen…' : 'Aktualisieren'}
          </button>
        </div>
      </div>

      <p className="mt-3 text-sm text-ink-muted">{VIEWS.find((v) => v.id === view)?.hint}</p>

      {/* Controls */}
      {view === 'nach-kurs' ? (
        <div className="mt-6 flex flex-col gap-2">
          <label htmlFor="programm" className="text-sm font-semibold">
            Kurs
          </label>
          <select
            id="programm"
            value={programId}
            onChange={(event) => setProgramId(event.target.value)}
            className="min-h-11 max-w-md rounded-full border border-hairline bg-paper px-5 text-sm"
          >
            {PROGRAMS.map((program) => (
              <option key={program.id} value={program.id}>
                {program.title} — {program.price} €
              </option>
            ))}
          </select>
          {selectedProgram ? (
            <p className="mt-1 max-w-[60ch] text-sm text-ink-muted">{selectedProgram.subtitle}</p>
          ) : null}
        </div>
      ) : (
        <fieldset className="mt-6 flex flex-wrap items-end gap-x-6 gap-y-4">
          <legend className="sr-only">Termine filtern</legend>

          <Field label="Kursart">
            <select
              value={filters.category}
              onChange={(event) =>
                setFilters({ ...filters, category: event.target.value as Filters['category'] })
              }
              className="min-h-11 rounded-full border border-hairline bg-paper px-4 text-sm"
            >
              <option value="alle">Alle</option>
              {(Object.keys(CATEGORY_LABEL) as ProgramCategory[]).map((key) => (
                <option key={key} value={key}>
                  {CATEGORY_LABEL[key]}
                </option>
              ))}
            </select>
          </Field>

          <Field label="Körperbereich">
            <select
              value={filters.bodyArea}
              onChange={(event) =>
                setFilters({ ...filters, bodyArea: event.target.value as Filters['bodyArea'] })
              }
              className="min-h-11 rounded-full border border-hairline bg-paper px-4 text-sm"
            >
              <option value="alle">Alle</option>
              {BODY_AREAS.map((area) => (
                <option key={area.id} value={area.id}>
                  {area.label}
                </option>
              ))}
            </select>
          </Field>

          <Field label="Sprache">
            <select
              value={filters.language}
              onChange={(event) =>
                setFilters({ ...filters, language: event.target.value as Filters['language'] })
              }
              className="min-h-11 rounded-full border border-hairline bg-paper px-4 text-sm"
            >
              <option value="alle">Alle</option>
              <option value="de">Deutsch</option>
              <option value="th">ไทย</option>
            </select>
          </Field>

          <label className="flex min-h-11 cursor-pointer items-center gap-2.5 text-sm font-medium">
            <input
              type="checkbox"
              checked={filters.onlyAvailable}
              onChange={(event) =>
                setFilters({ ...filters, onlyAvailable: event.target.checked })
              }
              className="h-4 w-4 accent-[var(--color-teal)]"
            />
            Nur Termine mit freien Plätzen
          </label>

          {activeFilterCount > 0 ? (
            <button
              type="button"
              onClick={() => setFilters(INITIAL_FILTERS)}
              className="min-h-11 text-sm font-semibold text-teal underline decoration-teal/30 underline-offset-4"
            >
              Filter zurücksetzen ({activeFilterCount})
            </button>
          ) : null}
        </fieldset>
      )}

      {error ? (
        <p
          role="status"
          className="mt-6 border-l-2 border-pressure bg-pressure/5 px-4 py-3 text-sm text-ink"
        >
          {error}
        </p>
      ) : null}

      {/* Results */}
      <div className="mt-8 border-t border-ink/15">
        {loading ? (
          <ScheduleSkeleton />
        ) : visible.length === 0 ? (
          <EmptyState
            filtered={view !== 'nach-kurs' && activeFilterCount > 0}
            onReset={() => setFilters(INITIAL_FILTERS)}
          />
        ) : view === 'kalender' ? (
          byMonth.map(([month, sessions]) => (
            <section key={month} aria-label={month}>
              <h3 className="sticky top-[var(--header-height)] z-10 bg-porcelain/95 py-3 text-[0.7rem] font-semibold uppercase tracking-[0.16em] text-teal backdrop-blur-[2px]">
                {month}
              </h3>
              {sessions.map((session) => (
                <ScheduleRow key={session.id} session={session} />
              ))}
            </section>
          ))
        ) : (
          visible.map((session) => <ScheduleRow key={session.id} session={session} />)
        )}
      </div>

      {visible.length > 0 ? (
        <p className="numeric mt-5 text-sm text-ink-muted">
          {visible.length} {visible.length === 1 ? 'Termin' : 'Termine'} · Alle Angaben ohne Gewähr,
          Änderungen werden hier veröffentlicht.
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

function EmptyState({ filtered, onReset }: { filtered: boolean; onReset: () => void }) {
  return (
    <div className="py-14">
      <h3 className="font-display text-2xl leading-tight">
        {filtered ? 'Zu dieser Auswahl gibt es gerade keinen Termin.' : 'Zurzeit ist kein Termin veröffentlicht.'}
      </h3>
      <p className="mt-3 max-w-[52ch] leading-relaxed text-ink-muted">
        Neue Termine erscheinen hier, sobald die Schulleitung sie freigibt. Fragen Sie nach dem
        nächsten geplanten Kurs — Sie bekommen eine persönliche Antwort mit einem Datum.
      </p>
      <div className="mt-6 flex flex-wrap gap-3">
        <a
          href="#anfrage"
          className="inline-flex min-h-11 items-center rounded-full bg-teal px-6 text-sm font-semibold text-paper transition-colors duration-150 hover:bg-teal-deep"
        >
          Nach dem nächsten Termin fragen
        </a>
        {filtered ? (
          <button
            type="button"
            onClick={onReset}
            className="inline-flex min-h-11 items-center rounded-full border border-ink/20 px-6 text-sm font-semibold transition-colors duration-150 hover:border-teal hover:text-teal"
          >
            Alle Termine zeigen
          </button>
        ) : null}
      </div>
    </div>
  );
}
