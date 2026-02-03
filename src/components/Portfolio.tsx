"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Play } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

const portfolioItems = [
  {
    id: 1,
    title: "NEOM Campaign",
    titleAr: "حملة نيوم",
    category: "video",
    image: "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?w=600&q=80",
  },
  {
    id: 2,
    title: "Aramco Annual Report",
    titleAr: "التقرير السنوي لأرامكو",
    category: "branding",
    image: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=600&q=80",
  },
  {
    id: 3,
    title: "Vision 2030 Website",
    titleAr: "موقع رؤية 2030",
    category: "development",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&q=80",
  },
  {
    id: 4,
    title: "Red Sea Campaign",
    titleAr: "حملة البحر الأحمر",
    category: "marketing",
    image: "https://images.unsplash.com/photo-1533750349088-cd871a92f312?w=600&q=80",
  },
  {
    id: 5,
    title: "AlUla Documentary",
    titleAr: "وثائقي العلا",
    category: "video",
    image: "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?w=600&q=80",
  },
  {
    id: 6,
    title: "STC Brand Identity",
    titleAr: "هوية STC",
    category: "branding",
    image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=600&q=80",
  },
];

export default function Portfolio() {
  const { t, locale } = useLanguage();
  const [activeTab, setActiveTab] = useState("all");

  const tabs = [
    { key: "all", label: t.portfolio.tabs.all },
    { key: "video", label: t.portfolio.tabs.video },
    { key: "branding", label: t.portfolio.tabs.branding },
    { key: "development", label: t.portfolio.tabs.development },
    { key: "marketing", label: t.portfolio.tabs.marketing },
  ];

  const filteredItems =
    activeTab === "all"
      ? portfolioItems
      : portfolioItems.filter((item) => item.category === activeTab);

  return (
    <section id="portfolio" className="section-padding bg-foreground-light/5 dark:bg-foreground-dark/5">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-foreground-light dark:text-foreground-dark mb-4">
            {t.portfolio.title}
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {tabs.map((tab) => (
            <motion.button
              key={tab.key}
              onClick={() => setActiveTab(tab.key)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                activeTab === tab.key
                  ? "bg-primary text-white shadow-lg shadow-primary/25"
                  : "bg-background-light dark:bg-background-dark text-foreground-light dark:text-foreground-dark hover:bg-primary/10"
              }`}
            >
              {tab.label}
            </motion.button>
          ))}
        </motion.div>

        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode="popLayout">
            {filteredItems.map((item) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.4 }}
                whileHover={{ y: -10 }}
                className="group relative aspect-[4/3] rounded-2xl overflow-hidden cursor-pointer"
              >
                <img
                  src={item.image}
                  alt={locale === "ar" ? item.titleAr : item.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-background-dark/90 via-background-dark/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                <div className="absolute inset-0 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {item.category === "video" && (
                    <motion.div
                      initial={{ scale: 0 }}
                      whileHover={{ scale: 1.1 }}
                      className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mb-4"
                    >
                      <Play className="w-8 h-8 text-white fill-white" />
                    </motion.div>
                  )}
                  <h3 className="text-xl font-bold text-white text-center px-4">
                    {locale === "ar" ? item.titleAr : item.title}
                  </h3>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
