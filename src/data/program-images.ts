import type { Locale } from '@/i18n/config';

export type ProgramImage = { src: string; alt: Record<Locale, string> };

/**
 * The courses that have a real photograph; everything else gets the house
 * monogram — never a stock placeholder. Shared by the catalog grid, the
 * guide results and the Wegweiser persona panels.
 */
export const PROGRAM_IMAGE: Record<string, ProgramImage> = {
  'office-syndrom': {
    src: '/img/t-office.jpg',
    alt: {
      de: 'Ausbilderin arbeitet mit beiden Daumen am Nacken einer sitzenden Kundin.',
      th: 'ครูผู้สอนใช้นิ้วหัวแม่มือทั้งสองข้างนวดต้นคอของลูกค้าที่นั่งอยู่',
    },
  },
  'lymphdrainage-cupping': {
    src: '/img/t-cupping.jpg',
    alt: {
      de: 'Schröpfgläser auf dem Rücken einer abgedeckten Kundin, die Hände der Ausbilderin setzen ein weiteres Glas.',
      th: 'แก้วครอบวางบนหลังของลูกค้าที่คลุมผ้าเรียบร้อย มือครูกำลังวางแก้วอีกใบ',
    },
  },
  'facial-lifting': {
    src: '/img/t-facial.jpg',
    alt: {
      de: 'Lifting-Griffe entlang Wange und Kieferlinie an einer liegenden Kundin.',
      th: 'ท่ายกกระชับบริเวณแก้มและแนวกรามของลูกค้าที่นอนอยู่',
    },
  },
  'fussmassage-spa': {
    src: '/img/t-foot.jpg',
    alt: {
      de: 'Beide Daumen arbeiten an der Fußsohle über einer Fußwanne.',
      th: 'นิ้วหัวแม่มือทั้งสองข้างกดที่ฝ่าเท้าเหนืออ่างแช่เท้า',
    },
  },
  fusspflege: {
    src: '/img/t-fusspflege.jpg',
    alt: {
      de: 'Fußpflege am Nagel mit Instrument, daneben ein Tablett mit sterilisierten Werkzeugen.',
      th: 'การดูแลเล็บเท้าด้วยอุปกรณ์ ข้าง ๆ เป็นถาดเครื่องมือที่ผ่านการฆ่าเชื้อ',
    },
  },
};
