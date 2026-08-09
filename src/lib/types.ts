export type BodyArea =
  | 'kopf-gesicht'
  | 'nacken-schulter'
  | 'ruecken'
  | 'arme-beine'
  | 'ganzkoerper'
  | 'fuesse'
  | 'praxis';

export type ProgramCategory = 'kurzkurs' | 'ausbildung' | 'betrieb';

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
  readonly title: string;
  readonly titleThai?: string;
  readonly subtitle: string;
  readonly category: ProgramCategory;
  readonly bodyAreas: readonly BodyArea[];
  readonly price: number;
  readonly priceNote?: string;
  readonly durationDays: number;
  readonly durationLabel: string;
  readonly languages: readonly Language[];
  readonly audience: string;
  readonly outcomes?: readonly string[];
  readonly curriculum?: readonly string[];
  readonly prerequisites: string;
  readonly certificate: string;
  readonly included?: readonly string[];
  readonly faq?: readonly { readonly q: string; readonly a: string }[];
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
  readonly note?: string;
  readonly updatedIso?: string;
};

/** Server-formatted session — all display strings are produced once, on the server. */
export type SessionView = Session & {
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
