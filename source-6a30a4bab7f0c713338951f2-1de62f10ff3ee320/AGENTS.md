# AGENTS — Wedding Invitation Site

## Project Overview

A single-page digital wedding invitation for **Jithin Abdulsalam & Safna Latheef**. Built with TanStack Start (React + Vite) on Netlify. Royal Mughal / Islamic aesthetic theme.

## Tech Stack

| Layer | Technology |
|-------|------------|
| Framework | TanStack Start |
| Frontend | React 19, TanStack Router v1 |
| Build | Vite 7 |
| Styling | Custom CSS (inline `<style>` block) + Tailwind CSS 4 (minimal) |
| Language | TypeScript 5 (strict mode) |
| Deployment | Netlify |

## Directory Structure

```
src/
  routes/
    __root.tsx      — HTML shell: page title, meta description, font imports, global styles
    index.tsx       — Entire wedding invitation (single self-contained component)
  styles.css        — Minimal global reset + Tailwind import
  router.tsx        — TanStack router instantiation
public/
  invitation.jpg    — Original invitation scan
  favicon.ico
```

## Key Design Decisions

- **All styles are inline** (`<style>` block inside `index.tsx`) using CSS custom properties — keeps everything in one file and allows full control of the Mughal aesthetic without Tailwind class sprawl.
- **No external UI library** — All SVG icons and decorations are inline to avoid bundle weight.
- **Countdown** uses `useEffect` + `setInterval` (1s tick, clears on unmount), targeting `2026-08-16T11:00:00+05:30`.
- **Calendar integration**: Google Calendar via URL params; Apple/Outlook via Blob-generated `.ics` downloaded client-side.
- **Map**: Google Maps embed iframe; directions link uses `maps/dir` endpoint.
- **Scroll reveals**: `IntersectionObserver` on `.rev` elements; adds `.vis` class on enter.
- **Font strategy**: Cinzel Decorative (headings), Cormorant Garamond (body), Amiri (Arabic), Great Vibes (couple names script).

## Color Palette (CSS Variables)

```
--burg: #4A0E1A       deep burgundy — primary brand color
--burg-dk: #280810    darker burgundy — dark section backgrounds
--gold: #C9A84C       antique gold — borders, accents, icons
--gold-lt: #E4C87A    light gold — text on dark backgrounds
--gold-pl: #F5E6B5    pale gold — subtle secondary text
--ivory: #FAF3E8      warm ivory — main light background
--cream: #FFF9F0      warmer cream — alternate section backgrounds
```

## Event Details (hardcoded in index.tsx)

- **Date**: Sunday, 16 August 2026, 11:00 AM – 3:00 PM IST
- **Islamic date**: 3 Rabi' al-Awwal 1448 AH
- **Venue**: Everest Convention Centre, Karikkad, Thrissur, Kerala
- **Groom**: Jithin Abdulsalam — son of Mr. Abdulsalam & Mrs. Salma, Thayyullyill House, Akkikavu, Thrissur (Ph: 9745559994 / 9539270658)
- **Bride**: Safna Latheef — daughter of Mr. Latheef K. & Mrs. Arifa Kammukutty, Kottekatil House, Nammarapadam, Nemmara, Palakkad District

## Coding Conventions

- Functional React components, TypeScript strict mode
- CSS custom properties for all colors and spacing tokens
- All SVG decorations inline (no sprite sheets)
- No third-party animation libraries — CSS keyframes + IntersectionObserver only
- `@/` path alias maps to `src/`
