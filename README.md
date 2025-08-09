# Planaur — Notion Templates Marketplace

A premium-minimal, fast, and conversion-focused marketing site for selling Notion templates. Built with React, Vite, Tailwind CSS, and shadcn.

## Quick Start

```bash
npm i
npm run dev
```

## Editing Templates

Templates use a typed data model and can be served from API:
- Types: `src/data/types.ts`
- Seed: `src/data/templates.ts`
- Public API: `api/templates.ts` (falls back to seed if DB not configured)

## Assets

- Logo is `public/images/planaur.jpg` by default. Replace as needed.
- Template images: place under `public/images/templates/<slug>/` and reference in `coverImg`/`gallery`.

## SEO

- Global meta is in `index.html`. Per-template SEO is set in `src/pages/TemplateDetail.tsx` and schema.org Product markup is included.

## Deploying to Vercel

1. Create a new Vercel project and import this repo.
2. Build Command: `npm run build`
3. Output Directory: `dist`
4. Environment variables (optional for full MVP):
   - `STRIPE_SECRET_KEY`
   - `STRIPE_WEBHOOK_SECRET`
   - `RESEND_API_KEY`
   - `EMAIL_FROM` (e.g., support@planaur.co)
   - `SUPABASE_URL`, `SUPABASE_SERVICE_ROLE_KEY` (for admin CRUD)
   - `ADMIN_PASSWORD` (for Admin API)
5. Click Deploy.

## Links & Anchors

Routes:
- `/` landing
- `/templates` listing
- `/t/:slug` template detail
- `/order/:id` order receipt
- `/privacy`, `/terms`, `/admin`

## Notes

Checkout & Email:
- `/api/checkout` creates Stripe Checkout Sessions (dev fallback redirects to stub order page)
- `/api/webhook` handles `checkout.session.completed` and sends fulfillment email via Resend

Sitemap:
- `/sitemap.xml` generated from published templates
