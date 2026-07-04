# Amico Pizza – Neufahrn bei Freising

Moderne Restaurant-Website für Amico Pizza. Statische Demo-Website ohne Backend.

## Tech-Stack

- Next.js 16 (App Router, statischer Export)
- React 19 + TypeScript (strict)
- Tailwind CSS 4
- Framer Motion
- Lucide Icons
- next-themes (Dark/Light Mode)

## Entwicklung

```bash
npm install
npm run dev
```

## Produktion

```bash
npm run build
```

Der statische Export liegt danach in `out/` und kann auf jedem statischen Host (GitHub Pages, Netlify, …) veröffentlicht werden.

## Struktur

- `app/` – Seiten (Start, Speisekarte, Öffnungszeiten, Kontakt, Standort) + SEO (Sitemap, Robots, Manifest)
- `components/` – Wiederverwendbare UI-Komponenten
- `data/` – Speisekarte, Öffnungszeiten, Stammdaten
- `lib/` – Utilities und Animations-Varianten
- `styles/` – Globale Styles und Design-Tokens
- `types/` – Gemeinsame TypeScript-Typen
