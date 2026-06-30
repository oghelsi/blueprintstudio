# Blueprint Studio — Portfolio Website

A production-ready Next.js 15 + TypeScript + Tailwind CSS + Framer Motion
website for **Blueprint Studio**, a luxury real estate web design agency.

## Stack

- Next.js 15 (App Router)
- TypeScript
- Tailwind CSS
- Framer Motion
- shadcn/ui-style components (Button, Accordion via Radix)
- lucide-react icons

## Getting started locally

```bash
npm install
npm run dev
```

Visit `http://localhost:3000`.

## Project structure

```
app/
  layout.tsx        – fonts (Fraunces + Manrope) and metadata
  page.tsx           – assembles all sections in order
  globals.css        – design tokens, glassmorphism, grain, corner-frame styles
components/
  sections/          – Navbar, Hero, Portfolio, Services, Why Us,
                       Featured Concepts, Process, Testimonials, FAQ,
                       Contact, Footer
  ui/                – Button, Accordion (shadcn-style primitives)
  reveal.tsx         – scroll-reveal animation wrappers
  section-heading.tsx
lib/
  images.ts          – central registry of all imagery used on the site
  utils.ts           – `cn()` class merge helper
```

## Replacing the demonstration imagery

All imagery is centralised in `lib/images.ts`. Every image is currently a
**verified, freely licensed Unsplash photo** used purely to demonstrate
layout and visual quality — see the disclaimer in the footer. To swap in
real client photography, replace the URLs in that file (or point them at
your own hosted images / a CMS) — every component already references
these keys, so you only need to edit one file.

## Replacing the sample testimonials

Testimonials in `components/sections/testimonials.tsx` are clearly labelled
as samples in the UI. Replace the `TESTIMONIALS` array with real client
quotes when available, and you can remove the "Sample testimonials" badge
at that point.

## Contact form (Netlify Forms)

The contact form in `components/sections/contact.tsx` is wired up for
**Netlify Forms** (`data-netlify="true"`, honeypot field, AJAX submit). A
static fallback copy of the form lives in `public/forms.html` so Netlify's
build-time form parser reliably detects the fields even though the live
form is rendered by React. No extra configuration is required — once
deployed to Netlify, submissions will appear under **Site → Forms** in
your Netlify dashboard. You can connect email notifications from there.

If you'd rather use a different form backend (e.g. Formspree, your own
API route), just change the `onSubmit` handler in `contact.tsx`.

## Deploying to Netlify

This repo includes a `netlify.toml` configured to use the official
Next.js runtime:

```toml
[build]
  command = "npm run build"
  publish = ".next"

[[plugins]]
  package = "@netlify/plugin-nextjs"
```

**Steps:**

1. Push this project to a Git repository (GitHub/GitLab/Bitbucket).
2. In Netlify, choose **Add new site → Import an existing project** and
   select the repository.
3. Netlify will detect `netlify.toml` automatically — build command and
   plugin are already configured, so you can just click **Deploy**.
4. Once live, go to **Site configuration → Forms** to confirm the
   `contact` form has been detected.

Alternatively, deploy via the Netlify CLI:

```bash
npm install -g netlify-cli
netlify deploy --build --prod
```

## Customising colours & type

Design tokens live in `tailwind.config.ts` under `theme.extend.colors`
(`ink`, `panel`, `elevated`, `bone`, `mist`, `gold`) and `fontFamily`
(`font-display` = Fraunces, `font-sans` = Manrope). Changing these values
will cascade through the entire site.
