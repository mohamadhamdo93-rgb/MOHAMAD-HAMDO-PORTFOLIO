export const i18n = {
  en: {
    dir: "ltr",
    nav: ["Home", "About", "Services", "Portfolio", "Courses", "Testimonials", "Contact", "Blog"],
    name: "Mohamad Hamdo",
    arabicName: "محمد حمدو",
    intro: "Graphic Designer, Creative Director, and Digital Brand Designer crafting premium identities, launch visuals, and immersive brand systems.",
    cta: ["View Portfolio", "Hire Me", "Download CV", "Contact Me"],
    stats: ["Years Experience", "Completed Projects", "Happy Clients", "Online Students"],
    aboutTitle: "Luxury Identity Thinking",
    aboutBody: "I design brand systems that look refined, communicate clearly, and scale across digital, print, motion, and social touchpoints. My work blends Arabic visual culture, strategic storytelling, and futuristic interface polish.",
    sections: {
      services: "Services",
      portfolio: "Portfolio",
      courses: "Online Courses",
      testimonials: "Testimonials",
      blog: "Design Journal",
      contact: "Contact",
      admin: "Dashboard"
    },
    projectOpen: "Open Project",
    enroll: "Enroll Now",
    send: "Send Message",
    form: ["Name", "Email", "Subject", "Message"],
    adminHint: "Enter admin token to load contact messages.",
    back: "Back to portfolio"
  },
  ar: {
    dir: "rtl",
    nav: ["الرئيسية", "عني", "الخدمات", "الأعمال", "الكورسات", "آراء العملاء", "تواصل", "المدونة"],
    name: "محمد حمدو",
    arabicName: "Mohamad Hamdo",
    intro: "مصمم جرافيك، مدير إبداعي، ومصمم هويات رقمية يصنع تجارب بصرية فاخرة للعلامات التجارية الحديثة.",
    cta: ["مشاهدة الأعمال", "وظفني", "تحميل السيرة", "تواصل معي"],
    stats: ["سنوات خبرة", "مشاريع مكتملة", "عملاء سعداء", "طلاب أونلاين"],
    aboutTitle: "تفكير بصري فاخر",
    aboutBody: "أصمم أنظمة هوية متوازنة وواضحة وقابلة للتوسع عبر المنصات الرقمية والطباعة والموشن والسوشيال ميديا، بمزيج من الروح العربية والاستراتيجية واللمسة المستقبلية.",
    sections: {
      services: "الخدمات",
      portfolio: "معرض الأعمال",
      courses: "الكورسات الأونلاين",
      testimonials: "آراء العملاء",
      blog: "مدونة التصميم",
      contact: "تواصل",
      admin: "لوحة الإدارة"
    },
    projectOpen: "فتح المشروع",
    enroll: "اشترك الآن",
    send: "إرسال الرسالة",
    form: ["الاسم", "البريد الإلكتروني", "الموضوع", "الرسالة"],
    adminHint: "أدخل رمز الإدارة لعرض رسائل التواصل.",
    back: "العودة للأعمال"
  }
};

export const titles = [
  "Visual Identity Designer",
  "Logo Designer",
  "Video Editor",
  "AI Website Designer",
  "Social Media Designer"
];

export const stats = [8, 420, 180, 2400];

export const software = [
  ["Photoshop", 96],
  ["Illustrator", 94],
  ["After Effects", 86],
  ["Figma", 88],
  ["Premiere Pro", 82],
  ["Blender", 72]
];

import { Palette, Sparkles, Play, Figma, BriefcaseBusiness } from "lucide-react";

export const services = [
  {
    title: "Visual Identity & Logo Design",
    body: "Complete visual identity systems, logo concepts, brand colors, typography, and practical brand usage guidelines.",
    icon: Palette
  },
  {
    title: "Social Media Design",
    body: "Modern campaign visuals, post templates, story layouts, launch announcements, and consistent content systems.",
    icon: Sparkles
  },
  {
    title: "Video Editing",
    body: "Clean promotional edits, short-form content, reels, motion-ready cuts, transitions, and branded video direction.",
    icon: Play
  },
  {
    title: "AI Website Design",
    body: "Fast modern websites designed and structured with AI-assisted workflows, landing pages, portfolios, and brand pages.",
    icon: Figma
  },
  {
    title: "Print, Advertising & Promotion",
    body: "Business cards, flyers, posters, outdoor ads, print-ready files, and promotional materials for real campaigns.",
    icon: BriefcaseBusiness
  }
];

export const categories = [
  "All", "Branding", "Social Media", "Posters",
  "Packaging", "UI/UX", "Motion Graphics", "Print Design"
];

export const projects = [
  { id: "noura-luxury",     title: "Noura Luxury Identity",   category: "Branding",        color: "#63e7ff", tools: ["Illustrator", "Photoshop", "Figma"] },
  { id: "cyan-otp",         title: "Cyan OTP Finance App",    category: "UI/UX",           color: "#9efbff", tools: ["Figma", "After Effects"] },
  { id: "ramadan-campaign", title: "Ramadan Social Campaign", category: "Social Media",    color: "#35d4ff", tools: ["Photoshop", "Premiere Pro"] },
  { id: "noir-pack",        title: "Noir Packaging System",   category: "Packaging",       color: "#e7fbff", tools: ["Illustrator", "Blender"] },
  { id: "poster-series",    title: "Arabic Poster Series",    category: "Posters",         color: "#7ff4ff", tools: ["Photoshop", "Illustrator"] },
  { id: "motion-launch",    title: "Brand Launch Motion",     category: "Motion Graphics", color: "#4ae2ff", tools: ["After Effects", "Premiere Pro"] },
  { id: "print-editorial",  title: "Premium Print Editorial", category: "Print Design",    color: "#b6fcff", tools: ["InDesign", "Photoshop"] }
];

export const courses = [
  ["Graphic Design Basics",    "$79",  "6 weeks",  "1.8k", 4.9],
  ["Photoshop Masterclass",    "$119", "8 weeks",  "2.4k", 5],
  ["Social Media Design",      "$99",  "5 weeks",  "1.6k", 4.8],
  ["Branding Identity",        "$149", "10 weeks", "1.2k", 4.9],
  ["UI/UX Design",             "$129", "7 weeks",  "980",  4.7],
  ["Freelancing for Designers","$89",  "4 weeks",  "2.1k", 4.8]
];

export const testimonials = [
  ["Lina Ahmad",  "The identity felt premium from the first presentation. Every touchpoint was elegant and strategic."],
  ["Omar Khaled", "Mohamad translated a rough idea into a complete visual system that our team could scale."],
  ["Sara Naser",  "The launch campaign visuals lifted our engagement and made the brand feel established immediately."]
];

export const blogs = [
  ["Designing Brands That Feel Expensive",  "Practical rules for hierarchy, restraint, contrast, and memorable brand systems."],
  ["Arabic Pattern Meets Modern UI",         "How cultural texture can become a refined digital background without visual noise."],
  ["UI/UX Trends for Creative Portfolios",  "Frosted depth, kinetic cards, and purposeful motion for high-end experiences."]
];
