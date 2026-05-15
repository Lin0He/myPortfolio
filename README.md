# Museum Portfolio Modular

A Vite + React + TypeScript + Tailwind portfolio prototype with a museum/archive visual system.

## Run locally

```bash
npm install
npm run dev
```

## Validate

```bash
npm run test
npm run build
```

## Structure

```text
src/
  app/                App shell and slide navigation state
  components/
    layout/           Shared layout/navigation/backdrop components
    notes/            Note/article reading components
    project/          Project case-study evidence components
    stamp/            Home stamp/postmark components
    ui/               Shared small UI components
  data/               Portfolio content and page theme data
  lib/                Pure helpers/constants
  sections/           Page and template sections
  test/               Vitest smoke tests
  types/              Shared TypeScript types
public/
  demo/               Example images used by the Project Detail template
```

## Templates included

- `ProjectDetailDemo.tsx`: base template for project case studies with image slots, metrics, tables, technical prose, and code fragments.
- `NoteDetailDemo.tsx`: base template for long-form academic notes with a left metadata/TOC column and a focused reading column.

Use the two demo pages as base templates, then move real project/note content into `data/` as the site grows.

## Resume PDF

The resume file is stored at:

```text
public/resume/Lin-He-Resume.pdf
```

`ResumePanel.tsx` uses `import.meta.env.BASE_URL` through `getResumeUrl()` so the link works both locally and on GitHub Pages subpaths.
