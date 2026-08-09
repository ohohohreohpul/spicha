import { Fraunces, Noto_Sans_Thai } from 'next/font/google';
import { HTML_LANG, type Locale } from '@/i18n/config';
import { getUi } from '@/i18n/ui';
import '@/app/globals.css';

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
 * Shared document shell. Each language has its own root layout so that
 * `<html lang>` is correct — Fraunces has no Thai cut, and the Thai page needs
 * the document language for both screen readers and the font fallback rules.
 */
export function RootShell({ locale, children }: { locale: Locale; children: React.ReactNode }) {
  const t = getUi(locale);

  return (
    <html
      lang={HTML_LANG[locale]}
      data-scroll-behavior="smooth"
      className={`${fraunces.variable} ${notoSansThai.variable}`}
    >
      <body className="grain antialiased">
        <a
          href="#inhalt"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-full focus:bg-teal focus:px-5 focus:py-3 focus:text-sm focus:font-semibold focus:text-paper"
        >
          {t.skipToContent}
        </a>
        {children}
      </body>
    </html>
  );
}
