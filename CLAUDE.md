# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a React + TypeScript single-page application for PT Bejo Berkat Makmur, built with Vite and using the shadcn/ui component library. The project is managed through the Lovable.dev platform.

## Development Commands

```bash
npm run dev       # Start development server on port 8080
npm run build     # Production build
npm run build:dev # Development build
npm run lint      # Run ESLint
npm run preview   # Preview production build
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

### Project Structure
- Single-page application with all components rendered on the Index page
- Components are organized by feature (Hero, Services, Portfolio, etc.)
- Path aliases configured: `@/` maps to `src/`
- Custom company colors defined in `tailwind.config.ts` under `company` namespace

### Key Design System
- Primary color: `#352b85` (deep indigo)
- Secondary color: `#88b835` (vibrant green)
- Accent color: `#a8cf4b` (bright lime)
- Neutral base: `#ffffff`
- Font families: Poppins and Inter
- Layout styling favors flat color blocks, refined typography, and restrained corner radii (avoid gradients and pill-shaped buttons).

## Important Notes

- No testing framework is currently configured
- The project syncs with Lovable.dev - changes pushed to git will reflect in Lovable
- Development server runs on port 8080 (not the default Vite port)
- All routes should be added above the catch-all route in App.tsx
