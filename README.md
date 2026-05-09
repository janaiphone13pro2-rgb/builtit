# BuiltIt

**We Build Digital Presence That Converts.**

BuiltIt is a Cairo-based web development studio specializing in B2B portfolios, e-commerce stores, and student digital CVs for the Egyptian market.

## Company Context

- BuiltIt was founded by Jana and Bassam (co-founder)
- BuiltIt is evolving into a reusable ecommerce product business in the Shopify/Zid category
- Current traction: sold to more than one client
- Core positioning: ownership-first ecommerce (no platform lock-in)

## Product Direction

- This repository is the marketing/portfolio surface for the BuiltIt brand
- The production ecommerce engine lives in a separate repository (`builtit-ecommerce`)
- Portfolio messaging should stay aligned with productized delivery, client onboarding, and ownership-first value

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS v3
- **Animations**: Framer Motion
- **Forms**: React Hook Form + Zod
- **Email**: Resend API
- **Fonts**: Bebas Neue (headings), DM Sans (body)

## Documentation

- [Project Overview](./docs/PROJECT_OVERVIEW.md)

## Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/builtitEG/portfolio.git
cd portfolio
```

2. Install dependencies:
```bash
npm install
```

3. Set up environment variables:
```bash
cp .env.local.example .env.local
```

Edit `.env.local` with your values:
- `RESEND_API_KEY` - Your Resend API key for email notifications
- `INTAKE_EMAIL` - Email address to receive intake form submissions

4. Run the development server:
```bash
npm run dev
```

5. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
/
├── app/                    # Next.js App Router pages
│   ├── layout.tsx          # Root layout with fonts
│   ├── page.tsx            # Homepage
│   ├── not-found.tsx       # 404 page
│   ├── about/page.tsx      # About page
│   ├── work/page.tsx       # Portfolio page
│   ├── intake/page.tsx     # Multi-step intake form
│   ├── services/           # Service pages
│   │   ├── b2b/page.tsx
│   │   ├── ecommerce/page.tsx
│   │   └── students/page.tsx
│   └── api/intake/route.ts # Form submission API
├── components/
│   ├── layout/             # Navbar, Footer
│   ├── home/               # Homepage sections
│   ├── intake/             # Form step components
│   └── ui/                 # Reusable UI components
├── lib/
│   ├── schemas/intake.ts   # Zod validation schema
│   └── utils.ts            # Utility functions
├── public/                 # Static assets
├── tailwind.config.ts
├── next.config.ts
└── package.json
```

## Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Import your repository on [Vercel](https://vercel.com)
3. Add environment variables in Vercel dashboard
4. Deploy!

### Build for Production

```bash
npm run build
```

Output will be in the `dist` folder.

## Design System

### Colors
- **Background**: `#0A0A0A`
- **Foreground**: `#FFFFFF`
- **Primary (Lime)**: `#C8FF00`
- **CTA (Orange)**: `#FF4D00`
- **Card**: `rgba(255, 255, 255, 0.03)`
- **Border**: `rgba(255, 255, 255, 0.08)`

### Typography
- **Headings**: Bebas Neue, uppercase, tracking-wide
- **Body**: DM Sans, regular weight

### Animations
- Scroll-triggered fade-up entrance (all sections)
- Staggered children with 0.1s delay
- 3D tilt on hover for service cards
- Count-up animation for stats
- Magnetic button hover effect

## Features

### Homepage
- Word-by-word animated hero headline
- 3D tilt service cards with lime border glow
- Process steps with connecting line
- Count-up stats on scroll
- Featured work grid with hover overlay
- Testimonial cards with snap scroll on mobile
- Lime CTA section with color inversion

### Service Pages
Each service page includes:
- Hero with bold headline
- Stats counter section
- Feature grid with icons
- Target audience cards
- 4-step process
- Service-specific FAQ
- Bottom CTA

### Intake Form
- 3-step multi-step form with progress bar
- Step 1: Personal info
- Step 2: Project details
- Step 3: Availability & preferences
- Zod validation with inline errors
- Email submission via Resend API
- Success screen with animation

## API Routes

### POST /api/intake
Submits intake form data and sends email notification.

**Request Body:**
```json
{
  "fullName": "string",
  "email": "string",
  "phone": "string",
  "role": "Business Owner | Student | Freelancer | Other",
  "serviceNeeded": "B2B Portfolio | E-commerce Store | Student CV | Not sure",
  "projectDescription": "string (min 50 chars)",
  "hasDomain": "Yes | No | Need help",
  "designReference": "string (optional)",
  "budgetRange": "< 5,000 EGP | 5–15k EGP | 15–30k EGP | 30k+ EGP | Flexible",
  "contactMethod": "WhatsApp | Email | Call",
  "bestTime": "Morning | Afternoon | Evening",
  "timeline": "ASAP | Within 1 month | Just exploring",
  "hearAbout": "Instagram | LinkedIn | Friend | Google | Other",
  "additionalInfo": "string (optional)"
}
```

## License

© 2025 BuiltIt. All rights reserved.
