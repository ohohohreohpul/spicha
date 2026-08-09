/**
 * Verified facts taken directly from the school's own printed material
 * (Academy/IMG_2469–2480). Nothing here is invented.
 *
 * Items marked CLIENT-VERIFY must be confirmed by the school before launch.
 * See docs/CLIENT-VERIFY.md.
 */

export const SCHOOL = {
  name: 'Kosmetikschule Picha',
  legalLine: 'Anerkannte Kosmetikschule Picha',
  locationName: 'Standort Ahrensburg',
  street: 'Manhagener Allee 45',
  postalCode: '22926',
  city: 'Ahrensburg',
  country: 'Deutschland',
  region: 'Schleswig-Holstein',
  phone: '0152 5524 8655',
  phoneHref: 'tel:+4915255248655',
  contactPerson: 'Frau Nui',
  seminarHost: 'Seminar bei Satuuu 99',
  geo: { lat: 53.6742, lng: 10.2419 }, // CLIENT-VERIFY: exact pin
  travelFrom: ['Hamburg', 'Lübeck', 'Kiel', 'Bremen', 'Hannover', 'Berlin'],
  courseDayStart: '09:00',
  courseDayEnd: '17:00',
} as const;

export const RECOGNITION = {
  /** Stated on the school's own material — wording kept verbatim. */
  bfd: 'Vom Bundesberufsverband der Fachkosmetiker/innen in Deutschland e.V. (BfD) anerkannte Kosmetikschule',
  bfdShort: 'BfD — anerkannte Kosmetikschule',
  teachingLicence:
    'Ausbildungsbefugnis für Kosmetik und Wellness, erteilt durch das Regierungspräsidium Darmstadt (2005)',
  hygieneCertifier: 'Prof. Dr. med. Bernd Wüsten, Arzt für Innere Medizin',
  certificateNote:
    'Teilnehmende erhalten nach bestandener theoretischer und praktischer Prüfung ein Zertifikat der Kosmetikschule Picha mit BfD-Siegel.',
} as const;

export const FOUNDER = {
  name: 'Sunisa Picha',
  nameThai: 'สุนิษา พิชา',
  nickname: 'ครูแมว',
  role: 'Schulleiterin und Ausbilderin',
  qualifications: [
    'Staatlich anerkannte Kosmetikerin mit staatlicher Abschlussprüfung',
    'Zugelassene Ausbilderin für Kosmetik und Wellness',
    'Ausbildungsbefugnis, Regierungspräsidium Darmstadt',
  ],
  timeline: [
    { year: '1983', text: 'Krankenpflegeschule in Uttaradit, Thailand' },
    { year: '1996', text: 'Med. Fußpflege und Handpflege, Frankfurt am Main' },
    { year: '1997', text: 'Gründung und Leitung von SP-Kosmetik' },
    { year: '2005', text: 'Ausbildungsbefugnis, Regierungspräsidium Darmstadt' },
    { year: '2005', text: 'SP-Kosmetik Schulung Frankfurt: Wellness, Kosmetik, Fußpflege, Massage' },
    { year: '2015', text: 'SP-Kosmetik Schulung Rosbach, in Zusammenarbeit mit Louis Kosmetik' },
    { year: '2022', text: 'Kosmetikschule Picha Rosbach' },
    { year: '2024', text: 'Standort 3: Ahrensburg bei Hamburg' }, // CLIENT-VERIFY: Eröffnungsjahr
  ],
  languages: ['Deutsch', 'ไทย'],
} as const;
