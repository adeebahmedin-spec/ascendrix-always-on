import { Navigation } from "@/components/Navigation";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Services } from "@/components/Services";
import { Benefits } from "@/components/Benefits";
import { FAQ } from "@/components/FAQ";
import { CalendlyEmbed } from "@/components/CalendlyEmbed";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      <About />
      <Services />
      <Benefits />
      <FAQ />
      <CalendlyEmbed />
      <Footer />
    </div>
  );
};

export default Index;
