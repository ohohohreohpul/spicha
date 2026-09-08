import type { LocalizedText } from '@/i18n/config';

export type FaqEntry = { readonly q: LocalizedText; readonly a: LocalizedText };

export const FAQS: readonly FaqEntry[] = [
  {
    q: {
      de: 'In welcher Sprache findet der Unterricht statt?',
      th: 'สอนเป็นภาษาอะไร',
    },
    a: {
      de: 'Die meisten Kurse laufen auf Deutsch und Thailändisch. Bei jedem Termin steht die Unterrichtssprache dabei. Fragen können Sie jederzeit in beiden Sprachen stellen.',
      th: 'หลักสูตรส่วนใหญ่สอนทั้งภาษาเยอรมันและภาษาไทย แต่ละรอบเรียนจะระบุภาษาที่ใช้สอนไว้ชัดเจน แล้วระหว่างเรียนจะถามได้ทั้งสองภาษาตลอด',
    },
  },
  {
    q: { de: 'Brauche ich Vorkenntnisse?', th: 'ต้องมีพื้นฐานก่อนไหม' },
    a: {
      de: 'Für die mehrtägigen Ausbildungen und den Hygienekurs nicht. Die Ein-Tages-Kurse sind Weiterbildung — sie setzen Grundkenntnisse in Massage oder Kosmetik voraus. Beginnen Sie ohne Grundlagen mit der Klassischen Massage.',
      th: 'หลักสูตรหลายวันกับหลักสูตรสุขอนามัยเริ่มได้เลย ไม่ต้องมีพื้นฐาน แต่คอร์ส 1 วันคือการต่อยอด (Weiterbildung) ต้องมีพื้นฐานการนวดหรืองานความงามมาก่อน ถ้ายังไม่มีเลย แนะนำเริ่มที่นวดสวีดิชพื้นฐาน (Klassische Massage)',
    },
  },
  {
    q: { de: 'Welches Zertifikat bekomme ich?', th: 'จบแล้วได้ใบประกาศแบบไหน' },
    a: {
      de: 'Nach bestandener theoretischer und praktischer Prüfung erhalten Sie ein Zertifikat der Kosmetikschule Picha mit dem Siegel des BfD. Ein solches Zertifikat belegt die erfolgreiche Kursteilnahme. Es ist kein staatlicher Berufsabschluss.',
      th: 'เมื่อสอบผ่านทั้งภาคทฤษฎีและปฏิบัติ คุณจะได้ใบประกาศนียบัตรของ Kosmetikschule Picha ประทับตรา BfD ใบนี้ยืนยันว่าผ่านการอบรมแล้ว แต่ไม่ใช่วุฒิการศึกษาของรัฐ',
    },
  },
  {
    q: {
      de: 'Darf ich nach dem Kurs selbstständig arbeiten?',
      th: 'จบแล้วเปิดกิจการเองได้ไหม',
    },
    a: {
      de: 'Der Kurs vermittelt die praktische Fähigkeit und den Nachweis darüber. Ob Sie damit ein Gewerbe anmelden oder eine bestimmte Leistung anbieten dürfen, hängt von den Vorgaben Ihres Gewerbeamts und der Art der Behandlung ab. Wir beraten Sie gern zu unserer Erfahrung, ersetzen aber keine Rechtsauskunft.',
      th: 'หลักสูตรให้ทั้งฝีมือและหลักฐานการอบรม แต่จะจดทะเบียนกิจการหรือเปิดให้บริการแบบไหนได้บ้าง ขึ้นอยู่กับข้อกำหนดของสำนักงานพาณิชย์ในพื้นที่ของคุณและประเภทของงานนั้น ๆ เรายินดีเล่าประสบการณ์ตรงให้ฟัง แต่ไม่ใช่คำแนะนำทางกฎหมายนะคะ',
    },
  },
  {
    q: { de: 'Wie melde ich mich an?', th: 'สมัครเรียนอย่างไร' },
    a: {
      de: 'Über das Formular auf dieser Seite, telefonisch oder über LINE. Sie erhalten eine persönliche Rückmeldung mit der Bestätigung Ihres Platzes und den Zahlungsdetails.',
      th: 'สมัครได้เลยผ่านแบบฟอร์มในหน้านี้ โทร หรือทัก LINE ก็ได้ เดี๋ยวเราติดต่อกลับพร้อมยืนยันที่นั่งและรายละเอียดการชำระเงินให้ค่ะ',
    },
  },
  {
    q: {
      de: 'Wie bezahle ich, und was passiert bei einer Absage?',
      th: 'ชำระเงินอย่างไร และถ้ายกเลิกจะเป็นอย่างไร',
    },
    // CLIENT-VERIFY: Zahlungs- und Stornobedingungen
    a: {
      de: 'Die Zahlungs- und Stornobedingungen erhalten Sie mit der Anmeldebestätigung.',
      th: 'เงื่อนไขการชำระเงินและการยกเลิกจะแจ้งให้ทราบพร้อมเอกสารยืนยันการสมัครค่ะ',
    },
  },
  {
    q: { de: 'Was soll ich mitbringen?', th: 'ต้องเตรียมอะไรมาบ้าง' },
    a: {
      de: 'Bequeme Arbeitskleidung, flache Schuhe, kurze und saubere Fingernägel sowie ein eigenes Handtuch. Öle, Materialien und Geräte stellt die Schule.',
      th: 'ชุดที่เคลื่อนไหวสะดวก รองเท้าพื้นราบ ตัดเล็บสั้นให้สะอาด และผ้าเช็ดตัวส่วนตัวหนึ่งผืน ส่วนน้ำมัน อุปกรณ์ และเครื่องมือต่าง ๆ โรงเรียนเตรียมไว้ให้หมดแล้ว',
    },
  },
  {
    q: {
      de: 'Wie viele Teilnehmende sind in einem Kurs?',
      th: 'หนึ่งรอบเรียนมีกี่คน',
    },
    a: {
      de: 'Kleine Gruppen. Bei jedem Termin sehen Sie die Gesamtplätze und die freien Plätze, damit Sie wissen, wie viel persönliche Korrektur Sie bekommen.',
      th: 'เราเรียนกันเป็นกลุ่มเล็ก ๆ ทุกรอบจะแสดงจำนวนที่นั่งทั้งหมดและที่นั่งที่เหลือไว้ คุณจะได้เห็นล่วงหน้าก่อนสมัครว่าครูจะดูแลใกล้ชิดขนาดไหน',
    },
  },
  {
    q: { de: 'Wie komme ich zur Schule?', th: 'เดินทางไปโรงเรียนอย่างไร' },
    a: {
      de: 'Manhagener Allee 45 in Ahrensburg, wenige Gehminuten vom Bahnhof Ahrensburg. Mit der U1 sind Sie aus der Hamburger Innenstadt in rund 30 Minuten da. Aus Lübeck, Kiel, Bremen und Hannover ist die Anreise an einem Kurstag machbar.',
      th: 'โรงเรียนอยู่ที่ Manhagener Allee 45 เมือง Ahrensburg เดินจากสถานี Ahrensburg แค่ไม่กี่นาที ถ้ามาจากใจกลาง Hamburg นั่งรถไฟใต้ดินสาย U1 ประมาณ 30 นาที ส่วนใครที่เดินทางจาก Lübeck, Kiel, Bremen หรือ Hannover ก็ไปเช้าเย็นกลับได้ในวันเดียว',
    },
  },
  {
    q: {
      de: 'Ist die Schule barrierefrei zugänglich?',
      th: 'สถานที่เรียนรองรับผู้ใช้รถเข็นหรือไม่',
    },
    // CLIENT-VERIFY: Barrierefreiheit
    a: {
      de: 'Bitte melden Sie sich vor der Anmeldung telefonisch, damit wir Ihnen die Gegebenheiten vor Ort genau beschreiben können.',
      th: 'รบกวนโทรสอบถามก่อนสมัครนะคะ จะได้เล่าสภาพสถานที่จริง ๆ ให้ฟังอย่างละเอียด',
    },
  },
] as const;
