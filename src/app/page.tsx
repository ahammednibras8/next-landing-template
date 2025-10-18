import Footer from "@/components/layout/Footer";
import Navbar from "@/components/layout/Navbar";
import Faqs from "@/components/sections/Faqs";
import Features from "@/components/sections/Features";
import Hero from "@/components/sections/Hero";
import Integrations from "@/components/sections/Integrations";
import LogoTicker from "@/components/sections/LogoTicker";
import Pricing from "@/components/sections/Pricing";
import Testimonials from "@/components/sections/Testimonials";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <LogoTicker />
      <Features />
      <Integrations />
      <Pricing />
      <Testimonials />
      <Faqs />
      <Footer />
    </>
  );
}
