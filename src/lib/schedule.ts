import { PROGRAM_BY_ID } from '@/data/programs';
import { SESSIONS } from '@/data/sessions';
import type {
  AvailabilityStatus,
  Language,
  SchedulePayload,
  Session,
  SessionView,
} from '@/lib/types';

const LOCALE = 'de-DE';
const TIME_ZONE = 'Europe/Berlin';

/** A schedule older than this is shown with a "last confirmed" warning instead of as live. */
const STALE_AFTER_MS = 1000 * 60 * 60 * 24;

const weekdayFmt = new Intl.DateTimeFormat(LOCALE, { weekday: 'long', timeZone: TIME_ZONE });
const dayFmt = new Intl.DateTimeFormat(LOCALE, { day: '2-digit', timeZone: TIME_ZONE });
const monthFmt = new Intl.DateTimeFormat(LOCALE, { month: 'short', timeZone: TIME_ZONE });
const dateFmt = new Intl.DateTimeFormat(LOCALE, {
  day: 'numeric',
  month: 'long',
  year: 'numeric',
  timeZone: TIME_ZONE,
});
const timeFmt = new Intl.DateTimeFormat(LOCALE, {
  hour: '2-digit',
  minute: '2-digit',
  timeZone: TIME_ZONE,
});
const stampFmt = new Intl.DateTimeFormat(LOCALE, {
  day: '2-digit',
  month: '2-digit',
  hour: '2-digit',
  minute: '2-digit',
  timeZone: TIME_ZONE,
});
const priceFmt = new Intl.NumberFormat(LOCALE, {
  style: 'currency',
  currency: 'EUR',
  maximumFractionDigits: 0,
});

const LANGUAGE_LABEL: Record<Language, string> = {
  de: 'Deutsch',
  th: 'ไทย',
  'de-th': 'Deutsch und ไทย',
};

export const AVAILABILITY_LABEL: Record<AvailabilityStatus, string> = {
  offen: 'Anmeldung offen',
  'plaetze-frei': 'Plätze frei',
  'wenige-plaetze': 'Wenige Plätze',
  'letzter-platz': 'Letzter Platz',
  ausgebucht: 'Ausgebucht',
  warteliste: 'Warteliste',
  'termin-folgt': 'Termin folgt',
  abgesagt: 'Abgesagt',
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
  return status === 'offen' || status === 'plaetze-frei' || status === 'wenige-plaetze' || status === 'letzter-platz';
}

function availabilityLabel(session: Session): string {
  if (session.status === 'wenige-plaetze' && session.placesRemaining > 0) {
    return `Noch ${session.placesRemaining} Plätze`;
  }
  return AVAILABILITY_LABEL[session.status];
}

function languageLabel(languages: readonly Language[]): string {
  if (languages.length > 1) return 'Deutsch und ไทย';
  return LANGUAGE_LABEL[languages[0] ?? 'de'];
}

function toView(session: Session): SessionView | null {
  const program = PROGRAM_BY_ID.get(session.programId);
  if (!program) return null;

  const start = new Date(session.startIso);
  const end = new Date(session.endIso);
  const multiDay = dateFmt.format(start) !== dateFmt.format(end);

  return {
    ...session,
    programTitle: program.title,
    programSlug: program.slug,
    category: program.category,
    bodyAreas: program.bodyAreas,
    weekdayLabel: weekdayFmt.format(start),
    dayLabel: dayFmt.format(start),
    monthLabel: monthFmt.format(start).replace('.', ''),
    dateLabel: multiDay ? `${dateFmt.format(start)} – ${dateFmt.format(end)}` : dateFmt.format(start),
    timeLabel: `${timeFmt.format(start)}–${timeFmt.format(end)} Uhr`,
    priceLabel: `${priceFmt.format(program.price)}${program.priceNote ? ` ${program.priceNote}` : ''}`,
    languageLabel: languageLabel(session.languages),
    availabilityLabel: availabilityLabel(session),
  };
}

/**
 * Builds the public schedule payload. All display strings are produced here, on the
 * server, so the client never re-formats dates and hydration stays stable.
 */
export function getSchedule(now: Date = new Date()): SchedulePayload {
  const cutoff = now.getTime();

  const sessions = SESSIONS.filter((s) => new Date(s.endIso).getTime() >= cutoff)
    .map(toView)
    .filter((s): s is SessionView => s !== null)
    .sort((a, b) => new Date(a.startIso).getTime() - new Date(b.startIso).getTime());

  // In production this timestamp comes from the calendar sync service.
  const syncedAt = new Date(cutoff - 1000 * 60 * 12);

  return {
    sessions,
    syncedAtIso: syncedAt.toISOString(),
    syncedAtLabel: stampFmt.format(syncedAt),
    stale: cutoff - syncedAt.getTime() > STALE_AFTER_MS,
  };
}

export function getNextSession(payload: SchedulePayload): SessionView | undefined {
  return payload.sessions.find((s) => isBookable(s.status));
}

export function formatPrice(value: number): string {
  return priceFmt.format(value);
}
