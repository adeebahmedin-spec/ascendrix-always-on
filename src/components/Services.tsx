import { Settings, Users, PenTool, Send, TrendingUp } from "lucide-react";

const steps = [
  {
    icon: Settings,
    step: "01",
    title: "Infrastructure & Deliverability",
    description: "We configure dedicated domains with SPF, DKIM, and DMARC authentication, set up multiple sending inboxes, and gradually warm each one to establish strong sender reputation before any outreach begins.",
  },
  {
    icon: Users,
    step: "02",
    title: "Audience Research & List Building",
    description: "We map out your ideal buyer profile - job titles, industries, company size, and key pain points - then source and verify high-quality lead lists using platforms like Clay and Apollo.",
  },
  {
    icon: PenTool,
    step: "03",
    title: "Message Crafting & Split Testing",
    description: "We write compelling subject lines and email variations tailored to your audience, then A/B test each element and iterate based on real open and reply data.",
  },
  {
    icon: Send,
    step: "04",
    title: "Campaign Launch & Follow-Up Sequences",
    description: "We deploy personalised multi-step sequences with 3-5 strategic follow-ups, tracking engagement at every stage to keep conversations moving forward.",
  },
  {
    icon: TrendingUp,
    step: "05",
    title: "Analytics, Optimisation & Scale",
    description: "We track every key metric, identify top-performing angles, and double down on what works - scaling your campaigns to consistently deliver qualified leads and booked calls.",
  },
];

export const Services = () => {
  return (
    <section id="services" className="py-16 sm:py-24 lg:py-32 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10 sm:mb-16 animate-fade-in max-w-3xl mx-auto px-2">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight mb-3 sm:mb-4">
            Our 5-Step System to Predictable Pipeline Growth
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground">
            A proven 5-step system that fills your calendar with consistent qualified leads.
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto space-y-6">
          {steps.map((step, index) => (
            <div 
              key={step.title}
              className="group animate-fade-in relative"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex gap-4 sm:gap-6 p-5 sm:p-6 rounded-xl bg-background/60 border border-border/50 hover:border-primary/30 transition-all">
                <div className="flex-shrink-0 flex flex-col items-center gap-2">
                  <span className="text-xs font-bold text-primary/60 tracking-widest">{step.step}</span>
                  <div className="h-10 w-10 sm:h-12 sm:w-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                    <step.icon className="h-5 w-5 sm:h-6 sm:w-6" />
                  </div>
                </div>
                <div>
                  <h3 className="text-lg sm:text-xl font-semibold mb-1.5 sm:mb-2">{step.title}</h3>
                  <p className="text-muted-foreground text-sm sm:text-base leading-relaxed">{step.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
