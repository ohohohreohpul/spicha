# Bildmaterial — Herkunft und Rechte

## Echte Aufnahmen der Schule

Vom Auftraggeber bereitgestellt (`Academy/`). **Einwilligung der abgebildeten Personen
ist noch einzuholen.**

| Datei | Quelle | Verwendung |
|---|---|---|
| `img/school-team.jpg` | IMG_2473 | Abschnitt 09, Schulleitung |
| `img/founder-1983.jpg` | IMG_2478 | Abschnitt 09, Archivbild 1983 |
| `img/evidence-poster.jpg` | IMG_2471 | Abschnitt 10, Belege |

## Logo

`public/logo/spicha-logo.png` und `src/app/icon.png` sind eine **saubere Neuzeichnung
des bestehenden Schullogos**, kein neues Logo. Grundlage war ein hochauflösender
Ausschnitt aus IMG_2470; daraus wurde mit Nano Banana Pro (Freepik/Magnific,
referenzgeführt) eine artefaktfreie Fassung mit flächigen Farben erzeugt, danach
freigestellt und auf die Bounding Box beschnitten.

Letterforms, Überlappung, Strichstärken und Farben folgen dem Original. Es bleibt
eine Rasterdatei. **Empfehlung:** vom Auftraggeber die Originaldatei anfordern —
idealerweise als Vektor (AI, EPS oder SVG). Liegt die vor, ersetzt sie diese Datei
ohne weitere Codeänderung; der Dateiname bleibt gleich.

## Generiertes Material

Alle Bilder werden mit **Recraft V4.1** erzeugt, die Hero-Clips anschließend mit
**Kling 3.0** aus genau diesen Bildern animiert (das Recraft-Bild ist der Startframe).
Kein Clip entsteht als reines Text-zu-Video — deshalb bleiben Licht, Farbe, Korn und
Bildausschnitt über Standbild und Bewegung identisch.

Die Aufnahmen zeigen **keine realen Personen** und keine reale Ausbilderin. Sie sind
Platzhalter, bis eigene Fotos aus dem Unterricht vorliegen.

| Datei | Erzeugung | Motiv |
|---|---|---|
| `video/hand-01-oil.mp4` | Recraft V4.1 → Kling 3.0, 1080p, 5 s | Hände verteilen Öl |
| `video/hand-02-correction.mp4` | Recraft V4.1 → Kling 3.0, 1080p, 5 s | Hand auf Hand, Korrektur am Handgelenk |
| `img/body-map.jpg` | Recraft V4.1 | Körperfigur für den Kursfinder |
| `img/t-office.jpg` | Recraft V4.1 | Office-Syndrom-Massage |
| `img/t-cupping.jpg` | Recraft V4.1 | Schröpfen |
| `img/t-facial.jpg` | Recraft V4.1 | Facial Lifting |
| `img/t-foot.jpg` | Recraft V4.1 | Fußmassage und Spa |
| `img/t-fusspflege.jpg` | Recraft V4.1 | Fußpflege |

### Bildsprache

Der frühere Satz sah nach Spa-Werbung aus und wurde vollständig ersetzt. Die
Prompts sind jetzt auf Reportage festgelegt, nicht auf Werbung:

- 35-mm-Reportage, ausschließlich vorhandenes Licht, kein Studiolicht, kein Aufheller
- echter deutscher Unterrichtsraum: weiße Wand, Fenster mit weißem Rahmen,
  Heizkörper, Laminat, Wanduhr, Whiteboard, Handtuchwagen, Ölflasche auf einem Hocker
- Arbeitshände: kurze blanke Nägel, sichtbare Sehnen, kein Schmuck, keine Maniküre
- echte Haut mit Poren und Falten, gedeckte Farben, feines Filmkorn, leicht
  unperfekter Bildausschnitt, niemand blickt in die Kamera
- ausgeschlossen: Kerzen, Orchideen, gestapelte Steine, Bambus, warmes Stimmungslicht,
  glänzend geölte Haut, Retusche, Modelgesichter, symmetrische Studiokomposition

### Bewegung

Die Kling-Prompts beschreiben nur die Bewegung, nicht das Bild — und ausdrücklich
**keine** Kamerafahrt: kein Zoom, kein Schwenk, kein Push-in, keine Umfahrung. Nur
das, was im Raum wirklich passiert: Hände, die Öl verteilen, ein Druck, der nachlässt,
eine Dozentin, die ihr Gewicht verlagert. Das ist der Grund, warum die Clips nicht wie
KI-Video aussehen.

## Verworfene Aufnahmen

**Keine Weitwinkel-Videos mit Personen.** Der Klassenraum-Clip wurde entfernt: eine
generierte Totale mit mehreren Gesichtern und liegenden Körpern wirkt unheimlich, egal
wie gut das Standbild ist. Je mehr vollständige Menschen sich in einem KI-Video bewegen,
desto stärker fällt das Uncanny-Valley auf.

Regel für Bewegtbild: **nur Detailaufnahmen.** Hände, Werkzeug, ein Griff — nah
kadriert, ohne Blick in die Kamera, ohne Totale des Raums. Weitwinkel-Situationen
bleiben Standbilder, denn im Foto stört die Künstlichkeit nicht.

Ein Gua-Sha-Clip wurde ebenfalls nicht übernommen: die Kadrierung wirkte wie
Spa-Werbung statt wie Unterricht, und die Abdeckung entsprach nicht der im Briefing
verlangten professionellen Draperie.

## Regel für Zertifikate

Zertifikate werden **nicht** von einer KI mit lesbarem Text erzeugt. Für Abbildungen
eines Zertifikats wird die freigegebene Vorlage der Schule montiert.

## Videokompression

Die Clips liegen als H.264 vor, auf 1600 px Breite skaliert, CRF 27, `+faststart`,
ohne Tonspur (rund 0,4–0,6 MB je Clip). Die Startbilder (`poster-*.jpg`) sind das
jeweils erste Bild des Clips und werden angezeigt, solange das Video lädt oder wenn
Autoplay unterbunden ist.
