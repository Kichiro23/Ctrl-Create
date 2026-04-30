import { Link } from "react-router";
import { Shield, Mail, ArrowRight } from "lucide-react";

export default function PrivacyPolicy() {
  return (
    <div className="px-4 pb-12 pt-28 md:px-6 lg:px-8">
      <div className="mx-auto max-w-[800px]">
        <div className="text-center">
          <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl" style={{ background: "rgba(0, 122, 255, 0.1)" }}>
            <Shield size={24} style={{ color: "var(--accent-blue)" }} />
          </div>
          <h1 className="mt-4 text-3xl font-bold tracking-tight md:text-4xl" style={{ color: "var(--text-primary)" }}>
            Privacy Policy
          </h1>
          <p className="mt-2 text-sm" style={{ color: "var(--text-muted)" }}>
            Last updated: April 2026
          </p>
        </div>

        <div className="mt-12 space-y-8">
          <section className="glass-card rounded-3xl p-6 md:p-8">
            <h2 className="text-lg font-semibold" style={{ color: "var(--text-primary)" }}>1. Introduction</h2>
            <p className="mt-2 text-sm leading-relaxed" style={{ color: "var(--text-secondary)" }}>
              Ctrl + Create ("we," "us," or "our") respects your privacy. This Privacy Policy explains how we collect, use, and protect your personal information when you use our website and services.
            </p>
          </section>

          <section className="glass-card rounded-3xl p-6 md:p-8">
            <h2 className="text-lg font-semibold" style={{ color: "var(--text-primary)" }}>2. Information We Collect</h2>
            <ul className="mt-3 space-y-2 text-sm" style={{ color: "var(--text-secondary)" }}>
              <li>• <strong>Contact Information:</strong> Name, email address, phone number, and business/school name when you submit the contact form.</li>
              <li>• <strong>Project Details:</strong> Information about your project requirements, budget, and timeline.</li>
              <li>• <strong>Chat Logs:</strong> Conversations with our AI assistant to improve service quality.</li>
              <li>• <strong>Payment Information:</strong> We do not store credit card or bank details. Payments are processed through GCash, Maya, PayPal, or Google Pay directly.</li>
              <li>• <strong>Usage Data:</strong> Browser type, pages visited, and time spent on the site (via anonymous analytics).</li>
            </ul>
          </section>

          <section className="glass-card rounded-3xl p-6 md:p-8">
            <h2 className="text-lg font-semibold" style={{ color: "var(--text-primary)" }}>3. How We Use Your Information</h2>
            <ul className="mt-3 space-y-2 text-sm" style={{ color: "var(--text-secondary)" }}>
              <li>• To respond to your inquiries and provide quotes.</li>
              <li>• To deliver the services you requested.</li>
              <li>• To send project updates and revision requests.</li>
              <li>• To improve our website and service offerings.</li>
              <li>• To comply with legal obligations.</li>
            </ul>
          </section>

          <section className="glass-card rounded-3xl p-6 md:p-8">
            <h2 className="text-lg font-semibold" style={{ color: "var(--text-primary)" }}>4. Data Sharing</h2>
            <p className="mt-2 text-sm leading-relaxed" style={{ color: "var(--text-secondary)" }}>
              We do not sell, trade, or rent your personal information to third parties. Your data is only shared with:
            </p>
            <ul className="mt-2 space-y-2 text-sm" style={{ color: "var(--text-secondary)" }}>
              <li>• Payment processors (GCash, Maya, PayPal, Google Pay) for transaction processing.</li>
              <li>• Hosting providers necessary to operate our website.</li>
            </ul>
          </section>

          <section className="glass-card rounded-3xl p-6 md:p-8">
            <h2 className="text-lg font-semibold" style={{ color: "var(--text-primary)" }}>5. Data Security</h2>
            <p className="mt-2 text-sm leading-relaxed" style={{ color: "var(--text-secondary)" }}>
              We implement appropriate technical and organizational measures to protect your personal data against unauthorized access, alteration, disclosure, or destruction.
            </p>
          </section>

          <section className="glass-card rounded-3xl p-6 md:p-8">
            <h2 className="text-lg font-semibold" style={{ color: "var(--text-primary)" }}>6. Your Rights</h2>
            <p className="mt-2 text-sm leading-relaxed" style={{ color: "var(--text-secondary)" }}>
              You have the right to:
            </p>
            <ul className="mt-2 space-y-2 text-sm" style={{ color: "var(--text-secondary)" }}>
              <li>• Access the personal data we hold about you.</li>
              <li>• Request correction of inaccurate data.</li>
              <li>• Request deletion of your data.</li>
              <li>• Withdraw consent at any time.</li>
            </ul>
          </section>

          <section className="glass-card rounded-3xl p-6 md:p-8">
            <h2 className="text-lg font-semibold" style={{ color: "var(--text-primary)" }}>7. Cookies</h2>
            <p className="mt-2 text-sm leading-relaxed" style={{ color: "var(--text-secondary)" }}>
              We use cookies to remember your preferences (theme, currency) and to analyze site traffic. You can disable cookies in your browser settings, but some features may not function properly.
            </p>
          </section>

          <section className="glass-card rounded-3xl p-6 md:p-8">
            <h2 className="text-lg font-semibold" style={{ color: "var(--text-primary)" }}>8. Contact Us</h2>
            <p className="mt-2 text-sm leading-relaxed" style={{ color: "var(--text-secondary)" }}>
              If you have any questions about this Privacy Policy or want to exercise your rights, contact us at:
            </p>
            <div className="mt-3 flex items-center gap-2 text-sm" style={{ color: "var(--accent-blue)" }}>
              <Mail size={14} />
              <a href="mailto:rommeld216@gmail.com" className="font-medium hover:underline">rommeld216@gmail.com</a>
            </div>
          </section>
        </div>

        <div className="mt-10 text-center">
          <Link to="/contact" className="btn-secondary inline-flex items-center gap-2 rounded-full">
            Contact Us <ArrowRight size={14} />
          </Link>
        </div>
      </div>
    </div>
  );
}
