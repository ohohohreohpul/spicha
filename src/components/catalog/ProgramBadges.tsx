import { requiresBasics } from '@/data/programs';
import type { Locale } from '@/i18n/config';
import type { UiDictionary } from '@/i18n/ui';
import type { Program, ProgramFlag } from '@/lib/types';

/**
 * Level badge — the answer to "darf ich das überhaupt?" at a glance
 * (client feedback 2026-09). Derived from data, never hand-set: kurzkurse
 * are Weiterbildung on top of basics, everything else starts at zero.
 * Teal dot = open door, ink dash = entry requirement.
 */
export function LevelBadge({ program, t }: { program: Program; t: UiDictionary }) {
  const open = !requiresBasics(program);
  return (
    <span className="inline-flex items-center gap-2 rounded-full border border-hairline bg-paper px-3 py-1 text-xs font-semibold">
      <span
        aria-hidden
        className={`h-1.5 w-1.5 rounded-full ${open ? 'bg-teal' : 'bg-ink'}`}
      />
      <span className={open ? 'text-teal' : 'text-ink-muted'}>
        {open ? t.wegweiser.levelOpen : t.wegweiser.levelBasics}
      </span>
    </span>
  );
}

const FLAG_STYLE: Record<ProgramFlag, string> = {
  einstieg: 'border-teal/40 bg-teal/10 text-teal-deep',
  neu: 'border-aqua/50 bg-aqua/15 text-teal-deep',
  beliebt: 'border-ink/25 bg-paper text-ink',
};

/**
 * Recommendation flag — the stated reason a course is pushed. Never
 * rendered without a `Program.flag` in the data; the labels are
 * per-locale dictionary entries so the claim travels with the badge.
 */
export function FlagRibbon({
  flag,
  t,
  locale,
}: {
  flag: ProgramFlag;
  t: UiDictionary;
  locale: Locale;
}) {
  return (
    <span
      className={`inline-flex items-center gap-2 rounded-full border px-3 py-1 text-[0.6875rem] font-semibold uppercase tracking-[0.1em] ${FLAG_STYLE[flag]} ${
        locale === 'th' ? 'normal-case tracking-normal' : ''
      }`}
    >
      <span aria-hidden className="h-1 w-3 bg-current opacity-60" />
      {t.wegweiser.flags[flag]}
    </span>
  );
}
