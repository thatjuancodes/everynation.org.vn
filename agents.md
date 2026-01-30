# Agents Guide: Astro + Tailwind + shadcn/ui + React Islands + pnpm

This document defines the standards, conventions, and principles for any coding agent tasked with building and maintaining a static marketing website using the following stack:

- **Astro** (Static-first with Islands Architecture)
- **Tailwind CSS** (Utility-first styling)
- **shadcn/ui** (React components rendered via Astro Islands)
- **Lucide Icons**
- **pnpm** (Package manager)

The goal is to enforce **clarity, maintainability, consistency, testability, and future extensibility**.

---

## 🚀 Project Goals
- Highly performant **static** marketing site
- SEO-first architecture
- Modern, minimalist UI using **Tailwind + shadcn/ui**
- Maximum **reusability** using components + partials
- Easy future migration to backend / headless CMS
- Strict conventions to ensure agents can work interchangeably

---

# 1. Project Structure Standards

```
/
├── src/
│   ├── components/           # Shared UI components (Astro + React)
│   │   ├── ui/               # shadcn/ui React component wrappers
│   │   ├── layout/           # Layouts, navbars, footers
│   │   └── sections/         # Hero, features, pricing, CTA blocks
│   ├── pages/                # Astro pages (*.astro)
│   ├── content/              # Markdown, MDX, and content collections
│   ├── lib/                  # Utility functions (pure)
│   ├── styles/               # Global CSS, Tailwind config layers
│   └── hooks/                # Frontend hooks (React islands only)
├── public/                   # Static assets
├── astro.config.mjs
├── tailwind.config.mjs
├── tsconfig.json
└── package.json
```

### Rules
- **Never duplicate UI code.** Every repeating UI block must live in `/components/sections/`.
- All pages must use a **layout component**, stored in `/components/layout/`.
- All React island components must be isolated in `/components/ui/`.
- Use **content collections** for structured content (e.g., features, testimonials).

---

# 2. Coding Standards

## 2.1 Astro Standards

- Pages must be clean, using **frontmatter** for metadata.
- No business logic inside `.astro` templates.
- Use islands only when necessary (forms, interactivity).

### Example
```astro
---
import Layout from "../components/layout/Layout.astro";
import Hero from "../components/sections/Hero.astro";
---

<Layout title="Home">
  <Hero />
</Layout>
```

---

## 2.2 Tailwind CSS Standards

- Use Tailwind classes for layout, spacing, typography.
- Extract repeated patterns using **Tailwind @apply** or components.
- For global styles, use `/src/styles/global.css` with Tailwind layers.

### Naming Conventions
- Use **mobile-first** classes (`p-4`, `text-lg`, `sm:text-xl`).
- Never use arbitrary values unless necessary.

---

## 2.3 shadcn/ui Standards

- All shadcn components must be wrapped in **React components** under `/components/ui/`.
- Components must be **stateless** and reusable.
- Styling overrides must use Tailwind.

### React Island Rule
Use React islands **only** when there is interactivity:
- forms
- toggles
- accordions
- sliders

Never embed full pages as React.

---

## 2.4 Lucide Icons
- Import icons only where needed.
- Prefer using Lucide via the React package for islands.
- Use a shared helper if icons repeat.

---

# 3. Package Management (pnpm)

## Rules
- Always use **pnpm**: `pnpm install`, `pnpm add`, etc.
- Never modify `package-lock.json` (delete if generated).
- Use workspace features if project expands.

---

# 4. DRY Principles

### Always refactor when:
- A UI element appears **more than once**.
- A layout pattern repeats (extract to layout component).
- A logic pattern repeats (move to `/lib/`).

### Avoid:
- Inline repeated styling → extract using classes
- Hardcoded text → use content collections or constants
- Long `.astro` files → break into components

---

# 5. SEO, Accessibility & Performance

## 5.1 HTML Semantic Structure
- Always use semantic tags (`header`, `main`, `section`, `footer`).
- Head metadata must be set via the layout component.

## 5.2 SEO Rules
- Every page must define:
  - title
  - meta description
  - canonical URL
  - open graph tags
- Images must use Astro's `<Image />` component when possible.

## 5.3 Accessibility
- All images must have `alt` text.
- Interactive elements must have accessible labels.
- Colors must pass WCAG contrast.

---

# 6. Testing Standards

## 6.1 Unit Testing (Preferred)
- Test pure functions in `/lib` using Vitest.
- Test interactive React components using @testing-library/react.

## 6.2 Visual/Manual Testing
- Test all breakpoints: mobile, tablet, desktop.
- Test in dark mode if supported.

---

# 7. Build & Deployment Standards

- Default build command: `pnpm build`
- All CI should run: `pnpm install --frozen-lockfile`
- Deployment platforms: **Netlify or Vercel**
- Build must always produce a fully static site unless otherwise required.

---

# 8. Content Standards

## 8.1 Content Collections
- Use content collections for structured text or repeated content.
- Example: `features`, `blog`, `testimonials`.

## 8.2 Markdown/MDX
- Use MDX for sections requiring inline React components.

---

# 9. Agent Rules (Very Important)

### Agents must:
- Follow this guide strictly.
- Never introduce unnecessary dependencies.
- Always create a reusable component if copy-pasting HTML.
- Use Astro for structure, React only for interactivity.
- Keep all styling in Tailwind classes—no custom CSS unless essential.
- Prefer clarity over cleverness.
- Comment code only when logic is nontrivial.
- Validate HTML semantics.

### Agents must NOT:
- Build full pages in React.
- Use inline styles unless absolutely required.
- Use external UI frameworks outside of shadcn.
- Duplicate code.
- Write untyped or ambiguous logic.

---

# 10. Future Extensibility Guidelines

Design the project so it can easily adopt:
- A headless CMS (Sanity, Contentful, Payload)
- API integrations via Astro API routes
- Serverless functions (Netlify/Vercel)

All content must be structured cleanly for this transition.

---

# 11. Summary Checklist

### ✔ Architecture
- Astro + React islands only where needed
- Tailwind + shadcn/ui
- DRY components in `/components/`
- Content collections for repeatable content

### ✔ Quality
- Semantic HTML
- Accessible components
- Consistent Tailwind structure
- Extract repeated code

### ✔ Performance
- Lazy load islands
- Use Astro Image
- Minimize JS

---

**This document defines the canonical rules and conventions every agent must follow when contributing to this project.**
