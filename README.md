
# Bruegel-Website (statisch, ohne Design)

Diese Ordnerstruktur kann direkt auf Vercel als **statische Seite** deployt werden.

## Deploy auf Vercel (ohne Build-Setup)
1. Erstelle ein neues Projekt auf vercel.com.
2. Lade den Inhalt des Ordners (oder das ZIP) als **Static Project** hoch.
3. Es ist keine Build-Konfiguration nötig. Vercel dient die HTML-Dateien direkt aus.

## Alternative: Git-Import
- Lade den Ordner in ein Git-Repository (z. B. GitHub).
- Importiere das Repo in Vercel und wähle **Framework Preset: Other**.

## Struktur
- `index.html` – Startseite
- `biografie.html` – Lebenslauf
- `historischer-kontext.html` – Politik und Religion der Zeit
- `themen.html` – Hauptthemen der Kunst
- `werke.html` – Wichtige Werke mit Kurzanalysen
- `stil-und-bedeutung.html` – Stilmerkmale und Einordnung
- `nachwirkung.html` – Wirkungsgeschichte
- `quellen.html` – Literaturhinweise

## Hinweis
- Keine externen Abhängigkeiten, kein CSS, nur HTML-Texte.
- Für „schöne“ URLs ohne `.html` könntest du später ein Routing per `vercel.json` ergänzen.
