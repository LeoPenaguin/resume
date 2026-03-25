# Resume

Personal resume built with Vue 3, TypeScript, Vite, and Tailwind CSS v4.

## Stack

- Vue 3 with `<script setup>` and strict TypeScript
- Vite for local development and production builds
- Tailwind CSS v4 for styling
- ESLint with the official Vue + TypeScript flat config

## Commands

```sh
pnpm install
pnpm dev
pnpm lint
pnpm type-check
pnpm build
```

## Project Structure

- `src/data/resume.ts`: typed content source for profile, sections, and links
- `src/components/resume/`: resume-specific sections and entry rendering
- `src/components/ui/`: small reusable UI primitives
- `src/styles/index.css`: global theme, layout, print, and accessibility styles

## Quality Gates

- `pnpm lint` validates Vue and TypeScript files
- `pnpm type-check` runs `vue-tsc --noEmit`
- GitHub Actions runs lint, type-check, and production build before deploy

## Deployment

The site is deployed to GitHub Pages from the `main` branch. Pull requests run the quality checks and build, but deployment only happens outside PR events.
