import { Button } from "@/components/ui/button";
import { ROICalculator } from "@/components/ROICalculator";
import { ArrowRight, Target, Mail, Linkedin, CalendarCheck } from "lucide-react";

export const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.querySelector(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <section id="home" className="relative overflow-hidden bg-gradient-to-b from-background to-secondary/30 pt-16">
      <div className="container mx-auto px-4 py-16 sm:py-24 lg:py-32">
        <div className="mx-auto max-w-4xl text-center animate-fade-in">
          <h1 className="mb-4 sm:mb-6 text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl lg:text-6xl">
            Helping B2B Companies Get More Sales{" "}
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Without Paid Ads
            </span>
          </h1>
          
          <p className="mb-6 sm:mb-8 text-base sm:text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed px-2">
            We help real estate companies book 2-3 serious meetings with investors and buyers every week 
            through targeted LinkedIn outreach and cold email campaigns — no ad spend required.
          </p>

          <div className="grid grid-cols-2 gap-3 sm:flex sm:flex-wrap sm:justify-center sm:gap-6 lg:gap-8 mb-8 sm:mb-10 text-xs sm:text-sm">
            <div className="flex items-center gap-2 text-muted-foreground justify-center sm:justify-start">
              <Linkedin className="h-4 w-4 sm:h-5 sm:w-5 text-primary flex-shrink-0" />
              <span>LinkedIn outreach</span>
            </div>
            <div className="flex items-center gap-2 text-muted-foreground justify-center sm:justify-start">
              <Mail className="h-4 w-4 sm:h-5 sm:w-5 text-primary flex-shrink-0" />
              <span>Cold email campaigns</span>
            </div>
            <div className="flex items-center gap-2 text-muted-foreground justify-center sm:justify-start">
              <CalendarCheck className="h-4 w-4 sm:h-5 sm:w-5 text-primary flex-shrink-0" />
              <span>2-3 meetings/week</span>
            </div>
            <div className="flex items-center gap-2 text-muted-foreground justify-center sm:justify-start">
              <Target className="h-4 w-4 sm:h-5 sm:w-5 text-primary flex-shrink-0" />
              <span>Qualified prospects only</span>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in-delay">
            <Button 
              size="lg" 
              className="group w-full sm:w-auto shadow-lg hover:shadow-xl transition-all text-lg px-8 py-6"
              onClick={() => scrollToSection("#discovery-call")}
            >
              Book a Free Demo
              <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Button>
            <ROICalculator />
          </div>
        </div>
      </div>
      
      {/* Decorative gradient orbs */}
      <div className="absolute top-0 right-0 -z-10 h-96 w-96 rounded-full bg-primary/20 blur-3xl opacity-20" />
      <div className="absolute bottom-0 left-0 -z-10 h-96 w-96 rounded-full bg-accent/20 blur-3xl opacity-20" />
    </section>
  );
};
