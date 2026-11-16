# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project

Static one-page website for Galerie Hagemeister (goldsmith workshop, Erfurt) — https://galerie-hagemeister.de/. All site content is in German. There is no framework, bundler, JS build, or test suite.

## Commands

- `npm run dev` — Tailwind CLI in watch mode: compiles `input.css` → `src/style.css`
- `npm run prod` — same, minified (run before deploying/committing CSS changes)

To preview, open `src/index.html` directly in a browser or serve the `src/` folder with any static server.

## Architecture

- `src/` is the deployable web root (uploaded as-is to an Apache host). `src/.htaccess` 301-redirects http, www and `/index.html` to the canonical `https://galerie-hagemeister.de/`; keep canonical, `og:url`, `robots.txt` and `sitemap.xml` on that exact URL. Update `<lastmod>` in `src/sitemap.xml` when page content changes.
- `src/index.html` holds the entire page: header, sections (`#werkstattangebot`, `#werkstoffe`, `#arbeiten`, `#kontakt`), footer, plus an inline script that initializes AOS and adds smooth scrolling for `#` anchor links.
- `src/style.css` is **generated** by Tailwind — never edit it by hand. Edit `input.css` (Roboto `@font-face` declarations + Tailwind directives) or `tailwind.config.js` instead, then rebuild.
- Tailwind scans `./src/**/*.{html,js}` for classes, so new utility classes in `index.html` only appear after a rebuild.
- Custom theme in `tailwind.config.js`: brand colors prefixed `nh-` (`nh-grey-light`, `nh-grey`, `nh-grey-dark`, `nh-orange-light`, `nh-orange`), `font-roboto`, and a centered `container` capped at 1440px.
- Third-party assets are vendored locally (no CDNs): AOS (`src/aos.js`, `src/aos.css`) for scroll animations via `data-aos` attributes, Roboto fonts in `src/fonts/`. Icons are inline SVGs from Heroicons.
- A vacation banner ("Urlaubs-Banner") sits commented out at the top of `<body>`; enable it by uncommenting and updating the dates.
- Formatting uses Prettier (tabs, single quotes, no semicolons in JS per existing code).
