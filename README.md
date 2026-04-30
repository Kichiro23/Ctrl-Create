# Ctrl + Create

> **Premium creative commissions & digital solutions crafted with precision.**
>
> Built by Rommel Andrei De Leon — Full Stack Developer · IT & Multimedia Specialist · AI Automation Engineer · Freelance Creative & Technical Professional.

## Overview

Ctrl + Create is a solo-operated creative agency platform offering end-to-end services: website development, academic writing, graphic design, video editing, social media management, AI automation, and more. The platform features a modern React frontend, a tRPC/Hono API backend, MongoDB via Mongoose, Resend email notifications, and an AI-powered chatbot via OpenRouter.

## Tech Stack

| Layer | Technology |
|-------|-----------|
| Frontend | React 19, TypeScript, Vite, Tailwind CSS, Framer Motion, Lucide React |
| UI Library | shadcn/ui |
| Backend | tRPC (v11), Hono, MongoDB (Mongoose) |
| Auth | Kimi OAuth 2.0 (with graceful fallback) |
| AI | OpenRouter API (claude-3.5-sonnet / deepseek-chat) |
| Email | Resend API (contact form notifications) |
| Payments | GCash, Maya, PayPal, Google Pay |
| Deployment | Vercel (serverless) |

## Features

### Frontend
- **Apple-level design**: Glassmorphism, pill-shaped UI (`rounded-full`, `rounded-3xl`), fluid animations
- **Dark/Light mode**: Full theme toggle with CSS variables
- **Currency toggle**: PHP primary (₱) / USD subscript ($) on Templates, Packages, Academic, and Membership pages
- **Responsive**: Mobile-first design with slide-from-right nav drawer
- **14 pages**: Home, About, Portfolio, Services, Templates, Membership, Packages, Academic, Contact, Revision Policy, Privacy Policy, Terms of Service, Admin, Login, 404
- **Payment integration**: GCash/Maya (`0962 790 5910`), PayPal/Google Pay (`rommeld216@gmail.com`) badges on every page
- **3D template cards**: Mouse-tracking tilt effect on template previews
- **Animated background**: Floating geometric shapes on Home page
- **Cross-page connectivity**: Every page links to relevant services, contact, templates, and academic pages

### Backend
- **tRPC routers**: `auth`, `message`, `project`, `chat`, `membership`, `templateOrder`
- **Contact form**: Persists to MongoDB + sends email notification via Resend
- **Admin dashboard**: Messages, Memberships, Template Orders with protected routes
- **Chatbot**: OpenRouter integration with system prompt covering all 50+ services
- **Database**: 6 collections — `users`, `messages`, `projects`, `chat_messages`, `memberships`, `templateOrders`
- **Graceful auth fallback**: Kimi OAuth JWKSet loads lazily — server boots without env vars

### Services (50+)
1. **Academic Writing & Research** (15 services) — thesis, essays, SPSS, business plans
2. **Thesis Section Writing** (6 services) — à la carte chapters
3. **Creative & Professional Writing** (9 services) — poetry, translation, portfolios
4. **Creative Production** (8 services) — video editing, graphic design, voice overs
5. **Digital & Technical** (7 services) — web dev, DB design, coding assignments
6. **Digital Advertising** (3 services) — Facebook, Instagram, TikTok ads
7. **Social Media & Growth** (2 services) — organic growth, management

### Website Templates (28)
POS & Retail, Food & Hospitality, Real Estate, Professional Services, Booking & Rentals, Healthcare, Education, Government & Community, E-Commerce, Enterprise — all ready-to-deploy with source code.

### Academic Commissions (19)
Complete papers, individual chapters, data analysis, presentations, defense prep — tailored for Filipino students.

### Membership Tiers
| Tier | Price | Duration | Discount |
|------|-------|----------|----------|
| Bronze | ₱3,999 | 1 month | 5% |
| Silver | ₱8,000 | 2 months | 6% |
| Gold | ₱16,999 | 3 months | 8% |
| Diamond | ₱30,000 | 4 months | 10% |

### Website Packages
| Package | Price (PHP) | Price (USD) | Timeline | Scope |
|---------|-------------|-------------|----------|-------|
| Starter | ₱8,500 | $149 | 7–10 days | Single page, 4–5 sections |
| Business | ₱14,200 | $249 | 10–15 days | Multi-page, analytics, forms |
| Pro | ₱28,500 | $499 | 20–30 days | Booking, auth, dashboard |
| Enterprise | ₱39,800 | $699 | 40–60 days | E-commerce, unlimited pages |

## Environment Variables

Create `app/.env` from `app/.env.example`:

```env
# App
APP_ID=your_app_id
APP_SECRET=your_app_secret
OWNER_UNION_ID=your_union_id
OWNER_EMAIL=rommeld216@gmail.com

# OAuth
KIMI_AUTH_URL=https://kimi-auth.example.com
KIMI_OPEN_URL=https://kimi-open.example.com

# Database
MONGODB_URI=mongodb+srv://user:pass@cluster.mongodb.net/dbname

# AI
OPENROUTER_API_KEY=sk-or-v1-...
OPENROUTER_MODEL=anthropic/claude-3.5-sonnet

# Email
RESEND_API_KEY=re_...

# Frontend
VITE_APP_URL=http://localhost:3000
```

## Getting Started

```bash
cd app
npm install
npm run dev        # Start Vite dev server + API
```

## Deployment (Vercel)

1. Push this repo to GitHub
2. Import project on [vercel.com](https://vercel.com)
3. Set **Root Directory** to `app/`
4. Add environment variables:
   - `MONGODB_URI` — MongoDB Atlas connection string
   - `APP_ID` & `APP_SECRET` — Kimi OAuth credentials
   - `RESEND_API_KEY` — Resend API key
   - `OWNER_EMAIL` — where contact notifications go
   - `OPENROUTER_API_KEY` — OpenRouter API key
   - `VITE_APP_URL` — production domain
5. Deploy

The included `vercel.json` handles API routing and SPA fallback automatically.

## API Endpoints (tRPC)

All endpoints are accessed via tRPC client (`trpc.{router}.{procedure}`):

| Router | Procedure | Auth | Description |
|--------|-----------|------|-------------|
| `auth` | `login`, `me`, `logout` | OAuth | Kimi OAuth flow |
| `message` | `create` | Public | Contact form submission (emails owner) |
| `message` | `list`, `markRead`, `stats` | Admin | Admin message management |
| `project` | `list`, `featured`, `create`, `update`, `delete` | Mixed | Portfolio CRUD |
| `chat` | `send` | Public | AI chat via OpenRouter |
| `membership` | `list`, `create`, `update`, `delete` | Admin | Membership management |
| `templateOrder` | `list`, `create`, `update`, `delete` | Admin | Template order management |

## Project Structure

```
app/
├── api/                    # tRPC + Hono backend
│   ├── kimi/              # Kimi OAuth handlers
│   ├── lib/               # Email (Resend), env utils
│   ├── auth-router.ts     # Authentication router
│   ├── chatRouter.ts      # OpenRouter chat integration
│   ├── messageRouter.ts   # Contact form router
│   ├── membershipRouter.ts
│   ├── templateOrderRouter.ts
│   ├── projectRouter.ts
│   ├── router.ts          # App router
│   └── middleware.ts      # tRPC middleware (publicQuery, adminQuery)
├── db/
│   ├── mongoose.ts        # MongoDB connection
│   ├── models.ts          # Mongoose schemas (6 collections)
│   └── seed.ts            # Seed data
├── src/
│   ├── components/        # Reusable UI components
│   │   ├── ChatWidget.tsx # AI chat widget (offline fallback)
│   │   ├── Navbar.tsx     # Pill-shaped glass navbar
│   │   ├── Footer.tsx
│   │   ├── PaymentMethods.tsx
│   │   ├── PaymentTooltip.tsx
│   │   ├── SearchBar.tsx
│   │   ├── Template3DCard.tsx
│   │   ├── AnimatedBackground.tsx
│   │   └── Layout.tsx
│   ├── data/              # Static data (templates, services, etc.)
│   ├── pages/             # Route pages (14 pages)
│   ├── hooks/
│   │   ├── useCurrency.ts # ₱/$ toggle
│   │   └── useAuth.ts
│   ├── providers/
│   │   └── trpc.tsx       # tRPC client provider
│   ├── lib/
│   │   └── utils.ts       # cn() helper
│   └── App.tsx            # Root router
├── public/images/         # Static assets
│   ├── assets/            # Logo, favicons, OG image
│   ├── portfolio/         # Portfolio images
│   └── templates/         # Template preview images
├── package.json
├── tsconfig.json
├── vite.config.ts
├── vercel.json            # Vercel routing config
└── tailwind.config.js
```

## Brand Guidelines

- **Brand**: Ctrl + Create
- **Tagline**: "Where Vision Meets Precision"
- **Operator**: Rommel Andrei De Leon (solo — use "I" not "we")
- **Experience**: 5+ years
- **Contact**: rommeld216@gmail.com | +63 962 790 5910 | Malolos, Bulacan, Philippines
- **Payments**: GCash/Maya (0962 790 5910) | PayPal/Google Pay (rommeld216@gmail.com)
- **Socials**: GitHub `Kichiro23`, LinkedIn, Instagram `@drei_sanity`, Facebook, Discord, Telegram


## License

Private. All rights reserved. Ctrl + Create © 2025 Rommel Andrei De Leon.
