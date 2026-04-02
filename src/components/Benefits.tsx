import { ArrowRight, Shield, Zap, Target, BarChart3, HeartHandshake, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";

const reasons = [
  {
    icon: Target,
    title: "Hyper-Targeted Outreach",
    description: "We don't blast generic messages. Every campaign is tailored to your ICP, ensuring you only connect with prospects who match your ideal buyer profile.",
  },
  {
    icon: Shield,
    title: "Deliverability-First Approach",
    description: "Proper domain setup, inbox warm-up, and authentication (SPF, DKIM, DMARC) means your emails actually reach inboxes, not spam folders.",
  },
  {
    icon: BarChart3,
    title: "Data-Driven Optimisation",
    description: "We continuously A/B test subject lines, copy, and sequences. Every decision is backed by real open rates, reply rates, and conversion data.",
  },
  {
    icon: Clock,
    title: "Save 15+ Hours Per Week",
    description: "Stop wasting time on manual prospecting. We handle the entire outreach process so your team can focus on what they do best - closing deals.",
  },
  {
    icon: Zap,
    title: "Fast Time-to-Results",
    description: "Most clients see their first qualified meetings within 2-3 weeks of campaign launch. No long ramp-up periods or empty promises.",
  },
  {
    icon: HeartHandshake,
    title: "Transparent Partnership",
    description: "You get full visibility into campaign performance with regular reporting. No hidden metrics, no vanity numbers - just real results you can measure.",
  },
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
            Why Ascendrix?
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground">
            We're not just another lead gen agency. Here's what sets us apart.
          </p>
        </div>
        
        <div className="max-w-5xl mx-auto">
          <div className="grid gap-6 sm:gap-8 md:grid-cols-2 lg:grid-cols-3 mb-10 sm:mb-12">
            {reasons.map((reason, index) => (
              <div 
                key={reason.title}
                className="animate-fade-in p-5 sm:p-6 rounded-xl bg-background/60 border border-border/50 hover:border-primary/30 transition-all group"
                style={{ animationDelay: `${index * 0.08}s` }}
              >
                <div className="h-10 w-10 sm:h-12 sm:w-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary mb-4 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                  <reason.icon className="h-5 w-5 sm:h-6 sm:w-6" />
                </div>
                <h3 className="font-semibold text-base sm:text-lg mb-2">{reason.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{reason.description}</p>
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
              Takes 15 minutes - No commitment required
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
