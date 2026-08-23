import type { LocalizedText } from '@/i18n/config';
import type { BodyArea } from '@/lib/types';

export type BodyAreaMeta = {
  readonly id: BodyArea;
  readonly label: LocalizedText;
  readonly complaint: LocalizedText;
  readonly description: LocalizedText;
};

export const BODY_AREAS: readonly BodyAreaMeta[] = [
  {
    id: 'kopf-gesicht',
    label: { de: 'Kopf und Gesicht', th: 'ศีรษะและใบหน้า' },
    complaint: {
      de: 'Spannungskopfschmerz, müde Gesichtszüge, Lymphstau',
      th: 'ปวดหัวจากความตึง ใบหน้าดูโทรม น้ำเหลืองคั่ง',
    },
    description: {
      de: 'Feine Arbeit mit wenig Druck. Sie lernen Zugrichtungen der Gesichtsmuskulatur, Lymphwege und die Führung des Gua-Sha-Werkzeugs.',
      th: 'งานละเอียดที่ใช้น้ำหนักเบา คุณจะได้เรียนทิศทางการดึงของกล้ามเนื้อใบหน้า เส้นทางน้ำเหลือง และการใช้แผ่นกัวซา',
    },
  },
  {
    id: 'nacken-schulter',
    label: { de: 'Nacken und Schultern', th: 'คอและบ่า' },
    complaint: {
      de: 'Bildschirmarbeit, Migräne, harter Schultergürtel',
      th: 'นั่งหน้าจอนาน ไมเกรน บ่าแข็งเป็นก้อน',
    },
    description: {
      de: 'Der meistgefragte Bereich in deutschen Studios. Hier arbeiten Sie mit Triggerpunkten, Druckrichtung und Behandlung im Sitzen.',
      th: 'บริเวณที่ลูกค้าในเยอรมนีขอมากที่สุด ที่นี่คุณจะได้ทำงานกับจุดกดเจ็บ ทิศทางการลงน้ำหนัก และการนวดในท่านั่ง',
    },
  },
  {
    id: 'ruecken',
    label: { de: 'Rücken und Wirbelsäule', th: 'หลังและกระดูกสันหลัง' },
    complaint: {
      de: 'Unterer Rücken, paravertebrale Spannung, Fehlhaltung',
      th: 'ปวดหลังส่วนล่าง กล้ามเนื้อข้างกระดูกสันหลังตึง ท่าทางผิด',
    },
    description: {
      de: 'Vom Becken bis zum Nacken. Sie lernen zu ertasten, den Druck aufzubauen und zu wissen, wo eine Massage endet und die ärztliche Abklärung beginnt.',
      th: 'ตั้งแต่เชิงกรานถึงต้นคอ คุณจะได้ฝึกคลำ ฝึกเพิ่มน้ำหนักมือ และรู้ว่าการนวดจบตรงไหน และเมื่อไรต้องส่งพบแพทย์',
    },
  },
  {
    id: 'arme-beine',
    label: { de: 'Arme, Beine, Kreislauf', th: 'แขน ขา และการไหลเวียน' },
    complaint: {
      de: 'Schwere Beine, Wassereinlagerung, überlastete Muskulatur',
      th: 'ขาหนัก บวมน้ำ กล้ามเนื้อทำงานหนักเกินไป',
    },
    description: {
      de: 'Lymphfluss und Muskelarbeit an den Extremitäten, mit manueller Drainage, Schröpfen und kräftigen Sportgriffen.',
      th: 'การไหลเวียนน้ำเหลืองและงานกล้ามเนื้อที่แขนขา ทั้งการระบายน้ำเหลืองด้วยมือ การครอบแก้ว และท่านวดสปอร์ตที่ลงน้ำหนักมาก',
    },
  },
  {
    id: 'ganzkoerper',
    label: { de: 'Ganzkörper und Beweglichkeit', th: 'ทั้งตัวและการเคลื่อนไหว' },
    complaint: {
      de: 'Allgemeine Verspannung, Steifheit, Erschöpfung',
      th: 'ตึงทั้งตัว ขยับไม่คล่อง อ่อนเพลีย',
    },
    description: {
      de: 'Vollständige Abläufe mit Anfang, Mitte und Ende. Hier entsteht das Zeitgefühl, das eine Behandlung professionell macht.',
      th: 'ขั้นตอนเต็มรูปแบบที่มีทั้งเปิด กลาง และปิด ตรงนี้เองที่คุณจะได้จังหวะเวลา ซึ่งเป็นสิ่งที่ทำให้การนวดดูเป็นมืออาชีพ',
    },
  },
  {
    id: 'fuesse',
    label: { de: 'Füße', th: 'เท้า' },
    complaint: {
      de: 'Zonenarbeit, Hornhaut, Nagelpflege',
      th: 'จุดสะท้อนฝ่าเท้า หนังแข็ง การดูแลเล็บ',
    },
    description: {
      de: 'Zwei Wege ab hier: die Fußmassage mit Spa-Ablauf und die professionelle Fußpflege als eigenständiger Beruf.',
      th: 'จากจุดนี้แยกเป็นสองทาง คือนวดเท้าพร้อมสปา และงานดูแลเท้าระดับวิชาชีพซึ่งเป็นอาชีพในตัวเอง',
    },
  },
  {
    id: 'haende-naegel',
    label: { de: 'Hände und Nägel', th: 'มือและเล็บ' },
    complaint: {
      de: 'Naturnagel aufbauen, Nagelhaut, Modellage die hält',
      th: 'เสริมหน้าเล็บ หนังรอบเล็บ งานเจลที่อยู่ทน',
    },
    description: {
      de: 'Arbeit auf wenigen Quadratzentimetern. Vorbereitung des Naturnagels, Führung der Fräse und ein Aufbau, der Wochen hält statt Tage.',
      th: 'งานบนพื้นที่เพียงไม่กี่ตารางเซนติเมตร ตั้งแต่การเตรียมหน้าเล็บ การใช้เครื่องเจียร์ ไปจนถึงการวางโครงที่อยู่ได้เป็นสัปดาห์ ไม่ใช่แค่วันสองวัน',
    },
  },
  {
    id: 'praxis',
    label: { de: 'Betrieb und Berufspraxis', th: 'การบริหารร้านและการประกอบวิชาชีพ' },
    complaint: {
      de: 'Hygiene, Nachweise, Studioführung',
      th: 'สุขอนามัย เอกสารรับรอง การดูแลร้าน',
    },
    description: {
      de: 'Kein Körperbereich, aber der Bereich, an dem Betriebe scheitern: Hygieneplan, Instrumentenaufbereitung und der Sachkundenachweis.',
      th: 'ไม่ใช่ส่วนของร่างกาย แต่เป็นเรื่องที่ทำให้หลายร้านสะดุด ได้แก่ แผนสุขอนามัย การเตรียมอุปกรณ์ และใบรับรองความรู้',
    },
  },
] as const;

export const BODY_AREA_BY_ID = new Map(BODY_AREAS.map((a) => [a.id, a]));
