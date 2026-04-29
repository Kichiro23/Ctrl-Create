import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router";
import { Menu, X, Sun, Moon, DollarSign, PhilippinePeso } from "lucide-react";
import { useTheme } from "@/hooks/useTheme";
import { useCurrency } from "@/hooks/useCurrency";
import { useAuth } from "@/hooks/useAuth";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "Academic", href: "/academic" },
  { label: "Templates", href: "/templates" },
  { label: "Membership", href: "/membership" },
  { label: "Packages", href: "/packages" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();
  const { currency, setCurrency } = useCurrency();
  const { user, isAuthenticated, logout } = useAuth();
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [location.pathname]);

  const isActive = (href: string) => {
    if (href === "/") return location.pathname === "/";
    return location.pathname.startsWith(href);
  };

  return (
    <>
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? "py-3" : "py-4"}`}>
        <div className="mx-auto flex max-w-[1200px] items-center justify-between px-4 md:px-6 lg:px-8">
          <div
            className="flex w-full items-center justify-between rounded-full border px-4 py-2 transition-all duration-300"
            style={{
              background: scrolled ? "var(--bg-surface)" : "rgba(255,255,255,0.05)",
              backdropFilter: "blur(24px) saturate(180%)",
              WebkitBackdropFilter: "blur(24px) saturate(180%)",
              borderColor: scrolled ? "var(--border-subtle)" : "rgba(255,255,255,0.1)",
            }}
          >
            <Link to="/" className="flex items-center gap-2 pl-2">
              <img src="/logo-cc.png" alt="Ctrl + Create" className="h-7 w-7 object-contain" />
              <span className="text-sm font-semibold hidden sm:inline" style={{ color: "var(--text-primary)" }}>
                Ctrl + Create
              </span>
            </Link>

            <div className="hidden items-center gap-1 lg:flex">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  to={link.href}
                  className={`relative rounded-full px-3 py-1.5 text-sm font-medium transition-all ${
                    isActive(link.href)
                      ? "text-white"
                      : "text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-[var(--bg-surface-solid)]"
                  }`}
                  style={isActive(link.href) ? { background: "var(--accent-blue)" } : {}}
                >
                  {link.label}
                </Link>
              ))}
            </div>

            <div className="flex items-center gap-2 pr-2">
              <button
                onClick={() => setCurrency(currency === "USD" ? "PHP" : "USD")}
                className="hidden h-8 items-center gap-1 rounded-full border px-3 text-xs font-medium transition-colors sm:flex"
                style={{ borderColor: "var(--border-subtle)", color: "var(--text-secondary)" }}
                title={`Switch to ${currency === "USD" ? "PHP" : "USD"}`}
              >
                {currency === "USD" ? <DollarSign size={12} /> : <PhilippinePeso size={12} />}
                {currency}
              </button>

              <button
                onClick={toggleTheme}
                className="flex h-9 w-9 items-center justify-center rounded-full border transition-colors"
                style={{ borderColor: "var(--border-subtle)", color: "var(--text-secondary)" }}
                aria-label="Toggle theme"
              >
                {theme === "dark" ? <Sun size={16} /> : <Moon size={16} />}
              </button>

              {isAuthenticated ? (
                <div className="hidden items-center gap-2 md:flex">
                  {user?.avatar && (
                    <img src={user.avatar} alt="" className="h-7 w-7 rounded-full object-cover" />
                  )}
                  <button onClick={logout} className="text-sm font-medium" style={{ color: "var(--text-secondary)" }}>
                    Logout
                  </button>
                  {user?.role === "admin" && (
                    <Link to="/admin" className="rounded-full px-3 py-1 text-xs font-medium text-white" style={{ background: "var(--accent-blue)" }}>
                      Admin
                    </Link>
                  )}
                </div>
              ) : (
                <Link
                  to="/contact"
                  className="hidden rounded-full px-4 py-1.5 text-sm font-semibold text-white md:inline-flex"
                  style={{ background: "var(--accent-blue)" }}
                >
                  Get Started
                </Link>
              )}

              <button
                onClick={() => setMobileOpen(true)}
                className="flex h-9 w-9 items-center justify-center rounded-full border lg:hidden"
                style={{ borderColor: "var(--border-subtle)", color: "var(--text-secondary)" }}
                aria-label="Open menu"
              >
                <Menu size={18} />
              </button>
            </div>
          </div>
        </div>
      </nav>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] bg-black/40 backdrop-blur-sm lg:hidden"
            onClick={() => setMobileOpen(false)}
          >
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 30, stiffness: 300 }}
              className="absolute right-0 top-0 h-full w-[280px] p-6"
              style={{ background: "var(--bg-surface-solid)" }}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex justify-end">
                <button onClick={() => setMobileOpen(false)} className="flex h-10 w-10 items-center justify-center rounded-full" style={{ color: "var(--text-secondary)" }}>
                  <X size={24} />
                </button>
              </div>

              <div className="mt-8 flex flex-col gap-6">
                {navLinks.map((link, i) => (
                  <motion.div key={link.href} initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: i * 0.05 }}>
                    <Link
                      to={link.href}
                      className="text-2xl font-semibold"
                      style={{ color: isActive(link.href) ? "var(--accent-blue)" : "var(--text-primary)" }}
                    >
                      {link.label}
                    </Link>
                  </motion.div>
                ))}

                <div className="mt-4 flex items-center gap-3">
                  <button
                    onClick={() => setCurrency(currency === "USD" ? "PHP" : "USD")}
                    className="flex h-10 items-center gap-1 rounded-full border px-4 text-sm font-medium"
                    style={{ borderColor: "var(--border-subtle)", color: "var(--text-secondary)" }}
                  >
                    {currency === "USD" ? <DollarSign size={14} /> : <PhilippinePeso size={14} />}
                    {currency}
                  </button>
                </div>

                {isAuthenticated ? (
                  <div className="flex flex-col gap-3">
                    <span className="text-sm" style={{ color: "var(--text-secondary)" }}>{user?.name || "User"}</span>
                    {user?.role === "admin" && (
                      <Link to="/admin" className="rounded-xl px-4 py-3 text-center text-sm font-semibold text-white" style={{ background: "var(--accent-blue)" }}>
                        Admin Dashboard
                      </Link>
                    )}
                    <button onClick={logout} className="rounded-xl border px-4 py-3 text-center text-sm font-semibold" style={{ borderColor: "var(--border-subtle)", color: "var(--text-secondary)" }}>
                      Logout
                    </button>
                  </div>
                ) : (
                  <Link to="/contact" className="mt-4 rounded-xl px-4 py-3 text-center text-sm font-semibold text-white" style={{ background: "var(--accent-blue)" }}>
                    Get Started
                  </Link>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
