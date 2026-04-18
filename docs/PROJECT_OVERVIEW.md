# BuiltIt Portfolio - Project Overview

## Project Identity

- Name: builtit-portfolio
- Purpose: marketing and portfolio website for the BuiltIt brand
- Status: active
- Stack: React 18 + Vite 5 + CSS

## Company Context

- BuiltIt was founded by Jana and Bassam (co-founder)
- Vision: build BuiltIt into a reusable ecommerce platform business in the Shopify/Zid space
- Traction: BuiltIt has already been sold to more than one client
- Positioning: ownership-first ecommerce with no platform lock-in

## Repository Role

This repository is the public-facing portfolio and positioning layer.

It is used to:

- Present the brand story and value proposition
- Showcase product capabilities and outcomes
- Drive contact and conversion for new leads

It is not used for:

- Core ecommerce application runtime
- Client production operations
- Admin/storefront transaction logic

## Page Model

- `/` - Main landing page (brand, pricing, process, testimonials)
- `/portfolio.html` - Portfolio showcase page (features, case-study style content)

## Technical Structure

```
portfolio/
├── index.html                 # Landing page entry
├── portfolio.html             # Portfolio page entry
├── src/
│   ├── main.jsx               # Mounts App on /
│   ├── App.jsx                # Landing page component
│   ├── styles.css             # Landing page styles
│   ├── portfolio-main.jsx     # Mounts PortfolioPage on /portfolio.html
│   ├── PortfolioPage.jsx      # Portfolio showcase page component
│   ├── showcase.css           # Portfolio page styles
│   ├── ZekryWayShowcase.jsx   # Showcase section component
│   └── zekryway-showcase.css  # Showcase styles
├── vite.config.js             # Multi-entry Vite build config
└── README.md
```

## Build and Run

```bash
npm install
npm run dev
npm run build
npm run preview
```

## Deployment Notes

- Current public deployment is configured through Vercel
- Keep messaging aligned with the production BuiltIt ecommerce roadmap
- Update portfolio claims only when features are implemented in production systems

## Content Guidelines

- Keep the ownership-first value proposition consistent
- Avoid claims that are not validated by shipped product behavior
- Sync pricing/process copy with current business strategy before major launches
