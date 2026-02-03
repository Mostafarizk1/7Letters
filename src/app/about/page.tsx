"use client";

import { motion } from "framer-motion";
import { Target, Eye, Heart, Users, Award, Zap } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import SaduPattern from "@/components/SaduPattern";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const stats = [
  { value: "50+", labelAr: "مشروع منجز", labelEn: "Projects Completed" },
  { value: "20+", labelAr: "عميل سعيد", labelEn: "Happy Clients" },
  { value: "10+", labelAr: "سنوات خبرة", labelEn: "Years Experience" },
  { value: "15+", labelAr: "فريق محترف", labelEn: "Team Members" },
];

const values = [
  {
    icon: Heart,
    titleAr: "الشغف",
    titleEn: "Passion",
    descAr: "نحب ما نفعله ونضع قلوبنا في كل مشروع",
    descEn: "We love what we do and put our hearts into every project",
  },
  {
    icon: Award,
    titleAr: "التميز",
    titleEn: "Excellence",
    descAr: "نسعى للكمال في كل تفصيلة",
    descEn: "We strive for perfection in every detail",
  },
  {
    icon: Users,
    titleAr: "التعاون",
    titleEn: "Collaboration",
    descAr: "نعمل كفريق واحد مع عملائنا",
    descEn: "We work as one team with our clients",
  },
  {
    icon: Zap,
    titleAr: "الابتكار",
    titleEn: "Innovation",
    descAr: "نبحث دائماً عن حلول إبداعية جديدة",
    descEn: "We always seek new creative solutions",
  },
];

export default function AboutPage() {
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
      {/* Hero Section */}
      <section className="relative section-padding overflow-hidden">
        <SaduPattern className="absolute inset-0 opacity-[0.02]" />
        
        <div className="relative z-10 max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <h1 className="text-4xl md:text-6xl font-bold text-foreground-light dark:text-foreground-dark mb-6">
              {locale === "ar" ? "من نحن" : "About Us"}
            </h1>
            <p className="text-xl text-foreground-light/70 dark:text-foreground-dark/70 max-w-3xl mx-auto">
              {locale === "ar"
                ? "نحن شركة إبداعية سعودية متخصصة في صناعة المحتوى الرقمي والتسويق والتقنية. نعمل مع أكبر العلامات التجارية لتحويل أفكارهم إلى واقع مؤثر."
                : "We are a Saudi creative agency specializing in digital content creation, marketing, and technology. We work with top brands to transform their ideas into impactful reality."}
            </p>
          </motion.div>

          {/* Stats */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-24"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="text-center p-6 bg-foreground-light/5 dark:bg-foreground-dark/5 rounded-2xl"
              >
                <div className="text-4xl md:text-5xl font-bold text-primary mb-2">
                  {stat.value}
                </div>
                <div className="text-foreground-light/70 dark:text-foreground-dark/70">
                  {locale === "ar" ? stat.labelAr : stat.labelEn}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="section-padding bg-foreground-light/5 dark:bg-foreground-dark/5">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-background-light dark:bg-background-dark p-8 rounded-2xl border border-foreground-light/10 dark:border-foreground-dark/10"
            >
              <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mb-6">
                <Eye className="w-8 h-8 text-primary" />
              </div>
              <h2 className="text-2xl font-bold text-foreground-light dark:text-foreground-dark mb-4">
                {locale === "ar" ? "رؤيتنا" : "Our Vision"}
              </h2>
              <p className="text-foreground-light/70 dark:text-foreground-dark/70 leading-relaxed">
                {locale === "ar"
                  ? "أن نكون الشريك الإبداعي الأول للعلامات التجارية الرائدة في المنطقة، ونساهم في صناعة محتوى يلهم ويؤثر ويغير."
                  : "To be the leading creative partner for top brands in the region, contributing to content that inspires, impacts, and transforms."}
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-background-light dark:bg-background-dark p-8 rounded-2xl border border-foreground-light/10 dark:border-foreground-dark/10"
            >
              <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mb-6">
                <Target className="w-8 h-8 text-primary" />
              </div>
              <h2 className="text-2xl font-bold text-foreground-light dark:text-foreground-dark mb-4">
                {locale === "ar" ? "مهمتنا" : "Our Mission"}
              </h2>
              <p className="text-foreground-light/70 dark:text-foreground-dark/70 leading-relaxed">
                {locale === "ar"
                  ? "تقديم حلول إبداعية متكاملة تجمع بين الإبداع والتقنية لمساعدة عملائنا على تحقيق أهدافهم وتجاوز توقعاتهم."
                  : "Delivering integrated creative solutions that combine creativity and technology to help our clients achieve their goals and exceed expectations."}
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section-padding">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-bold text-foreground-light dark:text-foreground-dark mb-4">
              {locale === "ar" ? "قيمنا" : "Our Values"}
            </h2>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {values.map((value, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ y: -5 }}
                className="group p-6 bg-foreground-light/5 dark:bg-foreground-dark/5 rounded-2xl hover:bg-primary/10 transition-all duration-300"
              >
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                  <value.icon className="w-6 h-6 text-primary group-hover:text-white transition-colors" />
                </div>
                <h3 className="text-xl font-bold text-foreground-light dark:text-foreground-dark mb-2">
                  {locale === "ar" ? value.titleAr : value.titleEn}
                </h3>
                <p className="text-foreground-light/70 dark:text-foreground-dark/70 text-sm">
                  {locale === "ar" ? value.descAr : value.descEn}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
      </main>
      <Footer />
    </>
  );
}
