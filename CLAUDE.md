# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a React + TypeScript application for PT Bejo Berkat Makmur, built with Vite and using the shadcn/ui component library. The project is managed through the Lovable.dev platform and syncs bidirectionally with git.

## Development Commands

```bash
npm run dev              # Start development server on port 8080
npm run build            # Production build
npm run build:dev        # Development build
npm run lint             # Run ESLint
npm run preview          # Preview production build
npm run generate-favicon # Regenerate favicon assets
npm run convert-to-webp  # Convert portfolio images to WebP format
```

## Architecture

### Tech Stack
- **Build Tool**: Vite with React SWC plugin
- **Framework**: React 18 with TypeScript
- **Routing**: React Router v6
- **State Management**: React Query (TanStack Query)
- **UI Components**: shadcn/ui (Radix UI + Tailwind CSS)
- **Styling**: Tailwind CSS with custom company color scheme
- **Animations**: Framer Motion
- **SEO**: React Helmet Async for meta tags

### Application Structure
The application follows a multi-page architecture with client-side routing:
- Entry point: `src/main.tsx` → `src/App.tsx`
- Pages: `src/pages/` (Index, About, Services, Portfolio, Contact, NotFound)
- Components: `src/pages/Index.tsx` composes multiple sections (Hero, About, Services, etc.)
- All routes must be added above the catch-all `*` route in [App.tsx:30](src/App.tsx#L30)

### Directory Layout
- `src/components/` - Reusable UI components and page sections
- `src/pages/` - Top-level route components
- `src/hooks/` - Custom React hooks
- `src/lib/` - Shared utilities
- `src/assets/` - Static assets and global styles
- `public/` - Files served directly at root
- `scripts/` - Build automation (favicon, image conversion)

### Configuration
- Path alias: `@/` maps to `src/` (configured in [vite.config.ts:52-54](vite.config.ts#L52-L54) and [tsconfig.json:9-11](tsconfig.json#L9-L11))
- TypeScript: Relaxed strictness (noImplicitAny: false, strictNullChecks: false)
- Development proxy: `/api/inaproc` and `/api/images` proxy to katalog.inaproc.id

### Design System
Custom company color palette in [tailwind.config.ts:66-75](tailwind.config.ts#L66-L75):
- Primary: `#352b85` (company-primary, deep indigo)
- Secondary: `#88b835` (company-secondary, vibrant green)
- Accent: `#a8cf4b` (company-accent, bright lime)
- Additional: company-dark, company-neutral, company-gray, company-softblue

Design preferences:
- Flat color blocks over gradients
- Restrained corner radii (avoid pill-shaped buttons)
- Typography: Poppins and Inter fonts
- Use company.* colors for brand elements

## Important Constraints

- No testing framework configured
- Changes sync bidirectionally with Lovable.dev
- Server runs on port 8080 (not default 5173)
- Add routes above catch-all in App.tsx to avoid 404s
- Review [AGENTS.md](AGENTS.md) for coding standards and PR expectations
