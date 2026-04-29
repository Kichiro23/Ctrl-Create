# Ctrl + Create

> **Premium creative commissions & digital solutions crafted with precision.**
>
> Built by Rommel Andrei De Leon — Full Stack Developer · IT & Multimedia Specialist · AI Automation Engineer · Freelance Creative & Technical Professional.

## Overview

Ctrl + Create is a solo-operated creative agency platform offering end-to-end services: website development, academic writing, graphic design, video editing, social media management, AI automation, and more. The platform features a modern React frontend, a tRPC/Hono API backend, Drizzle ORM with MySQL, and an AI-powered chatbot via OpenRouter.

## Tech Stack

| Layer | Technology |
|-------|-----------|
| Frontend | React 19, TypeScript, Vite, Tailwind CSS, Framer Motion, Lucide React |
| UI Library | shadcn/ui |
| Backend | tRPC (v11), Hono, Drizzle ORM, MySQL (mysql2) |
| Auth | Kimi OAuth 2.0 (with graceful fallback) |
| AI | OpenRouter API (claude-3.5-sonnet / deepseek-chat) |
| Payments | GCash, Maya, PayPal, Google Pay |
| Deployment | Hostinger (frontend), Render / Fly.io (backend) |

## Features

### Frontend
- **Apple-level design**: Glassmorphism, pill-shaped UI (`rounded-full`, `rounded-3xl`), fluid animations
- **Dark/Light mode**: Full theme toggle with CSS variables
- **Currency toggle**: Auto-detects PHP via timezone; USD/PHP toggle with ₱1 = $0.0175
- **Responsive**: Mobile-first design with slide-from-right nav drawer
- **13 pages**: Home, About, Portfolio, Services, Templates, Membership, Packages, Academic, Contact, Revision Policy, Admin, Login, 404
- **Payment integration**: GCash/Maya (`0962 790 5910`), PayPal/Google Pay (`rommeld216@gmail.com`) badges on every page
- **Cross-page connectivity**: Every page links to relevant services, contact, templates, and academic pages

### Backend
- **tRPC routers**: `auth`, `message`, `project`, `chat`, `membership`, `templateOrder`
- **Contact form**: Persists to MySQL with read/unread status
- **Admin dashboard**: Messages, Memberships, Template Orders with protected routes
- **Chatbot**: OpenRouter integration with system prompt covering all 50+ services
- **Database**: 6 tables — `users`, `messages`, `projects`, `chat_messages`, `memberships`, `templateOrders`
- **Graceful auth fallback**: Kimi OAuth JWKSet loads lazily — server boots without env vars

### Services (50+)
1. **Academic Writing & Research** (15 services) — thesis, essays, SPSS, business plans
2. **Thesis Section Writing** (6 services) — à la carte chapters
3. **Creative & Professional Writing** (9 services) — poetry, translation, portfolios
4. **Creative Production** (8 services) — video editing, graphic design, voice overs
5. **Digital & Technical** (7 services) — web dev, DB design, coding assignments
6. **Digital Advertising** (3 services) — Facebook, Instagram, TikTok ads
7. **Social Media & Growth** (2 services) — organic growth, management

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

# OAuth
KIMI_AUTH_URL=https://kimi-auth.example.com
KIMI_OPEN_URL=https://kimi-open.example.com

# Database
DATABASE_URL=mysql://user:pass@host:3306/dbname

# AI
OPENROUTER_API_KEY=sk-or-v1-...
OPENROUTER_MODEL=anthropic/claude-3.5-sonnet

# Frontend
VITE_APP_URL=http://localhost:3000
```

## Getting Started

```bash
cd app
npm install
npm run db:push    # Push Drizzle schema to MySQL
npm run dev        # Start Vite dev server + API
```

## API Endpoints (tRPC)

All endpoints are accessed via tRPC client (`trpc.{router}.{procedure}`):

| Router | Procedure | Auth | Description |
|--------|-----------|------|-------------|
| `auth` | `login`, `me`, `logout` | OAuth | Kimi OAuth flow |
| `message` | `create` | Public | Contact form submission |
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
│   ├── auth-router.ts     # Authentication router
│   ├── chatRouter.ts      # OpenRouter chat integration
│   ├── messageRouter.ts   # Contact form router
│   ├── membershipRouter.ts
│   ├── templateOrderRouter.ts
│   ├── projectRouter.ts
│   ├── router.ts          # App router
│   └── middleware.ts      # tRPC middleware (publicQuery, adminQuery)
├── db/
│   └── schema.ts          # Drizzle ORM schema (6 tables)
├── src/
│   ├── components/        # Reusable UI components
│   │   ├── ChatWidget.tsx # AI chat widget (offline fallback)
│   │   ├── Navbar.tsx     # Pill-shaped glass navbar
│   │   ├── Footer.tsx
│   │   ├── PaymentMethods.tsx
│   │   └── Layout.tsx
│   ├── pages/             # Route pages (13 pages)
│   ├── hooks/
│   │   ├── useCurrency.ts # ₱/$ auto-detect + toggle
│   │   └── useAuth.ts
│   ├── providers/
│   │   └── trpc.tsx       # tRPC client provider
│   ├── lib/
│   │   └── utils.ts       # cn() helper
│   └── App.tsx            # Root router
├── public/                # Static assets
├── package.json
├── tsconfig.json
├── vite.config.ts
└── tailwind.config.js
```

## Brand Guidelines

- **Brand**: Ctrl + Create
- **Tagline**: "Where Vision Meets Precision"
- **Operator**: Rommel Andrei De Leon (solo — use "I" not "we")
- **Contact**: rommeld216@gmail.com | +63 962 790 5910 | Malolos, Bulacan, Philippines
- **Payments**: GCash/Maya (0962 790 5910) | PayPal/Google Pay (rommeld216@gmail.com)
- **Socials**: GitHub `Kichiro23`, LinkedIn, Instagram `@drei_sanity`, Facebook, Discord, Telegram

## Master Prompt (For AI Context)

```
You are working on the Ctrl + Create platform — a premium creative commissions
and digital solutions website operated by Rommel Andrei De Leon.

KEY FACTS:
- Solo operator (use "I", never "we")
- Currency: PHP auto-detected via timezone (1 USD = ₱57)
- Payments: GCash/Maya (0962 790 5910), PayPal/Google Pay (rommeld216@gmail.com)
- Chatbot: OpenRouter API (claude-3.5-sonnet), system prompt covers all services
- Stack: React 19 + TypeScript + Vite frontend, tRPC + Hono + Drizzle + MySQL backend
- 13 pages, 50+ services, 4 membership tiers, 4 website packages
- All UI is pill-shaped: navbar rounded-full, cards rounded-3xl, buttons rounded-full
- Design language: glassmorphism, Apple-level precision, dark/light mode

WHEN MODIFYING CODE:
1. Maintain "I" language in all user-facing copy
2. Use existing CSS variable system (var(--text-primary), var(--accent-blue), etc.)
3. Keep pill-shaped UI conventions consistent
4. Add PaymentMethods component to any new pricing/service pages
5. Ensure cross-page links connect relevant sections
6. Respect the solo-operator brand identity
7. Test npm run build from app/ before declaring done
```

## License

Private. All rights reserved. Ctrl + Create © 2025 Rommel Andrei De Leon.
