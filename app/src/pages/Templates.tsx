import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { ExternalLink, Wrench, ShieldCheck, QrCode } from "lucide-react";
import PaymentMethods from "@/components/PaymentMethods";

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

const templates = [
  { name: "POS Restaurant App System", price: 7999, image: "/portfolio-1.jpg" },
  { name: "POS Grocery App System", price: 7999, image: "/portfolio-2.jpg" },
  { name: "Resort Reservation System", price: 9999, image: "/portfolio-3.jpg" },
  { name: "Car Rental Dashboard", price: 9999, image: "/portfolio-4.jpg" },
  { name: "Staycation System", price: 8999, image: "/portfolio-5.jpg" },
  { name: "Travel & Tours System", price: 9999, image: "/portfolio-6.jpg" },
  { name: "Construction Services & Products System", price: 9999, image: "/portfolio-7.jpg" },
  { name: "Printing Services Dashboard", price: 9999, image: "/portfolio-8.jpg" },
  { name: "Finance Hub", price: 7999, image: "/portfolio-1.jpg" },
];

export default function Templates() {
  return (
    <div>
      {/* Hero */}
      <section className="relative flex min-h-[50vh] items-center justify-center px-4 pt-24 md:px-6 lg:px-8">
        <div className="mx-auto max-w-[800px] text-center">
          <AnimatedSection>
            <span className="eyebrow">Marketplace</span>
            <h1 className="mt-4 text-4xl font-extrabold tracking-tight md:text-6xl" style={{ color: "var(--text-primary)" }}>
              Ready-Made Systems
            </h1>
            <p className="mx-auto mt-4 max-w-2xl text-lg" style={{ color: "var(--text-secondary)" }}>
              Find everything you need to build and launch. Explore ready-to-use systems and buy instantly through QRPh Payment.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Trust badges */}
      <section className="px-4 pb-8 md:px-6 lg:px-8">
        <div className="mx-auto max-w-[1200px]">
          <AnimatedSection>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <div
                className="flex items-center gap-2 rounded-full border px-4 py-2 text-sm"
                style={{ borderColor: "var(--border-subtle)", color: "var(--text-secondary)" }}
              >
                <QrCode size={16} style={{ color: "var(--accent-blue)" }} />
                QRPh Accepted
              </div>
              <div
                className="flex items-center gap-2 rounded-full border px-4 py-2 text-sm"
                style={{ borderColor: "var(--border-subtle)", color: "var(--text-secondary)" }}
              >
                <ShieldCheck size={16} style={{ color: "var(--accent-blue)" }} />
                Instant Purchase — No Annual Fees
              </div>
              <div
                className="flex items-center gap-2 rounded-full border px-4 py-2 text-sm"
                style={{ borderColor: "var(--border-subtle)", color: "var(--text-secondary)" }}
              >
                <Wrench size={16} style={{ color: "var(--accent-blue)" }} />
                Customization Available
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Templates Grid */}
      <section className="px-4 py-12 md:px-6 lg:px-8">
        <div className="mx-auto max-w-[1200px]">
          <StaggerContainer className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {templates.map((template) => (
              <motion.div
                key={template.name}
                variants={itemVariants}
                className="glass-card group overflow-hidden rounded-3xl"
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img
                    src={template.image}
                    alt={template.name}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                  />
                  <div className="absolute inset-0 bg-black/0 transition-colors duration-300 group-hover:bg-black/40" />
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                    <span className="flex items-center gap-2 rounded-full bg-white/90 px-4 py-2 text-sm font-medium text-black">
                      Quick Preview <ExternalLink size={14} />
                    </span>
                  </div>
                </div>
                <div className="p-5">
                  <h3 className="text-base font-semibold" style={{ color: "var(--text-primary)" }}>
                    {template.name}
                  </h3>
                  <p className="mt-1 text-lg font-bold" style={{ color: "var(--accent-blue)" }}>
                    ₱{template.price.toLocaleString()}
                  </p>
                  <div className="mt-4 flex items-center gap-2">
                    <button
                      className="flex-1 rounded-xl border py-2.5 text-sm font-semibold transition-all"
                      style={{ borderColor: "var(--accent-blue)", color: "var(--accent-blue)" }}
                    >
                      View Demo
                    </button>
                    <button className="flex-1 rounded-xl py-2.5 text-sm font-semibold text-white" style={{ background: "var(--accent-blue)" }}>
                      Customize
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Payment Methods */}
      <section className="px-4 py-16 md:px-6 lg:px-8" style={{ background: "var(--bg-primary)" }}>
        <div className="mx-auto max-w-[800px] text-center">
          <AnimatedSection className="section-heading mb-8">
            <span className="eyebrow">Payments</span>
            <h2>Pay Your Way</h2>
          </AnimatedSection>
          <AnimatedSection>
            <PaymentMethods layout="grid" showDetails className="mx-auto max-w-md" />
          </AnimatedSection>
        </div>
      </section>

      {/* CTA */}
      <section className="px-4 py-16 md:px-6 lg:px-8">
        <div className="mx-auto max-w-[800px] text-center">
          <AnimatedSection>
            <h2 className="text-3xl font-bold tracking-tight md:text-4xl" style={{ color: "var(--text-primary)" }}>
              Need Something Custom?
            </h2>
            <p className="mx-auto mt-4 max-w-lg text-base" style={{ color: "var(--text-secondary)" }}>
              All templates can be customized to fit your brand. Or we can build something entirely from scratch.
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
              <a href="mailto:rommeld216@gmail.com" className="btn-primary rounded-full">
                Get a Custom Quote
              </a>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}
