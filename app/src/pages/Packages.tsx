import { useState } from "react";
import { Link } from "react-router";
import { motion, AnimatePresence } from "framer-motion";
import { useCurrency } from "@/hooks/useCurrency";
import PaymentTooltip from "@/components/PaymentTooltip";
import CurrencyToggle from "@/components/CurrencyToggle";
import {
  Check, ChevronDown, Globe, Code, Palette, PenTool,
  Crown, Zap, ShieldCheck, ArrowRight, Layers, Video, Megaphone, BookOpen, MonitorSmartphone,
  GraduationCap,
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
    priceUSD: 112,
    pricePHP: 6500,
    originalPricePHP: 8500,
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
    priceUSD: 198,
    pricePHP: 11500,
    originalPricePHP: 14200,
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
    priceUSD: 388,
    pricePHP: 22500,
    originalPricePHP: 28500,
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
    priceUSD: 560,
    pricePHP: 32500,
    originalPricePHP: 39800,
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
    priceUSD: 34,
    pricePHP: 1999,
    originalPricePHP: 2499,
    timeline: "Monthly",
    description: "For occasional academic help",
    features: [
      "2 essay/research papers per month",
      "1 consultation call",
      "5% discount on thesis chapters",
      "Standard support",
      "Grammar & formatting check",
    ],
    highlight: "Starter Academic Membership",
    popular: false,
  },
  {
    name: "Dean's Lister",
    priceUSD: 69,
    pricePHP: 3999,
    originalPricePHP: 4999,
    timeline: "Monthly",
    description: "For regular academic support",
    features: [
      "5 papers/assignments per month",
      "2 consultation calls",
      "1 free defense PPT per month",
      "10% discount on thesis chapters",
      "Priority support",
      "Turnitin reports included",
    ],
    highlight: "Most Popular",
    popular: true,
  },
  {
    name: "Magna Cum Laude",
    priceUSD: 121,
    pricePHP: 6999,
    originalPricePHP: 8999,
    timeline: "Monthly",
    description: "For thesis & capstone students",
    features: [
      "Unlimited papers & assignments",
      "4 consultation calls per month",
      "1 thesis chapter per month included",
      "1 capstone system consultation",
      "15% discount on all academic services",
      "Priority support + rush delivery",
      "Free defense PPT template",
    ],
    highlight: "Best for thesis students",
    popular: false,
  },
  {
    name: "Valedictorian",
    priceUSD: 207,
    pricePHP: 11999,
    originalPricePHP: 14999,
    timeline: "Monthly",
    description: "For full-semester support",
    features: [
      "Unlimited everything",
      "Weekly consultation calls",
      "Full thesis (Ch 1–5) over 4 months",
      "Defense prep + PPT + script",
      "1 basic capstone system included",
      "20% discount on all services",
      "VIP support + 24h response",
    ],
    highlight: "Best for comprehensive support",
    popular: false,
  },
];

const addonPackages = [
  { name: "Logo Design", priceUSD: 78, pricePHP: 4500, icon: Palette, description: "Unique logo with brand guidelines" },
  { name: "Branding Kit", priceUSD: 121, pricePHP: 6999, icon: Layers, description: "Color palette, typography, business cards, social templates" },
  { name: "Promo Video", priceUSD: 155, pricePHP: 8999, icon: Video, description: "60-second promotional video with motion graphics" },
  { name: "Social Media Pack", priceUSD: 60, pricePHP: 3499, icon: Megaphone, description: "30 posts + stories for Instagram/Facebook" },
  { name: "SEO Package", priceUSD: 155, pricePHP: 8999, icon: Globe, description: "Keyword research, on-page SEO, monthly report (3 months)" },
  { name: "Content Writing", priceUSD: 38, pricePHP: 2200, icon: PenTool, description: "Professional web copy per page" },
  { name: "Academic System", priceUSD: 242, pricePHP: 14000, icon: BookOpen, description: "Capstone defense system with defense-ready documentation" },
  { name: "Mobile App (PWA)", priceUSD: 155, pricePHP: 8999, icon: MonitorSmartphone, description: "Progressive Web App with offline support" },
];

const membershipTiers = [
  { name: "Bronze", pricePHP: 2999, priceUSD: 52, duration: "1 month", discount: "5%", color: "#C9A96E", icon: ShieldCheck, features: ["Discount on every service", "Free consultation call", "Monthly check-in", "1 revision per project", "Free social media banner"] },
  { name: "Silver", pricePHP: 5999, priceUSD: 103, duration: "2 months", discount: "6%", color: "#A1A1A6", icon: ShieldCheck, features: ["Everything in Bronze", "Priority queue", "2 free social media posts", "Extended revision scope", "Free basic SEO audit"] },
  { name: "Gold", pricePHP: 12999, priceUSD: 224, duration: "3 months", discount: "8%", color: "#FF9500", icon: Crown, features: ["Everything in Silver", "1 company profile", "1 video content", "1 creative design", "1 free consultation/month", "1 month maintenance", "Free Google Business setup"] },
  { name: "Diamond", pricePHP: 22500, priceUSD: 388, duration: "4 months", discount: "10%", color: "#007AFF", icon: Zap, features: ["Everything in Gold", "Full brand development", "Unlimited consultations", "3 months maintenance", "Exclusive perks & first access", "Free logo design"] },
];

export default function Packages() {
  const [openAddons, setOpenAddons] = useState(false);
  const [openMembership, setOpenMembership] = useState(false);
  const [activeTab, setActiveTab] = useState<"website" | "academic">("website");

  const currentPackages = activeTab === "website" ? websitePackages : academicPackages;

  return (
    <div>
      <SEO
        title="Website & Academic Packages | Transparent Pricing | Ctrl + Create"
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
            Website & Academic Packages
          </h1>
          <p className="mx-auto mt-4 max-w-xl text-lg" style={{ color: "var(--text-secondary)" }}>
            Transparent pricing for websites, academic services, add-ons, and recurring memberships.
          </p>
          <div className="mt-6 flex justify-center">
            <PaymentTooltip layout="badges" />
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
                  Get Started
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
            <h2>Ctrl + Create Membership</h2>
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
          <h2 className="text-3xl font-bold tracking-tight md:text-4xl" style={{ color: "var(--text-primary)" }}>Ready to Start Your Project?</h2>
          <p className="mx-auto mt-4 max-w-lg text-base" style={{ color: "var(--text-secondary)" }}>
            Tell me what you're building and I'll send you a custom quote within 24 hours.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <Link to="/contact" className="btn-primary rounded-full"><Code size={16} className="mr-2" />Request a Quote</Link>
            <Link to="/services" className="btn-secondary rounded-full">Browse All Services</Link>
          </div>
        </div>
      </section>
    </div>
  );
}
