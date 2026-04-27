This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

Fonts (Montserrat, Roboto Condensed) are loaded via [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) in `app/layout.tsx`.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy (Vercel & Netlify)

The Next app is at the **repository root** (`package.json` next to `app/`). Import the repo, use the defaults: **Build command** `npm run build`, **Install** `npm install`.

### Vercel

Connect the GitHub repo. Leave **Root Directory** empty (repo root) unless you use a subfolder. [Vercel Next.js](https://vercel.com/docs/frameworks/nextjs).

### Netlify

`netlify.toml` in the repo runs `npm run build` and sets **Node 20**. [Next.js on Netlify](https://docs.netlify.com/build/frameworks/framework-setup-guides/nextjs/overview/)

### Node version

Use **Node 20+** (see root `.nvmrc` and `engines` in `package.json`).

[Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying).
