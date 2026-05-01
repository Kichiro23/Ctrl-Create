import { useState } from "react";
import { useLanguage } from "@/hooks/useLanguage";
import { Link } from "react-router";
import { motion, AnimatePresence } from "framer-motion";
import { useCurrency } from "@/hooks/useCurrency";
import PaymentTooltip from "@/components/PaymentTooltip";
import CurrencyToggle from "@/components/CurrencyToggle";
import {
  Check, ChevronDown, Globe, Code, Palette, PenTool,
  Crown, Zap, ShieldCheck, ArrowRight, Layers, Video, Megaphone, BookOpen, MonitorSmartphone,
  GraduationCap, Calendar,
} from "lucide-react";
import SEO from "@/components/SEO";

function PriceDisplay({ pricePHP, priceUSD }: { pricePHP: number; priceUSD: number }) {
  const { formatPriceFull } = useCurrency();
  const { primary, secondary } = formatPriceFull(pricePHP, priceUSD);
  return (
    <div className="flex items-baseline gap-1.5">
      <span className="text-2xl font-bold" style={{ color: "var(--text-primary)" }}>{primary}</span>
      <span className="text-xs" style={{ color: "var(--text-muted)" }}>{secondary}</span>
    </div>
  );
}

interface Package {
  name: string;
  priceUSD: number;
  pricePHP: number;
  originalPricePHP?: number;
  timeline: string;
  description: string;
  features: string[];
  highlight?: string;
  popular: boolean;
}

const websitePackages: Package[] = [
  {
    name: "Starter",
    priceUSD: 207,
    pricePHP: 12000,
    originalPricePHP: 16000,
    timeline: "7–10 days",
    description: "Single-page presence with clean design",
    features: [
      "Single responsive page (4–5 sections)",
      "Hero, About, Services, Contact layout",
      "Basic SEO meta tags & sitemap",
      "Mobile-first responsive design",
      "Light/Dark mode toggle",
      "Social media links",
      "FREE logo concept (1 revision)",
      "FREE social media banner",
      "1 major revision (full section redesign)",
      "3 minor revisions (text/image swap)",
      "2 weeks post-launch support",
    ],
    highlight: "Best for personal portfolios and landing pages",
    popular: false,
  },
  {
    name: "Business",
    priceUSD: 431,
    pricePHP: 25000,
    originalPricePHP: 35000,
    timeline: "10–15 days",
    description: "Professional multi-page website",
    features: [
      "Everything in Starter",
      "Multi-page setup (up to 5 pages)",
      "Custom layouts & micro-interactions",
      "Contact form with validation",
      "Google Analytics & Search Console setup",
      "Google Business Profile setup",
      "Basic on-page SEO optimization",
      "FREE 3 months hosting",
      "2 major revisions",
      "5 minor revisions",
      "1 month post-launch support",
    ],
    highlight: "Most Popular — Best for small businesses",
    popular: true,
  },
  {
    name: "Pro",
    priceUSD: 828,
    pricePHP: 48000,
    originalPricePHP: 68000,
    timeline: "20–30 days",
    description: "Full-scale site with backend features",
    features: [
      "Everything in Business",
      "Up to 8 custom pages",
      "Booking / Reservation system",
      "Admin dashboard",
      "User authentication (login/signup)",
      "Database integration",
      "Advanced animations & transitions",
      "Newsletter subscription form",
      "FREE 6 months hosting",
      "FREE CMS training video",
      "FREE analytics dashboard setup",
      "3 major revisions",
      "8 minor revisions",
      "2 months post-launch support",
    ],
    highlight: "Best for restaurants, clinics, and service businesses",
    popular: false,
  },
  {
    name: "Enterprise",
    priceUSD: 1517,
    pricePHP: 88000,
    originalPricePHP: 115000,
    timeline: "40–60 days",
    description: "Complete digital transformation",
    features: [
      "Everything in Pro",
      "Unlimited pages",
      "E-commerce / Payment integration",
      "Custom API development",
      "Brand design system (colors, typography)",
      "Performance optimization & caching",
      "Advanced SEO & social previews",
      "SSL certificate & security headers",
      "CMS for easy content updates",
      "FREE 1 year hosting",
      "FREE priority WhatsApp support",
      "Quarterly performance reviews",
      "Unlimited revisions",
      "3 months priority support",
    ],
    highlight: "Best for brands, agencies, and e-commerce",
    popular: false,
  },
];

const academicPackages: Package[] = [
  {
    name: "Scholar",
    priceUSD: 60,
    pricePHP: 3500,
    originalPricePHP: 4500,
    timeline: "Monthly",
    description: "For occasional academic help",
    features: [
      "2 essay/research papers per month",
      "1 consultation call",
      "10% discount on thesis chapters",
      "Standard support",
      "Grammar & formatting check",
    ],
    highlight: "Starter Academic Membership",
    popular: false,
  },
  {
    name: "Dean's Lister",
    priceUSD: 112,
    pricePHP: 6500,
    originalPricePHP: 8500,
    timeline: "Monthly",
    description: "For regular academic support",
    features: [
      "4 papers/assignments per month",
      "2 consultation calls",
      "1 free defense PPT per month",
      "15% discount on thesis chapters",
      "Priority support",
      "Turnitin reports included",
    ],
    highlight: "Most Popular",
    popular: true,
  },
  {
    name: "Magna Cum Laude",
    priceUSD: 216,
    pricePHP: 12500,
    originalPricePHP: 16500,
    timeline: "Monthly",
    description: "For thesis & capstone students",
    features: [
      "8 papers/assignments per month",
      "3 consultation calls per month",
      "2 free defense PPTs per month",
      "1 free SPSS analysis per month",
      "20% discount on all academic services",
      "Priority support + rush delivery",
      "Free defense PPT template",
    ],
    highlight: "Best for thesis students",
    popular: false,
  },
  {
    name: "Valedictorian",
    priceUSD: 388,
    pricePHP: 22500,
    originalPricePHP: 29500,
    timeline: "Monthly",
    description: "For full-semester support",
    features: [
      "Unlimited papers & assignments",
      "5 consultation calls per month",
      "3 free defense PPTs per month",
      "2 free SPSS analyses per month",
      "1 free thesis chapter per month",
      "25% discount on all services",
      "VIP support + 24h response",
      "Rush delivery at no extra cost",
    ],
    highlight: "Best for comprehensive support",
    popular: false,
  },
];

const addonPackages = [
  { name: "Logo Design", priceUSD: 43, pricePHP: 2500, icon: Palette, description: "Unique logo with brand guidelines" },
  { name: "Branding Kit", priceUSD: 60, pricePHP: 3500, icon: Layers, description: "Color palette, typography, business cards, social templates" },
  { name: "Promo Video", priceUSD: 78, pricePHP: 4500, icon: Video, description: "60-second promotional video with motion graphics" },
  { name: "Social Media Pack", priceUSD: 34, pricePHP: 2000, icon: Megaphone, description: "30 posts + stories for Instagram/Facebook" },
  { name: "SEO Package", priceUSD: 86, pricePHP: 5000, icon: Globe, description: "Keyword research, on-page SEO, monthly report (3 months)" },
  { name: "Content Writing", priceUSD: 21, pricePHP: 1200, icon: PenTool, description: "Professional web copy per page" },
  { name: "Academic System", priceUSD: 207, pricePHP: 12000, icon: BookOpen, description: "Capstone defense system with defense-ready documentation" },
  { name: "Mobile App (PWA)", priceUSD: 129, pricePHP: 7500, icon: MonitorSmartphone, description: "Progressive Web App with offline support" },
];

const membershipTiers = [
  { name: "Bronze", pricePHP: 5500, priceUSD: 95, duration: "1 month", discount: "10%", color: "#C9A96E", icon: ShieldCheck, features: ["1 social media banner design", "1 free consultation call", "10% discount on every service", "Monthly check-in", "1 revision per project", "Free business card design"] },
  { name: "Silver", pricePHP: 9500, priceUSD: 164, duration: "2 months", discount: "15%", color: "#A1A1A6", icon: ShieldCheck, features: ["Everything in Bronze", "1 simple 3-page website OR 2 creative designs", "1 short video content (up to 30s)", "Priority queue", "2 free social media posts", "Free basic SEO audit", "Extended revision scope"] },
  { name: "Gold", pricePHP: 16500, priceUSD: 284, duration: "3 months", discount: "20%", color: "#FF9500", icon: Crown, features: ["Everything in Silver", "1 professional 5-page website", "1 logo design", "2 short video contents", "2 free consultations per month", "1 month maintenance", "Free Google Business setup", "Monthly performance report"] },
  { name: "Diamond", pricePHP: 28500, priceUSD: 491, duration: "4 months", discount: "25%", color: "#007AFF", icon: Zap, features: ["Everything in Gold", "1 advanced 8-page website with backend", "Unlimited creative designs", "3 video contents", "Unlimited consultations", "2 months maintenance", "VIP same-day support", "Free 3 months hosting", "Monthly strategy call", "Exclusive first access to new templates"] },
];

export default function Packages() {
  const { t } = useLanguage();
  const [openAddons, setOpenAddons] = useState(false);
  const [openMembership, setOpenMembership] = useState(false);
  const [activeTab, setActiveTab] = useState<"website" | "academic">("website");

  const currentPackages = activeTab === "website" ? websitePackages : academicPackages;

  return (
    <div>
      <SEO
        title="Website & Academic Packages | Transparent Pricing | Cylux Code"
        description="Transparent pricing for website development and academic support. Starter to Enterprise website packages. Scholar to Valedictorian academic memberships."
        pathname="/packages"
        keywords="website package Philippines, website design price Philippines, academic membership, thesis package, web development pricing"
      />
      {/* Hero */}
      <section className="px-4 pb-12 pt-28 text-center md:px-6 lg:px-8">
        <div className="mx-auto max-w-[800px]">
          <div className="flex items-center justify-center gap-3">
            <span className="eyebrow">Pricing</span>
            <CurrencyToggle />
          </div>
          <h1 className="mt-4 text-4xl font-extrabold tracking-tight md:text-6xl" style={{ color: "var(--text-primary)" }}>
            {t("packages.hero.headline")}
          </h1>
          <p className="mx-auto mt-4 max-w-xl text-lg" style={{ color: "var(--text-secondary)" }}>
            {t("packages.hero.subtitle")}
          </p>
          <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
            <Link to="/contact" className="btn-primary rounded-full inline-flex items-center gap-2">
              <Calendar size={16} /> {t("packages.hero.cta")}
            </Link>
          </div>
          <div className="mt-4 flex justify-center">
            <PaymentTooltip layout="badges" />
          </div>
        </div>
      </section>

      {/* Discount Notice */}
      <section className="px-4 pb-4 md:px-6 lg:px-8">
        <div className="mx-auto max-w-[1200px]">
          <div className="flex items-center gap-3 rounded-2xl border px-4 py-3 text-sm" style={{ borderColor: "var(--border-subtle)", color: "var(--text-secondary)", background: "var(--bg-surface)" }}>
            <GraduationCap size={18} style={{ color: "var(--accent-blue)" }} />
            <span><strong>Special Discounts Available:</strong> Students, PWDs, and Senior Citizens may apply for additional discounts. <Link to="/contact" className="font-semibold underline" style={{ color: "var(--accent-blue)" }}>Submit an inquiry to apply →</Link></span>
          </div>
        </div>
      </section>

      {/* Tab Toggle */}
      <section className="px-4 pb-8 md:px-6 lg:px-8">
        <div className="mx-auto max-w-[1200px]">
          <div className="flex flex-wrap items-center justify-center gap-3">
            <button
              onClick={() => setActiveTab("website")}
              className={`flex items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold transition-all ${
                activeTab === "website" ? "text-white" : "border"
              }`}
              style={
                activeTab === "website"
                  ? { background: "var(--accent-blue)" }
                  : { borderColor: "var(--border-subtle)", color: "var(--text-secondary)" }
              }
            >
              <MonitorSmartphone size={16} />
              Website Packages
            </button>
            <button
              onClick={() => setActiveTab("academic")}
              className={`flex items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold transition-all ${
                activeTab === "academic" ? "text-white" : "border"
              }`}
              style={
                activeTab === "academic"
                  ? { background: "#34C759" }
                  : { borderColor: "var(--border-subtle)", color: "var(--text-secondary)" }
              }
            >
              <GraduationCap size={16} />
              Academic Membership
            </button>
          </div>
        </div>
      </section>

      {/* Packages */}
      <section className="px-4 py-14 md:px-6 lg:px-8" style={{ background: "var(--bg-primary)" }}>
        <div className="mx-auto max-w-[1200px]">
          <div className="section-heading mb-12">
            <span className="eyebrow">{activeTab === "website" ? "Website" : "Academic"}</span>
            <h2>{activeTab === "website" ? "Website Commission Packages" : "Academic Support Memberships"}</h2>
            <p>{activeTab === "website" ? "Choose the scope that fits your business or academic needs." : "Consistent academic help with monthly allowances and discounts."}</p>
          </div>
          <p className="mx-auto mb-8 max-w-xl text-center text-xs" style={{ color: "var(--text-muted)" }}>
            Prices shown are starting rates. Final cost may increase based on project scope and specific requirements.
          </p>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {currentPackages.map((pkg) => (
              <div key={pkg.name} className={`glass-card relative flex flex-col rounded-3xl p-6 ${pkg.popular ? "ring-1 ring-[var(--accent-blue)]" : ""}`}>
                {pkg.popular && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full px-3 py-1 text-xs font-semibold text-white" style={{ background: "var(--accent-blue)" }}>Most Popular</span>
                )}
                <h3 className="text-lg font-semibold" style={{ color: "var(--text-primary)" }}>{pkg.name}</h3>
                <p className="mt-1 text-sm" style={{ color: "var(--text-secondary)" }}>{pkg.description}</p>
                <div className="mt-3">
                  <PriceDisplay pricePHP={pkg.pricePHP} priceUSD={pkg.priceUSD} />
                </div>
                {pkg.originalPricePHP && (
                  <p className="text-xs line-through" style={{ color: "var(--text-muted)" }}>₱{pkg.originalPricePHP.toLocaleString()}</p>
                )}
                <p className="mt-1 text-xs" style={{ color: "var(--text-muted)" }}>{pkg.timeline}</p>
                {pkg.highlight && <p className="mt-2 text-xs font-medium" style={{ color: "var(--accent-blue)" }}>{pkg.highlight}</p>}
                <ul className="mt-5 flex-1 space-y-2">
                  {pkg.features.map((f, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm">
                      <Check size={14} className="mt-0.5 shrink-0" style={{ color: "var(--accent-blue)" }} />
                      <span style={{ color: "var(--text-secondary)" }}>{f}</span>
                    </li>
                  ))}
                </ul>
                <Link to="/contact" className={`mt-6 block w-full rounded-full py-2.5 text-center text-sm font-semibold ${pkg.popular ? "btn-primary" : "btn-secondary"}`}>
                  {pkg.popular ? "Choose This Package" : "Get a Quote for This"}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Add-Ons */}
      <section className="px-4 py-14 md:px-6 lg:px-8">
        <div className="mx-auto max-w-[1200px]">
          <div className="section-heading mb-8">
            <span className="eyebrow">Extras</span>
            <h2>Add-On Services</h2>
            <p>Enhance any package with these standalone services.</p>
          </div>

          <button onClick={() => setOpenAddons(!openAddons)} className="flex w-full items-center justify-between rounded-2xl border p-4 text-left transition-colors hover:bg-[var(--bg-surface-solid)]" style={{ borderColor: "var(--border-subtle)" }}>
            <span className="text-sm font-medium" style={{ color: "var(--text-primary)" }}>View Add-On Packages</span>
            <motion.div animate={{ rotate: openAddons ? 180 : 0 }} transition={{ duration: 0.2 }}>
              <ChevronDown size={18} style={{ color: "var(--text-secondary)" }} />
            </motion.div>
          </button>

          <AnimatePresence>
            {openAddons && (
              <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.3 }} className="overflow-hidden">
                <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                  {addonPackages.map((addon) => (
                    <div key={addon.name} className="glass-card rounded-3xl p-5">
                      <div className="flex h-10 w-10 items-center justify-center rounded-xl" style={{ background: "rgba(0, 122, 255, 0.1)" }}>
                        <addon.icon size={20} style={{ color: "var(--accent-blue)" }} />
                      </div>
                      <h4 className="mt-3 text-sm font-semibold" style={{ color: "var(--text-primary)" }}>{addon.name}</h4>
                      <p className="mt-1 text-xs" style={{ color: "var(--text-secondary)" }}>{addon.description}</p>
                      <div className="mt-2">
                        <PriceDisplay pricePHP={addon.pricePHP} priceUSD={addon.priceUSD} />
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </section>

      {/* Membership */}
      <section className="px-4 py-14 md:px-6 lg:px-8" style={{ background: "var(--bg-primary)" }}>
        <div className="mx-auto max-w-[1200px]">
          <div className="section-heading mb-8">
            <span className="eyebrow">Membership</span>
            <h2>Cylux Code Membership</h2>
            <p>Unlock recurring discounts, priority support, and exclusive perks.</p>
          </div>

          <button onClick={() => setOpenMembership(!openMembership)} className="flex w-full items-center justify-between rounded-2xl border p-4 text-left transition-colors hover:bg-[var(--bg-surface-solid)]" style={{ borderColor: "var(--border-subtle)" }}>
            <span className="text-sm font-medium" style={{ color: "var(--text-primary)" }}>View Membership Tiers</span>
            <motion.div animate={{ rotate: openMembership ? 180 : 0 }} transition={{ duration: 0.2 }}>
              <ChevronDown size={18} style={{ color: "var(--text-secondary)" }} />
            </motion.div>
          </button>

          <AnimatePresence>
            {openMembership && (
              <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.3 }} className="overflow-hidden">
                <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                  {membershipTiers.map((tier) => (
                    <div key={tier.name} className="glass-card rounded-3xl p-5">
                      <div className="flex h-10 w-10 items-center justify-center rounded-xl" style={{ background: `${tier.color}15` }}>
                        <tier.icon size={20} style={{ color: tier.color }} />
                      </div>
                      <h4 className="mt-3 text-sm font-semibold" style={{ color: "var(--text-primary)" }}>{tier.name}</h4>
                      <div className="mt-1">
                        <PriceDisplay pricePHP={tier.pricePHP} priceUSD={tier.priceUSD} />
                      </div>
                      <p className="text-xs" style={{ color: "var(--text-muted)" }}>for {tier.duration} · {tier.discount} off all services</p>
                      <ul className="mt-3 space-y-1">
                        {tier.features.map((f) => (
                          <li key={f} className="flex items-start gap-1.5 text-xs" style={{ color: "var(--text-secondary)" }}>
                            <Check size={12} className="mt-0.5 shrink-0" style={{ color: tier.color }} />{f}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          <div className="mt-6 text-center">
            <Link to="/membership" className="btn-secondary rounded-full inline-flex items-center gap-2">View Full Membership Page <ArrowRight size={14} /></Link>
          </div>
        </div>
      </section>

      {/* Payment Methods */}
      <section className="px-4 py-14 md:px-6 lg:px-8">
        <div className="mx-auto max-w-[800px] text-center">
          <div className="section-heading mb-8">
            <span className="eyebrow">Payments</span>
            <h2>Accepted Payment Methods</h2>
          </div>
          <PaymentTooltip layout="grid" className="mx-auto max-w-lg" />
          <p className="mt-4 text-sm" style={{ color: "var(--text-secondary)" }}>
            GCash / Maya / PayPal / Google Pay — flexible options for every client.
          </p>
        </div>
      </section>

      {/* Revision Policy */}
      <section className="px-4 py-14 md:px-6 lg:px-8" style={{ background: "var(--bg-primary)" }}>
        <div className="mx-auto max-w-[800px]">
          <div className="section-heading mb-8">
            <span className="eyebrow">Policy</span>
            <h2>Revision Policy</h2>
          </div>
          <div className="glass-card rounded-3xl p-6 md:p-8 space-y-4">
            <div className="flex items-start gap-3">
              <div className="mt-0.5 h-2 w-2 rounded-full shrink-0" style={{ background: "var(--accent-blue)" }} />
              <div>
                <h4 className="text-sm font-semibold" style={{ color: "var(--text-primary)" }}>Major Revisions</h4>
                <p className="text-sm" style={{ color: "var(--text-secondary)" }}>Full section redesigns, layout changes, or new page additions. Limited per package tier.</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="mt-0.5 h-2 w-2 rounded-full shrink-0" style={{ background: "var(--accent-blue)" }} />
              <div>
                <h4 className="text-sm font-semibold" style={{ color: "var(--text-primary)" }}>Minor Revisions</h4>
                <p className="text-sm" style={{ color: "var(--text-secondary)" }}>Text edits, image swaps, color tweaks, and small UI adjustments. Unlimited in Enterprise tier.</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="mt-0.5 h-2 w-2 rounded-full shrink-0" style={{ background: "var(--accent-blue)" }} />
              <div>
                <h4 className="text-sm font-semibold" style={{ color: "var(--text-primary)" }}>Out-of-Scope</h4>
                <p className="text-sm" style={{ color: "var(--text-secondary)" }}>Features beyond the agreed scope will be quoted separately before implementation.</p>
              </div>
            </div>
          </div>
          <div className="mt-6 text-center">
            <Link to="/revision-policy" className="btn-secondary rounded-full inline-flex items-center gap-2">View Full Revision Policy <ArrowRight size={14} /></Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-4 py-14 md:px-6 lg:px-8">
        <div className="mx-auto max-w-[800px] text-center">
          <h2 className="text-3xl font-bold tracking-tight md:text-4xl" style={{ color: "var(--text-primary)" }}>Still Deciding? Let's Talk.</h2>
          <p className="mx-auto mt-4 max-w-lg text-base" style={{ color: "var(--text-secondary)" }}>
            {t("packages.cta.subtitle")}
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <Link to="/contact" className="btn-primary rounded-full inline-flex items-center gap-2"><Calendar size={16} /> {t("packages.cta.primary")}</Link>
            <Link to="/services" className="btn-secondary rounded-full">{t("packages.cta.secondary")}</Link>
          </div>
          <p className="mt-4 text-xs" style={{ color: "var(--text-muted)" }}>{t("packages.cta.trust")}</p>
        </div>
      </section>
    </div>
  );
}
