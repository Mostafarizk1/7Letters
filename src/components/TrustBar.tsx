"use client";

import Image from "next/image";

// توليد مصفوفة اللوجوهات (30 لوجو)
const logos = Array.from({ length: 30 }, (_, i) => ({
  id: i + 1,
  src: `/logos/LOGO_${i + 1}.svg`,
  alt: `Client ${i + 1}`,
}));

export default function TrustBar() {
  return (
    // هام جداً: ضفنا dir="ltr" هنا عشان نجبر الصور تترتب صح 
    // والـ CSS هو اللي يقرر يحركهم يمين ولا شمال
    <section className="py-12 bg-transparent overflow-hidden" dir="ltr">
      <div className="relative w-full">
        
        {/* Gradients */}
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-[#f3f0e9] dark:from-[#231f20] to-transparent z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-[#f3f0e9] dark:from-[#231f20] to-transparent z-10" />

        {/* الشريط المتحرك */}
        <div className="animate-scroll gap-12">
          
          {/* تكرار اللوجوهات 3 مرات */}
          {[...logos, ...logos, ...logos].map((logo, index) => (
            <div 
              key={`${logo.id}-${index}`} 
              className="w-[150px] h-[80px] flex-shrink-0 flex items-center justify-center relative"
            >
              <div className="relative w-full h-full transition-all duration-300 opacity-60 hover:opacity-100 grayscale hover:grayscale-0">
                <Image
                  src={logo.src}
                  alt={logo.alt}
                  fill
                  className="object-contain dark:invert"
                />
              </div>
            </div>
          ))}
          
        </div>
      </div>
    </section>
  );
}