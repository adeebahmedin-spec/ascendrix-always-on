import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Slider } from "@/components/ui/slider";
import { TrendingUp } from "lucide-react";

const formatCurrency = (value: number) =>
  new Intl.NumberFormat("en-GB", { style: "currency", currency: "GBP", maximumFractionDigits: 0 }).format(value);

export const ROICalculator = () => {
  const [clientValue, setClientValue] = useState(2000);

  // Combined realistic benchmarks (cold email + LinkedIn)
  const monthlyLeads = 33; // ~31 from email + ~2 from LinkedIn
  const monthlyRevenue = monthlyLeads * clientValue;
  const campaignCost = 2000;
  const roi = Math.round(((monthlyRevenue - campaignCost) / campaignCost) * 100);

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

        <div className="max-w-2xl mx-auto rounded-2xl bg-background/60 border border-border/50 p-6 sm:p-10 animate-fade-in">
          {/* Slider */}
          <div className="mb-10">
            <div className="flex justify-between items-center mb-2">
              <label className="text-sm sm:text-base font-semibold">Your Average Client Value</label>
              <span className="text-2xl sm:text-3xl font-bold text-primary">{formatCurrency(clientValue)}</span>
            </div>
            <p className="text-xs text-muted-foreground mb-5">(The price of your product or service)</p>
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

          {/* Results */}
          <div className="space-y-4 mb-8">
            <div className="flex justify-between items-center p-4 rounded-xl bg-muted/30">
              <span className="text-sm text-muted-foreground">Estimated Leads per Month</span>
              <span className="text-lg font-bold">~{monthlyLeads}</span>
            </div>
            <div className="flex justify-between items-center p-4 rounded-xl bg-muted/30">
              <span className="text-sm text-muted-foreground">Estimated Monthly Revenue</span>
              <span className="text-lg font-bold text-primary">{formatCurrency(monthlyRevenue)}</span>
            </div>
            <div className="flex justify-between items-center p-4 rounded-xl bg-primary/10 border border-primary/20">
              <div className="flex items-center gap-2">
                <TrendingUp className="h-5 w-5 text-primary" />
                <span className="text-sm font-semibold">Your ROI</span>
              </div>
              <span className="text-2xl font-bold text-primary">{roi.toLocaleString()}%</span>
            </div>
          </div>

          <p className="text-xs text-muted-foreground text-center mb-6">
            Based on realistic industry benchmarks across cold email and LinkedIn outreach. Actual results vary depending on your market, offer, and sales process.
          </p>

          <div className="text-center">
            <Button
              className="h-12 px-8 text-base"
              onClick={() => document.getElementById("discovery-call")?.scrollIntoView({ behavior: "smooth" })}
            >
              Book a Free Demo
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
