import type { Locale } from '@/i18n/config';

/** Fills `{name}` placeholders in a dictionary string. */
export function fill(template: string, values: Record<string, string | number>): string {
  return template.replace(/\{(\w+)\}/g, (_, key: string) => String(values[key] ?? ''));
}

/**
 * All chrome and section copy, in both languages.
 *
 * The Thai text follows the school's own wording from its printed material
 * (หลักสูตร, ใบประกาศนียบัตร, โรงเรียนสอนวิชาชีพ). It still needs a native
 * review before launch — see docs/CLIENT-VERIFY.md.
 */
export type UiDictionary = typeof UI.de;

export const UI = {
  de: {
    skipToContent: 'Zum Inhalt springen',
    nav: {
      finder: 'Kurs finden',
      schedule: 'Termine',
      catalog: 'Kurse',
      school: 'Schule',
      contact: 'Kontakt',
      allCourses: 'Alle Kurse',
      learn: 'So wird gelernt',
      contactFooter: 'Anfrage und Anfahrt',
      openMenu: 'Menü öffnen',
      closeMenu: 'Menü schließen',
      chooseLanguage: 'Sprache wählen',
      main: 'Hauptnavigation',
      footer: 'Fußzeile',
      school_: 'Kosmetikschule',
      recognised: 'Anerkannte',
    },
    hero: {
      kicker: 'Standort Ahrensburg · seit 1997',
      headlineA: 'Ihre Hände',
      headlineB: 'können eine',
      headlineAccent: 'Zukunft',
      headlineC: 'bauen.',
      lead: 'Lernen Sie Massage, Fußpflege, Spa und Kosmetik in Ahrensburg — mit erfahrenen Ausbilderinnen, geführter Praxis und einem Zertifikat, das im Beruf zählt.',
      secondary: 'เรียนนวด สปา ดูแลเท้า และความงาม ที่เมือง Ahrensburg สอนภาษาไทยและเยอรมัน',
      ctaPrimary: 'Kurs finden',
      ctaSecondary: 'Termine ansehen',
      motto: 'Berührung ist eine Fähigkeit. Übung macht daraus einen Beruf.',
      next: 'Weiter',
    },
    nextCourse: {
      label: 'Nächster Kurs',
      emptyTitle: 'Zurzeit ist kein Termin veröffentlicht.',
      emptyBody: 'Fragen Sie nach dem nächsten geplanten Kurs — wir melden uns mit einem Datum.',
      emptyCta: 'Nach dem nächsten Termin fragen',
      date: 'Datum',
      time: 'Zeit',
      language: 'Sprache',
      price: 'Gebühr',
      request: 'Platz anfragen',
      waitlist: 'Auf die Warteliste',
      updated: 'Aktualisiert',
      lastConfirmed: 'Zuletzt bestätigt',
      clock: 'Uhr',
    },
    trust: {
      srTitle: 'Anerkennung und Rahmenbedingungen',
      recognition: 'Anerkennung',
      licence: 'Lehrbefugnis',
      teaching: 'Unterricht',
      practice: 'Praxis',
      travel: 'Anreise',
      licenceValue: 'Ausbildungsbefugnis Kosmetik und Wellness',
      licenceDetail: 'Erteilt durch das Regierungspräsidium Darmstadt an Sunisa Picha, 2005.',
      teachingValue: 'Deutsch und ไทย',
      teachingDetail: 'Sie dürfen in der Sprache fragen, in der Sie denken.',
      practiceValue: 'Kleine Gruppen, Hand an Hand',
      practiceDetail: 'Bei jedem Termin sehen Sie, wie viele Plätze noch frei sind.',
      travelValue: 'Ahrensburg, U1 ab Hamburg',
      disclaimer:
        'Ein Zertifikat der Schule belegt die erfolgreiche Teilnahme an einem Kurs mit bestandener Prüfung. Es ist kein staatlicher Berufsabschluss. Welche Tätigkeiten Sie damit anbieten dürfen, richtet sich nach den gewerberechtlichen Vorgaben an Ihrem Standort.',
    },
    sections: {
      finder: {
        index: '03',
        kicker: 'Kurs finden',
        titleA: 'Wo soll Ihre Arbeit',
        titleAccent: 'ansetzen',
        titleB: '?',
        lead: 'Die meisten Menschen suchen keinen Kursnamen, sondern eine Stelle am Körper, an der etwas nicht stimmt. Wählen Sie den Bereich — die passenden Kurse erscheinen daneben.',
      },
      schedule: {
        index: '04',
        kicker: 'Live-Termine',
        titleA: 'Die nächsten',
        titleAccent: 'Kurstage',
        titleB: '',
        lead: 'Jeder Termin zeigt Datum, Zeit, Sprache, Gebühr und freie Plätze. Die Liste wird direkt aus dem Kalender der Schulleitung gepflegt.',
      },
      catalog: {
        index: '05',
        kicker: 'Das Programm',
        titleA: 'Zwölf Kurse, drei',
        titleAccent: 'Wege',
        titleB: '',
        lead: 'Vom Ein-Tages-Kurs, den Sie am Montag darauf anwenden, bis zur mehrtägigen Ausbildung mit Prüfung.',
      },
      featured: {
        index: '06',
        kicker: 'Ein Kurs im Detail',
        titleA: 'So genau steht jeder',
        titleAccent: 'Kurs',
        titleB: 'hier',
        lead: 'Was Sie lernen, was geprüft wird, was es kostet und wann der nächste Termin ist — für jeden Kurs nach demselben Muster.',
      },
      learn: {
        index: '07',
        kicker: 'Der Kurstag',
        titleA: 'Sechs Schritte, bis es in der',
        titleAccent: 'Hand',
        titleB: 'sitzt',
        lead: 'Erklären, zeigen, üben, korrigieren, anwenden, prüfen. Jeder Kurstag folgt derselben Abfolge.',
      },
      outcomes: {
        index: '08',
        kicker: 'Nach dem Kurs',
        titleA: 'Was Menschen mit dieser Fähigkeit',
        titleAccent: 'anfangen',
        titleB: '',
        lead: '',
      },
      school: {
        index: '09',
        kicker: 'Die Schule',
        titleA: 'Von der Krankenpflege in Uttaradit nach',
        titleAccent: 'Ahrensburg',
        titleB: '',
        lead: 'Wer hier unterrichtet, hat den Weg selbst gemacht: eine Ausbildung in Thailand, eine staatliche Prüfung in Deutschland und die Befugnis, andere auszubilden.',
      },
      evidence: {
        index: '10',
        kicker: 'Belege',
        titleA: 'Was sich',
        titleAccent: 'nachweisen',
        titleB: 'lässt',
        lead: '',
      },
      contact: {
        index: '11',
        kicker: 'Anfahrt und Anfrage',
        titleA: 'Fragen Sie nach einem',
        titleAccent: 'Platz',
        titleB: '',
        lead: 'Sagen Sie uns, welcher Kurs und welcher Termin. Sie bekommen eine persönliche Antwort — auf Deutsch oder auf Thailändisch.',
      },
    },
    finder: {
      selectedArea: 'Ausgewählter Bereich',
      typicalReasons: 'Typische Anlässe:',
      allAreas: 'Alle Bereiche',
      chooseArea: 'Körperbereich wählen',
      hint: 'Punkt wählen oder mit den Pfeiltasten wechseln. Die vollständige Liste steht rechts.',
      mapAlt:
        'Stehende Person in neutraler Haltung. Über der Abbildung liegen auswählbare Körperbereiche.',
      courses: 'Kurse',
    },
    schedule: {
      views: {
        next: 'Nächste Termine',
        byProgram: 'Nach Kurs',
        byMonth: 'Nach Monat',
        nextHint: 'Chronologisch, der nächste zuerst',
        byProgramHint: 'Erst den Kurs wählen, dann Termine vergleichen',
        byMonthHint: 'Nach Monaten gruppiert',
        label: 'Darstellung der Termine',
      },
      status: 'Stand',
      lastConfirmed: 'Zuletzt bestätigt',
      refresh: 'Aktualisieren',
      loading: 'Wird geladen…',
      filterLegend: 'Termine filtern',
      courseType: 'Kursart',
      bodyArea: 'Körperbereich',
      language: 'Sprache',
      all: 'Alle',
      onlyAvailable: 'Nur Termine mit freien Plätzen',
      resetFilters: 'Filter zurücksetzen',
      course: 'Kurs',
      syncError:
        'Die Terminliste konnte gerade nicht aktualisiert werden. Sie sehen den zuletzt bestätigten Stand.',
      emptyFiltered: 'Zu dieser Auswahl gibt es gerade keinen Termin.',
      emptyAll: 'Zurzeit ist kein Termin veröffentlicht.',
      emptyBody:
        'Neue Termine erscheinen hier, sobald die Schulleitung sie freigibt. Fragen Sie nach dem nächsten geplanten Kurs — Sie bekommen eine persönliche Antwort mit einem Datum.',
      emptyCta: 'Nach dem nächsten Termin fragen',
      showAll: 'Alle Termine zeigen',
      countOne: 'Termin',
      countMany: 'Termine',
      countNote: 'Alle Angaben ohne Gewähr, Änderungen werden hier veröffentlicht.',
      loadingSr: 'Termine werden geladen',
      updatedBadge: 'Aktualisiert',
      noSeat: 'Kein Platz buchbar',
      placesOf: '{free} von {total} Plätzen frei',
      request: 'Platz anfragen',
      waitlist: 'Auf die Warteliste',
    },
    catalog: {
      requestCourse: 'Kurs anfragen',
      groups: {
        kurzkurs: {
          kicker: 'Kurzkurse, ein Tag',
          title: 'Massage- und Spa-Techniken',
          description:
            'Eine Technik, ein Tag, ein Zertifikat. Gedacht für Menschen, die eine Fähigkeit sofort in die Praxis übernehmen wollen.',
        },
        ausbildung: {
          kicker: 'Mehrtägig',
          title: 'Berufliche Ausbildungen',
          description:
            'Längere Programme mit Theorie, Praxis und Prüfung. Sie bauen die Grundlage für eine Tätigkeit im Beruf.',
        },
        betrieb: {
          kicker: 'Pflicht und Nachweis',
          title: 'Für Betriebsinhaberinnen und -inhaber',
          description:
            'Was Sie brauchen, um ein Studio rechtssicher zu führen — und was Sie bei einer Kontrolle vorlegen können.',
        },
      },
    },
    featured: {
      kicker: 'Beispielkurs im Detail',
      leadSuffix:
        'Der meistgebuchte Kurs der Schule — weil fast jede Kundin und jeder Kunde in Deutschland genau dieses Problem mitbringt.',
      outcomes: 'Das können Sie danach',
      curriculum: 'Kursinhalt',
      faq: 'Häufige Fragen zu diesem Kurs',
      facts: {
        price: 'Gebühr',
        duration: 'Dauer',
        language: 'Sprache',
        location: 'Ort',
        prerequisites: 'Voraussetzungen',
        bodyArea: 'Körperbereich',
        included: 'Enthalten',
        certificate: 'Zertifikat',
      },
      nextDates: 'Nächste Termine',
      noDates:
        'Zurzeit ist kein Termin veröffentlicht. Fragen Sie nach dem nächsten geplanten Kurs.',
      cta: 'Platz für diesen Kurs anfragen',
      ctaNote:
        'Eine Anfrage ist noch keine Buchung. Sie erhalten eine persönliche Antwort mit Bestätigung, Zahlungsweg und Stornobedingungen.',
      imageAlt:
        'Ausbilderin arbeitet mit beiden Daumen entlang des Nackens einer sitzenden Kundin.',
    },
    learn: {
      of: 'von',
      steps: 'Schritten',
      note: 'Jeder Kurstag folgt derselben Abfolge. Sie wissen immer, an welcher Stelle Sie stehen.',
      items: [
        {
          title: 'Den Körper und das Ziel verstehen',
          text: 'Bevor Sie jemanden berühren, wissen Sie, welche Struktur unter Ihrer Hand liegt und was die Behandlung erreichen soll.',
        },
        {
          title: 'Die Ausbilderin zeigt es',
          text: 'Sie sehen den vollständigen Ablauf einmal ohne Unterbrechung — Tempo, Reihenfolge, Körperhaltung.',
        },
        {
          title: 'Selbst üben',
          text: 'Sie arbeiten paarweise. Jede Teilnehmerin behandelt und wird behandelt, weil Sie den Druck erst verstehen, wenn Sie ihn gespürt haben.',
        },
        {
          title: 'Korrektur Hand auf Hand',
          text: 'Die Ausbilderin legt ihre Hand auf Ihre und richtet Winkel, Druck und Richtung. Das ist der Teil, den kein Video ersetzt.',
        },
        {
          title: 'Sicher anwenden',
          text: 'Sie führen die Behandlung allein durch und benennen dabei Kontraindikationen und Grenzen.',
        },
        {
          title: 'Prüfung und Zertifikat',
          text: 'Theorie und Praxis werden abgenommen. Danach erhalten Sie das Zertifikat der Schule mit BfD-Siegel.',
        },
      ],
    },
    outcomes: {
      disclaimer:
        'Diese Wege sind möglich, aber nicht zugesichert. Die Schule vermittelt Fähigkeiten und Nachweise, keine Arbeitsstellen und keine Einkommensgarantie.',
      items: [
        {
          title: 'Eine Leistung ins bestehende Studio aufnehmen',
          text: 'Ein Kosmetikstudio, das nach dem Facial Lifting auch Gua Sha anbietet, verkauft an dieselben Kundinnen eine zweite Behandlung.',
        },
        {
          title: 'Im Hotel, Spa oder Massagebetrieb arbeiten',
          text: 'Betriebe im Hamburger Umland suchen Personal mit nachweisbarer Technik. Das Zertifikat ist das, was Sie vorlegen können.',
        },
        {
          title: 'Sicherheit vor der Selbstständigkeit',
          text: 'Viele kommen, weil sie ein eigenes Studio planen und vorher wissen wollen, ob ihre Hände das können. Der Hygienekurs gehört dann dazu.',
        },
        {
          title: 'Eine vorhandene Qualifikation erweitern',
          text: 'Wer schon massiert, holt sich hier eine Technik, die im eigenen Angebot fehlt — an einem Tag, ohne monatelange Ausbildung.',
        },
        {
          title: 'Eine Spezialisierung aufbauen',
          text: 'Schwangerschaftsmassage oder Lymphdrainage bringen eine Kundengruppe, um die sich sonst kaum jemand kümmert.',
        },
      ],
    },
    school: {
      role: 'Schulleiterin und Ausbilderin',
      body: 'Sunisa Picha kam aus der Krankenpflege in Thailand nach Deutschland, machte hier die staatliche Prüfung als Kosmetikerin und unterrichtet seit 2005 mit behördlicher Ausbildungsbefugnis. Wer bei ihr lernt, lernt bei jemandem, der beide Systeme von innen kennt.',
      pull: 'Krankenpflege in Thailand, staatliche Prüfung in Deutschland, Lehrbefugnis seit 2005 — der Weg, den viele ihrer Schülerinnen noch vor sich haben.',
      teamAlt:
        'Sunisa Picha mit zwei Kolleginnen und einem Kollegen in weißen Kitteln vor dem Schullogo, daneben die gerahmte BfD-Anerkennung.',
      teamCaption: 'Die Schulleitung in Ahrensburg, daneben die Anerkennung durch den BfD.',
      archiveAlt: 'Archivfoto von Sunisa Picha als junge Krankenpflegeschülerin in Uniform, 1983.',
    },
    evidence: {
      note: 'Nach jedem Kurs steht dieselbe Szene am Ende: die Gruppe mit den Zertifikaten in der Hand. Was danach daraus wird, entscheidet jede Teilnehmerin selbst.',
      posterAlt:
        'Informationsblatt der Schule mit Fotos von Absolventinnengruppen, die ihre Zertifikate halten, und den Angaben zum Standort Ahrensburg.',
      caption:
        'Aufnahmen aus dem Schulbetrieb, bereitgestellt von der Kosmetikschule Picha. Namentliche Erfahrungsberichte werden hier ergänzt, sobald die Einwilligung der abgebildeten Personen schriftlich vorliegt.',
      facts: [
        'Jahr, seit dem Sunisa Picha in Deutschland unterrichtet und ausbildet',
        'Kurse im Programm, vom Ein-Tages-Kurs bis zur Ausbildung',
        'Standorte: Rosbach, Frankfurt-Umgebung und Ahrensburg',
        'Unterrichtsstunden im Hygienekurs, mit Kenntnisprüfung',
      ],
    },
    contact: {
      address: 'Adresse',
      phone: 'Telefon',
      travel: 'Anreise',
      travelValue: 'U1 bis Ahrensburg, wenige Gehminuten. Aus Hamburg rund 30 Minuten.',
      travelNote:
        'Teilnehmende reisen regelmäßig aus {cities} an. Ein Kurstag von 09:00 bis 17:00 ist von dort an einem Tag machbar.',
      map: 'Auf der Karte ansehen',
      faq: 'Häufige Fragen',
    },
    form: {
      title: 'Platz anfragen',
      intro:
        'Eine Anfrage ist noch keine Buchung. Sie bekommen eine persönliche Antwort mit allen Bedingungen, bevor irgendetwas verbindlich wird.',
      errorSummary: 'Bitte prüfen Sie diese Angaben:',
      name: 'Name',
      phone: 'Telefon oder LINE',
      phoneHint: 'Optional, wenn Sie eine E-Mail angeben',
      email: 'E-Mail',
      course: 'Kurs',
      choose: 'Bitte wählen',
      session: 'Termin',
      sessionHint: 'Sie können auch offen lassen',
      noSession: 'Kein bestimmter Termin',
      reason: 'Anliegen',
      reasons: [
        'Platz für einen bestimmten Termin',
        'Frage zu einem Kurs',
        'Warteliste',
        'Anderer Termin gewünscht',
        'Schulung für mein Team',
      ],
      message: 'Nachricht',
      optional: 'Optional',
      replyLanguage: 'Sprache für die Antwort',
      consent:
        'Ich bin damit einverstanden, dass die Kosmetikschule Picha meine Angaben speichert, um meine Anfrage zu beantworten. Die Daten werden nicht weitergegeben.',
      submit: 'Anfrage senden',
      sending: 'Wird gesendet…',
      sentTitle: 'Ihre Anfrage ist angekommen.',
      sentBody:
        'Frau Nui meldet sich persönlich bei Ihnen — in der Regel innerhalb eines Werktages. Sie erhalten die Bestätigung Ihres Platzes, den Zahlungsweg und die Stornobedingungen.',
      sentAgain: 'Weitere Anfrage stellen',
      sendError:
        'Die Anfrage konnte gerade nicht gesendet werden. Bitte versuchen Sie es noch einmal oder rufen Sie an: 0152 5524 8655.',
      errors: {
        name: 'Bitte geben Sie Ihren Namen an.',
        contact: 'Bitte hinterlassen Sie eine E-Mail-Adresse oder eine Telefonnummer.',
        email: 'Diese E-Mail-Adresse sieht nicht vollständig aus.',
        program: 'Bitte wählen Sie einen Kurs.',
        consent: 'Ohne diese Zustimmung dürfen wir nicht antworten.',
      },
    },
    footer: {
      motto: 'Berührung ist eine Fähigkeit. Übung macht daraus einen Beruf.',
      imprint: 'Impressum',
      privacy: 'Datenschutz',
      legal:
        'Ein Kurszertifikat der Schule belegt die erfolgreiche Teilnahme mit bestandener Prüfung und ist kein staatlicher Berufsabschluss. Angaben zu Preisen, Terminen und Verfügbarkeit werden laufend aktualisiert; maßgeblich ist die schriftliche Anmeldebestätigung.',
    },
    meta: {
      title: 'Kosmetikschule Picha Ahrensburg — Massage, Fußpflege und Kosmetik lernen',
      description:
        'Praktische Ausbildung in Massage, Fußpflege, Kosmetik und Hygiene in Ahrensburg bei Hamburg. Kurse auf Deutsch und Thailändisch, mit Zertifikat nach bestandener Prüfung.',
      ogTitle: 'Ihre Hände können eine Zukunft bauen.',
    },
  },

  th: {
    skipToContent: 'ข้ามไปยังเนื้อหา',
    nav: {
      finder: 'ค้นหาหลักสูตร',
      schedule: 'ตารางเรียน',
      catalog: 'หลักสูตร',
      school: 'เกี่ยวกับโรงเรียน',
      contact: 'ติดต่อ',
      allCourses: 'หลักสูตรทั้งหมด',
      learn: 'เรียนอย่างไร',
      contactFooter: 'สอบถามและการเดินทาง',
      openMenu: 'เปิดเมนู',
      closeMenu: 'ปิดเมนู',
      chooseLanguage: 'เลือกภาษา',
      main: 'เมนูหลัก',
      footer: 'เมนูท้ายหน้า',
      school_: 'โรงเรียนสอนวิชาชีพ',
      recognised: 'ได้รับการรับรอง',
    },
    hero: {
      kicker: 'สาขา Ahrensburg · ตั้งแต่ปี 1997',
      headlineA: 'มือของคุณ',
      headlineB: 'สร้าง',
      headlineAccent: 'อนาคต',
      headlineC: 'ได้',
      lead: 'เรียนนวด ดูแลเท้า สปา และความงาม ที่เมือง Ahrensburg กับครูผู้มีประสบการณ์จริง ฝึกปฏิบัติทุกขั้นตอน และรับใบประกาศนียบัตรที่ใช้ประกอบอาชีพได้',
      secondary: 'Kurse auf Deutsch und Thailändisch — mitten in Ahrensburg bei Hamburg.',
      ctaPrimary: 'ค้นหาหลักสูตร',
      ctaSecondary: 'ดูตารางเรียน',
      motto: 'การนวดคือทักษะ ฝึกจนชำนาญก็กลายเป็นอาชีพ',
      next: 'เลื่อนลง',
    },
    nextCourse: {
      label: 'หลักสูตรที่เปิดเร็วที่สุด',
      emptyTitle: 'ขณะนี้ยังไม่มีรอบเรียนที่ประกาศ',
      emptyBody: 'สอบถามรอบถัดไปได้เลย เราจะแจ้งวันที่ให้ทราบ',
      emptyCta: 'สอบถามรอบถัดไป',
      date: 'วันที่',
      time: 'เวลา',
      language: 'ภาษา',
      price: 'ค่าเรียน',
      request: 'สอบถามที่นั่ง',
      waitlist: 'ลงชื่อรอคิว',
      updated: 'อัปเดตเมื่อ',
      lastConfirmed: 'ยืนยันล่าสุดเมื่อ',
      clock: 'น.',
    },
    trust: {
      srTitle: 'การรับรองและเงื่อนไขการเรียน',
      recognition: 'การรับรอง',
      licence: 'ใบอนุญาตสอน',
      teaching: 'การสอน',
      practice: 'การฝึกปฏิบัติ',
      travel: 'การเดินทาง',
      licenceValue: 'ใบอนุญาตสอนวิชาชีพ Kosmetik และ Wellness',
      licenceDetail: 'ออกให้แก่ สุนิษา พิชา โดย Regierungspräsidium Darmstadt ปี 2005',
      teachingValue: 'ภาษาไทยและภาษาเยอรมัน',
      teachingDetail: 'ถามเป็นภาษาที่คุณถนัดได้เลย',
      practiceValue: 'กลุ่มเล็ก ครูจับมือสอน',
      practiceDetail: 'ทุกรอบเรียนแสดงจำนวนที่นั่งที่ยังว่างให้เห็นชัดเจน',
      travelValue: 'Ahrensburg นั่ง U1 จาก Hamburg',
      disclaimer:
        'ใบประกาศนียบัตรของโรงเรียนเป็นหลักฐานว่าผ่านการอบรมและสอบทั้งภาคทฤษฎีและปฏิบัติ ไม่ใช่วุฒิการศึกษาของรัฐ การจะเปิดให้บริการงานใดได้บ้าง ขึ้นอยู่กับข้อกำหนดทางการค้าในพื้นที่ที่คุณประกอบกิจการ',
    },
    sections: {
      finder: {
        index: '03',
        kicker: 'ค้นหาหลักสูตร',
        titleA: 'คุณอยากเริ่มลงมือ',
        titleAccent: 'ตรงไหน',
        titleB: '?',
        lead: 'คนส่วนใหญ่ไม่ได้ค้นหาชื่อหลักสูตร แต่ค้นหาจุดบนร่างกายที่มีปัญหา เลือกบริเวณที่ต้องการ แล้วหลักสูตรที่เกี่ยวข้องจะปรากฏขึ้นด้านข้าง',
      },
      schedule: {
        index: '04',
        kicker: 'ตารางเรียนล่าสุด',
        titleA: 'รอบเรียน',
        titleAccent: 'ที่กำลังจะถึง',
        titleB: '',
        lead: 'ทุกรอบแสดงวันที่ เวลา ภาษาที่ใช้สอน ค่าเรียน และที่นั่งว่าง ข้อมูลดึงมาจากปฏิทินของครูผู้สอนโดยตรง',
      },
      catalog: {
        index: '05',
        kicker: 'หลักสูตรทั้งหมด',
        titleA: 'สิบสองหลักสูตร สาม',
        titleAccent: 'เส้นทาง',
        titleB: '',
        lead: 'ตั้งแต่หลักสูตรเร่งรัดหนึ่งวันที่นำไปใช้ได้ทันที ไปจนถึงหลักสูตรวิชาชีพหลายวันพร้อมการสอบ',
      },
      featured: {
        index: '06',
        kicker: 'ตัวอย่างหลักสูตร',
        titleA: 'ทุกหลักสูตรมีรายละเอียด',
        titleAccent: 'ครบ',
        titleB: 'แบบนี้',
        lead: 'เรียนอะไร สอบอะไร ค่าเรียนเท่าไร และรอบถัดไปเมื่อไร ทุกหลักสูตรใช้รูปแบบเดียวกัน',
      },
      learn: {
        index: '07',
        kicker: 'หนึ่งวันในห้องเรียน',
        titleA: 'หกขั้นตอน จนมือคุณ',
        titleAccent: 'จำได้เอง',
        titleB: '',
        lead: 'อธิบาย สาธิต ฝึก แก้ท่า ลงมือจริง แล้วสอบ ทุกวันเรียนใช้ลำดับเดียวกัน',
      },
      outcomes: {
        index: '08',
        kicker: 'หลังจบหลักสูตร',
        titleA: 'ทักษะนี้พาคุณ',
        titleAccent: 'ไปได้ไกลแค่ไหน',
        titleB: '',
        lead: '',
      },
      school: {
        index: '09',
        kicker: 'เกี่ยวกับโรงเรียน',
        titleA: 'จากพยาบาลที่อุตรดิตถ์ สู่',
        titleAccent: 'Ahrensburg',
        titleB: '',
        lead: 'คนที่สอนที่นี่เดินเส้นทางนี้มาเองแล้ว เรียนวิชาชีพจากเมืองไทย สอบใบประกอบวิชาชีพในเยอรมนี และได้รับอนุญาตให้สอนผู้อื่น',
      },
      evidence: {
        index: '10',
        kicker: 'หลักฐาน',
        titleA: 'สิ่งที่',
        titleAccent: 'พิสูจน์ได้',
        titleB: '',
        lead: '',
      },
      contact: {
        index: '11',
        kicker: 'การเดินทางและการสอบถาม',
        titleA: 'สอบถามที่นั่งใน',
        titleAccent: 'รอบที่คุณสนใจ',
        titleB: '',
        lead: 'บอกเราว่าสนใจหลักสูตรไหนและรอบไหน แล้วคุณจะได้รับคำตอบจากเราโดยตรง เป็นภาษาไทยหรือภาษาเยอรมันก็ได้',
      },
    },
    finder: {
      selectedArea: 'บริเวณที่เลือก',
      typicalReasons: 'อาการที่พบบ่อย:',
      allAreas: 'ทุกบริเวณ',
      chooseArea: 'เลือกบริเวณของร่างกาย',
      hint: 'คลิกที่จุด หรือใช้ปุ่มลูกศรเพื่อเปลี่ยนบริเวณ รายการทั้งหมดอยู่ทางขวา',
      mapAlt: 'ภาพคนยืนในท่าปกติ มีจุดบนร่างกายให้เลือกดูหลักสูตรที่เกี่ยวข้อง',
      courses: 'หลักสูตร',
    },
    schedule: {
      views: {
        next: 'รอบที่ใกล้ที่สุด',
        byProgram: 'แยกตามหลักสูตร',
        byMonth: 'แยกตามเดือน',
        nextHint: 'เรียงตามวันที่ รอบที่ใกล้ที่สุดขึ้นก่อน',
        byProgramHint: 'เลือกหลักสูตรก่อน แล้วเปรียบเทียบรอบเรียน',
        byMonthHint: 'จัดกลุ่มตามเดือน',
        label: 'รูปแบบการแสดงตารางเรียน',
      },
      status: 'ข้อมูล ณ',
      lastConfirmed: 'ยืนยันล่าสุดเมื่อ',
      refresh: 'รีเฟรช',
      loading: 'กำลังโหลด…',
      filterLegend: 'กรองรอบเรียน',
      courseType: 'ประเภทหลักสูตร',
      bodyArea: 'บริเวณร่างกาย',
      language: 'ภาษา',
      all: 'ทั้งหมด',
      onlyAvailable: 'แสดงเฉพาะรอบที่ยังมีที่นั่ง',
      resetFilters: 'ล้างตัวกรอง',
      course: 'หลักสูตร',
      syncError: 'ขณะนี้ยังอัปเดตตารางเรียนไม่ได้ ข้อมูลที่เห็นคือข้อมูลที่ยืนยันล่าสุด',
      emptyFiltered: 'ยังไม่มีรอบเรียนที่ตรงกับเงื่อนไขนี้',
      emptyAll: 'ขณะนี้ยังไม่มีรอบเรียนที่ประกาศ',
      emptyBody:
        'รอบใหม่จะปรากฏที่นี่ทันทีที่ครูผู้สอนยืนยัน สอบถามรอบถัดไปได้เลย แล้วเราจะตอบกลับพร้อมวันที่',
      emptyCta: 'สอบถามรอบถัดไป',
      showAll: 'ดูรอบเรียนทั้งหมด',
      countOne: 'รอบเรียน',
      countMany: 'รอบเรียน',
      countNote: 'ข้อมูลอาจเปลี่ยนแปลงได้ การแก้ไขจะประกาศที่หน้านี้',
      loadingSr: 'กำลังโหลดตารางเรียน',
      updatedBadge: 'อัปเดตแล้ว',
      noSeat: 'ไม่เปิดรับที่นั่ง',
      placesOf: 'ที่นั่งว่าง {free} จาก {total} ที่',
      request: 'สอบถามที่นั่ง',
      waitlist: 'ลงชื่อรอคิว',
    },
    catalog: {
      requestCourse: 'สอบถามหลักสูตรนี้',
      groups: {
        kurzkurs: {
          kicker: 'หลักสูตรเร่งรัด หนึ่งวัน',
          title: 'หลักสูตรนวดและสปา',
          description:
            'หนึ่งเทคนิค หนึ่งวัน หนึ่งใบประกาศ เหมาะกับคนที่อยากได้ทักษะไปใช้กับลูกค้าทันที',
        },
        ausbildung: {
          kicker: 'หลายวัน',
          title: 'หลักสูตรวิชาชีพ',
          description:
            'หลักสูตรที่ยาวขึ้น มีทั้งทฤษฎี ปฏิบัติ และการสอบ เป็นพื้นฐานสำหรับการทำงานเป็นอาชีพ',
        },
        betrieb: {
          kicker: 'สิ่งที่เจ้าของร้านต้องมี',
          title: 'สำหรับเจ้าของกิจการ',
          description: 'สิ่งที่ต้องมีเพื่อเปิดร้านให้ถูกกฎหมาย และเอกสารที่ยื่นได้เมื่อมีการตรวจ',
        },
      },
    },
    featured: {
      kicker: 'ตัวอย่างหลักสูตรแบบละเอียด',
      leadSuffix:
        'หลักสูตรที่มีคนเรียนมากที่สุดของโรงเรียน เพราะลูกค้าในเยอรมนีเกือบทุกคนมีอาการนี้',
      outcomes: 'จบแล้วคุณทำอะไรได้',
      curriculum: 'เนื้อหาที่เรียน',
      faq: 'คำถามที่พบบ่อยเกี่ยวกับหลักสูตรนี้',
      facts: {
        price: 'ค่าเรียน',
        duration: 'ระยะเวลา',
        language: 'ภาษา',
        location: 'สถานที่',
        prerequisites: 'พื้นฐานที่ต้องมี',
        bodyArea: 'บริเวณร่างกาย',
        included: 'รวมอยู่ในค่าเรียน',
        certificate: 'ใบประกาศนียบัตร',
      },
      nextDates: 'รอบเรียนถัดไป',
      noDates: 'ขณะนี้ยังไม่มีรอบที่ประกาศ สอบถามรอบถัดไปได้เลย',
      cta: 'สอบถามที่นั่งหลักสูตรนี้',
      ctaNote:
        'การสอบถามยังไม่ใช่การจอง คุณจะได้รับคำตอบพร้อมการยืนยัน วิธีชำระเงิน และเงื่อนไขการยกเลิกก่อนเสมอ',
      imageAlt: 'ครูผู้สอนใช้นิ้วหัวแม่มือทั้งสองข้างนวดต้นคอของลูกค้าที่นั่งอยู่',
    },
    learn: {
      of: 'จาก',
      steps: 'ขั้นตอน',
      note: 'ทุกวันเรียนใช้ลำดับเดียวกัน คุณจะรู้เสมอว่าตอนนี้อยู่ขั้นไหน',
      items: [
        {
          title: 'เข้าใจร่างกายและเป้าหมายของการนวด',
          text: 'ก่อนลงมือสัมผัสใคร คุณต้องรู้ว่าใต้มือคุณคือกล้ามเนื้อหรือโครงสร้างอะไร และการนวดครั้งนี้ต้องการผลอะไร',
        },
        {
          title: 'ครูสาธิตให้ดู',
          text: 'ดูขั้นตอนเต็มรูปแบบหนึ่งรอบโดยไม่หยุด ทั้งจังหวะ ลำดับ และการวางท่าทางของตัวผู้นวดเอง',
        },
        {
          title: 'ลงมือฝึกเอง',
          text: 'ฝึกเป็นคู่ ทุกคนได้เป็นทั้งผู้นวดและผู้ถูกนวด เพราะคุณจะเข้าใจน้ำหนักมือจริง ๆ ก็ต่อเมื่อได้รู้สึกด้วยตัวเอง',
        },
        {
          title: 'ครูจับมือแก้ท่า',
          text: 'ครูวางมือทับมือคุณ แล้วปรับองศาข้อมือ น้ำหนัก และทิศทางแรงกด ขั้นตอนนี้คือสิ่งที่คลิปวิดีโอแทนไม่ได้',
        },
        {
          title: 'ทำได้เองอย่างปลอดภัย',
          text: 'คุณทำทั้งขั้นตอนด้วยตัวเอง พร้อมบอกได้ว่ากรณีไหนห้ามนวด และขอบเขตของการนวดอยู่ตรงไหน',
        },
        {
          title: 'สอบและรับใบประกาศ',
          text: 'สอบทั้งภาคทฤษฎีและภาคปฏิบัติ ผ่านแล้วรับใบประกาศนียบัตรของโรงเรียนที่ประทับตรา BfD',
        },
      ],
    },
    outcomes: {
      disclaimer:
        'เส้นทางเหล่านี้เป็นไปได้ แต่ไม่ใช่การรับประกัน โรงเรียนมอบทักษะและหลักฐานการอบรม ไม่ได้จัดหางานหรือรับประกันรายได้',
      items: [
        {
          title: 'เพิ่มบริการใหม่ให้ร้านเดิม',
          text: 'ร้านความงามที่มีนวดหน้าลิฟติ้งอยู่แล้ว เมื่อเพิ่มกัวซาเข้าไป ก็ขายบริการที่สองให้ลูกค้าคนเดิมได้',
        },
        {
          title: 'ทำงานในโรงแรม สปา หรือร้านนวด',
          text: 'สถานประกอบการรอบเมือง Hamburg มองหาคนที่มีทักษะพิสูจน์ได้ ใบประกาศคือสิ่งที่คุณยื่นให้เขาดูได้',
        },
        {
          title: 'มั่นใจก่อนเปิดร้านของตัวเอง',
          text: 'หลายคนมาเรียนเพราะวางแผนเปิดร้าน และอยากรู้ก่อนว่ามือตัวเองทำได้จริงไหม หลักสูตรสุขอนามัยก็จำเป็นในขั้นนี้',
        },
        {
          title: 'ต่อยอดจากวิชาที่มีอยู่แล้ว',
          text: 'คนที่นวดเป็นอยู่แล้ว มาเก็บเทคนิคที่ร้านตัวเองยังไม่มี ใช้เวลาแค่วันเดียว ไม่ต้องเรียนเป็นเดือน',
        },
        {
          title: 'สร้างความชำนาญเฉพาะทาง',
          text: 'นวดสตรีมีครรภ์หรือนวดระบายน้ำเหลือง ทำให้ได้กลุ่มลูกค้าที่แทบไม่มีใครดูแลโดยเฉพาะ',
        },
      ],
    },
    school: {
      role: 'ผู้อำนวยการและครูผู้สอน',
      body: 'สุนิษา พิชา เริ่มต้นจากงานพยาบาลในประเทศไทย มาสอบใบประกอบวิชาชีพ Kosmetikerin ของรัฐในเยอรมนี และสอนวิชาชีพมาตั้งแต่ปี 2005 ด้วยใบอนุญาตจากทางการ เรียนกับเธอคือเรียนกับคนที่เข้าใจทั้งสองระบบจากข้างใน',
      pull: 'พยาบาลจากเมืองไทย สอบใบประกอบวิชาชีพในเยอรมนี ได้ใบอนุญาตสอนตั้งแต่ปี 2005 — เส้นทางเดียวกับที่ลูกศิษย์หลายคนกำลังจะเดิน',
      teamAlt:
        'สุนิษา พิชา ยืนกับเพื่อนร่วมงานในชุดกาวน์สีขาวหน้าโลโก้โรงเรียน ข้าง ๆ เป็นใบรับรอง BfD ในกรอบ',
      teamCaption: 'ทีมผู้บริหารโรงเรียนสาขา Ahrensburg และใบรับรองจาก BfD',
      archiveAlt: 'ภาพเก่าของสุนิษา พิชา สมัยเป็นนักเรียนพยาบาลในชุดยูนิฟอร์ม ปี 1983',
    },
    evidence: {
      note: 'ทุกหลักสูตรจบลงด้วยภาพเดียวกัน คือภาพนักเรียนทั้งกลุ่มถือใบประกาศในมือ ส่วนหลังจากนั้นจะไปทางไหน แต่ละคนเป็นคนเลือกเอง',
      posterAlt:
        'แผ่นข้อมูลของโรงเรียน มีภาพกลุ่มนักเรียนที่จบหลักสูตรถือใบประกาศนียบัตร พร้อมรายละเอียดสาขา Ahrensburg',
      caption:
        'ภาพจากการเรียนการสอนจริง จัดหาโดยโรงเรียน Kosmetikschule Picha ส่วนรีวิวที่ระบุชื่อผู้เรียนจะเพิ่มที่นี่เมื่อได้รับความยินยอมเป็นลายลักษณ์อักษรจากเจ้าของภาพแล้ว',
      facts: [
        'ปีที่สุนิษา พิชา เริ่มสอนและอบรมวิชาชีพในเยอรมนี',
        'หลักสูตรในโปรแกรม ตั้งแต่หนึ่งวันจนถึงหลักสูตรวิชาชีพ',
        'สาขา: Rosbach, ปริมณฑล Frankfurt และ Ahrensburg',
        'ชั่วโมงอบรมในหลักสูตรสุขอนามัย พร้อมการสอบวัดความรู้',
      ],
    },
    contact: {
      address: 'ที่อยู่',
      phone: 'โทรศัพท์',
      travel: 'การเดินทาง',
      travelValue: 'นั่ง U1 ถึงสถานี Ahrensburg แล้วเดินไม่กี่นาที จาก Hamburg ใช้เวลาราว 30 นาที',
      travelNote:
        'มีผู้เรียนเดินทางมาจาก {cities} เป็นประจำ เรียนรอบ 09:00–17:00 ไปเช้าเย็นกลับได้ในวันเดียว',
      map: 'ดูบนแผนที่',
      faq: 'คำถามที่พบบ่อย',
    },
    form: {
      title: 'สอบถามที่นั่ง',
      intro: 'การสอบถามยังไม่ใช่การจอง คุณจะได้รับคำตอบพร้อมเงื่อนไขทั้งหมดก่อนที่จะมีอะไรผูกมัด',
      errorSummary: 'กรุณาตรวจสอบข้อมูลต่อไปนี้:',
      name: 'ชื่อ',
      phone: 'โทรศัพท์ หรือ LINE',
      phoneHint: 'ไม่บังคับ หากกรอกอีเมลแล้ว',
      email: 'อีเมล',
      course: 'หลักสูตร',
      choose: 'กรุณาเลือก',
      session: 'รอบเรียน',
      sessionHint: 'จะยังไม่ระบุก็ได้',
      noSession: 'ยังไม่ระบุรอบ',
      reason: 'เรื่องที่ต้องการสอบถาม',
      reasons: [
        'ขอที่นั่งในรอบที่ระบุ',
        'สอบถามรายละเอียดหลักสูตร',
        'ลงชื่อรอคิว',
        'ขอรอบเรียนวันอื่น',
        'จัดอบรมให้ทีมงาน',
      ],
      message: 'ข้อความ',
      optional: 'ไม่บังคับ',
      replyLanguage: 'ภาษาที่ต้องการให้ตอบกลับ',
      consent:
        'ข้าพเจ้ายินยอมให้ Kosmetikschule Picha เก็บข้อมูลนี้เพื่อใช้ตอบคำถามของข้าพเจ้า ข้อมูลจะไม่ถูกส่งต่อให้บุคคลอื่น',
      submit: 'ส่งคำถาม',
      sending: 'กำลังส่ง…',
      sentTitle: 'ได้รับคำถามของคุณแล้ว',
      sentBody:
        'คุณนุ้ยจะติดต่อกลับด้วยตัวเอง โดยปกติภายในหนึ่งวันทำการ คุณจะได้รับการยืนยันที่นั่ง วิธีชำระเงิน และเงื่อนไขการยกเลิก',
      sentAgain: 'ส่งคำถามอีกครั้ง',
      sendError: 'ขณะนี้ส่งคำถามไม่สำเร็จ กรุณาลองใหม่อีกครั้ง หรือโทร 0152 5524 8655',
      errors: {
        name: 'กรุณากรอกชื่อของคุณ',
        contact: 'กรุณากรอกอีเมลหรือหมายเลขโทรศัพท์อย่างน้อยหนึ่งอย่าง',
        email: 'รูปแบบอีเมลนี้ยังไม่ถูกต้อง',
        program: 'กรุณาเลือกหลักสูตร',
        consent: 'หากไม่ยินยอม เราจะไม่สามารถติดต่อกลับได้',
      },
    },
    footer: {
      motto: 'การนวดคือทักษะ ฝึกจนชำนาญก็กลายเป็นอาชีพ',
      imprint: 'ข้อมูลผู้ให้บริการ',
      privacy: 'นโยบายความเป็นส่วนตัว',
      legal:
        'ใบประกาศนียบัตรของโรงเรียนเป็นหลักฐานว่าผ่านการอบรมและสอบแล้ว ไม่ใช่วุฒิการศึกษาของรัฐ ข้อมูลค่าเรียน รอบเรียน และที่นั่งว่างมีการปรับปรุงอยู่เสมอ โดยยึดเอกสารยืนยันการสมัครเป็นสำคัญ',
    },
    meta: {
      title: 'Kosmetikschule Picha Ahrensburg — เรียนนวด ดูแลเท้า และความงาม',
      description:
        'โรงเรียนสอนวิชาชีพนวด ดูแลเท้า ความงาม และสุขอนามัย ที่เมือง Ahrensburg ใกล้ Hamburg สอนภาษาไทยและเยอรมัน รับใบประกาศนียบัตรเมื่อสอบผ่าน',
      ogTitle: 'มือของคุณสร้างอนาคตได้',
    },
  },
} as const satisfies Record<Locale, unknown>;

export function getUi(locale: Locale): UiDictionary {
  return UI[locale] as UiDictionary;
}
