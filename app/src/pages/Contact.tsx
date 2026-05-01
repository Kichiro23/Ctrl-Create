import { useState } from "react";
import { useLanguage } from "@/hooks/useLanguage";
import { Link } from "react-router";
import { trpc } from "@/providers/trpc";
import PaymentTooltip from "@/components/PaymentTooltip";
import {
  Send, Mail, Phone, MapPin, Clock, CheckCircle, AlertCircle,
  BookOpen, MonitorSmartphone, Clapperboard, Palette, Mic, TrendingUp,
  Globe, PenTool, FileText, GraduationCap, MessageSquare, Zap,
  ArrowRight, HelpCircle,
} from "lucide-react";
import SEO from "@/components/SEO";

const serviceOptions = [
  { label: "Website Development (React, Next.js)", icon: MonitorSmartphone },
  { label: "Logo Design & Branding", icon: Palette },
  { label: "Graphic Design & Marketing Collateral", icon: Palette },
  { label: "Video Editing & Motion Graphics", icon: Clapperboard },
  { label: "Social Media Management", icon: TrendingUp },
  { label: "Social Media Content Creation", icon: TrendingUp },
  { label: "Voice Over & Narration", icon: Mic },
  { label: "Google Ads / PPC Campaigns", icon: Globe },
  { label: "Facebook/Instagram Ads", icon: Globe },
  { label: "Content Writing / Copywriting", icon: PenTool },
  { label: "SEO & Keyword Research", icon: Globe },
  { label: "Academic Writing / Essay Help", icon: BookOpen },
  { label: "Thesis / Capstone Support", icon: FileText },
  { label: "SPSS Analysis & Research Methodology", icon: GraduationCap },
  { label: "Feasibility Study / Business Plan", icon: FileText },
  { label: "System Design / Software Architecture", icon: Zap },
  { label: "Mobile App Development", icon: MonitorSmartphone },
  { label: "AI Integration / Chatbots", icon: MessageSquare },
  { label: "Automation & Workflow Setup", icon: Zap },
  { label: "IT Support & Troubleshooting", icon: HelpCircle },
  { label: "Presentation / PPT Design", icon: PenTool },
  { label: "Academic Commission — Thesis Chapter", icon: BookOpen },
  { label: "Academic Commission — Full Thesis", icon: FileText },
  { label: "Academic Commission — Capstone System", icon: MonitorSmartphone },
  { label: "Academic Commission — Defense PPT + Script", icon: GraduationCap },
  { label: "Other — Describe Below", icon: HelpCircle },
];

const budgetOptions = [
  "Under ₱5,000",
  "₱5,000 – ₱15,000",
  "₱15,000 – ₱30,000",
  "₱30,000 – ₱50,000",
  "₱50,000+",
  "Flexible / To be discussed",
];

const timelineOptions = [
  "ASAP (within 1 week)",
  "1 – 2 weeks",
  "2 – 4 weeks",
  "1 – 2 months",
  "Flexible / No rush",
  "Ongoing / Long-term",
];

export default function Contact() {
  const { t } = useLanguage();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [businessName, setBusinessName] = useState("");
  const [serviceType, setServiceType] = useState("");
  const [budget, setBudget] = useState("");
  const [timeline, setTimeline] = useState("");
  const [message, setMessage] = useState("");
  const [discountType, setDiscountType] = useState("none");
  const [discountId, setDiscountId] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");

  const sendMessage = trpc.message.create.useMutation({
    onSuccess: () => {
      setStatus("success");
      setName("");
      setEmail("");
      setPhone("");
      setBusinessName("");
      setServiceType("");
      setBudget("");
      setTimeline("");
      setDiscountType("none");
      setDiscountId("");
      setMessage("");
    },
    onError: (err) => {
      setStatus("error");
      setErrorMsg(err.message || "Something went wrong. Please try again or email me directly.");
    },
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !email.trim() || !message.trim()) return;
    setStatus("loading");
    setErrorMsg("");
    sendMessage.mutate({
      name: name.trim(),
      email: email.trim(),
      phone: phone.trim() || undefined,
      businessName: businessName.trim() || undefined,
      serviceType: serviceType || undefined,
      budget: budget || undefined,
      timeline: timeline || undefined,
      discountType: discountType !== "none" ? discountType : undefined,
      discountId: discountId.trim() || undefined,
      message: message.trim(),
    });
  };

  return (
    <div>
      <SEO
        title="Contact | Get a Free Quote | Cylux Code"
        description="Get in touch for a free consultation. Website development, thesis help, graphic design, video editing, and more. Response within 24 hours. Based in Malolos, Bulacan, Philippines."
        pathname="/contact"
        keywords="hire web developer Philippines, freelance developer contact, thesis help contact, get a quote website"
      />
      <section className="px-4 pb-12 pt-28 md:px-6 lg:px-8">
        <div className="mx-auto max-w-[1200px]">
          <div className="text-center">
            <span className="eyebrow">Contact</span>
            <h1 className="mt-4 text-4xl font-extrabold tracking-tight md:text-6xl" style={{ color: "var(--text-primary)" }}>
              {t("contact.hero.headline")}
            </h1>
            <p className="mx-auto mt-4 max-w-xl text-lg" style={{ color: "var(--text-secondary)" }}>
              {t("contact.hero.subtitle")}
            </p>
            <div className="mt-4 flex flex-wrap items-center justify-center gap-4 text-xs" style={{ color: "var(--text-muted)" }}>
              <span className="flex items-center gap-1"><CheckCircle size={12} style={{ color: "#34C759" }} /> {t("contact.hero.trust1")}</span>
              <span className="flex items-center gap-1"><CheckCircle size={12} style={{ color: "#34C759" }} /> {t("contact.hero.trust2")}</span>
              <span className="flex items-center gap-1"><CheckCircle size={12} style={{ color: "#34C759" }} /> {t("contact.hero.trust3")}</span>
            </div>
          </div>

          <div className="mt-10 grid gap-8 lg:grid-cols-[1fr_300px]">
            {/* Form */}
            <div className="glass-card rounded-3xl p-5 md:p-6">
              {status === "success" ? (
                <div className="flex flex-col items-center justify-center py-14 text-center">
                  <div className="flex h-16 w-16 items-center justify-center rounded-full" style={{ background: "rgba(52, 199, 89, 0.15)" }}>
                    <CheckCircle size={32} style={{ color: "#34C759" }} />
                  </div>
                  <h3 className="mt-4 text-xl font-semibold" style={{ color: "var(--text-primary)" }}>{t("contact.success.title")}</h3>
                  <p className="mt-2 text-sm" style={{ color: "var(--text-secondary)" }}>
                    {t("contact.success.subtitle")}
                  </p>
                  <button onClick={() => setStatus("idle")} className="btn-primary mt-6 rounded-full">{t("contact.success.button")}</button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid gap-4 sm:grid-cols-2">
                    <div>
                      <label className="mb-1 block text-sm font-medium" style={{ color: "var(--text-primary)" }}>
                        Full Name <span className="text-red-500">*</span>
                      </label>
                      <input required value={name} onChange={(e) => setName(e.target.value)} placeholder="Your name" className="contact-input" />
                    </div>
                    <div>
                      <label className="mb-1 block text-sm font-medium" style={{ color: "var(--text-primary)" }}>
                        Email <span className="text-red-500">*</span>
                      </label>
                      <input required type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="you@example.com" className="contact-input" />
                    </div>
                  </div>

                  <div className="grid gap-4 sm:grid-cols-2">
                    <div>
                      <label className="mb-1 block text-sm font-medium" style={{ color: "var(--text-primary)" }}>Phone / WhatsApp</label>
                      <input value={phone} onChange={(e) => setPhone(e.target.value)} placeholder="+63 912 345 6789" className="contact-input" />
                    </div>
                    <div>
                      <label className="mb-1 block text-sm font-medium" style={{ color: "var(--text-primary)" }}>Business / School</label>
                      <input value={businessName} onChange={(e) => setBusinessName(e.target.value)} placeholder="Your company or school" className="contact-input" />
                    </div>
                  </div>

                  <div>
                    <label className="mb-1 block text-sm font-medium" style={{ color: "var(--text-primary)" }}>Service Type</label>
                    <select value={serviceType} onChange={(e) => setServiceType(e.target.value)} className="contact-input">
                      <option value="">Select a service...</option>
                      {serviceOptions.map((opt) => (
                        <option key={opt.label} value={opt.label}>{opt.label}</option>
                      ))}
                    </select>
                  </div>

                  <div className="grid gap-4 sm:grid-cols-2">
                    <div>
                      <label className="mb-1 block text-sm font-medium" style={{ color: "var(--text-primary)" }}>Budget Range</label>
                      <select value={budget} onChange={(e) => setBudget(e.target.value)} className="contact-input">
                        <option value="">Select budget...</option>
                        {budgetOptions.map((opt) => (
                          <option key={opt} value={opt}>{opt}</option>
                        ))}
                      </select>
                    </div>
                    <div>
                      <label className="mb-1 block text-sm font-medium" style={{ color: "var(--text-primary)" }}>Timeline</label>
                      <select value={timeline} onChange={(e) => setTimeline(e.target.value)} className="contact-input">
                        <option value="">Select timeline...</option>
                        {timelineOptions.map((opt) => (
                          <option key={opt} value={opt}>{opt}</option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div className="grid gap-4 sm:grid-cols-2">
                    <div>
                      <label className="mb-1 block text-sm font-medium" style={{ color: "var(--text-primary)" }}>Apply for Special Discount</label>
                      <select value={discountType} onChange={(e) => setDiscountType(e.target.value)} className="contact-input">
                        <option value="none">None</option>
                        <option value="student">Student</option>
                        <option value="pwd">PWD (Person with Disability)</option>
                        <option value="senior">Senior Citizen</option>
                      </select>
                    </div>
                    {discountType !== "none" && (
                      <div>
                        <label className="mb-1 block text-sm font-medium" style={{ color: "var(--text-primary)" }}>ID / School Reference</label>
                        <input value={discountId} onChange={(e) => setDiscountId(e.target.value)} placeholder="Student ID / PWD ID / Senior ID" className="contact-input" />
                      </div>
                    )}
                  </div>
                  {discountType !== "none" && (
                    <p className="text-xs" style={{ color: "var(--text-muted)" }}>
                      Valid ID will be verified before the discount is applied. You'll be asked to present it during our consultation call.
                    </p>
                  )}

                  <div>
                    <label className="mb-1 block text-sm font-medium" style={{ color: "var(--text-primary)" }}>
                      Project Details <span className="text-red-500">*</span>
                    </label>
                    <textarea required value={message} onChange={(e) => setMessage(e.target.value)} placeholder="Describe your project, goals, and any specific requirements..." rows={4} className="contact-input resize-y" />
                  </div>

                  {status === "error" && (
                    <div className="flex items-center gap-2 rounded-2xl bg-red-500/10 px-4 py-3 text-sm" style={{ color: "#FF3B30" }}>
                      <AlertCircle size={16} />
                      <span>{errorMsg}</span>
                    </div>
                  )}

                  <button type="submit" disabled={status === "loading"} className="btn-primary flex w-full items-center justify-center gap-2 rounded-full py-3 disabled:opacity-60">
                    {status === "loading" ? (
                      <span className="flex items-center gap-2"><span className="h-4 w-4 animate-spin rounded-full border-2 border-white/30 border-t-white" />Sending...</span>
                    ) : (
                      <><Send size={16} />{t("contact.form.submit")}</>
                    )}
                  </button>
                  <p className="text-center text-xs" style={{ color: "var(--text-muted)" }}>{t("contact.form.privacy")}</p>
                </form>
              )}
            </div>

            {/* Sidebar */}
            <div className="space-y-5">
              <div className="glass-card rounded-3xl p-5">
                <h3 className="text-sm font-semibold uppercase tracking-wider" style={{ color: "var(--text-primary)" }}>Contact Info</h3>
                <div className="mt-4 space-y-3">
                  <div className="flex items-start gap-3">
                    <Mail size={16} className="mt-0.5 shrink-0" style={{ color: "var(--accent-blue)" }} />
                    <div>
                      <p className="text-[11px] font-medium uppercase tracking-wider" style={{ color: "var(--text-muted)" }}>Email</p>
                      <a href="mailto:rommeld216@gmail.com" className="text-sm font-medium hover:underline" style={{ color: "var(--text-primary)" }}>rommeld216@gmail.com</a>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Phone size={16} className="mt-0.5 shrink-0" style={{ color: "var(--accent-blue)" }} />
                    <div>
                      <p className="text-[11px] font-medium uppercase tracking-wider" style={{ color: "var(--text-muted)" }}>Phone</p>
                      <a href="tel:+639627905910" className="text-sm font-medium hover:underline" style={{ color: "var(--text-primary)" }}>+63 962 790 5910</a>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <MapPin size={16} className="mt-0.5 shrink-0" style={{ color: "var(--accent-blue)" }} />
                    <div>
                      <p className="text-[11px] font-medium uppercase tracking-wider" style={{ color: "var(--text-muted)" }}>Location</p>
                      <p className="text-sm" style={{ color: "var(--text-primary)" }}>Malolos, Bulacan, Philippines</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Clock size={16} className="mt-0.5 shrink-0" style={{ color: "var(--accent-blue)" }} />
                    <div>
                      <p className="text-[11px] font-medium uppercase tracking-wider" style={{ color: "var(--text-muted)" }}>Response Time</p>
                      <p className="text-sm" style={{ color: "var(--text-primary)" }}>Within 24 hours</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="glass-card rounded-3xl p-5">
                <h3 className="text-sm font-semibold uppercase tracking-wider" style={{ color: "var(--text-primary)" }}>{t("contact.sidebar.next.title")}</h3>
                <div className="mt-4 space-y-3">
                  {[
                    { step: "1", label: t("contact.sidebar.next.1") },
                    { step: "2", label: t("contact.sidebar.next.2") },
                    { step: "3", label: t("contact.sidebar.next.3") },
                    { step: "4", label: t("contact.sidebar.next.4") },
                  ].map((item) => (
                    <div key={item.step} className="flex items-center gap-3">
                      <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full text-[10px] font-bold text-white" style={{ background: "var(--accent-blue)" }}>{item.step}</span>
                      <span className="text-sm" style={{ color: "var(--text-secondary)" }}>{item.label}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Payment Options — full width at bottom */}
          <div className="mt-8">
            <div className="glass-card rounded-3xl p-6 md:p-8">
              <h3 className="text-center text-base font-semibold" style={{ color: "var(--text-primary)" }}>Accepted Payment Methods</h3>
              <p className="mx-auto mt-2 max-w-lg text-center text-sm" style={{ color: "var(--text-secondary)" }}>
                Pay via GCash, Maya, PayPal, or Google Pay. All account details are verified and ready for transfer.
              </p>
              <div className="mt-6">
                <PaymentTooltip layout="grid" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
