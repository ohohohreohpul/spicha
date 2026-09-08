# Kosmetikschule Picha — Ahrensburg

Einseitige Website für die Massage- und Kosmetikschule Picha, Standort Ahrensburg.
Deutsch als Primärsprache, thailändische Fassung vorbereitet.

```bash
npm install
npm run dev     # http://localhost:3000
npm run build
```

## Was hier drin ist

| Abschnitt | Komponente |
|---|---|
| Hero „The Working Hand“ (Film, Wiederherstellung 09/2026) | `components/hero/` |
| (ruhige Hero-Alternative, ungenutzt) | `components/ui/hero-08` |
| Anerkennung | `components/trust/` |
| Wegweiser (Situation → erster Kurs → Lernweg → 3-Fragen-Guide) | `components/orientation/` + `components/catalog/CourseGuide` |
| Kurskatalog mit Level-Badges und Empfehlungs-Flags | `components/catalog/CourseGrid` |
| Live-Terminplan | `components/schedule/` |
| Der Kurstag | `components/learn/` |
| Nach dem Kurs | `components/outcomes/` |
| Die Schule | `components/people/` |
| Belege | `components/evidence/` |
| Anfahrt, FAQ, Anfrage | `components/contact/` |

## Inhalte

Alle Kurse, Preise und Angaben zur Schule stammen aus dem Material in `../Academy/`.
Nichts ist erfunden. Was noch bestätigt werden muss, steht in
[docs/CLIENT-VERIFY.md](docs/CLIENT-VERIFY.md) und ist im Code mit `CLIENT-VERIFY`
markiert.

- `src/data/programs.ts` — die vierzehn Kurse, dauerhaft
- `src/data/program-images.ts` — Kursfotos, geteilt zwischen Katalog und Wegweiser
- `src/data/sessions.ts` — Termine, Demonstrationsdaten
- `src/data/school.ts` — Adresse, Anerkennung, Werdegang der Schulleiterin
- `src/data/faq.ts`, `src/data/body-areas.ts`

## Termine

`src/lib/schedule.ts` baut die öffentliche Terminliste und formatiert **alle**
Anzeigetexte serverseitig, damit Server und Client identisch rendern. `GET
/api/schedule` liefert dieselbe Struktur für die Aktualisierung im Browser. Der
geplante Weg von Google Calendar über WhatsApp bis zur Veröffentlichung steht in
[docs/CALENDAR-SYNC.md](docs/CALENDAR-SYNC.md).

## Gestaltung

Ruhige Produktseite auf Porzellan (Rebuild 2026-09): Fraunces-Serif in
Gesprächsgröße, Noto Sans Thai für beide Schriftsysteme, Fotos in leicht
gerundeten Karten, eine Bewegungssprache (`components/ui/fade-in.tsx`).
Farbe trägt Bedeutung — Petrol führt, Gold steht ausschließlich für
Zertifizierung, Rot ausschließlich für knappe Plätze und Fehler.
Details: [DESIGN.md](DESIGN.md), Bewegung: [docs/MOTION.md](docs/MOTION.md).
Die ruhige Hero-Variante bleibt unter `/demo-hero08` (noindex) erreichbar.
Kursfinder (`components/finder/`) und Beispielkurs (`components/featured/`) sind
enthalten, aber nicht eingebaut — Kurs-Discovery läuft über genau zwei Abschnitte
(Wegweiser, Katalog), siehe DESIGN.md.

## Barrierefreiheit

- Kursfinder als Radiogruppe mit Pfeiltastensteuerung, dazu immer die vollständige
  Textliste
- Status nie nur über Farbe: jeder Verfügbarkeitszustand hat Zeichen und Text
- Sichtbare Fokusringe, Touchflächen ab 44 px, Fehlerzusammenfassung im Formular
- Thailändische Zeilenhöhe eigens gesetzt

## Assets

Herkunft und Rechte aller Bilder und Videos: [docs/ASSET-MANIFEST.md](docs/ASSET-MANIFEST.md).
