import Image from 'next/image';
import { RECOGNITION, SCHOOL } from '@/data/school';

export function SiteFooter() {
  return (
    <footer className="bg-ink text-porcelain">
      <div className="shell grid gap-10 py-16 md:grid-cols-[minmax(0,1fr)_auto] md:py-20">
        <div>
          {/* The mark is two-colour and needs a light ground to stay legible on ink. */}
          <span className="inline-flex rounded-md bg-porcelain px-6 py-4">
            <Image
              src="/logo/spicha-logo.png"
              alt="Kosmetikschule Picha"
              width={1200}
              height={658}
              className="h-12 w-auto"
            />
          </span>
          <p className="mt-3 text-sm text-porcelain/60">{SCHOOL.legalLine}</p>

          <p className="mt-8 max-w-[38ch] font-display text-[clamp(1.5rem,1.1rem+1.4vw,2.25rem)] leading-tight">
            Berührung ist eine Fähigkeit. Übung macht daraus einen Beruf.
          </p>

          <address className="mt-8 not-italic text-sm leading-relaxed text-porcelain/70">
            {SCHOOL.street}
            <br />
            {SCHOOL.postalCode} {SCHOOL.city}
            <br />
            <a href={SCHOOL.phoneHref} className="numeric mt-2 inline-block text-aqua">
              {SCHOOL.phone}
            </a>
          </address>
        </div>

        <nav aria-label="Fußzeile" className="flex flex-col gap-3 text-sm md:text-right">
          {[
            { href: '#kursfinder', label: 'Kurs finden' },
            { href: '#termine', label: 'Termine' },
            { href: '#kurse', label: 'Alle Kurse' },
            { href: '#lernen', label: 'So wird gelernt' },
            { href: '#schule', label: 'Die Schule' },
            { href: '#anfrage', label: 'Anfrage und Anfahrt' },
          ].map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-porcelain/70 transition-colors duration-150 hover:text-aqua"
            >
              {item.label}
            </a>
          ))}
        </nav>
      </div>

      <div className="shell border-t border-porcelain/15 py-8">
        <p className="max-w-[80ch] text-xs leading-relaxed text-porcelain/55">
          {RECOGNITION.bfd}. {RECOGNITION.teachingLicence}. Ein Kurszertifikat der Schule belegt die
          erfolgreiche Teilnahme mit bestandener Prüfung und ist kein staatlicher Berufsabschluss.
          Angaben zu Preisen, Terminen und Verfügbarkeit werden laufend aktualisiert; maßgeblich ist
          die schriftliche Anmeldebestätigung.
        </p>
        <div className="mt-5 flex flex-wrap gap-x-6 gap-y-2 text-xs text-porcelain/55">
          <a href="#impressum" className="hover:text-aqua">
            Impressum
          </a>
          <a href="#datenschutz" className="hover:text-aqua">
            Datenschutz
          </a>
          <span className="numeric">© {new Date().getFullYear()} Kosmetikschule Picha</span>
        </div>
      </div>
    </footer>
  );
}
