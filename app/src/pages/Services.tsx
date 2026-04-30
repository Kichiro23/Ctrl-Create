import { useRef, useState } from "react";
import { Link } from "react-router";
import { motion, useInView } from "framer-motion";
import {
  MonitorSmartphone,
  Clapperboard,
  Image,
  Mic,
  Palette,
  Facebook,
  Instagram,
  TrendingUp,
  LayoutDashboard,
  LineChart,
  Sparkles,
  BarChart3,
  ArrowRight,
  CheckCircle2,
  BookOpen,
  FileText,
  PenTool,
  GraduationCap,
  Database,
  Code,
  Layers,
  Globe,
  MessageCircle,
  Presentation,
  Type,
  Brain,
  Search,
  X,
} from "lucide-react";
import PaymentTooltip from "@/components/PaymentTooltip";
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

const serviceCategories = [
  {
    name: "Academic Writing & Research",
    icon: BookOpen,
    color: "#007AFF",
    description: "Full-spectrum academic support from essays to complete theses. Chapter-by-chapter or end-to-end.",
    link: "/academic",
    services: [
      { icon: FileText, name: "Essay Writing", desc: "Argumentative, narrative, descriptive, expository — all essay types." },
      { icon: Brain, name: "Reflection Paper", desc: "Deep critical analysis with personal insight integration." },
      { icon: MessageCircle, name: "Reaction Paper", desc: "Scholarly response with structured critique format." },
      { icon: BarChart3, name: "Position Paper", desc: "Evidence-backed stance on complex academic issues." },
      { icon: PenTool, name: "Critique Paper", desc: "Rigorous analytical review of literature, art, or research." },
      { icon: BookOpen, name: "Research Paper", desc: "Full academic research with proper methodology and citations." },
      { icon: Layers, name: "Case Study & Case Digest", desc: "In-depth analysis and condensed legal/academic summaries." },
      { icon: GraduationCap, name: "Thesis & Capstone Writing", desc: "Chapter 1–5 complete: Intro, RRL, Methodology, Results, Conclusion." },
      { icon: BarChart3, name: "Feasibility Study", desc: "Market analysis, financial projections, viability assessment." },
      { icon: Globe, name: "Business Plan", desc: "Comprehensive startup/enterprise planning document." },
      { icon: Presentation, name: "Event Plan", desc: "Structured proposal with logistics, budgeting, and execution." },
      { icon: BookOpen, name: "Literature Review", desc: "Systematic synthesis of existing research and gap identification." },
      { icon: FileText, name: "Case Report", desc: "Detailed documentation and analysis of specific cases." },
      { icon: Clapperboard, name: "Movie Review", desc: "Critical film analysis with thematic and technical evaluation." },
      { icon: Database, name: "Data Analysis & Interpretation", desc: "SPSS, statistical testing, graph generation, results discussion." },
    ],
  },
  {
    name: "Thesis Section Writing",
    icon: GraduationCap,
    color: "#34C759",
    description: "Modular thesis support — order individual chapters or sections à la carte.",
    link: "/academic",
    services: [
      { icon: Sparkles, name: "Significance of the Study", desc: "Articulating research value and contribution to the field." },
      { icon: BookOpen, name: "Background of the Study", desc: "Contextual foundation with problem statement development." },
      { icon: Type, name: "Definition of Terms", desc: "Operational and conceptual definitions with academic rigor." },
      { icon: FileText, name: "Introduction", desc: "Compelling opening with research gap and thesis statement." },
      { icon: Layers, name: "Abstract", desc: "Concise, comprehensive summary of entire research." },
      { icon: PenTool, name: "Conclusion & Recommendations", desc: "Synthesis of findings with actionable future research paths." },
    ],
  },
  {
    name: "Creative & Professional Writing",
    icon: PenTool,
    color: "#AF52DE",
    description: "Original creative work, translations, and professional documents.",
    link: "/academic",
    services: [
      { icon: Sparkles, name: "Poetry & Poems", desc: "Original verse: free verse, structured, thematic forms." },
      { icon: Type, name: "Haiku", desc: "Traditional 5-7-5 Japanese-form nature and emotion poetry." },
      { icon: MessageCircle, name: "Tanaga", desc: "Classic Filipino four-line rhyming verse." },
      { icon: Mic, name: "Talumpati", desc: "Formal Filipino oration and public speech composition." },
      { icon: BookOpen, name: "Autobiography / Biography", desc: "Professional life-story narrative with editorial polish." },
      { icon: FileText, name: "Journal Writing", desc: "Reflective academic and personal journal entries." },
      { icon: Globe, name: "Translation (English Specialist)", desc: "Filipino-to-English and English-to-Filipino translation." },
      { icon: Layers, name: "Work Immersion Portfolio", desc: "Comprehensive OJT/work immersion documentation." },
      { icon: Sparkles, name: "Slogan & Tagline Development", desc: "Brand-aligned memorable phrases for campaigns." },
    ],
  },
  {
    name: "Creative Production",
    icon: Palette,
    color: "#FF3B30",
    description: "Visual storytelling and brand assets from video to print.",
    link: "/contact",
    services: [
      { icon: Clapperboard, name: "Video Editing", desc: "Cinematic cuts, color grading, motion graphics, storytelling." },
      { icon: Image, name: "Photo Editing & Retouching", desc: "Color correction, skin retouching, background removal, compositing." },
      { icon: Palette, name: "Graphic Design", desc: "Branding, logos, visual identities, marketing collateral." },
      { icon: Sparkles, name: "Logo Design", desc: "Unique, scalable brand marks for business and academic use." },
      { icon: BarChart3, name: "Infographic Design", desc: "Data visualization and information design." },
      { icon: Presentation, name: "Poster & Academic Presentation", desc: "Conference-ready, print-quality academic layouts." },
      { icon: MonitorSmartphone, name: "PowerPoint Presentation Design", desc: "Professionally designed slides with visual hierarchy." },
      { icon: Mic, name: "Voice Overs", desc: "Professional narration for explainers, commercials, audiobooks." },
    ],
  },
  {
    name: "Digital & Technical",
    icon: Code,
    color: "#FF9500",
    description: "Full-stack development, database architecture, and technical solutions.",
    link: "/contact",
    services: [
      { icon: MonitorSmartphone, name: "Website Development", desc: "Modern, responsive websites for portfolio, business, or defense." },
      { icon: LayoutDashboard, name: "Dashboard Customization", desc: "Tailored widgets, reports, user roles, branding, integrations." },
      { icon: Code, name: "Coding Assignments", desc: "Python, Java, C++, JavaScript, SQL — structured and documented." },
      { icon: Database, name: "Database Design", desc: "ER diagrams, schema design, normalization, SQL implementation." },
      { icon: Layers, name: "UI/UX Design", desc: "User interface and experience design for apps and websites." },
      { icon: PenTool, name: "Proofreading & Editing", desc: "Grammar, style, structure, and citation format review." },
      { icon: FileText, name: "Assignments (except Math)", desc: "Structured written assignments across all non-math subjects." },
    ],
  },
  {
    name: "Digital Advertising",
    icon: TrendingUp,
    color: "#FF2D55",
    description: "Paid social campaigns that drive real engagement and conversions.",
    link: "/contact",
    services: [
      { icon: Facebook, name: "Facebook Ads", desc: "Targeted campaigns for engagement, leads, and conversions." },
      { icon: Instagram, name: "Instagram Ads", desc: "Visually-driven campaigns for brand awareness and growth." },
      { icon: TrendingUp, name: "TikTok Ads", desc: "Viral, creative short-form video advertising." },
    ],
  },
  {
    name: "Social Media & Growth",
    icon: LineChart,
    color: "#5856D6",
    description: "Organic growth, content strategy, and community management.",
    link: "/contact",
    services: [
      { icon: LineChart, name: "Social Media Growth", desc: "Authentic follower growth, engagement strategy, content planning." },
      { icon: Globe, name: "Social Media Management", desc: "Content calendar, posting, community management, analytics." },
    ],
  },
];

const whyChooseUs = [
  { icon: Sparkles, title: "Smooth", description: "Fluid animations and seamless user experiences across every deliverable." },
  { icon: Palette, title: "Customizable", description: "Every project tailored to your brand, voice, and academic requirements." },
  { icon: CheckCircle2, title: "Reliable", description: "Production-ready components with proven performance and on-time delivery." },
];

export default function Services() {
  const [searchQuery, setSearchQuery] = useState("");

  const filteredCategories = serviceCategories.map((category) => ({
    ...category,
    services: category.services.filter((service) =>
      `${service.name} ${service.desc}`.toLowerCase().includes(searchQuery.toLowerCase())
    ),
  })).filter((category) => category.services.length > 0);

  return (
    <div>
      <SEO
        title="Services | Website Development, Academic Help, Design & Video"
        description="Full catalog of creative and technical services: website development, thesis writing, SPSS analysis, graphic design, video editing, social media management, and AI automation."
        pathname="/services"
        keywords="website development Philippines, thesis help, academic writing service, graphic design freelance, video editing Philippines, social media management"
      />
      {/* Hero */}
      <section className="relative flex min-h-[50vh] flex-col items-start justify-start px-4 pt-32 pb-10 md:px-6 lg:px-8">
        <div className="relative z-10 mx-auto max-w-[900px] text-center">
          <AnimatedSection>
            <span className="eyebrow">Full Catalog</span>
            <h1 className="mt-4 text-4xl font-extrabold tracking-tight md:text-6xl" style={{ color: "var(--text-primary)" }}>
              Services
            </h1>
            <p className="mx-auto mt-4 max-w-2xl text-lg" style={{ color: "var(--text-secondary)" }}>
              From academic writing to full-stack development — everything you need to build, learn, and grow. Every service is delivered with full personal attention.
            </p>
            <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
              <Link to="/academic" className="btn-primary rounded-full">
                Academic Services <ArrowRight size={16} className="ml-2" />
              </Link>
              <Link to="/contact" className="btn-secondary rounded-full">
                Request a Quote
              </Link>
            </div>
          </AnimatedSection>

          {/* Search */}
          <AnimatedSection className="mt-10">
            <div className="relative z-20 mx-auto max-w-md">
              <div
                className="flex items-center gap-2 rounded-full border px-4 py-2.5"
                style={{ borderColor: "var(--border-subtle)", background: "var(--bg-surface)" }}
              >
                <Search size={16} style={{ color: "var(--text-muted)" }} />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search services..."
                  className="flex-1 bg-transparent text-sm outline-none"
                  style={{ color: "var(--text-primary)" }}
                />
                {searchQuery && (
                  <button onClick={() => setSearchQuery("")} style={{ color: "var(--text-muted)" }}>
                    <X size={14} />
                  </button>
                )}
              </div>
              {searchQuery && (
                <p className="mt-2 text-xs" style={{ color: "var(--text-muted)" }}>
                  {filteredCategories.reduce((acc, c) => acc + c.services.length, 0)} results for &quot;{searchQuery}&quot;
                </p>
              )}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Payment Methods */}
      <section className="border-y px-4 py-8 md:px-6 lg:px-8" style={{ borderColor: "var(--border-subtle)" }}>
        <div className="mx-auto max-w-[1200px]">
          <AnimatedSection>
            <div className="flex flex-col items-center gap-3">
              <span className="text-xs font-medium uppercase tracking-wider" style={{ color: "var(--text-muted)" }}>
                Accepted Payments
              </span>
              <PaymentTooltip layout="badges" />
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Service Categories */}
      {filteredCategories.length === 0 ? (
        <section className="px-4 py-14 text-center md:px-6 lg:px-8">
          <Search size={40} className="mx-auto" style={{ color: "var(--text-muted)" }} />
          <p className="mt-4 text-lg font-medium" style={{ color: "var(--text-primary)" }}>No services found</p>
          <p className="mt-1 text-sm" style={{ color: "var(--text-secondary)" }}>Try a different search term.</p>
        </section>
      ) : (
        filteredCategories.map((category) => (
          <section
            key={category.name}
            className="px-4 py-14 md:px-6 lg:px-8"
            style={{ background: category.name === "Digital & Technical" ? "var(--bg-primary)" : undefined }}
          >
            <div className="mx-auto max-w-[1200px]">
              <AnimatedSection className="mb-10">
                <div className="flex flex-wrap items-end justify-between gap-4">
                  <div>
                    <div className="flex items-center gap-3">
                      <div
                        className="flex h-10 w-10 items-center justify-center rounded-2xl"
                        style={{ background: `${category.color}15` }}
                      >
                        <category.icon size={20} style={{ color: category.color }} />
                      </div>
                      <h2 className="text-2xl font-bold tracking-tight md:text-3xl" style={{ color: "var(--text-primary)" }}>
                        {category.name}
                      </h2>
                    </div>
                    <p className="mt-2 max-w-xl text-sm" style={{ color: "var(--text-secondary)" }}>
                      {category.description}
                    </p>
                  </div>
                  <Link
                    to={category.link}
                    className="inline-flex items-center gap-1 text-sm font-medium transition-colors hover:gap-2"
                    style={{ color: "var(--accent-blue)" }}
                  >
                    Learn More <ArrowRight size={14} />
                  </Link>
                </div>
              </AnimatedSection>

              <StaggerContainer className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                {category.services.map((service) => (
                  <motion.div
                    key={service.name}
                    variants={itemVariants}
                    className="glass-card rounded-3xl p-5 transition-all hover:-translate-y-1"
                  >
                    <service.icon size={18} style={{ color: category.color }} />
                    <h3 className="mt-3 text-sm font-semibold" style={{ color: "var(--text-primary)" }}>
                      {service.name}
                    </h3>
                    <p className="mt-1 text-xs leading-relaxed" style={{ color: "var(--text-secondary)" }}>
                      {service.desc}
                    </p>
                  </motion.div>
                ))}
              </StaggerContainer>
            </div>
          </section>
        ))
      )}

      {/* Why Choose Us */}
      <section className="px-4 py-14 md:px-6 lg:px-8" style={{ background: "var(--bg-primary)" }}>
        <div className="mx-auto max-w-[1200px]">
          <AnimatedSection className="section-heading mb-12">
            <span className="eyebrow">Why Us</span>
            <h2>Why Work With Me</h2>
          </AnimatedSection>

          <StaggerContainer className="grid gap-6 md:grid-cols-3">
            {whyChooseUs.map((item) => (
              <motion.div key={item.title} variants={itemVariants} className="glass-card rounded-3xl p-6 md:p-8">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl" style={{ background: "rgba(0, 122, 255, 0.1)" }}>
                  <item.icon size={24} style={{ color: "var(--accent-blue)" }} />
                </div>
                <h3 className="mt-4 text-lg font-semibold" style={{ color: "var(--text-primary)" }}>{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed" style={{ color: "var(--text-secondary)" }}>{item.description}</p>
              </motion.div>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* CTA */}
      <section className="px-4 py-14 md:px-6 lg:px-8">
        <div className="mx-auto max-w-[800px] text-center">
          <AnimatedSection>
            <h2 className="text-3xl font-bold tracking-tight md:text-4xl" style={{ color: "var(--text-primary)" }}>
              Ready to Start?
            </h2>
            <p className="mx-auto mt-4 max-w-lg text-base" style={{ color: "var(--text-secondary)" }}>
              Tell me about your project and I'll put together a tailored proposal.
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
              <Link to="/contact" className="btn-primary rounded-full">
                Get a Free Quote
              </Link>
              <Link to="/packages" className="btn-secondary rounded-full">
                View Packages
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}
