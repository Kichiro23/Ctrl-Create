import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  Code, Database, Cloud, Shield, Palette, Wrench, Briefcase, GraduationCap, Award,
  MapPin, Mail, Phone, Clock, Globe, Cpu, Layers, Zap, CheckCircle2, ExternalLink,
  Linkedin, Instagram, Facebook, Github, MessageCircle, Send, BookOpen, PenTool, Presentation,
  ShoppingCart, FileText, Sparkles, Megaphone, Car,
} from "lucide-react";
import PaymentTooltip from "@/components/PaymentTooltip";

function AnimatedSection({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-10% 0px" });
  return (
    <motion.div ref={ref} initial={{ opacity: 0, y: 30 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }} className={className}>
      {children}
    </motion.div>
  );
}

function StaggerContainer({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-10% 0px" });
  return (
    <motion.div ref={ref} initial="hidden" animate={isInView ? "visible" : "hidden"} variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.08 } } }} className={className}>
      {children}
    </motion.div>
  );
}

const itemVariants = { hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" as const } } };

const stats = [
  { value: "5+", label: "Years Experience", icon: Clock },
  { value: "PH", label: "Based in Philippines", icon: MapPin },
  { value: "100+", label: "Projects Delivered", icon: Briefcase },
  { value: "25+", label: "Websites Built", icon: Code },
  { value: "50+", label: "Students Helped", icon: GraduationCap },
  { value: "12+", label: "Industries Served", icon: Globe },
];

const technicalSkills = [
  { icon: Code, title: "Programming", color: "#007AFF", items: ["Python (Advanced)", "JavaScript / TypeScript", "FastAPI", "SQL", "REST API Development", "API Integration", "Prompt Engineering"] },
  { icon: Layers, title: "Full Stack Development", color: "#34C759", items: ["React 19", "TypeScript", "Node.js", "Express", "MongoDB", "REST APIs", "JWT Authentication", "OAuth 2.0"] },
  { icon: Database, title: "Database & Cloud", color: "#FF9500", items: ["MySQL", "MongoDB Atlas", "Relational Schema Design", "CRUD Operations", "Pinecone", "FAISS", "Supabase", "Weaviate", "Chroma"] },
  { icon: Cloud, title: "Cloud & Infrastructure", color: "#AF52DE", items: ["AWS", "GCP", "Azure", "Docker", "Kubernetes", "CI/CD Pipelines", "Web Hosting", "Server Administration", "Performance Monitoring"] },
  { icon: Wrench, title: "IT & Systems", color: "#FF3B30", items: ["Network Setup & Troubleshooting", "Hardware/Software Support", "Website Management", "System Administration", "Technical Troubleshooting"] },
  { icon: Shield, title: "Security", color: "#5856D6", items: ["Cybersecurity Fundamentals", "HIPAA Compliance Awareness", "Data Privacy", "Prompt Injection Mitigation"] },
  { icon: Palette, title: "Creative & UI", color: "#FF2D55", items: ["Figma (UI/UX Prototyping)", "Graphic Design", "Video Editing", "Social Media Content Production", "Tailwind CSS", "Chart.js", "Leaflet.js"] },
  { icon: Wrench, title: "Tools & Platforms", color: "#5AC8FA", items: ["MS Office Suite", "Google Workspace", "Git / Version Control", "Vite", "N8N", "Zapier", "Google Gemini AI", "Technical Documentation"] },
];

const writingSkills = [
  { icon: BookOpen, title: "Academic Writing", color: "#007AFF", items: ["Essay Writing", "Thesis & Capstone", "Research Papers", "SPSS Analysis", "Case Studies", "Literature Reviews", "Feasibility Studies", "Business Plans"] },
  { icon: PenTool, title: "Creative Writing", color: "#AF52DE", items: ["Poetry & Haiku", "Tanaga", "Talumpati", "Translation", "Slogan Development", "Journal Writing", "Autobiography"] },
  { icon: Presentation, title: "Presentation Design", color: "#FF9500", items: ["Defense PPT", "Academic Posters", "PowerPoint Design", "Infographics", "Script Coaching", "Event Planning"] },
];

const aiTools = [
  { icon: Cpu, title: "AI & LLM", color: "#007AFF", items: ["Claude", "LangChain", "LlamaIndex", "RAG Pipeline Design", "Prompt Engineering", "LLM Deployment", "NLP & Document Processing"] },
  { icon: Zap, title: "AI Agents & Frameworks", color: "#34C759", items: ["CrewAI", "AutoGen", "Claude MCP", "Anthropic API", "Multi-Agent Pipelines", "Agentic Tool Use"] },
  { icon: Zap, title: "Automation", color: "#FF9500", items: ["N8N", "Zapier", "Make", "REST API Integration", "Webhooks", "Shopify", "ActiveCampaign"] },
  { icon: Code, title: "Backend & Databases", color: "#AF52DE", items: ["Python", "FastAPI", "MySQL", "Pinecone", "Weaviate", "Supabase pgvector", "FAISS", "Chroma", "TypeScript", "JavaScript"] },
  { icon: Cloud, title: "Cloud & Infrastructure", color: "#FF3B30", items: ["AWS", "GCP", "Azure", "Docker", "Kubernetes", "CI/CD", "Render", "Fly.io"] },
  { icon: Palette, title: "Video & Creative", color: "#FF2D55", items: ["Adobe Premiere Pro", "After Effects", "Photoshop", "Filmora", "CapCut"] },
  { icon: Layers, title: "Design & Dev", color: "#5856D6", items: ["Figma", "Canva", "VS Code", "HTML", "CSS", "Cisco Packet Tracer", "Linux", "Remote Support Tools"] },
  { icon: Globe, title: "Marketing & Productivity", color: "#5AC8FA", items: ["Meta Business Suite", "Buffer", "Later", "Notion", "Trello", "Google Workspace", "MS Office"] },
];

const workExperience = [
  { role: "IT & Technical Support Specialist", type: "Freelance", period: "2020 – Present", bullets: ["Delivered end-to-end IT services to 4+ clients — network setup, troubleshooting, website management, performance monitoring.", "Managed cloud-hosted environments ensuring uptime and data integrity."] },
  { role: "Social Media Manager", type: "Freelance", period: "2022 – 2024", bullets: ["Managed accounts for 5+ brands across food, retail, and events.", "Consistently met weekly content deadlines across multiple clients."] },
  { role: "Graphic Designer & Video Editor", type: "Freelance", period: "2020 – 2024", bullets: ["Produced 200+ graphic and video outputs for clients in food, retail, events, and service industries."] },
];

const projects = [
  { title: "CARP (Climate & Air Research Platform)", role: "Lead Developer (Full Stack)", period: "2025 – 2026", bullets: ["Developed WeatherCarp, a full-stack environmental monitoring platform at Bulacan State University.", "React 19 + TypeScript frontend, Node.js/Express backend, MongoDB Atlas, 5+ APIs integrated.", "JWT + Google OAuth 2.0, deployed on Hostinger/Render.", "Leaflet.js maps, Chart.js visualizations, AI chatbot, multi-domain monitoring."], link: "https://weathercarp.com", stack: "React, TypeScript, Tailwind CSS, Node.js, Express, MongoDB, Vite" },
  { title: "E-commerce Platform for Local Retail", role: "Full Stack Developer", period: "2024", bullets: ["Built a complete e-commerce platform with product catalog, cart, checkout, and Stripe payment integration.", "React + Node.js + MySQL stack with JWT authentication and admin dashboard.", "Deployed with CI/CD pipeline and performance optimized for mobile."], stack: "React, Node.js, MySQL, Stripe, Tailwind CSS" },
  { title: "Barangay Document Management System", role: "Full Stack Developer", period: "2024", bullets: ["Developed a comprehensive barangay portal with resident database, clearance requests, and blotter system.", "Role-based access control for admin, staff, and residents.", "Automated document generation and SMS notification integration."], stack: "Next.js, Prisma, PostgreSQL, Tailwind CSS" },
  { title: "AI-Powered Content Generator", role: "AI Engineer", period: "2023 – 2024", bullets: ["Built a content generation tool using Python, OpenAI API, and LangChain for automated blog and social media content.", "Implemented RAG pipeline for context-aware responses with vector database integration.", "Deployed as a web app with FastAPI backend and React frontend."], stack: "Python, FastAPI, OpenAI API, LangChain, React, Pinecone" },
  { title: "Social Media Automation Suite", role: "Automation Engineer", period: "2023", bullets: ["Created an automation workflow using N8N and Meta APIs for content scheduling and analytics reporting.", "Integrated with Buffer and Later APIs for multi-platform posting.", "Reduced client content management time by 60%."], stack: "N8N, Meta APIs, Zapier, Python, REST APIs" },
  { title: "Restaurant POS & Inventory System", role: "Full Stack Developer", period: "2023", bullets: ["Developed a restaurant POS with table management, kitchen display, and real-time inventory tracking.", "Integrated GCash and Maya payment APIs for seamless checkout.", "Built with responsive design for tablet and desktop use."], stack: "React, Node.js, MySQL, Socket.io, Tailwind CSS" },
  { title: "Salon Booking & CRM", role: "Full Stack Developer", period: "2023", bullets: ["Built a salon management system with appointment booking, staff scheduling, and customer CRM.", "Automated SMS reminders and loyalty points system.", "Admin dashboard with revenue analytics and service performance reports."], stack: "Next.js, Prisma, PostgreSQL, Tailwind CSS, Twilio" },
  { title: "Database Management System", role: "Independent Project", period: "2021 – 2022", bullets: ["Built a MySQL-based inventory management system with full CRUD operations and relational schemas."] },
  { title: "Software System Designer", role: "Independent Project", period: "2023 – 2024", bullets: ["Designed end-to-end system architecture, UI/UX layout, and user flow.", "Produced complete technical documentation and stakeholder presentations."] },
  { title: "Python Application Developer", role: "Independent Project", period: "2021 – 2022", bullets: ["Developed a modular mathematics converter in Python applying OOP principles."] },
];

const certifications = [
  { org: "Cisco Networking Academy", items: ["Introduction to Packet Tracer", "Networking Basics", "Introduction to Cybersecurity"] },
  { org: "Huawei ICT Academy", items: ["Introduction to AI", "Introduction to Cloud Computing", "Networking Protocols & Internet Basics", "Network Communications & Network Access Basics", "HCIA v3.5", "Ethical Hacker", "Overview of Artificial Intelligence"] },
];

const coreAttributes = [
  "Strong attention to detail and accuracy",
  "Self-motivated with minimal supervision required",
  "Reliable, punctual, and deadline-driven",
  "Manages multiple tasks simultaneously",
  "Works effectively under pressure",
  "Quick learner and strong problem-solver",
];

const socialLinks = [
  { icon: Linkedin, label: "LinkedIn", href: "https://www.linkedin.com/in/rommel-andrei-de-leon-36ba8b291/" },
  { icon: Instagram, label: "Instagram", href: "https://www.instagram.com/drei_sanity" },
  { icon: Facebook, label: "Facebook", href: "https://www.facebook.com/andrei.deleon23" },
  { icon: Github, label: "GitHub", href: "https://github.com/Kichiro23" },
  { icon: MessageCircle, label: "Discord", href: "https://discord.com/users/drei_sanity" },
  { icon: Send, label: "Telegram", href: "https://t.me/drei_sanity" },
];

export default function About() {
  return (
    <div>
      {/* Hero */}
      <section className="relative px-4 pb-12 pt-28 md:px-6 lg:px-8">
        <div className="mx-auto max-w-[1200px]">
          <AnimatedSection className="text-center">
            <span className="eyebrow">About Me</span>
            <h1 className="mt-4 text-4xl font-extrabold tracking-tight md:text-6xl" style={{ color: "var(--text-primary)" }}>
              Rommel Andrei De Leon
            </h1>
            <p className="mx-auto mt-4 max-w-3xl text-lg" style={{ color: "var(--text-secondary)" }}>
              Full Stack Developer · Solutions Expert · IT & Multimedia Specialist · AI Automation Engineer · Freelance Creative & Technical Professional
            </p>
            <div className="mx-auto mt-4 flex flex-wrap items-center justify-center gap-4 text-sm" style={{ color: "var(--text-muted)" }}>
              <span className="flex items-center gap-1"><MapPin size={14} /> Malolos, Bulacan, Philippines</span>
              <span className="flex items-center gap-1"><Mail size={14} /> rommeld216@gmail.com</span>
              <span className="flex items-center gap-1"><Phone size={14} /> +63 962 790 5910</span>
              <span className="flex items-center gap-1"><Clock size={14} /> PHT (UTC+8)</span>
            </div>
            <p className="mt-3 text-sm font-medium" style={{ color: "var(--accent-blue)" }}>Open to Remote, Part-Time & Project-Based Work</p>
          </AnimatedSection>

          <StaggerContainer className="mt-12 grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-6">
            {stats.map((stat) => (
              <motion.div key={stat.label} variants={itemVariants} className="glass-card rounded-3xl p-6 text-center">
                <stat.icon size={24} className="mx-auto" style={{ color: "var(--accent-blue)" }} />
                <p className="mt-3 text-2xl font-bold" style={{ color: "var(--text-primary)" }}>{stat.value}</p>
                <p className="mt-1 text-xs" style={{ color: "var(--text-secondary)" }}>{stat.label}</p>
              </motion.div>
            ))}
          </StaggerContainer>

          <AnimatedSection className="mt-8">
            <div className="flex flex-wrap items-center justify-center gap-3">
              {socialLinks.map((link) => (
                <a key={link.label} href={link.href} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 rounded-full border px-4 py-2 text-sm font-medium transition-colors hover:text-[var(--accent-blue)]" style={{ borderColor: "var(--border-subtle)", color: "var(--text-secondary)" }}>
                  <link.icon size={16} />{link.label}
                </a>
              ))}
            </div>
          </AnimatedSection>

          <AnimatedSection className="mt-4">
            <div className="flex justify-center">
              <PaymentTooltip layout="badges" />
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Technical Skills */}
      <section className="px-4 py-14 md:px-6 lg:px-8" style={{ background: "var(--bg-primary)" }}>
        <div className="mx-auto max-w-[1200px]">
          <AnimatedSection className="section-heading mb-12">
            <span className="eyebrow">Expertise</span>
            <h2>Technical Skills</h2>
            <p>A broad toolkit built across years of freelance, academic, and independent work.</p>
          </AnimatedSection>

          <StaggerContainer className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {technicalSkills.map((skill) => (
              <motion.div key={skill.title} variants={itemVariants} className="glass-card rounded-3xl p-6">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl" style={{ background: `${skill.color}15` }}>
                  <skill.icon size={24} style={{ color: skill.color }} />
                </div>
                <h3 className="mt-4 text-base font-semibold" style={{ color: "var(--text-primary)" }}>{skill.title}</h3>
                <ul className="mt-3 space-y-1.5">
                  {skill.items.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm" style={{ color: "var(--text-secondary)" }}>
                      <CheckCircle2 size={14} className="mt-0.5 shrink-0" style={{ color: skill.color }} />{item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Writing & Academic Skills */}
      <section className="px-4 py-14 md:px-6 lg:px-8">
        <div className="mx-auto max-w-[1200px]">
          <AnimatedSection className="section-heading mb-12">
            <span className="eyebrow">Specializations</span>
            <h2>Writing & Academic Expertise</h2>
            <p>Beyond code — deep expertise in academic writing, creative production, and research methodology.</p>
          </AnimatedSection>

          <StaggerContainer className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {writingSkills.map((skill) => (
              <motion.div key={skill.title} variants={itemVariants} className="glass-card rounded-3xl p-6">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl" style={{ background: `${skill.color}15` }}>
                  <skill.icon size={24} style={{ color: skill.color }} />
                </div>
                <h3 className="mt-4 text-base font-semibold" style={{ color: "var(--text-primary)" }}>{skill.title}</h3>
                <ul className="mt-3 space-y-1.5">
                  {skill.items.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm" style={{ color: "var(--text-secondary)" }}>
                      <CheckCircle2 size={14} className="mt-0.5 shrink-0" style={{ color: skill.color }} />{item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Tools & Technology */}
      <section className="px-4 py-14 md:px-6 lg:px-8" style={{ background: "var(--bg-primary)" }}>
        <div className="mx-auto max-w-[1200px]">
          <AnimatedSection className="section-heading mb-12">
            <span className="eyebrow">Stack</span>
            <h2>Tools & Technology</h2>
            <p>AI, automation, backend, cloud, creative, and productivity tools I work with daily.</p>
          </AnimatedSection>

          <StaggerContainer className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {aiTools.map((tool) => (
              <motion.div key={tool.title} variants={itemVariants} className="glass-card rounded-3xl p-6">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl" style={{ background: `${tool.color}15` }}>
                  <tool.icon size={24} style={{ color: tool.color }} />
                </div>
                <h3 className="mt-4 text-base font-semibold" style={{ color: "var(--text-primary)" }}>{tool.title}</h3>
                <ul className="mt-3 space-y-1.5">
                  {tool.items.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm" style={{ color: "var(--text-secondary)" }}>
                      <CheckCircle2 size={14} className="mt-0.5 shrink-0" style={{ color: tool.color }} />{item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Work Experience */}
      <section className="px-4 py-14 md:px-6 lg:px-8">
        <div className="mx-auto max-w-[1200px]">
          <AnimatedSection className="section-heading mb-12">
            <span className="eyebrow">Background</span>
            <h2>Work Experience</h2>
            <p>Freelance creative and technical professional since 2021.</p>
          </AnimatedSection>

          <div className="mx-auto max-w-3xl space-y-6">
            {workExperience.map((job) => (
              <AnimatedSection key={job.role}>
                <div className="glass-card rounded-3xl p-6 md:p-8">
                  <div className="flex flex-wrap items-start justify-between gap-2">
                    <div>
                      <h3 className="text-lg font-semibold" style={{ color: "var(--text-primary)" }}>{job.role}</h3>
                      <p className="text-sm font-medium" style={{ color: "var(--accent-blue)" }}>{job.type}</p>
                    </div>
                    <span className="rounded-full px-3 py-1 text-xs font-medium" style={{ background: "var(--bg-surface-solid)", color: "var(--text-secondary)", border: "1px solid var(--border-subtle)" }}>{job.period}</span>
                  </div>
                  <ul className="mt-4 space-y-2">
                    {job.bullets.map((bullet, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm leading-relaxed" style={{ color: "var(--text-secondary)" }}>
                        <div className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full" style={{ background: "var(--accent-blue)" }} />{bullet}
                      </li>
                    ))}
                  </ul>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Projects */}
      <section className="px-4 py-14 md:px-6 lg:px-8" style={{ background: "var(--bg-primary)" }}>
        <div className="mx-auto max-w-[1200px]">
          <AnimatedSection className="section-heading mb-12">
            <span className="eyebrow">Projects</span>
            <h2>Academic & Independent Projects</h2>
            <p>Real systems built from scratch — from university platforms to personal experiments.</p>
          </AnimatedSection>

          <div className="mx-auto max-w-3xl space-y-6">
            {projects.map((project) => (
              <AnimatedSection key={project.title}>
                <div className="glass-card rounded-3xl p-6 md:p-8">
                  <div className="flex flex-wrap items-start justify-between gap-2">
                    <div>
                      <h3 className="text-lg font-semibold" style={{ color: "var(--text-primary)" }}>{project.title}</h3>
                      <p className="text-sm font-medium" style={{ color: "var(--accent-blue)" }}>{project.role}</p>
                    </div>
                    <span className="rounded-full px-3 py-1 text-xs font-medium" style={{ background: "var(--bg-surface-solid)", color: "var(--text-secondary)", border: "1px solid var(--border-subtle)" }}>{project.period}</span>
                  </div>
                  <ul className="mt-4 space-y-2">
                    {project.bullets.map((bullet, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm leading-relaxed" style={{ color: "var(--text-secondary)" }}>
                        <div className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full" style={{ background: "var(--accent-blue)" }} />{bullet}
                      </li>
                    ))}
                  </ul>
                  {project.link && (
                    <div className="mt-4 flex items-center gap-2 text-sm" style={{ color: "var(--accent-blue)" }}>
                      <ExternalLink size={14} />
                      <a href={project.link} target="_blank" rel="noopener noreferrer" className="font-medium hover:underline">{project.link}</a>
                    </div>
                  )}
                  {project.stack && <p className="mt-2 text-xs" style={{ color: "var(--text-muted)" }}>Stack: {project.stack}</p>}
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="px-4 py-14 md:px-6 lg:px-8">
        <div className="mx-auto max-w-[1200px]">
          <AnimatedSection className="section-heading mb-12">
            <span className="eyebrow">Credentials</span>
            <h2>Certifications</h2>
            <p>Continuous learning through Cisco and Huawei academies.</p>
          </AnimatedSection>

          <StaggerContainer className="mx-auto grid max-w-3xl gap-6 md:grid-cols-2">
            {certifications.map((cert) => (
              <motion.div key={cert.org} variants={itemVariants} className="glass-card rounded-3xl p-6">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl" style={{ background: "rgba(0, 122, 255, 0.1)" }}>
                  <Award size={24} style={{ color: "var(--accent-blue)" }} />
                </div>
                <h3 className="mt-4 text-base font-semibold" style={{ color: "var(--text-primary)" }}>{cert.org}</h3>
                <ul className="mt-3 space-y-1.5">
                  {cert.items.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm" style={{ color: "var(--text-secondary)" }}>
                      <CheckCircle2 size={14} className="mt-0.5 shrink-0" style={{ color: "var(--accent-blue)" }} />{item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Core Attributes */}
      <section className="px-4 py-14 md:px-6 lg:px-8" style={{ background: "var(--bg-primary)" }}>
        <div className="mx-auto max-w-[1200px]">
          <AnimatedSection className="section-heading mb-12">
            <span className="eyebrow">Strengths</span>
            <h2>Core Attributes</h2>
            <p>What makes me reliable on every project.</p>
          </AnimatedSection>

          <AnimatedSection>
            <div className="mx-auto grid max-w-3xl gap-4 sm:grid-cols-2">
              {coreAttributes.map((attr) => (
                <div key={attr} className="flex items-center gap-3 rounded-3xl border px-5 py-4" style={{ borderColor: "var(--border-subtle)" }}>
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full" style={{ background: "rgba(0, 122, 255, 0.1)" }}>
                    <CheckCircle2 size={16} style={{ color: "var(--accent-blue)" }} />
                  </div>
                  <span className="text-sm font-medium" style={{ color: "var(--text-primary)" }}>{attr}</span>
                </div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Payment Methods */}
      <section className="px-4 py-14 md:px-6 lg:px-8">
        <div className="mx-auto max-w-[800px] text-center">
          <AnimatedSection className="section-heading mb-8">
            <span className="eyebrow">Payments</span>
            <h2>Accepted Payment Methods</h2>
          </AnimatedSection>
          <AnimatedSection>
            <PaymentTooltip layout="grid" className="mx-auto max-w-lg" />
          </AnimatedSection>
        </div>
      </section>

      {/* CTA */}
      <section className="px-4 py-14 md:px-6 lg:px-8" style={{ background: "var(--bg-primary)" }}>
        <div className="mx-auto max-w-[800px] text-center">
          <AnimatedSection>
            <h2 className="text-3xl font-bold tracking-tight md:text-4xl" style={{ color: "var(--text-primary)" }}>Let's Work Together</h2>
            <p className="mx-auto mt-4 max-w-lg text-base" style={{ color: "var(--text-secondary)" }}>
              Open to remote, part-time, and project-based opportunities. Whether you need a full-stack application, automation pipeline, thesis support, or creative production — let's talk.
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
              <a href="mailto:rommeld216@gmail.com" className="btn-primary rounded-full"><Mail size={16} className="mr-2" />Send an Email</a>
              <a href="https://www.linkedin.com/in/rommel-andrei-de-leon-36ba8b291/" target="_blank" rel="noopener noreferrer" className="btn-secondary rounded-full"><Linkedin size={16} className="mr-2" />Connect on LinkedIn</a>
            </div>
            <p className="mt-4 text-xs" style={{ color: "var(--text-muted)" }}>Response within 24 hours · PHT (UTC+8)</p>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}
