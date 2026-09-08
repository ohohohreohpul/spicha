import Image from 'next/image';
import { RECOGNITION, SCHOOL } from '@/data/school';
import { SECTION_IDS, type Locale } from '@/i18n/config';
import type { UiDictionary } from '@/i18n/ui';

/** Calm light footer (2026-09 rebuild): muted panel, quiet links. */
export function SiteFooter({ t, locale }: { t: UiDictionary; locale: Locale }) {
  const links = [
    { href: `#${SECTION_IDS.orientation}`, label: t.nav.finder },
    { href: `#${SECTION_IDS.catalog}`, label: t.nav.allCourses },
    { href: `#${SECTION_IDS.schedule}`, label: t.nav.schedule },
    { href: `#${SECTION_IDS.learn}`, label: t.nav.learn },
    { href: `#${SECTION_IDS.school}`, label: t.nav.school },
    { href: `#${SECTION_IDS.contact}`, label: t.nav.contactFooter },
  ];

  return (
    <footer className="border-t border-hairline bg-muted">
      <div className="mx-auto grid max-w-6xl gap-10 px-6 py-16 md:grid-cols-[minmax(0,1fr)_auto]">
        <div>
          <Image
            src="/logo/spicha-logo.png"
            alt={SCHOOL.name}
            width={1200}
            height={658}
            className="h-10 w-auto"
          />
          <p className="mt-3 text-sm text-muted-foreground">{SCHOOL.legalLine[locale]}</p>

          <p className="mt-8 max-w-[38ch] font-serif text-xl leading-snug text-foreground">
            {t.footer.motto}
          </p>

          <address className="mt-8 text-sm not-italic leading-relaxed text-muted-foreground">
            {SCHOOL.street}
            <br />
            {SCHOOL.postalCode} {SCHOOL.city}
            <br />
            <a
              href={SCHOOL.phoneHref}
              className="numeric mt-2 inline-block font-semibold text-teal hover:text-teal-deep"
            >
              {SCHOOL.phone}
            </a>
          </address>
        </div>

        <nav aria-label={t.nav.footer} className="flex flex-col gap-3 text-sm md:text-right">
          {links.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-muted-foreground transition-colors duration-150 hover:text-teal"
            >
              {item.label}
            </a>
          ))}
        </nav>
      </div>

      <div className="border-t border-hairline">
        <div className="mx-auto max-w-6xl px-6 py-8">
          <p className="max-w-[80ch] text-xs leading-relaxed text-muted-foreground">
            {RECOGNITION.bfd[locale]}. {t.footer.legal}
          </p>
          <div className="mt-5 flex flex-wrap gap-x-6 gap-y-2 text-xs text-muted-foreground">
            <a href="#impressum" className="hover:text-teal">
              {t.footer.imprint}
            </a>
            <a href="#datenschutz" className="hover:text-teal">
              {t.footer.privacy}
            </a>
            <span className="numeric">
              © {new Date().getFullYear()} {SCHOOL.name}
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
