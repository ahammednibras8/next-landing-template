import Navbar from "@/components/layout/Navbar";
import Features from "@/components/sections/Features";
import Hero from "@/components/sections/Hero";
import Integrations from "@/components/sections/Integrations";
import LogoTicker from "@/components/sections/LogoTicker";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <LogoTicker />
      <Features />
      <Integrations />
    </>
  );
}
