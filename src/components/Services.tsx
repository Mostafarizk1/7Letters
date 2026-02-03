"use client";

import { motion } from "framer-motion";
import {
  Calendar,
  Camera,
  TrendingUp,
  Palette,
  Film,
  Code,
} from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import SaduPattern from "./SaduPattern";

const serviceIcons = {
  eventManagement: Calendar,
  digitalPhotography: Camera,
  digitalMarketing: TrendingUp,
  graphicDesign: Palette,
  motionGraphics: Film,
  programming: Code,
};

export default function Services() {
  const { t } = useLanguage();

  const services = Object.entries(t.services.items).map(([key, label]) => ({
    key,
    label,
    Icon: serviceIcons[key as keyof typeof serviceIcons],
  }));

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <section id="services" className="relative section-padding overflow-hidden">
      <SaduPattern className="absolute inset-0 opacity-[0.02]" />

      <div className="relative z-10 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-foreground-light dark:text-foreground-dark mb-4">
            {t.services.title}
          </h2>
          <p className="text-lg text-foreground-light/70 dark:text-foreground-dark/70 max-w-2xl mx-auto">
            {t.services.subtitle}
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {services.map(({ key, label, Icon }) => (
            <motion.div
              key={key}
              variants={itemVariants}
              whileHover={{ scale: 1.03, y: -5 }}
              className="group relative bg-background-light dark:bg-background-dark border border-foreground-light/10 dark:border-foreground-dark/10 rounded-2xl p-8 cursor-pointer transition-all duration-300 hover:shadow-2xl hover:shadow-primary/10 hover:border-primary/30"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl" />

              <div className="relative z-10">
                <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                  <Icon className="w-7 h-7 text-primary group-hover:text-white transition-colors" />
                </div>

                <h3 className="text-xl font-bold text-foreground-light dark:text-foreground-dark mb-3 group-hover:text-primary transition-colors">
                  {label}
                </h3>

                <div className="w-12 h-1 bg-primary/30 group-hover:w-full group-hover:bg-primary transition-all duration-500" />
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
