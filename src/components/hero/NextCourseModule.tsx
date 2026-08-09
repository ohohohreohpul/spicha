import { AvailabilityBadge } from '@/components/ui/Availability';
import { isBookable } from '@/lib/schedule';
import type { SessionView } from '@/lib/types';

/**
 * Live preview of the next bookable course. Reads from the same schedule
 * payload as section 04 — never a second, drifting source of truth.
 */
export function NextCourseModule({
  session,
  syncedAtLabel,
  stale,
}: {
  session?: SessionView;
  syncedAtLabel: string;
  stale: boolean;
}) {
  if (!session) {
    return (
      <div className="border-t border-hairline bg-paper/95 p-6 backdrop-blur-[2px]">
        <p className="kicker">Nächster Kurs</p>
        <p className="mt-3 font-display text-2xl leading-tight">
          Zurzeit ist kein Termin veröffentlicht.
        </p>
        <p className="mt-2 text-sm text-ink-muted">
          Fragen Sie nach dem nächsten geplanten Kurs — wir melden uns mit einem Datum.
        </p>
        <a
          href="#anfrage"
          className="mt-4 inline-block text-sm font-semibold text-teal underline decoration-teal/30 underline-offset-4"
        >
          Nach dem nächsten Termin fragen
        </a>
      </div>
    );
  }

  return (
    <div className="border-t border-hairline bg-paper/95 p-6 backdrop-blur-[2px] sm:p-7">
      <div className="flex items-center justify-between gap-4">
        <p className="kicker">Nächster Kurs</p>
        <AvailabilityBadge status={session.status} label={session.availabilityLabel} />
      </div>

      <p className="mt-4 font-display text-[1.75rem] leading-[1.05] sm:text-3xl">
        {session.programTitle}
      </p>

      <dl className="numeric mt-4 grid grid-cols-2 gap-x-6 gap-y-3 text-sm">
        <div>
          <dt className="text-[0.7rem] uppercase tracking-[0.12em] text-ink-muted">Datum</dt>
          <dd className="mt-0.5 font-medium">
            {session.weekdayLabel}, {session.dateLabel}
          </dd>
        </div>
        <div>
          <dt className="text-[0.7rem] uppercase tracking-[0.12em] text-ink-muted">Zeit</dt>
          <dd className="mt-0.5 font-medium">{session.timeLabel}</dd>
        </div>
        <div>
          <dt className="text-[0.7rem] uppercase tracking-[0.12em] text-ink-muted">Sprache</dt>
          <dd className="mt-0.5 font-medium">{session.languageLabel}</dd>
        </div>
        <div>
          <dt className="text-[0.7rem] uppercase tracking-[0.12em] text-ink-muted">Gebühr</dt>
          <dd className="mt-0.5 font-medium">{session.priceLabel}</dd>
        </div>
      </dl>

      <div className="mt-5 flex flex-wrap items-center gap-x-5 gap-y-2">
        <a
          href={`#anfrage?kurs=${session.programSlug}`}
          className="text-sm font-semibold text-teal underline decoration-teal/30 underline-offset-4 transition-colors duration-150 hover:text-teal-deep"
        >
          {isBookable(session.status) ? 'Platz anfragen' : 'Auf die Warteliste'}
        </a>
        <p className="numeric text-xs text-ink-muted">
          {stale ? 'Zuletzt bestätigt' : 'Aktualisiert'} {syncedAtLabel} Uhr
        </p>
      </div>
    </div>
  );
}
