import { Bot, Phone, MessageSquare, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export const AIAddon = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.querySelector(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <section className="py-16 sm:py-24 lg:py-32">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8 sm:mb-12 animate-fade-in">
            <span className="inline-block text-xs sm:text-sm font-medium text-primary bg-primary/10 px-3 py-1 rounded-full mb-4">
              Add-On Feature
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight mb-3 sm:mb-4">
              AI Voice & Text Agents
            </h2>
            <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto">
              Already generating leads? Supercharge your pipeline with AI agents that respond to every inquiry instantly, 
              qualify prospects, and book meetings for you, 24/7, in 99+ languages.
            </p>
          </div>

          <div className="grid gap-4 sm:gap-6 sm:grid-cols-3 mb-8 sm:mb-10 animate-fade-in">
            <div className="flex items-start gap-3 p-4 rounded-lg bg-secondary/50">
              <Phone className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
              <div>
                <h4 className="font-semibold text-sm sm:text-base mb-1">Voice Agents</h4>
                <p className="text-xs sm:text-sm text-muted-foreground">Human-like AI that answers calls, qualifies leads, and books meetings around the clock.</p>
              </div>
            </div>
            <div className="flex items-start gap-3 p-4 rounded-lg bg-secondary/50">
              <MessageSquare className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
              <div>
                <h4 className="font-semibold text-sm sm:text-base mb-1">Text Agents</h4>
                <p className="text-xs sm:text-sm text-muted-foreground">Intelligent SMS and chat agents that follow up with leads instantly and convert inquiries into booked calls.</p>
              </div>
            </div>
            <div className="flex items-start gap-3 p-4 rounded-lg bg-secondary/50">
              <Zap className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
              <div>
                <h4 className="font-semibold text-sm sm:text-base mb-1">Instant Response</h4>
                <p className="text-xs sm:text-sm text-muted-foreground">Every lead gets a response in under 30 seconds — so you never lose a prospect to slow follow-up.</p>
              </div>
            </div>
          </div>

          <div className="text-center animate-fade-in">
            <Button 
              variant="outline"
              size="lg"
              className="group"
              onClick={() => scrollToSection("#discovery-call")}
            >
              Ask About AI Add-On
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
