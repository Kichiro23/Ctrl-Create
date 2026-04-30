import { Link } from "react-router";
import { motion } from "framer-motion";
import { useCurrency } from "@/hooks/useCurrency";
import type { Template } from "@/data/templates";

export default function Template3DCard({ template, index = 0 }: { template: Template; index?: number }) {
  const { formatPriceFull } = useCurrency();
  const { primary, secondary } = formatPriceFull(template.pricePHP, template.priceUSD);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      className="group"
      style={{ perspective: "1000px" }}
    >
      <div
        className="glass-card relative overflow-hidden rounded-3xl transition-transform duration-500 ease-out will-change-transform touch-manipulation"
        style={{ transformStyle: "preserve-3d" }}
        onMouseMove={(e) => {
          if (window.matchMedia("(hover: hover)").matches) {
            const rect = e.currentTarget.getBoundingClientRect();
            const x = (e.clientX - rect.left) / rect.width - 0.5;
            const y = (e.clientY - rect.top) / rect.height - 0.5;
            e.currentTarget.style.transform = `rotateY(${x * 12}deg) rotateX(${-y * 12}deg) scale(1.02)`;
          }
        }}
        onMouseLeave={(e) => {
          if (window.matchMedia("(hover: hover)").matches) {
            e.currentTarget.style.transform = "rotateY(0deg) rotateX(0deg) scale(1)";
          }
        }}
      >
        <div className="relative aspect-[4/3] overflow-hidden">
          <img
            src={template.image}
            alt={template.name}
            className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-black/0 transition-colors duration-300 group-hover:bg-black/30 md:group-hover:bg-black/30" />
          <div className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-300 group-hover:opacity-100 max-md:opacity-100">
            <Link
              to="/templates"
              className="rounded-full bg-white/90 px-5 py-2.5 text-sm font-semibold text-black shadow-lg transition-transform hover:scale-105 max-md:text-xs max-md:px-3 max-md:py-2"
            >
              View Details
            </Link>
          </div>
          <div className="absolute top-3 right-3 rounded-full border px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wider backdrop-blur-md" style={{ background: "rgba(0,0,0,0.4)", borderColor: "rgba(255,255,255,0.2)", color: "#fff" }}>
            {template.subcategory}
          </div>
        </div>

        <div className="p-5">
          <h3 className="text-sm font-bold" style={{ color: "var(--text-primary)" }}>{template.name}</h3>
          <p className="mt-1 line-clamp-2 text-xs leading-relaxed" style={{ color: "var(--text-secondary)" }}>{template.description}</p>
          <div className="mt-3 flex items-center justify-between">
            <div className="flex items-baseline gap-1">
              <span className="text-base font-bold" style={{ color: "var(--text-primary)" }}>{primary}</span>
              <span className="text-[10px]" style={{ color: "var(--text-muted)" }}>{secondary}</span>
            </div>
            <div className="flex gap-1">
              {template.tags.slice(0, 2).map((tag) => (
                <span key={tag} className="rounded-md px-1.5 py-0.5 text-[9px] font-medium uppercase" style={{ background: "var(--bg-surface-solid)", color: "var(--text-muted)" }}>
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
