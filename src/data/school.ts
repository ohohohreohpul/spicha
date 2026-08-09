import type { LocalizedText } from '@/i18n/config';

/**
 * Verified facts taken directly from the school's own printed material
 * (Academy/IMG_2469–2480). Nothing here is invented.
 *
 * Items marked CLIENT-VERIFY must be confirmed by the school before launch.
 * See docs/CLIENT-VERIFY.md.
 */

export const SCHOOL = {
  name: 'Kosmetikschule Picha',
  legalLine: {
    de: 'Anerkannte Kosmetikschule Picha',
    th: 'โรงเรียนสอนวิชาชีพความงาม Picha ที่ได้รับการรับรอง',
  } satisfies LocalizedText,
  locationName: { de: 'Standort Ahrensburg', th: 'สาขา Ahrensburg' } satisfies LocalizedText,
  street: 'Manhagener Allee 45',
  postalCode: '22926',
  city: 'Ahrensburg',
  country: 'Deutschland',
  region: 'Schleswig-Holstein',
  phone: '0152 5524 8655',
  phoneHref: 'tel:+4915255248655',
  contactPerson: { de: 'Frau Nui', th: 'คุณนุ้ย' } satisfies LocalizedText,
  seminarHost: 'Seminar bei Satuuu 99',
  geo: { lat: 53.6742, lng: 10.2419 }, // CLIENT-VERIFY: exact pin
  travelFrom: ['Hamburg', 'Lübeck', 'Kiel', 'Bremen', 'Hannover', 'Berlin'],
  courseDayStart: '09:00',
  courseDayEnd: '17:00',
} as const;

export const RECOGNITION = {
  /** Stated on the school's own material — German wording kept verbatim. */
  bfd: {
    de: 'Vom Bundesberufsverband der Fachkosmetiker/innen in Deutschland e.V. (BfD) anerkannte Kosmetikschule',
    th: 'โรงเรียนสอนวิชาชีพความงามที่ได้รับการรับรองจากสมาคมวิชาชีพความงามแห่งเยอรมนี Bundesberufsverband der Fachkosmetiker/innen in Deutschland e.V. (BfD)',
  } satisfies LocalizedText,
  bfdShort: {
    de: 'BfD — anerkannte Kosmetikschule',
    th: 'BfD — โรงเรียนที่ได้รับการรับรอง',
  } satisfies LocalizedText,
  bfdDetail: {
    de: 'Vom Bundesberufsverband der Fachkosmetiker/innen in Deutschland e.V.',
    th: 'โดยสมาคมวิชาชีพความงามแห่งเยอรมนี (BfD)',
  } satisfies LocalizedText,
  hygieneCertifier: 'Prof. Dr. med. Bernd Wüsten',
} as const;

export const FOUNDER = {
  name: 'Sunisa Picha',
  nameThai: 'สุนิษา พิชา',
  nickname: 'ครูแมว',
  qualifications: {
    de: [
      'Staatlich anerkannte Kosmetikerin mit staatlicher Abschlussprüfung',
      'Zugelassene Ausbilderin für Kosmetik und Wellness',
      'Ausbildungsbefugnis, Regierungspräsidium Darmstadt',
    ],
    th: [
      'Kosmetikerin ที่สอบผ่านการสอบระดับรัฐของเยอรมนี',
      'ครูผู้สอนที่ได้รับอนุญาตในสาขา Kosmetik และ Wellness',
      'ใบอนุญาตสอนวิชาชีพจาก Regierungspräsidium Darmstadt',
    ],
  },
  timeline: [
    {
      year: '1983',
      text: {
        de: 'Krankenpflegeschule in Uttaradit, Thailand',
        th: 'วิทยาลัยพยาบาล จังหวัดอุตรดิตถ์ ประเทศไทย',
      } satisfies LocalizedText,
    },
    {
      year: '1996',
      text: {
        de: 'Med. Fußpflege und Handpflege, Frankfurt am Main',
        th: 'Med. Fußpflege และ Handpflege เมือง Frankfurt am Main',
      } satisfies LocalizedText,
    },
    {
      year: '1997',
      text: {
        de: 'Gründung und Leitung von SP-Kosmetik',
        th: 'ก่อตั้งและบริหาร SP-Kosmetik',
      } satisfies LocalizedText,
    },
    {
      year: '2005',
      text: {
        de: 'Ausbildungsbefugnis, Regierungspräsidium Darmstadt',
        th: 'ได้รับใบอนุญาตสอนวิชาชีพจาก Regierungspräsidium Darmstadt',
      } satisfies LocalizedText,
    },
    {
      year: '2005',
      text: {
        de: 'SP-Kosmetik Schulung Frankfurt: Wellness, Kosmetik, Fußpflege, Massage',
        th: 'SP-Kosmetik Schulung Frankfurt สอน Wellness, Kosmetik, Fußpflege และ Massage',
      } satisfies LocalizedText,
    },
    {
      year: '2015',
      text: {
        de: 'SP-Kosmetik Schulung Rosbach, in Zusammenarbeit mit Louis Kosmetik',
        th: 'SP-Kosmetik Schulung Rosbach ร่วมมือกับ Louis Kosmetik',
      } satisfies LocalizedText,
    },
    {
      year: '2022',
      text: {
        de: 'Kosmetikschule Picha Rosbach',
        th: 'Kosmetikschule Picha สาขา Rosbach',
      } satisfies LocalizedText,
    },
    {
      year: '2024', // CLIENT-VERIFY: Eröffnungsjahr
      text: {
        de: 'Standort 3: Ahrensburg bei Hamburg',
        th: 'สาขาที่ 3: Ahrensburg ใกล้เมือง Hamburg',
      } satisfies LocalizedText,
    },
  ],
} as const;
