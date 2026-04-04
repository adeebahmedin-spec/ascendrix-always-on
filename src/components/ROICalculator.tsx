import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Slider } from "@/components/ui/slider";
import { DollarSign, CalendarCheck, TrendingUp, Zap, ChevronDown, ChevronUp, Users, Target, BarChart3 } from "lucide-react";

export const ROICalculator = () => {
  const [avgDealValue, setAvgDealValue] = useState(10000);
  const [closeRate, setCloseRate] = useState(20);
  const [meetingsPerWeek, setMeetingsPerWeek] = useState(3);
  const [show60Day, setShow60Day] = useState(false);

  const campaignCost = 2000;
  const campaign60DayCost = 4000;

  // 30-day calculations
  const meetingsPerMonth = meetingsPerWeek * 4;
  const dealsPerMonth = meetingsPerMonth * (closeRate / 100);
  const monthlyRevenue = dealsPerMonth * avgDealValue;
  const monthlyROI = ((monthlyRevenue - campaignCost) / campaignCost) * 100;
  const monthlyProfit = monthlyRevenue - campaignCost;

  // 60-day calculations
  const meetings60 = meetingsPerWeek * 8;
  const deals60 = meetings60 * (closeRate / 100);
  const revenue60 = deals60 * avgDealValue;
  const roi60 = ((revenue60 - campaign60DayCost) / campaign60DayCost) * 100;
  const profit60 = revenue60 - campaign60DayCost;

  const formatCurrency = (value: number) =>
    new Intl.NumberFormat("en-GB", { style: "currency", currency: "GBP", maximumFractionDigits: 0 }).format(value);

  const roiColor = (roi: number) => {
    if (roi >= 500) return "text-green-400";
    if (roi >= 200) return "text-primary";
    return "text-yellow-400";
  };

  const profitColor = (profit: number) => {
    if (profit > 0) return "text-green-400";
    return "text-red-400";
  };

  return (
    <section id="roi-calculator" className="py-16 sm:py-24 lg:py-32">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10 sm:mb-14 animate-fade-in max-w-3xl mx-auto px-2">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight mb-3 sm:mb-4">
            See What Qualified Leads Could Mean for Your Revenue
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground">
            Adjust the sliders to match your business and see the potential impact of working with us.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="rounded-2xl bg-background/60 border border-border/50 p-6 sm:p-10 animate-fade-in">
            {/* Sliders */}
            <div className="space-y-10 mb-10">
              {/* Average Deal Value */}
              <div>
                <div className="flex justify-between items-center mb-1">
                  <div className="flex items-center gap-2">
                    <DollarSign className="h-4 w-4 text-primary" />
                    <label className="text-sm font-medium">Average Deal Value</label>
                  </div>
                  <span className="text-lg font-bold text-primary">{formatCurrency(avgDealValue)}</span>
                </div>
                <p className="text-xs text-muted-foreground mb-3">
                  (How much revenue does a single closed deal bring in?)
                </p>
                <Slider
                  value={[avgDealValue]}
                  onValueChange={(v) => setAvgDealValue(v[0])}
                  min={1000}
                  max={100000}
                  step={1000}
                />
                <div className="flex justify-between text-xs text-muted-foreground mt-1">
                  <span>£1,000</span>
                  <span>£100,000</span>
                </div>
              </div>

              {/* Close Rate */}
              <div>
                <div className="flex justify-between items-center mb-1">
                  <div className="flex items-center gap-2">
                    <Target className="h-4 w-4 text-primary" />
                    <label className="text-sm font-medium">Your Close Rate</label>
                  </div>
                  <span className="text-lg font-bold text-primary">{closeRate}%</span>
                </div>
                <p className="text-xs text-muted-foreground mb-3">
                  (What percentage of meetings turn into paying clients?)
                </p>
                <Slider
                  value={[closeRate]}
                  onValueChange={(v) => setCloseRate(v[0])}
                  min={5}
                  max={60}
                  step={1}
                />
                <div className="flex justify-between text-xs text-muted-foreground mt-1">
                  <span>5%</span>
                  <span>60%</span>
                </div>
              </div>

              {/* Meetings Per Week */}
              <div>
                <div className="flex justify-between items-center mb-1">
                  <div className="flex items-center gap-2">
                    <Users className="h-4 w-4 text-primary" />
                    <label className="text-sm font-medium">Meetings Booked Per Week</label>
                  </div>
                  <span className="text-lg font-bold text-primary">{meetingsPerWeek}</span>
                </div>
                <p className="text-xs text-muted-foreground mb-3">
                  (How many qualified meetings do you want on your calendar each week?)
                </p>
                <Slider
                  value={[meetingsPerWeek]}
                  onValueChange={(v) => setMeetingsPerWeek(v[0])}
                  min={1}
                  max={10}
                  step={1}
                />
                <div className="flex justify-between text-xs text-muted-foreground mt-1">
                  <span>1/week</span>
                  <span>10/week</span>
                </div>
              </div>
            </div>

            {/* 30-Day Results */}
            <div className="rounded-xl bg-primary/5 border border-primary/20 p-6 sm:p-8 mb-4">
              <h3 className="text-center text-sm font-semibold uppercase tracking-wider text-primary mb-6">
                30-Day Projected Results · Campaign Cost: {formatCurrency(campaignCost)}/mo
              </h3>
              <div className="grid grid-cols-2 sm:grid-cols-5 gap-4">
                <div className="text-center">
                  <CalendarCheck className="mx-auto h-6 w-6 text-primary mb-2" />
                  <p className="text-2xl sm:text-3xl font-bold">{meetingsPerMonth}</p>
                  <p className="text-xs text-muted-foreground mt-1">Meetings</p>
                </div>
                <div className="text-center">
                  <Zap className="mx-auto h-6 w-6 text-primary mb-2" />
                  <p className="text-2xl sm:text-3xl font-bold">{dealsPerMonth.toFixed(1)}</p>
                  <p className="text-xs text-muted-foreground mt-1">Est. Deals Closed</p>
                </div>
                <div className="text-center">
                  <DollarSign className="mx-auto h-6 w-6 text-primary mb-2" />
                  <p className="text-2xl sm:text-3xl font-bold">{formatCurrency(monthlyRevenue)}</p>
                  <p className="text-xs text-muted-foreground mt-1">Potential Revenue</p>
                </div>
                <div className="text-center">
                  <BarChart3 className="mx-auto h-6 w-6 text-primary mb-2" />
                  <p className={`text-2xl sm:text-3xl font-bold ${profitColor(monthlyProfit)}`}>
                    {formatCurrency(monthlyProfit)}
                  </p>
                  <p className="text-xs text-muted-foreground mt-1">Net Profit</p>
                </div>
                <div className="text-center col-span-2 sm:col-span-1">
                  <TrendingUp className="mx-auto h-6 w-6 text-primary mb-2" />
                  <p className={`text-2xl sm:text-3xl font-bold ${roiColor(monthlyROI)}`}>
                    {Math.max(0, Math.round(monthlyROI))}%
                  </p>
                  <p className="text-xs text-muted-foreground mt-1">ROI</p>
                </div>
              </div>
            </div>

            {/* 60-Day Toggle */}
            <button
              onClick={() => setShow60Day(!show60Day)}
              className="w-full rounded-xl border border-primary/30 bg-primary/10 hover:bg-primary/15 transition-colors p-4 flex items-center justify-between cursor-pointer"
            >
              <div className="flex items-center gap-3">
                <div className="h-8 w-8 rounded-lg bg-primary/20 flex items-center justify-center">
                  <TrendingUp className="h-4 w-4 text-primary" />
                </div>
                <div className="text-left">
                  <p className="font-semibold text-sm">60-Day Results</p>
                  <p className="text-xs text-muted-foreground">Campaign cost: {formatCurrency(campaign60DayCost)} · Click to {show60Day ? "hide" : "reveal"}</p>
                </div>
              </div>
              {show60Day ? (
                <ChevronUp className="h-5 w-5 text-primary" />
              ) : (
                <ChevronDown className="h-5 w-5 text-primary" />
              )}
            </button>

            {show60Day && (
              <div className="rounded-xl bg-primary/5 border border-primary/20 p-6 sm:p-8 mt-4 animate-fade-in">
                <h3 className="text-center text-sm font-semibold uppercase tracking-wider text-primary mb-6">
                  60-Day Projected Results · Campaign Cost: {formatCurrency(campaign60DayCost)}
                </h3>
                <div className="grid grid-cols-2 sm:grid-cols-5 gap-4">
                  <div className="text-center">
                    <CalendarCheck className="mx-auto h-6 w-6 text-primary mb-2" />
                    <p className="text-2xl sm:text-3xl font-bold">{meetings60}</p>
                    <p className="text-xs text-muted-foreground mt-1">Meetings</p>
                  </div>
                  <div className="text-center">
                    <Zap className="mx-auto h-6 w-6 text-primary mb-2" />
                    <p className="text-2xl sm:text-3xl font-bold">{deals60.toFixed(1)}</p>
                    <p className="text-xs text-muted-foreground mt-1">Est. Deals Closed</p>
                  </div>
                  <div className="text-center">
                    <DollarSign className="mx-auto h-6 w-6 text-primary mb-2" />
                    <p className="text-2xl sm:text-3xl font-bold">{formatCurrency(revenue60)}</p>
                    <p className="text-xs text-muted-foreground mt-1">Potential Revenue</p>
                  </div>
                  <div className="text-center">
                    <BarChart3 className="mx-auto h-6 w-6 text-primary mb-2" />
                    <p className={`text-2xl sm:text-3xl font-bold ${profitColor(profit60)}`}>
                      {formatCurrency(profit60)}
                    </p>
                    <p className="text-xs text-muted-foreground mt-1">Net Profit</p>
                  </div>
                  <div className="text-center col-span-2 sm:col-span-1">
                    <TrendingUp className="mx-auto h-6 w-6 text-primary mb-2" />
                    <p className={`text-2xl sm:text-3xl font-bold ${roiColor(roi60)}`}>
                      {Math.max(0, Math.round(roi60))}%
                    </p>
                    <p className="text-xs text-muted-foreground mt-1">ROI</p>
                  </div>
                </div>
              </div>
            )}

            <p className="text-center text-xs text-muted-foreground mt-6">
              These projections are estimates based on the numbers you provide. Actual results depend on your market, offer, and sales process.
            </p>

            <Button
              className="w-full h-12 text-base mt-6"
              onClick={() => {
                document.getElementById("discovery-call")?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              Book a Free Demo
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
