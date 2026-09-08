import type { LocalizedList, LocalizedText } from '@/i18n/config';

export type BodyArea =
  | 'kopf-gesicht'
  | 'nacken-schulter'
  | 'ruecken'
  | 'arme-beine'
  | 'ganzkoerper'
  | 'fuesse'
  | 'haende-naegel'
  | 'praxis';

export type ProgramCategory = 'kurzkurs' | 'ausbildung' | 'betrieb';

/**
 * Why the school highlights a course (client feedback 2026-09): nothing is
 * promoted without a stated reason. `einstieg` — the recommended first step
 * for beginners; `neu` — new to the programme; `beliebt` — most-booked.
 */
export type ProgramFlag = 'einstieg' | 'neu' | 'beliebt';

export type Language = 'de' | 'th' | 'de-th';

export type AvailabilityStatus =
  | 'offen'
  | 'plaetze-frei'
  | 'wenige-plaetze'
  | 'letzter-platz'
  | 'ausgebucht'
  | 'warteliste'
  | 'termin-folgt'
  | 'abgesagt';

export type Program = {
  readonly id: string;
  readonly slug: string;
  readonly title: LocalizedText;
  readonly subtitle: LocalizedText;
  readonly category: ProgramCategory;
  readonly flag?: ProgramFlag;
  readonly bodyAreas: readonly BodyArea[];
  readonly price: number;
  readonly priceNote?: LocalizedText;
  readonly durationDays: number;
  readonly durationLabel: LocalizedText;
  readonly languages: readonly Language[];
  readonly audience: LocalizedText;
  readonly outcomes?: LocalizedList;
  readonly curriculum?: LocalizedList;
  readonly prerequisites: LocalizedText;
  readonly certificate: LocalizedText;
  readonly included?: LocalizedList;
  readonly faq?: readonly {
    readonly q: LocalizedText;
    readonly a: LocalizedText;
  }[];
};

export type Session = {
  readonly id: string;
  readonly programId: string;
  /** Google Calendar event id — the key that distinguishes an edit from a new session. */
  readonly calendarEventId: string;
  readonly startIso: string;
  readonly endIso: string;
  readonly location: string;
  readonly languages: readonly Language[];
  readonly capacity: number;
  readonly placesRemaining: number;
  readonly status: AvailabilityStatus;
  readonly note?: LocalizedText;
  readonly updatedIso?: string;
};

/** Server-formatted session — all display strings are produced once, on the server. */
export type SessionView = Omit<Session, 'note'> & {
  readonly note?: string;
  readonly programTitle: string;
  readonly programSlug: string;
  readonly category: ProgramCategory;
  readonly bodyAreas: readonly BodyArea[];
  readonly weekdayLabel: string;
  readonly dayLabel: string;
  readonly monthLabel: string;
  readonly dateLabel: string;
  readonly timeLabel: string;
  readonly priceLabel: string;
  readonly languageLabel: string;
  readonly availabilityLabel: string;
};

export type SchedulePayload = {
  readonly sessions: readonly SessionView[];
  readonly syncedAtIso: string;
  readonly syncedAtLabel: string;
  readonly stale: boolean;
};
