# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
pnpm dev          # Start Next.js dev server
pnpm build        # Build (sources get-sc-creds.sh for Sanity credentials first)
pnpm lint         # Run ESLint
pnpm codegen      # Regenerate Sanity TypeScript types via sanity-codegen
```

No test suite is present in this project.

## Architecture Overview

This is a **Next.js + Sanity CMS** personal portfolio site. The two systems live in the same repo:

- **`src/app/(main)/`** — the public-facing Next.js app
- **`src/app/(sanity)/studio/`** — the embedded Sanity Studio at `/studio`
- **`schemas/`** — Sanity schema definitions (source of truth for content types)
- **`src/sanity/`** — Sanity client, GROQ queries, desk configuration, and custom actions

### Content model

All CMS types are defined in `schemas/` and their TypeScript types are auto-generated into `src/sanity/schema.ts` (via `pnpm codegen`). The three core document types are:

- **`site_page`** — dynamic pages assembled from a `pageBuilder` array of block types (`pe_copy`, `pe_columns`, `pe_spacer`). Pages are addressed by a `path` slug (e.g. `.about`).
- **`software`** — portfolio entries for software projects, optionally linked to a `site_page`.
- **`site_settings`** — singleton for global site metadata, social links, and resume file.

### Page rendering

`src/app/(main)/[pageSlug]/page.tsx` handles all dynamic sub-pages. It fetches a `site_page` by path, then renders it through `PageBuilder` (`src/components/PageBuilder/index.tsx`), which maps `_type` strings to React components. Static params are generated at build time from all known page slugs.

### Revalidation / caching

Pages are cached with Next.js tag-based revalidation. A Sanity webhook POSTs to `/api/revalidate` when `last_revalidated` changes on a document. The webhook signature is verified against `SANITY_WEBHOOK_SECRET`. The delay is intentional: the `augmentPublish` action patches `last_revalidated` ~1 second after publish so Sanity's CDN has time to propagate the new content before Next.js re-fetches.

### Preview mode

Draft content preview uses Next.js Draft Mode. `/api/preview` enables it and `/api/exit-preview` disables it. When active, `getPreview()` returns the token, and pages render a `<PreviewProvider>` wrapping a live-query component instead of the static `PageBuilder`.

### Environment variables

Declared and exported from `src/env.ts`. Required vars:
- `NEXT_PUBLIC_SANITY_PROJECT_ID`, `NEXT_PUBLIC_SANITY_DATASET`, `NEXT_PUBLIC_SANITY_API_VERSION`
- `SANITY_WEBHOOK_SECRET`, `SANITY_API_READ_TOKEN`
- `NEXT_PUBLIC_SITE_URL` (falls back to `VERCEL_URL` then `localhost:3000`)
- `NEXT_PUBLIC_GA4_TAG` (optional, Google Analytics)

### Styles

SCSS Modules per component, plus global styles in `src/styles/`. Design tokens (colors, type scale, z-index, breakpoints) live in `src/styles/settings/`. Import utilities and globals via `src/styles/_globals.scss`.
