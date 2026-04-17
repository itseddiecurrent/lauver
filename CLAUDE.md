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

Create a `.env` file at the project root with:

```
VITE_SUPABASE_URL=
VITE_SUPABASE_PUBLISHABLE_KEY=
```

## Architecture

This is a **vanilla JS + Vite** multi-page application (MPA). No framework (no React/Vue).

**Pages** (each is a separate Vite entry point in `vite.config.js`):
- `index.html` — public marketing/landing page
- `login.html` — sign in / sign up (Supabase Auth)
- `dashboard.html` — post-login profile summary (auth-gated)
- `app.html` — main app shell with sidebar navigation (activities, sync, community, match, profile sections rendered within the same page via section toggling)

**Source modules** (`src/`):
- `supabase.js` — initializes Supabase client and exports `supabase`
- `login.js` — handles email/password + Google OAuth sign-in, tab switching between signin/signup modes
- `dashboard.js` — auth guard, renders user info, handles sign-out
- `i18n.js` — EN ↔ ZH translation system; reads `data-i18n`, `data-i18n-ph`, and `data-i18n-html` attributes on DOM elements; language preference stored in `localStorage`

**`app.html` navigation:**
- All six sections (dashboard, activities, sync, community, match, profile) live in the same HTML file as `.page` divs
- Navigation is handled by an inline (non-module) `<script>` at the bottom: `navigate(page)` toggles `.active` on `.page#page-{name}` and `.nav-item[data-page="{name}"]`
- i18n is initialized via `<script type="module">` that imports and calls `initI18n()` from `src/i18n.js`
- The inline script and the module script coexist at the bottom of `app.html`

**Auth flow:**
- `login.js` redirects authenticated users → `dashboard.html`
- `dashboard.js` redirects unauthenticated users → `login.html`
- Auth state is checked via `supabase.auth.getSession()` on page load (not `onAuthStateChange`)
- Google OAuth uses `signInWithOAuth` with a `redirectTo` URL pointing to `dashboard.html`

**i18n pattern:**
- All user-visible strings are keys in the `T` dictionary in `src/i18n.js`
- HTML elements use `data-i18n="key"` for text content, `data-i18n-ph="key"` for placeholder, `data-i18n-html="key"` for innerHTML
- Call `initI18n()` in each page's `<script type="module">` to activate translations
- To add/edit copy, update both `en` and `zh` sections of `T` in `src/i18n.js`
- Complex HTML blocks (e.g. comparison tables) use `data-table="key"` on a `<tbody>` — the full HTML is stored in `TABLE_BODIES` in `i18n.js` and swapped wholesale on language toggle; this bypasses per-cell `data-i18n` attributes
- Chinese mode adds the `lang-zh` class to `<html>`, lazy-loads Noto Sans SC from Google Fonts, and injects a `<style>` block that overrides font-family across the tree

**CSS:** All styles are inline `<style>` blocks within each HTML file using CSS custom properties (`--bg`, `--orange`, `--text`, etc.) defined in `:root`. No external CSS files or preprocessors.

**Design tokens** (shared across pages):
- Primary brand color: `--orange: oklch(63% 0.22 43)`
- Accent: `--yellow: oklch(80% 0.19 80)`
- Fonts: `Plus Jakarta Sans` (body), `Barlow Condensed` (headings), `Noto Sans SC` (Chinese)

**Deployment:** Vite is configured with `base: '/'` for GitHub Pages with a custom domain. All internal links must be relative (not root-relative `/`) to work in both dev and production.
