import { AVAILABILITY_TONE } from '@/lib/schedule';
import type { AvailabilityStatus } from '@/lib/types';

const TONE_STYLE = {
  open: 'border-teal/25 bg-teal/8 text-teal-deep',
  limited: 'border-pressure/30 bg-pressure/8 text-pressure',
  closed: 'border-hairline bg-porcelain-deep text-ink-muted',
} as const;

/**
 * Status never relies on colour alone: each tone carries a distinct glyph
 * and always ships its own text label.
 */
function ToneMark({ tone }: { tone: keyof typeof TONE_STYLE }) {
  if (tone === 'open') {
    return <span aria-hidden className="h-1.5 w-1.5 rounded-full bg-current" />;
  }
  if (tone === 'limited') {
    return (
      <span
        aria-hidden
        className="h-0 w-0 border-x-[4px] border-b-[7px] border-x-transparent border-b-current"
      />
    );
  }
  return <span aria-hidden className="h-[2px] w-3 bg-current" />;
}

export function AvailabilityBadge({
  status,
  label,
  className = '',
}: {
  status: AvailabilityStatus;
  label: string;
  className?: string;
}) {
  const tone = AVAILABILITY_TONE[status];

  return (
    <span
      className={`inline-flex items-center gap-2 rounded-full border px-3 py-1 text-xs font-semibold tracking-wide ${TONE_STYLE[tone]} ${className}`}
    >
      <ToneMark tone={tone} />
      {label}
    </span>
  );
}
