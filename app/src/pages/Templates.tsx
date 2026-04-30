import { useState } from "react";
import { Link } from "react-router";
import { motion, AnimatePresence } from "framer-motion";
import {
  ExternalLink, ShieldCheck, Search, X,
  MonitorSmartphone, GraduationCap, Tag, ArrowRight,
  SlidersHorizontal, Star, ChevronDown,
} from "lucide-react";
import PaymentTooltip from "@/components/PaymentTooltip";
import SearchBar from "@/components/SearchBar";
import { useDebouncedSearch } from "@/components/SearchBar";
import CurrencyToggle from "@/components/CurrencyToggle";
import { useCurrency } from "@/hooks/useCurrency";
import { templates, templateCategories, type TemplateCategoryFilter, type Template } from "@/data/templates";
import SEO from "@/components/SEO";

function PriceDisplay({ pricePHP, priceUSD }: { pricePHP: number; priceUSD: number }) {
  const { formatPriceFull } = useCurrency();
  const { primary, secondary } = formatPriceFull(pricePHP, priceUSD);
  return (
    <div className="flex items-baseline gap-1.5">
      <span className="text-lg font-bold" style={{ color: "var(--accent-blue)" }}>{primary}</span>
      <span className="text-xs" style={{ color: "var(--text-muted)" }}>{secondary}</span>
    </div>
  );
}

function AnimatedSection({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-10% 0px" }}
      transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

function StaggerContainer({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-10% 0px" }}
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

const categoryIcons: Record<TemplateCategoryFilter, React.ElementType> = {
  All: Search,
  "Website Templates": MonitorSmartphone,
  "Academic Commissions": GraduationCap,
};

const categoryColors: Record<TemplateCategoryFilter, string> = {
  All: "var(--accent-blue)",
  "Website Templates": "#007AFF",
  "Academic Commissions": "#34C759",
};

type SortOption = "recommended" | "price-asc" | "price-desc" | "name-asc" | "name-desc";

const sortOptions: { value: SortOption; label: string }[] = [
  { value: "recommended", label: "Recommended" },
  { value: "price-asc", label: "Price: Low to High" },
  { value: "price-desc", label: "Price: High to Low" },
  { value: "name-asc", label: "Name: A-Z" },
  { value: "name-desc", label: "Name: Z-A" },
];

function sortTemplates(items: Template[], sortBy: SortOption): Template[] {
  const sorted = [...items];
  switch (sortBy) {
    case "recommended":
      return sorted.sort((a, b) => {
        if (a.recommended === b.recommended) return 0;
        return a.recommended ? -1 : 1;
      });
    case "price-asc":
      return sorted.sort((a, b) => a.pricePHP - b.pricePHP);
    case "price-desc":
      return sorted.sort((a, b) => b.pricePHP - a.pricePHP);
    case "name-asc":
      return sorted.sort((a, b) => a.name.localeCompare(b.name));
    case "name-desc":
      return sorted.sort((a, b) => b.name.localeCompare(a.name));
    default:
      return sorted;
  }
}

export default function Templates() {
  const [activeCategory, setActiveCategory] = useState<TemplateCategoryFilter>("All");
  const [selectedTemplate, setSelectedTemplate] = useState<Template | null>(null);
  const [sortBy, setSortBy] = useState<SortOption>("recommended");
  const [showSortMenu, setShowSortMenu] = useState(false);

  const searchFn = (item: Template, query: string) => {
    const text = `${item.name} ${item.description} ${item.subcategory} ${item.tags.join(" ")}`.toLowerCase();
    return text.includes(query);
  };

  const { query, setQuery, results } = useDebouncedSearch(templates, searchFn, 300);

  const filtered = results.filter((t) => {
    if (activeCategory === "All") return true;
    return t.category === activeCategory;
  });

  const sorted = sortTemplates(filtered, sortBy);

  return (
    <div>
      <SEO
        title="Website Templates & Academic Commissions | Ctrl + Create"
        description="Ready-made website templates for businesses and academic commissions for students. POS systems, barangay portals, school management, thesis packages, and more."
        pathname="/templates"
        keywords="website templates Philippines, POS system template, barangay portal template, school management system, thesis commission, academic commission"
      />
      {/* Hero */}
      <section className="relative flex min-h-[40vh] flex-col items-start justify-start px-4 pt-36 pb-10 md:px-6 lg:px-8">
        <div className="relative z-10 mx-auto max-w-[900px] text-center">
          <AnimatedSection>
            <div className="flex items-center justify-center gap-3">
              <span className="eyebrow">Marketplace</span>
              <CurrencyToggle />
            </div>
            <h1 className="mt-4 text-4xl font-extrabold tracking-tight md:text-6xl" style={{ color: "var(--text-primary)" }}>
              Ready-Made Systems & Academic Packages
            </h1>
            <p className="mx-auto mt-4 max-w-2xl text-lg" style={{ color: "var(--text-secondary)" }}>
              Find everything you need — from business systems to academic commissions. Send an inquiry and I'll tailor a solution for you.
            </p>
          </AnimatedSection>

          <AnimatedSection className="mt-10">
            <div className="relative z-20 mx-auto max-w-md">
              <SearchBar
                placeholder="Search templates, commissions, tags..."
                value={query}
                onChange={setQuery}
                className="relative z-20"
              />
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Trust badges */}
      <section className="px-4 pb-8 md:px-6 lg:px-8">
        <div className="mx-auto max-w-[1200px]">
          <AnimatedSection>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <div className="flex items-center gap-2 rounded-full border px-4 py-2 text-sm" style={{ borderColor: "var(--border-subtle)", color: "var(--text-secondary)" }}>
                <ShieldCheck size={16} style={{ color: "var(--accent-blue)" }} />
                GCash · Maya · PayPal · Google Pay
              </div>
              <div className="flex items-center gap-2 rounded-full border px-4 py-2 text-sm" style={{ borderColor: "var(--border-subtle)", color: "var(--text-secondary)" }}>
                <MonitorSmartphone size={16} style={{ color: "var(--accent-blue)" }} />
                Customization Available
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Category Tabs */}
      <section className="px-4 py-4 md:px-6 lg:px-8">
        <div className="mx-auto max-w-[1200px]">
          <AnimatedSection>
            <div className="flex flex-wrap items-center justify-center gap-2">
              {templateCategories.map((cat) => {
                const Icon = categoryIcons[cat];
                const isActive = activeCategory === cat;
                return (
                  <button
                    key={cat}
                    onClick={() => setActiveCategory(cat)}
                    className={`flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-semibold transition-all ${
                      isActive ? "text-white" : "border"
                    }`}
                    style={
                      isActive
                        ? { background: categoryColors[cat] }
                        : { borderColor: "var(--border-subtle)", color: "var(--text-secondary)" }
                    }
                  >
                    <Icon size={14} />
                    {cat}
                  </button>
                );
              })}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Sort & Results Bar */}
      <section className="px-4 pt-4 pb-2 md:px-6 lg:px-8">
        <div className="mx-auto max-w-[1200px]">
          <div className="flex flex-wrap items-center justify-between gap-3">
            {query ? (
              <div className="flex items-center gap-2">
                <p className="text-sm" style={{ color: "var(--text-secondary)" }}>
                  {sorted.length} result{sorted.length !== 1 ? "s" : ""} for &quot;{query}&quot;
                </p>
                <button
                  onClick={() => setQuery("")}
                  className="flex items-center gap-1 text-sm transition-colors hover:text-[var(--accent-blue)]"
                  style={{ color: "var(--text-muted)" }}
                >
                  <X size={14} /> Clear
                </button>
              </div>
            ) : (
              <p className="text-sm" style={{ color: "var(--text-secondary)" }}>
                {sorted.length} item{sorted.length !== 1 ? "s" : ""} available
              </p>
            )}
            <div className="relative">
              <button
                onClick={() => setShowSortMenu(!showSortMenu)}
                className="flex items-center gap-2 rounded-full border px-4 py-2 text-sm font-medium transition-all"
                style={{ borderColor: "var(--border-subtle)", color: "var(--text-secondary)" }}
              >
                <SlidersHorizontal size={14} />
                {sortOptions.find((o) => o.value === sortBy)?.label}
                <ChevronDown size={14} className={`transition-transform ${showSortMenu ? "rotate-180" : ""}`} />
              </button>
              {showSortMenu && (
                <>
                  <div className="fixed inset-0 z-40" onClick={() => setShowSortMenu(false)} />
                  <div
                    className="absolute right-0 z-50 mt-2 w-52 overflow-hidden rounded-2xl border shadow-xl"
                    style={{ background: "var(--bg-surface-solid)", borderColor: "var(--border-subtle)" }}
                  >
                    {sortOptions.map((option) => (
                      <button
                        key={option.value}
                        onClick={() => { setSortBy(option.value); setShowSortMenu(false); }}
                        className="flex w-full items-center gap-2 px-4 py-2.5 text-left text-sm transition-colors hover:bg-[var(--bg-surface)]"
                        style={{ color: sortBy === option.value ? "var(--accent-blue)" : "var(--text-secondary)" }}
                      >
                        {sortBy === option.value && <span className="h-1.5 w-1.5 rounded-full" style={{ background: "var(--accent-blue)" }} />}
                        {option.label}
                      </button>
                    ))}
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      </section>

      <p className="mx-auto mb-4 max-w-xl text-center text-xs" style={{ color: "var(--text-muted)" }}>
        Prices shown are starting rates. Final cost may increase based on customization, integrations, and specific requirements.
      </p>

      {/* Templates Grid */}
      <section className="px-4 py-10 md:px-6 lg:px-8">
        <div className="mx-auto max-w-[1200px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeCategory + query + sortBy}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.25 }}
            >
              {sorted.length === 0 ? (
                <div className="py-20 text-center">
                  <Search size={40} className="mx-auto" style={{ color: "var(--text-muted)" }} />
                  <p className="mt-4 text-lg font-medium" style={{ color: "var(--text-primary)" }}>No results found</p>
                  <p className="mt-1 text-sm" style={{ color: "var(--text-secondary)" }}>Try a different search term or category.</p>
                </div>
              ) : (
                <StaggerContainer className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                  {sorted.map((template) => (
                    <motion.div
                      key={template.id}
                      variants={itemVariants}
                      className="glass-card group overflow-hidden rounded-3xl"
                    >
                      <div className="relative aspect-[4/3] overflow-hidden">
                        <img
                          src={template.image}
                          alt={template.name}
                          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                          loading="lazy"
                        />
                        <div className="absolute inset-0 bg-black/0 transition-colors duration-300 group-hover:bg-black/40" />
                        <div className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                          <button
                            onClick={() => setSelectedTemplate(template)}
                            className="flex items-center gap-2 rounded-full bg-white/90 px-4 py-2 text-sm font-medium text-black"
                          >
                            Quick Preview <ExternalLink size={14} />
                          </button>
                        </div>
                        <div className="absolute top-3 left-3 flex gap-1.5">
                          <span
                            className="rounded-full px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wider text-white"
                            style={{
                              background: template.category === "Website Templates" ? "#007AFF" : "#34C759",
                            }}
                          >
                            {template.category === "Website Templates" ? "Website" : "Academic"}
                          </span>
                          {template.recommended && (
                            <span className="flex items-center gap-1 rounded-full bg-amber-500 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wider text-white">
                              <Star size={10} fill="white" /> Top Pick
                            </span>
                          )}
                        </div>
                      </div>
                      <div className="p-5">
                        <div className="flex items-center gap-2">
                          <Tag size={12} style={{ color: "var(--text-muted)" }} />
                          <span className="text-xs" style={{ color: "var(--text-muted)" }}>{template.subcategory}</span>
                        </div>
                        <h3 className="mt-1 text-base font-semibold" style={{ color: "var(--text-primary)" }}>
                          {template.name}
                        </h3>
                        <p className="mt-1 line-clamp-2 text-sm" style={{ color: "var(--text-secondary)" }}>
                          {template.description}
                        </p>
                        <div className="mt-3">
                          <PriceDisplay pricePHP={template.pricePHP} priceUSD={template.priceUSD} />
                        </div>
                        <div className="mt-3 flex flex-wrap gap-1.5">
                          {template.tags.slice(0, 3).map((tag) => (
                            <span
                              key={tag}
                              className="rounded-full px-2 py-0.5 text-[10px] font-medium"
                              style={{ background: "var(--bg-surface-solid)", color: "var(--text-secondary)", border: "1px solid var(--border-subtle)" }}
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                        <div className="mt-4 flex flex-col sm:flex-row items-center gap-2">
                          <button
                            onClick={() => setSelectedTemplate(template)}
                            className="w-full sm:flex-1 rounded-xl border py-2.5 text-sm font-semibold transition-all"
                            style={{ borderColor: "var(--accent-blue)", color: "var(--accent-blue)" }}
                          >
                            View Details
                          </button>
                          <Link
                            to="/contact"
                            className="w-full sm:flex-1 rounded-xl py-2.5 text-center text-sm font-semibold text-white"
                            style={{ background: "var(--accent-blue)" }}
                          >
                            Inquire
                          </Link>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </StaggerContainer>
              )}
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      {/* Payment Methods */}
      <section className="px-4 py-14 md:px-6 lg:px-8" style={{ background: "var(--bg-primary)" }}>
        <div className="mx-auto max-w-[800px] text-center">
          <AnimatedSection className="section-heading mb-8">
            <span className="eyebrow">Payments</span>
            <h2>Pay Your Way</h2>
          </AnimatedSection>
          <AnimatedSection>
            <PaymentTooltip layout="grid" className="mx-auto max-w-md" />
          </AnimatedSection>
        </div>
      </section>

      {/* CTA */}
      <section className="px-4 py-14 md:px-6 lg:px-8">
        <div className="mx-auto max-w-[800px] text-center">
          <AnimatedSection>
            <h2 className="text-3xl font-bold tracking-tight md:text-4xl" style={{ color: "var(--text-primary)" }}>
              Need Something Custom?
            </h2>
            <p className="mx-auto mt-4 max-w-lg text-base" style={{ color: "var(--text-secondary)" }}>
              All templates can be customized to fit your brand. Or we can build something entirely from scratch.
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
              <Link to="/contact" className="btn-primary rounded-full flex items-center gap-2">
                Get a Custom Quote <ArrowRight size={16} />
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Template Detail Modal */}
      <AnimatePresence>
        {selectedTemplate && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[70] flex items-center justify-center bg-black/50 backdrop-blur-sm p-4"
            onClick={() => setSelectedTemplate(null)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.25 }}
              className="w-full max-w-lg overflow-hidden rounded-3xl border shadow-2xl"
              style={{ background: "var(--bg-surface-solid)", borderColor: "var(--border-subtle)" }}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative aspect-video">
                <img src={selectedTemplate.image} alt={selectedTemplate.name} className="h-full w-full object-cover" />
                <button
                  onClick={() => setSelectedTemplate(null)}
                  className="absolute top-3 right-3 flex h-8 w-8 items-center justify-center rounded-full bg-black/50 text-white transition-colors hover:bg-black/70"
                >
                  <X size={16} />
                </button>
                <div className="absolute top-3 left-3 flex gap-1.5">
                  <span
                    className="rounded-full px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wider text-white"
                    style={{
                      background: selectedTemplate.category === "Website Templates" ? "#007AFF" : "#34C759",
                    }}
                  >
                    {selectedTemplate.category === "Website Templates" ? "Website Template" : "Academic Commission"}
                  </span>
                  {selectedTemplate.recommended && (
                    <span className="flex items-center gap-1 rounded-full bg-amber-500 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wider text-white">
                      <Star size={10} fill="white" /> Top Pick
                    </span>
                  )}
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-center gap-2">
                  <Tag size={12} style={{ color: "var(--text-muted)" }} />
                  <span className="text-xs" style={{ color: "var(--text-muted)" }}>{selectedTemplate.subcategory}</span>
                </div>
                <h3 className="mt-2 text-xl font-bold" style={{ color: "var(--text-primary)" }}>{selectedTemplate.name}</h3>
                <p className="mt-2 text-sm leading-relaxed" style={{ color: "var(--text-secondary)" }}>{selectedTemplate.description}</p>
                <div className="mt-4">
                  <PriceDisplay pricePHP={selectedTemplate.pricePHP} priceUSD={selectedTemplate.priceUSD} />
                </div>
                <div className="mt-3 flex flex-wrap gap-1.5">
                  {selectedTemplate.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full px-2.5 py-1 text-[11px] font-medium"
                      style={{ background: "var(--bg-surface)", color: "var(--text-secondary)", border: "1px solid var(--border-subtle)" }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="mt-6 flex items-center gap-3">
                  <Link
                    to="/contact"
                    className="flex-1 rounded-xl py-3 text-center text-sm font-semibold text-white"
                    style={{ background: "var(--accent-blue)" }}
                  >
                    Inquire Now
                  </Link>
                  <button
                    onClick={() => setSelectedTemplate(null)}
                    className="rounded-xl border px-5 py-3 text-sm font-semibold"
                    style={{ borderColor: "var(--border-subtle)", color: "var(--text-secondary)" }}
                  >
                    Close
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
