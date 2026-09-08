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
      finder: 'Wegweiser',
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
      ctaPrimary: 'Welcher Kurs passt zu mir?',
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
      teachingValue: 'Deutsch und Thailändisch',
      teachingDetail: 'Sie dürfen in der Sprache fragen, in der Sie denken.',
      practiceValue: 'Kleine Gruppen, Hand an Hand',
      practiceDetail: 'Bei jedem Termin sehen Sie, wie viele Plätze noch frei sind.',
      travelValue: 'Ahrensburg, U1 ab Hamburg',
      disclaimer:
        'Ein Zertifikat der Schule belegt die erfolgreiche Teilnahme an einem Kurs mit bestandener Prüfung. Es ist kein staatlicher Berufsabschluss. Welche Tätigkeiten Sie damit anbieten dürfen, richtet sich nach den gewerberechtlichen Vorgaben an Ihrem Standort.',
    },
    sections: {
      orientation: {
        index: '03',
        kicker: 'Wegweiser',
        titleA: 'Nicht sicher, womit Sie',
        titleAccent: 'anfangen',
        titleB: ' sollen?',
        lead: 'Fast niemand kommt mit einem Kursnamen hierher — die meisten kommen mit einer Lebenssituation. Finden Sie Ihre unten: Jede endet mit einem konkreten ersten Kurs, nicht mit einer Liste.',
      },
      finder: {
        index: '05',
        kicker: 'Nach Körperbereich',
        titleA: 'Sie wissen schon,',
        titleAccent: 'wo',
        titleB: ' Sie arbeiten wollen?',
        lead: 'Dann zeigt die Karte, welche Kurse an dieser Stelle ansetzen. Noch unsicher? Der Wegweiser weiter oben ist der bessere Start.',
      },
      schedule: {
        index: '06',
        kicker: 'Live-Termine',
        titleA: 'Die nächsten',
        titleAccent: 'Kurstage',
        titleB: '',
        lead: 'Jeder Termin zeigt Datum, Zeit und Gebühr, und ob noch Plätze frei sind. Die Liste wird direkt aus dem Kalender der Schulleitung gepflegt.',
      },
      catalog: {
        index: '04',
        kicker: 'Das Programm',
        titleA: 'Vierzehn Kurse, drei',
        titleAccent: 'Wege',
        titleB: '',
        lead: 'Vom Ein-Tages-Kurs, den Sie am Montag darauf anwenden, bis zur mehrtägigen Ausbildung mit Prüfung. Das Badge sagt, ob Sie sofort starten können.',
      },
      featured: {
        index: '07',
        kicker: 'Ein Kurs im Detail',
        titleA: 'So genau steht jeder',
        titleAccent: 'Kurs',
        titleB: 'hier',
        lead: 'Was Sie lernen, was geprüft wird, was es kostet und wann der nächste Termin ist — für jeden Kurs nach demselben Muster.',
      },
      learn: {
        index: '08',
        kicker: 'Der Kurstag',
        titleA: 'Sechs Schritte, bis es in der',
        titleAccent: 'Hand',
        titleB: 'sitzt',
        lead: 'Erklären, zeigen, üben, korrigieren, anwenden, prüfen. Jeder Kurstag folgt derselben Abfolge.',
      },
      outcomes: {
        index: '09',
        kicker: 'Nach dem Kurs',
        titleA: 'Was Menschen mit dieser Fähigkeit',
        titleAccent: 'anfangen',
        titleB: '',
        lead: '',
      },
      school: {
        index: '10',
        kicker: 'Die Schule',
        titleA: 'Von',
        titleAccent: 'Uttaradit',
        titleB: 'nach Deutschland',
        lead: 'Wer hier unterrichtet, hat den Weg selbst gemacht: eine Ausbildung in Thailand, eine staatliche Prüfung in Deutschland und die Befugnis, andere auszubilden.',
      },
      evidence: {
        index: '11',
        kicker: 'Belege',
        titleA: 'Was sich',
        titleAccent: 'nachweisen',
        titleB: 'lässt',
        lead: '',
      },
      contact: {
        index: '12',
        kicker: 'Anfahrt und Anfrage',
        titleA: 'Fragen Sie nach einem',
        titleAccent: 'Platz',
        titleB: '',
        lead: 'Sagen Sie uns, welcher Kurs und welcher Termin. Sie bekommen eine persönliche Antwort — auf Deutsch oder auf Thailändisch.',
      },
    },
    wegweiser: {
      pathKicker: 'Der Lernweg der Schule',
      path: [
        {
          when: 'Zuerst',
          title: 'Das Fundament',
          text: 'Grundausbildung ohne Vorkenntnisse — zwei bis drei Tage, mit Prüfung. Ohne dieses Fundament geht nichts.',
        },
        {
          when: 'Dann',
          title: 'Techniken vertiefen',
          text: 'Ein-Tages-Kurse für eine einzelne Technik — sobald die Grundlagen sitzen.',
        },
        {
          when: 'Danach',
          title: 'Der eigene Betrieb',
          text: 'Hygienekurs und Nachweise, wenn aus der Fähigkeit ein Studio wird.',
        },
      ],
      personaKicker: 'Drei Situationen — eine klingt wie Sie',
      personas: [
        {
          id: 'neu',
          title: 'Ich fange ganz neu an',
          text: 'Noch nie professionell massiert, noch nie in einem Studio gearbeitet — oder der Wunsch, Kosmetik von Grund auf zu lernen.',
          startLabel: 'Beginnen Sie hier — ohne Vorkenntnisse:',
          courses: [
            { id: 'klassische-massage', tag: 'Massage-Richtung' },
            { id: 'kosmetiker', tag: 'Beauty-Richtung' },
          ],
          note: 'Danach stehen Ihnen alle Ein-Tages-Kurse offen.',
          alt: 'Übereinandergelegte Hände geben gleichmäßigen Druck auf den Rücken einer liegenden Kundin.',
        },
        {
          id: 'beruf',
          title: 'Ich arbeite schon im Studio',
          text: 'Sie massieren oder behandeln bereits und wollen eine gefragte Technik dazulernen — an einem Tag, direkt einsetzbar.',
          startLabel: 'Direkt buchbar mit Grundlagen:',
          courses: [
            { id: 'office-syndrom', tag: '' },
            { id: 'head-spa', tag: '' },
          ],
          note: 'Alle acht Techniken stehen im Katalog unter „Kurzkurse“.',
          alt: 'Ausbilderin arbeitet mit beiden Daumen am Nacken einer sitzenden Kundin.',
        },
        {
          id: 'studio',
          title: 'Ich plane ein eigenes Studio',
          text: 'Vor der Anmeldung wollen Sie wissen, was Sie können müssen — und welche Nachweise ein Betrieb braucht.',
          startLabel: 'Der sichere Weg — Ausbildung plus Nachweis:',
          courses: [
            { id: 'kosmetiker', tag: '' },
            { id: 'hygienekurs', tag: 'Pflichtnachweis' },
          ],
          note: 'Der Hygienekurs ist der Sachkundenachweis, den jedes Studio braucht.',
          alt: 'Fußpflege am Nagel mit Instrument, daneben ein Tablett mit sterilisierten Werkzeugen.',
        },
      ],
      levelOpen: 'Ohne Vorkenntnisse',
      levelBasics: 'Mit Grundlagen',
      flags: {
        einstieg: 'Empfohlener Einstieg',
        neu: 'Neu im Programm',
        beliebt: 'Am häufigsten gebucht',
      },
      guideTitle: 'Oder kurz gefragt — drei Antworten, ein passender Kurs',
      allCourses: 'Alle {count} Kurse im Überblick',
      unsureTitle: 'Immer noch unsicher?',
      unsureText:
        'Schreiben Sie zwei Zeilen zu Ihrer Situation — die Schulleitung empfiehlt Ihnen den Einstieg persönlich.',
      unsureCta: 'Persönliche Empfehlung anfragen',
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
      sharedLocation: 'Ort aller Kurse: Manhagener Allee 45, 22926 Ahrensburg',
      loadingSr: 'Termine werden geladen',
      updatedBadge: 'Aktualisiert',
      noSeat: 'Kein Platz buchbar',
      placesOf: '{free} von {total} Plätzen frei',
      request: 'Platz anfragen',
      waitlist: 'Auf die Warteliste',
    },
    catalog: {
      requestCourse: 'Kurs anfragen',
      nextTerm: 'Ab {date}',
      noTerm: 'Termin auf Anfrage',
      details: 'Details',
      vatOnce: 'Alle Preise zzgl. 19 % MwSt.',
      guide: {
        kicker: 'Kurs-Wegweiser',
        title: 'Drei Fragen, ein passender Kurs',
        steps: [
          {
            id: 'basis',
            question: 'Bringen Sie schon Grundkenntnisse in Massage oder Kosmetik mit?',
            options: [
              { id: 'nein', label: 'Nein, ich fange neu an' },
              { id: 'ja', label: 'Ja, vorhanden' },
            ],
          },
          {
            id: 'ziel',
            question: 'Was ist Ihr Ziel?',
            options: [
              { id: 'technik', label: 'Eine Technik dazulernen' },
              { id: 'ausbildung', label: 'Gründlich ausbilden lassen' },
              { id: 'betrieb', label: 'Mein Studio absichern' },
            ],
          },
          {
            id: 'zeit',
            question: 'Wie viel Zeit passt?',
            options: [
              { id: 'kurz', label: 'Ein Tag' },
              { id: 'mehr', label: 'Mehrere Tage' },
            ],
          },
        ],
        resultLabel: 'Passend für Sie',
        basisHint:
          'Ein-Tages-Kurse sind Weiterbildung und setzen Grundkenntnisse voraus. Ohne Grundlagen empfehlen wir zuerst eine mehrtägige Ausbildung — sie legt das Fundament.',
        request: 'Platz anfragen',
      },
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
      finder: 'ตัวช่วยเลือก',
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
      headlineA: 'สองมือคู่นี้',
      headlineB: 'สร้าง',
      headlineAccent: 'อนาคต',
      headlineC: 'ให้คุณได้',
      lead: 'เรียนนวด ดูแลเท้า สปา และความงาม ที่ Ahrensburg กับครูที่มีประสบการณ์จริง ฝึกลงมือทุกขั้นตอน จบแล้วมีใบประกาศนียบัตรไว้ประกอบอาชีพ',
      secondary: 'Kurse auf Deutsch und Thailändisch — mitten in Ahrensburg bei Hamburg.',
      ctaPrimary: 'ช่วยเลือกหลักสูตรให้หน่อย',
      ctaSecondary: 'ดูตารางเรียน',
      motto: 'นวดคือฝีมือ ฝึกให้ชำนาญก็คืออาชีพ',
      next: 'เลื่อนลง',
    },
    nextCourse: {
      label: 'รอบเรียนถัดไป',
      emptyTitle: 'ตอนนี้ยังไม่มีรอบเรียนที่ประกาศไว้',
      emptyBody: 'สอบถามรอบถัดไปได้เลย เดี๋ยวเราแจ้งวันที่ให้ทราบ',
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
      teachingDetail: 'ถามได้เลยเป็นภาษาที่คุณคิด',
      practiceValue: 'เรียนกลุ่มเล็ก ครูจับมือสอน',
      practiceDetail: 'แต่ละรอบเรียนบอกที่นั่งว่างไว้ชัดเจน',
      travelValue: 'Ahrensburg นั่ง U1 จาก Hamburg',
      disclaimer:
        'ใบประกาศนียบัตรของโรงเรียนเป็นหลักฐานว่าคุณผ่านการอบรมและสอบแล้ว ไม่ใช่วุฒิการศึกษาของรัฐ ส่วนจะเปิดรับงานแบบไหนได้บ้าง ขึ้นอยู่กับข้อกำหนดทางการค้าในพื้นที่ที่คุณประกอบกิจการ',
    },
    sections: {
      orientation: {
        index: '03',
        kicker: 'ตัวช่วยเลือกหลักสูตร',
        titleA: 'ยังไม่รู้จะเรียน',
        titleAccent: 'อะไรดี',
        titleB: '?',
        lead: 'คนส่วนใหญ่ไม่ได้มาพร้อมชื่อหลักสูตร แต่มาพร้อมสถานการณ์ของตัวเอง เลือกอันที่ตรงกับคุณด้านล่าง — แต่ละอันบอกหลักสูตรแรกให้ชัดเจน ไม่ใช่แค่รายชื่อยาว ๆ',
      },
      finder: {
        index: '05',
        kicker: 'ค้นหาตามบริเวณร่างกาย',
        titleA: 'รู้แล้วว่าอยากนวด',
        titleAccent: 'ตรงไหน',
        titleB: '?',
        lead: 'เลือกบริเวณบนแผนภาพ แล้วหลักสูตรที่เกี่ยวข้องจะขึ้นให้ด้านข้าง ถ้ายังไม่แน่ใจ เริ่มจากตัวช่วยเลือกด้านบนก่อน',
      },
      schedule: {
        index: '06',
        kicker: 'ตารางเรียนล่าสุด',
        titleA: 'วันเรียน',
        titleAccent: 'ที่กำลังมาถึง',
        titleB: '',
        lead: 'ทุกรอบบอกวันที่ เวลา ค่าเรียน และที่นั่งว่าง อัปเดตตรงจากปฏิทินของครูผู้สอน',
      },
      catalog: {
        index: '04',
        kicker: 'หลักสูตรทั้งหมด',
        titleA: '14 หลักสูตร',
        titleAccent: '3 เส้นทาง',
        titleB: '',
        lead: 'ตั้งแต่คอร์สต่อยอด 1 วันที่เรียนจบแล้วเอาไปใช้ได้เลย จนถึงหลักสูตรวิชาชีพหลายวันพร้อมสอบ ป้ายบนการ์ดบอกเลยว่าเริ่มได้ทันทีหรือต้องมีพื้นฐานก่อน',
      },
      featured: {
        index: '07',
        kicker: 'ตัวอย่างหลักสูตร',
        titleA: 'ทุกหลักสูตร',
        titleAccent: 'บอกให้',
        titleB: 'ละเอียดแบบนี้',
        lead: 'เรียนอะไร สอบอะไร ค่าเรียนเท่าไร รอบถัดไปวันไหน — ทุกหลักสูตรเล่าไว้เหมือนกันหมด',
      },
      learn: {
        index: '08',
        kicker: 'หนึ่งวันในห้องเรียน',
        titleA: 'หกขั้นตอน ฝึกจนมือ',
        titleAccent: 'จำได้เอง',
        titleB: '',
        lead: 'ฟังครูอธิบาย ดูครูสาธิต ลองทำเอง ให้ครูแก้ท่า ลงมือจริง แล้วสอบ — ทุกวันเรียนก็เป็นจังหวะนี้',
      },
      outcomes: {
        index: '09',
        kicker: 'หลังจบหลักสูตร',
        titleA: 'ฝีมือคู่นี้พาคุณ',
        titleAccent: 'ไปได้ไกลแค่ไหน',
        titleB: '',
        lead: '',
      },
      school: {
        index: '10',
        kicker: 'เกี่ยวกับโรงเรียน',
        titleA: 'จาก',
        titleAccent: 'อุตรดิตถ์',
        titleB: 'สู่เยอรมัน',
        lead: 'คนที่สอนที่นี่เดินเส้นทางเดียวกันนี้มาแล้ว เรียนวิชาชีพที่เมืองไทย สอบใบประกอบวิชาชีพที่เยอรมนี และได้รับใบอนุญาตให้สอนอย่างเป็นทางการ',
      },
      evidence: {
        index: '11',
        kicker: 'หลักฐาน',
        titleA: 'สิ่งที่พิสูจน์',
        titleAccent: 'ให้เห็น',
        titleB: 'ได้',
        lead: '',
      },
      contact: {
        index: '12',
        kicker: 'การเดินทางและการสอบถาม',
        titleA: 'สอบถาม',
        titleAccent: 'ที่นั่ง',
        titleB: '',
        lead: 'บอกเราหน่อยว่าสนใจหลักสูตรไหน รอบไหน แล้วเราจะตอบกลับด้วยตัวเอง ภาษาไทยหรือภาษาเยอรมันก็ได้',
      },
    },
    wegweiser: {
      pathKicker: 'เส้นทางการเรียนของโรงเรียน',
      path: [
        {
          when: 'ก่อนอื่น',
          title: 'ปูรากฐาน',
          text: 'หลักสูตรวิชาชีพที่ไม่ต้องมีพื้นฐาน 2–3 วัน พร้อมสอบ — ไม่มีรากฐานนี้ก็ไปต่อไม่ได้',
        },
        {
          when: 'จากนั้น',
          title: 'เก็บเทคนิคเฉพาะทาง',
          text: 'คอร์ส 1 วันต่อ 1 เทคนิค เมื่อพื้นฐานมั่นแล้ว',
        },
        {
          when: 'สุดท้าย',
          title: 'มีร้านของตัวเอง',
          text: 'หลักสูตรสุขอนามัยและเอกสารรับรอง เมื่อฝีมือกลายเป็นกิจการ',
        },
      ],
      personaKicker: 'สามสถานการณ์ — มีอันหนึ่งที่เป็นคุณ',
      personas: [
        {
          id: 'neu',
          title: 'เพิ่งเริ่มจากศูนย์',
          text: 'ยังไม่เคยนวดหรือทำงานในร้านแบบมืออาชีพ หรืออยากเปลี่ยนสายมาเรียนความงามตั้งแต่ต้น',
          startLabel: 'เริ่มจากตรงนี้ — ไม่ต้องมีพื้นฐาน:',
          courses: [
            { id: 'klassische-massage', tag: 'สายนวด' },
            { id: 'kosmetiker', tag: 'สายความงาม' },
          ],
          note: 'จบแล้วต่อด้วยคอร์ส 1 วันได้ทุกคอร์ส',
          alt: 'มือวางทับกันลงน้ำหนักสม่ำเสมอบนหลังของลูกค้าที่นอนอยู่',
        },
        {
          id: 'beruf',
          title: 'ทำงานในร้านอยู่แล้ว',
          text: 'นวดหรือทำทรีตเมนต์เป็นอยู่แล้ว อยากเก็บเทคนิคที่ลูกค้าถามหา — เรียนวันเดียว เอาไปใช้ได้ทันที',
          startLabel: 'ลงได้เลยถ้ามีพื้นฐาน:',
          courses: [
            { id: 'office-syndrom', tag: '' },
            { id: 'head-spa', tag: '' },
          ],
          note: 'เทคนิคทั้ง 8 อยู่ในหมวดคอร์สสั้นของแคตตาล็อก',
          alt: 'ครูผู้สอนใช้นิ้วหัวแม่มือทั้งสองข้างนวดต้นคอของลูกค้าที่นั่งอยู่',
        },
        {
          id: 'studio',
          title: 'กำลังวางแผนเปิดร้าน',
          text: 'ก่อนจะลงทุน อยากรู้ว่าต้องทำอะไรให้เป็น และร้านต้องมีเอกสารอะไรบ้าง',
          startLabel: 'เส้นทางที่ปลอดภัย — เรียนวิชาชีพพร้อมใบรับรอง:',
          courses: [
            { id: 'kosmetiker', tag: '' },
            { id: 'hygienekurs', tag: 'ใบรับรองที่ร้านต้องมี' },
          ],
          note: 'หลักสูตรสุขอนามัยคือใบรับรองที่ร้านนวดและร้านความงามทุกร้านต้องมี',
          alt: 'การดูแลเล็บเท้าด้วยอุปกรณ์ ข้าง ๆ เป็นถาดเครื่องมือที่ผ่านการฆ่าเชื้อ',
        },
      ],
      levelOpen: 'ไม่ต้องมีพื้นฐาน',
      levelBasics: 'ต้องมีพื้นฐานก่อน',
      flags: {
        einstieg: 'แนะนำให้เริ่มที่นี่',
        neu: 'หลักสูตรใหม่',
        beliebt: 'คนสมัครมากที่สุด',
      },
      guideTitle: 'หรือตอบสั้น ๆ แค่ 3 ข้อ เจอหลักสูตรที่ใช่',
      allCourses: 'ดูหลักสูตรทั้งหมด {count} หลักสูตร',
      unsureTitle: 'ยังไม่แน่ใจอยู่ดี?',
      unsureText: 'ส่งข้อความสั้น ๆ เล่าสถานการณ์ของคุณมา ครูใหญ่จะแนะนำจุดเริ่มต้นที่เหมาะกับคุณด้วยตัวเอง',
      unsureCta: 'ขอคำแนะนำจากครู',
    },
    finder: {
      selectedArea: 'บริเวณที่เลือก',
      typicalReasons: 'อาการที่เจอบ่อย ๆ:',
      allAreas: 'ทุกบริเวณ',
      chooseArea: 'เลือกบริเวณของร่างกาย',
      hint: 'แตะที่จุด หรือกดปุ่มลูกศรเพื่อเปลี่ยนบริเวณ รายการทั้งหมดอยู่ทางขวามือ',
      mapAlt: 'ภาพคนยืนในท่าปกติ มีจุดบนร่างกายให้เลือกดูหลักสูตรที่เกี่ยวข้อง',
      courses: 'หลักสูตร',
    },
    schedule: {
      views: {
        next: 'รอบที่ใกล้ที่สุด',
        byProgram: 'แยกตามหลักสูตร',
        byMonth: 'แยกตามเดือน',
        nextHint: 'เรียงตามวันที่ รอบที่ใกล้สุดขึ้นก่อน',
        byProgramHint: 'เลือกหลักสูตรก่อน แล้วค่อยเปรียบเทียบรอบเรียน',
        byMonthHint: 'จัดกลุ่มตามเดือน',
        label: 'รูปแบบการแสดงตารางเรียน',
      },
      status: 'ข้อมูล ณ',
      lastConfirmed: 'ยืนยันล่าสุดเมื่อ',
      refresh: 'อัปเดต',
      loading: 'กำลังโหลด…',
      filterLegend: 'กรองรอบเรียน',
      courseType: 'ประเภทหลักสูตร',
      bodyArea: 'บริเวณร่างกาย',
      language: 'ภาษา',
      all: 'ทั้งหมด',
      onlyAvailable: 'เฉพาะรอบที่ยังมีที่นั่งว่าง',
      resetFilters: 'ล้างตัวกรอง',
      course: 'หลักสูตร',
      syncError: 'ตอนนี้อัปเดตตารางเรียนไม่ได้ ข้อมูลที่เห็นคือข้อมูลที่ยืนยันไว้ล่าสุด',
      emptyFiltered: 'ยังไม่มีรอบเรียนที่ตรงกับเงื่อนไขนี้',
      emptyAll: 'ตอนนี้ยังไม่มีรอบเรียนที่ประกาศไว้',
      emptyBody:
        'รอบใหม่จะมาลงที่หน้านี้ทันทีที่ครูผู้สอนยืนยัน ถ้าอยากทราบรอบถัดไปก่อน สอบถามได้เลย เราจะตอบกลับพร้อมวันที่ให้คุณ',
      emptyCta: 'สอบถามรอบถัดไป',
      showAll: 'ดูรอบเรียนทั้งหมด',
      countOne: 'รอบเรียน',
      countMany: 'รอบเรียน',
      countNote: 'ข้อมูลอาจเปลี่ยนแปลงได้ ถ้าตารางเปลี่ยนเราจะประกาศไว้ที่หน้านี้',
      sharedLocation: 'สถานที่เรียนทุกรอบ: Manhagener Allee 45, 22926 Ahrensburg',
      loadingSr: 'กำลังโหลดตารางเรียน',
      updatedBadge: 'อัปเดตแล้ว',
      noSeat: 'ไม่เปิดรับที่นั่ง',
      placesOf: 'ที่นั่งว่าง {free} จาก {total} ที่',
      request: 'สอบถามที่นั่ง',
      waitlist: 'ลงชื่อรอคิว',
    },
    catalog: {
      requestCourse: 'สอบถามหลักสูตรนี้',
      nextTerm: 'เริ่ม {date}',
      noTerm: 'สอบถามรอบเรียนได้เลย',
      details: 'ดูรายละเอียด',
      vatOnce: 'ราคาทั้งหมดยังไม่รวม VAT 19%',
      guide: {
        kicker: 'ตัวช่วยเลือกหลักสูตร',
        title: 'ตอบ 3 คำถาม เจอหลักสูตรที่ใช่',
        steps: [
          {
            id: 'basis',
            question: 'คุณมีพื้นฐานการนวดหรืองานความงามอยู่แล้วไหม',
            options: [
              { id: 'nein', label: 'ยังไม่มี เริ่มจากศูนย์' },
              { id: 'ja', label: 'มีพื้นฐานอยู่แล้ว' },
            ],
          },
          {
            id: 'ziel',
            question: 'เป้าหมายของคุณคืออะไร',
            options: [
              { id: 'technik', label: 'เก็บเทคนิคเพิ่มสักอย่าง' },
              { id: 'ausbildung', label: 'เรียนเป็นอาชีพแบบจริงจัง' },
              { id: 'betrieb', label: 'ทำร้านให้ถูกกฎหมาย' },
            ],
          },
          {
            id: 'zeit',
            question: 'มีเวลาเรียนได้แค่ไหน',
            options: [
              { id: 'kurz', label: '1 วัน' },
              { id: 'mehr', label: 'หลายวัน' },
            ],
          },
        ],
        resultLabel: 'หลักสูตรที่เหมาะกับคุณ',
        basisHint:
          'คอร์ส 1 วันคือการต่อยอดจากพื้นฐาน (Weiterbildung) ต้องมีพื้นฐานมาก่อนนะ ถ้ายังไม่มีพื้นฐาน แนะนำเริ่มจากหลักสูตรวิชาชีพหลายวันก่อน จะได้ปูรากฐานให้แน่น',
        request: 'สอบถามที่นั่งหลักสูตรนี้',
      },
      groups: {
        kurzkurs: {
          kicker: 'คอร์ส 1 วัน',
          title: 'เทคนิคนวดและสปา',
          description:
            'เทคนิคละวัน เรียนจบรับใบประกาศ เหมาะกับคนที่อยากเอาทักษะใหม่ไปใช้กับลูกค้าได้ทันที',
        },
        ausbildung: {
          kicker: 'หลายวัน',
          title: 'หลักสูตรวิชาชีพ',
          description:
            'โปรแกรมที่เรียนนานขึ้น ครบทั้งทฤษฎี ลงมือฝึก และสอบ วางรากฐานให้ทำเป็นอาชีพได้จริง',
        },
        betrieb: {
          kicker: 'สิ่งที่เจ้าของร้านต้องมี',
          title: 'สำหรับเจ้าของกิจการ',
          description: 'ของที่ต้องมีเพื่อเปิดร้านให้ถูกกฎหมาย และเอกสารที่พร้อมยื่นเมื่อมีการตรวจสอบ',
        },
      },
    },
    featured: {
      kicker: 'ตัวอย่างหลักสูตรแบบละเอียด',
      leadSuffix:
        'หลักสูตรยอดนิยมที่สุดของโรงเรียน เพราะลูกค้าในเยอรมนีแทบทุกคนมีอาการแบบนี้',
      outcomes: 'จบแล้วทำอะไรได้บ้าง',
      curriculum: 'เนื้อหาที่เรียน',
      faq: 'คำถามที่ถามเข้ามาบ่อย ๆ สำหรับหลักสูตรนี้',
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
      noDates: 'ตอนนี้ยังไม่มีรอบที่ประกาศไว้ สอบถามรอบถัดไปได้เลย',
      cta: 'สอบถามที่นั่งหลักสูตรนี้',
      ctaNote:
        'สอบถามก่อนยังไม่เป็นการจอง เราจะตอบกลับพร้อมยืนยันที่นั่ง วิธีชำระเงิน และเงื่อนไขการยกเลิกให้ก่อนเสมอ',
      imageAlt: 'ครูผู้สอนใช้นิ้วหัวแม่มือทั้งสองข้างนวดต้นคอของลูกค้าที่นั่งอยู่',
    },
    learn: {
      of: 'จาก',
      steps: 'ขั้นตอน',
      note: 'ทุกวันเรียนใช้ลำดับเดียวกัน คุณจะรู้เสมอว่าตอนนี้อยู่ขั้นไหน',
      items: [
        {
          title: 'รู้ก่อนลงมือ',
          text: 'ก่อนจะแตะตัวใคร คุณต้องรู้ว่าใต้มือคุณคือกล้ามเนื้อหรือโครงสร้างอะไร และการนวดครั้งนี้ต้องการผลอะไร',
        },
        {
          title: 'ครูสาธิตให้ดู',
          text: 'ดูครูทำครบทุกขั้นรวดเดียวจนจบโดยไม่หยุด เก็บให้หมดทั้งจังหวะ ลำดับ และท่าทางของตัวผู้นวดเอง',
        },
        {
          title: 'ลองทำเอง',
          text: 'ฝึกเป็นคู่ สลับกันเป็นทั้งคนนวดและคนถูกนวด เพราะน้ำหนักมือจะเข้าใจได้จริง ๆ ก็ต่อเมื่อเคยโดนมาก่อน',
        },
        {
          title: 'ครูจับมือแก้ท่า',
          text: 'ครูเอามือทับมือคุณ แล้วปรับองศา น้ำหนัก และทิศของแรงกดให้ถึงจุด — ตรงนี้แหละที่คลิปวิดีโอทำแทนไม่ได้',
        },
        {
          title: 'ทำเองได้แบบปลอดภัย',
          text: 'คุณลงมือครบทั้งขั้นตอนด้วยตัวเอง พร้อมบอกได้ว่ากรณีไหนห้ามนวด และขีดจำกัดของงานอยู่ตรงไหน',
        },
        {
          title: 'สอบและรับใบประกาศ',
          text: 'สอบทั้งภาคทฤษฎีและภาคปฏิบัติ ผ่านแล้วรับใบประกาศนียบัตรของโรงเรียนที่ประทับตรา BfD',
        },
      ],
    },
    outcomes: {
      disclaimer:
        'เส้นทางเหล่านี้เป็นไปได้จริง แต่ไม่ใช่การรับประกัน โรงเรียนให้ทั้งทักษะและหลักฐานการอบรม ไม่ได้สัญญางานหรือการันตีรายได้',
      items: [
        {
          title: 'เพิ่มเมนูใหม่ให้ร้านเดิม',
          text: 'ร้านความงามที่ทำนวดหน้าลิฟติ้งอยู่แล้ว แค่เพิ่มกัวซาเข้าไป ก็มีบริการที่สองขายให้ลูกค้าคนเดิมได้',
        },
        {
          title: 'ทำงานในโรงแรม สปา หรือร้านนวด',
          text: 'ร้านรอบ ๆ Hamburg มองหาคนที่มีฝีมือพิสูจน์ได้ ใบประกาศใบนี้คือของที่คุณเอาไปยื่นให้เขาดู',
        },
        {
          title: 'มั่นใจก่อนออกตัวเปิดร้าน',
          text: 'หลายคนมาเรียนเพราะกำลังวางแผนเปิดร้านตัวเอง และอยากรู้ก่อนว่าฝีมือเอาอยู่ไหม — คอร์สสุขอนามัยก็จำเป็นในช่วงนี้ด้วย',
        },
        {
          title: 'เก็บเทคนิคเพิ่มจากวิชาเดิม',
          text: 'คนที่นวดเป็นอยู่แล้วมาเก็บเทคนิคที่ร้านตัวเองยังไม่มี เสร็จในวันเดียว ไม่ต้องเรียนข้ามเดือน',
        },
        {
          title: 'สร้างความชำนาญเฉพาะทาง',
          text: 'นวดสตรีมีครรภ์หรือนวดระบายน้ำเหลือง คือกลุ่มลูกค้าที่แทบไม่มีใครดูแลให้เขาเฉพาะทางเลย',
        },
      ],
    },
    school: {
      role: 'ผู้อำนวยการและครูผู้สอน',
      body: 'สุนิษา พิชา เริ่มจากการเป็นพยาบาลที่เมืองไทย ก่อนมาสอบใบประกอบวิชาชีพ Kosmetikerin ของรัฐที่เยอรมนี และสอนวิชาชีพมาตั้งแต่ปี 2005 ด้วยใบอนุญาตจากทางการเยอรมัน ได้เรียนกับเธอ คือได้เรียนกับคนที่รู้ทั้งสองระบบจริง ๆ จากข้างใน',
      pull: 'พยาบาลเมืองไทย สอบใบประกอบวิชาชีพที่เยอรมนี ได้ใบอนุญาตสอนตั้งแต่ปี 2005 — เส้นทางเดียวกับที่ลูกศิษย์หลายคนกำลังจะเดิน',
      teamAlt:
        'สุนิษา พิชา ยืนกับเพื่อนร่วมงานในชุดกาวน์สีขาวหน้าโลโก้โรงเรียน ข้าง ๆ เป็นใบรับรอง BfD ในกรอบ',
      teamCaption: 'ทีมผู้บริหารโรงเรียนสาขา Ahrensburg พร้อมใบรับรองจาก BfD',
      archiveAlt: 'ภาพเก่าของสุนิษา พิชา สมัยเป็นนักเรียนพยาบาลในชุดยูนิฟอร์ม ปี 1983',
    },
    evidence: {
      note: 'จบทุกหลักสูตร ภาพปิดท้ายก็เหมือนกันเสมอ คือภาพนักเรียนทั้งกลุ่มถือใบประกาศอยู่ในมือ ส่วนหลังจากนั้นจะเอาไปทำอะไร แต่ละคนเลือกเส้นทางของตัวเอง',
      posterAlt:
        'แผ่นข้อมูลของโรงเรียน มีภาพกลุ่มนักเรียนที่จบหลักสูตรถือใบประกาศนียบัตร พร้อมรายละเอียดสาขา Ahrensburg',
      caption:
        'ภาพจากการเรียนการสอนจริง จัดเตรียมโดยโรงเรียน Kosmetikschule Picha ส่วนรีวิวที่ระบุชื่อผู้เรียนจะมาเพิ่มที่นี่ เมื่อได้รับความยินยอมเป็นลายลักษณ์อักษรจากเจ้าของภาพแล้ว',
      facts: [
        'ปีที่สุนิษา พิชา เริ่มสอนและอบรมวิชาชีพในเยอรมนี',
        'หลักสูตรในโปรแกรม ตั้งแต่คอร์ส 1 วันจนถึงหลักสูตรวิชาชีพ',
        'สาขา: Rosbach, ปริมณฑล Frankfurt และ Ahrensburg',
        'ชั่วโมงอบรมในหลักสูตรสุขอนามัย พร้อมการสอบวัดความรู้',
      ],
    },
    contact: {
      address: 'ที่อยู่',
      phone: 'โทรศัพท์',
      travel: 'การเดินทาง',
      travelValue: 'นั่ง U1 ลงสถานี Ahrensburg เดินต่ออีกไม่กี่นาที จาก Hamburg ใช้เวลาราว 30 นาที',
      travelNote:
        'มีนักเรียนเดินทางมาจาก {cities} เป็นประจำ วันเรียน 09:00–17:00 ไปเช้าเย็นกลับได้ในวันเดียว',
      map: 'ดูบนแผนที่',
      faq: 'คำถามที่พบบ่อย',
    },
    form: {
      title: 'สอบถามที่นั่ง',
      intro: 'แค่สอบถาม ยังไม่ใช่การจอง เราจะตอบกลับพร้อมเงื่อนไขทั้งหมดให้ก่อน โดยที่ยังไม่มีอะไรผูกมัดคุณ',
      errorSummary: 'ช่วยตรวจสอบข้อมูลเหล่านี้อีกครั้ง:',
      name: 'ชื่อ',
      phone: 'เบอร์โทร หรือ LINE',
      phoneHint: 'ไม่จำเป็น ถ้ากรอกอีเมลไว้แล้ว',
      email: 'อีเมล',
      course: 'หลักสูตร',
      choose: 'กรุณาเลือก',
      session: 'รอบเรียน',
      sessionHint: 'จะระบุทีหลังก็ได้',
      noSession: 'ยังไม่ระบุรอบ',
      reason: 'เรื่องที่ต้องการสอบถาม',
      reasons: [
        'ขอที่นั่งในรอบที่ต้องการ',
        'สอบถามรายละเอียดหลักสูตร',
        'ลงชื่อรอคิว',
        'ขอเปิดรอบเรียนวันอื่น',
        'จัดอบรมให้ทีมงานในร้าน',
      ],
      message: 'ข้อความ',
      optional: 'ไม่บังคับ',
      replyLanguage: 'ภาษาที่ต้องการให้ตอบกลับ',
      consent:
        'ข้าพเจ้ายินยอมให้ Kosmetikschule Picha เก็บข้อมูลนี้ไว้เพื่อตอบคำถามของข้าพเจ้า ข้อมูลจะไม่ถูกส่งต่อให้บุคคลอื่น',
      submit: 'ส่งข้อความ',
      sending: 'กำลังส่ง…',
      sentTitle: 'เราได้รับข้อความของคุณแล้ว',
      sentBody:
        'คุณนุ้ยจะติดต่อกลับด้วยตัวเอง โดยปกติภายในหนึ่งวันทำการ พร้อมยืนยันที่นั่ง วิธีชำระเงิน และเงื่อนไขการยกเลิก',
      sentAgain: 'ส่งข้อความอีกครั้ง',
      sendError: 'ตอนนี้ส่งข้อความไม่สำเร็จ ลองใหม่อีกครั้ง หรือโทร 0152 5524 8655',
      errors: {
        name: 'กรุณากรอกชื่อของคุณ',
        contact: 'กรุณากรอกอีเมลหรือเบอร์โทรศัพท์อย่างน้อยหนึ่งอย่าง',
        email: 'รูปแบบอีเมลนี้ยังไม่ถูกต้อง',
        program: 'กรุณาเลือกหลักสูตร',
        consent: 'ถ้าไม่ยินยอม เราจะติดต่อกลับไม่ได้',
      },
    },
    footer: {
      motto: 'นวดคือฝีมือ ฝึกให้ชำนาญก็คืออาชีพ',
      imprint: 'ข้อมูลผู้ให้บริการ',
      privacy: 'นโยบายความเป็นส่วนตัว',
      legal:
        'ใบประกาศนียบัตรของโรงเรียนเป็นหลักฐานว่าผ่านการอบรมและสอบแล้ว ไม่ใช่วุฒิการศึกษาของรัฐ ค่าเรียน รอบเรียน และที่นั่งว่างอาจมีการปรับปรุงเสมอ โดยให้ยึดเอกสารยืนยันการสมัครเป็นสำคัญ',
    },
    meta: {
      title: 'Kosmetikschule Picha Ahrensburg — เรียนนวด ดูแลเท้า และความงาม',
      description:
        'โรงเรียนสอนวิชาชีพนวด ดูแลเท้า ความงาม และสุขอนามัย ที่ Ahrensburg ใกล้ Hamburg สอนภาษาไทยและเยอรมัน รับใบประกาศนียบัตรเมื่อสอบผ่าน',
      ogTitle: 'สองมือคู่นี้ สร้างอนาคตให้คุณได้',
    },
  },
} as const satisfies Record<Locale, unknown>;

export function getUi(locale: Locale): UiDictionary {
  return UI[locale] as UiDictionary;
}
