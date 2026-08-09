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
      th: 'หลักสูตรส่วนใหญ่สอนทั้งภาษาเยอรมันและภาษาไทย ทุกรอบเรียนจะระบุภาษาที่ใช้สอนไว้ และคุณถามได้ทั้งสองภาษาตลอดการเรียน',
    },
  },
  {
    q: { de: 'Brauche ich Vorkenntnisse?', th: 'ต้องมีพื้นฐานมาก่อนไหม' },
    a: {
      de: 'Für die Kurzkurse nicht. Sie beginnen bei der Anatomie und der Handhaltung. Für die Schwangerschaftsmassage empfehlen wir Grundkenntnisse in Massage.',
      th: 'หลักสูตรเร่งรัดไม่ต้องมีพื้นฐาน เริ่มจากกายวิภาคและการวางมือ ส่วนหลักสูตรนวดสตรีมีครรภ์แนะนำให้มีพื้นฐานการนวดมาก่อน',
    },
  },
  {
    q: { de: 'Welches Zertifikat bekomme ich?', th: 'จะได้ใบประกาศแบบไหน' },
    a: {
      de: 'Nach bestandener theoretischer und praktischer Prüfung erhalten Sie ein Zertifikat der Kosmetikschule Picha mit dem Siegel des BfD. Ein solches Zertifikat belegt die erfolgreiche Kursteilnahme. Es ist kein staatlicher Berufsabschluss.',
      th: 'เมื่อสอบผ่านทั้งภาคทฤษฎีและภาคปฏิบัติ คุณจะได้ใบประกาศนียบัตรของ Kosmetikschule Picha ที่ประทับตรา BfD ใบนี้เป็นหลักฐานว่าผ่านการอบรม ไม่ใช่วุฒิการศึกษาของรัฐ',
    },
  },
  {
    q: {
      de: 'Darf ich nach dem Kurs selbstständig arbeiten?',
      th: 'จบแล้วเปิดกิจการเองได้ไหม',
    },
    a: {
      de: 'Der Kurs vermittelt die praktische Fähigkeit und den Nachweis darüber. Ob Sie damit ein Gewerbe anmelden oder eine bestimmte Leistung anbieten dürfen, hängt von den Vorgaben Ihres Gewerbeamts und der Art der Behandlung ab. Wir beraten Sie gern zu unserer Erfahrung, ersetzen aber keine Rechtsauskunft.',
      th: 'หลักสูตรให้ทักษะและหลักฐานการอบรม ส่วนการจดทะเบียนกิจการหรือการเปิดให้บริการงานใดได้บ้าง ขึ้นอยู่กับข้อกำหนดของสำนักงานพาณิชย์ในพื้นที่และประเภทของบริการ เรายินดีแบ่งปันประสบการณ์ แต่ไม่สามารถให้คำปรึกษาทางกฎหมายแทนได้',
    },
  },
  {
    q: { de: 'Wie melde ich mich an?', th: 'สมัครเรียนอย่างไร' },
    a: {
      de: 'Über das Formular auf dieser Seite, telefonisch oder über LINE. Sie erhalten eine persönliche Rückmeldung mit der Bestätigung Ihres Platzes und den Zahlungsdetails.',
      th: 'สมัครผ่านแบบฟอร์มในหน้านี้ โทรศัพท์ หรือทาง LINE ก็ได้ แล้วเราจะติดต่อกลับพร้อมยืนยันที่นั่งและรายละเอียดการชำระเงิน',
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
      th: 'เงื่อนไขการชำระเงินและการยกเลิกจะแจ้งให้ทราบพร้อมเอกสารยืนยันการสมัคร',
    },
  },
  {
    q: { de: 'Was soll ich mitbringen?', th: 'ต้องเตรียมอะไรมาบ้าง' },
    a: {
      de: 'Bequeme Arbeitskleidung, flache Schuhe, kurze und saubere Fingernägel sowie ein eigenes Handtuch. Öle, Materialien und Geräte stellt die Schule.',
      th: 'ชุดที่เคลื่อนไหวสะดวก รองเท้าพื้นราบ ตัดเล็บสั้นและสะอาด และผ้าเช็ดตัวส่วนตัวหนึ่งผืน ส่วนน้ำมัน อุปกรณ์ และเครื่องมือ ทางโรงเรียนเตรียมให้',
    },
  },
  {
    q: {
      de: 'Wie viele Teilnehmende sind in einem Kurs?',
      th: 'หนึ่งรอบเรียนมีกี่คน',
    },
    a: {
      de: 'Kleine Gruppen. Bei jedem Termin sehen Sie die Gesamtplätze und die freien Plätze, damit Sie wissen, wie viel persönliche Korrektur Sie bekommen.',
      th: 'เรียนเป็นกลุ่มเล็ก ทุกรอบจะแสดงจำนวนที่นั่งทั้งหมดและที่นั่งที่ยังว่าง คุณจะได้รู้ล่วงหน้าว่าจะได้รับการดูแลใกล้ชิดแค่ไหน',
    },
  },
  {
    q: { de: 'Wie komme ich zur Schule?', th: 'เดินทางไปโรงเรียนอย่างไร' },
    a: {
      de: 'Manhagener Allee 45 in Ahrensburg, wenige Gehminuten vom Bahnhof Ahrensburg. Mit der U1 sind Sie aus der Hamburger Innenstadt in rund 30 Minuten da. Aus Lübeck, Kiel, Bremen und Hannover ist die Anreise an einem Kurstag machbar.',
      th: 'ที่อยู่คือ Manhagener Allee 45 เมือง Ahrensburg เดินจากสถานี Ahrensburg ไม่กี่นาที นั่งรถไฟใต้ดินสาย U1 จากใจกลาง Hamburg ราว 30 นาที ส่วนผู้ที่มาจาก Lübeck, Kiel, Bremen และ Hannover ก็เดินทางไปกลับได้ในวันเดียว',
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
      th: 'กรุณาโทรสอบถามก่อนสมัคร เพื่อให้เราอธิบายสภาพสถานที่จริงให้คุณทราบอย่างละเอียด',
    },
  },
] as const;
