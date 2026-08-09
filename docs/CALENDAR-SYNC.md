# Google Calendar → Website → WhatsApp

Der Grundsatz: **Google Calendar bestimmt die Termin-Fakten, die Inhaltsdatenbank
bestimmt die freigegebenen Kursinhalte.** Die Schulleitung soll nie Webtexte pflegen.

Dieses Repository enthält die Frontend-Seite dieses Systems (Datenmodell, öffentliche
API, Anzeige mit allen Zuständen). Der Sync-Dienst selbst ist noch nicht gebaut; hier
steht, woran er andocken muss.

## Datenmodell

Zwei getrennte Sätze, siehe `src/lib/types.ts`:

- **Program** (`src/data/programs.ts`) — dauerhaft: Titel, Beschreibung, Lernziele,
  Curriculum, Zertifikatsaussage. Wird redaktionell freigegeben, nicht vom Kalender.
- **Session** (`src/data/sessions.ts`) — veränderlich: Datum, Zeit, Ort, Sprache,
  Kapazität, freie Plätze, Status. Kommt aus dem Kalender plus WhatsApp-Bestätigung.

`Session.calendarEventId` ist der Schlüssel, der eine **Änderung** von einem **neuen
Termin** unterscheidet. Er darf nie neu erzeugt werden.

## Ablauf

1. Die Schulleitung legt einen Termin im dafür vorgesehenen Google-Kalender an.
2. Ein Webhook (`watch`-Kanal) oder ein Poll erkennt die Änderung.
3. Der Dienst normalisiert das Event und sucht anhand des Titels ein freigegebenes
   Programm (Fuzzy-Match auf `Program.title` plus Aliasliste).
4. Treffer: die freigegebenen Kursinhalte werden an die neue Session gehängt.
   Kein Treffer: WhatsApp fragt, ob es ein neues Programm, ein bestehendes oder ein
   privater Termin ist.
5. Fehlende Betriebsangaben (Kapazität, Sprache) werden per WhatsApp erfragt — eine
   Frage pro Nachricht.
6. Die Schulleitung gibt frei.
7. Die Session wird veröffentlicht; die Website aktualisiert sich ohne Deployment.

## Änderungen ohne Rückfrage

Nach der ersten Freigabe dürfen automatisch übernommen werden, mit einer
WhatsApp-Bestätigung im Nachgang:

Startdatum · Enddatum · Uhrzeit · Ort · Online-Link

## Änderungen mit Freigabe

Neues Programm · Kurstitel · öffentliche Beschreibung · Preis · Kapazität ·
Unterrichtssprache · Dozentin · Zertifikatsaussage · Absage · Wechsel
Präsenz/Online

## Löschen

Ein aus dem Kalender verschwundener Termin wird **nie stillschweigend entfernt**.
WhatsApp fragt: als abgesagt markieren, aus der öffentlichen Ansicht nehmen, oder
bestehen lassen. Abgesagte Termine bleiben sichtbar durchgestrichen stehen, bis sie
bewusst entfernt werden — siehe den Termin am 31. Oktober in den Demodaten.

## Verfügbarkeit

Google Calendar liefert keine belastbare Platzzahl. Für den MVP gilt: Kapazität und
freie Plätze werden über WhatsApp gepflegt. Gäste im Kalendereintrag sind **keine**
bestätigten Anmeldungen. Erst mit einem echten Anmeldesystem darf `placesRemaining`
berechnet statt gepflegt werden.

## Was die KI im WhatsApp-Assistenten nie erfinden darf

Datum · Preis · Kapazität · Qualifikationen der Dozentinnen · Anerkennung ·
medizinische Aussagen · rechtliche Zulassung · Ort · Zertifikatsstatus ·
Verfügbarkeit.

Fehlt eine Angabe, wird gefragt — nicht ergänzt.

## Anbindung im Frontend

- `GET /api/schedule` liefert die freigegebenen Sessions plus `syncedAtIso`.
  Nur öffentliche Felder, keine Personendaten.
- `src/lib/schedule.ts` formatiert alle Anzeigetexte **serverseitig**, damit Datum
  und Preis auf Server und Client identisch sind.
- Fällt der Sync aus, bleibt der zuletzt bestätigte Stand stehen. Die Anzeige wechselt
  dann von „Stand" zu „Zuletzt bestätigt". Ab 24 Stunden ohne Sync gilt der Stand als
  veraltet (`SchedulePayload.stale`).
- Der Client zeigt bei einem Fehler einen Hinweis und behält die alte Liste. Er leert
  die Ansicht nie.
