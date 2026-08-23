import type { Metadata } from 'next';
import { LOCALE_PATH, type Locale } from '@/i18n/config';
import { getUi } from '@/i18n/ui';

export const SITE_URL = 'https://kosmetikschule-picha.de'; // CLIENT-VERIFY: final domain

const KEYWORDS: Record<Locale, readonly string[]> = {
  de: [
    'Massage Ausbildung Ahrensburg',
    'Massage Kurs Hamburg',
    'Thai Massage Ausbildung',
    'Office Syndrom Massage Kurs',
    'Lymphdrainage Kurs',
    'Fußpflege Ausbildung Ahrensburg',
    'Kosmetikschule Ahrensburg',
    'Hygienekurs Massage Studio',
  ],
  th: [
    'เรียนนวดที่เยอรมัน',
    'โรงเรียนสอนนวด Ahrensburg',
    'เรียนนวดใกล้ Hamburg',
    'หลักสูตรนวดออฟฟิศซินโดรม',
    'เรียนดูแลเท้า เยอรมัน',
    'โรงเรียนความงาม เยอรมัน',
    'ใบประกาศนียบัตรนวด เยอรมนี',
  ],
};

export function buildMetadata(locale: Locale): Metadata {
  const t = getUi(locale);

  return {
    metadataBase: new URL(SITE_URL),
    title: t.meta.title,
    description: t.meta.description,
    keywords: [...KEYWORDS[locale]],
    openGraph: {
      type: 'website',
      locale: locale === 'de' ? 'de_DE' : 'th_TH',
      url: `${SITE_URL}${LOCALE_PATH[locale]}`,
      siteName: 'Kosmetikschule Picha',
      title: t.meta.ogTitle,
      description: t.meta.description,
    },
    alternates: {
      canonical: LOCALE_PATH[locale],
      languages: {
        'de-DE': LOCALE_PATH.de,
        'th-TH': LOCALE_PATH.th,
        'x-default': LOCALE_PATH.de,
      },
    },
    robots: { index: true, follow: true },
  };
}
