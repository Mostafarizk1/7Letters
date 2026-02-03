"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Play, ExternalLink } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import SaduPattern from "@/components/SaduPattern";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const portfolioItems = [
  {
    id: 1,
    title: "NEOM Brand Campaign",
    titleAr: "حملة نيوم",
    category: "video",
    image: "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?w=800&q=80",
    descAr: "حملة إعلانية متكاملة لمشروع نيوم",
    descEn: "Integrated advertising campaign for NEOM project",
  },
  {
    id: 2,
    title: "Aramco Annual Report",
    titleAr: "التقرير السنوي لأرامكو",
    category: "branding",
    image: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=800&q=80",
    descAr: "تصميم وإنتاج التقرير السنوي",
    descEn: "Design and production of annual report",
  },
  {
    id: 3,
    title: "Vision 2030 Website",
    titleAr: "موقع رؤية 2030",
    category: "development",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80",
    descAr: "تطوير موقع تفاعلي متعدد اللغات",
    descEn: "Development of multilingual interactive website",
  },
  {
    id: 4,
    title: "Red Sea Digital Campaign",
    titleAr: "حملة البحر الأحمر الرقمية",
    category: "marketing",
    image: "https://images.unsplash.com/photo-1533750349088-cd871a92f312?w=800&q=80",
    descAr: "حملة تسويق رقمي شاملة",
    descEn: "Comprehensive digital marketing campaign",
  },
  {
    id: 5,
    title: "AlUla Documentary",
    titleAr: "وثائقي العلا",
    category: "video",
    image: "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?w=800&q=80",
    descAr: "فيلم وثائقي عن تراث العلا",
    descEn: "Documentary film about AlUla heritage",
  },
  {
    id: 6,
    title: "STC Brand Identity",
    titleAr: "هوية STC البصرية",
    category: "branding",
    image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&q=80",
    descAr: "إعادة تصميم الهوية البصرية",
    descEn: "Visual identity redesign",
  },
  {
    id: 7,
    title: "Ministry of Culture App",
    titleAr: "تطبيق وزارة الثقافة",
    category: "development",
    image: "https://images.unsplash.com/photo-1551650975-87deedd944c3?w=800&q=80",
    descAr: "تطبيق موبايل للفعاليات الثقافية",
    descEn: "Mobile app for cultural events",
  },
  {
    id: 8,
    title: "Riyadh Season Promo",
    titleAr: "إعلان موسم الرياض",
    category: "video",
    image: "https://images.unsplash.com/photo-1536440136628-849c177e76a1?w=800&q=80",
    descAr: "فيديو ترويجي لموسم الرياض",
    descEn: "Promotional video for Riyadh Season",
  },
];

const tabs = [
  { key: "all", labelAr: "الكل", labelEn: "All" },
  { key: "video", labelAr: "إنتاج الفيديو", labelEn: "Video Production" },
  { key: "branding", labelAr: "الهوية البصرية", labelEn: "Branding" },
  { key: "development", labelAr: "التطوير", labelEn: "Development" },
  { key: "marketing", labelAr: "التسويق", labelEn: "Marketing" },
];

export default function PortfolioPage() {
  const { locale } = useLanguage();
  const [activeTab, setActiveTab] = useState("all");
  const [selectedItem, setSelectedItem] = useState<typeof portfolioItems[0] | null>(null);

  const filteredItems =
    activeTab === "all"
      ? portfolioItems
      : portfolioItems.filter((item) => item.category === activeTab);

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-background-light dark:bg-background-dark pt-24">
      <section className="relative section-padding overflow-hidden">
        <SaduPattern className="absolute inset-0 opacity-[0.02]" />

        <div className="relative z-10 max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-12"
          >
            <h1 className="text-4xl md:text-6xl font-bold text-foreground-light dark:text-foreground-dark mb-6">
              {locale === "ar" ? "أعمالنا" : "Our Portfolio"}
            </h1>
            <p className="text-xl text-foreground-light/70 dark:text-foreground-dark/70 max-w-3xl mx-auto">
              {locale === "ar"
                ? "نفخر بشراكاتنا مع أكبر العلامات التجارية في المنطقة"
                : "We are proud of our partnerships with the biggest brands in the region"}
            </p>
          </motion.div>

          {/* Tabs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
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
                    : "bg-foreground-light/10 dark:bg-foreground-dark/10 text-foreground-light dark:text-foreground-dark hover:bg-primary/10"
                }`}
              >
                {locale === "ar" ? tab.labelAr : tab.labelEn}
              </motion.button>
            ))}
          </motion.div>

          {/* Grid */}
          <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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
                  onClick={() => setSelectedItem(item)}
                  className="group relative aspect-[4/3] rounded-2xl overflow-hidden cursor-pointer"
                >
                  <img
                    src={item.image}
                    alt={locale === "ar" ? item.titleAr : item.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-background-dark/90 via-background-dark/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                  <div className="absolute inset-0 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-6">
                    {item.category === "video" && (
                      <motion.div
                        initial={{ scale: 0 }}
                        whileHover={{ scale: 1.1 }}
                        className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mb-4"
                      >
                        <Play className="w-8 h-8 text-white fill-white" />
                      </motion.div>
                    )}
                    <h3 className="text-xl font-bold text-white text-center mb-2">
                      {locale === "ar" ? item.titleAr : item.title}
                    </h3>
                    <p className="text-white/70 text-sm text-center">
                      {locale === "ar" ? item.descAr : item.descEn}
                    </p>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* Modal */}
      <AnimatePresence>
        {selectedItem && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedItem(null)}
            className="fixed inset-0 z-50 flex items-center justify-center bg-background-dark/90 backdrop-blur-sm p-4"
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-background-light dark:bg-background-dark rounded-2xl overflow-hidden max-w-4xl w-full max-h-[90vh] overflow-y-auto"
            >
              <div className="aspect-video relative">
                <img
                  src={selectedItem.image}
                  alt={locale === "ar" ? selectedItem.titleAr : selectedItem.title}
                  className="w-full h-full object-cover"
                />
                {selectedItem.category === "video" && (
                  <div className="absolute inset-0 flex items-center justify-center bg-background-dark/50">
                    <div className="w-20 h-20 bg-primary rounded-full flex items-center justify-center cursor-pointer hover:scale-110 transition-transform">
                      <Play className="w-10 h-10 text-white fill-white" />
                    </div>
                  </div>
                )}
              </div>
              <div className="p-8">
                <h2 className="text-3xl font-bold text-foreground-light dark:text-foreground-dark mb-4">
                  {locale === "ar" ? selectedItem.titleAr : selectedItem.title}
                </h2>
                <p className="text-foreground-light/70 dark:text-foreground-dark/70 text-lg">
                  {locale === "ar" ? selectedItem.descAr : selectedItem.descEn}
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
      </main>
      <Footer />
    </>
  );
}
