import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { DollarSign, CalendarCheck, TrendingUp, RotateCcw } from "lucide-react";

interface ROIResults {
  monthlyRevenue: number;
  annualRevenue: number;
  meetingsPerMonth: number;
  roi: number;
}

export const ROICalculator = () => {
  const [avgDealValue, setAvgDealValue] = useState<string>("");
  const [closeRate, setCloseRate] = useState<string>("");
  const [meetingsPerWeek, setMeetingsPerWeek] = useState<string>("2");
  const [results, setResults] = useState<ROIResults | null>(null);

  const calculateROI = () => {
    const dealValue = parseFloat(avgDealValue) || 0;
    const rate = (parseFloat(closeRate) || 0) / 100;
    const meetings = parseFloat(meetingsPerWeek) || 2;

    const meetingsPerMonth = meetings * 4;
    const dealsPerMonth = meetingsPerMonth * rate;
    const monthlyRevenue = dealsPerMonth * dealValue;
    const annualRevenue = monthlyRevenue * 12;

    const estimatedMonthlyCost = 2000;
    const roi = ((monthlyRevenue - estimatedMonthlyCost) / estimatedMonthlyCost) * 100;

    setResults({
      monthlyRevenue,
      annualRevenue,
      meetingsPerMonth,
      roi: Math.max(0, roi),
    });
  };

  const resetCalculator = () => {
    setAvgDealValue("");
    setCloseRate("");
    setMeetingsPerWeek("2");
    setResults(null);
  };

  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
      maximumFractionDigits: 0,
    }).format(value);
  };

  return (
    <section id="roi-calculator" className="py-16 sm:py-24 lg:py-32">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10 sm:mb-14 animate-fade-in max-w-3xl mx-auto px-2">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight mb-3 sm:mb-4">
            See What Qualified Leads Could Mean for Your Revenue
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground">
            Enter your numbers below to estimate the potential impact on your bottom line.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <div className="rounded-2xl bg-background/60 border border-border/50 p-6 sm:p-10 animate-fade-in">
            {!results ? (
              <div className="space-y-6">
                <div className="grid gap-5 sm:grid-cols-3">
                  <div className="space-y-2">
                    <Label htmlFor="dealValue" className="text-sm font-medium">Average Deal Value ($)</Label>
                    <Input
                      id="dealValue"
                      type="number"
                      min="1"
                      placeholder="e.g., 25000"
                      value={avgDealValue}
                      onChange={(e) => setAvgDealValue(e.target.value)}
                      className="h-12 text-base"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="closeRate" className="text-sm font-medium">Your Close Rate (%)</Label>
                    <Input
                      id="closeRate"
                      type="number"
                      min="1"
                      max="100"
                      placeholder="e.g., 20"
                      value={closeRate}
                      onChange={(e) => setCloseRate(e.target.value)}
                      className="h-12 text-base"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="meetings" className="text-sm font-medium">Meetings Per Week</Label>
                    <Input
                      id="meetings"
                      type="number"
                      min="1"
                      placeholder="e.g., 2"
                      value={meetingsPerWeek}
                      onChange={(e) => setMeetingsPerWeek(e.target.value)}
                      className="h-12 text-base"
                    />
                  </div>
                </div>

                <Button
                  onClick={calculateROI}
                  className="w-full h-12 text-base"
                  disabled={!avgDealValue || !closeRate}
                >
                  Calculate Potential Revenue
                </Button>
              </div>
            ) : (
              <div className="space-y-8">
                <div className="grid grid-cols-2 gap-4 sm:gap-6">
                  <div className="rounded-xl bg-primary/10 border border-primary/20 p-5 sm:p-6 text-center">
                    <DollarSign className="mx-auto h-7 w-7 text-primary" />
                    <p className="mt-3 text-2xl sm:text-3xl font-bold text-primary">
                      {formatCurrency(results.monthlyRevenue)}
                    </p>
                    <p className="text-sm text-muted-foreground mt-1">Potential Monthly Revenue</p>
                  </div>

                  <div className="rounded-xl bg-primary/10 border border-primary/20 p-5 sm:p-6 text-center">
                    <TrendingUp className="mx-auto h-7 w-7 text-primary" />
                    <p className="mt-3 text-2xl sm:text-3xl font-bold text-primary">
                      {formatCurrency(results.annualRevenue)}
                    </p>
                    <p className="text-sm text-muted-foreground mt-1">Potential Annual Revenue</p>
                  </div>

                  <div className="rounded-xl bg-secondary border border-border/50 p-5 sm:p-6 text-center">
                    <CalendarCheck className="mx-auto h-7 w-7 text-foreground" />
                    <p className="mt-3 text-2xl sm:text-3xl font-bold">
                      {Math.round(results.meetingsPerMonth)}
                    </p>
                    <p className="text-sm text-muted-foreground mt-1">Meetings Per Month</p>
                  </div>

                  <div className="rounded-xl bg-secondary border border-border/50 p-5 sm:p-6 text-center">
                    <TrendingUp className="mx-auto h-7 w-7 text-foreground" />
                    <p className="mt-3 text-2xl sm:text-3xl font-bold">
                      {Math.round(results.roi)}%
                    </p>
                    <p className="text-sm text-muted-foreground mt-1">Estimated ROI</p>
                  </div>
                </div>

                <p className="text-center text-sm text-muted-foreground">
                  These estimates are based on the numbers you provided. Actual results depend on your market, offer, and sales process.
                </p>

                <div className="flex gap-3">
                  <Button variant="outline" onClick={resetCalculator} className="flex-1 h-12 gap-2">
                    <RotateCcw className="h-4 w-4" />
                    Recalculate
                  </Button>
                  <Button
                    className="flex-1 h-12"
                    onClick={() => {
                      document.getElementById("discovery-call")?.scrollIntoView({ behavior: "smooth" });
                    }}
                  >
                    Book a Free Demo
                  </Button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
