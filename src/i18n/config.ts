export const LOCALES = ['de', 'th'] as const;
export type Locale = (typeof LOCALES)[number];

export const DEFAULT_LOCALE: Locale = 'de';

/** A string that exists in both languages. */
export type LocalizedText = Readonly<Record<Locale, string>>;
export type LocalizedList = Readonly<Record<Locale, readonly string[]>>;

export function pick(text: LocalizedText, locale: Locale): string {
  return text[locale];
}

export function pickList(list: LocalizedList, locale: Locale): readonly string[] {
  return list[locale];
}

export const LOCALE_PATH: Record<Locale, string> = {
  de: '/',
  th: '/th',
};

export const HTML_LANG: Record<Locale, string> = {
  de: 'de',
  th: 'th',
};

export const LOCALE_LABEL: Record<Locale, string> = {
  de: 'DE',
  th: 'ไทย',
};

/** Anchor ids stay identical across languages so links survive a language switch. */
export const SECTION_IDS = {
  finder: 'kursfinder',
  schedule: 'termine',
  catalog: 'kurse',
  featured: 'beispielkurs',
  learn: 'lernen',
  outcomes: 'danach',
  school: 'schule',
  evidence: 'belege',
  contact: 'anfrage',
  trust: 'vertrauen',
} as const;
