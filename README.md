# Tanvi Kinkhabwala — Data Analytics Portfolio

## Overview

This repository contains Tanvi Kinkhabwala's professional data analytics portfolio. It presents selected work, experience, capabilities, and an interactive Analytics Lab. The application is a static Next.js site; all essential source, styling, logic, and media assets are stored in this repository.

## Analytics Lab

The Analytics Lab is a browser-local analytical journey:

- **Data Health** profiles uploaded CSV files for completeness, consistency, duplicates, and other quality signals.
- **Data Connections** tests plausible relationships between multiple uploaded datasets.
- **Analysis Readiness** identifies which analyses the available fields and relationships can reliably support.
- **Opportunity Scan** surfaces deterministic, evidence-backed patterns worth investigating.

Uploaded CSV files are read and analyzed in the browser. They are not uploaded, persisted, or sent to an API.

## Tech Stack

- Next.js 16.2 App Router
- React 19
- TypeScript
- Plain CSS
- npm
- Static site export

## Local Development

Requirements: Node.js 22.13 or newer and npm.

```bash
git clone <your-github-repository-url>
cd tanvi-portfolio
npm ci
npm run dev
```

Open `http://localhost:3000`.

## Production Build

```bash
npm ci
npm run build
```

The deployable static site is generated in `out/`.

## Environment Variables

No environment variables or secrets are currently required. `.env.example` is included as the safe template for any future integrations. Local `.env*` files remain ignored.

## Deployment

Production is designed to deploy from this GitHub repository through Vercel's Git integration:

- `main` is the production branch.
- Pull requests and non-production branches receive preview deployments.
- Successful pushes to `main` deploy to production.
- Preview URLs are not used as canonical URLs.

Vercel is recommended because it supports Next.js directly, connects to GitHub without repository-specific deployment code, provides preview deployments, and manages custom-domain TLS. The exported `out/` directory remains portable to other static hosting providers.

## Domain

Production: [tanvikinkhabwala.com](https://tanvikinkhabwala.com)

After importing the GitHub repository into Vercel, add both domains to the project:

- `tanvikinkhabwala.com` as the primary production domain
- `www.tanvikinkhabwala.com` redirected to `tanvikinkhabwala.com`

At the authoritative DNS provider, use the exact values Vercel displays for the project. Its current general-purpose records are:

| Host | Type | Value |
| --- | --- | --- |
| `@` | `A` | `76.76.21.21` |
| `www` | `CNAME` | `cname.vercel-dns-0.com` |

Remove the old Sites A/AAAA/CNAME records only after the Vercel deployment is verified and Vercel has accepted both domains. Preserve unrelated records such as MX, TXT, and email-verification records.

Deployed with Vercel.
