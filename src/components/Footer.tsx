"use client";

import { motion } from "framer-motion";
import {
  Download,
  MessageCircle,
  Mail,
  MapPin,
} from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import Logo from "./Logo";

export default function Footer() {
  const { t, locale } = useLanguage();

  const contactInfo = [
    {
      icon: MessageCircle,
      text: "+966 53 977 7980",
      href: "https://wa.me/966539777980",
      label: locale === "ar" ? "واتساب" : "WhatsApp",
    },
    {
      icon: Mail,
      text: "info@7letters.sa",
      href: "mailto:info@7letters.sa",
      label: locale === "ar" ? "البريد الإلكتروني" : "Email",
    },
    {
      icon: MapPin,
      text: locale === "ar" ? "الرياض، المملكة العربية السعودية" : "Riyadh, Saudi Arabia",
      href: "#",
      label: locale === "ar" ? "العنوان" : "Address",
    },
  ];

  return (
    <footer className="bg-background-dark text-foreground-dark">
      <div className="max-w-7xl mx-auto section-padding">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12">
          <div>
            <Logo />
            <p className="mt-6 text-foreground-dark/70 max-w-md">
              {locale === "ar"
                ? "نحن شركة إبداعية متخصصة في الإنتاج الإعلامي والتسويق والتقنية. نعمل مع أكبر العلامات التجارية لصناعة قصص نجاح استثنائية."
                : "We are a creative agency specializing in media production, marketing, and technology. We work with top-tier brands to craft exceptional success stories."}
            </p>

            <motion.a
              href=""
              download
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-3 mt-8 px-6 py-4 bg-primary text-white rounded-xl font-medium hover:bg-primary/90 transition-all duration-300 hover:shadow-lg hover:shadow-primary/25"
            >
              <Download className="w-5 h-5" />
              {t.footer.downloadProfile}
            </motion.a>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-6">
              {locale === "ar" ? "تواصل معنا" : "Contact Us"}
            </h4>
            <div className="space-y-4">
              {contactInfo.map((info, index) => (
                <motion.a
                  key={index}
                  href={info.href}
                  target={info.href.startsWith("https") ? "_blank" : undefined}
                  rel={info.href.startsWith("https") ? "noopener noreferrer" : undefined}
                  whileHover={{ x: locale === "ar" ? -5 : 5 }}
                  className="flex items-center gap-3 text-foreground-dark/70 hover:text-primary transition-colors"
                >
                  <info.icon className="w-5 h-5 flex-shrink-0" />
                  <span>{info.text}</span>
                </motion.a>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-foreground-dark/10 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-foreground-dark/50 text-sm">
              © {new Date().getFullYear()} Seven Letters. {t.footer.rights}
            </p>
            <div className="flex items-center gap-2 text-foreground-dark/50 text-sm">
              <span>{locale === "ar" ? "صنع بـ" : "Made with"}</span>
              <motion.span
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 1, repeat: Infinity }}
                className="text-primary"
              >
                ❤️
              </motion.span>
              <span>{locale === "ar" ? "في السعودية" : "in Saudi Arabia"}</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
