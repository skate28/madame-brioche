# Madame Brioche

Pitch site for Madame Brioche, a European café and bakery at 11380 Beach Blvd, Unit 2, Jacksonville, FL 32246. Order online for pickup, or call (904) 661-1645. Monday–Friday 8 AM–4 PM. Saturday–Sunday 8 AM–5 PM.

Next.js (App Router), TypeScript, and Tailwind CSS. It deploys on Vercel with the Next.js preset and no extra adapter. If this repository is not yet a Vercel project, import `skate28/madame-brioche` and leave `ALLOW_INDEXING` unset.

## Ownership

- **Content** owns `src/content/site.ts` and `public/images/`.
- **Development** owns everything else.

## Scripts

```bash
npm install
npm run dev
npm run lint
npm run build
```

## Where things live

```
src/content/site.ts     All editable content (the only copy file)
src/content/types.ts    Content shapes
src/app/page.tsx        Home: hero, about, order, menu, cakes, gallery, reviews, FAQ, visit
public/images/          Real shop photos only
```

Components read `site.ts` and hide empty sections. Menu prices render only when an item has a real `price`. A `priceFrom` item renders with a plus (`$3.75+`). Items marked `isNew` get a New badge.

## Ordering

The primary action is online pickup: the first `orderingLinks` entry with `kind: "online"` (Toast). Uber Eats is the secondary delivery link. Either button is hidden when its URL is empty. Uber Eats delivery is currently unavailable. DoorDash is shown when its link is present.

Text pre-order uses `textTarget()` in `site.ts`. While `textNumber` is null, texts use the shop line.

`paymentNote` stays hidden while it is empty.

## Photos and prices

Photos are real. They are pending the owner's OK. Do not add stock or AI pictures.

They are mostly phone shots. The layout uses mats and side columns so the full frame stays visible.

Prices were transcribed from the Toast menu. **The owner needs to confirm every price before public launch.**

## SEO

Indexing stays off until the owner signs off. `ALLOW_INDEXING` must be the exact string `true`. Anything else blocks indexing with `noindex, nofollow`, a disallow-all `robots.txt`, and `X-Robots-Tag`. Redeploy after changing it. Copy `.env.example` to `.env.local` when you need local overrides.

On Vercel, leave `NEXT_PUBLIC_SITE_URL` blank unless you want to pin the canonical origin. `VERCEL_PROJECT_PRODUCTION_URL` and `VERCEL_URL` are used when it is unset. No other environment variables are required.

The document title and description come from `site.seo`. Bakery and CafeOrCoffeeShop JSON-LD is generated from the content file. The footer credit is `site.footerCredit`, linked to [nicklopacki.com](https://nicklopacki.com).

Do not publish owner personal names or photo-source URLs. Photo credits in content are keys only.

This site is only the Beach Boulevard shop in Jacksonville. Do not link or mention any other Madame Brioche location.

## Vercel

- Framework preset: Next.js
- Root directory: repository root
- Install command: `npm install`
- Build command: `npm run build` or `next build`
- Node.js: 20 or newer
- Environment: leave `ALLOW_INDEXING` unset until the owner approves indexing
