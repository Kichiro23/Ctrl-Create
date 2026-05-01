import { useRef, useState } from "react";
import { useLanguage } from "@/hooks/useLanguage";
import { Link } from "react-router";
import { motion, useInView, AnimatePresence } from "framer-motion";
import {
  GraduationCap,
  BookOpen,
  BarChart3,
  FileText,
  PenTool,
  Presentation,
  CheckCircle2,
  Check,
  ArrowRight,
  MessageCircle,
  Code,
  Smartphone,
  Database,

  Send,
  Sparkles,
  Type,
  Layers,
  Globe,
  Brain,
  ChevronDown,
  Mic,
  Calendar,
} from "lucide-react";
import { useCurrency } from "@/hooks/useCurrency";
import PaymentTooltip from "@/components/PaymentTooltip";
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

function StaggerContainer({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-10% 0px" });
  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={{
        hidden: {},
        visible: { transition: { staggerChildren: 0.08 } },
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" as const } },
};

function PriceDisplay({ pricePHP, priceUSD }: { pricePHP: number; priceUSD: number }) {
  const { formatPriceFull } = useCurrency();
  const { primary, secondary } = formatPriceFull(pricePHP, priceUSD);
  return (
    <div className="flex items-baseline gap-1.5">
      <span className="text-3xl font-bold" style={{ color: "var(--text-primary)" }}>{primary}</span>
      <span className="text-sm" style={{ color: "var(--text-muted)" }}>{secondary}</span>
    </div>
  );
}

const academicServices = [
  { icon: FileText, title: "Essay Writing", desc: "Argumentative, narrative, descriptive, expository — all essay types.", color: "#007AFF" },
  { icon: Brain, title: "Reflection Paper", desc: "Deep critical analysis with personal insight integration.", color: "#34C759" },
  { icon: MessageCircle, title: "Reaction Paper", desc: "Scholarly response with structured critique format.", color: "#FF9500" },
  { icon: BarChart3, title: "Position Paper", desc: "Evidence-backed stance on complex academic issues.", color: "#AF52DE" },
  { icon: PenTool, title: "Critique Paper", desc: "Rigorous analytical review of literature, art, or research.", color: "#FF3B30" },
  { icon: BookOpen, title: "Research Paper", desc: "Full academic research with proper methodology and citations.", color: "#5856D6" },
  { icon: Layers, title: "Case Study & Case Digest", desc: "In-depth analysis and condensed legal/academic summaries.", color: "#007AFF" },
  { icon: GraduationCap, title: "Thesis & Capstone Writing", desc: "Chapter 1–5 complete: Intro, RRL, Methodology, Results, Conclusion.", color: "#34C759" },
  { icon: BarChart3, title: "Feasibility Study", desc: "Market analysis, financial projections, viability assessment.", color: "#FF9500" },
  { icon: Globe, title: "Business Plan", desc: "Comprehensive startup/enterprise planning document.", color: "#AF52DE" },
  { icon: Presentation, title: "Event Plan", desc: "Structured proposal with logistics, budgeting, and execution.", color: "#FF3B30" },
  { icon: BookOpen, title: "Literature Review", desc: "Systematic synthesis of existing research and gap identification.", color: "#5856D6" },
  { icon: FileText, title: "Case Report", desc: "Detailed documentation and analysis of specific cases.", color: "#007AFF" },
  { icon: Sparkles, title: "Movie Review", desc: "Critical film analysis with thematic and technical evaluation.", color: "#34C759" },
  { icon: Database, title: "Data Analysis & Interpretation", desc: "SPSS, statistical testing, graph generation, results discussion.", color: "#FF9500" },
];

const thesisSections = [
  { icon: Sparkles, title: "Significance of the Study", desc: "Articulating research value and contribution to the field." },
  { icon: BookOpen, title: "Background of the Study", desc: "Contextual foundation with problem statement development." },
  { icon: Type, title: "Definition of Terms", desc: "Operational and conceptual definitions with academic rigor." },
  { icon: FileText, title: "Introduction", desc: "Compelling opening with research gap and thesis statement." },
  { icon: Layers, title: "Abstract", desc: "Concise, comprehensive summary of entire research." },
  { icon: PenTool, title: "Conclusion & Recommendations", desc: "Synthesis of findings with actionable future research paths." },
];

const creativeWriting = [
  { icon: Sparkles, title: "Poetry & Poems", desc: "Original verse: free verse, structured, thematic forms." },
  { icon: Type, title: "Haiku", desc: "Traditional 5-7-5 Japanese-form nature and emotion poetry." },
  { icon: MessageCircle, title: "Tanaga", desc: "Classic Filipino four-line rhyming verse." },
  { icon: Mic, title: "Talumpati", desc: "Formal Filipino oration and public speech composition." },
  { icon: BookOpen, title: "Autobiography / Biography", desc: "Professional life-story narrative with editorial polish." },
  { icon: FileText, title: "Journal Writing", desc: "Reflective academic and personal journal entries." },
  { icon: Globe, title: "Translation (English Specialist)", desc: "Filipino-to-English and English-to-Filipino translation." },
  { icon: Layers, title: "Work Immersion Portfolio", desc: "Comprehensive OJT/work immersion documentation." },
  { icon: Sparkles, title: "Slogan & Tagline Development", desc: "Brand-aligned memorable phrases for campaigns." },
];

const devServices = [
  { icon: Code, title: "Capstone Web Systems", desc: "React, Next.js, TypeScript, TailwindCSS — full-stack with docs.", color: "#007AFF" },
  { icon: Smartphone, title: "Mobile Apps", desc: "React Native apps for Android & iOS with deployment support.", color: "#34C759" },
  { icon: Database, title: "Database Design", desc: "MySQL/MongoDB schemas, ERDs, and full documentation.", color: "#FF9500" },
  { icon: Code, title: "Coding Assignments", desc: "Python, Java, C++, JavaScript, SQL — structured and documented.", color: "#AF52DE" },
  { icon: Layers, title: "UI/UX Design", desc: "User interface and experience design for apps and websites.", color: "#FF3B30" },
  { icon: PenTool, title: "Proofreading & Editing", desc: "Grammar, style, structure, and citation format review.", color: "#5856D6" },
];

const pricingTiers = [
  {
    name: "Academic Package",
    pricePHP: 3000,
    priceUSD: 52,
    originalPricePHP: 4500,
    timeline: "7–10 business days",
    features: [
      "Up to 5 pages",
      "Contact form or demo booking",
      "Clean UI for academic evaluation",
      "Documentation support",
      "1 major revision",
      "3 minor revisions",
    ],
    highlighted: true,
  },
  {
    name: "Thesis Chapter",
    pricePHP: 4500,
    priceUSD: 78,
    originalPricePHP: 6000,
    timeline: "3–5 days per chapter",
    features: [
      "Single chapter (Ch 1–5)",
      "Grammar & formatting",
      "Turnitin report",
      "1 revision round",
      "Email support",
    ],
    highlighted: false,
  },
  {
    name: "Full Thesis",
    pricePHP: 12000,
    priceUSD: 207,
    originalPricePHP: 18000,
    timeline: "2–4 weeks",
    features: [
      "Chapters 1–5 complete",
      "SPSS analysis (if needed)",
      "Defense PPT + script",
      "Turnitin + AI reports",
      "Unlimited revisions",
      "Priority support",
    ],
    highlighted: false,
  },
  {
    name: "SPSS / Data Analysis",
    pricePHP: 3000,
    priceUSD: 52,
    originalPricePHP: 4500,
    timeline: "2–3 days",
    features: [
      "Descriptive & inferential stats",
      "Correlation / Regression / ANOVA",
      "Graphs & tables",
      "Interpretation write-up",
      "Raw data file included",
    ],
    highlighted: false,
  },
  {
    name: "Defense PPT + Script",
    pricePHP: 2500,
    priceUSD: 43,
    originalPricePHP: 4000,
    timeline: "1–2 days",
    features: [
      "Professional academic template",
      "Speaker notes for every slide",
      "Anticipated Q&A section",
      "3 revision rounds",
      "Print-ready format",
    ],
    highlighted: false,
  },
  {
    name: "Research Paper",
    pricePHP: 4500,
    priceUSD: 78,
    originalPricePHP: 6500,
    timeline: "5–7 days",
    features: [
      "Full research paper (5–10 pages)",
      "Proper citations (APA/MLA/Chicago)",
      "Abstract & keywords",
      "Turnitin report",
      "2 revision rounds",
    ],
    highlighted: false,
  },
];

const courses = [
  "IT / Computer Science",
  "Engineering",
  "Education",
  "Business / Management",
  "Accountancy",
  "Psychology",
  "Nursing / MedTech",
  "Criminology",
  "Social Work",
  "Architecture",
  "Hospitality / Tourism",
  "Political Science",
  "Communication",
  "Law / Legal Studies",
  "Agriculture",
  "Maritime",
  "Public Administration",
];

const faqs = [
  {
    q: "How fast can you deliver a thesis chapter?",
    a: "Typically 3–5 days per chapter depending on complexity. Rush delivery available for an additional fee.",
  },
  {
    q: "Do you include Turnitin and AI reports?",
    a: "Yes. Every thesis and research paper includes a Turnitin originality report and AI-detection report at no extra cost.",
  },
  {
    q: "Can I order just one section (e.g., RRL only)?",
    a: "Absolutely. All thesis sections are available à la carte. Check the Thesis Section Writing category above.",
  },
  {
    q: "What programming languages do you cover for capstone systems?",
    a: "React, Next.js, TypeScript, TailwindCSS, Python, Node.js, Java, C++, SQL, and React Native for mobile.",
  },
];

export default function Academic() {
  const { t } = useLanguage();
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <div>
      <SEO
        title="Academic Writing & Thesis Help Philippines | Cylux Code"
        description="Professional academic support for Filipino students: thesis chapters, SPSS analysis, defense PPT, essays, research papers, and capstone systems. Turnitin-ready output with fast turnaround."
        pathname="/academic"
        keywords="thesis help Philippines, academic writer Philippines, SPSS analysis, thesis chapter writing, defense PPT, research paper help, capstone project"
      />
      {/* Hero */}
      <section className="relative flex min-h-[60vh] flex-col items-start justify-start px-4 pt-32 pb-10 md:px-6 lg:px-8">
        <div className="mx-auto max-w-[900px] text-center">
          <AnimatedSection>
            <span className="eyebrow">Academic Support</span>
            <h1 className="mt-4 text-4xl font-extrabold tracking-tight md:text-6xl" style={{ color: "var(--text-primary)" }}>
              Thesis, Research & <span style={{ color: "var(--accent-blue)" }}>Academic Writing</span>
            </h1>
            <p className="mx-auto mt-4 max-w-2xl text-lg" style={{ color: "var(--text-secondary)" }}>
              {t("academic.hero.subtitle")}
            </p>
            <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
              <Link to="/contact" className="btn-primary rounded-full inline-flex items-center gap-2">
                <Calendar size={16} /> {t("academic.hero.ctaPrimary")}
              </Link>
              <Link to="/packages" className="btn-secondary rounded-full">
                {t("academic.hero.ctaSecondary")}
              </Link>
            </div>
            <div className="mt-4 flex flex-wrap items-center justify-center gap-4 text-xs" style={{ color: "var(--text-muted)" }}>
              <span className="flex items-center gap-1"><Check size={12} style={{ color: "#34C759" }} /> {t("academic.hero.trust1")}</span>
              <span className="flex items-center gap-1"><Check size={12} style={{ color: "#34C759" }} /> {t("academic.hero.trust2")}</span>
              <span className="flex items-center gap-1"><Check size={12} style={{ color: "#34C759" }} /> {t("academic.hero.trust3")}</span>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Trust Bar */}
      <section className="border-y px-4 py-8 md:px-6 lg:px-8" style={{ borderColor: "var(--border-subtle)" }}>
        <div className="mx-auto max-w-[1200px]">
          <AnimatedSection>
            <div className="flex flex-wrap items-center justify-center gap-6 text-sm" style={{ color: "var(--text-secondary)" }}>
              <span className="flex items-center gap-2"><CheckCircle2 size={16} style={{ color: "var(--accent-blue)" }} /> 50+ students helped nationwide</span>
              <span className="flex items-center gap-2"><CheckCircle2 size={16} style={{ color: "var(--accent-blue)" }} /> 5★ rated · 3–5 days per chapter</span>
              <span className="flex items-center gap-2"><CheckCircle2 size={16} style={{ color: "var(--accent-blue)" }} /> 100% confidential</span>
              <span className="flex items-center gap-2"><CheckCircle2 size={16} style={{ color: "var(--accent-blue)" }} /> Turnitin + AI reports included</span>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Academic Writing & Research */}
      <section className="px-4 py-14 md:px-6 lg:px-8" style={{ background: "var(--bg-primary)" }}>
        <div className="mx-auto max-w-[1200px]">
          <AnimatedSection className="section-heading mb-16">
            <span className="eyebrow">Academic Writing</span>
            <h2>Writing & Research Services</h2>
            <p>Full-spectrum academic support from essays to complete theses. Chapter-by-chapter or end-to-end.</p>
          </AnimatedSection>

          <StaggerContainer className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
            {academicServices.map((s) => (
              <motion.div key={s.title} variants={itemVariants} className="glass-card rounded-3xl p-5 transition-all hover:-translate-y-1">
                <div className="flex h-10 w-10 items-center justify-center rounded-2xl" style={{ background: `${s.color}15` }}>
                  <s.icon size={20} style={{ color: s.color }} />
                </div>
                <h3 className="mt-3 text-sm font-semibold" style={{ color: "var(--text-primary)" }}>{s.title}</h3>
                <p className="mt-1 text-xs leading-relaxed" style={{ color: "var(--text-secondary)" }}>{s.desc}</p>
              </motion.div>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Thesis Sections */}
      <section className="px-4 py-14 md:px-6 lg:px-8">
        <div className="mx-auto max-w-[1200px]">
          <AnimatedSection className="section-heading mb-16">
            <span className="eyebrow">Modular</span>
            <h2>Thesis Section Writing</h2>
            <p>Order individual chapters or sections à la carte. Only pay for what you need.</p>
          </AnimatedSection>

          <StaggerContainer className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {thesisSections.map((s) => (
              <motion.div key={s.title} variants={itemVariants} className="glass-card rounded-3xl p-6">
                <div className="flex h-10 w-10 items-center justify-center rounded-2xl" style={{ background: "rgba(52, 199, 89, 0.1)" }}>
                  <s.icon size={20} style={{ color: "#34C759" }} />
                </div>
                <h3 className="mt-3 text-base font-semibold" style={{ color: "var(--text-primary)" }}>{s.title}</h3>
                <p className="mt-1 text-sm" style={{ color: "var(--text-secondary)" }}>{s.desc}</p>
              </motion.div>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Creative Writing */}
      <section className="px-4 py-14 md:px-6 lg:px-8" style={{ background: "var(--bg-primary)" }}>
        <div className="mx-auto max-w-[1200px]">
          <AnimatedSection className="section-heading mb-16">
            <span className="eyebrow">Creative</span>
            <h2>Creative & Professional Writing</h2>
            <p>Original creative work, translations, and professional documents.</p>
          </AnimatedSection>

          <StaggerContainer className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {creativeWriting.map((s) => (
              <motion.div key={s.title} variants={itemVariants} className="glass-card rounded-3xl p-6">
                <div className="flex h-10 w-10 items-center justify-center rounded-2xl" style={{ background: "rgba(175, 82, 222, 0.1)" }}>
                  <s.icon size={20} style={{ color: "#AF52DE" }} />
                </div>
                <h3 className="mt-3 text-base font-semibold" style={{ color: "var(--text-primary)" }}>{s.title}</h3>
                <p className="mt-1 text-sm" style={{ color: "var(--text-secondary)" }}>{s.desc}</p>
              </motion.div>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Web & Mobile Dev */}
      <section className="px-4 py-14 md:px-6 lg:px-8">
        <div className="mx-auto max-w-[1200px]">
          <AnimatedSection className="section-heading mb-16">
            <span className="eyebrow">Development</span>
            <h2>Web & Mobile for Capstone</h2>
            <p>Full-stack systems with documentation, deployment, and 1-week post-launch support.</p>
          </AnimatedSection>

          <StaggerContainer className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {devServices.map((s) => (
              <motion.div key={s.title} variants={itemVariants} className="glass-card rounded-3xl p-6 md:p-8">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl" style={{ background: `${s.color}15` }}>
                  <s.icon size={24} style={{ color: s.color }} />
                </div>
                <h3 className="mt-4 text-lg font-semibold" style={{ color: "var(--text-primary)" }}>{s.title}</h3>
                <p className="mt-2 text-sm leading-relaxed" style={{ color: "var(--text-secondary)" }}>{s.desc}</p>
              </motion.div>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Courses */}
      <section className="px-4 py-14 md:px-6 lg:px-8" style={{ background: "var(--bg-primary)" }}>
        <div className="mx-auto max-w-[1200px]">
          <AnimatedSection className="section-heading mb-10">
            <span className="eyebrow">Coverage</span>
            <h2>Courses I Support</h2>
          </AnimatedSection>

          <AnimatedSection>
            <div className="flex flex-wrap items-center justify-center gap-3">
              {courses.map((c) => (
                <div
                  key={c}
                  className="rounded-full border px-5 py-2 text-sm font-medium"
                  style={{ borderColor: "var(--border-subtle)", color: "var(--text-secondary)" }}
                >
                  {c}
                </div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Student Discount Notice */}
      <section className="px-4 pt-8 pb-2 md:px-6 lg:px-8">
        <div className="mx-auto max-w-[1200px]">
          <div className="flex items-center gap-3 rounded-2xl border px-4 py-3 text-sm" style={{ borderColor: "var(--border-subtle)", color: "var(--text-secondary)", background: "var(--bg-surface)" }}>
            <GraduationCap size={18} style={{ color: "#34C759" }} />
            <span><strong>Student Discount Available:</strong> Students, PWDs, and Senior Citizens may apply for special discounts on top of membership savings. <Link to="/contact" className="font-semibold underline" style={{ color: "#34C759" }}>Submit an inquiry to apply →</Link></span>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="px-4 py-14 md:px-6 lg:px-8">
        <div className="mx-auto max-w-[1200px]">
          <AnimatedSection className="section-heading mb-16">
            <div className="flex items-center justify-center gap-3">
              <span className="eyebrow">Pricing</span>
              <CurrencyToggle />
            </div>
            <h2>Student-Friendly Rates</h2>
            <p>Competitive pricing with flexible payment options. GCash, Maya, PayPal, and Bank Transfer accepted.</p>
          </AnimatedSection>
          <p className="mx-auto mb-10 max-w-xl text-center text-xs" style={{ color: "var(--text-muted)" }}>
            Prices shown are starting rates. Final cost may increase based on word count, complexity, urgency, and specific requirements.
          </p>

          <StaggerContainer className="grid gap-6 md:grid-cols-3">
            {pricingTiers.map((pkg) => (
              <motion.div
                key={pkg.name}
                variants={itemVariants}
                className={`glass-card relative rounded-3xl p-6 md:p-8 ${pkg.highlighted ? "ring-1 ring-[#34C759]" : ""}`}
              >
                {pkg.highlighted && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full px-3 py-1 text-xs font-semibold text-white" style={{ background: "#34C759" }}>
                    Most Popular
                  </span>
                )}
                <h3 className="text-lg font-semibold" style={{ color: "var(--text-primary)" }}>{pkg.name}</h3>
                <div className="mt-4">
                  <PriceDisplay pricePHP={pkg.pricePHP} priceUSD={pkg.priceUSD} />
                </div>
                {(pkg as any).originalPricePHP && (
                  <p className="text-xs line-through" style={{ color: "var(--text-muted)" }}>₱{(pkg as any).originalPricePHP.toLocaleString()}</p>
                )}
                <p className="mt-1 text-xs" style={{ color: "var(--text-muted)" }}>{pkg.timeline}</p>
                <ul className="mt-6 space-y-3">
                  {pkg.features.map((f, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm">
                      <CheckCircle2 size={16} className="mt-0.5 shrink-0" style={{ color: pkg.highlighted ? "#34C759" : "var(--accent-blue)" }} />
                      <span style={{ color: "var(--text-secondary)" }}>{f}</span>
                    </li>
                  ))}
                </ul>
                <Link to="/contact" className={`mt-6 block w-full rounded-full py-3 text-center text-sm font-semibold transition-all ${pkg.highlighted ? "btn-primary" : "btn-secondary"}`}>
                  Inquire Now
                </Link>
              </motion.div>
            ))}
          </StaggerContainer>

          <AnimatedSection className="mt-12">
            <div className="glass-card mx-auto max-w-2xl rounded-3xl p-6 text-center">
              <p className="text-sm font-medium" style={{ color: "var(--text-primary)" }}>Additional Charges</p>
              <div className="mt-3 flex flex-wrap items-center justify-center gap-4 text-sm" style={{ color: "var(--text-secondary)" }}>
                <span>Per Module: <strong>₱500</strong></span>
                <span>Per Minor Revision: <strong>₱150</strong></span>
                <span>Rush Delivery: DM for quote</span>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Academic Membership CTA */}
      <section className="px-4 py-14 md:px-6 lg:px-8" style={{ background: "var(--bg-primary)" }}>
        <div className="mx-auto max-w-[800px] text-center">
          <AnimatedSection>
            <GraduationCap size={48} className="mx-auto" style={{ color: "#34C759" }} />
            <h2 className="mt-4 text-3xl font-bold tracking-tight md:text-4xl" style={{ color: "var(--text-primary)" }}>
              Need Consistent Academic Help?
            </h2>
            <p className="mx-auto mt-4 max-w-lg text-base" style={{ color: "var(--text-secondary)" }}>
              Join the Academic Support Membership. Get monthly allowances for papers, consultation calls, and discounts on every service.
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
              <Link to="/membership" className="btn-primary rounded-full" style={{ background: "#34C759" }}>
                View Academic Membership <ArrowRight size={16} className="ml-2" />
              </Link>
              <Link to="/templates" className="btn-secondary rounded-full">
                Browse Academic Commissions
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Payment Methods */}
      <section className="px-4 py-14 md:px-6 lg:px-8">
        <div className="mx-auto max-w-[800px] text-center">
          <AnimatedSection className="section-heading mb-8">
            <span className="eyebrow">Payments</span>
            <h2>Flexible Payment Options</h2>
          </AnimatedSection>
          <AnimatedSection>
            <PaymentTooltip layout="grid" className="mx-auto max-w-lg" />
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
                    <span className="text-sm font-semibold" style={{ color: "var(--text-primary)" }}>{faq.q}</span>
                    <ChevronDown
                      size={18}
                      className="shrink-0 transition-transform"
                      style={{ color: "var(--text-secondary)", transform: openFaq === i ? "rotate(180deg)" : "rotate(0deg)" }}
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
                          {faq.a}
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

      {/* CTA */}
      <section className="px-4 py-14 md:px-6 lg:px-8">
        <div className="mx-auto max-w-[800px] text-center">
          <AnimatedSection>
            <GraduationCap size={48} className="mx-auto" style={{ color: "var(--accent-blue)" }} />
            <h2 className="mt-4 text-3xl font-bold tracking-tight md:text-4xl" style={{ color: "var(--text-primary)" }}>
              {t("academic.cta.title")}
            </h2>
            <p className="mx-auto mt-4 max-w-lg text-base" style={{ color: "var(--text-secondary)" }}>
              {t("academic.cta.subtitle")}
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
              <Link to="/contact" className="btn-primary rounded-full inline-flex items-center gap-2">
                <Calendar size={16} /> {t("academic.cta.primary")}
              </Link>
              <Link to="/packages" className="btn-secondary rounded-full">
                {t("academic.cta.secondary")} <ArrowRight size={16} className="ml-2" />
              </Link>
            </div>
            <p className="mt-4 text-xs" style={{ color: "var(--text-muted)" }}>{t("academic.cta.trust")}</p>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}
