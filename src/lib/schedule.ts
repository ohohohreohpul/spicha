import { PROGRAM_BY_ID } from '@/data/programs';
import { SCHOOL } from '@/data/school';
import { SESSIONS } from '@/data/sessions';
import { DEFAULT_LOCALE, type Locale } from '@/i18n/config';
import type {
  AvailabilityStatus,
  Language,
  SchedulePayload,
  Session,
  SessionView,
} from '@/lib/types';

/** Thai schedules read more clearly with Gregorian years next to the German page. */
const INTL_LOCALE: Record<Locale, string> = {
  de: 'de-DE',
  th: 'th-TH-u-ca-gregory',
};

const TIME_ZONE = 'Europe/Berlin';

/** A schedule older than this is shown with a "last confirmed" warning instead of as live. */
const STALE_AFTER_MS = 1000 * 60 * 60 * 24;

type Formatters = {
  weekday: Intl.DateTimeFormat;
  day: Intl.DateTimeFormat;
  month: Intl.DateTimeFormat;
  date: Intl.DateTimeFormat;
  time: Intl.DateTimeFormat;
  stamp: Intl.DateTimeFormat;
  price: Intl.NumberFormat;
};

const FORMATTER_CACHE = new Map<Locale, Formatters>();

function formatters(locale: Locale): Formatters {
  const cached = FORMATTER_CACHE.get(locale);
  if (cached) return cached;

  const tag = INTL_LOCALE[locale];
  const made: Formatters = {
    weekday: new Intl.DateTimeFormat(tag, {
      weekday: 'long',
      timeZone: TIME_ZONE,
    }),
    day: new Intl.DateTimeFormat(tag, { day: '2-digit', timeZone: TIME_ZONE }),
    month: new Intl.DateTimeFormat(tag, {
      month: 'short',
      timeZone: TIME_ZONE,
    }),
    date: new Intl.DateTimeFormat(tag, {
      day: 'numeric',
      month: 'long',
      year: 'numeric',
      timeZone: TIME_ZONE,
    }),
    time: new Intl.DateTimeFormat(tag, {
      hour: '2-digit',
      minute: '2-digit',
      hourCycle: 'h23',
      timeZone: TIME_ZONE,
    }),
    stamp: new Intl.DateTimeFormat(tag, {
      day: '2-digit',
      month: '2-digit',
      hour: '2-digit',
      minute: '2-digit',
      hourCycle: 'h23',
      timeZone: TIME_ZONE,
    }),
    price: new Intl.NumberFormat(tag, {
      style: 'currency',
      currency: 'EUR',
      maximumFractionDigits: 0,
    }),
  };

  FORMATTER_CACHE.set(locale, made);
  return made;
}

const LANGUAGE_LABEL: Record<Language, Record<Locale, string>> = {
  de: { de: 'Deutsch', th: 'ภาษาเยอรมัน' },
  th: { de: 'ไทย', th: 'ภาษาไทย' },
  // Client instruction (2026-08): no mixed scripts on the German page —
  // Thai script stays on the Thai page, German stays German.
  'de-th': { de: 'Deutsch und Thailändisch', th: 'ไทยและเยอรมัน' },
};

export const AVAILABILITY_LABEL: Record<AvailabilityStatus, Record<Locale, string>> = {
  offen: { de: 'Anmeldung offen', th: 'เปิดรับสมัคร' },
  'plaetze-frei': { de: 'Plätze frei', th: 'ยังมีที่นั่ง' },
  'wenige-plaetze': { de: 'Wenige Plätze', th: 'เหลือไม่กี่ที่' },
  'letzter-platz': { de: 'Letzter Platz', th: 'เหลือที่สุดท้าย' },
  ausgebucht: { de: 'Ausgebucht', th: 'เต็มแล้ว' },
  warteliste: { de: 'Warteliste', th: 'รับรายชื่อรอคิว' },
  'termin-folgt': { de: 'Termin folgt', th: 'รอประกาศวันที่' },
  abgesagt: { de: 'Abgesagt', th: 'ยกเลิกรอบนี้' },
};

/** Urgency tone. Never the only carrier of meaning — always paired with the label above. */
export const AVAILABILITY_TONE: Record<AvailabilityStatus, 'open' | 'limited' | 'closed'> = {
  offen: 'open',
  'plaetze-frei': 'open',
  'wenige-plaetze': 'limited',
  'letzter-platz': 'limited',
  ausgebucht: 'closed',
  warteliste: 'limited',
  'termin-folgt': 'closed',
  abgesagt: 'closed',
};

export function isBookable(status: AvailabilityStatus): boolean {
  return (
    status === 'offen' ||
    status === 'plaetze-frei' ||
    status === 'wenige-plaetze' ||
    status === 'letzter-platz'
  );
}

function availabilityLabel(session: Session, locale: Locale): string {
  if (session.status === 'wenige-plaetze' && session.placesRemaining > 0) {
    return locale === 'de'
      ? `Noch ${session.placesRemaining} Plätze`
      : `เหลือ ${session.placesRemaining} ที่`;
  }
  return AVAILABILITY_LABEL[session.status][locale];
}

function languageLabel(languages: readonly Language[], locale: Locale): string {
  if (languages.length > 1) return LANGUAGE_LABEL['de-th'][locale];
  return LANGUAGE_LABEL[languages[0] ?? 'de'][locale];
}

function toView(session: Session, locale: Locale): SessionView | null {
  const program = PROGRAM_BY_ID.get(session.programId);
  if (!program) return null;

  const fmt = formatters(locale);
  const start = new Date(session.startIso);
  const end = new Date(session.endIso);
  const multiDay = fmt.date.format(start) !== fmt.date.format(end);
  const priceNote = program.priceNote ? ` ${program.priceNote[locale]}` : '';

  return {
    ...session,
    note: session.note?.[locale],
    programTitle: program.title[locale],
    programSlug: program.slug,
    category: program.category,
    bodyAreas: program.bodyAreas,
    weekdayLabel: fmt.weekday.format(start),
    dayLabel: fmt.day.format(start),
    // Thai short months are dotted twice ("ม.ค."), and String.replace only
    // strips the first — take all of them out.
    monthLabel: fmt.month.format(start).replaceAll('.', ''),
    dateLabel: multiDay
      ? `${fmt.date.format(start)} – ${fmt.date.format(end)}`
      : fmt.date.format(start),
    // Multi-day courses run the school's standard teaching hours every day;
    // stitching day 1's start to the last day's end would misstate that if
    // the last day ever ends earlier (e.g. an exam afternoon).
    timeLabel: multiDay
      ? `${SCHOOL.courseDayStart}–${SCHOOL.courseDayEnd}`
      : `${fmt.time.format(start)}–${fmt.time.format(end)}`,
    priceLabel: `${fmt.price.format(program.price)}${priceNote}`,
    languageLabel: languageLabel(session.languages, locale),
    availabilityLabel: availabilityLabel(session, locale),
  };
}

/**
 * Builds the public schedule payload. All display strings are produced here, on the
 * server, so the client never re-formats dates and hydration stays stable.
 */
export function getSchedule(
  locale: Locale = DEFAULT_LOCALE,
  now: Date = new Date(),
): SchedulePayload {
  const cutoff = now.getTime();

  const sessions = SESSIONS.filter((s) => new Date(s.endIso).getTime() >= cutoff)
    .map((s) => toView(s, locale))
    .filter((s): s is SessionView => s !== null)
    .sort((a, b) => new Date(a.startIso).getTime() - new Date(b.startIso).getTime());

  // In production this timestamp comes from the calendar sync service.
  const syncedAt = new Date(cutoff - 1000 * 60 * 12);

  return {
    sessions,
    syncedAtIso: syncedAt.toISOString(),
    syncedAtLabel: formatters(locale).stamp.format(syncedAt),
    stale: cutoff - syncedAt.getTime() > STALE_AFTER_MS,
  };
}

export function getNextSession(payload: SchedulePayload): SessionView | undefined {
  return payload.sessions.find((s) => isBookable(s.status));
}

export function formatPrice(value: number, locale: Locale = DEFAULT_LOCALE): string {
  return formatters(locale).price.format(value);
}
