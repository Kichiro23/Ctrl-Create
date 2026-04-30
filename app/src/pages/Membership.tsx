import { useState, useRef } from "react";
import { Link } from "react-router";
import { motion, useInView, AnimatePresence } from "framer-motion";
import {
  Crown, Gem, Medal, Award,
  CheckCircle2, ArrowRight,
  UserPlus, RefreshCw, ClipboardList, CreditCard,
  ChevronDown, MonitorSmartphone, GraduationCap, HelpCircle,
} from "lucide-react";
import { useCurrency } from "@/hooks/useCurrency";
import CurrencyToggle from "@/components/CurrencyToggle";

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
    pricePHP: 22500,
    priceUSD: 388,
    originalPricePHP: 30000,
    color: "#007AFF",
    status: "VIP",
    duration: "4 months",
    discount: "10%",
    forWho: "For agencies & growing brands",
    features: [
      "VIP premium card",
      "4 months duration",
      "Up to 10% off every service",
      "Priority support (VIP assistance)",
      "Free chatbot flow assistance",
      "1 simple company profile",
      "1 simple video content",
      "1 creative design",
      "1 free consultation per month",
      "1 month system and website maintenance",
      "Free logo design",
      "Free 1 banner for cover photo",
    ],
  },
  {
    key: "gold",
    name: "Gold",
    icon: Crown,
    pricePHP: 12999,
    priceUSD: 224,
    originalPricePHP: 16999,
    color: "#FF9500",
    status: "Popular",
    duration: "3 months",
    discount: "8%",
    forWho: "For small businesses & professionals",
    features: [
      "Advanced business card",
      "3 months duration",
      "Up to 8% off every service",
      "Priority support",
      "1 simple company profile",
      "1 simple video content",
      "1 creative design",
      "1 free consultation per month",
      "1 month system and website maintenance",
      "Free Google Business setup",
      "Business strategy guidance",
    ],
  },
  {
    key: "silver",
    name: "Silver",
    icon: Medal,
    pricePHP: 5999,
    priceUSD: 103,
    originalPricePHP: 8000,
    color: "#86868B",
    status: "Growth",
    duration: "2 months",
    discount: "6%",
    forWho: "For startups & side hustles",
    features: [
      "Growth level card",
      "2 months duration",
      "Up to 6% off every service",
      "Standard support",
      "1 simple company profile",
      "1 simple video content",
      "1 creative design",
      "1 free consultation per month",
      "Free basic SEO audit",
      "Basic business advice",
    ],
  },
  {
    key: "bronze",
    name: "Bronze",
    icon: Award,
    pricePHP: 2999,
    priceUSD: 52,
    originalPricePHP: 3999,
    color: "#A2845E",
    status: "Starter",
    duration: "1 month",
    discount: "5%",
    forWho: "For first-time clients",
    features: [
      "Starter card",
      "1 month duration",
      "Up to 5% off every service",
      "Limited support",
      "1 simple video content",
      "1 creative design",
      "Free social media banner",
      "1 free consultation (one-time)",
    ],
  },
];

const academicTiers: Tier[] = [
  {
    key: "valedictorian",
    name: "Valedictorian",
    icon: Gem,
    pricePHP: 11999,
    priceUSD: 207,
    originalPricePHP: 14999,
    color: "#007AFF",
    status: "VIP",
    duration: "1 month",
    discount: "20%",
    forWho: "For full-semester support",
    features: [
      "Unlimited papers & assignments",
      "Weekly consultation calls",
      "Full thesis (Ch 1–5) over 4 months",
      "Defense prep + PPT + script",
      "1 basic capstone system included",
      "20% discount on all services",
      "VIP support + 24h response",
      "Rush delivery at no extra cost",
    ],
  },
  {
    key: "magna",
    name: "Magna Cum Laude",
    icon: Crown,
    pricePHP: 6999,
    priceUSD: 121,
    originalPricePHP: 8999,
    color: "#FF9500",
    status: "Popular",
    duration: "1 month",
    discount: "15%",
    forWho: "For thesis & capstone students",
    features: [
      "Unlimited papers & assignments",
      "4 consultation calls per month",
      "1 thesis chapter per month included",
      "1 capstone system consultation",
      "15% discount on all academic services",
      "Priority support + rush delivery",
      "Free defense PPT template",
    ],
  },
  {
    key: "deans",
    name: "Dean's Lister",
    icon: Medal,
    pricePHP: 3999,
    priceUSD: 69,
    originalPricePHP: 4999,
    color: "#86868B",
    status: "Growth",
    duration: "1 month",
    discount: "10%",
    forWho: "For regular academic support",
    features: [
      "5 papers/assignments per month",
      "2 consultation calls",
      "1 free defense PPT per month",
      "10% discount on thesis chapters",
      "Priority support",
      "Turnitin reports included",
    ],
  },
  {
    key: "scholar",
    name: "Scholar",
    icon: Award,
    pricePHP: 1999,
    priceUSD: 34,
    originalPricePHP: 2499,
    color: "#34C759",
    status: "Starter",
    duration: "1 month",
    discount: "5%",
    forWho: "For occasional help",
    features: [
      "2 essay/research papers per month",
      "1 consultation call",
      "5% discount on thesis chapters",
      "Standard support",
      "Grammar & formatting check",
    ],
  },
];

const membershipActions = [
  { icon: ClipboardList, title: "Apply for Membership", description: "Create a new Ctrl + Create membership" },
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
      {/* Hero */}
      <section className="relative flex min-h-[50vh] items-center justify-center px-4 pt-20 md:px-6 lg:px-8">
        <div className="mx-auto max-w-[800px] text-center">
          <AnimatedSection>
            <div className="flex items-center justify-center gap-3">
              <span className="eyebrow">Membership</span>
              <CurrencyToggle />
            </div>
            <h1 className="mt-4 text-4xl font-extrabold tracking-tight md:text-6xl" style={{ color: "var(--text-primary)" }}>
              Become a Member
            </h1>
            <p className="mx-auto mt-4 max-w-2xl text-lg" style={{ color: "var(--text-secondary)" }}>
              Choose the program that fits your needs — ongoing web development or consistent academic support.
            </p>
          </AnimatedSection>
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
                Apply for a Ctrl + Create Membership Card
              </h3>
              <p className="mt-2 text-sm" style={{ color: "var(--text-secondary)" }}>
                Powered by Partner Banks — No annual fees
              </p>
              <Link to="/contact" className="btn-primary mt-6 inline-flex items-center rounded-full">
                Apply for Card <ArrowRight size={16} className="ml-2" />
              </Link>
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
    </div>
  );
}
