# Walid Kaddouri Portfolio

Production-ready engineering portfolio for ML/AI/Data roles, built with Next.js App Router, TypeScript, Tailwind, shadcn/ui, and MDX.

## Stack

- Next.js (App Router)
- TypeScript (strict)
- Tailwind CSS (v4)
- shadcn/ui primitives
- MDX case-study content (`content/projects/*.mdx`)
- Vitest (basic smoke/unit tests)

## Key Product Features

- Monochrome, docs-style UI with sticky left sidebar and recruiter-friendly structure.
- `/overview`, `/projects`, `/projects/[slug]`, `/experience`, `/resume`, `/contact`, custom `404`.
- Command palette (`Ctrl+K` / `Cmd+K`) with route/project navigation and recruiter actions.
- Keyboard shortcuts:
  - `g p` -> projects
  - `g o` -> overview
  - `g r` -> resume
  - `/` -> focus project search on `/projects`
- Recruiter mode toggle (`Recruiter Summary` vs `Detailed View`) with localStorage persistence.
- Project case studies include project-specific system visuals, key decisions/tradeoffs, and evidence panels.
- Contact page uses direct email and profile links instead of a web form.
- SEO setup: metadata per page, OpenGraph/Twitter metadata, sitemap, robots.
- CI: install -> lint -> typecheck -> test -> build.

## Folder Highlights

- `app/` routes and metadata
- `components/` reusable UI + feature components
- `content/projects/index.ts` typed project model
- `content/projects/*.mdx` project case-study content
- `lib/` shared utilities, config, MDX loader, recruiter mode context, changelog, and experience data
- `tests/` Vitest coverage for project-model logic
- `.github/workflows/ci.yml` CI pipeline

## Run Locally

1. Install Node LTS (recommended: current `lts/*` used in CI).
2. Install deps:

```bash
npm install
```

3. Start dev server:

```bash
npm run dev
```

4. Quality checks:

```bash
npm run lint
npm run typecheck
npm run test
npm run build
```

## Deployment

Optimized for Vercel deployment out of the box.

### GitHub

Use the repository slug `walids-portfolio` for a clean public URL and predictable Vercel project naming.

### Vercel

1. Import the GitHub repository into Vercel.
2. Keep the detected framework preset as `Next.js`.
3. No environment variables are required for the current version of this site.
4. Deploy directly from the default branch for automatic production releases on every push.

## Data Layer Note

`OptimaTime AI` is documented as using **SQLite with Alembic migrations**, matching the case-study content and architecture visuals in this repo.

## Resume File

`public/walid-kaddouri-cv.pdf` is included as a placeholder so download/preview flows work. Replace it with your final CV before publishing.
