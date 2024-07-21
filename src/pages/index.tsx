import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className={`${inter.className}`}>
      <h1 className="font-extrabold text-lg text-black">
        Interview Preparation
      </h1>
    </main>
  );
}
