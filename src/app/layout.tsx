import type { Metadata, Viewport } from 'next';
import { Fraunces, Noto_Sans_Thai } from 'next/font/google';
import { SCHOOL } from '@/data/school';
import { StructuredData } from '@/components/seo/StructuredData';
import './globals.css';

const fraunces = Fraunces({
  subsets: ['latin'],
  variable: '--font-fraunces',
  display: 'swap',
});

const notoSansThai = Noto_Sans_Thai({
  subsets: ['latin', 'thai'],
  variable: '--font-noto-thai',
  display: 'swap',
  weight: ['300', '400', '500', '600', '700'],
});

/**
 * Canonical origin. Set NEXT_PUBLIC_SITE_URL in the hosting environment; on Vercel
 * preview deployments we fall back to the generated deployment URL so metadata and
 * structured data never point at production from a preview.
 */
const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ??
  (process.env.VERCEL_ENV === 'production'
    ? 'https://kosmetikschule-picha.de' // CLIENT-VERIFY: final domain
    : process.env.VERCEL_URL
      ? `https://${process.env.VERCEL_URL}`
      : 'http://localhost:3000');

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: 'Kosmetikschule Picha Ahrensburg — Massage, Fußpflege und Kosmetik lernen',
    template: '%s — Kosmetikschule Picha Ahrensburg',
  },
  description:
    'Praktische Ausbildung in Massage, Fußpflege, Kosmetik und Hygiene in Ahrensburg bei Hamburg. Kurse auf Deutsch und Thailändisch, mit Zertifikat nach bestandener Prüfung.',
  keywords: [
    'Massage Ausbildung Ahrensburg',
    'Massage Kurs Hamburg',
    'Thai Massage Ausbildung',
    'Office Syndrom Massage Kurs',
    'Lymphdrainage Kurs',
    'Fußpflege Ausbildung Ahrensburg',
    'Kosmetikschule Ahrensburg',
    'Hygienekurs Massage Studio',
  ],
  openGraph: {
    type: 'website',
    locale: 'de_DE',
    url: SITE_URL,
    siteName: 'Kosmetikschule Picha',
    title: 'Ihre Hände können eine Zukunft bauen.',
    description:
      'Praktische Ausbildung in Massage, Fußpflege, Kosmetik und Hygiene in Ahrensburg bei Hamburg — auf Deutsch und Thailändisch.',
  },
  alternates: {
    canonical: '/',
    languages: { 'de-DE': '/', 'th-TH': '/th' },
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: '#f6f3ec',
  colorScheme: 'light',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="de"
      data-scroll-behavior="smooth"
      className={`${fraunces.variable} ${notoSansThai.variable}`}
    >
      <body className="grain antialiased">
        <a
          href="#inhalt"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-full focus:bg-teal focus:px-5 focus:py-3 focus:text-sm focus:font-semibold focus:text-paper"
        >
          Zum Inhalt springen
        </a>
        {children}
        <StructuredData siteUrl={SITE_URL} school={SCHOOL} />
      </body>
    </html>
  );
}
