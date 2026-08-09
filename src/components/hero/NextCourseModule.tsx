import { AvailabilityBadge } from '@/components/ui/Availability';
import type { UiDictionary } from '@/i18n/ui';
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
  t,
}: {
  session?: SessionView;
  syncedAtLabel: string;
  stale: boolean;
  t: UiDictionary;
}) {
  if (!session) {
    return (
      <div className="border-t border-hairline bg-paper/95 p-6 backdrop-blur-[2px]">
        <p className="kicker">{t.nextCourse.label}</p>
        <p className="mt-3 font-display text-2xl leading-tight">{t.nextCourse.emptyTitle}</p>
        <p className="mt-2 text-sm text-ink-muted">{t.nextCourse.emptyBody}</p>
        <a
          href="#anfrage"
          className="mt-4 inline-block text-sm font-semibold text-teal underline decoration-teal/30 underline-offset-4"
        >
          {t.nextCourse.emptyCta}
        </a>
      </div>
    );
  }

  return (
    <div className="border-t border-hairline bg-paper/95 p-6 backdrop-blur-[2px] sm:p-7">
      <div className="flex items-center justify-between gap-4">
        <p className="kicker">{t.nextCourse.label}</p>
        <AvailabilityBadge status={session.status} label={session.availabilityLabel} />
      </div>

      <p className="mt-4 font-display text-[1.75rem] leading-[1.1] sm:text-3xl">
        {session.programTitle}
      </p>

      <dl className="numeric mt-4 grid grid-cols-2 gap-x-6 gap-y-3 text-sm">
        <div>
          <dt className="text-[0.7rem] uppercase tracking-[0.12em] text-ink-muted">
            {t.nextCourse.date}
          </dt>
          <dd className="mt-0.5 font-medium">
            {session.weekdayLabel}, {session.dateLabel}
          </dd>
        </div>
        <div>
          <dt className="text-[0.7rem] uppercase tracking-[0.12em] text-ink-muted">
            {t.nextCourse.time}
          </dt>
          <dd className="mt-0.5 font-medium">
            {session.timeLabel} {t.nextCourse.clock}
          </dd>
        </div>
        <div>
          <dt className="text-[0.7rem] uppercase tracking-[0.12em] text-ink-muted">
            {t.nextCourse.language}
          </dt>
          <dd className="mt-0.5 font-medium">{session.languageLabel}</dd>
        </div>
        <div>
          <dt className="text-[0.7rem] uppercase tracking-[0.12em] text-ink-muted">
            {t.nextCourse.price}
          </dt>
          <dd className="mt-0.5 font-medium">{session.priceLabel}</dd>
        </div>
      </dl>

      <div className="mt-5 flex flex-wrap items-center gap-x-5 gap-y-2">
        <a
          href={`#anfrage?kurs=${session.programSlug}`}
          className="text-sm font-semibold text-teal underline decoration-teal/30 underline-offset-4 transition-colors duration-150 hover:text-teal-deep"
        >
          {isBookable(session.status) ? t.nextCourse.request : t.nextCourse.waitlist}
        </a>
        <p className="numeric text-xs text-ink-muted">
          {stale ? t.nextCourse.lastConfirmed : t.nextCourse.updated} {syncedAtLabel}{' '}
          {t.nextCourse.clock}
        </p>
      </div>
    </div>
  );
}
