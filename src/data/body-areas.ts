import type { BodyArea } from '@/lib/types';

export type BodyAreaMeta = {
  readonly id: BodyArea;
  readonly label: string;
  readonly labelThai: string;
  readonly complaint: string;
  readonly description: string;
};

export const BODY_AREAS: readonly BodyAreaMeta[] = [
  {
    id: 'kopf-gesicht',
    label: 'Kopf und Gesicht',
    labelThai: 'ศีรษะและใบหน้า',
    complaint: 'Spannungskopfschmerz, müde Gesichtszüge, Lymphstau',
    description:
      'Feine Arbeit mit wenig Druck. Sie lernen Zugrichtungen der Gesichtsmuskulatur, Lymphwege und die Führung des Gua-Sha-Werkzeugs.',
  },
  {
    id: 'nacken-schulter',
    label: 'Nacken und Schultern',
    labelThai: 'คอและบ่า',
    complaint: 'Bildschirmarbeit, Migräne, harter Schultergürtel',
    description:
      'Der meistgefragte Bereich in deutschen Studios. Hier arbeiten Sie mit Triggerpunkten, Druckrichtung und Behandlung im Sitzen.',
  },
  {
    id: 'ruecken',
    label: 'Rücken und Wirbelsäule',
    labelThai: 'หลังและกระดูกสันหลัง',
    complaint: 'Unterer Rücken, paravertebrale Spannung, Fehlhaltung',
    description:
      'Vom Becken bis zum Nacken. Sie lernen zu ertasten, den Druck aufzubauen und zu wissen, wo eine Massage endet und die ärztliche Abklärung beginnt.',
  },
  {
    id: 'arme-beine',
    label: 'Arme, Beine, Kreislauf',
    labelThai: 'แขน ขา และการไหลเวียน',
    complaint: 'Schwere Beine, Wassereinlagerung, überlastete Muskulatur',
    description:
      'Lymphfluss und Muskelarbeit an den Extremitäten, mit manueller Drainage, Schröpfen und kräftigen Sportgriffen.',
  },
  {
    id: 'ganzkoerper',
    label: 'Ganzkörper und Beweglichkeit',
    labelThai: 'ทั้งตัวและการเคลื่อนไหว',
    complaint: 'Allgemeine Verspannung, Steifheit, Erschöpfung',
    description:
      'Vollständige Abläufe mit Anfang, Mitte und Ende. Hier entsteht das Zeitgefühl, das eine Behandlung professionell macht.',
  },
  {
    id: 'fuesse',
    label: 'Füße',
    labelThai: 'เท้า',
    complaint: 'Zonenarbeit, Hornhaut, Nagelpflege',
    description:
      'Zwei Wege ab hier: die Fußmassage mit Spa-Ablauf und die professionelle Fußpflege als eigenständiger Beruf.',
  },
  {
    id: 'praxis',
    label: 'Betrieb und Berufspraxis',
    labelThai: 'การประกอบวิชาชีพ',
    complaint: 'Hygiene, Nachweise, Studioführung',
    description:
      'Kein Körperbereich, aber der Bereich, an dem Betriebe scheitern: Hygieneplan, Instrumentenaufbereitung und der Sachkundenachweis.',
  },
] as const;

export const BODY_AREA_BY_ID = new Map(BODY_AREAS.map((a) => [a.id, a]));
