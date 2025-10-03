# Repository Guidelines

## Project Structure & Module Organization
The Vite + React application boots from `src/main.tsx`, with root routing and layouts defined in `src/App.tsx`. Reusable UI lives in `src/components/`, page-level screens in `src/pages/`, shared hooks in `src/hooks/`, and cross-cutting utilities in `src/lib/`. Tailwind styling is configured via `tailwind.config.ts`, while global styles and tokens sit in `src/index.css` and `src/assets/`. Static files under `public/` are served directly; automation scripts for imagery and data imports reside in `scripts/`.

## Build, Test, and Development Commands
- `npm install` – restore dependencies.
- `npm run dev` – launch the Vite dev server with hot reload.
- `npm run build` – produce the optimized bundle in `dist/`.
- `npm run preview` – serve the built bundle locally for smoke checks.
- `npm run lint` – run ESLint using `eslint.config.js` rules.
- `npm run generate-favicon`, `npm run update-images` – refresh assets in `public/ecommerce/` after content changes.

## Coding Style & Naming Conventions
Use TypeScript functional components and keep files named in PascalCase (example: `components/HeroSection.tsx`). Hooks should follow the `useThing` camelCase pattern and live in `src/hooks/`. Favor Tailwind utility classes; isolate complex overrides in component-level CSS when unavoidable. Maintain two-space indentation, prefer single quotes, and keep JSX concise. Always run `npm run lint` before pushing to catch unused imports, type drift, and accessibility issues.

## Testing Guidelines
No automated test runner is configured yet. When adding features, include manual verification notes in the PR and cover critical paths (navigation, forms, external requests). If you introduce automated tests, align with Vite by placing Vitest or Testing Library specs under `src/__tests__/` named `ComponentName.test.tsx`, mocking network calls and focusing on observable behavior.

## Commit & Pull Request Guidelines
Commit messages follow concise imperative statements (see `git log --oneline`). Keep each commit focused and bundle any generated assets or lint fixes it requires. For pull requests, provide a clear summary, linked issue or task ID, manual test evidence, and before/after UI screenshots when visual changes occur. Ensure `npm run build` and `npm run lint` succeed locally, and rebase onto the latest `main` before requesting review.
