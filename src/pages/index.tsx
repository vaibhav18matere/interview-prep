import { Navbar } from "@/components/navbar";
import { Inter } from "next/font/google";
import { HeroSection } from "@/components/HeroSection";
import { CompaniesList } from "@/components/CompaniesList";
import { Features } from "@/components/Features";
import { Testimonials } from "@/components/Testimonials";
import { FAQ } from "@/components/FAQ ";
import { Footer } from "@/components/Footer";
import { ThemeProvider } from "@/components/layout/theme-provider";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className={`${inter.className}`}>
      <ThemeProvider
        attribute="class"
        defaultTheme="system"
        enableSystem
        disableTransitionOnChange
      >
        <Navbar />
        <HeroSection />
        <Features />
        <CompaniesList />
        <Testimonials />
        <FAQ />
        <Footer />
      </ThemeProvider>
    </main>
  );
}
