'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';
import { SCHOOL } from '@/data/school';
import { LOCALES, LOCALE_LABEL, LOCALE_PATH, SECTION_IDS, type Locale } from '@/i18n/config';
import type { UiDictionary } from '@/i18n/ui';

/**
 * Calm sticky header (2026-09 rebuild): always porcelain, one hairline,
 * no film-state theatrics. The mobile sheet keeps its contract — focus
 * moves in on open, returns on close, Escape works.
 */
export function SiteHeader({ t, locale }: { t: UiDictionary; locale: Locale }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleRef = useRef<HTMLButtonElement>(null);
  const mobileNavRef = useRef<HTMLDivElement>(null);

  const nav = [
    { href: `#${SECTION_IDS.orientation}`, label: t.nav.finder },
    { href: `#${SECTION_IDS.catalog}`, label: t.nav.catalog },
    { href: `#${SECTION_IDS.schedule}`, label: t.nav.schedule },
    { href: `#${SECTION_IDS.school}`, label: t.nav.school },
    { href: `#${SECTION_IDS.contact}`, label: t.nav.contact },
  ];

  useEffect(() => {
    if (!menuOpen) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setMenuOpen(false);
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [menuOpen]);

  // Focus follows the menu: into the first link on open, back to the toggle
  // on close — but only when focus is still inside the (now hidden) panel,
  // so a clicked link keeps the anchor navigation intact.
  useEffect(() => {
    if (menuOpen) {
      mobileNavRef.current?.querySelector('a')?.focus();
      return;
    }
    if (mobileNavRef.current?.contains(document.activeElement)) {
      toggleRef.current?.focus();
    }
  }, [menuOpen]);

  return (
    <header className="sticky inset-x-0 top-0 z-50 border-b border-hairline bg-background/90 backdrop-blur-sm">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-6 px-6">
        <a href="#top" className="flex items-center gap-3">
          <Image
            src="/logo/spicha-logo.png"
            alt={SCHOOL.name}
            width={1200}
            height={658}
            priority
            className="h-8 w-auto sm:h-9"
          />
          <span className="hidden border-l border-hairline pl-3 text-[0.65rem] font-semibold uppercase leading-tight tracking-[0.14em] text-ink-muted sm:inline">
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
              className="text-sm font-medium text-ink transition-colors duration-150 hover:text-teal"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <div
            className="hidden items-center gap-1 rounded-full border border-hairline px-1 py-1 text-xs font-semibold lg:flex"
            role="group"
            aria-label={t.nav.chooseLanguage}
          >
            {LOCALES.map((code) =>
              code === locale ? (
                <span
                  key={code}
                  aria-current="true"
                  className={`rounded-full bg-ink px-2.5 py-1 text-paper ${code === 'th' ? 'thai' : ''}`}
                >
                  {LOCALE_LABEL[code]}
                </span>
              ) : (
                <Link
                  key={code}
                  href={LOCALE_PATH[code]}
                  hrefLang={code}
                  className={`rounded-full px-2.5 py-1 text-ink-muted transition-colors duration-150 hover:text-teal ${
                    code === 'th' ? 'thai' : ''
                  }`}
                >
                  {LOCALE_LABEL[code]}
                </Link>
              ),
            )}
          </div>

          <a
            href={SCHOOL.phoneHref}
            className="numeric hidden rounded-md bg-teal px-5 py-2.5 text-sm font-semibold text-paper transition-colors duration-150 hover:bg-teal-deep sm:inline-block"
          >
            {SCHOOL.phone}
          </a>

          <button
            ref={toggleRef}
            type="button"
            onClick={() => setMenuOpen((open) => !open)}
            aria-expanded={menuOpen}
            aria-controls="mobile-nav"
            className="grid h-11 w-11 place-items-center rounded-md border border-border md:hidden"
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
        ref={mobileNavRef}
        id="mobile-nav"
        hidden={!menuOpen}
        className="border-t border-hairline bg-background md:hidden"
      >
        <nav aria-label={t.nav.main} className="mx-auto flex max-w-6xl flex-col px-6 py-2">
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
                className={`min-h-11 rounded-md border px-5 text-sm font-semibold leading-[2.4] ${
                  code === locale ? 'border-teal bg-teal text-paper' : 'border-border text-ink'
                } ${code === 'th' ? 'thai' : ''}`}
              >
                {LOCALE_LABEL[code]}
              </Link>
            ))}
          </div>
        </nav>
      </div>
    </header>
  );
}
