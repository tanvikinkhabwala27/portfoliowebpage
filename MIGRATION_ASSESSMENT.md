# Migration assessment

## Current architecture

- **Frontend:** Next.js App Router with React and TypeScript
- **Current build wrapper:** Vinext + Vite + Cloudflare tooling
- **Package manager:** npm (`package-lock.json`)
- **Routes:** `/` and `/analytics-lab`
- **Styling:** repository-local global CSS using system fonts (Georgia and Arial)
- **Assets:** repository-local logo, favicon, and Open Graph image in `public/`
- **Analytics Lab:** client-side React state and deterministic TypeScript analysis
- **Uploads:** CSV files are read with the browser `File.text()` API, held in page memory, and never uploaded or persisted
- **Server/API/storage:** none
- **Secrets/environment variables:** none required by the application

## Dependency classification

### 1. Already portable

- All homepage and Analytics Lab source code
- App Router pages and metadata
- CSS, images, icons, and sample datasets
- CSV parsing, profiling, relationship detection, readiness scoring, opportunity scanning, and recovery/cleaning logic
- Browser-local upload and session behavior
- npm manifest and lockfile

### 2. Needs configuration

- Canonical URL, robots, sitemap, and structured metadata
- GitHub-origin repository setup
- Git-connected production hosting
- Apex and `www` domain configuration

### 3. ChatGPT-specific and must be replaced

- `@openai/sites-vite-plugin`
- `.openai/hosting.json`
- Sites-bound Git remote
- Vinext/Vite/Cloudflare preview build configuration used for Sites deployment
- Sites-specific package identity and build scripts

### 4. External service intentionally retained

- LinkedIn outbound profile link
- Email `mailto:` links
- npm registry packages used to install and build the application

## Migration decision

The application has no server requirement. The smallest portable architecture is a standard Next.js static export. This preserves the existing UI and browser-local Analytics Lab while producing an `out/` directory that can be deployed from GitHub by a conventional hosting provider without ChatGPT Sites.
