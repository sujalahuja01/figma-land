import Header from "@/sections/header";
import Hero from "@/sections/hero";
import Features from "@/sections/features";
import Organise from "@/sections/organise";
import Light from "@/sections/light";
import Partners from "@/sections/partners";
import Testimonials from "@/sections/testimonials";
import Pricing from "@/sections/pricing";
import Contact from "@/sections/contact";
import Footer from "@/sections/footer";

export default function Home() {
  return (
    <main>
      {/* <Header /> */}
      <Hero />
      <Features />
      <Organise />
      <Light />
      <Partners />
      <Testimonials />
      <Pricing />
      <Contact />
      <Footer />
    </main>
  );
}
