import type { ComponentPropsWithoutRef, ReactNode } from 'react';

/**
 * Buttons compress under the pointer rather than sinking downward — a press
 * should read as the surface taking load, which is closer to what the whole
 * page is about than a one-pixel drop.
 */

const BASE =
  'group inline-flex items-center justify-center gap-2.5 rounded-full text-sm font-semibold tracking-[0.01em] transition-[transform,background-color,color,border-color,box-shadow] duration-[var(--dur-1)] ease-[var(--ease-out-quad)] active:scale-[0.98] disabled:cursor-not-allowed disabled:opacity-55 disabled:active:scale-100';

const VARIANT = {
  primary:
    'bg-teal text-paper px-7 py-3.5 hover:bg-teal-deep shadow-[0_8px_24px_-14px_rgba(0,75,79,0.55)] hover:shadow-[0_14px_32px_-14px_rgba(0,75,79,0.65)]',
  secondary:
    'border border-ink/20 bg-transparent text-ink px-7 py-3.5 hover:border-teal hover:text-teal',
  ghost: 'text-teal px-2 py-1 hover:text-teal-deep underline underline-offset-4 decoration-teal/30',
  quiet:
    'border border-hairline bg-paper text-ink px-4 py-2 text-xs hover:border-teal hover:text-teal',
} as const;

type Variant = keyof typeof VARIANT;

export function Button({
  variant = 'primary',
  className = '',
  children,
  ...props
}: ComponentPropsWithoutRef<'button'> & {
  variant?: Variant;
  children: ReactNode;
}) {
  return (
    <button className={`${BASE} ${VARIANT[variant]} ${className}`} {...props}>
      {children}
    </button>
  );
}

export function LinkButton({
  variant = 'primary',
  className = '',
  children,
  ...props
}: ComponentPropsWithoutRef<'a'> & { variant?: Variant; children: ReactNode }) {
  return (
    <a className={`${BASE} ${VARIANT[variant]} ${className}`} {...props}>
      {children}
    </a>
  );
}
