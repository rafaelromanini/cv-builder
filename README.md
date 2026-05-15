# CV Builder

A modern, drag-and-drop CV/resume builder that runs entirely in the browser. Pick a template, drag sections around, edit inline, and export to PDF or JSON — no signup, no backend, no tracking. Your CV is persisted locally in `localStorage`.

![Stack](https://img.shields.io/badge/React-19-61DAFB?logo=react&logoColor=white)
![Stack](https://img.shields.io/badge/TypeScript-5-3178C6?logo=typescript&logoColor=white)
![Stack](https://img.shields.io/badge/Vite-8-646CFF?logo=vite&logoColor=white)
![Stack](https://img.shields.io/badge/Tailwind-4-06B6D4?logo=tailwindcss&logoColor=white)

## Features

- **Three templates** — Minimal, Classic and Sidebar layouts, switchable on the fly.
- **Drag-and-drop everywhere** — reorder sections and items inside them via `@dnd-kit`.
- **Live preview** — three view modes: edit only, split (side-by-side) and preview only.
- **Custom sections** — beyond the built-in section types (experience, education, skills, languages, awards, projects) you can add free-form custom sections.
- **Auto-save** — every change is mirrored to `localStorage`. Refresh and it's still there.
- **JSON export** — back up your CV or migrate it between browsers.
- **PDF export** — opens the browser's print dialog with print-only styles applied (`@page A4`).
- **Bilingual UI** — entire interface available in Portuguese and English. Defaults to the user's browser locale and the choice is persisted.

## Tech Stack

- React 19 + TypeScript
- Vite 8 (dev server and build)
- Tailwind CSS 4
- `@dnd-kit` (drag-and-drop)
- `lucide-react` (icons)

No backend, no database, no third-party API calls.

## Getting Started

```bash
# install dependencies
npm install

# run the dev server (Vite)
npm run dev

# type-check and produce a production build
npm run build

# preview the production build locally
npm run preview

# lint
npm run lint
```

Then open the URL printed by Vite (usually `http://localhost:5173`).

## Project Structure

```
src/
├── App.tsx                 # Thin orchestrator: state + composition
├── main.tsx                # Entry point, wraps App with the LanguageProvider
├── index.css               # Tailwind entry
├── components/
│   ├── LanguageSwitcher.tsx
│   ├── layout/
│   │   └── TopBar.tsx
│   ├── editor/
│   │   ├── PersonalInfoForm.tsx
│   │   ├── SectionsEditor.tsx
│   │   ├── SortableSection.tsx
│   │   ├── SortableItem.tsx
│   │   └── ItemEditor.tsx
│   └── preview/
│       ├── CVPreview.tsx
│       ├── PreviewMinimal.tsx
│       ├── PreviewClassic.tsx
│       ├── PreviewSidebar.tsx
│       ├── SectionRenderer.tsx
│       └── ItemPreview.tsx
├── constants/
│   └── sections.ts         # Section-type → icon map and add-menu order
├── data/
│   └── initialData.ts      # Default/demo CV + localStorage keys
├── hooks/
│   └── usePersistentState.ts
├── i18n/
│   ├── translations.ts     # PT and EN strings
│   ├── LanguageContext.tsx
│   └── useTranslation.ts
├── types/
│   └── cv.ts               # Domain types (CVData, Section, Personal, ...)
└── utils/
    ├── itemFactory.ts      # Empty item factory per section type
    └── fileHelpers.ts      # JSON export helper
```

## Exporting to PDF

The "Export PDF" button triggers the browser's print dialog. The application includes print-only CSS that:

- Hides every UI element except the CV preview.
- Sets the page size to A4 with no margins.
- Pins the preview to the top-left of the printable area.

Choose "Save as PDF" in the print dialog destination to get a high-quality PDF.

## Author

**Rafael Romanini** — Fullstack Developer

- LinkedIn: [linkedin.com/in/rafaelromanini](https://linkedin.com/in/rafaelromanini)
- GitHub: [github.com/rafaelromanini](https://github.com/rafaelromanini)

## License

MIT — feel free to fork, customise and use this for your own CV.
