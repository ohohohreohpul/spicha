import { AvailabilityBadge } from '@/components/ui/Availability';
import type { Locale } from '@/i18n/config';
import { fill, type UiDictionary } from '@/i18n/ui';
import { isBookable } from '@/lib/schedule';
import type { SessionView } from '@/lib/types';

/**
 * One session, presented as an editorial row rather than a boxed card:
 * date rail on the left, facts in the middle, action on the right.
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

  return (
    <article
      className={`group grid grid-cols-[3.5rem_minmax(0,1fr)] gap-x-5 gap-y-4 border-b border-hairline py-6 transition-colors duration-150 md:grid-cols-[4.5rem_minmax(0,1fr)_auto] md:gap-x-8 ${
        cancelled ? 'opacity-65' : 'hover:bg-paper/70'
      }`}
    >
      <div className="numeric text-center">
        <div className="font-display text-3xl leading-none">{session.dayLabel}</div>
        <div className="mt-1 text-[0.7rem] font-semibold uppercase tracking-[0.14em] text-ink-muted">
          {session.monthLabel}
        </div>
      </div>

      <div className="min-w-0">
        <div className="flex flex-wrap items-center gap-x-3 gap-y-2">
          <h3
            className={`font-display text-xl leading-tight md:text-2xl ${
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

        <dl className="numeric mt-3 flex flex-wrap items-center gap-x-5 gap-y-1.5 text-sm text-ink-muted">
          <div className="flex gap-1.5">
            <dt className="sr-only">{t.nextCourse.date}</dt>
            <dd>
              {session.weekdayLabel}, {session.dateLabel}
            </dd>
          </div>
          <span aria-hidden className="h-3 w-px bg-hairline" />
          <div>
            <dt className="sr-only">{t.nextCourse.time}</dt>
            <dd>
              {session.timeLabel} {t.nextCourse.clock}
            </dd>
          </div>
          <span aria-hidden className="h-3 w-px bg-hairline" />
          <div>
            <dt className="sr-only">{t.nextCourse.language}</dt>
            <dd className={locale === 'de' && session.languages.includes('th') ? 'thai' : undefined}>
              {session.languageLabel}
            </dd>
          </div>
          <span aria-hidden className="h-3 w-px bg-hairline" />
          <div>
            <dt className="sr-only">{t.nextCourse.price}</dt>
            <dd className="font-semibold text-ink">{session.priceLabel}</dd>
          </div>
        </dl>

        <p className="mt-2 text-sm text-ink-muted">{session.location}</p>

        {session.note ? (
          <p className="mt-2 max-w-[60ch] border-l-2 border-gold/50 pl-3 text-sm text-ink-muted">
            {session.note}
          </p>
        ) : null}

        {!cancelled && session.capacity > 0 ? (
          <p className="numeric mt-2 text-xs text-ink-muted">
            {fill(t.schedule.placesOf, {
              free: session.placesRemaining,
              total: session.capacity,
            })}
          </p>
        ) : null}
      </div>

      <div className="col-start-2 md:col-start-3 md:self-center">
        {cancelled ? (
          <span className="text-sm text-ink-muted">{t.schedule.noSeat}</span>
        ) : (
          <a
            href={`#anfrage?kurs=${session.programSlug}&termin=${session.id}`}
            className="inline-flex min-h-11 items-center rounded-full border border-ink/20 px-5 text-sm font-semibold transition-colors duration-150 hover:border-teal hover:bg-teal hover:text-paper"
          >
            {isBookable(session.status) ? t.schedule.request : t.schedule.waitlist}
          </a>
        )}
      </div>
    </article>
  );
}
