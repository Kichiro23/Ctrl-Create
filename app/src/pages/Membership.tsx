import { useState, useRef } from "react";
import { useLanguage } from "@/hooks/useLanguage";
import { Link } from "react-router";
import { motion, useInView, AnimatePresence } from "framer-motion";
import {
  Crown, Gem, Medal, Award,
  CheckCircle2, Check, ArrowRight,
  UserPlus, RefreshCw, ClipboardList, CreditCard,
  ChevronDown, MonitorSmartphone, GraduationCap, HelpCircle,
  Calendar,
} from "lucide-react";
import { useCurrency } from "@/hooks/useCurrency";
import CurrencyToggle from "@/components/CurrencyToggle";
import SEO from "@/components/SEO";

function AnimatedSection({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-10% 0px" });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

type ProgramType = "website" | "academic";

interface Tier {
  key: string;
  name: string;
  icon: React.ElementType;
  pricePHP: number;
  priceUSD: number;
  originalPricePHP?: number;
  color: string;
  status: string;
  duration: string;
  discount: string;
  forWho: string;
  features: string[];
}

const websiteTiers: Tier[] = [
  {
    key: "diamond",
    name: "Diamond",
    icon: Gem,
    pricePHP: 42500,
    priceUSD: 733,
    originalPricePHP: 55000,
    color: "#007AFF",
    status: "VIP",
    duration: "4 months",
    discount: "25%",
    forWho: "For agencies & growing brands",
    features: [
      "VIP premium card + physical card",
      "4 months duration",
      "Up to 25% off every service",
      "1 advanced 8-page website with backend",
      "Unlimited creative designs",
      "3 video contents (up to 60s each)",
      "Unlimited consultations",
      "2 months system and website maintenance",
      "VIP same-day support",
      "Free 3 months hosting",
      "Monthly strategy call",
      "Exclusive first access to new templates",
      "Free logo design",
      "Free brand guidelines document",
    ],
  },
  {
    key: "gold",
    name: "Gold",
    icon: Crown,
    pricePHP: 22500,
    priceUSD: 388,
    originalPricePHP: 29500,
    color: "#FF9500",
    status: "Popular",
    duration: "3 months",
    discount: "20%",
    forWho: "For small businesses & professionals",
    features: [
      "Gold membership card",
      "3 months duration",
      "Up to 20% off every service",
      "1 professional 5-page website",
      "1 logo design",
      "2 short video contents (up to 30s)",
      "2 free consultations per month",
      "1 month maintenance",
      "Free Google Business setup",
      "Monthly performance report",
      "Business strategy guidance",
      "Priority support",
    ],
  },
  {
    key: "silver",
    name: "Silver",
    icon: Medal,
    pricePHP: 12500,
    priceUSD: 216,
    originalPricePHP: 16500,
    color: "#86868B",
    status: "Growth",
    duration: "2 months",
    discount: "15%",
    forWho: "For startups & side hustles",
    features: [
      "Silver membership card",
      "2 months duration",
      "Up to 15% off every service",
      "1 simple 3-page website OR 2 creative designs",
      "1 short video content (up to 30s)",
      "1 free consultation per month",
      "Free basic SEO audit",
      "2 free social media posts",
      "Extended revision scope",
      "Basic business advice",
      "Priority queue",
    ],
  },
  {
    key: "bronze",
    name: "Bronze",
    icon: Award,
    pricePHP: 6500,
    priceUSD: 112,
    originalPricePHP: 8500,
    color: "#A2845E",
    status: "Starter",
    duration: "1 month",
    discount: "10%",
    forWho: "For first-time clients",
    features: [
      "Bronze membership card",
      "1 month duration",
      "Up to 10% off every service",
      "1 social media banner design",
      "1 free business card design",
      "1 free consultation call",
      "Monthly check-in",
      "1 revision per project",
      "Standard support",
    ],
  },
];

const academicTiers: Tier[] = [
  {
    key: "valedictorian",
    name: "Valedictorian",
    icon: Gem,
    pricePHP: 14500,
    priceUSD: 250,
    originalPricePHP: 18500,
    color: "#007AFF",
    status: "VIP",
    duration: "1 month",
    discount: "25%",
    forWho: "For full-semester support",
    features: [
      "Unlimited papers & assignments",
      "5 consultation calls per month",
      "3 free defense PPTs per month",
      "2 free SPSS analyses per month",
      "1 free thesis chapter per month",
      "Full thesis (Ch 1–5) over 4 months",
      "Defense prep + PPT + script",
      "1 basic capstone system included",
      "25% discount on all services",
      "VIP support + 24h response",
      "Rush delivery at no extra cost",
    ],
  },
  {
    key: "magna",
    name: "Magna Cum Laude",
    icon: Crown,
    pricePHP: 8500,
    priceUSD: 147,
    originalPricePHP: 11000,
    color: "#FF9500",
    status: "Popular",
    duration: "1 month",
    discount: "20%",
    forWho: "For thesis & capstone students",
    features: [
      "8 papers/assignments per month",
      "3 consultation calls per month",
      "2 free defense PPTs per month",
      "1 free SPSS analysis per month",
      "1 thesis chapter per month included",
      "1 capstone system consultation",
      "20% discount on all academic services",
      "Priority support + rush delivery",
      "Free defense PPT template",
    ],
  },
  {
    key: "deans",
    name: "Dean's Lister",
    icon: Medal,
    pricePHP: 4500,
    priceUSD: 78,
    originalPricePHP: 5800,
    color: "#86868B",
    status: "Growth",
    duration: "1 month",
    discount: "15%",
    forWho: "For regular academic support",
    features: [
      "4 papers/assignments per month",
      "2 consultation calls",
      "1 free defense PPT per month",
      "15% discount on thesis chapters",
      "Priority support",
      "Turnitin reports included",
      "Grammar & formatting check",
    ],
  },
  {
    key: "scholar",
    name: "Scholar",
    icon: Award,
    pricePHP: 2500,
    priceUSD: 43,
    originalPricePHP: 3200,
    color: "#34C759",
    status: "Starter",
    duration: "1 month",
    discount: "10%",
    forWho: "For occasional help",
    features: [
      "2 essay/research papers per month",
      "1 consultation call",
      "10% discount on thesis chapters",
      "Standard support",
      "Grammar & formatting check",
    ],
  },
];

const membershipActions = [
  { icon: ClipboardList, title: "Apply for Membership", description: "Create a new Cylux Code membership" },
  { icon: UserPlus, title: "Add a Supplementary", description: "Add a loved one to existing membership" },
  { icon: RefreshCw, title: "Renew Membership", description: "Extend your membership and continue growing" },
  { icon: CreditCard, title: "I Have Pre-Registered", description: "Complete your membership application process" },
];

const faqs = [
  {
    question: "How do I apply for a membership?",
    answer: "Click the 'Apply for Membership' button and fill out the short form. I'll review your application and get back to you within 24 hours.",
  },
  {
    question: "Can I upgrade my tier later?",
    answer: "Yes. You can upgrade from any tier to a higher one at any time. I'll prorate the difference.",
  },
  {
    question: "What happens after my membership expires?",
    answer: "Your membership will auto-expire. You can renew anytime to keep your benefits active. I'll send a reminder 7 days before expiry.",
  },
  {
    question: "Can I share my membership with my team?",
    answer: "Memberships are individual. To share benefits with family or team members, consider adding a supplementary member.",
  },
  {
    question: "Can I switch between Website and Academic membership?",
    answer: "Yes, you can have both memberships active simultaneously, or switch when one expires. Contact me to arrange the transition.",
  },
];

function PriceDisplay({ pricePHP, priceUSD }: { pricePHP: number; priceUSD: number }) {
  const { formatPriceFull } = useCurrency();
  const { primary, secondary } = formatPriceFull(pricePHP, priceUSD);
  return (
    <div>
      <span className="text-4xl font-bold" style={{ color: "var(--text-primary)" }}>{primary}</span>
      <span className="ml-2 text-sm" style={{ color: "var(--text-muted)" }}>{secondary}</span>
    </div>
  );
}

export default function Membership() {
  const { t } = useLanguage();
  const [program, setProgram] = useState<ProgramType>("website");
  const [activeTier, setActiveTier] = useState("gold");
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const tiers = program === "website" ? websiteTiers : academicTiers;
  const currentTier = tiers.find((t) => t.key === activeTier) || tiers[1];

  // Reset active tier when switching programs
  const handleProgramChange = (p: ProgramType) => {
    setProgram(p);
    setActiveTier(p === "website" ? "gold" : "magna");
  };

  return (
    <div>
      <SEO
        title="Membership Tiers | Bronze Silver Gold Diamond | Cylux Code"
        description="Join Cylux Code membership for exclusive discounts, priority support, free consultations, and monthly creative services. Website Building and Academic Support programs."
        pathname="/membership"
        keywords="web design membership Philippines, creative agency membership, academic support subscription, freelance developer retainer"
      />
      {/* Hero */}
      <section className="relative flex min-h-[50vh] items-center justify-center px-4 pt-20 md:px-6 lg:px-8">
        <div className="mx-auto max-w-[800px] text-center">
          <AnimatedSection>
            <div className="flex items-center justify-center gap-3">
              <span className="eyebrow">Membership</span>
              <CurrencyToggle />
            </div>
            <h1 className="mt-4 text-4xl font-extrabold tracking-tight md:text-6xl" style={{ color: "var(--text-primary)" }}>
              {t("membership.hero.headline")}
            </h1>
            <p className="mx-auto mt-4 max-w-2xl text-lg" style={{ color: "var(--text-secondary)" }}>
              {t("membership.hero.subtitle")}
            </p>
            <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
              <Link to="/contact" className="btn-primary rounded-full inline-flex items-center gap-2">
                <Calendar size={16} /> {t("membership.hero.cta")}
              </Link>
            </div>
            <div className="mt-4 flex flex-wrap items-center justify-center gap-4 text-xs" style={{ color: "var(--text-muted)" }}>
              <span className="flex items-center gap-1"><Check size={12} style={{ color: "#34C759" }} /> {t("membership.hero.trust1")}</span>
              <span className="flex items-center gap-1"><Check size={12} style={{ color: "#34C759" }} /> {t("membership.hero.trust2")}</span>
              <span className="flex items-center gap-1"><Check size={12} style={{ color: "#34C759" }} /> {t("membership.hero.trust3")}</span>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Discount Notice */}
      <section className="px-4 pt-8 pb-2 md:px-6 lg:px-8">
        <div className="mx-auto max-w-[1200px]">
          <div className="flex items-center gap-3 rounded-2xl border px-4 py-3 text-sm" style={{ borderColor: "var(--border-subtle)", color: "var(--text-secondary)", background: "var(--bg-surface)" }}>
            <GraduationCap size={18} style={{ color: "var(--accent-blue)" }} />
            <span><strong>Special Discounts Available:</strong> Students, PWDs, and Senior Citizens may apply for additional discounts on membership fees. <Link to="/contact" className="font-semibold underline" style={{ color: "var(--accent-blue)" }}>Submit an inquiry to apply →</Link></span>
          </div>
        </div>
      </section>

      {/* Program Toggle */}
      <section className="px-4 py-8 md:px-6 lg:px-8">
        <div className="mx-auto max-w-[1200px]">
          <AnimatedSection className="mb-8">
            <div className="flex flex-wrap items-center justify-center gap-3">
              <button
                onClick={() => handleProgramChange("website")}
                className={`flex items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold transition-all ${
                  program === "website" ? "text-white" : "border"
                }`}
                style={
                  program === "website"
                    ? { background: "#007AFF" }
                    : { borderColor: "var(--border-subtle)", color: "var(--text-secondary)" }
                }
              >
                <MonitorSmartphone size={16} />
                Website Building
              </button>
              <button
                onClick={() => handleProgramChange("academic")}
                className={`flex items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold transition-all ${
                  program === "academic" ? "text-white" : "border"
                }`}
                style={
                  program === "academic"
                    ? { background: "#34C759" }
                    : { borderColor: "var(--border-subtle)", color: "var(--text-secondary)" }
                }
              >
                <GraduationCap size={16} />
                Academic Support
              </button>
            </div>
          </AnimatedSection>
          <p className="mx-auto mb-6 max-w-xl text-center text-xs" style={{ color: "var(--text-muted)" }}>
            Prices shown are starting rates. Final cost may increase based on add-ons, complexity, and specific requirements.
          </p>

          {/* Tier Selector */}
          <AnimatedSection className="mb-8">
            <div className="flex flex-wrap items-center justify-center gap-2">
              {tiers.map((tier) => (
                <button
                  key={tier.key}
                  onClick={() => setActiveTier(tier.key)}
                  className={`rounded-full px-5 py-2.5 text-sm font-semibold transition-all ${
                    activeTier === tier.key ? "text-white" : "border"
                  }`}
                  style={
                    activeTier === tier.key
                      ? { background: tier.color }
                      : { borderColor: "var(--border-subtle)", color: "var(--text-secondary)" }
                  }
                >
                  {tier.name}
                </button>
              ))}
            </div>
          </AnimatedSection>

          {/* Featured Tier Card */}
          <AnimatedSection>
            <div className="glass-card mx-auto max-w-2xl overflow-hidden rounded-3xl p-8 md:p-10">
              <div className="flex items-center gap-3">
                <div
                  className="flex h-12 w-12 items-center justify-center rounded-2xl"
                  style={{ background: `${currentTier.color}15` }}
                >
                  <currentTier.icon size={24} style={{ color: currentTier.color }} />
                </div>
                <div>
                  <h2 className="text-2xl font-bold" style={{ color: "var(--text-primary)" }}>
                    {currentTier.name}
                  </h2>
                  {currentTier.status && (
                    <span
                      className="inline-block rounded-full px-2.5 py-0.5 text-xs font-semibold"
                      style={{ background: `${currentTier.color}15`, color: currentTier.color }}
                    >
                      {currentTier.status}
                    </span>
                  )}
                </div>
              </div>

              <div className="mt-2 flex items-center gap-1.5 text-xs" style={{ color: "var(--text-muted)" }}>
                <HelpCircle size={12} />
                <span>{currentTier.forWho}</span>
              </div>

              <div className="mt-6">
                <PriceDisplay pricePHP={currentTier.pricePHP} priceUSD={currentTier.priceUSD} />
                {currentTier.originalPricePHP && (
                  <p className="text-sm line-through" style={{ color: "var(--text-muted)" }}>₱{currentTier.originalPricePHP.toLocaleString()}</p>
                )}
                <p className="text-sm" style={{ color: "var(--text-muted)" }}>
                  {currentTier.duration} · Up to {currentTier.discount} off all services
                </p>
              </div>

              <ul className="mt-6 space-y-3">
                {currentTier.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3 text-sm" style={{ color: "var(--text-secondary)" }}>
                    <CheckCircle2 size={16} className="mt-0.5 shrink-0" style={{ color: currentTier.color }} />
                    {feature}
                  </li>
                ))}
              </ul>

              <div className="mt-8 flex items-center gap-3">
                <Link to="/contact" className="btn-primary flex-1 rounded-full text-center">Apply Now</Link>
                <Link to="/contact" className="btn-secondary flex-1 rounded-full text-center">Contact Sales</Link>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Membership Actions */}
      <section className="px-4 py-14 md:px-6 lg:px-8" style={{ background: "var(--bg-primary)" }}>
        <div className="mx-auto max-w-[1200px]">
          <AnimatedSection className="section-heading mb-12">
            <span className="eyebrow">Actions</span>
            <h2>Manage Your Membership</h2>
          </AnimatedSection>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {membershipActions.map((action) => (
              <AnimatedSection key={action.title}>
                <button className="glass-card glass-card-hover w-full rounded-3xl p-6 text-left">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl" style={{ background: "rgba(0, 122, 255, 0.1)" }}>
                    <action.icon size={24} style={{ color: "var(--accent-blue)" }} />
                  </div>
                  <h3 className="mt-4 text-base font-semibold" style={{ color: "var(--text-primary)" }}>
                    {action.title}
                  </h3>
                  <p className="mt-1 text-sm" style={{ color: "var(--text-secondary)" }}>
                    {action.description}
                  </p>
                </button>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Membership Card CTA */}
      <section className="px-4 py-14 md:px-6 lg:px-8">
        <div className="mx-auto max-w-[800px]">
          <AnimatedSection>
            <div className="glass-card rounded-3xl p-8 text-center md:p-10">
              <CreditCard size={32} className="mx-auto" style={{ color: "var(--accent-blue)" }} />
              <h3 className="mt-4 text-xl font-bold" style={{ color: "var(--text-primary)" }}>
                Apply for a Cylux Code Membership Card
              </h3>
              <p className="mt-2 text-sm" style={{ color: "var(--text-secondary)" }}>
                Powered by Partner Banks — No annual fees
              </p>
              <Link to="/contact" className="btn-primary mt-6 inline-flex items-center gap-2 rounded-full">
                <Calendar size={16} /> {t("membership.card.cta")}
              </Link>
              <p className="mt-3 text-xs" style={{ color: "var(--text-muted)" }}>{t("membership.card.note")}</p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* FAQ */}
      <section className="px-4 py-14 md:px-6 lg:px-8" style={{ background: "var(--bg-primary)" }}>
        <div className="mx-auto max-w-[800px]">
          <AnimatedSection className="section-heading mb-12">
            <span className="eyebrow">FAQ</span>
            <h2>Common Questions</h2>
          </AnimatedSection>

          <div className="space-y-3">
            {faqs.map((faq, i) => (
              <AnimatedSection key={i}>
                <div className="glass-card overflow-hidden rounded-3xl">
                  <button
                    onClick={() => setOpenFaq(openFaq === i ? null : i)}
                    className="flex w-full items-center justify-between p-5 text-left"
                  >
                    <span className="text-sm font-semibold" style={{ color: "var(--text-primary)" }}>
                      {faq.question}
                    </span>
                    <ChevronDown
                      size={18}
                      className="shrink-0 transition-transform"
                      style={{
                        color: "var(--text-secondary)",
                        transform: openFaq === i ? "rotate(180deg)" : "rotate(0deg)",
                      }}
                    />
                  </button>
                  <AnimatePresence>
                    {openFaq === i && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.25 }}
                      >
                        <div className="border-t px-5 py-4 text-sm" style={{ borderColor: "var(--border-subtle)", color: "var(--text-secondary)" }}>
                          {faq.answer}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="px-4 py-14 md:px-6 lg:px-8">
        <div className="mx-auto max-w-[800px] text-center">
          <AnimatedSection>
            <h2 className="text-3xl font-bold tracking-tight md:text-4xl" style={{ color: "var(--text-primary)" }}>Not Sure Which Tier?</h2>
            <p className="mx-auto mt-4 max-w-lg text-base" style={{ color: "var(--text-secondary)" }}>
              {t("membership.final.subtitle")}
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
              <Link to="/contact" className="btn-primary rounded-full inline-flex items-center gap-2"><Calendar size={16} /> {t("membership.final.primary")}</Link>
              <Link to="/packages" className="btn-secondary rounded-full">{t("membership.final.secondary")}</Link>
            </div>
            <p className="mt-4 text-xs" style={{ color: "var(--text-muted)" }}>{t("membership.final.trust")}</p>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}
