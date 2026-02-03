export const locales = ["ar", "en"] as const;
export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = "ar";

export const translations = {
  ar: {
    nav: {
      home: "الرئيسية",
      about: "من نحن",
      services: "خدماتنا",
      portfolio: "أعمالنا",
      contact: "تواصل معنا",
    },
    hero: {
      headline: "حين يتجاوز الطموح حدود المألوف",
      subheadline: "نصنع قصص نجاح استثنائية مع أكبر العلامات التجارية",
      cta: "ابدأ مشروعك",
    },
    services: {
      title: "خدماتنا",
      subtitle: "نقدم حلولاً إبداعية متكاملة",
      items: {
        eventManagement: "إدارة الفعاليات",
        digitalPhotography: "التصوير الرقمي",
        digitalMarketing: "التسويق الرقمي",
        graphicDesign: "التصميم الجرافيكي",
        motionGraphics: "موشن جرافيكس",
        programming: "البرمجة والتطوير",
      },
    },
    portfolio: {
      title: "أعمالنا",
      tabs: {
        all: "الكل",
        video: "إنتاج الفيديو",
        branding: "الهوية البصرية",
        development: "التطوير",
        marketing: "التسويق",
      },
    },
    footer: {
      downloadProfile: "تحميل ملف الشركة",
      rights: "جميع الحقوق محفوظة",
      followUs: "تابعنا",
    },
    common: {
      language: "English",
      darkMode: "الوضع الليلي",
      lightMode: "الوضع النهاري",
    },
  },
  en: {
    nav: {
      home: "Home",
      about: "About",
      services: "Services",
      portfolio: "Portfolio",
      contact: "Contact",
    },
    hero: {
      headline: "Where Ambition Exceeds Limits",
      subheadline: "Crafting exceptional success stories with top-tier brands",
      cta: "Start Your Project",
    },
    services: {
      title: "Our Services",
      subtitle: "Delivering integrated creative solutions",
      items: {
        eventManagement: "Event Management",
        digitalPhotography: "Digital Photography",
        digitalMarketing: "Digital Marketing",
        graphicDesign: "Graphic Design",
        motionGraphics: "Motion Graphics",
        programming: "Programming & Development",
      },
    },
    portfolio: {
      title: "Our Work",
      tabs: {
        all: "All",
        video: "Video Production",
        branding: "Branding",
        development: "Development",
        marketing: "Marketing",
      },
    },
    footer: {
      downloadProfile: "Download Company Profile",
      rights: "All Rights Reserved",
      followUs: "Follow Us",
    },
    common: {
      language: "العربية",
      darkMode: "Dark Mode",
      lightMode: "Light Mode",
    },
  },
};

export function getTranslations(locale: Locale) {
  return translations[locale];
}

export function getDirection(locale: Locale): "rtl" | "ltr" {
  return locale === "ar" ? "rtl" : "ltr";
}
