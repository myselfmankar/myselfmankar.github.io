# myselfmankar.github.io

Personal portfolio for Vaishnav Mankar — backend engineering student, built with
React, TypeScript, and Tailwind CSS.

## Stack

- React 18 + TypeScript
- Vite
- Tailwind CSS
- Framer Motion
- React Router
- Web3Forms (contact form, no backend needed)

## Local development

```bash
npm install
cp .env.example .env
# add your own Web3Forms key to .env
npm run dev
```

Open [http://localhost:5173](http://localhost:5173).

## Build

```bash
npm run build   # outputs to dist/
npm run preview # preview the production build locally
```

## Structure

```
src/
├── components/   # Navbar, Footer, shared UI
├── data/
│   └── portfolio.ts   # all content: hero, about, skills, projects, research, contact
├── pages/        # route-level pages (Home, About, Skills, Projects, Research, Blog, Contact)
├── App.tsx
└── main.tsx
```

Most content changes only need editing `src/data/portfolio.ts`.

## Deployment

Deployed via Cloudflare Pages (`wrangler.jsonc` configures the static-assets
deploy). Build command: `npm run build`, output directory: `dist`.

The `VITE_WEB3FORMS_KEY` environment variable must be set wherever this is
deployed for the contact form to work — get a free key at
[web3forms.com](https://web3forms.com).
