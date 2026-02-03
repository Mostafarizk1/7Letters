import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import TrustBar from "@/components/TrustBar";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-background-light dark:bg-background-dark transition-colors duration-300">
        <Hero />
        <TrustBar />
      </main>
      <Footer />
    </>
  );
}
