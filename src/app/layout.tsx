import type { Metadata } from "next";
import "./globals.css";
import { LanguageProvider } from "@/context/LanguageContext";
import { ThemeProvider } from "@/context/ThemeContext";

export const metadata: Metadata = {
  title: "Seven Letters",
  description: "Partners of Success",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ar" suppressHydrationWarning>
      {/* شيلنا أي كود للخط من هنا لأن الـ CSS بقى هو الكل في الكل */}
      <body className="antialiased bg-[#f3f0e9] text-[#231f20] dark:bg-[#231f20] dark:text-[#f3f0e9]">
        <ThemeProvider>
          <LanguageProvider>{children}</LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}