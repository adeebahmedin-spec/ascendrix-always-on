import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Slider } from "@/components/ui/slider";
import { DollarSign, MessageSquare, Target, TrendingUp } from "lucide-react";

const formatCurrency = (value: number) =>
  new Intl.NumberFormat("en-GB", { style: "currency", currency: "GBP", maximumFractionDigits: 0 }).format(value);

export const ROICalculator = () => {
  const [clientValue, setClientValue] = useState(2000);

  // Combined benchmarks
  const coldEmails = 25000;
  const coldReplyRate = 2.5;
  const coldCloseRate = 5;
  const coldReplies = Math.round(coldEmails * (coldReplyRate / 100));
  const coldLeads = Math.round(coldReplies * (coldCloseRate / 100));

  const linkedinRequests = 800;
  const linkedinAcceptRate = 30;
  const linkedinReplyRate = 15;
  const linkedinCloseRate = 5;
  const linkedinAccepts = Math.round(linkedinRequests * (linkedinAcceptRate / 100));
  const linkedinReplies = Math.round(linkedinAccepts * (linkedinReplyRate / 100));
  const linkedinLeads = Math.round(linkedinReplies * (linkedinCloseRate / 100));

  const totalReplies = coldReplies + linkedinReplies;
  const totalLeads = coldLeads + linkedinLeads;
  const totalRevenue = totalLeads * clientValue;

  return (
    <section id="roi-calculator" className="py-16 sm:py-24 lg:py-32">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10 sm:mb-14 animate-fade-in max-w-3xl mx-auto">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight mb-3 sm:mb-4">
            See What Our Campaigns Could Generate for You
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground">
            Adjust your average client value and see realistic monthly projections based on industry benchmarks.
          </p>
        </div>

        <div className="max-w-3xl mx-auto rounded-2xl bg-background/60 border border-border/50 p-6 sm:p-10 animate-fade-in">
          {/* Slider */}
          <div className="mb-8 max-w-xl mx-auto">
            <div className="flex justify-between items-center mb-1">
              <div className="flex items-center gap-2">
                <DollarSign className="h-5 w-5 text-primary" />
                <label className="text-sm sm:text-base font-semibold">Average Client Value</label>
              </div>
              <span className="text-xl sm:text-2xl font-bold text-primary">{formatCurrency(clientValue)}</span>
            </div>
            <p className="text-xs text-muted-foreground mb-4">(The price of your product or service)</p>
            <Slider
              value={[clientValue]}
              onValueChange={(v) => setClientValue(v[0])}
              min={500}
              max={50000}
              step={500}
            />
            <div className="flex justify-between text-xs text-muted-foreground mt-1">
              <span>£500</span>
              <span>£50,000</span>
            </div>
          </div>

          {/* Fixed Benchmarks */}
          <div className="space-y-2 mb-8 text-sm">
            <div className="flex justify-between items-center p-3 rounded-lg bg-muted/30">
              <span className="text-muted-foreground">Monthly Outreach Volume</span>
              <span className="font-semibold">25,800+ touchpoints</span>
            </div>
            <div className="flex justify-between items-center p-3 rounded-lg bg-muted/30">
              <span className="text-muted-foreground">Average Response Rate</span>
              <span className="font-semibold">~3%</span>
            </div>
            <div className="flex justify-between items-center p-3 rounded-lg bg-muted/30">
              <span className="text-muted-foreground">Lead Conversion Rate</span>
              <span className="font-semibold">5%</span>
            </div>
          </div>

          {/* Results */}
          <div className="grid grid-cols-3 gap-4 text-center">
            <div className="p-5 rounded-xl bg-primary/5 border border-primary/20">
              <MessageSquare className="mx-auto h-5 w-5 text-primary mb-2" />
              <p className="text-2xl sm:text-3xl font-bold">{totalReplies}</p>
              <p className="text-xs text-muted-foreground mt-1">Responses per Month</p>
            </div>
            <div className="p-5 rounded-xl bg-primary/5 border border-primary/20">
              <Target className="mx-auto h-5 w-5 text-primary mb-2" />
              <p className="text-2xl sm:text-3xl font-bold">{totalLeads}</p>
              <p className="text-xs text-muted-foreground mt-1">Qualified Leads</p>
            </div>
            <div className="p-5 rounded-xl bg-primary/5 border border-primary/20">
              <TrendingUp className="mx-auto h-5 w-5 text-primary mb-2" />
              <p className="text-2xl sm:text-3xl font-bold">{formatCurrency(totalRevenue)}</p>
              <p className="text-xs text-muted-foreground mt-1">Potential Revenue</p>
            </div>
          </div>
        </div>

        <p className="text-center text-xs text-muted-foreground mt-8 max-w-2xl mx-auto">
          These projections are based on realistic industry benchmarks. Actual results vary depending on your market, offer, and sales process.
        </p>

        <div className="text-center mt-6">
          <Button
            className="h-12 px-8 text-base"
            onClick={() => document.getElementById("discovery-call")?.scrollIntoView({ behavior: "smooth" })}
          >
            Book a Free Demo
          </Button>
        </div>
      </div>
    </section>
  );
};
