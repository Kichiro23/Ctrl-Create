import { Link } from "react-router";
import { FileText, Mail, ArrowRight } from "lucide-react";

export default function TermsOfService() {
  return (
    <div className="px-4 pb-12 pt-28 md:px-6 lg:px-8">
      <div className="mx-auto max-w-[800px]">
        <div className="text-center">
          <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl" style={{ background: "rgba(0, 122, 255, 0.1)" }}>
            <FileText size={24} style={{ color: "var(--accent-blue)" }} />
          </div>
          <h1 className="mt-4 text-3xl font-bold tracking-tight md:text-4xl" style={{ color: "var(--text-primary)" }}>
            Terms of Service
          </h1>
          <p className="mt-2 text-sm" style={{ color: "var(--text-muted)" }}>
            Last updated: April 2026
          </p>
        </div>

        <div className="mt-12 space-y-8">
          <section className="glass-card rounded-3xl p-6 md:p-8">
            <h2 className="text-lg font-semibold" style={{ color: "var(--text-primary)" }}>1. Acceptance of Terms</h2>
            <p className="mt-2 text-sm leading-relaxed" style={{ color: "var(--text-secondary)" }}>
              By accessing or using Ctrl + Create services, you agree to be bound by these Terms of Service. If you do not agree, please do not use our services.
            </p>
          </section>

          <section className="glass-card rounded-3xl p-6 md:p-8">
            <h2 className="text-lg font-semibold" style={{ color: "var(--text-primary)" }}>2. Services Offered</h2>
            <p className="mt-2 text-sm leading-relaxed" style={{ color: "var(--text-secondary)" }}>
              Ctrl + Create provides digital services including but not limited to:
            </p>
            <ul className="mt-2 space-y-2 text-sm" style={{ color: "var(--text-secondary)" }}>
              <li>• Website development and design</li>
              <li>• Academic writing and research assistance</li>
              <li>• Graphic design and video editing</li>
              <li>• Social media management and advertising</li>
              <li>• IT support and technical consulting</li>
            </ul>
          </section>

          <section className="glass-card rounded-3xl p-6 md:p-8">
            <h2 className="text-lg font-semibold" style={{ color: "var(--text-primary)" }}>3. Payment Terms</h2>
            <ul className="mt-3 space-y-2 text-sm" style={{ color: "var(--text-secondary)" }}>
              <li>• <strong>Down Payment:</strong> 50% of the total project cost is required before work begins.</li>
              <li>• <strong>Final Payment:</strong> Remaining 50% is due upon project completion and before final delivery.</li>
              <li>• <strong>Accepted Methods:</strong> GCash, Maya, PayPal, Google Pay, and bank transfer.</li>
              <li>• <strong>Late Payment:</strong> Projects may be paused if payment is not received within 7 days of invoice.</li>
              <li>• <strong>Rush Fees:</strong> Projects requiring delivery faster than the standard timeline may incur additional charges.</li>
            </ul>
          </section>

          <section className="glass-card rounded-3xl p-6 md:p-8">
            <h2 className="text-lg font-semibold" style={{ color: "var(--text-primary)" }}>4. Revision Policy</h2>
            <ul className="mt-3 space-y-2 text-sm" style={{ color: "var(--text-secondary)" }}>
              <li>• <strong>Major Revisions:</strong> Full section redesigns or scope changes. Limited per package tier.</li>
              <li>• <strong>Minor Revisions:</strong> Text edits, image swaps, color tweaks. Unlimited in Enterprise tier.</li>
              <li>• <strong>Out-of-Scope:</strong> Features beyond the agreed scope will be quoted separately before implementation.</li>
              <li>• <strong>Revision Window:</strong> Revisions must be requested within 14 days of delivery.</li>
            </ul>
          </section>

          <section className="glass-card rounded-3xl p-6 md:p-8">
            <h2 className="text-lg font-semibold" style={{ color: "var(--text-primary)" }}>5. Refund Policy</h2>
            <ul className="mt-3 space-y-2 text-sm" style={{ color: "var(--text-secondary)" }}>
              <li>• <strong>Before Work Begins:</strong> Full refund minus any processing fees.</li>
              <li>• <strong>After Work Begins:</strong> No full refunds. Partial refunds may be issued for unused portions at our discretion.</li>
              <li>• <strong>Memberships:</strong> Membership fees are non-refundable once activated.</li>
              <li>• <strong>Academic Services:</strong> No refunds after the first draft has been delivered.</li>
            </ul>
          </section>

          <section className="glass-card rounded-3xl p-6 md:p-8">
            <h2 className="text-lg font-semibold" style={{ color: "var(--text-primary)" }}>6. Intellectual Property</h2>
            <p className="mt-2 text-sm leading-relaxed" style={{ color: "var(--text-secondary)" }}>
              Upon full payment, the client owns all rights to the final deliverables. We retain the right to showcase non-confidential work in our portfolio unless explicitly agreed otherwise. Source code, design files, and assets are transferred upon final payment.
            </p>
          </section>

          <section className="glass-card rounded-3xl p-6 md:p-8">
            <h2 className="text-lg font-semibold" style={{ color: "var(--text-primary)" }}>7. Academic Integrity</h2>
            <p className="mt-2 text-sm leading-relaxed" style={{ color: "var(--text-secondary)" }}>
              Academic writing and research assistance services are provided as reference materials and study aids. The client is fully responsible for how these materials are used, including proper citation and adherence to their institution's academic integrity policies. We do not condone plagiarism or academic dishonesty.
            </p>
          </section>

          <section className="glass-card rounded-3xl p-6 md:p-8">
            <h2 className="text-lg font-semibold" style={{ color: "var(--text-primary)" }}>8. Confidentiality</h2>
            <p className="mt-2 text-sm leading-relaxed" style={{ color: "var(--text-secondary)" }}>
              We respect client confidentiality. Information shared during a project will not be disclosed to third parties without consent, except as required by law.
            </p>
          </section>

          <section className="glass-card rounded-3xl p-6 md:p-8">
            <h2 className="text-lg font-semibold" style={{ color: "var(--text-primary)" }}>9. Limitation of Liability</h2>
            <p className="mt-2 text-sm leading-relaxed" style={{ color: "var(--text-secondary)" }}>
              Ctrl + Create shall not be liable for any indirect, incidental, or consequential damages arising from the use of our services. Our total liability shall not exceed the amount paid for the specific service in question.
            </p>
          </section>

          <section className="glass-card rounded-3xl p-6 md:p-8">
            <h2 className="text-lg font-semibold" style={{ color: "var(--text-primary)" }}>10. Termination</h2>
            <p className="mt-2 text-sm leading-relaxed" style={{ color: "var(--text-secondary)" }}>
              Either party may terminate the service agreement with written notice. The client remains responsible for payment for all work completed up to the termination date.
            </p>
          </section>

          <section className="glass-card rounded-3xl p-6 md:p-8">
            <h2 className="text-lg font-semibold" style={{ color: "var(--text-primary)" }}>11. Governing Law</h2>
            <p className="mt-2 text-sm leading-relaxed" style={{ color: "var(--text-secondary)" }}>
              These Terms shall be governed by and construed in accordance with the laws of the Philippines. Any disputes shall be resolved through good faith negotiation.
            </p>
          </section>

          <section className="glass-card rounded-3xl p-6 md:p-8">
            <h2 className="text-lg font-semibold" style={{ color: "var(--text-primary)" }}>12. Changes to Terms</h2>
            <p className="mt-2 text-sm leading-relaxed" style={{ color: "var(--text-secondary)" }}>
              We reserve the right to modify these terms at any time. Changes will be effective immediately upon posting to this page. Continued use of our services constitutes acceptance of the revised terms.
            </p>
          </section>

          <section className="glass-card rounded-3xl p-6 md:p-8">
            <h2 className="text-lg font-semibold" style={{ color: "var(--text-primary)" }}>13. Contact</h2>
            <p className="mt-2 text-sm leading-relaxed" style={{ color: "var(--text-secondary)" }}>
              For questions about these Terms, contact us at:
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
