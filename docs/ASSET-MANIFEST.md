# Bildmaterial — Herkunft und Rechte

## Echte Aufnahmen der Schule

Vom Auftraggeber bereitgestellt (`Academy/`). **Einwilligung der abgebildeten Personen
ist noch einzuholen.**

| Datei | Quelle | Verwendung |
|---|---|---|
| `img/school-team.jpg` | IMG_2473 | Abschnitt „Schule", Schulleitung |
| `img/founder-1983.jpg` | IMG_2478 | Abschnitt „Schule", Archivbild 1983 |
| `img/evidence-poster.jpg` | IMG_2471 | Abschnitt „Belege" |

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

## Bewegtbild: echtes Filmmaterial

Alle Hero-Clips sind **lizenziertes Realfilmmaterial** aus der Freepik-Stockbibliothek —
kein KI-Video. Das war die Antwort auf zwei Rückmeldungen: generierte Clips wirkten
unecht, und generierte Totalen mit mehreren Personen wirkten unheimlich.

| Datei | Quelle | Motiv |
|---|---|---|
| `video/clip-01-nacken.mp4` | Freepik Stock, real gefilmt | Flacher Druck an Nacken und Schultergürtel |
| `video/clip-02-ruecken.mp4` | Freepik Stock, real gefilmt | Übereinandergelegte Hände am Rücken |
| `video/clip-03-fuss.mp4` | Freepik Stock, real gefilmt | Arbeit am Fußgewölbe, helle Praxis |

Auswahlregeln, die sich bewährt haben:

- **nur Detailaufnahmen** — Hände und Griff, nah kadriert, **keine Gesichter**
- **keine Spa-Ästhetik** — verworfen wurden alle Clips mit warmem Stimmungslicht,
  öliger Haut, Kerzen oder sinnlicher Kadrierung, ebenso ein Clip aus einem
  Wohnzimmer-Salon mit Duschkabine im Bild
- bevorzugt wurde, was nach **Praxis** aussieht: Physiotherapie, Chiropraktik, helle
  Räume, sachliche Kadrierung

Jeder Clip ist auf 6 Sekunden geschnitten, auf 1600 px skaliert, tonlos, und leicht
**kühler graded** (weniger Sättigung, Blauanteil erhöht), damit er zur Porzellan-Palette
der Seite passt statt nach Beige-Wellness auszusehen.

## Generierte Standbilder

Standbilder werden mit **Recraft V4.1** erzeugt. Im Foto stört die Künstlichkeit nicht,
solange die Bildsprache stimmt — im Bewegtbild sehr wohl.

Die Aufnahmen zeigen **keine realen Personen** und keine reale Ausbilderin. Sie sind
Platzhalter, bis eigene Fotos aus dem Unterricht vorliegen.

| Datei | Motiv |
|---|---|
| `img/body-map.jpg` | Körperfigur für den Kursfinder |
| `img/t-office.jpg` | Office-Syndrom-Massage, plus Wegweiser-Persona „Ich arbeite schon im Studio" |
| `img/t-cupping.jpg` | Schröpfen |
| `img/t-facial.jpg` | Facial Lifting |
| `img/t-foot.jpg` | Fußmassage und Spa |
| `img/t-fusspflege.jpg` | Fußpflege, plus Wegweiser-Persona „Ich plane ein eigenes Studio" |

### Bildsprache

Der erste Satz sah nach Spa-Werbung aus und wurde vollständig ersetzt. Die Prompts sind
jetzt auf Reportage festgelegt, nicht auf Werbung:

- 35-mm-Reportage, ausschließlich vorhandenes Licht, kein Studiolicht, kein Aufheller
- echter deutscher Unterrichtsraum: weiße Wand, Fenster mit weißem Rahmen,
  Heizkörper, Laminat, Wanduhr, Whiteboard, Handtuchwagen, Ölflasche auf einem Hocker
- Arbeitshände: kurze blanke Nägel, sichtbare Sehnen, kein Schmuck, keine Maniküre
- echte Haut mit Poren und Falten, gedeckte Farben, feines Filmkorn, leicht
  unperfekter Bildausschnitt, niemand blickt in die Kamera
- ausgeschlossen: Kerzen, Orchideen, gestapelte Steine, Bambus, warmes Stimmungslicht,
  glänzend geölte Haut, Retusche, Modelgesichter, symmetrische Studiokomposition

## Verworfene Aufnahmen

**Kein KI-Bewegtbild mehr.** Die generierten Clips (Öl zwischen den Händen, Korrektur
Hand auf Hand, Totale des Unterrichtsraums) sind vollständig entfernt und durch
Realfilm ersetzt. Die Totale war der schlimmste Fall: je mehr vollständige Menschen
sich in einem KI-Clip bewegen, desto stärker fällt das Uncanny-Valley auf.

## Regel für Zertifikate

Zertifikate werden **nicht** von einer KI mit lesbarem Text erzeugt. Für Abbildungen
eines Zertifikats wird die freigegebene Vorlage der Schule montiert.

## Videokompression

Die Clips liegen als H.264 vor, auf 1600 px Breite skaliert, CRF 27, `+faststart`,
ohne Tonspur (rund 0,4–0,6 MB je Clip). Die Startbilder (`poster-*.jpg`) sind das
jeweils erste Bild des Clips und werden angezeigt, solange das Video lädt oder wenn
Autoplay unterbunden ist. `poster-02.jpg` zieht zusätzlich als Standbild der
Wegweiser-Persona „Ich fange ganz neu an" mit.
