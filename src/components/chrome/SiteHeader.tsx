'use client';

import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';
import { SCHOOL } from '@/data/school';

const NAV = [
  { href: '#kursfinder', label: 'Kurs finden' },
  { href: '#termine', label: 'Termine' },
  { href: '#kurse', label: 'Kurse' },
  { href: '#schule', label: 'Schule' },
  { href: '#anfrage', label: 'Kontakt' },
] as const;

export function SiteHeader() {
  const [lifted, setLifted] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const sentinelRef = useRef<HTMLDivElement>(null);

  // IntersectionObserver sentinel instead of a scroll listener.
  useEffect(() => {
    const node = sentinelRef.current;
    if (!node) return;
    const observer = new IntersectionObserver(([entry]) => setLifted(!entry.isIntersecting), {
      threshold: 0,
    });
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!menuOpen) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setMenuOpen(false);
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [menuOpen]);

  return (
    <>
      <div ref={sentinelRef} aria-hidden className="absolute top-6 h-px w-full" />

      <header
        className="fixed inset-x-0 top-0 z-50 transition-[background-color,border-color,backdrop-filter] duration-[var(--dur-3)] ease-[var(--ease-out-quart)]"
        style={{
          backgroundColor: lifted ? 'rgba(246,243,236,0.92)' : 'transparent',
          borderBottom: `1px solid ${lifted ? 'var(--color-hairline)' : 'transparent'}`,
          backdropFilter: lifted ? 'blur(12px)' : 'none',
        }}
      >
        <div className="shell flex h-[var(--header-height)] items-center justify-between gap-6">
          <a href="#top" className="flex items-center gap-3">
            <Image
              src="/logo/spicha-logo.png"
              alt="Kosmetikschule Picha"
              width={1200}
              height={658}
              priority
              className="h-9 w-auto sm:h-10"
            />
            <span className="hidden border-l border-hairline pl-3 text-[0.65rem] font-semibold uppercase leading-tight tracking-[0.14em] text-ink-muted sm:inline">
              Anerkannte
              <br />
              Kosmetikschule
            </span>
          </a>

          <nav aria-label="Hauptnavigation" className="hidden items-center gap-7 md:flex">
            {NAV.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="relative text-sm font-medium text-ink transition-colors duration-150 hover:text-teal"
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <div
              className="hidden items-center gap-1 rounded-full border border-hairline bg-porcelain/75 px-1 py-1 text-xs font-semibold backdrop-blur-[3px] lg:flex"
              role="group"
              aria-label="Sprache wählen"
            >
              <span className="rounded-full bg-ink px-2.5 py-1 text-paper" aria-current="true">
                DE
              </span>
              <button
                type="button"
                className="thai rounded-full px-2.5 py-1 text-ink-muted transition-colors duration-150 hover:text-teal"
                title="Thailändische Fassung folgt"
                lang="th"
              >
                ไทย
              </button>
            </div>

            <a
              href={SCHOOL.phoneHref}
              className="hidden rounded-full bg-teal px-5 py-2.5 text-sm font-semibold text-paper transition-colors duration-150 hover:bg-teal-deep sm:inline-block"
            >
              {SCHOOL.phone}
            </a>

            <button
              type="button"
              onClick={() => setMenuOpen((open) => !open)}
              aria-expanded={menuOpen}
              aria-controls="mobile-nav"
              className="grid h-11 w-11 place-items-center rounded-full border border-ink/15 md:hidden"
            >
              <span className="sr-only">{menuOpen ? 'Menü schließen' : 'Menü öffnen'}</span>
              <svg width="18" height="12" viewBox="0 0 18 12" aria-hidden>
                <path
                  d={menuOpen ? 'M2 2l14 8M2 10L16 2' : 'M0 1h18M0 6h18M0 11h12'}
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                />
              </svg>
            </button>
          </div>
        </div>

        <div
          id="mobile-nav"
          hidden={!menuOpen}
          className="border-t border-hairline bg-porcelain md:hidden"
        >
          <nav aria-label="Navigation" className="shell flex flex-col py-2">
            {NAV.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setMenuOpen(false)}
                className="border-b border-hairline/60 py-4 text-base font-medium last:border-0"
              >
                {item.label}
              </a>
            ))}
            <a href={SCHOOL.phoneHref} className="py-4 text-base font-semibold text-teal">
              {SCHOOL.phone} · {SCHOOL.contactPerson}
            </a>
          </nav>
        </div>
      </header>
    </>
  );
}
