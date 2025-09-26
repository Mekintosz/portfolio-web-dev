### Frontend projects portfolio

**Stack technologiczny:**

- **Build tool:** Vite 7.1.3
- **Styling:** SCSS z modularną organizacją
- **JavaScript:** ES6+ modules
- **Deployment:** GitHub Pages via GitHub Actions

**Struktura katalogów:**

```
src/
├── assets/         # Obrazy i ikony
├── js/             # Logika JavaScript (3 moduły)
├── scss/           # Style SCSS z architekturą 7-1
└── index.js        # Entry point
```

```
scss/
├── abstracts/    # Variables, mixins, functions
├── base/         # Reset, typography, base styles
├── components/   # Reusable UI components
├── layout/       # Header, footer, sections
├── pages/        # Page-specific styles
└── main.scss     # Import file
```

**Funkcjonalności:**

1. **Nawigacja mobilna** (`main.js`) - hamburger menu z smooth scroll
2. **Theme toggle** (`theme-togle.js`) - przełączanie dark/light mode
3. **Download CV** (`downloadCV.js`) - otwieranie PDF w nowej karcie

**Zastosowano:**

- **Semantyczna struktura HTML5** (`<header>`, `<main>`, `<section>`, `<footer>`)
- **Dostępność** `aria-expanded` na menu toggle
- **Responsywność** meta viewport
- **SEO** odpowiednie tytuły i meta tagi
- **Doskonała organizacja** - 7-1 pattern
- **Mixins dla responsywności** - `type-media`, `width-media`
- **Theme system** - `theme-prop` mixin
- **Consistent naming** - BEM-like methodology
- **Modular imports** - `@use` z namespace
- **Doskonała organizacja** - 7-1 pattern
- **Mixins dla responsywności** - `type-media`, `width-media`
- **Theme system** - `theme-prop` mixin
- **Consistent naming** - BEM-like methodology
- **Modular imports** - `@use` z namespace

**Ulepszenia kodu:**

1. **Dodaj error handling** w JavaScript
2. **Przenieś breakpoints** do variables w SCSS
3. **Dodaj CSS custom properties** dla theme system
4. **Zaimplementuj proper cleanup** dla event listeners

**Długoterminowe:**

5. **Dodaj TypeScript** dla lepszego type safety
6. **Zaimplementuj testing** (Jest/Vitest)
7. **Dodaj performance monitoring**
8. **Zoptymalizuj obrazy** (WebP, lazy loading)

**Ważne do poprawy**

- **Brak error handling** dla missing elements
- **Memory leaks:** event listeners nie są zawsze czyszczone
