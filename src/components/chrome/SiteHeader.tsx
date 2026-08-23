'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';
import { SCHOOL } from '@/data/school';
import { LOCALES, LOCALE_LABEL, LOCALE_PATH, SECTION_IDS, type Locale } from '@/i18n/config';
import type { UiDictionary } from '@/i18n/ui';

export function SiteHeader({ t, locale }: { t: UiDictionary; locale: Locale }) {
  const [lifted, setLifted] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const sentinelRef = useRef<HTMLDivElement>(null);

  // Above the fold the header floats on the dark hero film; after the sentinel
  // it lands on porcelain and flips back to ink.
  const overFilm = !lifted;

  const nav = [
    { href: `#${SECTION_IDS.finder}`, label: t.nav.finder },
    { href: `#${SECTION_IDS.schedule}`, label: t.nav.schedule },
    { href: `#${SECTION_IDS.catalog}`, label: t.nav.catalog },
    { href: `#${SECTION_IDS.school}`, label: t.nav.school },
    { href: `#${SECTION_IDS.contact}`, label: t.nav.contact },
  ];

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
            <span
              className={`inline-flex transition-[background-color,padding] duration-[var(--dur-3)] ${
                overFilm ? 'rounded-md bg-porcelain px-3 py-2' : ''
              }`}
            >
              <Image
                src="/logo/spicha-logo.png"
                alt={SCHOOL.name}
                width={1200}
                height={658}
                priority
                className="h-8 w-auto sm:h-9"
              />
            </span>
            <span
              className={`hidden border-l pl-3 text-[0.65rem] font-semibold uppercase leading-tight tracking-[0.14em] sm:inline ${
                overFilm
                  ? 'border-porcelain/25 text-porcelain/70'
                  : 'border-hairline text-ink-muted'
              }`}
            >
              {t.nav.recognised}
              <br />
              {t.nav.school_}
            </span>
          </a>

          <nav aria-label={t.nav.main} className="hidden items-center gap-7 md:flex">
            {nav.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className={`relative text-sm font-medium transition-colors duration-150 ${
                  overFilm ? 'text-porcelain/85 hover:text-white' : 'text-ink hover:text-teal'
                }`}
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <div
              className={`hidden items-center gap-1 rounded-full border px-1 py-1 text-xs font-semibold backdrop-blur-[3px] lg:flex ${
                overFilm
                  ? 'border-porcelain/25 bg-ink/35 text-porcelain'
                  : 'border-hairline bg-porcelain/75'
              }`}
              role="group"
              aria-label={t.nav.chooseLanguage}
            >
              {LOCALES.map((code) =>
                code === locale ? (
                  <span
                    key={code}
                    aria-current="true"
                    className={`rounded-full px-2.5 py-1 ${
                      overFilm ? 'bg-porcelain text-ink' : 'bg-ink text-paper'
                    } ${code === 'th' ? 'thai' : ''}`}
                  >
                    {LOCALE_LABEL[code]}
                  </span>
                ) : (
                  <Link
                    key={code}
                    href={LOCALE_PATH[code]}
                    hrefLang={code}
                    className={`rounded-full px-2.5 py-1 transition-colors duration-150 ${
                      overFilm
                        ? 'text-porcelain/70 hover:text-white'
                        : 'text-ink-muted hover:text-teal'
                    } ${code === 'th' ? 'thai' : ''}`}
                  >
                    {LOCALE_LABEL[code]}
                  </Link>
                ),
              )}
            </div>

            <a
              href={SCHOOL.phoneHref}
              className={`numeric hidden rounded-full px-5 py-2.5 text-sm font-semibold transition-colors duration-150 sm:inline-block ${
                overFilm
                  ? 'bg-porcelain text-ink hover:bg-white'
                  : 'bg-teal text-paper hover:bg-teal-deep'
              }`}
            >
              {SCHOOL.phone}
            </a>

            <button
              type="button"
              onClick={() => setMenuOpen((open) => !open)}
              aria-expanded={menuOpen}
              aria-controls="mobile-nav"
              className={`grid h-11 w-11 place-items-center rounded-full border md:hidden ${
                overFilm ? 'border-porcelain/30 text-porcelain' : 'border-ink/15'
              }`}
            >
              <span className="sr-only">{menuOpen ? t.nav.closeMenu : t.nav.openMenu}</span>
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
          <nav aria-label={t.nav.main} className="shell flex flex-col py-2">
            {nav.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setMenuOpen(false)}
                className="border-b border-hairline/60 py-4 text-base font-medium"
              >
                {item.label}
              </a>
            ))}
            <a
              href={SCHOOL.phoneHref}
              className="border-b border-hairline/60 py-4 text-base font-semibold text-teal"
            >
              <span className="numeric">{SCHOOL.phone}</span> · {SCHOOL.contactPerson[locale]}
            </a>
            <div className="flex gap-2 py-4">
              {LOCALES.map((code) => (
                <Link
                  key={code}
                  href={LOCALE_PATH[code]}
                  hrefLang={code}
                  onClick={() => setMenuOpen(false)}
                  className={`min-h-11 rounded-full border px-5 text-sm font-semibold leading-[2.4] ${
                    code === locale ? 'border-teal bg-teal text-paper' : 'border-hairline text-ink'
                  } ${code === 'th' ? 'thai' : ''}`}
                >
                  {LOCALE_LABEL[code]}
                </Link>
              ))}
            </div>
          </nav>
        </div>
      </header>
    </>
  );
}
