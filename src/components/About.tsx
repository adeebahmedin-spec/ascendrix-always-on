import { AlertCircle, CheckCircle, UserX, Clock, Search, MessageSquareX } from "lucide-react";

const painPoints = [
  {
    icon: UserX,
    pain: "You rely on referrals and word-of-mouth, which is unpredictable",
  },
  {
    icon: Clock,
    pain: "Your team spends hours on outreach with little to show for it",
  },
  {
    icon: Search,
    pain: "You struggle to consistently find serious investors and buyers",
  },
  {
    icon: MessageSquareX,
    pain: "Cold outreach feels spammy and gets ignored",
  },
];

const solutions = [
  "Targeted LinkedIn outreach that starts real conversations with decision-makers",
  "Personalised cold email campaigns that land in inboxes, not spam folders",
  "A steady pipeline of 2-3 qualified meetings per week",
  "You focus on closing, we handle the prospecting",
];

export const About = () => {
  return (
    <section id="about" className="py-16 sm:py-24 lg:py-32">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10 sm:mb-16 animate-fade-in max-w-3xl mx-auto px-2">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight mb-3 sm:mb-4">
            Your Pipeline Shouldn't Depend on Luck
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground">
            Most real estate companies don't have a lead generation problem — they have a consistency problem. 
            If your calendar isn't filling up with qualified meetings, you're leaving money on the table.
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="grid gap-6 sm:gap-8 md:grid-cols-2 animate-fade-in">
            {/* Pain Points */}
            <div className="p-5 sm:p-8 rounded-xl bg-destructive/5 border border-destructive/10">
              <div className="flex items-center gap-2 mb-4 sm:mb-6 text-destructive">
                <AlertCircle className="h-5 w-5" />
                <span className="font-semibold text-base sm:text-lg">Sound familiar?</span>
              </div>
              <ul className="space-y-4">
                {painPoints.map((point, i) => (
                  <li key={i} className="flex items-start gap-3 text-muted-foreground text-sm sm:text-base">
                    <point.icon className="h-5 w-5 text-destructive mt-0.5 flex-shrink-0" />
                    <span>{point.pain}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Solutions */}
            <div className="p-5 sm:p-8 rounded-xl bg-primary/5 border border-primary/10">
              <div className="flex items-center gap-2 mb-4 sm:mb-6 text-primary">
                <CheckCircle className="h-5 w-5" />
                <span className="font-semibold text-base sm:text-lg">What we do differently</span>
              </div>
              <ul className="space-y-4">
                {solutions.map((solution, i) => (
                  <li key={i} className="flex items-start gap-3 text-muted-foreground text-sm sm:text-base">
                    <CheckCircle className="h-4 w-4 text-primary mt-1 flex-shrink-0" />
                    <span>{solution}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
