export type TemplateCategory = "Website Templates" | "Academic Commissions";

export interface Template {
  id: string;
  name: string;
  category: TemplateCategory;
  subcategory: string;
  pricePHP: number;
  priceUSD: number;
  image: string;
  description: string;
  tags: string[];
  recommended?: boolean;
}

// ── WEBSITE TEMPLATES (29 total) ──────────────────────

const websiteTemplateData: Template[] = [
  // POS & Retail
  {
    id: "pos-grocery",
    name: "Grocery & Supermarket POS",
    category: "Website Templates",
    subcategory: "POS & Retail",
    pricePHP: 22000,
    priceUSD: 379,
    image: "/images/templates/template_pos_grocery.jpg",
    description:
      "Complete point-of-sale system with barcode scanning, inventory tracking, supplier management, sales reporting, and receipt printing for grocery stores and supermarkets.",
    tags: ["POS", "Inventory", "Retail", "Sales Report"],
    recommended: true,
  },
  {
    id: "pos-restaurant",
    name: "Restaurant & Cafe POS",
    category: "Website Templates",
    subcategory: "POS & Retail",
    pricePHP: 28000,
    priceUSD: 483,
    image: "/images/templates/template_pos_restaurant.jpg",
    description:
      "Restaurant management system with table management, menu builder, kitchen order display, billing, split payments, and reservation system.",
    tags: ["POS", "Restaurant", "Reservation", "Kitchen Display"],
    recommended: true,
  },
  {
    id: "water-refilling-pos",
    name: "Water Refilling Station POS",
    category: "Website Templates",
    subcategory: "POS & Retail",
    pricePHP: 18000,
    priceUSD: 310,
    image: "/images/templates/template_water_refilling.jpg",
    description:
      "Tailored for water refilling businesses with gallon tracking, delivery scheduling, customer subscriptions, refill history, and route optimization.",
    tags: ["POS", "Delivery", "Subscription", "Gallon Tracking"],
  },
  {
    id: "bakery-cafe",
    name: "Bakery & Cafe Shop",
    category: "Website Templates",
    subcategory: "POS & Retail",
    pricePHP: 12000,
    priceUSD: 207,
    image: "/images/templates/template_bakery_cafe.jpg",
    description:
      "Charming e-commerce ready template for bakeries and cafes with daily specials, pre-ordering, custom cake orders, loyalty rewards, and pickup scheduling.",
    tags: ["E-commerce", "Pre-order", "Loyalty", "Pickup"],
    recommended: true,
  },
  {
    id: "pharmacy",
    name: "Pharmacy & Drugstore",
    category: "Website Templates",
    subcategory: "POS & Retail",
    pricePHP: 22000,
    priceUSD: 379,
    image: "/images/templates/template_pharmacy.jpg",
    description:
      "Pharmacy management with medicine inventory, prescription tracking, expiry alerts, generic/brand search, supplier management, and POS billing.",
    tags: ["Pharmacy", "Inventory", "Prescription", "Expiry Alert"],
    recommended: true,
  },
  {
    id: "motorcycle-parts",
    name: "Motorcycle Parts & Service",
    category: "Website Templates",
    subcategory: "POS & Retail",
    pricePHP: 18000,
    priceUSD: 310,
    image: "/images/templates/template_motorcycle_parts.jpg",
    description:
      "Parts inventory with OEM/aftermarket tracking, service booking, repair job cards, customer vehicle history, and sales reporting for motorcycle shops.",
    tags: ["Inventory", "Service Booking", "Job Cards", "Vehicle History"],
  },
  {
    id: "printing-shop",
    name: "Printing & Digital Services",
    category: "Website Templates",
    subcategory: "POS & Retail",
    pricePHP: 10000,
    priceUSD: 172,
    image: "/images/templates/template_printing.jpg",
    description:
      "Order management for printing shops with quotation calculator, job queue, file upload, progress tracking, and delivery dispatch.",
    tags: ["Order Queue", "Quotation", "File Upload", "Progress Tracking"],
  },
  // Hospitality & Travel
  {
    id: "resort-reservation",
    name: "Resort & Hotel Reservation",
    category: "Website Templates",
    subcategory: "Hospitality & Travel",
    pricePHP: 20000,
    priceUSD: 345,
    image: "/images/templates/template_resort_reservation.jpg",
    description:
      "Full-featured hotel management with room booking, availability calendar, rate management, online payment integration, and guest check-in/out.",
    tags: ["Booking", "Calendar", "Payment", "Guest Management"],
    recommended: true,
  },
  {
    id: "car-rental",
    name: "Car Rental System",
    category: "Website Templates",
    subcategory: "Hospitality & Travel",
    pricePHP: 20000,
    priceUSD: 345,
    image: "/images/templates/template_car_rental.jpg",
    description:
      "Vehicle fleet management with booking calendar, driver assignment, pricing tiers, damage inspection checklist, and return processing.",
    tags: ["Fleet", "Booking", "Inspection", "Return"],
    recommended: true,
  },
  {
    id: "staycation",
    name: "Staycation & Vacation Rental",
    category: "Website Templates",
    subcategory: "Hospitality & Travel",
    pricePHP: 18000,
    priceUSD: 310,
    image: "/images/templates/template_staycation.jpg",
    description:
      "Airbnb-style rental platform with property listings, host dashboards, guest reviews, instant booking, and automated messaging.",
    tags: ["Rental", "Host Dashboard", "Reviews", "Messaging"],
  },
  {
    id: "travel-tours",
    name: "Travel & Tours Agency",
    category: "Website Templates",
    subcategory: "Hospitality & Travel",
    pricePHP: 18000,
    priceUSD: 310,
    image: "/images/templates/template_travel_tours.jpg",
    description:
      "Tour package management with itinerary builder, group booking, guide assignment, payment plans, and travel document tracking.",
    tags: ["Itinerary", "Group Booking", "Guide", "Payments"],
  },
  {
    id: "salon-spa",
    name: "Salon & Spa Booking",
    category: "Website Templates",
    subcategory: "Hospitality & Travel",
    pricePHP: 15000,
    priceUSD: 259,
    image: "/images/templates/template_salon_spa.jpg",
    description:
      "Appointment scheduling for salons and spas with service menu, staff roster, recurring bookings, loyalty points, and walk-in queue.",
    tags: ["Appointment", "Service Menu", "Loyalty", "Walk-in"],
    recommended: true,
  },
  {
    id: "funeral-services",
    name: "Funeral Services & Memorial",
    category: "Website Templates",
    subcategory: "Hospitality & Travel",
    pricePHP: 12000,
    priceUSD: 207,
    image: "/images/templates/template_funeral.jpg",
    description:
      "Dignified service management with package selection, obituary publishing, flower order coordination, visitation scheduling, and memorial gallery.",
    tags: ["Packages", "Obituary", "Scheduling", "Gallery"],
  },
  {
    id: "catering-events",
    name: "Catering & Events Planning",
    category: "Website Templates",
    subcategory: "Hospitality & Travel",
    pricePHP: 20000,
    priceUSD: 345,
    image: "/images/templates/template_catering_events.jpg",
    description:
      "End-to-end event catering with menu customization, quotation generator, staff assignment, equipment inventory, and client portal.",
    tags: ["Menu", "Quotation", "Staffing", "Client Portal"],
  },
  // Real Estate & Construction
  {
    id: "real-estate",
    name: "Real Estate Listing Platform",
    category: "Website Templates",
    subcategory: "Real Estate & Construction",
    pricePHP: 22000,
    priceUSD: 379,
    image: "/images/templates/template_real_estate.jpg",
    description:
      "Property marketplace with advanced search, agent profiles, virtual tours, mortgage calculator, and document generation for contracts.",
    tags: ["Marketplace", "Search", "Virtual Tour", "Calculator"],
    recommended: true,
  },
  {
    id: "construction",
    name: "Construction & Contractor Hub",
    category: "Website Templates",
    subcategory: "Real Estate & Construction",
    pricePHP: 32000,
    priceUSD: 552,
    image: "/images/templates/template_construction.jpg",
    description:
      "Project management for construction firms with bid management, subcontractor tracking, material procurement, progress photos, and safety compliance.",
    tags: ["Project Management", "Bidding", "Procurement", "Compliance"],
  },
  // Professional Services
  {
    id: "finance-hub",
    name: "Finance & Accounting Hub",
    category: "Website Templates",
    subcategory: "Professional Services",
    pricePHP: 38000,
    priceUSD: 655,
    image: "/images/templates/template_finance_hub.jpg",
    description:
      "Accounting dashboard for SMEs with invoicing, expense tracking, bank reconciliation, financial reports, and tax computation helpers.",
    tags: ["Invoicing", "Reports", "Reconciliation", "Tax"],
  },
  {
    id: "dental-clinic",
    name: "Dental Clinic Management",
    category: "Website Templates",
    subcategory: "Professional Services",
    pricePHP: 18000,
    priceUSD: 310,
    image: "/images/templates/template_dental_clinic.jpg",
    description:
      "Dental practice management with patient records, appointment scheduling, treatment plans, X-ray storage, and billing integration.",
    tags: ["Patient Records", "Scheduling", "Treatment Plans", "Billing"],
    recommended: true,
  },
  {
    id: "gym-fitness",
    name: "Gym & Fitness Center",
    category: "Website Templates",
    subcategory: "Professional Services",
    pricePHP: 15000,
    priceUSD: 259,
    image: "/images/templates/template_gym_fitness.jpg",
    description:
      "Fitness center platform with membership management, class schedules, trainer assignments, workout plans, and progress tracking.",
    tags: ["Membership", "Classes", "Trainers", "Progress"],
  },
  {
    id: "law-office",
    name: "Law Office Management",
    category: "Website Templates",
    subcategory: "Professional Services",
    pricePHP: 32000,
    priceUSD: 552,
    image: "/images/templates/template_law_office.jpg",
    description:
      "Legal practice management with case tracking, client intake forms, document templates, billing by hour/flat fee, and court calendar.",
    tags: ["Case Tracking", "Documents", "Billing", "Calendar"],
  },
  {
    id: "clinic-records",
    name: "Clinic & Patient Records",
    category: "Website Templates",
    subcategory: "Professional Services",
    pricePHP: 18000,
    priceUSD: 310,
    image: "/images/templates/template_clinic_records.jpg",
    description:
      "General clinic EMR with patient history, appointment queue, prescription printing, lab request forms, and billing statements.",
    tags: ["EMR", "Queue", "Prescription", "Lab Forms"],
    recommended: true,
  },
  // Government & Community
  {
    id: "barangay-portal",
    name: "Barangay Management Portal",
    category: "Website Templates",
    subcategory: "Government & Community",
    pricePHP: 15000,
    priceUSD: 259,
    image: "/images/templates/template_barangay_portal.jpg",
    description:
      "Barangay digitization with resident profiling, certificate generation (clearance, indigency), blotter system, and project tracking.",
    tags: ["Profiling", "Certificates", "Blotter", "Projects"],
    recommended: true,
  },
  {
    id: "school-management",
    name: "School Management System",
    category: "Website Templates",
    subcategory: "Government & Community",
    pricePHP: 35000,
    priceUSD: 603,
    image: "/images/templates/template_school_management.jpg",
    description:
      "Complete school ERP with enrollment, grading, class scheduling, faculty load, library, and parent portal for K-12 and higher education.",
    tags: ["Enrollment", "Grading", "Scheduling", "Library"],
    recommended: true,
  },
  {
    id: "e-learning",
    name: "E-Learning & LMS Platform",
    category: "Website Templates",
    subcategory: "Government & Community",
    pricePHP: 42000,
    priceUSD: 724,
    image: "/images/templates/template_elearning_lms.jpg",
    description:
      "Full learning management system with course builder, video hosting, quizzes/assessments, progress tracking, certificates, and discussion forums.",
    tags: ["LMS", "Courses", "Quizzes", "Certificates"],
    recommended: true,
  },
  {
    id: "online-voting",
    name: "Online Voting & Elections",
    category: "Website Templates",
    subcategory: "Government & Community",
    pricePHP: 16000,
    priceUSD: 276,
    image: "/images/templates/template_online_voting.jpg",
    description:
      "Secure online voting for student councils, barangay, cooperatives, and organizations with voter verification, real-time results, and audit logs.",
    tags: ["Voting", "Verification", "Results", "Audit"],
  },
  {
    id: "cooperative",
    name: "Cooperative Management System",
    category: "Website Templates",
    subcategory: "Government & Community",
    pricePHP: 20000,
    priceUSD: 345,
    image: "/images/templates/template_cooperative.jpg",
    description:
      "Cooperative operations with member registration, share capital tracking, loan application workflow, dividend computation, and elections.",
    tags: ["Members", "Loans", "Dividends", "Shares"],
  },
  {
    id: "church-portal",
    name: "Church & Ministry Portal",
    category: "Website Templates",
    subcategory: "Government & Community",
    pricePHP: 10000,
    priceUSD: 172,
    image: "/images/templates/template_church_ministry.jpg",
    description:
      "Church management with member directory, event scheduling, donation tracking, small group coordination, and sermon archive.",
    tags: ["Directory", "Events", "Donations", "Sermons"],
  },
  // Enterprise
  {
    id: "hr-payroll",
    name: "HR & Payroll System",
    category: "Website Templates",
    subcategory: "Enterprise",
    pricePHP: 48000,
    priceUSD: 828,
    image: "/images/templates/template_hr_payroll.jpg",
    description:
      "End-to-end HR suite with employee records, attendance, leave management, payroll computation, government contributions (SSS, PhilHealth, Pag-IBIG), and payslip generation.",
    tags: ["HR", "Payroll", "Attendance", "Government Forms"],
  },
  // Creative & Personal
  {
    id: "portfolio-website",
    name: "Creative Portfolio",
    category: "Website Templates",
    subcategory: "Creative & Personal",
    pricePHP: 8500,
    priceUSD: 147,
    image: "/images/assets/og-image.jpg",
    description:
      "Stunning portfolio website for developers, designers, photographers, and creatives. Project showcases, about section, skills, testimonials, and contact form with smooth animations.",
    tags: ["Portfolio", "Showcase", "Creative", "Animations"],
    recommended: true,
  },
  {
    id: "personal-website",
    name: "Personal Website / Blog",
    category: "Website Templates",
    subcategory: "Creative & Personal",
    pricePHP: 8000,
    priceUSD: 138,
    image: "/images/assets/og-image.jpg",
    description:
      "Clean personal website or blog for influencers, writers, and professionals. About page, blog posts, gallery, social links, and newsletter signup with easy content management.",
    tags: ["Blog", "Personal", "Content", "Newsletter"],
    recommended: true,
  },
  {
    id: "photography-portfolio",
    name: "Photography Portfolio",
    category: "Website Templates",
    subcategory: "Creative & Personal",
    pricePHP: 12000,
    priceUSD: 207,
    image: "/images/assets/og-image.jpg",
    description:
      "Gallery-focused portfolio for photographers and videographers. Full-screen image viewer, categorized albums, client proofing, booking sessions, and print sales integration.",
    tags: ["Gallery", "Photography", "Booking", "Proofing"],
  },
  {
    id: "musician-artist",
    name: "Musician & Artist Page",
    category: "Website Templates",
    subcategory: "Creative & Personal",
    pricePHP: 10000,
    priceUSD: 172,
    image: "/images/assets/og-image.jpg",
    description:
      "Media-rich website for bands, solo artists, and performers. Music player, video embeds, event calendar, ticket links, merch store, and mailing list with streaming platform integrations.",
    tags: ["Music", "Video", "Events", "Merch"],
  },
  {
    id: "wedding-website",
    name: "Wedding Website",
    category: "Website Templates",
    subcategory: "Creative & Personal",
    pricePHP: 6500,
    priceUSD: 112,
    image: "/images/assets/og-image.jpg",
    description:
      "Romantic wedding website with love story timeline, photo gallery, RSVP form, gift registry links, event details, directions, and countdown timer for the big day.",
    tags: ["Wedding", "RSVP", "Gallery", "Countdown"],
    recommended: true,
  },
  {
    id: "resume-cv",
    name: "Resume / CV Website",
    category: "Website Templates",
    subcategory: "Creative & Personal",
    pricePHP: 5500,
    priceUSD: 95,
    image: "/images/assets/og-image.jpg",
    description:
      "Professional online resume and CV for job seekers and freelancers. Skills section, work experience timeline, education, certifications, downloadable PDF, and contact form.",
    tags: ["Resume", "CV", "Professional", "PDF"],
  },
  {
    id: "product-landing",
    name: "Product Landing Page",
    category: "Website Templates",
    subcategory: "Creative & Personal",
    pricePHP: 9000,
    priceUSD: 155,
    image: "/images/assets/og-image.jpg",
    description:
      "High-converting landing page for apps, products, and services. Hero section, feature highlights, pricing tiers, testimonials, FAQ, CTA buttons, and lead capture forms.",
    tags: ["Landing Page", "Conversion", "Lead Gen", "SaaS"],
    recommended: true,
  },
  {
    id: "nonprofit-ngo",
    name: "Non-Profit & NGO Website",
    category: "Website Templates",
    subcategory: "Creative & Personal",
    pricePHP: 7500,
    priceUSD: 129,
    image: "/images/assets/og-image.jpg",
    description:
      "Purpose-driven website for charities, foundations, and NGOs. Mission statement, programs, donation integration, volunteer signup, impact stories, and newsletter.",
    tags: ["Non-Profit", "Donations", "Volunteer", "Impact"],
  },
];

// ── ACADEMIC COMMISSIONS (18 total) ───────────────────

const academicTemplateData: Template[] = [
  {
    id: "thesis-full",
    name: "Full Thesis Paper (Ch 1-5)",
    category: "Academic Commissions",
    subcategory: "Complete Papers",
    pricePHP: 18000,
    priceUSD: 310,
    image: "/images/templates/academic_thesis_ch1_5.jpg",
    description:
      "Complete thesis from Chapter 1 to 5 — research design, literature review, methodology, data analysis, interpretation, and conclusion with full formatting.",
    tags: ["Full Thesis", "Quantitative", "Qualitative", "APA Format"],
    recommended: true,
  },
  {
    id: "thesis-proposal",
    name: "Thesis Proposal / Concept Paper",
    category: "Academic Commissions",
    subcategory: "Complete Papers",
    pricePHP: 5500,
    priceUSD: 95,
    image: "/images/templates/academic_thesis_proposal.jpg",
    description:
      "A polished thesis proposal with Chapter 1 (Introduction), theoretical framework, problem statement, significance, scope, and methodology overview for adviser approval.",
    tags: ["Proposal", "Concept Paper", "Chapter 1", "Approval"],
    recommended: true,
  },
  {
    id: "capstone",
    name: "Capstone Project Documentation",
    category: "Academic Commissions",
    subcategory: "Complete Papers",
    pricePHP: 15000,
    priceUSD: 259,
    image: "/images/templates/academic_capstone.jpg",
    description:
      "Complete capstone documentation including system design, SDLC methodology, user manual, testing results, and full technical documentation.",
    tags: ["Capstone", "System Design", "SDLC", "User Manual"],
    recommended: true,
  },
  {
    id: "research-paper",
    name: "Research Paper / Term Paper",
    category: "Academic Commissions",
    subcategory: "Complete Papers",
    pricePHP: 6500,
    priceUSD: 112,
    image: "/images/templates/academic_research_paper.jpg",
    description:
      "Polished research or term paper with abstract, introduction, body, conclusion, and properly formatted references in APA, MLA, or Chicago style.",
    tags: ["Research", "Term Paper", "APA", "MLA"],
    recommended: true,
  },
  {
    id: "business-plan",
    name: "Business Plan / Feasibility Study",
    category: "Academic Commissions",
    subcategory: "Complete Papers",
    pricePHP: 12000,
    priceUSD: 207,
    image: "/images/templates/academic_business_plan.jpg",
    description:
      "Comprehensive business plan with executive summary, market analysis, marketing strategy, operations plan, financial projections, and SWOT analysis.",
    tags: ["Business Plan", "Feasibility", "Financials", "SWOT"],
  },
  {
    id: "feasibility-study",
    name: "Standalone Feasibility Study",
    category: "Academic Commissions",
    subcategory: "Complete Papers",
    pricePHP: 9500,
    priceUSD: 164,
    image: "/images/templates/academic_feasibility.jpg",
    description:
      "Standalone feasibility study with market, technical, organizational, and financial viability assessments with recommendations.",
    tags: ["Feasibility", "Viability", "Market", "Financial"],
  },
  // Chapter-specific
  {
    id: "thesis-chapter",
    name: "Single Thesis Chapter",
    category: "Academic Commissions",
    subcategory: "By Chapter",
    pricePHP: 4500,
    priceUSD: 78,
    image: "/images/templates/academic_thesis_ch1_5.jpg",
    description:
      "Any single chapter — Chapter 1 (Introduction), 2 (Literature Review), 3 (Methodology), 4 (Results), or 5 (Conclusion) — professionally written and formatted.",
    tags: ["Per Chapter", "Custom", "Formatted", "Revision"],
  },
  {
    id: "literature-review",
    name: "Literature Review (Full RRL)",
    category: "Academic Commissions",
    subcategory: "By Chapter",
    pricePHP: 5000,
    priceUSD: 86,
    image: "/images/templates/academic_full_rrl.jpg",
    description:
      "Comprehensive standalone literature review with thematic synthesis, gap analysis, theoretical framework grounding, and 20+ credible sources.",
    tags: ["RRL", "Thematic", "Synthesis", "Sources"],
  },
  {
    id: "chapter-2-rrl",
    name: "Chapter 2 RRL Only",
    category: "Academic Commissions",
    subcategory: "By Chapter",
    pricePHP: 3500,
    priceUSD: 60,
    image: "/images/templates/academic_chapter2_rrl.jpg",
    description:
      "Focused Chapter 2 literature review tailored to your research variables with properly cited local and foreign studies, synthesis matrix, and gap identification.",
    tags: ["Chapter 2", "RRL", "Synthesis", "Gap"],
  },
  {
    id: "methodology-only",
    name: "Methodology Chapter Only",
    category: "Academic Commissions",
    subcategory: "By Chapter",
    pricePHP: 3500,
    priceUSD: 60,
    image: "/images/templates/academic_methodology_chapter.jpg",
    description:
      "Research design chapter with research paradigm, sampling method, instrumentation, data gathering procedure, and statistical treatment plan.",
    tags: ["Methodology", "Design", "Sampling", "Statistics"],
  },
  {
    id: "synopsis",
    name: "Synopsis / Abstract Summary",
    category: "Academic Commissions",
    subcategory: "By Chapter",
    pricePHP: 2500,
    priceUSD: 43,
    image: "/images/templates/academic_synopsis_abstract.jpg",
    description:
      "Concise and compelling synopsis or abstract that captures your study's problem, method, key findings, and contribution — perfect for proposals and defense panels.",
    tags: ["Abstract", "Synopsis", "Summary", "Panel"],
  },
  // Data & Analysis
  {
    id: "spss-analysis",
    name: "SPSS / Statistical Data Analysis",
    category: "Academic Commissions",
    subcategory: "Data & Analysis",
    pricePHP: 4500,
    priceUSD: 78,
    image: "/images/templates/academic_spss.jpg",
    description:
      "Complete statistical analysis using SPSS, R, or Jamovi — descriptive stats, reliability testing, correlation, regression, ANOVA, t-test, and interpretation.",
    tags: ["SPSS", "Statistics", "Regression", "ANOVA"],
    recommended: true,
  },
  {
    id: "conceptual-framework",
    name: "Conceptual Framework Design",
    category: "Academic Commissions",
    subcategory: "Data & Analysis",
    pricePHP: 2500,
    priceUSD: 43,
    image: "/images/templates/academic_conceptual_framework.jpg",
    description:
      " professionally designed conceptual or theoretical framework diagram with variable mapping, arrow relationships, and supporting narrative explanation.",
    tags: ["Framework", "Diagram", "Variables", "Design"],
  },
  {
    id: "data-gathering",
    name: "Data Gathering Instruments",
    category: "Academic Commissions",
    subcategory: "Data & Analysis",
    pricePHP: 2500,
    priceUSD: 43,
    image: "/images/templates/academic_data_instruments.jpg",
    description:
      "Custom survey questionnaire, interview guide, or observation checklist with validated Likert scales, expert-validated items, and alignment to research objectives.",
    tags: ["Questionnaire", "Interview", "Validation", "Likert"],
  },
  // Presentation & Defense
  {
    id: "defense-ppt",
    name: "Defense PowerPoint Presentation",
    category: "Academic Commissions",
    subcategory: "Presentation & Defense",
    pricePHP: 3500,
    priceUSD: 60,
    image: "/images/templates/academic_defense_ppt.jpg",
    description:
      "Professional defense presentation with clean academic design, speaker notes, animated charts, and anticipated Q&A slides for proposal or final defense.",
    tags: ["PowerPoint", "Defense", "Speaker Notes", "Q&A"],
    recommended: true,
  },
  {
    id: "defense-script",
    name: "Oral Defense Script Only",
    category: "Academic Commissions",
    subcategory: "Presentation & Defense",
    pricePHP: 2500,
    priceUSD: 43,
    image: "/images/templates/academic_defense_script.jpg",
    description:
      "Complete oral defense script with opening remarks, study walkthrough, key talking points, and anticipated panel questions with suggested answers.",
    tags: ["Script", "Defense", "Q&A", "Talking Points"],
  },
  // Specialized
  {
    id: "case-study",
    name: "Case Study Analysis",
    category: "Academic Commissions",
    subcategory: "Specialized",
    pricePHP: 5500,
    priceUSD: 95,
    image: "/images/templates/academic_case_study.jpg",
    description:
      "In-depth case study with problem identification, stakeholder analysis, alternative solutions, recommendation matrix, and implementation plan.",
    tags: ["Case Study", "Analysis", "Stakeholders", "Solutions"],
  },
  {
    id: "work-immersion",
    name: "Work Immersion / OJT Narrative",
    category: "Academic Commissions",
    subcategory: "Specialized",
    pricePHP: 3500,
    priceUSD: 60,
    image: "/images/templates/academic_work_immersion.jpg",
    description:
      "Daily logbook-style narrative, experience reflection, company profile, and skill documentation for senior high school work immersion requirements.",
    tags: ["Immersion", "Narrative", "Reflection", "Logbook"],
  },
  {
    id: "journal-article",
    name: "Journal Article / Publication",
    category: "Academic Commissions",
    subcategory: "Specialized",
    pricePHP: 9000,
    priceUSD: 155,
    image: "/images/templates/academic_journal.jpg",
    description:
      "Journal-ready article formatted to target publication standards with abstract, keywords, IMRaD structure, references, and author guidelines compliance.",
    tags: ["Journal", "Publication", "IMRaD", "References"],
  },
];

// ── EXPORTS ───────────────────────────────────────────

export const templates: Template[] = [...websiteTemplateData, ...academicTemplateData];

export const websiteTemplates = templates.filter(
  (t) => t.category === "Website Templates"
);
export const academicTemplates = templates.filter(
  (t) => t.category === "Academic Commissions"
);

export const templateCategories = [
  "All",
  "Website Templates",
  "Academic Commissions",
] as const;

export type TemplateCategoryFilter = typeof templateCategories[number];

export const websiteSubcategories = [
  "All",
  "POS & Retail",
  "Hospitality & Travel",
  "Real Estate & Construction",
  "Professional Services",
  "Government & Community",
  "Enterprise",
  "Creative & Personal",
] as const;

export const academicSubcategories = [
  "All",
  "Complete Papers",
  "By Chapter",
  "Data & Analysis",
  "Presentation & Defense",
  "Specialized",
] as const;
