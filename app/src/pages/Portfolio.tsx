import { useState, useRef } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { Link } from "react-router";
import { trpc } from "@/providers/trpc";
import { ExternalLink, Lock, Code, Database, Cloud, Cpu, ArrowRight } from "lucide-react";

const categories = ["All", "Personal Projects", "Templates", "Confidential"];

const personalProjects = [
  {
    id: 101,
    title: "WeatherCarp (CARP)",
    category: "Personal Projects",
    description: "Full-stack environmental monitoring platform with real-time weather, air quality data, AI chatbot, and Leaflet.js maps. React 19 + Node.js + MongoDB.",
    imageUrl: "/portfolio-1.jpg",
    link: "https://weathercarp.com",
  },
  {
    id: 102,
    title: "MySQL Inventory DBMS",
    category: "Personal Projects",
    description: "MySQL-based inventory management system with full CRUD operations, relational schemas, and structured data flows.",
    imageUrl: "/portfolio-2.jpg",
  },
  {
    id: 103,
    title: "Python Math Converter",
    category: "Personal Projects",
    description: "Modular mathematics converter built with OOP principles — encapsulation, abstraction, and reusable class structures.",
    imageUrl: "/portfolio-3.jpg",
  },
  {
    id: 104,
    title: "Software System Design",
    category: "Personal Projects",
    description: "End-to-end system architecture, UI/UX layout, and user flow design with complete technical documentation.",
    imageUrl: "/portfolio-4.jpg",
  },
];

const availableTemplates = [
  {
    id: 201,
    title: "POS Restaurant System",
    category: "Templates",
    description: "Complete restaurant POS with ordering, kitchen display, and reporting. ₱7,999",
    imageUrl: "/portfolio-1.jpg",
  },
  {
    id: 202,
    title: "Resort Reservation System",
    category: "Templates",
    description: "Booking engine with room management, payment tracking, and guest portal. ₱9,999",
    imageUrl: "/portfolio-3.jpg",
  },
  {
    id: 203,
    title: "Car Rental Dashboard",
    category: "Templates",
    description: "Fleet management, booking calendar, and customer CRM. ₱9,999",
    imageUrl: "/portfolio-4.jpg",
  },
  {
    id: 204,
    title: "Staycation System",
    category: "Templates",
    description: "Property listing, booking, and host management platform. ₱8,999",
    imageUrl: "/portfolio-5.jpg",
  },
];

const confidentialProjects = [
  { id: 301, title: "Aurora Beauty Lounge", category: "Confidential", description: "Client website — confidential project", imageUrl: "/portfolio-6.jpg" },
  { id: 302, title: "Arcadia Wellness Spa", category: "Confidential", description: "Brand identity & website — confidential project", imageUrl: "/portfolio-7.jpg" },
  { id: 303, title: "Fitness Studio Booking", category: "Confidential", description: "Booking system — confidential project", imageUrl: "/portfolio-8.jpg" },
  { id: 304, title: "Local Retail Shop", category: "Confidential", description: "E-commerce site — confidential project", imageUrl: "/portfolio-2.jpg" },
];

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

export default function Portfolio() {
  const [activeCategory, setActiveCategory] = useState("All");
  const { data: dbProjects, isLoading } = trpc.project.list.useQuery(
    activeCategory === "All" ? undefined : { category: activeCategory }
  );

  const allItems = [
    ...personalProjects,
    ...availableTemplates,
    ...confidentialProjects,
    ...(dbProjects || []),
  ];

  const filtered = activeCategory === "All"
    ? allItems
    : allItems.filter((p) => p.category === activeCategory);

  return (
    <div>
      {/* Hero */}
      <section className="px-4 pb-8 pt-32 md:px-6 lg:px-8">
        <div className="mx-auto max-w-[1200px]">
          <AnimatedSection className="text-center">
            <span className="eyebrow">Portfolio</span>
            <h1 className="mt-4 text-4xl font-extrabold tracking-tight md:text-5xl" style={{ color: "var(--text-primary)" }}>
              Selected Work
            </h1>
            <p className="mx-auto mt-4 max-w-xl text-base" style={{ color: "var(--text-secondary)" }}>
              Personal projects, available templates, and confidential client work. Every project built with precision.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Filter Tabs */}
      <section className="px-4 pt-8 md:px-6 lg:px-8">
        <div className="mx-auto max-w-[1200px]">
          <div className="flex flex-wrap items-center justify-center gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`rounded-full px-4 py-2 text-sm font-medium transition-all ${
                  activeCategory === cat ? "text-white" : "border"
                }`}
                style={
                  activeCategory === cat
                    ? { background: "var(--accent-blue)" }
                    : { borderColor: "var(--border-subtle)", color: "var(--text-secondary)" }
                }
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="px-4 py-12 md:px-6 lg:px-8">
        <div className="mx-auto max-w-[1200px]">
          {isLoading ? (
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {[1, 2, 3, 4, 5, 6].map((i) => (
                <div key={i} className="glass-card animate-pulse overflow-hidden rounded-3xl">
                  <div className="aspect-[4/3] bg-gray-200 dark:bg-gray-800" />
                  <div className="p-5">
                    <div className="h-3 w-16 rounded bg-gray-200 dark:bg-gray-800" />
                    <div className="mt-2 h-5 w-3/4 rounded bg-gray-200 dark:bg-gray-800" />
                    <div className="mt-2 h-3 w-full rounded bg-gray-200 dark:bg-gray-800" />
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <motion.div layout className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              <AnimatePresence mode="popLayout">
                {filtered.map((project) => (
                  <motion.div
                    key={project.id}
                    layout
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.3 }}
                    className="glass-card group overflow-hidden rounded-3xl"
                  >
                    <div className="relative aspect-[4/3] overflow-hidden">
                      <img
                        src={project.imageUrl || `/portfolio-${(project.id % 8) + 1}.jpg`}
                        alt={project.title}
                        className={`h-full w-full object-cover transition-transform duration-500 ${project.category === "Confidential" ? "scale-100 blur-sm" : "group-hover:scale-105"}`}
                      />
                      {project.category === "Confidential" && (
                        <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/50">
                          <Lock size={28} className="text-white/90" />
                          <span className="mt-2 text-xs font-semibold uppercase tracking-wider text-white/90">Confidential</span>
                        </div>
                      )}
                      {project.category === "Templates" && (
                        <div className="absolute inset-0 flex items-center justify-center bg-black/0 transition-colors duration-300 group-hover:bg-black/40">
                          <div className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                            <Link to="/templates" className="flex items-center gap-2 rounded-full bg-white/90 px-4 py-2 text-sm font-medium text-black">
                              View in Templates <ArrowRight size={14} />
                            </Link>
                          </div>
                        </div>
                      )}
                      {project.link && project.category !== "Confidential" && (
                        <div className="absolute inset-0 flex items-center justify-center bg-black/0 transition-colors duration-300 group-hover:bg-black/40">
                          <div className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                            <a href={project.link} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 rounded-full bg-white/90 px-4 py-2 text-sm font-medium text-black">
                              Visit Site <ExternalLink size={14} />
                            </a>
                          </div>
                        </div>
                      )}
                    </div>
                    <div className="p-5">
                      <span className="text-xs font-medium uppercase tracking-wider" style={{ color: "var(--accent-blue)" }}>
                        {project.category}
                      </span>
                      <h3 className="mt-1 text-base font-semibold" style={{ color: "var(--text-primary)" }}>
                        {project.title}
                      </h3>
                      <p className="mt-1 line-clamp-2 text-sm" style={{ color: "var(--text-secondary)" }}>
                        {project.description}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
            </motion.div>
          )}

          {filtered.length === 0 && (
            <div className="py-20 text-center">
              <p style={{ color: "var(--text-muted)" }}>No projects found in this category.</p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
