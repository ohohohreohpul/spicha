import { AvailabilityBadge } from '@/components/ui/Availability';
import { Button } from '@/components/ui/hero-08-utils/button';
import type { Locale } from '@/i18n/config';
import type { UiDictionary } from '@/i18n/ui';
import { isBookable } from '@/lib/schedule';
import type { SessionView } from '@/lib/types';

/**
 * One session as a quiet list row: date on the left, facts in the middle,
 * price and action on the right.
 *
 * Only what varies per session is rendered per row (client feedback 2026-08):
 * the shared course location lives once above the list, the bilingual
 * teaching language is the default and only single-language sessions say so.
 */
export function ScheduleRow({
  session,
  t,
  locale,
}: {
  session: SessionView;
  t: UiDictionary;
  locale: Locale;
}) {
  const cancelled = session.status === 'abgesagt';
  // Bilingual is the house default; a session flagging one language is the
  // exception worth a tick.
  const singleLanguage = session.languages.length === 1;

  return (
    <article
      className={`grid grid-cols-[3rem_minmax(0,1fr)] gap-x-5 gap-y-4 border-b border-border py-7 md:grid-cols-[4rem_minmax(0,1fr)_auto] md:gap-x-8 ${
        cancelled ? 'opacity-60' : ''
      }`}
    >
      <div className="numeric text-center">
        <div className="font-serif text-2xl leading-none">{session.dayLabel}</div>
        <div className="mt-1 text-[0.7rem] font-semibold uppercase tracking-[0.14em] text-muted-foreground">
          {session.monthLabel}
        </div>
      </div>

      <div className="min-w-0">
        <div className="flex flex-wrap items-center gap-x-3 gap-y-2">
          <h3
            className={`font-serif text-xl leading-tight tracking-tight ${
              cancelled ? 'line-through decoration-pressure/60 decoration-2' : ''
            }`}
          >
            {session.programTitle}
          </h3>
          <AvailabilityBadge status={session.status} label={session.availabilityLabel} />
          {session.updatedIso ? (
            <span className="rounded-full border border-gold/40 px-2 py-0.5 text-[0.65rem] font-semibold uppercase tracking-[0.1em] text-gold">
              {t.schedule.updatedBadge}
            </span>
          ) : null}
        </div>

        {/* One meta line: date and time. Weekday name carries the calendar
            reading; no separators, no language tick for the bilingual default
            (density feedback 2026-09-08). */}
        <dl className="numeric mt-2 flex flex-wrap items-center gap-x-3 gap-y-1 text-sm text-muted-foreground">
          <div className="flex gap-1.5">
            <dt className="sr-only">{t.nextCourse.date}</dt>
            <dd>
              {session.weekdayLabel}, {session.dateLabel}
            </dd>
          </div>
          <div>
            <dt className="sr-only">{t.nextCourse.time}</dt>
            <dd>
              {session.timeLabel} {t.nextCourse.clock}
            </dd>
          </div>
          {singleLanguage ? (
            <div>
              <dt className="sr-only">{t.nextCourse.language}</dt>
              <dd className={locale === 'th' ? 'thai' : undefined}>{session.languageLabel}</dd>
            </div>
          ) : null}
        </dl>

        {session.note ? (
          <p className="mt-2 max-w-[60ch] border-l-2 border-gold/50 pl-3 text-sm text-muted-foreground">
            {session.note}
          </p>
        ) : null}
      </div>

      <div className="col-start-2 flex flex-col items-start gap-2 md:col-start-3 md:items-end md:self-center">
        {cancelled ? (
          <span className="text-sm text-muted-foreground">{t.schedule.noSeat}</span>
        ) : (
          <>
            <p className="numeric text-sm font-semibold">{session.priceLabel}</p>
            <Button asChild variant="outline" size="sm">
              <a href={`#anfrage?kurs=${session.programSlug}&termin=${session.id}`}>
                {isBookable(session.status) ? t.schedule.request : t.schedule.waitlist}
              </a>
            </Button>
          </>
        )}
      </div>
    </article>
  );
}
