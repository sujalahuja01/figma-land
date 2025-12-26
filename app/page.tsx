import Header from "@/sections/Header/Header";
import Hero from "@/sections/Hero/Hero";
import Features from "@/sections/Features/Features";
import Image from "next/image";

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <Features />
    </main>
  );
}
