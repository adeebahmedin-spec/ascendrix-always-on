import { Search, Settings, Rocket, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const steps = [
  {
    step: "1",
    title: "Free AI Audit",
    description: "We analyze your current lead flow, response times, and identify exactly how much revenue you're losing to slow follow-up."
  },
  {
    step: "2",
    title: "Custom AI Setup",
    description: "We build and train AI voice and text agents tailored to your business, integrated with your calendar and CRM."
  },
  {
    step: "3",
    title: "Go Live in Days",
    description: "Your AI agents start handling leads 24/7. Most clients see measurable results within the first 30 days."
  }
];

export const Benefits = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.querySelector(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <section className="py-16 sm:py-24 lg:py-32 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10 sm:mb-16 animate-fade-in max-w-3xl mx-auto px-2">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight mb-3 sm:mb-4">
            Get Started in 3 Simple Steps
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground">
            No complex setup. No long contracts. Just results.
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="grid gap-8 sm:gap-6 md:grid-cols-3 mb-10 sm:mb-12">
            {steps.map((step, index) => (
              <div 
                key={step.title}
                className="text-center animate-fade-in relative"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="h-12 w-12 sm:h-16 sm:w-16 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-xl sm:text-2xl font-bold mx-auto mb-3 sm:mb-4">
                  {step.step}
                </div>
                <h3 className="font-semibold text-base sm:text-lg mb-1.5 sm:mb-2">{step.title}</h3>
                <p className="text-muted-foreground text-xs sm:text-sm px-2">{step.description}</p>
                
                {/* Mobile connector line */}
                {index < steps.length - 1 && (
                  <div className="md:hidden w-0.5 h-6 bg-primary/20 mx-auto mt-4" />
                )}
              </div>
            ))}
          </div>

          <div className="text-center animate-fade-in px-4 sm:px-0">
            <Button 
              size="lg" 
              className="group shadow-lg hover:shadow-xl transition-all text-base sm:text-lg px-6 sm:px-8 py-5 sm:py-6 w-full sm:w-auto"
              onClick={() => scrollToSection("#contact")}
            >
              Book Your Free AI Audit
              <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5 transition-transform group-hover:translate-x-1" />
            </Button>
            <p className="text-xs sm:text-sm text-muted-foreground mt-3 sm:mt-4">
              Takes 15 minutes • No commitment required
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
