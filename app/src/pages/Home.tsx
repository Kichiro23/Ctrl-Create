import { useRef, useEffect, useState } from "react";
import { Link } from "react-router";
import { motion, useInView } from "framer-motion";
import { trpc } from "@/providers/trpc";
import { useCurrency } from "@/hooks/useCurrency";
import PaymentMethods from "@/components/PaymentMethods";
import {
  ChevronDown,
  Check,
  ArrowRight,
  Clock,
  Smartphone,
  Calendar,
  MessageCircle,
  Search,
  PenTool,
  Hammer,
  Rocket,
  MonitorSmartphone,
  Image,
  Mic,
  TrendingUp,
  Crown,
  BookOpen,
  GraduationCap,
  Clapperboard,
  Palette,
  ExternalLink,
  ShieldCheck,
  Zap,
  Globe,
  Layers,
} from "lucide-react";

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
    let start = 0;
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

const packages = [
  {
    name: "Basic",
    priceUSD: 149,
    pricePHP: 8500,
    timeline: "7–10 days",
    description: "Essential Online Presence",
    features: ["Single page with 4 sections", "Mobile-responsive design", "Basic SEO setup", "1 major revision", "3 minor revisions"],
    popular: false,
  },
  {
    name: "Standard",
    priceUSD: 249,
    pricePHP: 14200,
    timeline: "10–15 days",
    description: "Professional Polish",
    features: ["Everything in Basic", "Custom layouts & animations", "Contact form integration", "Google Analytics", "2 major revisions", "5 minor revisions"],
    popular: true,
  },
  {
    name: "Premium",
    priceUSD: 699,
    pricePHP: 39800,
    timeline: "40–60 days",
    description: "Complete Digital Solution",
    features: ["Everything in Standard", "Brand color & typography system", "Backend / Booking / Ecommerce", "CMS integration", "Unlimited revisions", "Priority support"],
    popular: false,
  },
];

const processSteps = [
  { number: "01", title: "Discovery & Planning", description: "I learn your business, audience, and goals. A short kick-off call and concise brief.", icon: Search },
  { number: "02", title: "Design & Direction", description: "I craft the layout, palette, and visual identity. You approve before any code is written.", icon: PenTool },
  { number: "03", title: "Development", description: "Clean, hand-written code. Fast, responsive, SEO-ready. Every revision included.", icon: Hammer },
  { number: "04", title: "Launch & Support", description: "I deploy, hand over credentials, and stay available post-launch.", icon: Rocket },
];

const stats = [
  { value: 5, suffix: "+", label: "Years Experience", icon: Clock },
  { value: 50, suffix: "+", label: "Projects Delivered", icon: Layers },
  { value: 12, suffix: "+", label: "Websites Built", icon: MonitorSmartphone },
  { value: 100, suffix: "%", label: "Client Satisfaction", icon: ShieldCheck },
];

const testimonials = [
  { quote: "Ctrl + Create delivered our salon website in just 8 days. The design is stunning and we already got 3 bookings from it.", name: "Maria Santos", role: "Owner, Aurora Beauty Lounge" },
  { quote: "I needed a capstone portfolio for my IT defense. They understood exactly what I needed and the site looked professional.", name: "Juan Dela Cruz", role: "BSIT Graduate" },
  { quote: "The brand identity they created for our spa completely elevated our presence. Every detail was thoughtfully crafted.", name: "Anna Chen", role: "Founder, Arcadia Wellness" },
];

const templateTeasers = [
  { name: "POS Restaurant", price: 7999, image: "/portfolio-1.jpg" },
  { name: "Resort Reservation", price: 9999, image: "/portfolio-3.jpg" },
  { name: "Car Rental Dashboard", price: 9999, image: "/portfolio-4.jpg" },
  { name: "Staycation System", price: 8999, image: "/portfolio-5.jpg" },
];

export default function Home() {
  const { data: featuredProjects } = trpc.project.featured.useQuery();
  const { formatPrice } = useCurrency();

  return (
    <div>
      {/* Hero */}
      <section className="relative flex min-h-[100dvh] items-center justify-center overflow-hidden px-4">
        <div className="absolute inset-0 -z-10">
          <img src="/hero-bg.jpg" alt="" className="h-full w-full object-cover opacity-60 dark:opacity-30" />
          <div className="absolute inset-0" style={{ background: "linear-gradient(to bottom, transparent 60%, var(--bg-primary) 100%)" }} />
        </div>

        <div className="mx-auto max-w-[800px] text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }}>
            <img src="/logo-cc.png" alt="Ctrl + Create" className="mx-auto h-24 w-24 object-contain md:h-32 md:w-32" />
          </motion.div>

          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.3 }} className="mt-6 text-5xl font-extrabold tracking-tight md:text-7xl lg:text-8xl" style={{ color: "var(--text-primary)" }}>
            Ctrl + Create
          </motion.h1>

          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.4 }} className="mx-auto mt-4 max-w-lg text-lg leading-relaxed md:text-xl" style={{ color: "var(--text-secondary)" }}>
            Premium creative commissions & digital solutions crafted with precision.
          </motion.p>

          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.5 }} className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <Link to="/services" className="btn-primary rounded-full">Explore Services</Link>
            <Link to="/templates" className="btn-secondary rounded-full">View Templates</Link>
            <Link to="/contact" className="btn-secondary rounded-full">Get in Touch</Link>
          </motion.div>

          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.8 }} className="mt-3 text-sm italic" style={{ color: "var(--text-muted)" }}>
            "Where Vision Meets Precision"
          </motion.p>
        </div>

        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1 }} className="absolute bottom-8 left-1/2 -translate-x-1/2">
          <motion.div animate={{ y: [0, 6, 0] }} transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }} style={{ color: "var(--text-muted)" }}>
            <ChevronDown size={24} />
          </motion.div>
        </motion.div>
      </section>

      {/* Stats Bar */}
      <section className="border-y px-4 py-12 md:px-6 lg:px-8" style={{ borderColor: "var(--border-subtle)" }}>
        <div className="mx-auto max-w-[1200px]">
          <StaggerContainer className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
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

      {/* Services Grid */}
      <section className="px-4 py-24 md:px-6 lg:px-8">
        <div className="mx-auto max-w-[1200px]">
          <AnimatedSection className="section-heading mb-16">
            <span className="eyebrow">What I Do</span>
            <h2>What I Craft</h2>
            <p>Six core services, each delivered with Apple-level precision and care.</p>
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
      <section className="px-4 py-16 md:px-6 lg:px-8" style={{ background: "var(--bg-primary)" }}>
        <div className="mx-auto max-w-[1200px]">
          <AnimatedSection>
            <div className="glass-card mx-auto max-w-3xl rounded-3xl p-8 text-center md:p-10">
              <GraduationCap size={32} className="mx-auto" style={{ color: "var(--accent-blue)" }} />
              <h2 className="mt-4 text-2xl font-bold" style={{ color: "var(--text-primary)" }}>Need Thesis or Academic Help?</h2>
              <p className="mx-auto mt-2 max-w-lg text-sm" style={{ color: "var(--text-secondary)" }}>
                SPSS analysis, chapter writing, defense prep, and capstone systems. Student-friendly rates with flexible payment via GCash, Maya, or PayPal.
              </p>
              <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
                <Link to="/academic" className="btn-primary rounded-full">View Academic Services <ArrowRight size={16} className="ml-2" /></Link>
                <Link to="/contact" className="btn-secondary rounded-full">Get a Quote</Link>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Featured Templates */}
      <section className="px-4 py-24 md:px-6 lg:px-8">
        <div className="mx-auto max-w-[1200px]">
          <AnimatedSection className="section-heading mb-16">
            <span className="eyebrow">Marketplace</span>
            <h2>Ready-Made Systems</h2>
            <p>Explore ready-to-use systems and buy instantly.</p>
          </AnimatedSection>

          <StaggerContainer className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {templateTeasers.map((t) => (
              <motion.div key={t.name} variants={itemVariants} className="glass-card group overflow-hidden rounded-3xl">
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img src={t.image} alt={t.name} className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]" />
                  <div className="absolute inset-0 bg-black/0 transition-colors duration-300 group-hover:bg-black/40" />
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                    <span className="rounded-full bg-white/90 px-4 py-2 text-sm font-medium text-black">Quick Preview</span>
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="text-sm font-semibold" style={{ color: "var(--text-primary)" }}>{t.name}</h3>
                  <p className="mt-1 text-sm font-bold" style={{ color: "var(--accent-blue)" }}>₱{t.price.toLocaleString()}</p>
                </div>
              </motion.div>
            ))}
          </StaggerContainer>

          <div className="mt-10 text-center">
            <Link to="/templates" className="btn-secondary rounded-full">Browse All Templates <ArrowRight size={16} className="ml-2" /></Link>
          </div>
        </div>
      </section>

      {/* Membership Teaser */}
      <section className="px-4 py-24 md:px-6 lg:px-8" style={{ background: "var(--bg-primary)" }}>
        <div className="mx-auto max-w-[1200px]">
          <AnimatedSection className="section-heading mb-16">
            <span className="eyebrow">Membership</span>
            <h2>Unlock More Value</h2>
            <p>Sign up and become a Ctrl + Create member today.</p>
          </AnimatedSection>

          <AnimatedSection>
            <div className="glass-card mx-auto max-w-2xl overflow-hidden rounded-3xl p-8 md:p-10">
              <div className="flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl" style={{ background: "rgba(255, 149, 0, 0.15)" }}>
                  <Crown size={24} style={{ color: "#FF9500" }} />
                </div>
                <div>
                  <h3 className="text-xl font-bold" style={{ color: "var(--text-primary)" }}>Gold — ₱16,999 / $298</h3>
                  <p className="text-sm" style={{ color: "var(--text-muted)" }}>3 months · up to 8% off every service</p>
                </div>
              </div>
              <ul className="mt-6 grid gap-2 sm:grid-cols-2">
                {["Priority support", "1 company profile", "1 video content", "1 creative design", "1 free consultation/month", "1 month maintenance"].map((item) => (
                  <li key={item} className="flex items-center gap-2 text-sm" style={{ color: "var(--text-secondary)" }}>
                    <Check size={14} style={{ color: "#FF9500" }} />{item}
                  </li>
                ))}
              </ul>
              <div className="mt-8 flex items-center gap-3">
                <Link to="/membership" className="btn-primary flex-1 rounded-full text-center">View Membership Tiers</Link>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* How It Works */}
      <section className="px-4 py-24 md:px-6 lg:px-8">
        <div className="mx-auto max-w-[1200px]">
          <AnimatedSection className="section-heading mb-16">
            <span className="eyebrow">Process</span>
            <h2>How It Works</h2>
            <p>A focused four-step process. No technical knowledge required — just your vision.</p>
          </AnimatedSection>

          <div className="relative">
            <div className="absolute top-[60px] left-0 right-0 hidden h-px lg:block" style={{ background: "var(--border-subtle)" }} />
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
              {processSteps.map((step) => (
                <AnimatedSection key={step.number}>
                  <div className="glass-card rounded-3xl p-6 text-center md:text-left">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full text-lg font-bold text-white" style={{ background: "var(--accent-blue)" }}>
                      {step.number}
                    </div>
                    <step.icon size={20} className="mt-4 hidden md:block" style={{ color: "var(--accent-blue)" }} />
                    <h3 className="mt-3 text-base font-semibold" style={{ color: "var(--text-primary)" }}>{step.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed" style={{ color: "var(--text-secondary)" }}>{step.description}</p>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Packages */}
      <section className="px-4 py-24 md:px-6 lg:px-8" style={{ background: "var(--bg-primary)" }}>
        <div className="mx-auto max-w-[1200px]">
          <AnimatedSection className="section-heading mb-16">
            <span className="eyebrow">Website Pricing</span>
            <h2>Pick Your Package</h2>
            <p>Professional website commissions for businesses, portfolios, and academic defense.</p>
          </AnimatedSection>

          <StaggerContainer className="grid gap-6 md:grid-cols-3">
            {packages.map((pkg) => (
              <motion.div key={pkg.name} variants={itemVariants} className={`glass-card relative rounded-3xl p-6 md:p-8 ${pkg.popular ? "ring-1 ring-[var(--accent-blue)]" : ""}`}>
                {pkg.popular && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full px-3 py-1 text-xs font-semibold text-white" style={{ background: "var(--accent-blue)" }}>Most Popular</span>
                )}
                <h3 className="text-lg font-semibold" style={{ color: "var(--text-primary)" }}>{pkg.name}</h3>
                <p className="mt-1 text-sm" style={{ color: "var(--text-secondary)" }}>{pkg.description}</p>
                <div className="mt-4">
                  <span className="text-3xl font-bold" style={{ color: "var(--text-primary)" }}>{formatPrice(pkg.priceUSD, pkg.pricePHP)}</span>
                  <span className="ml-1 text-sm" style={{ color: "var(--text-muted)" }}>starting</span>
                </div>
                <p className="mt-1 text-xs" style={{ color: "var(--text-muted)" }}>{pkg.timeline}</p>
                <ul className="mt-6 space-y-3">
                  {pkg.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm">
                      <Check size={16} className="mt-0.5 shrink-0" style={{ color: "var(--accent-blue)" }} />
                      <span style={{ color: "var(--text-secondary)" }}>{feature}</span>
                    </li>
                  ))}
                </ul>
                <Link to="/contact" className={`mt-6 block w-full rounded-full py-3 text-center text-sm font-semibold transition-all ${pkg.popular ? "btn-primary" : "btn-secondary"}`}>
                  Select {pkg.name}
                </Link>
              </motion.div>
            ))}
          </StaggerContainer>

          <AnimatedSection className="mt-10 text-center">
            <Link to="/packages" className="btn-secondary rounded-full">View Full Pricing Details <ArrowRight size={16} className="ml-2" /></Link>
          </AnimatedSection>
        </div>
      </section>

      {/* Portfolio Showcase */}
      <section className="px-4 py-24 md:px-6 lg:px-8">
        <div className="mx-auto max-w-[1200px]">
          <AnimatedSection className="section-heading mb-16">
            <span className="eyebrow">Portfolio</span>
            <h2>Selected Work</h2>
            <p>Personal projects, templates, and confidential client work.</p>
          </AnimatedSection>

          <StaggerContainer className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {(featuredProjects || []).slice(0, 6).map((project) => (
              <motion.div key={project.id} variants={itemVariants} className="glass-card group overflow-hidden rounded-3xl">
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img src={project.imageUrl || "/portfolio-1.jpg"} alt={project.title} className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" />
                  <div className="absolute inset-0 bg-black/0 transition-colors duration-300 group-hover:bg-black/40" />
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                    <span className="rounded-full bg-white/90 px-4 py-2 text-sm font-medium text-black">View Project</span>
                  </div>
                </div>
                <div className="p-5">
                  <span className="text-xs font-medium uppercase tracking-wider" style={{ color: "var(--accent-blue)" }}>{project.category}</span>
                  <h3 className="mt-1 text-base font-semibold" style={{ color: "var(--text-primary)" }}>{project.title}</h3>
                  <p className="mt-1 line-clamp-2 text-sm" style={{ color: "var(--text-secondary)" }}>{project.description}</p>
                </div>
              </motion.div>
            ))}
          </StaggerContainer>

          <div className="mt-10 text-center">
            <Link to="/portfolio" className="btn-secondary rounded-full">View All Projects <ArrowRight size={16} className="ml-2" /></Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="px-4 py-24 md:px-6 lg:px-8" style={{ background: "var(--bg-primary)" }}>
        <div className="mx-auto max-w-[1200px]">
          <AnimatedSection className="section-heading mb-16">
            <span className="eyebrow">Testimonials</span>
            <h2>Client Words</h2>
            <p>Real feedback from real clients I've worked with.</p>
          </AnimatedSection>

          <StaggerContainer className="grid gap-6 md:grid-cols-3">
            {testimonials.map((t) => (
              <motion.div key={t.name} variants={itemVariants} className="glass-card rounded-3xl p-6 md:p-8">
                <MessageCircle size={24} style={{ color: "var(--accent-blue)" }} className="mb-4" />
                <p className="text-sm leading-relaxed" style={{ color: "var(--text-secondary)" }}>"{t.quote}"</p>
                <div className="mt-6 border-t pt-4" style={{ borderColor: "var(--border-subtle)" }}>
                  <p className="text-sm font-semibold" style={{ color: "var(--text-primary)" }}>{t.name}</p>
                  <p className="text-xs" style={{ color: "var(--text-muted)" }}>{t.role}</p>
                </div>
              </motion.div>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="px-4 py-24 md:px-6 lg:px-8">
        <div className="mx-auto max-w-[800px] text-center">
          <AnimatedSection>
            <h2 className="text-3xl font-bold tracking-tight md:text-4xl" style={{ color: "var(--text-primary)" }}>Want a Site Like These?</h2>
            <p className="mx-auto mt-4 max-w-lg text-base" style={{ color: "var(--text-secondary)" }}>
              Every project was built at a fixed price with a fast turnaround. Your brand deserves the same.
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
              <Link to="/contact" className="btn-primary rounded-full"><Calendar size={16} className="mr-2" />Get a Free Quote</Link>
              <Link to="/portfolio" className="btn-secondary rounded-full">View All Work</Link>
            </div>
            <p className="mt-4 text-xs" style={{ color: "var(--text-muted)" }}>No commitment required · Free consultation · Response within 24 hours</p>
            <div className="mt-6 flex justify-center">
              <PaymentMethods layout="badges" />
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}
