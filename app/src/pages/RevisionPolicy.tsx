import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { AlertTriangle, LayoutTemplate, Type, CheckCircle2 } from "lucide-react";
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

const majorExamples = [
  "Reordering, adding, or removing whole sections",
  "Changing page layout",
  "Restructuring navigation or site structure",
  "Moving key content blocks to a different position",
];

const minorExamples = [
  "Fixing a typo or updating copy",
  "Swapping a photo or image",
  "Changing a button or heading color",
  "Adjusting spacing or updating contact info",
];

export default function RevisionPolicy() {
  return (
    <div>
      <SEO
        title="Revision Policy | Cylux Code"
        description="Our revision policy: major revisions, minor revisions, and out-of-scope changes. Clear guidelines for website and creative project modifications."
        pathname="/revision-policy"
      />
      {/* Hero */}
      <section className="relative flex min-h-[40vh] items-center justify-center px-4 pt-20 md:px-6 lg:px-8">
        <div className="mx-auto max-w-[800px] text-center">
          <AnimatedSection>
            <span className="eyebrow">Policy</span>
            <h1 className="mt-4 text-4xl font-extrabold tracking-tight md:text-5xl" style={{ color: "var(--text-primary)" }}>
              Revision Policy
            </h1>
            <p className="mx-auto mt-4 max-w-2xl text-lg" style={{ color: "var(--text-secondary)" }}>
              Understanding revisions so we can work efficiently together.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Overview */}
      <section className="px-4 py-14 md:px-6 lg:px-8">
        <div className="mx-auto max-w-[800px]">
          <AnimatedSection>
            <div className="glass-card p-6 md:p-8">
              <div className="flex items-start gap-3">
                <AlertTriangle size={20} className="mt-0.5 shrink-0" style={{ color: "var(--warning)" }} />
                <p className="text-sm leading-relaxed" style={{ color: "var(--text-secondary)" }}>
                  Each package includes a set number of minor and major revisions. Extra rounds are available on request at additional cost. To keep timelines on track, please consolidate feedback into a single list when possible.
                </p>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Major vs Minor */}
      <section className="px-4 py-14 md:px-6 lg:px-8">
        <div className="mx-auto max-w-[1200px]">
          <div className="grid gap-8 md:grid-cols-2">
            <AnimatedSection>
              <div className="glass-card h-full p-6 md:p-8">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl" style={{ background: "rgba(255, 59, 48, 0.1)" }}>
                  <LayoutTemplate size={24} style={{ color: "#FF3B30" }} />
                </div>
                <h2 className="mt-4 text-xl font-bold" style={{ color: "var(--text-primary)" }}>
                  Major Revision
                </h2>
                <p className="mt-2 text-sm leading-relaxed" style={{ color: "var(--text-secondary)" }}>
                  Layout or structural changes to the website design and architecture.
                </p>
                <ul className="mt-6 space-y-3">
                  {majorExamples.map((ex) => (
                    <li key={ex} className="flex items-start gap-2 text-sm" style={{ color: "var(--text-secondary)" }}>
                      <div className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full" style={{ background: "#FF3B30" }} />
                      {ex}
                    </li>
                  ))}
                </ul>
              </div>
            </AnimatedSection>

            <AnimatedSection>
              <div className="glass-card h-full p-6 md:p-8">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl" style={{ background: "rgba(0, 122, 255, 0.1)" }}>
                  <Type size={24} style={{ color: "var(--accent-blue)" }} />
                </div>
                <h2 className="mt-4 text-xl font-bold" style={{ color: "var(--text-primary)" }}>
                  Minor Revision
                </h2>
                <p className="mt-2 text-sm leading-relaxed" style={{ color: "var(--text-secondary)" }}>
                  Changes to text, images, colors, spacing, and small adjustments.
                </p>
                <ul className="mt-6 space-y-3">
                  {minorExamples.map((ex) => (
                    <li key={ex} className="flex items-start gap-2 text-sm" style={{ color: "var(--text-secondary)" }}>
                      <CheckCircle2 size={16} className="mt-0.5 shrink-0" style={{ color: "var(--accent-blue)" }} />
                      {ex}
                    </li>
                  ))}
                </ul>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Package Revision Table */}
      <section className="px-4 py-14 md:px-6 lg:px-8">
        <div className="mx-auto max-w-[800px]">
          <AnimatedSection className="section-heading mb-8">
            <span className="eyebrow">Breakdown</span>
            <h2>Revisions by Package</h2>
          </AnimatedSection>

          <AnimatedSection>
            <div className="glass-card overflow-hidden">
              <div className="grid grid-cols-3 border-b p-4 text-sm font-semibold" style={{ borderColor: "var(--border-subtle)", color: "var(--text-primary)" }}>
                <span>Package</span>
                <span className="text-center">Major</span>
                <span className="text-center">Minor</span>
              </div>
              {[
                { pkg: "Basic", major: "1", minor: "3" },
                { pkg: "Standard", major: "2", minor: "5" },
                { pkg: "Premium", major: "Unlimited", minor: "Unlimited" },
                { pkg: "Academic", major: "1", minor: "3" },
              ].map((row) => (
                <div
                  key={row.pkg}
                  className="grid grid-cols-3 border-b p-4 text-sm"
                  style={{ borderColor: "var(--border-subtle)" }}
                >
                  <span className="font-medium" style={{ color: "var(--text-primary)" }}>
                    {row.pkg}
                  </span>
                  <span className="text-center" style={{ color: "var(--text-secondary)" }}>
                    {row.major}
                  </span>
                  <span className="text-center" style={{ color: "var(--text-secondary)" }}>
                    {row.minor}
                  </span>
                </div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}
