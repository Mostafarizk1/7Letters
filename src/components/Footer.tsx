"use client";

import { motion } from "framer-motion";
import {
  Download,
  Instagram,
  Twitter,
  Linkedin,
  Youtube,
  Mail,
  Phone,
  MapPin,
} from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import Logo from "./Logo";

export default function Footer() {
  const { t, locale } = useLanguage();

  const socialLinks = [
    { icon: Instagram, href: "#", label: "Instagram" },
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Linkedin, href: "#", label: "LinkedIn" },
    { icon: Youtube, href: "#", label: "YouTube" },
  ];

  const contactInfo = [
    {
      icon: Mail,
      text: "info@7letters.sa",
      href: "mailto:info@7letters.sa",
    },
    {
      icon: Phone,
      text: "+966 50 123 4567",
      href: "tel:+966501234567",
    },
    {
      icon: MapPin,
      text: locale === "ar" ? "الرياض، المملكة العربية السعودية" : "Riyadh, Saudi Arabia",
      href: "#",
    },
  ];

  return (
    <footer id="contact" className="bg-background-dark text-foreground-dark">
      <div className="max-w-7xl mx-auto section-padding">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          <div className="lg:col-span-2">
            <Logo />
            <p className="mt-6 text-foreground-dark/70 max-w-md">
              {locale === "ar"
                ? "نحن شركة إبداعية متخصصة في الإنتاج الإعلامي والتسويق والتقنية. نعمل مع أكبر العلامات التجارية لصناعة قصص نجاح استثنائية."
                : "We are a creative agency specializing in media production, marketing, and technology. We work with top-tier brands to craft exceptional success stories."}
            </p>

            <motion.a
              href="/company-profile.pdf"
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
            <h4 className="text-lg font-bold mb-6">{t.footer.followUs}</h4>
            <div className="flex gap-4">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  whileHover={{ scale: 1.2, y: -3 }}
                  whileTap={{ scale: 0.9 }}
                  className="w-12 h-12 bg-foreground-dark/10 rounded-xl flex items-center justify-center hover:bg-primary hover:text-white transition-all duration-300"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5" />
                </motion.a>
              ))}
            </div>
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
