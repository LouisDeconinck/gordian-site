# Gordian website

The Gordian website is built with Vite, React, TypeScript, Tailwind CSS, shadcn, and ReUI.

## Local development

```sh
npm install
npm run dev
```

The local site is served at `http://localhost:5173`.

## ReUI

Premium ReUI registry installs require an Ultimate license key in `.env.local`:

```sh
REUI_LICENSE_KEY=your-license-key
```

The file is ignored by Git and must never be committed.

## Quality checks

```sh
npm run build
npm run lint
```

The production build is written to `dist/`. The post-build step also copies the custom domain, crawler files, security policy, and legacy stylesheet into the deployable output. Vite builds the homepage, research case study, and governance dossier as separate entry points so every canonical URL works on a static host.

## Deploy

Push to `main`. The `Deploy website` GitHub Actions workflow builds `dist/`, uploads it as a Pages artifact, and deploys it. Keep the Pages source set to **GitHub Actions**, the custom domain set to `gordian.be`, and HTTPS enforcement enabled.

Before publishing, confirm that `security@gordian.be` exists and can receive mail.
