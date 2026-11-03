<div align="center">

# rubenlagerwerf.nl

Personal website of Ruben Lagerwerf, Cybersecurity master's student at Eindhoven University of Technology and Digital Innovation Officer at Study Association GEWIS.

**[Visit rubenlagerwerf.nl →](https://rubenlagerwerf.nl)**

[![Deploy to GitHub Pages](https://github.com/RubenLWF/rubenlagerwerf.nl/actions/workflows/deploy.yml/badge.svg)](https://github.com/RubenLWF/rubenlagerwerf.nl/actions/workflows/deploy.yml)
![Astro](https://img.shields.io/badge/Astro-7-BC52EE?logo=astro&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4-06B6D4?logo=tailwindcss&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?logo=typescript&logoColor=white)

</div>

## Features

- **Live Spotify widget**: shows what I'm listening to, tinted with the colour of the album art.
- **Animated intro**: a drawn signature and underline, and a rotating list of roles.
- **Fast**: optimized to about 3 KB of JavaScript.
- **Responsive**: one column on phones and tablets, two columns from 1024 px.
- **Shareable**: Open Graph and Twitter cards, JSON-LD structured data and a sitemap.

## Tech stack

| | |
|---|---|
| Framework | [Astro](https://astro.build) 7, static output |
| Language | TypeScript |
| Styling | [Tailwind CSS](https://tailwindcss.com) 4 |
| Hosting | GitHub Pages, deployed with GitHub Actions |
| Spotify API | [spotify-api-proxy](https://github.com/RubenLWF/spotify-api-proxy), a Vercel serverless function |

## Getting started

Requires Node.js 22.23.4 or newer.

```bash
npm install
cp .env.example .env   # then set PUBLIC_VERCEL_API_BASE
npm run dev            # http://localhost:4321
```

| Command | Description |
|---|---|
| `npm run dev` | Start the development server |
| `npm run build` | Type-check with `astro check` and build to `dist/` |
| `npm run preview` | Serve the production build locally |
| `npm run lint` | Lint the TypeScript with ESLint |

### Environment variables

| Variable | Description |
|---|---|
| `PUBLIC_VERCEL_API_BASE` | Base URL of the Spotify proxy, for example `https://spotify-api-proxy.rubenlagerwerf.nl/api` |

The proxy only accepts requests from `https://rubenlagerwerf.nl`, so during local development the widget shows "Not Playing" unless you point it at your own proxy.

## Deployment

Every push to `main` runs [`deploy.yml`](.github/workflows/deploy.yml), which builds the site with the official Astro action and deploys it to GitHub Pages.

## License

The code is released under the [MIT License](LICENSE).

Icons come from [Font Awesome Free](https://fontawesome.com/license/free) (CC BY 4.0), [Feather](https://github.com/feathericons/feather) (MIT) and [Simple Icons](https://simpleicons.org) (CC0 1.0). Spotify is a trademark of Spotify AB.
