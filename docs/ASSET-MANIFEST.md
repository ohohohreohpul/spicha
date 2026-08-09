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

Erzeugt über Freepik/Magnific. Zeigt **keine realen Personen** und keine reale
Ausbilderin. Als Platzhalter gedacht, bis eigene Fotos vorliegen.

| Datei | Modell | Motiv |
|---|---|---|
| `video/hand-01-oil.mp4` | Seedance 2.0 Pro, 1080p, 5 s | Hände verteilen Öl |
| `video/hand-02-correction.mp4` | Seedance 2.0 Pro, 1080p, 5 s | Handhaltung am Schultergürtel |
| `video/hand-03-classroom.mp4` | Kling 2.5, 1080p, 5 s | Übung zu zweit im Unterrichtsraum |
| `img/body-map.jpg` | Text-to-Image | Körperfigur für den Kursfinder |
| `img/t-office.jpg` | Text-to-Image | Office-Syndrom-Massage |
| `img/t-cupping.jpg` | Text-to-Image | Schröpfen |
| `img/t-facial.jpg` | Text-to-Image | Facial Lifting |
| `img/t-foot.jpg` | Text-to-Image | Fußmassage und Spa |
| `img/t-fusspflege.jpg` | Text-to-Image | Fußpflege |

Alle Prompts enthielten dieselben Ausschlüsse: keine Kerzen, Orchideen oder gestapelten
Steine, keine Wellness-Werbeästhetik, keine sexualisierten Posen, korrekte Handanatomie,
professionelle Abdeckung. Negative Prompts sind im Generierungsprotokoll hinterlegt.

## Verworfene Aufnahmen

Ein vierter generierter Clip (Gua-Sha-Nahaufnahme) wurde nicht übernommen: die
Kadrierung wirkte wie Spa-Werbung statt wie Unterricht, und die Abdeckung entsprach
nicht der im Briefing verlangten professionellen Draperie. Ein Ersatz sollte die
Werkzeugführung zeigen, nicht die Haut.

## Regel für Zertifikate

Zertifikate werden **nicht** von einer KI mit lesbarem Text erzeugt. Für Abbildungen
eines Zertifikats wird die freigegebene Vorlage der Schule montiert.

## Videokompression

Die Clips liegen als H.264 vor, auf 1600 px Breite skaliert, CRF 27, `+faststart`,
ohne Tonspur (rund 0,4–0,6 MB je Clip). Die Startbilder (`poster-*.jpg`) sind das
jeweils erste Bild des Clips und werden angezeigt, solange das Video lädt oder wenn
Autoplay unterbunden ist.
