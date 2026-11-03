# Ruben LWF - Portfolio Website

My personal website built using Astro, you can visit it on [https://rubenlagerwerf.nl](https://rubenlagerwerf.nl).

## 🛠️ Tech Stack

- **Framework**: Astro (static output), TypeScript
- **Styling**: Tailwind CSS
- **Build Tool**: Astro (Vite)
- **Deployment**: GitHub Pages, via GitHub Actions on every push to `main` (`.github/workflows/deploy.yml`)
- **API Proxy**: Vercel Serverless Functions

## 🎵 Spotify Integration

The website features real-time Spotify integration that displays your currently playing track. A Vercel serverless function calls the Spotify API on the server and returns the track details. Set the proxy URL as `PUBLIC_VERCEL_API_BASE` in `.env` (see `.env.example`).

## 🎨 Components

### InfoBox
Static Astro component (no client-side JavaScript) featuring:
- Animated profile section
- Social media links
- Spotify now playing widget

### NowPlaying
Astro component with a small client-side script, the only JavaScript on the page, that:
- Fetches current track information
- Displays album artwork with dynamic background colors
- Shows track title, artist, and play status
- Handles loading and error states gracefully
