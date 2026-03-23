import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const steps = [
  {
    step: "1",
    title: "Free Strategy Call",
    description: "We learn about your business, ideal clients, and current pipeline to see if we're the right fit."
  },
  {
    step: "2",
    title: "Campaign Setup",
    description: "We build your prospect lists, craft personalised messaging, and set up your LinkedIn and email infrastructure."
  },
  {
    step: "3",
    title: "Meetings Start Booking",
    description: "Campaigns go live and qualified meetings start hitting your calendar. We optimise continuously based on results."
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
            No complex setup. Just results.
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
              onClick={() => scrollToSection("#discovery-call")}
            >
              Book Your Free Demo
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
