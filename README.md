# DaltySite

Personal site — portfolio, music, and 3D art. Vite + React + TypeScript + Tailwind, MDX-authored content, deployed on Vercel.

## Run

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
npm run preview
```

## Add content

All content lives in `/content` as MDX with frontmatter. Schemas are enforced by `zod` in `src/content/schema.ts` — bad frontmatter fails the build.

- **Resume** → edit `src/content/resume.ts` (typed data, not MDX). Drop a `resume.pdf` into `public/` for the Download button.
- **Projects** → `content/projects/<slug>.mdx` (loader + `/portfolio/:slug` route still wired; listing hidden until you populate Home's featured block)
- **Creative pieces** → `content/pieces/<slug>.mdx` — each declares a `kind`:
  - `audio` (drop audio into `public/audio/`)
  - `video` (local mp4 in `public/video/`, or a YouTube / Vimeo URL)
  - `photo` (image-based — drop files into `public/art/`)
  - All kinds support an optional `href` for an external link.

## Deploy

Push to a repo connected to Vercel. `vercel.json` has the SPA rewrite for client-side routing. No build-command override needed; Vercel picks up `npm run build` from `package.json`.

## Structure

```
src/
  routes/       # one file per page
  components/   # layout, ui, audio, gallery
  content/      # loader + zod schemas
  lib/          # utils
  styles/       # tailwind entry + design tokens
content/        # mdx source
public/         # static assets (audio, art, resume)
```
