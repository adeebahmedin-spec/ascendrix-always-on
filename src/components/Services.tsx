import { Linkedin, Mail, UserCheck, BarChart3, ArrowRight } from "lucide-react";

const services = [
  {
    icon: Linkedin,
    title: "LinkedIn Outreach",
    description: "We identify and connect with your ideal prospects — investors, buyers, and decision-makers — through personalised LinkedIn messaging that builds trust and books calls.",
    metric: "Direct access to decision-makers"
  },
  {
    icon: Mail,
    title: "Cold Email Campaigns",
    description: "Targeted, personalised email sequences designed to cut through the noise. We handle list building, copywriting, deliverability, and follow-ups so your inbox fills with replies, not silence.",
    metric: "Emails that actually get opened"
  },
  {
    icon: UserCheck,
    title: "Lead Qualification",
    description: "Not every reply is a good fit. We qualify responses based on budget, intent, and timeline so you only get on calls with serious prospects who are ready to move.",
    metric: "No more wasted meetings"
  },
  {
    icon: BarChart3,
    title: "Campaign Optimisation",
    description: "We continuously test messaging, targeting, and timing. You get transparent reporting on open rates, reply rates, and meetings booked — so you always know what's working.",
    metric: "Data-driven improvements"
  }
];

export const Services = () => {
  return (
    <section id="services" className="py-16 sm:py-24 lg:py-32 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10 sm:mb-16 animate-fade-in max-w-3xl mx-auto px-2">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight mb-3 sm:mb-4">
            How We Fill Your Calendar With Qualified Meetings
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground">
            A proven outreach system built for real estate companies that want consistent, predictable deal flow.
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
