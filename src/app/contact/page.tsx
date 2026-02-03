"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send, Clock } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import SaduPattern from "@/components/SaduPattern";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function ContactPage() {
  const { locale } = useLanguage();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500));
    setIsSubmitting(false);
    setFormData({ name: "", email: "", phone: "", subject: "", message: "" });
    alert(locale === "ar" ? "تم إرسال رسالتك بنجاح!" : "Your message has been sent successfully!");
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const contactInfo = [
    {
      icon: Mail,
      titleAr: "البريد الإلكتروني",
      titleEn: "Email",
      value: "info@sevenletters.sa",
      href: "mailto:info@sevenletters.sa",
    },
    {
      icon: Phone,
      titleAr: "الهاتف",
      titleEn: "Phone",
      value: "+966 50 123 4567",
      href: "tel:+966501234567",
    },
    {
      icon: MapPin,
      titleAr: "العنوان",
      titleEn: "Address",
      value: locale === "ar" ? "الرياض، المملكة العربية السعودية" : "Riyadh, Saudi Arabia",
      href: "#",
    },
    {
      icon: Clock,
      titleAr: "ساعات العمل",
      titleEn: "Working Hours",
      value: locale === "ar" ? "الأحد - الخميس: 9 ص - 6 م" : "Sun - Thu: 9 AM - 6 PM",
      href: "#",
    },
  ];

  const subjects = [
    { value: "", labelAr: "اختر الموضوع", labelEn: "Select Subject" },
    { value: "general", labelAr: "استفسار عام", labelEn: "General Inquiry" },
    { value: "project", labelAr: "طلب مشروع", labelEn: "Project Request" },
    { value: "partnership", labelAr: "شراكة", labelEn: "Partnership" },
    { value: "careers", labelAr: "التوظيف", labelEn: "Careers" },
  ];

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
                {locale === "ar" ? "تواصل معنا" : "Contact Us"}
              </h1>
              <p className="text-xl text-foreground-light/70 dark:text-foreground-dark/70 max-w-3xl mx-auto">
                {locale === "ar"
                  ? "نحن هنا لمساعدتك في تحويل أفكارك إلى واقع. تواصل معنا اليوم!"
                  : "We're here to help you transform your ideas into reality. Get in touch today!"}
              </p>
            </motion.div>

            <div className="grid lg:grid-cols-2 gap-12">
              {/* Contact Form */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
                className="bg-foreground-light/5 dark:bg-foreground-dark/5 rounded-2xl p-8"
              >
                <h2 className="text-2xl font-bold text-foreground-light dark:text-foreground-dark mb-6">
                  {locale === "ar" ? "أرسل لنا رسالة" : "Send us a message"}
                </h2>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-foreground-light dark:text-foreground-dark mb-2">
                        {locale === "ar" ? "الاسم" : "Name"} *
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 rounded-lg bg-background-light dark:bg-background-dark border border-foreground-light/10 dark:border-foreground-dark/10 text-foreground-light dark:text-foreground-dark focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-colors"
                        placeholder={locale === "ar" ? "أدخل اسمك" : "Enter your name"}
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-foreground-light dark:text-foreground-dark mb-2">
                        {locale === "ar" ? "البريد الإلكتروني" : "Email"} *
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 rounded-lg bg-background-light dark:bg-background-dark border border-foreground-light/10 dark:border-foreground-dark/10 text-foreground-light dark:text-foreground-dark focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-colors"
                        placeholder={locale === "ar" ? "أدخل بريدك الإلكتروني" : "Enter your email"}
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-foreground-light dark:text-foreground-dark mb-2">
                        {locale === "ar" ? "رقم الهاتف" : "Phone"}
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-lg bg-background-light dark:bg-background-dark border border-foreground-light/10 dark:border-foreground-dark/10 text-foreground-light dark:text-foreground-dark focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-colors"
                        placeholder={locale === "ar" ? "أدخل رقم هاتفك" : "Enter your phone number"}
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-foreground-light dark:text-foreground-dark mb-2">
                        {locale === "ar" ? "الموضوع" : "Subject"} *
                      </label>
                      <select
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 rounded-lg bg-background-light dark:bg-background-dark border border-foreground-light/10 dark:border-foreground-dark/10 text-foreground-light dark:text-foreground-dark focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-colors"
                      >
                        {subjects.map((subject) => (
                          <option key={subject.value} value={subject.value}>
                            {locale === "ar" ? subject.labelAr : subject.labelEn}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-foreground-light dark:text-foreground-dark mb-2">
                      {locale === "ar" ? "الرسالة" : "Message"} *
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      className="w-full px-4 py-3 rounded-lg bg-background-light dark:bg-background-dark border border-foreground-light/10 dark:border-foreground-dark/10 text-foreground-light dark:text-foreground-dark focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-colors resize-none"
                      placeholder={locale === "ar" ? "اكتب رسالتك هنا..." : "Write your message here..."}
                    />
                  </div>

                  <motion.button
                    type="submit"
                    disabled={isSubmitting}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full btn-primary flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? (
                      <span className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    ) : (
                      <>
                        <Send className="w-5 h-5" />
                        {locale === "ar" ? "إرسال الرسالة" : "Send Message"}
                      </>
                    )}
                  </motion.button>
                </form>
              </motion.div>

              {/* Contact Info */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 }}
                className="space-y-6"
              >
                <h2 className="text-2xl font-bold text-foreground-light dark:text-foreground-dark mb-6">
                  {locale === "ar" ? "معلومات التواصل" : "Contact Information"}
                </h2>

                {contactInfo.map((info, index) => (
                  <motion.a
                    key={index}
                    href={info.href}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 + index * 0.1 }}
                    whileHover={{ x: locale === "ar" ? -10 : 10 }}
                    className="flex items-start gap-4 p-6 bg-foreground-light/5 dark:bg-foreground-dark/5 rounded-2xl hover:bg-primary/10 transition-colors group"
                  >
                    <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-primary transition-colors">
                      <info.icon className="w-6 h-6 text-primary group-hover:text-white transition-colors" />
                    </div>
                    <div>
                      <h3 className="font-bold text-foreground-light dark:text-foreground-dark mb-1">
                        {locale === "ar" ? info.titleAr : info.titleEn}
                      </h3>
                      <p className="text-foreground-light/70 dark:text-foreground-dark/70">
                        {info.value}
                      </p>
                    </div>
                  </motion.a>
                ))}

                {/* Map Placeholder */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8 }}
                  className="mt-8 aspect-video bg-foreground-light/5 dark:bg-foreground-dark/5 rounded-2xl overflow-hidden relative"
                >
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center">
                      <MapPin className="w-12 h-12 text-primary mx-auto mb-2" />
                      <p className="text-foreground-light/50 dark:text-foreground-dark/50">
                        {locale === "ar" ? "خريطة الموقع" : "Location Map"}
                      </p>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
