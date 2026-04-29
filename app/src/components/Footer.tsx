import { Link } from "react-router";
import { Github, Instagram, Linkedin, Facebook, PhilippinePeso, DollarSign, MessageCircle, Send, QrCode } from "lucide-react";
import { useCurrency } from "@/hooks/useCurrency";
import PaymentMethods from "./PaymentMethods";

export default function Footer() {
  const { currency, setCurrency } = useCurrency();

  return (
    <footer className="border-t" style={{ borderColor: "var(--border-subtle)", background: "var(--bg-primary)" }}>
      <div className="mx-auto max-w-[1200px] px-4 py-16 md:px-6 lg:px-8">
        {/* CTA Section */}
        <div className="mb-12 text-center">
          <h3 className="text-2xl font-bold tracking-tight md:text-3xl" style={{ color: "var(--text-primary)" }}>
            Ready to Get Started?
          </h3>
          <p className="mx-auto mt-3 max-w-lg text-base" style={{ color: "var(--text-secondary)" }}>
            Not sure which package is right for you? Browse our services or send us a message.
          </p>
          <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
            <Link to="/packages" className="btn-primary rounded-full">
              View Our Packages
            </Link>
            <Link to="/about" className="btn-secondary rounded-full">
              Learn About Us
            </Link>
          </div>
          <p className="mt-4 text-xs" style={{ color: "var(--text-muted)" }}>
            Free consultation · No commitment · Response within 24 hours
          </p>
        </div>

        {/* Main Footer Grid */}
        <div className="grid gap-8 border-t pt-12 md:grid-cols-4" style={{ borderColor: "var(--border-subtle)" }}>
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3">
              <img src="/logo-cc.png" alt="Ctrl + Create" className="h-6 w-6 object-contain" />
              <span className="text-sm font-semibold" style={{ color: "var(--text-primary)" }}>
                Ctrl + Create
              </span>
            </div>
            <p className="mt-3 text-sm leading-relaxed" style={{ color: "var(--text-secondary)" }}>
              A one-man creative studio based in the Philippines, building premium digital experiences for brands and individuals worldwide.
            </p>
            <p className="mt-4 text-xs" style={{ color: "var(--text-muted)" }}>
              © {new Date().getFullYear()} Rommel Andrei De Leon. All rights reserved.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-widest" style={{ color: "var(--text-primary)" }}>Quick Links</h4>
            <ul className="mt-4 space-y-2">
              {[
                { label: "Home", href: "/" },
                { label: "Services", href: "/services" },
                { label: "Academic", href: "/academic" },
                { label: "Templates", href: "/templates" },
                { label: "Membership", href: "/membership" },
                { label: "Packages", href: "/packages" },
                { label: "About", href: "/about" },
                { label: "Contact", href: "/contact" },
              ].map((link) => (
                <li key={link.href}>
                  <Link to={link.href} className="text-sm transition-colors hover:text-[var(--accent-blue)]" style={{ color: "var(--text-secondary)" }}>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-widest" style={{ color: "var(--text-primary)" }}>Legal</h4>
            <ul className="mt-4 space-y-2">
              {[
                { label: "Revision Policy", href: "/revision-policy" },
                { label: "Privacy Policy", href: "#" },
                { label: "Terms of Service", href: "#" },
              ].map((link) => (
                <li key={link.label}>
                  <Link to={link.href} className="text-sm transition-colors hover:text-[var(--accent-blue)]" style={{ color: "var(--text-secondary)" }}>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Social & Contact */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-widest" style={{ color: "var(--text-primary)" }}>Connect With Me</h4>
            <div className="mt-4 flex flex-wrap items-center gap-3">
              <a href="https://www.linkedin.com/in/rommel-andrei-de-leon-36ba8b291/" target="_blank" rel="noopener noreferrer" className="flex h-10 w-10 items-center justify-center rounded-full border transition-colors hover:text-[var(--accent-blue)]" style={{ borderColor: "var(--border-subtle)", color: "var(--text-secondary)" }} title="LinkedIn">
                <Linkedin size={18} />
              </a>
              <a href="https://www.instagram.com/drei_sanity" target="_blank" rel="noopener noreferrer" className="flex h-10 w-10 items-center justify-center rounded-full border transition-colors hover:text-[var(--accent-blue)]" style={{ borderColor: "var(--border-subtle)", color: "var(--text-secondary)" }} title="Instagram">
                <Instagram size={18} />
              </a>
              <a href="https://www.facebook.com/andrei.deleon23" target="_blank" rel="noopener noreferrer" className="flex h-10 w-10 items-center justify-center rounded-full border transition-colors hover:text-[var(--accent-blue)]" style={{ borderColor: "var(--border-subtle)", color: "var(--text-secondary)" }} title="Facebook">
                <Facebook size={18} />
              </a>
              <a href="https://github.com/Kichiro23" target="_blank" rel="noopener noreferrer" className="flex h-10 w-10 items-center justify-center rounded-full border transition-colors hover:text-[var(--accent-blue)]" style={{ borderColor: "var(--border-subtle)", color: "var(--text-secondary)" }} title="GitHub">
                <Github size={18} />
              </a>
              <a href="https://discord.com/users/drei_sanity" target="_blank" rel="noopener noreferrer" className="flex h-10 w-10 items-center justify-center rounded-full border transition-colors hover:text-[var(--accent-blue)]" style={{ borderColor: "var(--border-subtle)", color: "var(--text-secondary)" }} title="Discord">
                <MessageCircle size={18} />
              </a>
              <a href="https://t.me/drei_sanity" target="_blank" rel="noopener noreferrer" className="flex h-10 w-10 items-center justify-center rounded-full border transition-colors hover:text-[var(--accent-blue)]" style={{ borderColor: "var(--border-subtle)", color: "var(--text-secondary)" }} title="Telegram">
                <Send size={18} />
              </a>
            </div>
            <div className="mt-4 space-y-1">
              <p className="text-sm" style={{ color: "var(--text-secondary)" }}>rommeld216@gmail.com</p>
              <p className="text-sm" style={{ color: "var(--text-secondary)" }}>+63 962 790 5910</p>
              <p className="text-sm" style={{ color: "var(--text-secondary)" }}>Malolos, Bulacan, Philippines</p>
            </div>
            <div className="mt-4">
              <PaymentMethods layout="badges" />
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 flex flex-wrap items-center justify-between gap-4 border-t pt-6" style={{ borderColor: "var(--border-subtle)" }}>
          <div className="flex items-center gap-2">
            <button
              onClick={() => setCurrency(currency === "USD" ? "PHP" : "USD")}
              className="flex h-8 items-center gap-1 rounded-full border px-3 text-xs font-medium transition-colors"
              style={{ borderColor: "var(--border-subtle)", color: "var(--text-secondary)" }}
            >
              {currency === "USD" ? <DollarSign size={12} /> : <PhilippinePeso size={12} />}
              {currency}
            </button>
          </div>
          <p className="text-xs" style={{ color: "var(--text-muted)" }}>
            Built with precision by Rommel Andrei De Leon
          </p>
        </div>
      </div>
    </footer>
  );
}
