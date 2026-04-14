# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev      # Start dev server at http://localhost:5179
npm run build    # Build to dist/
npm run preview  # Preview production build
```

No test runner is configured.

## Environment Setup

Firebase config is loaded from environment variables. Create a `.env` file at the project root with:

```
VITE_FIREBASE_API_KEY=
VITE_FIREBASE_AUTH_DOMAIN=
VITE_FIREBASE_PROJECT_ID=
VITE_FIREBASE_STORAGE_BUCKET=
VITE_FIREBASE_MESSAGING_SENDER_ID=
VITE_FIREBASE_APP_ID=
```

## Architecture

This is a **vanilla JS + Vite** multi-page application (MPA). No framework (no React/Vue).

**Pages** (each is a separate Vite entry point):
- `index.html` — public marketing/landing page
- `login.html` — sign in / sign up (Firebase Auth)
- `dashboard.html` — post-login profile summary (auth-gated)
- `app.html` — main app shell with sidebar navigation (activities, sync, community, match, profile sections rendered within the same page via section toggling)

**Source modules** (`src/`):
- `firebase.js` — initializes Firebase app and exports `auth`
- `login.js` — handles email/password + Google OAuth sign-in, tab switching between signin/signup modes
- `dashboard.js` — auth guard, renders user info, handles sign-out
- `i18n.js` — EN ↔ ZH translation system; reads `data-i18n`, `data-i18n-ph`, and `data-i18n-html` attributes on DOM elements; language preference stored in `localStorage`

**Auth flow:**
- `login.js` redirects authenticated users → `/dashboard.html`
- `dashboard.js` redirects unauthenticated users → `/login.html`
- Firebase Admin SDK credentials file (`lauver-ai-firebase-adminsdk-*.json`) is in the repo root — do not commit changes to it or expose it

**i18n pattern:**
- All user-visible strings are keys in the `T` dictionary in `src/i18n.js`
- HTML elements use `data-i18n="key"` for text content, `data-i18n-ph="key"` for placeholder, `data-i18n-html="key"` for innerHTML
- Call `initI18n()` in each page's inline module script to activate translations
- To add/edit copy, update both `en` and `zh` sections of `T` in `src/i18n.js`

**CSS:** All styles are inline `<style>` blocks within each HTML file using CSS custom properties (`--bg`, `--orange`, `--text`, etc.) defined in `:root`. No external CSS files or preprocessors.

**Design tokens** (shared across pages):
- Primary brand color: `--orange: oklch(63% 0.22 43)`
- Accent: `--yellow: oklch(80% 0.19 80)`
- Fonts: `Plus Jakarta Sans` (body), `Barlow Condensed` (headings), `Noto Sans SC` (Chinese)
