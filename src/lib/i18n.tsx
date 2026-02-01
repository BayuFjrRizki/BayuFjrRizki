"use client";

import { createContext, useContext, useState, useEffect, ReactNode } from "react";

export type Locale = "en" | "id";

type Translations = {
  [key: string]: {
    en: string;
    id: string;
  };
};

export const translations: Translations = {
  // Navbar
  "nav.home": { en: "Home", id: "Beranda" },
  "nav.about": { en: "About", id: "Tentang" },
  "nav.projects": { en: "Projects", id: "Proyek" },
  "nav.testimonials": { en: "Testimonials", id: "Testimoni" },
  "nav.contact": { en: "Contact", id: "Kontak" },

  // Hero
  "hero.greeting": { en: "Hello, I'm", id: "Halo, Saya" },
  "hero.name": { en: "Bayu Fajar Rizki", id: "Bayu Fajar Rizki" },
  "hero.role": { en: "Freelancer", id: "Freelancer" },
  "hero.description": {
    en: "Full Stack Developer, Designer & Data Analyst based in Indonesia. I craft digital experiences that matter.",
    id: "Full Stack Developer, Designer & Data Analyst berbasis di Indonesia. Saya menciptakan pengalaman digital yang berarti.",
  },
  "hero.cta": { en: "Get in Touch", id: "Hubungi Saya" },
  "hero.projects": { en: "View Projects", id: "Lihat Proyek" },

  // About
  "about.title": { en: "About Me", id: "Tentang Saya" },
  "about.subtitle": { en: "Get to know me better", id: "Kenali saya lebih dekat" },
  "about.description": {
    en: "I'm a passionate freelancer with expertise in web development, design, and data analytics. I help businesses grow by delivering high-quality digital solutions.",
    id: "Saya adalah freelancer yang berdedikasi dengan keahlian dalam pengembangan web, desain, dan analisis data. Saya membantu bisnis berkembang dengan memberikan solusi digital berkualitas tinggi.",
  },
  "about.experience": { en: "Years Experience", id: "Tahun Pengalaman" },
  "about.clients": { en: "Happy Clients", id: "Klien Puas" },
  "about.projectsDone": { en: "Projects Done", id: "Proyek Selesai" },

  // Projects
  "projects.title": { en: "My Projects", id: "Proyek Saya" },
  "projects.subtitle": { en: "Recent works I've done", id: "Karya terbaru saya" },
  "projects.viewAll": { en: "View All", id: "Lihat Semua" },

  // Project Categories
  "projects.category.web": { en: "Web Development", id: "Pengembangan Web" },
  "projects.category.design": { en: "Design", id: "Desain" },
  "projects.category.data": { en: "Data", id: "Data" },

  // Web Development Details
  "projects.web.includes": { en: "Includes: Hosting, Domain, Maintenance", id: "Termasuk: Hosting, Domain, Maintenance" },
  "projects.web.tech": { en: "Tech: Next.js, Laravel, WordPress", id: "Teknologi: Next.js, Laravel, WordPress" },

  // Design Details
  "projects.design.pricing": { en: "Project-based / Monthly", id: "Per Proyek / Bulanan" },
  "projects.design.revision": { en: "Max 2x major revisions (additional fee for more)", id: "Maks 2x revisi mayor (biaya tambahan untuk lebih)" },
  "projects.design.tech": { en: "Tech: Photoshop, Illustrator, CorelDraw, Canva", id: "Teknologi: Photoshop, Illustrator, CorelDraw, Canva" },

  // Data Details
  "projects.data.tech": { en: "Tech: Excel, Google Spreadsheet", id: "Teknologi: Excel, Google Spreadsheet" },

  // Testimonials
  "testimonials.title": { en: "Testimonials", id: "Testimoni" },
  "testimonials.subtitle": { en: "What clients say about me", id: "Apa kata klien tentang saya" },

  // Contact
  "contact.title": { en: "Get in Touch", id: "Hubungi Saya" },
  "contact.subtitle": { en: "Let's work together", id: "Mari bekerja sama" },
  "contact.name": { en: "Your Name", id: "Nama Anda" },
  "contact.email": { en: "Your Email", id: "Email Anda" },
  "contact.message": { en: "Your Message", id: "Pesan Anda" },
  "contact.send": { en: "Send Message", id: "Kirim Pesan" },

  // Footer
  "footer.rights": { en: "All rights reserved.", id: "Hak cipta dilindungi." },
};

interface I18nContextType {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  t: (key: string) => string;
  isLoaded: boolean;
}

const I18nContext = createContext<I18nContextType | undefined>(undefined);

export function I18nProvider({ children }: { children: ReactNode }) {
  // Always start with "en" on both server and client to avoid hydration mismatch
  const [locale, setLocale] = useState<Locale>("en");
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Only run on client after hydration
    const initLocale = async () => {
      // Check localStorage first
      const savedLocale = localStorage.getItem("locale") as Locale | null;
      if (savedLocale && (savedLocale === "en" || savedLocale === "id")) {
        setLocale(savedLocale);
        setIsLoaded(true);
        return;
      }

      // Detect geolocation
      try {
        const response = await fetch("https://ipapi.co/json/");
        const data = await response.json();
        const detectedLocale: Locale = data.country_code === "ID" ? "id" : "en";
        setLocale(detectedLocale);
        localStorage.setItem("locale", detectedLocale);
      } catch {
        // Keep default "en"
      } finally {
        setIsLoaded(true);
      }
    };

    initLocale();
  }, []);

  const handleSetLocale = (newLocale: Locale) => {
    setLocale(newLocale);
    if (typeof window !== "undefined") {
      localStorage.setItem("locale", newLocale);
    }
  };

  const t = (key: string): string => {
    const translation = translations[key];
    if (!translation) return key;
    return translation[locale] || key;
  };

  // Always render children - no null return to avoid hydration mismatch
  return (
    <I18nContext.Provider value={{ locale, setLocale: handleSetLocale, t, isLoaded }}>
      {children}
    </I18nContext.Provider>
  );
}

export function useI18n() {
  const context = useContext(I18nContext);
  if (!context) {
    throw new Error("useI18n must be used within I18nProvider");
  }
  return context;
}

