import { TrendingUp, Clock, Users, DollarSign } from "lucide-react";

const caseStudies = [
  {
    industry: "Real Estate",
    company: "Pinnacle Realty Group",
    challenge: "Losing 40% of leads that came in after hours. Agents missed hot prospects while juggling showings.",
    solution: "Deployed AI voice and text agents to respond instantly to every inquiry and qualify leads before passing to agents.",
    results: [
      { icon: TrendingUp, metric: "12 extra deals", detail: "closed in 60 days" },
      { icon: Clock, metric: "100%", detail: "of leads contacted in <30 sec" },
      { icon: Users, metric: "Only qualified", detail: "buyers meet agents" }
    ],
    quote: "Our agents only meet pre-qualified buyers now. Closed 12 extra deals in just 60 days.",
    author: "Marcus Williams, Founder"
  },
  {
    industry: "Real Estate",
    company: "Horizon Real Estate",
    challenge: "Agents drowning in follow-up calls, missing hot leads while handling paperwork and showings.",
    solution: "AI took over lead qualification and appointment scheduling, freeing agents to focus on closing.",
    results: [
      { icon: Calendar, metric: "25 qualified", detail: "showings in 30 days" },
      { icon: DollarSign, metric: "5 deals", detail: "that would've been lost" },
      { icon: Clock, metric: "3+ hours", detail: "saved per agent daily" }
    ],
    quote: "In 30 days, we booked 25 qualified showings and closed 5 deals that would have slipped through the cracks.",
    author: "Sarah Chen, Broker"
  },
  {
    industry: "Hospitality",
    company: "The Grandview Hotel",
    challenge: "Front desk overwhelmed with repetitive questions. Direct bookings lost to OTAs taking 15-20% commission.",
    solution: "AI handles guest inquiries 24/7, answers FAQs, and assists with direct bookings.",
    results: [
      { icon: TrendingUp, metric: "35%", detail: "increase in direct bookings" },
      { icon: Star, metric: "4.2 → 4.8", detail: "guest satisfaction score" },
      { icon: Clock, metric: "Instant", detail: "response to every inquiry" }
    ],
    quote: "Direct bookings jumped 35% and our guest satisfaction scores climbed from 4.2 to 4.8 stars.",
    author: "Lisa Anderson, CEO"
  },
  {
    industry: "Restaurant",
    company: "Bistro Verde",
    challenge: "Staff spending 3+ hours daily on reservation calls. No-shows costing thousands monthly.",
    solution: "AI handles all bookings, sends automated reminders, and fills cancelled tables from waitlist.",
    results: [
      { icon: TrendingUp, metric: "60%", detail: "reduction in no-shows" },
      { icon: Clock, metric: "3 hours", detail: "saved daily" },
      { icon: DollarSign, metric: "Cancelled tables", detail: "filled in minutes" }
    ],
    quote: "No-shows dropped by 60% in the first month, and we consistently fill cancelled tables within minutes.",
    author: "Michael Rodriguez, Owner"
  }
];

import { Star, Calendar } from "lucide-react";

export const Testimonials = () => {
  return (
    <section id="case-studies" className="py-16 sm:py-24 lg:py-32">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10 sm:mb-16 animate-fade-in max-w-3xl mx-auto px-2">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight mb-3 sm:mb-4">
            Case Studies
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground">
            Real results from businesses using our AI agents to capture more revenue
          </p>
        </div>

        <div className="space-y-10 sm:space-y-12 max-w-5xl mx-auto">
          {caseStudies.map((study, index) => (
            <div
              key={study.company}
              className="animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex flex-wrap items-center gap-2 sm:gap-3 mb-4">
                <span className="text-xs sm:text-sm font-medium text-primary bg-primary/10 px-2 sm:px-3 py-1 rounded-full">
                  {study.industry}
                </span>
                <span className="text-base sm:text-lg font-semibold">{study.company}</span>
              </div>

              <div className="grid gap-4 sm:gap-6 md:grid-cols-3 mb-4 sm:mb-6">
                <div className="p-3 sm:p-4 rounded-lg bg-destructive/5 md:bg-transparent md:p-0">
                  <h4 className="font-semibold text-destructive mb-1 sm:mb-2 text-sm sm:text-base">Challenge</h4>
                  <p className="text-muted-foreground text-xs sm:text-sm">{study.challenge}</p>
                </div>
                <div className="p-3 sm:p-4 rounded-lg bg-primary/5 md:bg-transparent md:p-0">
                  <h4 className="font-semibold text-primary mb-1 sm:mb-2 text-sm sm:text-base">Solution</h4>
                  <p className="text-muted-foreground text-xs sm:text-sm">{study.solution}</p>
                </div>
                <div className="p-3 sm:p-4 rounded-lg bg-secondary md:bg-transparent md:p-0">
                  <h4 className="font-semibold mb-1 sm:mb-2 text-sm sm:text-base">Results</h4>
                  <div className="space-y-1.5 sm:space-y-2">
                    {study.results.map((result, i) => (
                      <div key={i} className="flex items-center gap-2 text-xs sm:text-sm">
                        <result.icon className="h-3.5 w-3.5 sm:h-4 sm:w-4 text-primary flex-shrink-0" />
                        <span className="font-medium">{result.metric}</span>
                        <span className="text-muted-foreground">{result.detail}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <blockquote className="border-l-2 border-primary pl-3 sm:pl-4 italic text-muted-foreground text-sm sm:text-base">
                "{study.quote}"
                <footer className="mt-1.5 sm:mt-2 not-italic font-medium text-foreground text-xs sm:text-sm">
                  - {study.author}
                </footer>
              </blockquote>

              {index < caseStudies.length - 1 && (
                <div className="border-b border-border mt-6 sm:mt-8" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
