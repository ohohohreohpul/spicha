# Vor der Veröffentlichung von der Schule zu bestätigen

Alles auf dieser Liste steht aktuell so auf der Website, ist aber **nicht unabhängig
geprüft**. Nichts davon wurde erfunden — die Angaben stammen aus dem gedruckten
Material der Schule (`Academy/IMG_2469–2480`). Bestätigt die Schule sie schriftlich,
kann die Markierung entfallen. Widerspricht sie, wird der Text geändert.

## Rechtlich sensibel — vor dem Livegang zwingend klären

| Thema | Aktueller Stand auf der Seite | Quelle | Zu klären |
|---|---|---|---|
| BfD-Anerkennung | „Vom Bundesberufsverband der Fachkosmetiker/innen in Deutschland e.V. (BfD) anerkannte Kosmetikschule" | Aushang und Flyer der Schule | Aktuelle Urkunde, Gültigkeitszeitraum, exakte zulässige Formulierung |
| Ausbildungsbefugnis | „Ausbildungsbefugnis für Kosmetik und Wellness, Regierungspräsidium Darmstadt (2005)" | Profilblatt Sunisa Picha | Gilt die Befugnis auch für den Standort Ahrensburg? |
| Zertifikatswirkung | „belegt die erfolgreiche Teilnahme … kein staatlicher Berufsabschluss" | eigene, vorsichtige Formulierung | Von der Schule freigeben lassen |
| Hygienekurs | „Lehrgang zur Erlangung der Sachkenntnis", ärztlich gezeichnet von Prof. Dr. med. Bernd Wüsten | Musterzertifikat | Rechtsgrundlage und aktuelle Ärztin/Arzt bestätigen |
| Kosmetiker/in | „Sieben Einzelzertifikate" | Preisliste („รับประกาศ 7 ใบ") | Genaue Bezeichnung der sieben Zertifikate |

## Betriebliche Angaben

| Thema | Aktueller Stand | Zu klären |
|---|---|---|
| Preise | 269 € / 399 € / 550 € / 855 € / 899 € / 250 € + MwSt. | Aktuell? MwSt.-Behandlung je Kurs |
| Kursdauer | Klassische Massage und Fußpflege stehen als „mehrtägig" | Exakte Anzahl Kurstage |
| Kapazität | Demo-Werte 8–14 Plätze | Reale Gruppengrößen je Kurs |
| Termine | `src/data/sessions.ts` ist eine Demonstration | Durch die Google-Calendar-Anbindung ersetzen |
| Eröffnung Ahrensburg | „2024" in der Zeitleiste | Richtiges Jahr |
| Adress-Koordinaten | Näherungswert in `src/data/school.ts` | Genauen Kartenpunkt setzen |
| Barrierefreiheit | FAQ verweist auf telefonische Auskunft | Zugang, Aufzug, WC beschreiben |
| Zahlung und Storno | FAQ verweist auf die Anmeldebestätigung | Bedingungen schriftlich festlegen |
| Domain | `kosmetikschule-picha.de` als Platzhalter | Endgültige Domain |

## Bildrechte und Personen

- `public/img/school-team.jpg`, `founder-1983.jpg`, `evidence-poster.jpg` stammen aus dem
  Material der Schule. **Schriftliche Einwilligung der abgebildeten Personen einholen**,
  bevor die Seite online geht.
- Alle Bilder in `public/img/t-*.jpg` und die Videos in `public/video/` sind
  KI-generiert (Freepik/Magnific, Seedance 2.0 und Text-to-Image). Sie zeigen
  **keine** realen Schülerinnen und keine reale Ausbilderin. Siehe
  [ASSET-MANIFEST.md](ASSET-MANIFEST.md).
- Empfehlung: die generierten Aufnahmen mittelfristig durch echte Fotos aus dem
  Unterricht ersetzen. Die Bildzuschnitte bleiben dabei gleich.

## Thailändische Fassung

Die thailändische Fassung liegt unter `/th` vollständig vor: Kurse, FAQ, Terminliste,
Formular und Fußzeile. Sie folgt der Wortwahl aus dem eigenen Material der Schule
(หลักสูตร, ใบประกาศนียบัตร, โรงเรียนสอนวิชาชีพ).

**Sie ist noch nicht von einer muttersprachlichen Person geprüft.** Vor dem Livegang
muss jemand mit Thai als Muttersprache mindestens folgende Stellen durchgehen:

- alle Aussagen zu Zertifikaten, Anerkennung und Berufsausübung
  (`src/i18n/ui.ts` → `trust.disclaimer`, `footer.legal`; `src/data/faq.ts`)
- die Kursbeschreibungen und Lernziele in `src/data/programs.ts`
- die Anrede und Tonalität im Formular (`src/i18n/ui.ts` → `form`)

## Noch nicht umgesetzt

- **Impressum und Datenschutzerklärung.** Die Links im Fuß sind Platzhalter.
- **Anfrageziel.** `POST /api/anfrage` validiert und protokolliert, versendet aber noch
  nichts. Ziel-Postfach und WhatsApp-Anbindung fehlen.
