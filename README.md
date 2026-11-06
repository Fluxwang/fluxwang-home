# fluxwang.com

Personal homepage — Vite + React + TypeScript, static output.

## Develop

```bash
pnpm install
pnpm dev
```

## Content

- Text, projects and links: `src/content.ts`
- Switches (job-seeking banner, accent `amber | green | blue`, default language): `config` in `src/content.ts`
- Avatar: `public/avatar.jpg` (a placeholder shows if it's missing)
- Resume: `public/resume.pdf`

## Deploy (Cloudflare Pages)

Connect the GitHub repo in Cloudflare Pages with:

- Framework preset: Vite (or None)
- Build command: `pnpm build`
- Build output directory: `dist`
- Root directory: the folder that holds this README, if it isn't the repo root
