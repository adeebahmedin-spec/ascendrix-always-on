import { Navigation } from "@/components/Navigation";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Services } from "@/components/Services";
import { Benefits } from "@/components/Benefits";
import { ROICalculator } from "@/components/ROICalculator";
import { FAQ } from "@/components/FAQ";
import { AIAddon } from "@/components/AIAddon";
import { CalendlyEmbed } from "@/components/CalendlyEmbed";
import { InboxHealthScanner } from "@/components/InboxHealthScanner";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      <About />
      <Services />
      <Benefits />
      <ROICalculator />
      <FAQ />
      <AIAddon />
      <CalendlyEmbed />
      <InboxHealthScanner />
      <Footer />
    </div>
  );
};

export default Index;
