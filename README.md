# Boca Marble - bocamarble.com

Premium marble & stone countertop fabrication website for Boca Raton, FL. Built for maximum SEO dominance and lead generation.

## Tech Stack

- **Framework:** Next.js 16 (App Router, TypeScript)
- **Styling:** Tailwind CSS 4
- **Deployment:** Vercel (static generation)
- **SEO:** 200+ high-intent keywords, programmatic pages, structured data

## Pages (36 total, all statically generated)

- `/` — Home (conversion-optimized landing)
- `/services` — All services overview
- `/services/[slug]` — 10 individual service pages (marble, granite, quartz, quartzite, kitchen, bathroom, outdoor, installation, fabrication, commercial)
- `/areas` — Service areas overview
- `/areas/[slug]` — 12 individual area pages (Boca Raton, Delray Beach, etc.)
- `/gallery` — Project portfolio
- `/about` — Company story
- `/contact` — Contact with map
- `/free-estimate` — Lead generation form

## SEO Infrastructure

- Dynamic sitemap.xml (auto-generates from data)
- robots.txt (Google, Bing, Apple bots)
- JSON-LD structured data (LocalBusiness, Organization, WebSite, FAQPage, Service, BreadcrumbList)
- Open Graph & Twitter Card meta
- IndexNow API endpoint (Bing/Yandex instant indexing)
- Geo meta tags for local SEO
- Canonical URLs on all pages
- Web App Manifest

## Conversion Features

- Floating CTA buttons (WhatsApp + Phone) on every page
- Click-to-call phone links
- WhatsApp direct message links
- Contact form on estimate & contact pages
- Multiple CTAs per page section

## Getting Started

```bash
npm install
npm run dev
```

## Deployment to Vercel

1. Push to GitHub
2. Import in Vercel dashboard
3. Set environment variables from `.env.example`
4. Deploy

## Post-Deployment Checklist

1. **Update constants:** Edit `src/lib/constants.ts` with real phone, address, WhatsApp number
2. **Add images:** Replace placeholder backgrounds with real project photos in `/public`
3. **Google Search Console:** Add property, verify, submit sitemap
4. **Bing Webmaster Tools:** Add site, verify, generate IndexNow key
5. **Apple Business Connect:** Register business for Apple Maps
6. **Google Business Profile:** Create/claim listing, link to website
7. **IndexNow:** Hit `POST /api/indexnow` to submit all URLs to Bing/Yandex
8. **Analytics:** Add Google Tag Manager ID to environment variables
9. **Form backend:** Connect contact form to email service (Resend, SendGrid, etc.)
