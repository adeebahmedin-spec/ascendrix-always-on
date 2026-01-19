import { Building2, Home, Briefcase, AlertCircle, CheckCircle } from "lucide-react";

const industries = [
  {
    icon: Home,
    industry: "Residential Real Estate",
    painPoints: [
      "Leads go cold because agents can't respond fast enough",
      "After-hours inquiries get lost overnight",
      "Hours wasted on unqualified tire-kickers",
      "Missed calls during showings cost you listings"
    ],
    solutions: [
      "Instant lead response in under 30 seconds",
      "24/7 qualification so agents only meet serious buyers",
      "Automated viewing scheduling synced to agent calendars",
      "Every inquiry captured and followed up, even at 2 AM"
    ]
  },
  {
    icon: Briefcase,
    industry: "Commercial Real Estate",
    painPoints: [
      "Complex property inquiries require immediate expert responses",
      "Long sales cycles mean leads slip through the cracks",
      "Tenant and investor inquiries pile up unanswered",
      "Brokers juggling too many prospects to follow up properly"
    ],
    solutions: [
      "AI qualifies commercial leads based on budget and requirements",
      "Automated follow-up sequences keep deals moving forward",
      "Instant responses to tenant and investor inquiries 24/7",
      "Smart scheduling for property tours and meetings"
    ]
  },
  {
    icon: Building2,
    industry: "Brokerages & Agencies",
    painPoints: [
      "Agents overwhelmed with lead volume and admin tasks",
      "Inconsistent follow-up hurts conversion rates",
      "Training new agents on lead handling takes months",
      "No visibility into which leads are being worked"
    ],
    solutions: [
      "Every lead gets the same fast, professional response",
      "Automated qualification frees agents to focus on closings",
      "AI handles initial contact so new agents can learn from quality leads",
      "Full tracking of every conversation and lead status"
    ]
  }
];

export const About = () => {
  return (
    <section id="about" className="py-16 sm:py-24 lg:py-32">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10 sm:mb-16 animate-fade-in max-w-3xl mx-auto px-2">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight mb-3 sm:mb-4">
            The Problem Costing You Thousands Every Month
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground">
            Speed wins. The first business to respond gets 78% of the deals. 
            If you're not responding in seconds, you're losing to competitors who do.
          </p>
        </div>

        <div className="space-y-12 sm:space-y-16 max-w-5xl mx-auto">
          {industries.map((item, index) => (
            <div
              key={item.industry}
              className="animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-center gap-3 mb-6 sm:mb-8">
                <div className="h-10 w-10 sm:h-12 sm:w-12 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                  <item.icon className="h-5 w-5 sm:h-6 sm:w-6" />
                </div>
                <h3 className="text-xl sm:text-2xl font-bold">{item.industry}</h3>
              </div>

              <div className="grid gap-6 sm:gap-8 md:grid-cols-2">
                <div className="p-4 sm:p-0 rounded-lg bg-destructive/5 sm:bg-transparent">
                  <div className="flex items-center gap-2 mb-3 sm:mb-4 text-destructive">
                    <AlertCircle className="h-4 w-4 sm:h-5 sm:w-5" />
                    <span className="font-semibold text-sm sm:text-base">Without AI Agents</span>
                  </div>
                  <ul className="space-y-2 sm:space-y-3">
                    {item.painPoints.map((point, i) => (
                      <li key={i} className="flex items-center gap-2 sm:gap-3 text-muted-foreground text-sm sm:text-base">
                        <span className="text-destructive font-bold">•</span>
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="p-4 sm:p-0 rounded-lg bg-primary/5 sm:bg-transparent">
                  <div className="flex items-center gap-2 mb-3 sm:mb-4 text-primary">
                    <CheckCircle className="h-4 w-4 sm:h-5 sm:w-5" />
                    <span className="font-semibold text-sm sm:text-base">With Ascendrix</span>
                  </div>
                  <ul className="space-y-2 sm:space-y-3">
                    {item.solutions.map((solution, i) => (
                      <li key={i} className="flex items-start gap-2 sm:gap-3 text-muted-foreground text-sm sm:text-base">
                        <CheckCircle className="h-3.5 w-3.5 sm:h-4 sm:w-4 text-primary mt-1 flex-shrink-0" />
                        <span>{solution}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {index < industries.length - 1 && (
                <div className="border-b border-border mt-8 sm:mt-12" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
