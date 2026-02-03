"use client";

import { motion } from "framer-motion";
import {
  Calendar,
  Camera,
  TrendingUp,
  Palette,
  Film,
  Code,
  Megaphone,
  Video,
  PenTool,
  Globe,
  Smartphone,
  BarChart,
} from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import SaduPattern from "@/components/SaduPattern";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const services = [
  {
    icon: Calendar,
    titleAr: "إدارة الفعاليات",
    titleEn: "Event Management",
    descAr: "نخطط وننفذ فعاليات استثنائية من المؤتمرات الكبرى إلى الحفلات الخاصة",
    descEn: "We plan and execute exceptional events from major conferences to private celebrations",
    features: ["التخطيط الاستراتيجي", "التنسيق اللوجستي", "إدارة الموردين", "التغطية الإعلامية"],
    featuresEn: ["Strategic Planning", "Logistics Coordination", "Vendor Management", "Media Coverage"],
  },
  {
    icon: Camera,
    titleAr: "التصوير الرقمي",
    titleEn: "Digital Photography",
    descAr: "نلتقط اللحظات بعدسات احترافية ونحولها إلى قصص بصرية مؤثرة",
    descEn: "We capture moments with professional lenses and transform them into impactful visual stories",
    features: ["تصوير المنتجات", "تصوير الفعاليات", "التصوير التجاري", "تصوير البورتريه"],
    featuresEn: ["Product Photography", "Event Photography", "Commercial Photography", "Portrait Photography"],
  },
  {
    icon: Video,
    titleAr: "إنتاج الفيديو",
    titleEn: "Video Production",
    descAr: "من الفكرة إلى الشاشة، ننتج محتوى فيديو احترافي يروي قصتك",
    descEn: "From concept to screen, we produce professional video content that tells your story",
    features: ["الأفلام الوثائقية", "الإعلانات التجارية", "فيديوهات الشركات", "المحتوى الرقمي"],
    featuresEn: ["Documentaries", "Commercials", "Corporate Videos", "Digital Content"],
  },
  {
    icon: TrendingUp,
    titleAr: "التسويق الرقمي",
    titleEn: "Digital Marketing",
    descAr: "استراتيجيات تسويقية مبتكرة تضع علامتك التجارية في المقدمة",
    descEn: "Innovative marketing strategies that put your brand at the forefront",
    features: ["إدارة وسائل التواصل", "الحملات الإعلانية", "تحسين محركات البحث", "التسويق بالمحتوى"],
    featuresEn: ["Social Media Management", "Ad Campaigns", "SEO", "Content Marketing"],
  },
  {
    icon: Palette,
    titleAr: "التصميم الجرافيكي",
    titleEn: "Graphic Design",
    descAr: "تصاميم إبداعية تعكس هوية علامتك التجارية وتجذب جمهورك",
    descEn: "Creative designs that reflect your brand identity and attract your audience",
    features: ["الهوية البصرية", "تصميم المطبوعات", "تصميم العبوات", "الإنفوجرافيك"],
    featuresEn: ["Visual Identity", "Print Design", "Packaging Design", "Infographics"],
  },
  {
    icon: Film,
    titleAr: "موشن جرافيكس",
    titleEn: "Motion Graphics",
    descAr: "نحرك أفكارك ونحولها إلى محتوى متحرك يجذب الانتباه",
    descEn: "We animate your ideas and transform them into attention-grabbing motion content",
    features: ["الرسوم المتحركة 2D", "الرسوم المتحركة 3D", "العروض التقديمية", "فيديوهات السوشيال"],
    featuresEn: ["2D Animation", "3D Animation", "Presentations", "Social Videos"],
  },
  {
    icon: Code,
    titleAr: "تطوير المواقع",
    titleEn: "Web Development",
    descAr: "مواقع وتطبيقات ويب متطورة بأحدث التقنيات",
    descEn: "Advanced websites and web applications with the latest technologies",
    features: ["مواقع الشركات", "المتاجر الإلكترونية", "تطبيقات الويب", "أنظمة إدارة المحتوى"],
    featuresEn: ["Corporate Websites", "E-commerce", "Web Apps", "CMS Solutions"],
  },
  {
    icon: Smartphone,
    titleAr: "تطوير التطبيقات",
    titleEn: "App Development",
    descAr: "تطبيقات موبايل ذكية لنظامي iOS و Android",
    descEn: "Smart mobile applications for iOS and Android",
    features: ["تطبيقات iOS", "تطبيقات Android", "التطبيقات الهجينة", "صيانة ودعم"],
    featuresEn: ["iOS Apps", "Android Apps", "Hybrid Apps", "Maintenance & Support"],
  },
];

export default function ServicesPage() {
  const { locale } = useLanguage();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

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
            className="text-center mb-16"
          >
            <h1 className="text-4xl md:text-6xl font-bold text-foreground-light dark:text-foreground-dark mb-6">
              {locale === "ar" ? "خدماتنا" : "Our Services"}
            </h1>
            <p className="text-xl text-foreground-light/70 dark:text-foreground-dark/70 max-w-3xl mx-auto">
              {locale === "ar"
                ? "نقدم مجموعة متكاملة من الخدمات الإبداعية والتقنية لتلبية جميع احتياجات علامتك التجارية"
                : "We offer a comprehensive range of creative and technical services to meet all your brand needs"}
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 gap-8"
          >
            {services.map((service, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ y: -5 }}
                className="group bg-foreground-light/5 dark:bg-foreground-dark/5 rounded-2xl p-8 hover:shadow-2xl hover:shadow-primary/10 transition-all duration-300 border border-transparent hover:border-primary/20"
              >
                <div className="flex items-start gap-6">
                  <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                    <service.icon className="w-8 h-8 text-primary group-hover:text-white transition-colors" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-foreground-light dark:text-foreground-dark mb-3 group-hover:text-primary transition-colors">
                      {locale === "ar" ? service.titleAr : service.titleEn}
                    </h3>
                    <p className="text-foreground-light/70 dark:text-foreground-dark/70 mb-4">
                      {locale === "ar" ? service.descAr : service.descEn}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {(locale === "ar" ? service.features : service.featuresEn).map((feature, i) => (
                        <span
                          key={i}
                          className="text-xs px-3 py-1 bg-primary/10 text-primary rounded-full"
                        >
                          {feature}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mt-16"
          >
            <a
              href="/contact"
              className="btn-primary inline-block text-lg"
            >
              {locale === "ar" ? "تواصل معنا لبدء مشروعك" : "Contact us to start your project"}
            </a>
          </motion.div>
        </div>
      </section>
      </main>
      <Footer />
    </>
  );
}
