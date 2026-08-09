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
| 01 Hero „The Working Hand" | `components/hero/` |
| 02 Anerkennung | `components/trust/` |
| 03 Kursfinder über den Körper | `components/finder/` |
| 04 Live-Terminplan | `components/schedule/` |
| 05 Kurskatalog | `components/catalog/` |
| 06 Beispielkurs im Detail | `components/featured/` |
| 07 Der Kurstag | `components/learn/` |
| 08 Nach dem Kurs | `components/outcomes/` |
| 09 Die Schule | `components/people/` |
| 10 Belege | `components/evidence/` |
| 11 Anfahrt, FAQ, Anfrage | `components/contact/` |

## Inhalte

Alle Kurse, Preise und Angaben zur Schule stammen aus dem Material in `../Academy/`.
Nichts ist erfunden. Was noch bestätigt werden muss, steht in
[docs/CLIENT-VERIFY.md](docs/CLIENT-VERIFY.md) und ist im Code mit `CLIENT-VERIFY`
markiert.

- `src/data/programs.ts` — die zwölf Kurse, dauerhaft
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

Ein Editorial-System, kein Karten-Raster: Haarlinien statt Boxen, asymmetrische
Spalten, Fraunces für Überschriften und Noto Sans Thai für beide Schriftsysteme.
Farbe trägt Bedeutung — Petrol führt, Gold steht ausschließlich für Zertifizierung,
Rot ausschließlich für Druckpunkte und knappe Plätze.

Bewegung nur an drei Stellen: die Bildfolge im Hero, der Kursfinder und die
Terminübergänge. Alles andere ist ruhig. `prefers-reduced-motion` schaltet die
Bildfolge auf ein Standbild und alle Übergänge ab.

## Barrierefreiheit

- Kursfinder als Radiogruppe mit Pfeiltastensteuerung, dazu immer die vollständige
  Textliste
- Status nie nur über Farbe: jeder Verfügbarkeitszustand hat Zeichen und Text
- Sichtbare Fokusringe, Touchflächen ab 44 px, Fehlerzusammenfassung im Formular
- Thailändische Zeilenhöhe eigens gesetzt

## Assets

Herkunft und Rechte aller Bilder und Videos: [docs/ASSET-MANIFEST.md](docs/ASSET-MANIFEST.md).

## Deployment auf Vercel

Das Repository ist die App — kein Root-Verzeichnis einstellen, keine `vercel.json`
nötig. Vercel erkennt Next.js 16 und baut mit Turbopack.

1. In Vercel „Add New Project" → dieses Repository importieren.
2. Framework `Next.js`, Build `next build`, Output automatisch. Nichts ändern.
3. Environment Variable setzen, sobald die Domain feststeht:

   | Name | Environment | Wert |
   |---|---|---|
   | `NEXT_PUBLIC_SITE_URL` | Production | `https://<endgültige-domain>` |

   Für Preview-Deployments **nicht** setzen — dort wird automatisch die
   Deployment-URL verwendet, damit Canonicals und JSON-LD nicht auf die
   Produktionsdomain zeigen.
4. Domain in den Projekteinstellungen verbinden.

Sicherheits-Header (HSTS, `nosniff`, `X-Frame-Options`, Referrer-Policy,
Permissions-Policy) kommen aus `next.config.ts` und gelten damit auch auf Vercel.

Die Startseite wird statisch vorgerendert und alle fünf Minuten revalidiert
(`export const revalidate = 300`), damit neue Termine ohne Deployment erscheinen.
`/api/schedule` und `/api/anfrage` laufen dynamisch.

**Vor dem öffentlichen Start:** [docs/CLIENT-VERIFY.md](docs/CLIENT-VERIFY.md)
abarbeiten — insbesondere Impressum, Datenschutzerklärung und die Einwilligung für
die Fotos.
