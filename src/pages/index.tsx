import { HeroSection } from "@/components/HeroSection";
import Navbar from "@/components/navbar";
import { Inter } from "next/font/google";
import { Courses } from "@/components/Courses";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className={`${inter.className}`}>
      <Navbar />
      <HeroSection />
      {/* <Courses /> */}
    </main>
  );
}
