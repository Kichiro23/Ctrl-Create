import { useRef, useEffect, useState } from "react";
import { useLanguage } from "@/hooks/useLanguage";
import { Link } from "react-router";
import { motion, useInView } from "framer-motion";
import { useCurrency } from "@/hooks/useCurrency";
import PaymentTooltip from "@/components/PaymentTooltip";
import AnimatedBackground from "@/components/AnimatedBackground";
import SEO from "@/components/SEO";
import {
  ChevronDown,
  Check,
  ArrowRight,
  Clock,
  Calendar,
  MonitorSmartphone,
  Mic,
  TrendingUp,
  Crown,
  BookOpen,
  GraduationCap,
  Clapperboard,
  Palette,
  ShieldCheck,
  Layers,
  Building2,
  Star,
  MessageCircle,
  Send,
  Rocket,
  Handshake,
  User,
  Wallet,
  Zap,
  RefreshCw,
} from "lucide-react";
import { websiteTemplates, academicTemplates } from "@/data/templates";
import Template3DCard from "@/components/Template3DCard";

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
      variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.08 } } }}
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

function CountUp({ end, suffix = "" }: { end: number; suffix?: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (!isInView) return;
    const duration = 1500;
    const startTime = performance.now();
    const animate = (now: number) => {
      const progress = Math.min((now - startTime) / duration, 1);
      setCount(Math.floor(progress * end));
      if (progress < 1) requestAnimationFrame(animate);
    };
    requestAnimationFrame(animate);
  }, [isInView, end]);

  return <span ref={ref}>{count}{suffix}</span>;
}

const services = [
  { icon: BookOpen, name: "Academic Writing", description: "Thesis, essays, research papers, SPSS analysis, and full capstone support.", color: "#007AFF", link: "/academic" },
  { icon: MonitorSmartphone, name: "Website Development", description: "Modern, responsive websites built with React, Next.js, and Tailwind.", color: "#007AFF", link: "/services" },
  { icon: Clapperboard, name: "Video Editing", description: "Cinematic cuts, color grading, motion graphics, and storytelling.", color: "#FF3B30", link: "/services" },
  { icon: Palette, name: "Graphic Design", description: "Branding, logos, UI/UX, marketing collateral, and visual identities.", color: "#AF52DE", link: "/services" },
  { icon: Mic, name: "Voice Overs", description: "Clear, professional narration for explainers, commercials, and academic content.", color: "#34C759", link: "/services" },
  { icon: TrendingUp, name: "Social Media Growth", description: "Authentic audience building, content strategy, and paid advertising.", color: "#FF2D55", link: "/services" },
];

const stats = [
  { value: 5, suffix: "+", label: "Years Experience", icon: Clock },
  { value: 100, suffix: "+", label: "Projects Delivered", icon: Layers },
  { value: 25, suffix: "+", label: "Websites Built", icon: MonitorSmartphone },
  { value: 100, suffix: "%", label: "Client Satisfaction", icon: ShieldCheck },
  { value: 50, suffix: "+", label: "Students Helped", icon: GraduationCap },
  { value: 12, suffix: "+", label: "Industries Served", icon: Building2 },
];

const testimonials = [
  {
    quote: "Ang ganda ng website na ginawa para sa barangay namin. Ngayon hindi na kami nagkakagulo sa pag-issue ng clearance. Highly recommended!",
    name: "Joselito Reyes",
    role: "Barangay Kagawad, Quezon City",
    rating: 5,
  },
  {
    quote: "My full thesis Ch 1-5 was delivered in 3 weeks. The SPSS analysis was spot-on and my panel approved it on the first defense. Salamat po!",
    name: "Angelica De Guzman",
    role: "BS Psychology, PUP",
    rating: 5,
  },
  {
    quote: "We needed a POS system for our water refilling station. Clean interface, easy to use, and our delivery tracking improved instantly. Worth every peso.",
    name: "Mark Anthony Cruz",
    role: "Owner, AquaPure Refilling Station",
    rating: 5,
  },
  {
    quote: "Nag-panic ako kasi 1 week na lang defense ko, wala pa akong Chapter 2. Pero sinagutan nila agad at natapos in 4 days. Pasado ako!",
    name: "Kimberly Ann Bautista",
    role: "BSED Major in English, UST",
    rating: 5,
  },
  {
    quote: "The e-learning platform they built for our school is incredible. Teachers can now upload modules and students can track progress. Very professional work.",
    name: "Dr. Roberto Villanueva",
    role: "School Administrator, Cavite",
    rating: 5,
  },
  {
    quote: "Nagpagawa ako ng business plan para sa feasibility study namin. Ang galing ng financial projections — parang may MBA na gumawa. Sulit na sulit.",
    name: "Darlene Mae Sarmiento",
    role: "BSBA Entrepreneurship, DLSU",
    rating: 5,
  },
  {
    quote: "Our cooperative management system is finally digitized. Member tracking, loan applications, and dividend computation are all automated now. Life-changing.",
    name: "Ernesto Dimaculangan",
    role: "Chairman, Samahang Magbubukid Cooperative",
    rating: 5,
  },
  {
    quote: "Ang bilis mag-reply at sobrang patient kahit madaming revisions. Yung defense PPT ko ang ganda ng design, nagustuhan ng buong panel. Thank you po!",
    name: "Jasmine Marie Toledo",
    role: "BS Nursing, Cebu Doctors' University",
    rating: 5,
  },
];

function PriceDisplay({ pricePHP, priceUSD }: { pricePHP: number; priceUSD: number }) {
  const { formatPriceFull } = useCurrency();
  const { primary, secondary } = formatPriceFull(pricePHP, priceUSD);
  return (
    <div className="flex items-baseline gap-2">
      <span className="text-3xl font-bold" style={{ color: "var(--text-primary)" }}>{primary}</span>
      <span className="text-sm" style={{ color: "var(--text-muted)" }}>{secondary}</span>
    </div>
  );
}

export default function Home() {
  const { t } = useLanguage();
  const featuredWebsiteTemplates = websiteTemplates.slice(0, 4);
  const featuredAcademicTemplates = academicTemplates.slice(0, 4);

  return (
    <div>
      <SEO
        title="Cylux Code | Premium Creative Commissions & Digital Solutions Philippines"
        description="Freelance full stack developer & creative professional based in the Philippines. Website development, thesis/academic help, graphic design, video editing, and AI automation."
        pathname="/"
        keywords="website developer Philippines, thesis help Philippines, academic writer, freelance web developer, graphic design Philippines, video editing, React developer, SPSS analysis, capstone project help"
        structuredData={[
          {
            "@context": "https://schema.org",
            "@type": "Organization",
            name: "Cylux Code",
            url: "https://cylux-code.vercel.app",
            logo: "https://cylux-code.vercel.app/images/assets/logo-cc.png",
            description: "Premium creative commissions and digital solutions crafted with precision.",
            founder: {
              "@type": "Person",
              name: "Rommel Andrei De Leon",
            },
            address: {
              "@type": "PostalAddress",
              addressLocality: "Malolos",
              addressRegion: "Bulacan",
              addressCountry: "PH",
            },
            contactPoint: {
              "@type": "ContactPoint",
              email: "rommeld216@gmail.com",
              telephone: "+63-962-790-5910",
              contactType: "customer service",
              areaServed: "PH",
              availableLanguage: ["English", "Filipino"],
            },
            sameAs: [
              "https://github.com/Kichiro23",
              "https://www.linkedin.com/in/rommel-andrei-de-leon-36ba8b291/",
              "https://www.instagram.com/drei_sanity",
              "https://www.facebook.com/andrei.deleon23",
            ],
          },
          {
            "@context": "https://schema.org",
            "@type": "WebSite",
            name: "Cylux Code",
            url: "https://cylux-code.vercel.app",
            potentialAction: {
              "@type": "SearchAction",
              target: "https://cylux-code.vercel.app/templates?q={search_term_string}",
              "query-input": "required name=search_term_string",
            },
          },
          {
            "@context": "https://schema.org",
            "@type": "ProfessionalService",
            name: "Cylux Code",
            description: "Website development, academic writing, graphic design, video editing, and AI automation services.",
            areaServed: {
              "@type": "Country",
              name: "Philippines",
            },
            provider: {
              "@type": "Organization",
              name: "Cylux Code",
            },
            serviceType: ["Website Development", "Academic Writing", "Graphic Design", "Video Editing", "AI Automation"],
          },
        ]}
      />
      {/* Hero */}
      <section id="hero" className="relative flex min-h-[70dvh] items-center justify-start overflow-hidden px-4 pt-24 pb-20">
        <AnimatedBackground />

        <div className="mx-auto max-w-[800px] text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }}>
            <img src="/images/assets/logo-cc.png" alt="Cylux Code" className="mx-auto h-36 w-36 object-contain md:h-48 md:w-48" />
          </motion.div>

          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.3 }} className="mt-3 text-5xl font-extrabold tracking-tight md:text-7xl lg:text-8xl" style={{ color: "var(--text-primary)" }}>
            Cylux Code
          </motion.h1>

          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.4 }} className="mx-auto mt-2 max-w-xl text-lg leading-relaxed md:text-xl" style={{ color: "var(--text-secondary)" }}>
            {t("home.hero.subheadline")}
          </motion.p>

          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.5 }} className="mt-5 flex flex-wrap items-center justify-center gap-4">
            <Link to="/contact" className="btn-primary rounded-full flex items-center gap-2">{t("home.hero.ctaPrimary")} <ArrowRight size={16} /></Link>
            <Link to="/services" className="btn-secondary rounded-full">{t("home.hero.ctaSecondary")}</Link>
          </motion.div>

          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.8 }} className="mt-5 flex flex-wrap items-center justify-center gap-4 text-xs" style={{ color: "var(--text-muted)" }}>
            <span className="flex items-center gap-1"><Check size={12} style={{ color: "#34C759" }} /> {t("home.hero.trust1")}</span>
            <span className="flex items-center gap-1"><Check size={12} style={{ color: "#34C759" }} /> {t("home.hero.trust2")}</span>
            <span className="flex items-center gap-1"><Check size={12} style={{ color: "#34C759" }} /> {t("home.hero.trust3")}</span>
          </motion.div>
        </div>

        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1 }} className="absolute bottom-6 left-1/2 -translate-x-1/2">
          <motion.div animate={{ y: [0, 6, 0] }} transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }} style={{ color: "var(--text-muted)" }}>
            <ChevronDown size={20} />
          </motion.div>
        </motion.div>
      </section>

      {/* Stats Bar */}
      <section id="stats" className="border-y px-4 py-14 md:px-6 lg:px-8" style={{ borderColor: "var(--border-subtle)" }}>
        <div className="mx-auto max-w-[1200px]">
          <StaggerContainer className="grid grid-cols-2 gap-6 lg:grid-cols-3 xl:grid-cols-6">
            {stats.map((stat) => (
              <motion.div key={stat.label} variants={itemVariants} className="flex items-center justify-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-full" style={{ background: "var(--bg-surface-solid)", border: "1px solid var(--border-subtle)" }}>
                  <stat.icon size={22} style={{ color: "var(--accent-blue)" }} />
                </div>
                <div>
                  <p className="text-2xl font-bold" style={{ color: "var(--text-primary)" }}>
                    <CountUp end={stat.value} suffix={stat.suffix} />
                  </p>
                  <p className="text-sm" style={{ color: "var(--text-secondary)" }}>{stat.label}</p>
                </div>
              </motion.div>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* How It Works — Process Clarity + Micro-commitments */}
      <section id="process" className="px-4 py-14 md:px-6 lg:px-8" style={{ background: "var(--bg-primary)" }}>
        <div className="mx-auto max-w-[1200px]">
          <AnimatedSection className="section-heading mb-12">
            <span className="eyebrow">{t("home.process.eyebrow")}</span>
            <h2>{t("home.process.title")}</h2>
            <p>{t("home.process.subtitle")}</p>
          </AnimatedSection>
          <StaggerContainer className="grid grid-cols-2 gap-4 lg:grid-cols-4 lg:gap-6">
            {[
              { step: "1", icon: MessageCircle, title: t("home.process.step1.title"), desc: t("home.process.step1.desc") },
              { step: "2", icon: Send, title: t("home.process.step2.title"), desc: t("home.process.step2.desc") },
              { step: "3", icon: Rocket, title: t("home.process.step3.title"), desc: t("home.process.step3.desc") },
              { step: "4", icon: Handshake, title: t("home.process.step4.title"), desc: t("home.process.step4.desc") },
            ].map((s) => (
              <motion.div key={s.step} variants={itemVariants} className="relative text-center">
                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl" style={{ background: "var(--bg-surface-solid)", border: "1px solid var(--border-subtle)" }}>
                  <s.icon size={24} style={{ color: "var(--accent-blue)" }} />
                </div>
                <h3 className="mt-4 text-sm font-semibold" style={{ color: "var(--text-primary)" }}>{s.title}</h3>
                <p className="mt-1 text-xs leading-relaxed" style={{ color: "var(--text-secondary)" }}>{s.desc}</p>
              </motion.div>
            ))}
          </StaggerContainer>
          <AnimatedSection className="mt-10 text-center">
            <Link to="/contact" className="btn-primary rounded-full inline-flex items-center gap-2">{t("home.process.cta")} <ArrowRight size={16} /></Link>
            <p className="mt-3 text-xs" style={{ color: "var(--text-muted)" }}>{t("home.process.ctaNote")}</p>
          </AnimatedSection>
        </div>
      </section>

      {/* Services Grid */}
      <section id="services" className="px-4 py-14 md:px-6 lg:px-8">
        <div className="mx-auto max-w-[1200px]">
          <AnimatedSection className="section-heading mb-16">
            <span className="eyebrow">{t("home.services.eyebrow")}</span>
            <h2>{t("home.services.title")}</h2>
            <p>{t("home.services.subtitle")}</p>
          </AnimatedSection>

          <StaggerContainer className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <motion.div key={service.name} variants={itemVariants} className="glass-card glass-card-hover rounded-3xl p-6 md:p-8">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl" style={{ background: `${service.color}15` }}>
                  <service.icon size={24} style={{ color: service.color }} />
                </div>
                <h3 className="mt-4 text-lg font-semibold" style={{ color: "var(--text-primary)" }}>{service.name}</h3>
                <p className="mt-2 text-sm leading-relaxed" style={{ color: "var(--text-secondary)" }}>{service.description}</p>
                <Link to={service.link} className="mt-4 inline-flex items-center gap-1 text-sm font-medium transition-colors hover:gap-2" style={{ color: "var(--accent-blue)" }}>
                  Learn More <ArrowRight size={14} />
                </Link>
              </motion.div>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Academic CTA */}
      <section className="px-4 py-14 md:px-6 lg:px-8" style={{ background: "var(--bg-primary)" }}>
        <div className="mx-auto max-w-[1200px]">
          <AnimatedSection>
            <div className="glass-card mx-auto max-w-3xl rounded-3xl p-8 text-center md:p-10">
              <GraduationCap size={32} className="mx-auto" style={{ color: "var(--accent-blue)" }} />
              <h2 className="mt-4 text-2xl font-bold" style={{ color: "var(--text-primary)" }}>{t("home.academic.title")}</h2>
              <p className="mx-auto mt-2 max-w-lg text-sm" style={{ color: "var(--text-secondary)" }}>
                {t("home.academic.desc")}
              </p>
              <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
                <Link to="/contact" className="btn-primary rounded-full">{t("home.academic.ctaPrimary")} <ArrowRight size={16} className="ml-2" /></Link>
                <Link to="/academic" className="btn-secondary rounded-full">{t("home.academic.ctaSecondary")}</Link>
              </div>
              <p className="mt-3 text-xs" style={{ color: "var(--text-muted)" }}>{t("home.academic.note")}</p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Featured Website Templates */}
      <section id="templates" className="px-4 py-14 md:px-6 lg:px-8">
        <div className="mx-auto max-w-[1200px]">
          <AnimatedSection className="section-heading mb-16">
            <span className="eyebrow">{t("home.templates.eyebrow")}</span>
            <h2>{t("home.templates.title")}</h2>
            <p>{t("home.templates.subtitle")}</p>
          </AnimatedSection>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {featuredWebsiteTemplates.map((t, i) => (
              <Template3DCard key={t.id} template={t} index={i} />
            ))}
          </div>
          <AnimatedSection className="mt-10 text-center">
            <Link to="/templates" className="btn-secondary rounded-full inline-flex items-center gap-2">{t("home.templates.cta")} <ArrowRight size={16} /></Link>
            <p className="mt-3 text-xs" style={{ color: "var(--text-muted)" }}>{t("home.templates.note")}</p>
          </AnimatedSection>
        </div>
      </section>

      {/* Featured Academic Commissions */}
      <section className="px-4 py-14 md:px-6 lg:px-8" style={{ background: "var(--bg-primary)" }}>
        <div className="mx-auto max-w-[1200px]">
          <AnimatedSection className="section-heading mb-16">
            <span className="eyebrow">{t("home.academicComm.eyebrow")}</span>
            <h2>{t("home.academicComm.title")}</h2>
            <p>{t("home.academicComm.subtitle")}</p>
          </AnimatedSection>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {featuredAcademicTemplates.map((t, i) => (
              <Template3DCard key={t.id} template={t} index={i} />
            ))}
          </div>

          <div className="mt-10 text-center">
            <Link to="/templates" className="btn-secondary rounded-full">{t("home.academicComm.cta")} <ArrowRight size={16} className="ml-2" /></Link>
          </div>
        </div>
      </section>

      {/* Membership Teaser */}
      <section id="membership" className="px-4 py-14 md:px-6 lg:px-8">
        <div className="mx-auto max-w-[1200px]">
          <AnimatedSection className="section-heading mb-16">
            <span className="eyebrow">{t("home.membership.eyebrow")}</span>
            <h2>{t("home.membership.title")}</h2>
            <p>{t("home.membership.subtitle")}</p>
          </AnimatedSection>

          <AnimatedSection>
            <div className="grid gap-6 md:grid-cols-2">
              {/* Website Building Membership */}
              <div className="glass-card mx-auto w-full max-w-xl overflow-hidden rounded-3xl p-8 md:p-10">
                <div className="flex items-center gap-3">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl" style={{ background: "rgba(255, 149, 0, 0.15)" }}>
                    <Crown size={24} style={{ color: "#FF9500" }} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold" style={{ color: "var(--text-primary)" }}>{t("home.membership.webTitle")}</h3>
                    <p className="text-sm" style={{ color: "var(--text-muted)" }}>{t("home.membership.webDesc")}</p>
                  </div>
                </div>
                <div className="mt-4">
                  <PriceDisplay pricePHP={22500} priceUSD={388} />
                  <p className="text-xs" style={{ color: "var(--text-muted)" }}>Gold Tier · 3 months · up to 20% off</p>
                </div>
                <ul className="mt-6 grid gap-2 sm:grid-cols-2">
                  {["1 professional 5-page website", "1 logo design", "2 video contents", "2 consultations/month", "1 month maintenance", "Google Business setup"].map((item) => (
                    <li key={item} className="flex items-center gap-2 text-sm" style={{ color: "var(--text-secondary)" }}>
                      <Check size={14} style={{ color: "#FF9500" }} />{item}
                    </li>
                  ))}
                </ul>
                <div className="mt-8 flex items-center gap-3">
                  <Link to="/membership" className="btn-primary flex-1 rounded-full text-center">{t("home.membership.viewWeb")}</Link>
                </div>
                <p className="mt-3 text-center text-xs" style={{ color: "var(--text-muted)" }}>{t("home.membership.note")}</p>
              </div>

              {/* Academic Support Membership */}
              <div className="glass-card mx-auto w-full max-w-xl overflow-hidden rounded-3xl p-8 md:p-10">
                <div className="flex items-center gap-3">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl" style={{ background: "rgba(52, 199, 89, 0.15)" }}>
                    <GraduationCap size={24} style={{ color: "#34C759" }} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold" style={{ color: "var(--text-primary)" }}>{t("home.membership.acadTitle")}</h3>
                    <p className="text-sm" style={{ color: "var(--text-muted)" }}>{t("home.membership.acadDesc")}</p>
                  </div>
                </div>
                <div className="mt-4">
                  <PriceDisplay pricePHP={4500} priceUSD={78} />
                  <p className="text-xs" style={{ color: "var(--text-muted)" }}>Dean&apos;s Lister · Monthly · up to 15% off</p>
                </div>
                <ul className="mt-6 grid gap-2 sm:grid-cols-2">
                  {["4 papers/assignments per month", "2 consultation calls", "1 free defense PPT", "15% discount on thesis", "Priority support", "Turnitin reports"].map((item) => (
                    <li key={item} className="flex items-center gap-2 text-sm" style={{ color: "var(--text-secondary)" }}>
                      <Check size={14} style={{ color: "#34C759" }} />{item}
                    </li>
                  ))}
                </ul>
                <div className="mt-8 flex items-center gap-3">
                  <Link to="/membership" className="btn-primary flex-1 rounded-full text-center" style={{ background: "#34C759" }}>{t("home.membership.viewAcad")}</Link>
                </div>
                <p className="mt-3 text-center text-xs" style={{ color: "var(--text-muted)" }}>{t("home.membership.note")}</p>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="px-4 py-14 md:px-6 lg:px-8">
        <div className="mx-auto max-w-[1200px]">
          <AnimatedSection className="section-heading mb-16">
            <span className="eyebrow">{t("home.testimonials.eyebrow")}</span>
            <h2>{t("home.testimonials.title")}</h2>
            <p>{t("home.testimonials.subtitle")}</p>
          </AnimatedSection>

          <StaggerContainer className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {testimonials.map((t) => (
              <motion.div key={t.name} variants={itemVariants} className="glass-card rounded-3xl p-5 md:p-6">
                <div className="mb-3 flex items-center gap-0.5">
                  {Array.from({ length: t.rating }).map((_, i) => (
                    <Star key={i} size={14} fill="#FF9500" style={{ color: "#FF9500" }} />
                  ))}
                </div>
                <p className="text-sm leading-relaxed" style={{ color: "var(--text-secondary)" }}>"{t.quote}"</p>
                <div className="mt-5 border-t pt-4" style={{ borderColor: "var(--border-subtle)" }}>
                  <p className="text-sm font-semibold" style={{ color: "var(--text-primary)" }}>{t.name}</p>
                  <p className="text-xs" style={{ color: "var(--text-muted)" }}>{t.role}</p>
                </div>
              </motion.div>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Why Choose Me */}
      <section className="px-4 py-14 md:px-6 lg:px-8" style={{ background: "var(--bg-primary)" }}>
        <div className="mx-auto max-w-[1200px]">
          <AnimatedSection className="section-heading mb-12">
            <span className="eyebrow">{t("home.why.eyebrow")}</span>
            <h2>{t("home.why.title")}</h2>
            <p>{t("home.why.subtitle")}</p>
          </AnimatedSection>
          <StaggerContainer className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { icon: User, title: t("home.why.1.title"), desc: t("home.why.1.desc") },
              { icon: Wallet, title: t("home.why.2.title"), desc: t("home.why.2.desc") },
              { icon: Zap, title: t("home.why.3.title"), desc: t("home.why.3.desc") },
              { icon: RefreshCw, title: t("home.why.4.title"), desc: t("home.why.4.desc") },
            ].map((item) => (
              <motion.div key={item.title} variants={itemVariants} className="glass-card rounded-3xl p-6 text-center">
                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-2xl" style={{ background: "rgba(0, 122, 255, 0.1)" }}>
                  <item.icon size={24} style={{ color: "var(--accent-blue)" }} />
                </div>
                <h3 className="mt-4 text-sm font-semibold" style={{ color: "var(--text-primary)" }}>{item.title}</h3>
                <p className="mt-2 text-xs leading-relaxed" style={{ color: "var(--text-secondary)" }}>{item.desc}</p>
              </motion.div>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Contact CTA */}
      <section id="contact" className="px-4 py-14 md:px-6 lg:px-8" style={{ background: "var(--bg-primary)" }}>
        <div className="mx-auto max-w-[800px] text-center">
          <AnimatedSection>
            <h2 className="text-3xl font-bold tracking-tight md:text-4xl" style={{ color: "var(--text-primary)" }}>{t("home.contact.title")}</h2>
            <p className="mx-auto mt-4 max-w-lg text-base" style={{ color: "var(--text-secondary)" }}>
              {t("home.contact.subtitle")}
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
              <Link to="/contact" className="btn-primary rounded-full"><Calendar size={16} className="mr-2" />{t("home.contact.ctaPrimary")}</Link>
              <Link to="/portfolio" className="btn-secondary rounded-full">{t("home.contact.ctaSecondary")}</Link>
            </div>
            <p className="mt-4 text-xs" style={{ color: "var(--text-muted)" }}>{t("home.contact.trust")}</p>
            <div className="mt-6 flex justify-center">
              <PaymentTooltip layout="badges" />
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}
