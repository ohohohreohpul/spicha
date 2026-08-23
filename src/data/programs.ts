import type { Locale } from '@/i18n/config';
import type { Program, ProgramCategory } from '@/lib/types';

/**
 * Course titles and prices come from the school's own price sheet
 * (Academy/IMG_2472.JPG). Prices in EUR. Thai titles are the school's own
 * wording where the flyer provides one.
 */
export const PROGRAMS: readonly Program[] = [
  {
    id: 'office-syndrom',
    slug: 'office-syndrom-massage',
    title: { de: 'Office-Syndrom-Massage', th: 'นวดออฟฟิศซินโดรม' },
    subtitle: {
      de: 'Nacken, Schultern und Migräne-auslösende Spannungen lösen',
      th: 'คลายกล้ามเนื้อคอ บ่า ไหล่ และจุดที่กระตุ้นอาการไมเกรน',
    },
    category: 'kurzkurs',
    bodyAreas: ['nacken-schulter', 'kopf-gesicht'],
    price: 269,
    durationDays: 1,
    durationLabel: { de: '1 Tag · 09:00–17:00', th: '1 วัน · 09:00–17:00 น.' },
    languages: ['de', 'th'],
    audience: {
      de: 'Für Einsteigerinnen und Einsteiger sowie für Massagepraxen, die eine gefragte Kurzbehandlung ins Angebot nehmen wollen.',
      th: 'เหมาะกับผู้เริ่มต้น และร้านนวดที่อยากเพิ่มบริการระยะสั้นที่ลูกค้าต้องการมากที่สุด',
    },
    outcomes: {
      de: [
        'Verspannungsmuster in Nacken, Schultergürtel und oberem Rücken erkennen und benennen',
        'Eine vollständige Behandlungssequenz sicher und in der richtigen Reihenfolge durchführen',
        'Druck, Winkel und Tempo an die Reaktion der Kundin oder des Kunden anpassen',
        'Kontraindikationen erkennen und die Behandlung verantwortlich abgrenzen',
      ],
      th: [
        'อ่านรูปแบบการตึงของกล้ามเนื้อคอ บ่า ไหล่ และหลังส่วนบนได้',
        'ทำขั้นตอนการนวดครบทั้งชุดอย่างถูกลำดับและปลอดภัย',
        'ปรับน้ำหนักมือ องศา และจังหวะตามการตอบสนองของลูกค้า',
        'รู้ข้อห้ามในการนวด และรู้ว่าควรหยุดตรงไหน',
      ],
    },
    curriculum: {
      de: [
        'Anatomie von Nacken, Schultergürtel und oberem Rücken',
        'Triggerpunkte und Druckrichtungen',
        'Behandlung im Sitzen und in Bauchlage',
        'Kombination mit Dehnung und Mobilisation',
        'Hygiene, Lagerung und Abdeckung',
        'Praktische Prüfung am Kursende',
      ],
      th: [
        'กายวิภาคของคอ บ่า ไหล่ และหลังส่วนบน',
        'จุดกดเจ็บและทิศทางการลงน้ำหนัก',
        'การนวดในท่านั่งและท่านอนคว่ำ',
        'การผสมการยืดและการเคลื่อนไหวข้อต่อ',
        'สุขอนามัย การจัดท่า และการคลุมผ้า',
        'สอบภาคปฏิบัติเมื่อจบหลักสูตร',
      ],
    },
    prerequisites: { de: 'Keine Vorkenntnisse erforderlich.', th: 'ไม่ต้องมีพื้นฐานมาก่อน' },
    certificate: {
      de: 'Zertifikat der Kosmetikschule Picha mit BfD-Siegel nach bestandener theoretischer und praktischer Prüfung.',
      th: 'ใบประกาศนียบัตรของ Kosmetikschule Picha ประทับตรา BfD เมื่อสอบผ่านทั้งภาคทฤษฎีและภาคปฏิบัติ',
    },
    included: {
      de: ['Kursunterlagen', 'Öle und Materialien für den Kurstag', 'Zertifikat'],
      th: ['เอกสารประกอบการเรียน', 'น้ำมันและอุปกรณ์ที่ใช้ในวันเรียน', 'ใบประกาศนียบัตร'],
    },
    faq: [
      {
        q: {
          de: 'Kann ich den Kurs ohne Vorerfahrung besuchen?',
          th: 'ไม่มีประสบการณ์มาก่อนเรียนได้ไหม',
        },
        a: {
          de: 'Ja. Der Kurs beginnt bei der Anatomie und der Handhaltung. Sie üben den ganzen Tag unter Anleitung.',
          th: 'เรียนได้ หลักสูตรเริ่มจากกายวิภาคและการวางมือ แล้วฝึกจริงตลอดทั้งวันโดยมีครูดูแล',
        },
      },
      {
        q: { de: 'In welcher Sprache wird unterrichtet?', th: 'สอนเป็นภาษาอะไร' },
        a: {
          de: 'Auf Deutsch und Thailändisch. Fragen können Sie in beiden Sprachen stellen.',
          th: 'สอนทั้งภาษาเยอรมันและภาษาไทย ถามได้ทั้งสองภาษา',
        },
      },
      {
        q: { de: 'Was soll ich mitbringen?', th: 'ต้องเตรียมอะไรมาบ้าง' },
        a: {
          de: 'Bequeme Arbeitskleidung, flache Schuhe, kurze saubere Fingernägel und ein Handtuch. Alles Weitere stellt die Schule.',
          th: 'ชุดที่เคลื่อนไหวสะดวก รองเท้าพื้นราบ ตัดเล็บสั้นและสะอาด และผ้าเช็ดตัวหนึ่งผืน ที่เหลือโรงเรียนเตรียมให้',
        },
      },
      {
        q: {
          de: 'Darf ich nach dem Kurs beruflich behandeln?',
          th: 'จบแล้วเปิดรับลูกค้าได้เลยไหม',
        },
        a: {
          de: 'Das Zertifikat belegt die erfolgreiche Kursteilnahme. Ob und in welcher Form Sie selbstständig arbeiten dürfen, richtet sich nach den gewerberechtlichen Vorgaben an Ihrem Standort.',
          th: 'ใบประกาศเป็นหลักฐานว่าผ่านการอบรมแล้ว ส่วนจะเปิดกิจการเองได้ในรูปแบบใด ขึ้นอยู่กับข้อกำหนดทางการค้าในพื้นที่ของคุณ',
        },
      },
    ],
  },
  {
    id: 'lymphdrainage-cupping',
    slug: 'lymphdrainage-cupping',
    title: { de: 'Lymphdrainage + Cupping', th: 'นวดระบายน้ำเหลือง + ครอบแก้ว' },
    subtitle: {
      de: 'Lymphfluss anregen und Schröpfgläser sicher einsetzen',
      th: 'กระตุ้นการไหลเวียนน้ำเหลือง และใช้แก้วครอบอย่างปลอดภัย',
    },
    category: 'kurzkurs',
    bodyAreas: ['arme-beine', 'ganzkoerper'],
    price: 399,
    durationDays: 1,
    durationLabel: { de: '1 Tag · 09:00–17:00', th: '1 วัน · 09:00–17:00 น.' },
    languages: ['de', 'th'],
    audience: {
      de: 'Für Praktizierende, die zwei nachgefragte Techniken kombinieren und ihr Behandlungsangebot erweitern möchten.',
      th: 'เหมาะกับผู้ที่นวดอยู่แล้ว และอยากรวมสองเทคนิคที่ลูกค้าต้องการเข้าไว้ในบริการเดียว',
    },
    outcomes: {
      de: [
        'Verlauf und Richtung des Lymphsystems am Körper nachvollziehen',
        'Griffdruck der manuellen Lymphdrainage korrekt dosieren',
        'Schröpfgläser sicher ansetzen, führen und lösen',
        'Hautreaktionen einordnen und dokumentieren',
      ],
      th: [
        'เข้าใจเส้นทางและทิศทางของระบบน้ำเหลืองในร่างกาย',
        'ควบคุมน้ำหนักมือในการนวดระบายน้ำเหลืองได้อย่างถูกต้อง',
        'วางแก้วครอบ เคลื่อนแก้ว และถอนแก้วได้อย่างปลอดภัย',
        'อ่านปฏิกิริยาของผิวหนังและบันทึกผลได้',
      ],
    },
    curriculum: {
      de: [
        'Grundlagen des Lymphsystems',
        'Griffe und Reihenfolge der Drainage',
        'Statisches und bewegtes Schröpfen',
        'Kombinationsbehandlung Bein, Arm und Rücken',
        'Kontraindikationen und Nachsorge',
      ],
      th: [
        'พื้นฐานระบบน้ำเหลือง',
        'ท่ามือและลำดับการระบายน้ำเหลือง',
        'การครอบแก้วแบบอยู่กับที่และแบบเคลื่อนที่',
        'การนวดผสมบริเวณขา แขน และหลัง',
        'ข้อห้ามและการดูแลหลังการนวด',
      ],
    },
    prerequisites: {
      de: 'Keine Vorkenntnisse erforderlich, Grundkenntnisse in Massage sind hilfreich.',
      th: 'ไม่ต้องมีพื้นฐาน แต่ถ้าเคยนวดมาก่อนจะเรียนได้ง่ายขึ้น',
    },
    certificate: {
      de: 'Zertifikat der Kosmetikschule Picha mit BfD-Siegel.',
      th: 'ใบประกาศนียบัตรของ Kosmetikschule Picha ประทับตรา BfD',
    },
    included: {
      de: ['Kursunterlagen', 'Schröpfgläser zur Nutzung im Kurs', 'Zertifikat'],
      th: ['เอกสารประกอบการเรียน', 'แก้วครอบสำหรับใช้ในวันเรียน', 'ใบประกาศนียบัตร'],
    },
  },
  {
    id: 'wirbelsaeule',
    slug: 'wirbelsaeule-massage',
    title: { de: 'Wirbelsäule-Massage', th: 'นวดจัดกระดูกสันหลัง' },
    subtitle: {
      de: 'Arbeit entlang der Wirbelsäule, vom Becken bis zum Nacken',
      th: 'ทำงานตลอดแนวกระดูกสันหลัง ตั้งแต่เชิงกรานถึงต้นคอ',
    },
    category: 'kurzkurs',
    bodyAreas: ['ruecken'],
    price: 269,
    durationDays: 1,
    durationLabel: { de: '1 Tag · 09:00–17:00', th: '1 วัน · 09:00–17:00 น.' },
    languages: ['de', 'th'],
    audience: {
      de: 'Für Massagepraktizierende, die gezielt am Rücken arbeiten wollen.',
      th: 'เหมาะกับผู้ที่นวดอยู่แล้วและอยากทำงานเจาะจงที่หลัง',
    },
    outcomes: {
      de: [
        'Die Wirbelsäulenabschnitte ertasten und unterscheiden',
        'Paravertebrale Muskulatur gezielt und schonend behandeln',
        'Eine sichere Sequenz vom unteren Rücken bis zum Nacken durchführen',
      ],
      th: [
        'คลำและแยกแนวกระดูกสันหลังแต่ละช่วงได้',
        'นวดกล้ามเนื้อสองข้างกระดูกสันหลังได้ตรงจุดและนุ่มนวล',
        'ทำขั้นตอนตั้งแต่หลังส่วนล่างจนถึงต้นคอได้อย่างปลอดภัย',
      ],
    },
    curriculum: {
      de: [
        'Anatomie der Wirbelsäule und der Rückenmuskulatur',
        'Lagerung und Abdeckung',
        'Griffabfolge und Druckaufbau',
        'Grenzen der Behandlung und ärztliche Abklärung',
      ],
      th: [
        'กายวิภาคกระดูกสันหลังและกล้ามเนื้อหลัง',
        'การจัดท่าและการคลุมผ้า',
        'ลำดับท่ามือและการเพิ่มน้ำหนัก',
        'ขอบเขตของการนวด และกรณีที่ต้องส่งพบแพทย์',
      ],
    },
    prerequisites: { de: 'Keine Vorkenntnisse erforderlich.', th: 'ไม่ต้องมีพื้นฐานมาก่อน' },
    certificate: {
      de: 'Zertifikat der Kosmetikschule Picha mit BfD-Siegel.',
      th: 'ใบประกาศนียบัตรของ Kosmetikschule Picha ประทับตรา BfD',
    },
  },
  {
    id: 'sport-thai-yoga',
    slug: 'sport-thai-yoga-massage',
    title: { de: 'Sport- oder Thai-Yoga-Massage', th: 'นวดสปอร์ต หรือ นวดไทยโยคะ' },
    subtitle: {
      de: 'Kräftige Arbeit am Muskel oder geführte Dehnung am ganzen Körper',
      th: 'ลงน้ำหนักที่กล้ามเนื้อ หรือยืดเหยียดทั้งตัวแบบมีคนช่วย',
    },
    category: 'kurzkurs',
    bodyAreas: ['ganzkoerper', 'arme-beine'],
    price: 269,
    durationDays: 1,
    durationLabel: { de: '1 Tag · 09:00–17:00', th: '1 วัน · 09:00–17:00 น.' },
    languages: ['de', 'th'],
    audience: {
      de: 'Für alle, die entweder sportlich beanspruchte Muskulatur oder Beweglichkeit im Ganzkörperablauf bearbeiten wollen. Die Richtung wählen Sie bei der Anmeldung.',
      th: 'เหมาะกับผู้ที่อยากดูแลกล้ามเนื้อของคนออกกำลังกาย หรืออยากเพิ่มความยืดหยุ่นทั้งตัว เลือกสายที่ต้องการตอนสมัคร',
    },
    outcomes: {
      de: [
        'Muskelgruppen nach Belastung einschätzen',
        'Kräftige Grifftechniken sicher und ohne Überlastung einsetzen',
        'Geführte Dehnungen in einen Ablauf bringen',
      ],
      th: [
        'ประเมินกลุ่มกล้ามเนื้อตามลักษณะการใช้งาน',
        'ใช้ท่ามือที่ลงน้ำหนักมากได้อย่างปลอดภัย ไม่ทำร้ายตัวเองและลูกค้า',
        'เรียงท่ายืดเหยียดให้เป็นขั้นตอนต่อเนื่อง',
      ],
    },
    curriculum: {
      de: [
        'Aufbau einer Sportmassage vor und nach Belastung',
        'Thai-Yoga: Bodenarbeit, Körpergewicht und Hebel',
        'Eigene Körperhaltung und Gelenkschutz',
      ],
      th: [
        'โครงสร้างการนวดสปอร์ตก่อนและหลังการออกกำลังกาย',
        'นวดไทยโยคะ: การทำงานบนเบาะ การใช้น้ำหนักตัวและการงัด',
        'ท่าทางของผู้นวดเองและการถนอมข้อต่อ',
      ],
    },
    prerequisites: { de: 'Keine Vorkenntnisse erforderlich.', th: 'ไม่ต้องมีพื้นฐานมาก่อน' },
    certificate: {
      de: 'Zertifikat der Kosmetikschule Picha mit BfD-Siegel.',
      th: 'ใบประกาศนียบัตรของ Kosmetikschule Picha ประทับตรา BfD',
    },
  },
  {
    id: 'fussmassage-spa',
    slug: 'fussmassage-spa',
    title: { de: 'Fußmassage & Spa', th: 'นวดเท้าพร้อมสปาเท้า' },
    subtitle: {
      de: 'Reflexzonen am Fuß und eine vollständige Spa-Behandlung',
      th: 'จุดสะท้อนบนฝ่าเท้า พร้อมขั้นตอนสปาเท้าครบชุด',
    },
    category: 'kurzkurs',
    bodyAreas: ['fuesse'],
    price: 269,
    durationDays: 1,
    durationLabel: { de: '1 Tag · 09:00–17:00', th: '1 วัน · 09:00–17:00 น.' },
    languages: ['de', 'th'],
    audience: {
      de: 'Für Studios, die eine kurze, gut planbare Behandlung mit hoher Nachfrage anbieten möchten.',
      th: 'เหมาะกับร้านที่อยากมีบริการสั้น จัดคิวง่าย และลูกค้าต้องการสูง',
    },
    outcomes: {
      de: [
        'Zonen und Druckpunkte am Fuß sicher finden',
        'Einen vollständigen Spa-Ablauf mit Peeling, Bad und Massage durchführen',
        'Arbeitsplatz und Material hygienisch vorbereiten',
      ],
      th: [
        'หาจุดสะท้อนและจุดกดบนเท้าได้แม่นยำ',
        'ทำสปาเท้าครบขั้นตอน ทั้งแช่เท้า ขัดผิว มาส์ก และนวด',
        'เตรียมพื้นที่ทำงานและอุปกรณ์ให้ถูกสุขอนามัย',
      ],
    },
    curriculum: {
      de: [
        'Anatomie des Fußes',
        'Reflexzonen und Druckdosierung',
        'Fußbad, Peeling, Maske, Massage',
        'Hygiene und Materialpflege',
      ],
      th: [
        'กายวิภาคของเท้า',
        'จุดสะท้อนและการกำหนดน้ำหนักกด',
        'แช่เท้า ขัดผิว มาส์ก และนวด',
        'สุขอนามัยและการดูแลอุปกรณ์',
      ],
    },
    prerequisites: { de: 'Keine Vorkenntnisse erforderlich.', th: 'ไม่ต้องมีพื้นฐานมาก่อน' },
    certificate: {
      de: 'Zertifikat der Kosmetikschule Picha mit BfD-Siegel.',
      th: 'ใบประกาศนียบัตรของ Kosmetikschule Picha ประทับตรา BfD',
    },
  },
  {
    id: 'schwangerschaft',
    slug: 'schwangerschaftsmassage',
    title: { de: 'Schwangerschaftsmassage', th: 'นวดสตรีมีครรภ์' },
    subtitle: {
      de: 'Sichere Lagerung und angepasste Griffe in der Schwangerschaft',
      th: 'การจัดท่าที่ปลอดภัยและท่ามือที่ปรับให้เหมาะกับคนท้อง',
    },
    category: 'kurzkurs',
    bodyAreas: ['ganzkoerper', 'ruecken'],
    price: 269,
    durationDays: 1,
    durationLabel: { de: '1 Tag · 09:00–17:00', th: '1 วัน · 09:00–17:00 น.' },
    languages: ['de', 'th'],
    audience: {
      de: 'Für Praktizierende, die Schwangere verantwortungsvoll behandeln möchten.',
      th: 'เหมาะกับผู้ที่ต้องการดูแลลูกค้าตั้งครรภ์อย่างรับผิดชอบ',
    },
    outcomes: {
      de: [
        'Seitenlagerung mit Kissen sicher aufbauen',
        'Griffe, Druck und Dauer an die Schwangerschaft anpassen',
        'Zonen und Situationen erkennen, in denen nicht behandelt wird',
      ],
      th: [
        'จัดท่านอนตะแคงด้วยหมอนได้อย่างปลอดภัย',
        'ปรับท่ามือ น้ำหนัก และระยะเวลาให้เหมาะกับอายุครรภ์',
        'รู้บริเวณและสถานการณ์ที่ห้ามนวด',
      ],
    },
    curriculum: {
      de: [
        'Veränderungen im Körper während der Schwangerschaft',
        'Lagerung und Abdeckung',
        'Rücken, Beine, Schultern, Füße',
        'Kontraindikationen und Rücksprache mit der ärztlichen Betreuung',
      ],
      th: [
        'การเปลี่ยนแปลงของร่างกายระหว่างตั้งครรภ์',
        'การจัดท่าและการคลุมผ้า',
        'หลัง ขา ไหล่ และเท้า',
        'ข้อห้าม และการปรึกษาแพทย์ผู้ดูแลครรภ์',
      ],
    },
    prerequisites: {
      de: 'Grundkenntnisse in Massage werden empfohlen.',
      th: 'แนะนำให้มีพื้นฐานการนวดมาก่อน',
    },
    certificate: {
      de: 'Zertifikat der Kosmetikschule Picha mit BfD-Siegel.',
      th: 'ใบประกาศนียบัตรของ Kosmetikschule Picha ประทับตรา BfD',
    },
  },
  {
    id: 'facial-lifting',
    slug: 'facial-lifting',
    title: { de: 'Facial Lifting', th: 'นวดหน้าลิฟติ้ง + ระบายน้ำเหลือง' },
    subtitle: {
      de: 'Gesichtsmassage mit Lifting-Griffen und Lymphdrainage',
      th: 'นวดหน้าด้วยท่ายกกระชับ ร่วมกับการระบายน้ำเหลือง',
    },
    category: 'kurzkurs',
    bodyAreas: ['kopf-gesicht'],
    price: 399,
    durationDays: 1,
    durationLabel: { de: '1 Tag · 09:00–17:00', th: '1 วัน · 09:00–17:00 น.' },
    languages: ['de', 'th'],
    audience: {
      de: 'Für Kosmetikstudios, die eine sichtbare, wiederholbare Gesichtsbehandlung anbieten.',
      th: 'เหมาะกับร้านความงามที่อยากมีทรีตเมนต์หน้าที่เห็นผลและทำซ้ำได้',
    },
    outcomes: {
      de: [
        'Die Gesichtsmuskulatur und ihre Zugrichtungen benennen',
        'Lifting-Griffe in der richtigen Richtung und Reihenfolge ausführen',
        'Lymphdrainage im Gesicht mit dem richtigen, sehr geringen Druck arbeiten',
      ],
      th: [
        'บอกชื่อกล้ามเนื้อใบหน้าและทิศทางการดึงของแต่ละมัดได้',
        'ทำท่ายกกระชับได้ถูกทิศทางและถูกลำดับ',
        'ระบายน้ำเหลืองบนใบหน้าด้วยน้ำหนักที่เบามากอย่างถูกต้อง',
      ],
    },
    curriculum: {
      de: [
        'Anatomie von Gesicht und Hals',
        'Lifting-Griffe und Abfolge',
        'Lymphwege im Gesicht',
        'Aufbau einer 60-Minuten-Behandlung',
      ],
      th: [
        'กายวิภาคใบหน้าและลำคอ',
        'ท่ายกกระชับและลำดับขั้นตอน',
        'เส้นทางน้ำเหลืองบนใบหน้า',
        'การจัดทรีตเมนต์ 60 นาที',
      ],
    },
    prerequisites: { de: 'Keine Vorkenntnisse erforderlich.', th: 'ไม่ต้องมีพื้นฐานมาก่อน' },
    certificate: {
      de: 'Zertifikat der Kosmetikschule Picha mit BfD-Siegel.',
      th: 'ใบประกาศนียบัตรของ Kosmetikschule Picha ประทับตรา BfD',
    },
  },
  {
    id: 'gua-sha',
    slug: 'gua-sha-massage',
    title: { de: 'Gua-Sha-Massage', th: 'นวดกัวซา' },
    subtitle: {
      de: 'Arbeit mit dem Schabewerkzeug an Gesicht, Nacken und Rücken',
      th: 'ใช้แผ่นขูดกัวซาบริเวณใบหน้า ต้นคอ และหลัง',
    },
    category: 'kurzkurs',
    bodyAreas: ['kopf-gesicht', 'nacken-schulter'],
    price: 269,
    durationDays: 1,
    durationLabel: { de: '1 Tag · 09:00–17:00', th: '1 วัน · 09:00–17:00 น.' },
    languages: ['de', 'th'],
    audience: {
      de: 'Für Praktizierende, die eine werkzeuggeführte Technik sauber erlernen wollen.',
      th: 'เหมาะกับผู้ที่อยากเรียนเทคนิคการใช้อุปกรณ์ให้ถูกวิธี',
    },
    outcomes: {
      de: [
        'Das Werkzeug im richtigen Winkel und Druck führen',
        'Strichrichtungen an Gesicht, Nacken und Rücken einhalten',
        'Hautreaktionen richtig einordnen und der Kundin erklären',
      ],
      th: [
        'จับและลากแผ่นกัวซาได้ถูกองศาและถูกน้ำหนัก',
        'ลากตามทิศทางที่ถูกต้องทั้งใบหน้า ต้นคอ และหลัง',
        'อธิบายรอยแดงและปฏิกิริยาของผิวให้ลูกค้าเข้าใจได้',
      ],
    },
    curriculum: {
      de: [
        'Werkzeugkunde und Materialpflege',
        'Winkel, Druck und Strichlänge',
        'Ablauf Gesicht und Ablauf Rücken',
        'Reaktionen, Nachsorge und Hygiene',
      ],
      th: [
        'ชนิดของอุปกรณ์และการดูแลรักษา',
        'องศา น้ำหนัก และความยาวของการลาก',
        'ขั้นตอนสำหรับใบหน้าและสำหรับหลัง',
        'ปฏิกิริยาหลังทำ การดูแลต่อ และสุขอนามัย',
      ],
    },
    prerequisites: { de: 'Keine Vorkenntnisse erforderlich.', th: 'ไม่ต้องมีพื้นฐานมาก่อน' },
    certificate: {
      de: 'Zertifikat der Kosmetikschule Picha mit BfD-Siegel.',
      th: 'ใบประกาศนียบัตรของ Kosmetikschule Picha ประทับตรา BfD',
    },
  },
  {
    id: 'klassische-massage',
    slug: 'klassische-massage',
    title: { de: 'Klassische Massage', th: 'นวดสวีดิชพื้นฐาน' },
    subtitle: {
      de: 'Die schwedische Grundausbildung — das Fundament für alles Weitere',
      th: 'หลักสูตรพื้นฐานแบบสวีดิช รากฐานของทุกเทคนิคที่เหลือ',
    },
    category: 'ausbildung',
    bodyAreas: ['ganzkoerper', 'ruecken', 'arme-beine'],
    price: 550,
    durationDays: 2,
    // CLIENT-VERIFY: exakte Kurstage
    durationLabel: { de: 'Mehrtägig · 09:00–17:00', th: 'หลายวัน · 09:00–17:00 น.' },
    languages: ['de', 'th'],
    audience: {
      de: 'Für Einsteigerinnen und Einsteiger, die eine belastbare Grundlage für den Beruf aufbauen möchten.',
      th: 'เหมาะกับผู้เริ่มต้นที่ต้องการวางพื้นฐานให้แน่นก่อนทำเป็นอาชีพ',
    },
    outcomes: {
      de: [
        'Die fünf klassischen Grifftechniken sicher ausführen',
        'Eine Ganzkörperbehandlung strukturiert aufbauen',
        'Ergonomisch arbeiten und die eigenen Gelenke schützen',
        'Anamnese führen und die Behandlung dokumentieren',
      ],
      th: [
        'ทำท่ามือพื้นฐานทั้งห้าแบบได้อย่างมั่นใจ',
        'ออกแบบการนวดทั้งตัวให้เป็นลำดับขั้นตอน',
        'ทำงานถูกหลักสรีระและถนอมข้อต่อของตัวเอง',
        'ซักประวัติลูกค้าและบันทึกผลการนวดได้',
      ],
    },
    curriculum: {
      de: [
        'Anatomie und Physiologie im Überblick',
        'Streichung, Knetung, Reibung, Klopfung, Vibration',
        'Rücken, Beine, Arme, Nacken',
        'Anamnese, Kontraindikationen, Dokumentation',
        'Theoretische und praktische Prüfung',
      ],
      th: [
        'ภาพรวมกายวิภาคและสรีรวิทยา',
        'ท่าลูบ ท่าคลึง ท่าถู ท่าเคาะ และท่าสั่น',
        'หลัง ขา แขน และต้นคอ',
        'การซักประวัติ ข้อห้าม และการบันทึก',
        'สอบภาคทฤษฎีและภาคปฏิบัติ',
      ],
    },
    prerequisites: { de: 'Keine Vorkenntnisse erforderlich.', th: 'ไม่ต้องมีพื้นฐานมาก่อน' },
    certificate: {
      de: 'Zertifikat der Kosmetikschule Picha mit BfD-Siegel.',
      th: 'ใบประกาศนียบัตรของ Kosmetikschule Picha ประทับตรา BfD',
    },
  },
  {
    id: 'kosmetiker',
    slug: 'kosmetiker-in',
    title: { de: 'Kosmetiker/in', th: 'หลักสูตรความงาม 3 วัน' },
    subtitle: {
      de: 'Die Beauty-Ausbildung in drei Tagen — mit sieben Einzelzertifikaten',
      th: 'หลักสูตรความงามเรียน 3 วัน รับใบประกาศ 7 ใบ',
    },
    category: 'ausbildung',
    bodyAreas: ['kopf-gesicht', 'praxis'],
    price: 899,
    durationDays: 3,
    durationLabel: { de: '3 Tage · 09:00–17:00', th: '3 วัน · 09:00–17:00 น.' },
    languages: ['de', 'th'],
    audience: {
      de: 'Für Quereinsteigerinnen und Quereinsteiger sowie für Studios, die ihr Leistungsangebot verbreitern.',
      th: 'เหมาะกับผู้เปลี่ยนสายอาชีพ และร้านที่อยากขยายบริการให้ครอบคลุมขึ้น',
    },
    outcomes: {
      de: [
        'Hauttypen und Hautzustände beurteilen',
        'Eine vollständige Gesichtsbehandlung durchführen',
        'Mit Geräten und Wirkstoffen sicher umgehen',
        'Kundinnen und Kunden fachlich beraten',
      ],
      th: [
        'วิเคราะห์ประเภทและสภาพผิวได้',
        'ทำทรีตเมนต์ใบหน้าได้ครบทั้งขั้นตอน',
        'ใช้เครื่องมือและสารบำรุงได้อย่างปลอดภัย',
        'ให้คำแนะนำลูกค้าได้อย่างมืออาชีพ',
      ],
    },
    curriculum: {
      de: [
        'Hautanalyse und Hautkunde',
        'Reinigung, Peeling, Ausreinigung, Maske',
        'Augenbrauen, Wimpern, Make-up-Grundlagen',
        'Wirkstoffe und Produktkunde',
        'Beratung und Verkauf',
      ],
      th: [
        'การวิเคราะห์ผิวและความรู้เรื่องผิวหนัง',
        'ทำความสะอาด ผลัดเซลล์ กดสิว และมาส์ก',
        'คิ้ว ขนตา และพื้นฐานการแต่งหน้า',
        'สารบำรุงและความรู้เรื่องผลิตภัณฑ์',
        'การให้คำปรึกษาและการขาย',
      ],
    },
    prerequisites: { de: 'Keine Vorkenntnisse erforderlich.', th: 'ไม่ต้องมีพื้นฐานมาก่อน' },
    // CLIENT-VERIFY: Bezeichnung der 7 Zertifikate
    certificate: {
      de: 'Sieben Einzelzertifikate der Kosmetikschule Picha mit BfD-Siegel.',
      th: 'ใบประกาศนียบัตรแยก 7 ใบ ของ Kosmetikschule Picha ประทับตรา BfD',
    },
  },
  {
    id: 'fusspflege',
    slug: 'fusspflege',
    title: { de: 'Fußpflege', th: 'หลักสูตรดูแลเท้า' },
    subtitle: {
      de: 'Professionelle Fußpflege — ausbaubar Richtung med. Fußpflege',
      th: 'ดูแลเท้าระดับมืออาชีพ ต่อยอดเป็น Med. Fußpflege ได้',
    },
    category: 'ausbildung',
    bodyAreas: ['fuesse', 'praxis'],
    price: 855,
    durationDays: 3,
    // CLIENT-VERIFY: exakte Kurstage
    durationLabel: { de: 'Mehrtägig · 09:00–17:00', th: 'หลายวัน · 09:00–17:00 น.' },
    languages: ['de', 'th'],
    audience: {
      de: 'Für alle, die Fußpflege als eigenständige Dienstleistung anbieten und später weiter qualifizieren möchten.',
      th: 'เหมาะกับผู้ที่อยากเปิดบริการดูแลเท้าเป็นงานหลัก และต่อยอดวุฒิได้ในอนาคต',
    },
    outcomes: {
      de: [
        'Den Fuß beurteilen und Veränderungen erkennen',
        'Nägel und Hornhaut fachgerecht bearbeiten',
        'Instrumente sicher führen, reinigen und sterilisieren',
        'Grenzen zur medizinischen Fußpflege einhalten',
      ],
      th: [
        'ตรวจสภาพเท้าและสังเกตความผิดปกติได้',
        'ตัดแต่งเล็บและกำจัดหนังแข็งได้อย่างถูกวิธี',
        'ใช้ ทำความสะอาด และฆ่าเชื้ออุปกรณ์ได้อย่างปลอดภัย',
        'รู้ขอบเขตระหว่างงานดูแลเท้าทั่วไปกับงานทางการแพทย์',
      ],
    },
    curriculum: {
      de: [
        'Anatomie und Hautkunde am Fuß',
        'Nagelbearbeitung und Hornhautabtragung',
        'Instrumentenkunde und Aufbereitung',
        'Häufige Fußprobleme und ärztliche Abklärung',
      ],
      th: [
        'กายวิภาคและความรู้เรื่องผิวหนังบริเวณเท้า',
        'การตัดแต่งเล็บและการกำจัดหนังแข็ง',
        'ความรู้เรื่องอุปกรณ์และการทำให้ปราศจากเชื้อ',
        'ปัญหาเท้าที่พบบ่อยและกรณีที่ต้องส่งพบแพทย์',
      ],
    },
    prerequisites: { de: 'Keine Vorkenntnisse erforderlich.', th: 'ไม่ต้องมีพื้นฐานมาก่อน' },
    certificate: {
      de: 'Zertifikat der Kosmetikschule Picha mit BfD-Siegel.',
      th: 'ใบประกาศนียบัตรของ Kosmetikschule Picha ประทับตรา BfD',
    },
  },
  {
    id: 'hygienekurs',
    slug: 'hygienekurs',
    title: { de: 'Hygienekurs', th: 'หลักสูตรสุขอนามัยสำหรับเจ้าของร้าน' },
    subtitle: {
      de: 'Der Sachkundenachweis, den jedes Massage- und Kosmetikstudio braucht',
      th: 'ใบรับรองความรู้ด้านสุขอนามัยที่ร้านนวดและร้านความงามทุกร้านต้องมี',
    },
    category: 'betrieb',
    bodyAreas: ['praxis'],
    price: 250,
    priceNote: { de: 'zzgl. 19 % MwSt.', th: 'ยังไม่รวมภาษี 19%' },
    durationDays: 1,
    durationLabel: { de: '8 Unterrichtsstunden', th: 'อบรม 8 ชั่วโมง' },
    languages: ['de', 'th'],
    audience: {
      de: 'Für Inhaberinnen und Inhaber von Massage-, Kosmetik- und Spa-Betrieben sowie für deren Teams.',
      th: 'เหมาะกับเจ้าของร้านนวด ร้านความงาม และสปา รวมถึงทีมงานในร้าน',
    },
    outcomes: {
      de: [
        'Einen Hygieneplan für den eigenen Betrieb erstellen',
        'Instrumente korrekt reinigen, desinfizieren und sterilisieren',
        'Rechtliche Grundlagen der Betriebshygiene anwenden',
        'Die Sachkenntnis in der Kenntnisprüfung nachweisen',
      ],
      th: [
        'จัดทำแผนสุขอนามัยสำหรับร้านของตัวเองได้',
        'ทำความสะอาด ฆ่าเชื้อ และสเตอริไลซ์อุปกรณ์ได้ถูกต้อง',
        'นำข้อกำหนดทางกฎหมายด้านสุขอนามัยมาใช้จริงได้',
        'สอบผ่านการวัดความรู้เพื่อยืนยันความสามารถ',
      ],
    },
    curriculum: {
      de: [
        'Mikrobiologie',
        'Infektionslehre',
        'Rechtliche Grundlagen',
        'Hygieneplan',
        'Instrumentenaufbereitung',
        'Reinigung und Desinfektion von Instrumenten',
        'Sterilisation und Lagerung',
        'Kenntnisprüfung',
      ],
      th: [
        'จุลชีววิทยา',
        'ความรู้เรื่องการติดเชื้อ',
        'พื้นฐานทางกฎหมาย',
        'แผนสุขอนามัย',
        'การเตรียมอุปกรณ์',
        'การทำความสะอาดและฆ่าเชื้ออุปกรณ์',
        'การสเตอริไลซ์และการจัดเก็บ',
        'การสอบวัดความรู้',
      ],
    },
    prerequisites: { de: 'Keine Vorkenntnisse erforderlich.', th: 'ไม่ต้องมีพื้นฐานมาก่อน' },
    certificate: {
      de: 'Zertifikat über den Lehrgang zur Erlangung der Sachkenntnis, ärztlich gezeichnet durch Prof. Dr. med. Bernd Wüsten. Ausgabe direkt am Kurstag.',
      th: 'ใบประกาศนียบัตรรับรองความรู้ ลงนามโดยแพทย์ Prof. Dr. med. Bernd Wüsten รับได้ในวันเรียนเลย',
    },
  },
  {
    id: 'gel-basis',
    slug: 'basiskurs-gelmodellage',
    title: { de: 'Basiskurs Gelmodellage', th: 'คอร์สปูพื้นฐานทำเล็บเจล' },
    subtitle: {
      de: 'Naturnagel vorbereiten, Russian Maniküre und ein Overlay, das hält',
      th: 'ปูพื้นฐานทำเล็บเจลอย่างถูกวิธี พร้อมต่อยอดสู่อาชีพจริง',
    },
    category: 'ausbildung',
    bodyAreas: ['haende-naegel'],
    price: 750,
    priceNote: { de: 'zzgl. 19 % MwSt.', th: 'ยังไม่รวมภาษี 19%' },
    durationDays: 2,
    durationLabel: { de: '2 Tage · 09:00–17:00', th: '2 วัน · 09:00–17:00 น.' },
    languages: ['de', 'th'],
    audience: {
      de: 'Für Einsteigerinnen und Einsteiger ohne Vorkenntnisse und für Nageldesignerinnen, die ihre Technik systematisch nacharbeiten wollen.',
      th: 'เหมาะสำหรับผู้เริ่มต้น ไม่มีพื้นฐาน และผู้ที่ต้องการพัฒนาทักษะการทำเล็บให้เป็นระบบ',
    },
    outcomes: {
      de: [
        'Den Naturnagel nach Salon-Standard vorbereiten und die Vorbehandlung in der richtigen Reihenfolge aufbauen',
        'Cleanser, Dehydrator, Primer und Base Gel unterscheiden und gezielt einsetzen',
        'Die Fräse sicher führen, ohne den Naturnagel zu schädigen',
        'Ein Overlay modellieren, das hält, und die Nagelform ausbalanciert feilen',
        'Gel ablösen, ohne die Nagelplatte anzugreifen',
      ],
      th: [
        'เตรียมหน้าเล็บตามมาตรฐานร้าน และวางขั้นตอนก่อนลงเจลได้ถูกลำดับ',
        'แยกความต่างของ Cleanser, Dehydrator, Primer และ Base Gel และเลือกใช้ได้ตรงงาน',
        'ใช้เครื่องเจียร์ได้อย่างมั่นใจ โดยไม่ทำให้หน้าเล็บเสียหาย',
        'วางโครง Overlay ให้แข็งแรง และตะไบทรงเล็บให้สมดุล',
        'ถอดเจลได้อย่างถูกวิธี ไม่ทำร้ายแผ่นเล็บ',
      ],
    },
    curriculum: {
      de: [
        'Nagelvorbereitung nach Salon-Standard',
        'Produkte der Vorbehandlung: Cleanser, Dehydrator, Primer, Base Gel',
        'Sichere Führung der Fräse (E-File)',
        'Nagelhaut vorbereiten und reinigen',
        'Technik der Russian Maniküre',
        'Nagelfläche aufbauen und korrigieren',
        'Farbgel gleichmäßig, sauber und haltbar auftragen',
        'Overlay setzen — stabil und natürlich im Ergebnis',
        'Nagelform ausbalanciert feilen',
        'Gel schadenfrei ablösen',
        'Praxis am Modell mit Einzelkorrektur',
      ],
      th: [
        'การเตรียมหน้าเล็บแบบมาตรฐาน Salon Prep',
        'การเลือกและใช้ผลิตภัณฑ์สำหรับเตรียมหน้าเล็บ Cleanser • Dehydrator • Primer • Base Gel',
        'การใช้เครื่องเจียร์ E-File อย่างถูกวิธี',
        'การเตรียมและทำความสะอาดหนังรอบเล็บ',
        'เทคนิค Russian Manikure',
        'การเสริมและปรับโครงสร้างหน้าเล็บ',
        'เทคนิคการทาสีเจลให้เรียบ สวย และติดทน',
        'การวาง Overlay ให้แข็งแรงและดูเป็นธรรมชาติ',
        'การตะไบทรงเล็บให้สวยสมดุล',
        'การถอด Gel อย่างถูกวิธี ลดความเสียหายต่อหน้าเล็บ',
        'ฝึกปฏิบัติจริง พร้อมคำแนะนำและแก้ไขเทคนิคแบบตัวต่อตัว',
      ],
    },
    prerequisites: { de: 'Keine Vorkenntnisse erforderlich.', th: 'ไม่ต้องมีพื้นฐานมาก่อน' },
    certificate: {
      de: 'Zwei Zertifikate: eines der Kosmetikschule Picha und eines mit BfD-Siegel.',
      th: 'ใบประกาศนียบัตร 2 ใบ จากโรงเรียน S.Picha และแบบประทับตรา BfD',
    },
    included: {
      de: ['Kursunterlagen', 'Produkte und Materialien für beide Kurstage', 'Zwei Zertifikate'],
      th: ['เอกสารประกอบการเรียน', 'ผลิตภัณฑ์และอุปกรณ์ที่ใช้ทั้งสองวัน', 'ใบประกาศนียบัตร 2 ใบ'],
    },
    faq: [
      {
        q: {
          de: 'Kann ich den Kurs ohne Vorerfahrung besuchen?',
          th: 'ไม่มีประสบการณ์มาก่อนเรียนได้ไหม',
        },
        a: {
          de: 'Ja. Tag eins beginnt bei der Produktkunde und der Vorbereitung des Naturnagels. Sie arbeiten an beiden Tagen am Modell und werden einzeln korrigiert.',
          th: 'เรียนได้ วันแรกเริ่มจากความรู้เรื่องผลิตภัณฑ์และการเตรียมหน้าเล็บ คุณจะได้ฝึกกับแบบจริงทั้งสองวัน และมีครูแก้เทคนิคให้แบบตัวต่อตัว',
        },
      },
      {
        q: {
          de: 'Brauche ich eigene Fräse und Produkte?',
          th: 'ต้องเตรียมเครื่องเจียร์และผลิตภัณฑ์มาเองไหม',
        },
        a: {
          de: 'Nein. Produkte und Materialien für beide Kurstage sind im Preis enthalten. Wer mit dem eigenen Gerät arbeiten möchte, darf es mitbringen.',
          th: 'ไม่ต้อง ผลิตภัณฑ์และอุปกรณ์ที่ใช้ทั้งสองวันรวมอยู่ในค่าเรียนแล้ว ถ้าอยากใช้เครื่องของตัวเองก็นำมาได้',
        },
      },
      {
        q: {
          de: 'Darf ich nach dem Kurs beruflich arbeiten?',
          th: 'จบแล้วเปิดรับลูกค้าได้เลยไหม',
        },
        a: {
          de: 'Das Zertifikat belegt die erfolgreiche Kursteilnahme. Ob und in welcher Form Sie selbstständig arbeiten dürfen, richtet sich nach den gewerberechtlichen Vorgaben an Ihrem Standort.',
          th: 'ใบประกาศเป็นหลักฐานว่าผ่านการอบรมแล้ว ส่วนจะเปิดกิจการเองได้ในรูปแบบใด ขึ้นอยู่กับข้อกำหนดทางการค้าในพื้นที่ของคุณ',
        },
      },
    ],
  },
] as const;

export const PROGRAM_BY_ID = new Map(PROGRAMS.map((p) => [p.id, p]));
export const PROGRAM_BY_SLUG = new Map(PROGRAMS.map((p) => [p.slug, p]));

export const FEATURED_PROGRAM_ID = 'office-syndrom';

export const CATEGORY_LABEL: Record<ProgramCategory, Record<Locale, string>> = {
  kurzkurs: { de: 'Kurzkurs', th: 'หลักสูตรเร่งรัด' },
  ausbildung: { de: 'Ausbildung', th: 'หลักสูตรวิชาชีพ' },
  betrieb: { de: 'Für Betriebe', th: 'สำหรับเจ้าของกิจการ' },
};

export const CATEGORY_ORDER: readonly ProgramCategory[] = ['kurzkurs', 'ausbildung', 'betrieb'];
