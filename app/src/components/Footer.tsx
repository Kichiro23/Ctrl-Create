import { Link } from "react-router";
import { Github, Instagram, Linkedin, Facebook, MessageCircle, Send } from "lucide-react";

export default function Footer() {

  return (
    <footer className="relative z-10 border-t backdrop-blur-sm" style={{ borderColor: "var(--border-subtle)", background: "var(--bg-surface)" }}>
      <div className="mx-auto max-w-[1200px] px-4 py-10 md:px-6 lg:px-8">
        <div className="flex flex-col items-center gap-6 text-center md:flex-row md:justify-between md:text-left">
          {/* Brand */}
          <div className="flex items-center gap-3">
            <img src="/images/assets/logo-cc.png" alt="Cylux Code" className="h-10 w-10 object-contain" />
            <span className="text-base font-bold" style={{ color: "var(--text-primary)" }}>
              Cylux Code
            </span>
          </div>

          {/* Quick Links */}
          <div className="flex flex-wrap items-center justify-center gap-4">
            {[
              { label: "Home", href: "/" },
              { label: "Services", href: "/services" },
              { label: "Academic", href: "/academic" },
              { label: "Templates", href: "/templates" },
              { label: "Contact", href: "/contact" },
            ].map((link) => (
              <Link key={link.href} to={link.href} className="text-sm transition-colors hover:text-[var(--accent-blue)]" style={{ color: "var(--text-secondary)" }}>
                {link.label}
              </Link>
            ))}
          </div>

          {/* Social */}
          <div className="flex items-center gap-2">
            {[
              { icon: Linkedin, href: "https://www.linkedin.com/in/rommel-andrei-de-leon-36ba8b291/", label: "LinkedIn" },
              { icon: Instagram, href: "https://www.instagram.com/drei_sanity", label: "Instagram" },
              { icon: Facebook, href: "https://www.facebook.com/andrei.deleon23", label: "Facebook" },
              { icon: Github, href: "https://github.com/Kichiro23", label: "GitHub" },
              { icon: MessageCircle, href: "https://discord.com/users/drei_sanity", label: "Discord" },
              { icon: Send, href: "https://t.me/drei_sanity", label: "Telegram" },
            ].map(({ icon: Icon, href, label }) => (
              <a key={label} href={href} target="_blank" rel="noopener noreferrer" className="flex h-8 w-8 items-center justify-center rounded-full border transition-colors hover:text-[var(--accent-blue)]" style={{ borderColor: "var(--border-subtle)", color: "var(--text-secondary)" }} title={label}>
                <Icon size={14} />
              </a>
            ))}
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-4 border-t pt-6 md:justify-between" style={{ borderColor: "var(--border-subtle)" }}>
          <p className="text-xs" style={{ color: "var(--text-muted)" }}>
            © {new Date().getFullYear()} Rommel Andrei De Leon. All rights reserved.
          </p>
          <div className="flex items-center gap-3">
            <Link to="/privacy-policy" className="text-xs transition-colors hover:text-[var(--accent-blue)]" style={{ color: "var(--text-muted)" }}>Privacy</Link>
            <Link to="/terms-of-service" className="text-xs transition-colors hover:text-[var(--accent-blue)]" style={{ color: "var(--text-muted)" }}>Terms</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
