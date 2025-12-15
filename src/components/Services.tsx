import { MessageSquare, Phone, Calendar, Workflow, ArrowRight } from "lucide-react";

const services = [
  {
    icon: Phone,
    title: "AI Voice Agents",
    description: "Human-like voice assistants that answer calls, qualify leads, handle reservations, and book appointments 24 hours a day, 7 days a week.",
    metric: "Never miss a call again"
  },
  {
    icon: MessageSquare,
    title: "AI Text Agents",
    description: "Intelligent SMS and chat agents that follow up with leads instantly, answer guest questions, and convert inquiries into booked appointments.",
    metric: "Respond in under 30 seconds"
  },
  {
    icon: Calendar,
    title: "Automated Booking",
    description: "Seamless scheduling that syncs with your calendar. Leads and guests book directly, receive confirmations, and get reminders automatically.",
    metric: "Reduce no-shows by 60%"
  },
  {
    icon: Workflow,
    title: "Lead Qualification",
    description: "AI qualifies every prospect before they reach your team. Your staff only speaks with serious, ready-to-buy leads.",
    metric: "Focus on deals that close"
  }
];

export const Services = () => {
  return (
    <section id="services" className="py-16 sm:py-24 lg:py-32 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10 sm:mb-16 animate-fade-in max-w-3xl mx-auto px-2">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight mb-3 sm:mb-4">
            How We Turn Missed Opportunities Into Revenue
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground">
            Our AI agents work around the clock so you can focus on closing deals, delighting guests, and filling tables.
          </p>
        </div>
        
        <div className="grid gap-6 sm:gap-8 md:grid-cols-2 max-w-4xl mx-auto">
          {services.map((service, index) => (
            <div 
              key={service.title}
              className="group relative animate-fade-in p-4 sm:p-0 rounded-lg bg-background/50 sm:bg-transparent"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex gap-3 sm:gap-4">
                <div className="flex-shrink-0 h-10 w-10 sm:h-12 sm:w-12 rounded-full bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                  <service.icon className="h-5 w-5 sm:h-6 sm:w-6" />
                </div>
                <div>
                  <h3 className="text-lg sm:text-xl font-semibold mb-1.5 sm:mb-2">{service.title}</h3>
                  <p className="text-muted-foreground text-sm sm:text-base mb-2 sm:mb-3">{service.description}</p>
                  <div className="flex items-center gap-2 text-primary text-xs sm:text-sm font-medium">
                    <ArrowRight className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
                    <span>{service.metric}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
