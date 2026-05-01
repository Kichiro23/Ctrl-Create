import { createContext, useContext, useState, useCallback, useEffect } from "react";

type Language = "en" | "fil";

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  toggleLanguage: () => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | null>(null);

const STORAGE_KEY = "cylux-language";

export const translations: Record<string, Record<Language, string>> = {
  // Navbar
  "nav.getStarted": {
    en: "Get Started",
    fil: "Simulan Na",
  },

  // Home — Hero
  "home.hero.headline": {
    en: "Cylux Code",
    fil: "Cylux Code",
  },
  "home.hero.subheadline": {
    en: "You need a website that converts, a thesis that passes, or designs that sell — but finding someone reliable who won't charge agency rates feels impossible. I help students and business owners worldwide turn ideas into results, with transparent pricing and personal service.",
    fil: "Kailangan mo ng website na kumikita, thesis na papasa, o designs na binebenta — pero ang hirap maghanap ng mapagkakatiwalaan na hindi singmahal ng agency. Tulungan kitang gawing totoo ang ideas mo, with transparent pricing at personal service.",
  },
  "home.hero.ctaPrimary": {
    en: "Get My Free Quote",
    fil: "Kumuha ng Free Quote",
  },
  "home.hero.ctaSecondary": {
    en: "See How I Help",
    fil: "Tingnan Ang Services",
  },
  "home.hero.trust1": {
    en: "No obligation",
    fil: "Walang pilitan",
  },
  "home.hero.trust2": {
    en: "Reply within 24h",
    fil: "Sagot within 24h",
  },
  "home.hero.trust3": {
    en: "Limited slots per month",
    fil: "Limited slots lang per month",
  },

  // Home — Process
  "home.process.eyebrow": {
    en: "Simple Process",
    fil: "Simple Process",
  },
  "home.process.title": {
    en: "How It Works",
    fil: "Paano Gumagana",
  },
  "home.process.subtitle": {
    en: "Four steps from first message to finished project. No surprises, no hidden fees.",
    fil: "Apat na steps mula message hanggang finished project. Walang sorpresa, walang hidden fees.",
  },
  "home.process.step1.title": {
    en: "Tell Me What You Need",
    fil: "Sabihin Mo Kung Ano Kailangan Mo",
  },
  "home.process.step1.desc": {
    en: "Fill out the quick form or message me. Takes 2 minutes.",
    fil: "Fill out ang form o message mo ako. 2 minutes lang.",
  },
  "home.process.step2.title": {
    en: "Get Your Quote",
    fil: "Makakuha ng Quote",
  },
  "home.process.step2.desc": {
    en: "I reply within 24 hours with a clear price and timeline.",
    fil: "Sasagot ako within 24 hours with clear price at timeline.",
  },
  "home.process.step3.title": {
    en: "I Build It",
    fil: "Ako Ang Magbuo",
  },
  "home.process.step3.desc": {
    en: "You get progress updates. Revisions included.",
    fil: "Magkakaroon ka ng progress updates. Revisions included na.",
  },
  "home.process.step4.title": {
    en: "Launch & Celebrate",
    fil: "Launch at Celebrate",
  },
  "home.process.step4.desc": {
    en: "50% downpayment to start · 50% on delivery · Full handoff with support.",
    fil: "50% downpayment para simulan · 50% pag tapos · Full handoff with support.",
  },
  "home.process.cta": {
    en: "Start Step 1 — It's Free",
    fil: "Simulan Step 1 — Libre",
  },
  "home.process.ctaNote": {
    en: "No payment required to get a quote",
    fil: "Libre ang quote, walang bayad",
  },

  // Home — Services
  "home.services.eyebrow": {
    en: "What I Do",
    fil: "Ang Ginagawa Ko",
  },
  "home.services.title": {
    en: "Built for Your Goals",
    fil: "Ginawa Para Sa Goals Mo",
  },
  "home.services.subtitle": {
    en: "Whether you're a student racing a deadline or a business owner needing a site that sells — I handle the technical work so you can focus on what you do best.",
    fil: "Student ka man na nagmamadali sa deadline o business owner na kailangan ng website — ako na bahala sa technical work para focus ka sa forte mo.",
  },

  // Home — Academic CTA
  "home.academic.ctaPrimary": {
    en: "Get My Academic Quote",
    fil: "Kumuha ng Academic Quote",
  },
  "home.academic.ctaSecondary": {
    en: "See Services",
    fil: "Tingnan Ang Services",
  },
  "home.academic.note": {
    en: "Student discounts available · No obligation quote",
    fil: "Student discount available · Walang pilitan",
  },

  // Home — Templates
  "home.templates.cta": {
    en: "Browse All Templates",
    fil: "Tingnan Lahat Ng Templates",
  },
  "home.templates.note": {
    en: "36 samples starting at ₱1,500",
    fil: "36 samples mula ₱1,500",
  },

  // Home — Membership
  "home.membership.note": {
    en: "Save up to 30% vs one-time pricing",
    fil: "Tipid hanggang 30% vs one-time pricing",
  },

  // Home — Contact CTA
  "home.contact.title": {
    en: "Want a Site Like These?",
    fil: "Gusto Mo Ng Ganitong Website?",
  },
  "home.contact.subtitle": {
    en: "Every project was built at a fixed price with a fast turnaround. Your brand deserves the same.",
    fil: "Bawat project ay fixed price with fast turnaround. Deserve mo rin yan.",
  },
  "home.contact.ctaPrimary": {
    en: "Get My Free Quote",
    fil: "Kumuha Ng Free Quote",
  },
  "home.contact.ctaSecondary": {
    en: "View All Work",
    fil: "Tingnan Ang Works",
  },
  "home.contact.trust": {
    en: "100% free quote · 50% downpayment to start · Reply within 24 hours",
    fil: "100% free quote · 50% downpayment para simulan · Sagot within 24h",
  },

  // Services
  "services.hero.headline": {
    en: "Services",
    fil: "Services",
  },
  "services.hero.subtitle": {
    en: "Staring at a blank page? Deadline looming? Need a website that actually brings in customers? I provide academic writing, thesis help, website development, video editing, and design — at rates lower than agencies, with personal one-on-one service.",
    fil: "Blank page? Deadline na? Kailangan ng website na kumikita? Academic writing, thesis help, website dev, video editing, at design — mas mura kaysa sa agency, with personal one-on-one service.",
  },
  "services.hero.ctaPrimary": {
    en: "Get My Free Quote",
    fil: "Kumuha Ng Free Quote",
  },
  "services.hero.ctaSecondary": {
    en: "See Pricing",
    fil: "Tingnan Ang Presyo",
  },
  "services.hero.trust1": {
    en: "No obligation",
    fil: "Walang pilitan",
  },
  "services.hero.trust2": {
    en: "Reply within 24h",
    fil: "Sagot within 24h",
  },
  "services.hero.trust3": {
    en: "120+ projects delivered",
    fil: "120+ projects na nagawa",
  },
  "services.cta.title": {
    en: "Let's Talk About Your Project",
    fil: "Usap Tayo About Sa Project Mo",
  },
  "services.cta.subtitle": {
    en: "Tell me what you need. I'll reply within 24 hours with a clear price, timeline, and next steps — no pressure, no hidden fees.",
    fil: "Sabihin mo lang kung ano kailangan mo. Sasagot ako within 24h with clear price, timeline, at next steps — walang pressure, walang hidden fees.",
  },
  "services.cta.primary": {
    en: "Get My Free Quote",
    fil: "Kumuha Ng Free Quote",
  },
  "services.cta.secondary": {
    en: "View Packages",
    fil: "Tingnan Ang Packages",
  },
  "services.cta.trust": {
    en: "100% free quote · 50% downpayment required · Student discounts available",
    fil: "100% free quote · 50% downpayment required · Student discount available",
  },

  // Academic
  "academic.hero.headline": {
    en: "Thesis, Research & Academic Writing",
    fil: "Thesis, Research, at Academic Writing",
  },
  "academic.hero.subtitle": {
    en: "Deadline approaching? Chapter stuck? SPSS not making sense? I help Filipino students finish their thesis, research papers, and capstone systems — with Turnitin-ready output, SPSS analysis, and defense prep included.",
    fil: "Deadline na? Stuck sa chapter? Hindi gets ang SPSS? Tutulungan kitang tapusin ang thesis, research papers, at capstone system — may Turnitin-ready output, SPSS analysis, at defense prep.",
  },
  "academic.hero.ctaPrimary": {
    en: "Get My Free Academic Quote",
    fil: "Kumuha Ng Free Academic Quote",
  },
  "academic.hero.ctaSecondary": {
    en: "See Pricing",
    fil: "Tingnan Ang Presyo",
  },
  "academic.hero.trust1": {
    en: "50+ students helped",
    fil: "50+ students natulungan",
  },
  "academic.hero.trust2": {
    en: "3–5 days per chapter",
    fil: "3–5 days per chapter",
  },
  "academic.hero.trust3": {
    en: "100% confidential",
    fil: "100% confidential",
  },
  "academic.cta.title": {
    en: "Don't Let the Deadline Win",
    fil: "Huwag Magpaubos Sa Deadline",
  },
  "academic.cta.subtitle": {
    en: "Every day you wait is a day closer to defense. Send me your details now and I'll reply within 24 hours with a clear plan to get you across the finish line.",
    fil: "Bawat araw na hinihintay mo ay papalapit sa defense. Send mo na ngayon ang details at sasagot ako within 24h with clear plan para makarating ka sa finish line.",
  },
  "academic.cta.primary": {
    en: "Get My Free Quote",
    fil: "Kumuha Ng Free Quote",
  },
  "academic.cta.secondary": {
    en: "View Packages",
    fil: "Tingnan Ang Packages",
  },
  "academic.cta.trust": {
    en: "Student discounts available · 100% confidential · 50% downpayment to start",
    fil: "Student discount available · 100% confidential · 50% downpayment para simulan",
  },

  // Packages
  "packages.hero.headline": {
    en: "Know Exactly What You'll Pay",
    fil: "Alam Mo Na Agad Magkano",
  },
  "packages.hero.subtitle": {
    en: "No hidden fees. No surprise charges. Every package includes exactly what's listed — and I'll tell you upfront if your project needs anything extra.",
    fil: "Walang hidden fees. Walang surprise charges. Ang bawat package ay may exact list — at sasabihin ko agad kung may extra kailangan ang project mo.",
  },
  "packages.hero.cta": {
    en: "Get My Free Quote",
    fil: "Kumuha Ng Free Quote",
  },
  "packages.hero.trust1": {
    en: "No hidden fees",
    fil: "Walang hidden fees",
  },
  "packages.hero.trust2": {
    en: "Prices start at ₱12,000",
    fil: "Mula ₱12,000 lang",
  },
  "packages.hero.trust3": {
    en: "Student discounts available",
    fil: "Student discount available",
  },
  "packages.cta.title": {
    en: "Still Deciding? Let's Talk.",
    fil: "Hindi Pa Sure? Usap Tayo.",
  },
  "packages.cta.subtitle": {
    en: "Not sure which package fits? I'll recommend the right one based on your goals and budget. No sales pitch — just honest advice.",
    fil: "Hindi sure kung anong bagay? Ire-recommend ko ang tamang package base sa goals at budget mo. Walang sales pitch — honest advice lang.",
  },
  "packages.cta.primary": {
    en: "Get My Free Quote",
    fil: "Kumuha Ng Free Quote",
  },
  "packages.cta.secondary": {
    en: "Browse All Services",
    fil: "Tingnan Lahat Ng Services",
  },
  "packages.cta.trust": {
    en: "100% free quote · No commitment · Reply within 24 hours",
    fil: "100% free quote · Walang commitment · Sagot within 24h",
  },

  // Membership
  "membership.hero.headline": {
    en: "Save Up to 30% on Every Project",
    fil: "Tipid Hanggang 30% Sa Bawat Project",
  },
  "membership.hero.subtitle": {
    en: "Tired of paying full price every time you need help? A Cylux Code membership locks in your discount, gives you priority support, and includes free extras every month — for less than the cost of one project.",
    fil: "Pagod ka na bang magbayad ng full price tuwing kailangan mo ng tulong? Ang Cylux Code membership ay nagla-lock ng discount mo, may priority support, at may free extras every month — mas mura pa kaysa sa isang project.",
  },
  "membership.hero.cta": {
    en: "Get My Membership Quote",
    fil: "Kumuha Ng Membership Quote",
  },
  "membership.hero.trust1": {
    en: "No annual fees",
    fil: "Walang annual fee",
  },
  "membership.hero.trust2": {
    en: "Cancel anytime",
    fil: "Pwede mag-cancel anytime",
  },
  "membership.hero.trust3": {
    en: "Priority support",
    fil: "Priority support",
  },
  "membership.card.cta": {
    en: "Apply for My Membership",
    fil: "Mag-Apply Sa Membership",
  },
  "membership.card.note": {
    en: "No annual fee · Cancel anytime · Physical card included",
    fil: "Walang annual fee · Pwede mag-cancel anytime · May physical card",
  },
  "membership.final.title": {
    en: "Not Sure Which Tier?",
    fil: "Hindi Sure Kung Anong Tier?",
  },
  "membership.final.subtitle": {
    en: "I'll recommend the right membership based on how often you need help and your typical project size. No commitment required.",
    fil: "Ire-recommend ko ang tamang membership base sa gaano ka kadalas kailangan ng tulong at sa laki ng project mo. Walang commitment.",
  },
  "membership.final.primary": {
    en: "Get My Free Recommendation",
    fil: "Kumuha Ng Free Recommendation",
  },
  "membership.final.secondary": {
    en: "Compare Packages",
    fil: "I-compare Ang Packages",
  },
  "membership.final.trust": {
    en: "100% free consultation · No credit card required · Reply within 24 hours",
    fil: "100% free consultation · Walang credit card needed · Sagot within 24h",
  },

  // Templates
  "templates.hero.headline": {
    en: "Don't Start From Scratch",
    fil: "Huwag Magsimula Sa Zero",
  },
  "templates.hero.subtitle": {
    en: "Building a website or writing a thesis alone wastes weeks. Browse my sample designs and academic packages — I'll customize anything to match your exact needs at a fraction of agency cost.",
    fil: "Ang mag-isa sa website o thesis ay sayang na linggo. Tingnan ang sample designs at academic packages ko — i-customize ko ang lahat para tumugma sa needs mo at mura compared sa agency.",
  },
  "templates.hero.cta": {
    en: "Get My Free Custom Quote",
    fil: "Kumuha Ng Free Custom Quote",
  },
  "templates.hero.trust1": {
    en: "Prices start at ₱1,500",
    fil: "Mula ₱1,500 lang",
  },
  "templates.hero.trust2": {
    en: "Fully customized for you",
    fil: "Fully customized para sayo",
  },
  "templates.hero.trust3": {
    en: "50% downpayment required",
    fil: "50% downpayment required",
  },
  "templates.cta.title": {
    en: "Not Sure Which One Fits?",
    fil: "Hindi Sure Kung Ano Ang Bagay?",
  },
  "templates.cta.subtitle": {
    en: "Tell me your goal and budget. I'll recommend the best option — or build something custom. No pressure, no obligation.",
    fil: "Sabihin mo lang ang goal at budget mo. Ire-recommend ko ang best option — o magbuo ng custom. Walang pressure, walang pilitan.",
  },
  "templates.cta.primary": {
    en: "Get My Free Recommendation",
    fil: "Kumuha Ng Free Recommendation",
  },
  "templates.cta.trust": {
    en: "100% free quote · Reply within 24 hours · Student discounts available",
    fil: "100% free quote · Sagot within 24h · Student discount available",
  },
  "templates.modal.cta": {
    en: "Get My Quote",
    fil: "Kumuha Ng Quote",
  },

  // Home — Academic CTA
  "home.academic.title": {
    en: "Need Thesis or Academic Help?",
    fil: "Kailangan Ng Tulong Sa Thesis?",
  },
  "home.academic.desc": {
    en: "SPSS analysis, chapter writing, defense prep, and capstone systems. Competitive rates with flexible payment via GCash, Maya, or PayPal.",
    fil: "SPSS analysis, chapter writing, defense prep, at capstone systems. Competitive rates with flexible payment via GCash, Maya, o PayPal.",
  },

  // Home — Templates
  "home.templates.eyebrow": {
    en: "Website Templates",
    fil: "Website Templates",
  },
  "home.templates.title": {
    en: "Website Samples",
    fil: "Website Samples",
  },
  "home.templates.subtitle": {
    en: "These are starting points — I'll customize any design to match your brand, content, and goals.",
    fil: "Ang mga ito ay starting points — i-customize ko ang design para tumugma sa brand, content, at goals mo.",
  },

  // Home — Academic Commissions
  "home.academicComm.eyebrow": {
    en: "Academic Commissions",
    fil: "Academic Commissions",
  },
  "home.academicComm.title": {
    en: "Student-Friendly Packages",
    fil: "Packages Na Pang-Estudyante",
  },
  "home.academicComm.subtitle": {
    en: "From essays to full theses — quality academic support at fair prices.",
    fil: "Mula essay hanggang full thesis — quality academic support sa abot-kayang presyo.",
  },
  "home.academicComm.cta": {
    en: "Browse All Templates & Commissions",
    fil: "Tingnan Lahat Ng Templates & Commissions",
  },

  // Home — Membership
  "home.membership.eyebrow": {
    en: "Membership",
    fil: "Membership",
  },
  "home.membership.title": {
    en: "Unlock More Value",
    fil: "Mas Sulit Ang Value",
  },
  "home.membership.subtitle": {
    en: "Sign up and become a Cylux Code member today.",
    fil: "Mag-sign up at maging Cylux Code member ngayon.",
  },
  "home.membership.webTitle": {
    en: "Website Building",
    fil: "Website Building",
  },
  "home.membership.webDesc": {
    en: "For businesses & professionals",
    fil: "Para sa businesses at professionals",
  },
  "home.membership.acadTitle": {
    en: "Academic Support",
    fil: "Academic Support",
  },
  "home.membership.acadDesc": {
    en: "For students & researchers",
    fil: "Para sa students at researchers",
  },
  "home.membership.viewWeb": {
    en: "View Membership Tiers",
    fil: "Tingnan Ang Membership Tiers",
  },
  "home.membership.viewAcad": {
    en: "View Academic Tiers",
    fil: "Tingnan Ang Academic Tiers",
  },

  // Home — Why Choose Me
  "home.why.eyebrow": {
    en: "Why Me",
    fil: "Bakit Ako",
  },
  "home.why.title": {
    en: "What Makes Cylux Code Different",
    fil: "Ano Ang Pinagkaiba Ng Cylux Code",
  },
  "home.why.subtitle": {
    en: "Not an agency. Not a faceless platform. Just one person who actually cares about your results.",
    fil: "Hindi agency. Hindi faceless platform. Isang tao lang na talagang care sa results mo.",
  },
  "home.why.1.title": {
    en: "One-on-One Service",
    fil: "One-on-One Service",
  },
  "home.why.1.desc": {
    en: "You talk directly to me — the person building your project. No account managers, no handoffs, no miscommunication.",
    fil: "Diretso mo akong kausap — ako mismo ang magbuo ng project mo. Walang account manager, walang handoff, walang miscommunication.",
  },
  "home.why.2.title": {
    en: "Affordable Pricing",
    fil: "Abot-Kayang Presyo",
  },
  "home.why.2.desc": {
    en: "Agency quality at freelance prices. Student discounts available. Flexible payment via GCash, Maya, or PayPal.",
    fil: "Agency quality sa freelance price. May student discount. Flexible payment via GCash, Maya, o PayPal.",
  },
  "home.why.3.title": {
    en: "Fast Turnaround",
    fil: "Mabilis Ang Turnaround",
  },
  "home.why.3.desc": {
    en: "Most websites delivered in 2–4 weeks. Thesis chapters in 3–5 days. I don't take on more projects than I can handle.",
    fil: "Karamihan ng website ay 2–4 weeks. Thesis chapters ay 3–5 days. Hindi ako kumukuha ng sobrang daming project.",
  },
  "home.why.4.title": {
    en: "Revisions Until You're Happy",
    fil: "Revisions Hanggang Masaya Ka",
  },
  "home.why.4.desc": {
    en: "Your satisfaction matters. Every package includes revisions, and I won't stop until you're proud of the result.",
    fil: "Mahalaga ang satisfaction mo. May revisions ang bawat package, at hindi ako hihinto hanggang proud ka sa result.",
  },

  // Home — Testimonials
  "home.testimonials.eyebrow": {
    en: "Testimonials",
    fil: "Testimonials",
  },
  "home.testimonials.title": {
    en: "Client Words",
    fil: "Sabi Ng Clients",
  },
  "home.testimonials.subtitle": {
    en: "Real feedback from real clients I've worked with.",
    fil: "Tunay na feedback mula sa clients na natulungan ko.",
  },

  // Contact
  "contact.hero.headline": {
    en: "Get Your Free Quote in 24 Hours",
    fil: "Makakuha Ng Free Quote Sa Loob Ng 24 Oras",
  },
  "contact.hero.subtitle": {
    en: "Fill out this short form — it takes 2 minutes. I'll review your project and reply with a clear price, timeline, and next steps. No pressure, no spam.",
    fil: "Fill out ang form na ito — 2 minutes lang. Ire-review ko ang project mo at sasagot with clear price, timeline, at next steps. Walang pressure, walang spam.",
  },
  "contact.hero.trust1": {
    en: "120+ projects delivered",
    fil: "120+ projects na nagawa",
  },
  "contact.hero.trust2": {
    en: "Reply within 24h",
    fil: "Sagot within 24h",
  },
  "contact.hero.trust3": {
    en: "50% downpayment required",
    fil: "50% downpayment required",
  },
  "contact.form.submit": {
    en: "Get My Free Quote",
    fil: "Kumuha Ng Free Quote",
  },
  "contact.form.privacy": {
    en: "No commitment required. Your information is kept private and never shared.",
    fil: "Walang commitment. Private ang info mo at hindi isi-share.",
  },
  "contact.sidebar.next.title": {
    en: "What Happens Next",
    fil: "Ano Ang Sunod",
  },
  "contact.sidebar.next.1": {
    en: "You submit this form",
    fil: "Mag-submit ka ng form",
  },
  "contact.sidebar.next.2": {
    en: "I review and reply within 24h",
    fil: "Ire-review ko at sasagot within 24h",
  },
  "contact.sidebar.next.3": {
    en: "We agree on scope & price",
    fil: "Mag-aagree tayo sa scope at price",
  },
  "contact.sidebar.next.4": {
    en: "I build. You review. We launch.",
    fil: "Ako magbuo. Ikaw mag-review. Launch na.",
  },
  "contact.success.title": {
    en: "Message Sent Successfully!",
    fil: "Na-send Na Ang Message!",
  },
  "contact.success.subtitle": {
    en: "Thank you for reaching out. I'll review your request and get back to you within 24 hours.",
    fil: "Salamat sa pag-reach out. Ire-review ko ang request mo at sasagot within 24 hours.",
  },
  "contact.success.button": {
    en: "Send Another Message",
    fil: "Mag-send Ng Iba Pang Message",
  },
};

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguageState] = useState<Language>(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (stored === "fil" || stored === "en") return stored;
    } catch { /* noop */ }
    return "en";
  });

  const setLanguage = useCallback((lang: Language) => {
    setLanguageState(lang);
    try {
      localStorage.setItem(STORAGE_KEY, lang);
    } catch { /* noop */ }
  }, []);

  const toggleLanguage = useCallback(() => {
    setLanguage(language === "en" ? "fil" : "en");
  }, [language, setLanguage]);

  const t = useCallback(
    (key: string) => {
      return translations[key]?.[language] ?? translations[key]?.["en"] ?? key;
    },
    [language]
  );

  // Persist on change
  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, language);
    } catch { /* noop */ }
  }, [language]);

  return (
    <LanguageContext.Provider value={{ language, setLanguage, toggleLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useLanguage must be used within LanguageProvider");
  return ctx;
}
