# Sheetal Ghate – Divine Guidance (Palmistry, Astrology & Horoscope)

A 5-page, highly aesthetic, spiritual, mobile-friendly website for “Sheetal Ghate – Divine Guidance”.

Built with:
- React 18 + TypeScript + Vite
- Tailwind CSS + Radix UI components
- Express server (single port for API and client)
- TanStack Query + Wouter router

## Features
- Pages: Home, About, Services, Horoscope, Contact, and 404
- Animated starfield background, testimonials carousel, and spiritual progress tracker
- Mobile-first responsive design with smooth, tasteful animations
- Fast local dev and easy production build/start

## Project structure
```
DivineGuidance/
  client/
    src/                  # React app (pages, components, hooks, lib)
    index.html
    public/               # Static assets
  server/                 # Express server (routes, vite integration)
  shared/                 # Shared types/schemas
  package.json            # Single workspace package (client + server)
  vite.config.ts          # Vite (client) config
  tailwind.config.ts      # Tailwind config
  postcss.config.js       # PostCSS config
  tsconfig.json
```

## Requirements
- Node.js 18+ (recommended 20+)
- npm 9+

## Development
```powershell
npm install
npm run dev
```
This starts Express and Vite together on http://localhost:5000.

## Production
Build and run the bundled server + client:
```powershell
npm run build
npm start
```
- The server listens on PORT (defaults to 5000). Set a custom port with `PORT=XXXX`.

## Scripts
- dev: Start Express + Vite in development
- build: Build client (Vite) and bundle server (esbuild)
- start: Run the production server
- check: TypeScript check

## Environment variables
- PORT: Port for the Express server (default 5000)

Note: The project includes Drizzle dependencies for future data features, but no DB is required for the current site.

## Deploy
Any Node hosting works (Render, Railway, Fly.io, Azure, etc.).
- Build: `npm run build`
- Start: `npm start`
- Ensure the service exposes `PORT` and runs `npm start`.

## License
MIT — see `package.json` license field.
