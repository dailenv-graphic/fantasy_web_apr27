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

The Next app is in this **`web/`** folder. The Git repo root is one level up, so the host must build **from `web`**, or the build will not find `package.json` / Next.

### Vercel (recommended)

1. After importing the repo, open **Settings → General → Root Directory**, set it to **`web`**, save, and **Redeploy** (or set **Root Directory** to `web` during the first import, before the first build).
2. Vercel will run `npm install` and `npm run build` inside `web/` and detect Next.js as usual.
3. If the project root must stay the **repo root**: use the root `package.json` in the monorepo and set Vercel **Build Command** to `npm run vercel-build` (that script `cd`s into `web` and builds). Install can be `npm install` at the repo root.

Docs: [Vercel monorepos / root directory](https://vercel.com/docs/monorepos).

### Netlify

The repo includes `netlify.toml` at the **monorepo root** with `base = "web"`. Re-link the site or run “Clear cache and deploy” if the first build did not use that file. [Next.js on Netlify](https://docs.netlify.com/build/frameworks/framework-setup-guides/nextjs/overview/).

### Common errors

- **No `package.json` at root** / **framework not detected**: set **Root Directory** (Vercel) or **Base directory** (Netlify) to **`web`**, or use the `vercel-build` flow above.
- **Node version**: use **Node 20+** (see `web/.nvmrc` and `engines` in `web/package.json`).

---

## Deploy on Vercel (create-next-app template)

The [Vercel Platform](https://vercel.com/new) is the default for a single-package repo. This project is under **`web/`** — use **Deploy (Vercel & Netlify)** above first.

[Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying).
