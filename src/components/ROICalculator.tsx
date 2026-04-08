import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Mail, MessageSquare, Target, TrendingUp, Calendar, Info } from "lucide-react";

const formatNumber = (value: number) =>
  new Intl.NumberFormat("en-GB").format(value);

const formatCurrency = (value: number) =>
  new Intl.NumberFormat("en-GB", { style: "currency", currency: "GBP", maximumFractionDigits: 0 }).format(value);

export const ROICalculator = () => {
  const [monthlyEmails, setMonthlyEmails] = useState("");
  const [clientValue, setClientValue] = useState("");
  const [show60Day, setShow60Day] = useState(false);
  const [calculated, setCalculated] = useState(false);

  const emails = parseInt(monthlyEmails) || 0;
  const value = parseInt(clientValue) || 0;

  // Fixed realistic benchmarks
  const replyRate = 2.5;
  const closeRate = 5;

  const replies = Math.round(emails * (replyRate / 100));
  const leads = Math.round(replies * (closeRate / 100));
  const revenue = leads * value;

  // 60-day projections (2 months, with 15% improvement in month 2 from optimization)
  const replies60 = Math.round(replies * 2.15);
  const leads60 = Math.round(leads * 2.15);
  const revenue60 = leads60 * value;

  const handleCalculate = () => {
    if (emails > 0 && value > 0) {
      setCalculated(true);
    }
  };

  return (
    <section id="roi-calculator" className="py-16 sm:py-24 lg:py-32">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10 sm:mb-14 animate-fade-in max-w-3xl mx-auto">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight mb-3 sm:mb-4">
            What Could Your Pipeline Look Like?
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground">
            Enter your numbers below to see a realistic projection of what consistent outreach could deliver for your business.
          </p>
        </div>

        <div className="max-w-3xl mx-auto rounded-2xl bg-background/60 border border-border/50 p-6 sm:p-10 animate-fade-in">
          {/* Monthly Emails Input */}
          <div className="mb-6">
            <div className="flex items-center gap-2 mb-1">
              <Mail className="h-5 w-5 text-primary" />
              <label className="text-sm sm:text-base font-semibold">Monthly Emails Sent</label>
            </div>
            <p className="text-xs text-muted-foreground mb-3">Total cold emails sent per month</p>
            <Input
              type="number"
              placeholder="e.g. 10,000"
              value={monthlyEmails}
              onChange={(e) => {
                setMonthlyEmails(e.target.value);
                setCalculated(false);
              }}
              className="text-lg h-12"
              min={0}
            />
          </div>

          {/* Client Value Input */}
          <div className="mb-6">
            <div className="flex items-center gap-2 mb-1">
              <TrendingUp className="h-5 w-5 text-primary" />
              <label className="text-sm sm:text-base font-semibold">Average Deal Value (£)</label>
            </div>
            <p className="text-xs text-muted-foreground mb-3">What you typically earn per closed deal</p>
            <Input
              type="number"
              placeholder="e.g. 2,000"
              value={clientValue}
              onChange={(e) => {
                setClientValue(e.target.value);
                setCalculated(false);
              }}
              className="text-lg h-12"
              min={0}
            />
          </div>

          {/* Fixed Benchmarks */}
          <div className="space-y-2 mb-6 text-sm">
            <div className="flex justify-between items-center p-3 rounded-lg bg-muted/30">
              <div className="flex items-center gap-2">
                <Info className="h-4 w-4 text-muted-foreground" />
                <span className="text-muted-foreground">Reply Rate <span className="text-xs">(% of recipients who respond)</span></span>
              </div>
              <span className="font-semibold">{replyRate}%</span>
            </div>
            <div className="flex justify-between items-center p-3 rounded-lg bg-muted/30">
              <div className="flex items-center gap-2">
                <Info className="h-4 w-4 text-muted-foreground" />
                <span className="text-muted-foreground">Close Rate <span className="text-xs">(% of replies that convert to deals)</span></span>
              </div>
              <span className="font-semibold">{closeRate}%</span>
            </div>
          </div>

          {/* Calculate Button */}
          <div className="text-center mb-8">
            <Button
              onClick={handleCalculate}
              className="h-12 px-10 text-base"
              disabled={emails <= 0 || value <= 0}
            >
              Calculate My Results
            </Button>
          </div>

          {/* Results */}
          {calculated && (
            <>
              <h3 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground mb-4">Estimated 30-Day Results</h3>
              <div className="grid grid-cols-3 gap-4 text-center mb-6 animate-fade-in">
                <div className="p-5 rounded-xl bg-primary/5 border border-primary/20">
                  <MessageSquare className="mx-auto h-5 w-5 text-primary mb-2" />
                  <p className="text-2xl sm:text-3xl font-bold">{formatNumber(replies)}</p>
                  <p className="text-xs text-muted-foreground mt-1">Replies</p>
                </div>
                <div className="p-5 rounded-xl bg-primary/5 border border-primary/20">
                  <Target className="mx-auto h-5 w-5 text-primary mb-2" />
                  <p className="text-2xl sm:text-3xl font-bold">{formatNumber(leads)}</p>
                  <p className="text-xs text-muted-foreground mt-1">Warm Leads</p>
                </div>
                <div className="p-5 rounded-xl bg-primary/5 border border-primary/20">
                  <TrendingUp className="mx-auto h-5 w-5 text-primary mb-2" />
                  <p className="text-2xl sm:text-3xl font-bold">{formatCurrency(revenue)}</p>
                  <p className="text-xs text-muted-foreground mt-1">Revenue Potential</p>
                </div>
              </div>

              {/* 60-Day Toggle */}
              <div className="text-center">
                <Button
                  variant={show60Day ? "default" : "outline"}
                  onClick={() => setShow60Day(!show60Day)}
                  className="gap-2"
                >
                  <Calendar className="h-4 w-4" />
                  {show60Day ? "Hide" : "View"} 60-Day Projection
                </Button>
              </div>

              {show60Day && (
                <div className="mt-6 p-6 rounded-xl border border-primary/30 bg-primary/5 animate-fade-in">
                  <h3 className="text-sm font-semibold uppercase tracking-wider text-primary mb-4 text-center">
                    60-Day Projection (with campaign optimization)
                  </h3>
                  <div className="grid grid-cols-3 gap-4 text-center">
                    <div>
                      <p className="text-2xl sm:text-3xl font-bold">{formatNumber(replies60)}</p>
                      <p className="text-xs text-muted-foreground mt-1">Total Replies</p>
                    </div>
                    <div>
                      <p className="text-2xl sm:text-3xl font-bold">{formatNumber(leads60)}</p>
                      <p className="text-xs text-muted-foreground mt-1">Qualified Leads</p>
                    </div>
                    <div>
                      <p className="text-2xl sm:text-3xl font-bold">{formatCurrency(revenue60)}</p>
                      <p className="text-xs text-muted-foreground mt-1">Revenue Potential</p>
                    </div>
                  </div>
                  <p className="text-xs text-muted-foreground text-center mt-4">
                    Includes a 15% performance uplift in month 2 from A/B testing and list refinement.
                  </p>
                </div>
              )}
            </>
          )}
        </div>

        <p className="text-center text-xs text-muted-foreground mt-8 max-w-2xl mx-auto">
          These projections are based on industry-average benchmarks. Actual results vary depending on your offer, market, and follow-up process.
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
