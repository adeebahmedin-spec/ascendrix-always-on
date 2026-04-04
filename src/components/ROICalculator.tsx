import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Slider } from "@/components/ui/slider";
import { Mail, Linkedin, DollarSign, Users, MessageSquare, Target, TrendingUp } from "lucide-react";

const formatCurrency = (value: number) =>
  new Intl.NumberFormat("en-GB", { style: "currency", currency: "GBP", maximumFractionDigits: 0 }).format(value);

const StatCard = ({ icon: Icon, value, label }: { icon: any; value: string; label: string }) => (
  <div className="text-center p-4 rounded-xl bg-background/40 border border-border/30">
    <Icon className="mx-auto h-5 w-5 text-primary mb-2" />
    <p className="text-xl sm:text-2xl font-bold">{value}</p>
    <p className="text-xs text-muted-foreground mt-1">{label}</p>
  </div>
);

export const ROICalculator = () => {
  const [coldClientValue, setColdClientValue] = useState(2000);
  const [linkedinClientValue, setLinkedinClientValue] = useState(2000);

  // Cold Email - fixed benchmarks
  const coldMonthlyEmails = 25000;
  const coldReplyRate = 2.5;
  const coldCloseRate = 5;
  const coldReplies = Math.round(coldMonthlyEmails * (coldReplyRate / 100));
  const coldLeads = Math.round(coldReplies * (coldCloseRate / 100));
  const coldRevenue = coldLeads * coldClientValue;

  // LinkedIn - fixed benchmarks
  const linkedinMonthlyRequests = 800;
  const linkedinAcceptRate = 30;
  const linkedinReplyRate = 15;
  const linkedinCloseRate = 5;
  const linkedinAccepts = Math.round(linkedinMonthlyRequests * (linkedinAcceptRate / 100));
  const linkedinReplies = Math.round(linkedinAccepts * (linkedinReplyRate / 100));
  const linkedinLeads = Math.round(linkedinReplies * (linkedinCloseRate / 100));
  const linkedinRevenue = linkedinLeads * linkedinClientValue;

  return (
    <section id="roi-calculator" className="py-16 sm:py-24 lg:py-32">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10 sm:mb-14 animate-fade-in max-w-3xl mx-auto">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight mb-3 sm:mb-4">
            See What Our Campaigns Could Generate for You
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground">
            Adjust your average client value and see realistic projections based on industry benchmarks.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 max-w-6xl mx-auto">
          {/* Cold Email Section */}
          <div className="rounded-2xl bg-background/60 border border-border/50 p-6 sm:p-8 animate-fade-in">
            <div className="flex items-center gap-3 mb-6">
              <div className="h-10 w-10 rounded-xl bg-primary/10 flex items-center justify-center">
                <Mail className="h-5 w-5 text-primary" />
              </div>
              <div>
                <h3 className="text-lg font-bold">Cold Email Outreach</h3>
                <p className="text-xs text-muted-foreground">Monthly projection based on 25,000 emails</p>
              </div>
            </div>

            {/* Fixed Benchmarks */}
            <div className="space-y-3 mb-6">
              <div className="flex justify-between items-center text-sm p-3 rounded-lg bg-muted/30">
                <span className="text-muted-foreground">Monthly Outreach Emails</span>
                <span className="font-semibold">25,000</span>
              </div>
              <div className="flex justify-between items-center text-sm p-3 rounded-lg bg-muted/30">
                <div>
                  <span className="text-muted-foreground">Average Reply Rate</span>
                  <p className="text-[10px] text-muted-foreground/70">Industry benchmark for cold email</p>
                </div>
                <span className="font-semibold">2.5%</span>
              </div>
              <div className="flex justify-between items-center text-sm p-3 rounded-lg bg-muted/30">
                <div>
                  <span className="text-muted-foreground">Average Close Rate</span>
                  <p className="text-[10px] text-muted-foreground/70">Replies that convert to paying clients</p>
                </div>
                <span className="font-semibold">5%</span>
              </div>
            </div>

            {/* Adjustable Slider */}
            <div className="mb-8">
              <div className="flex justify-between items-center mb-1">
                <div className="flex items-center gap-2">
                  <DollarSign className="h-4 w-4 text-primary" />
                  <label className="text-sm font-medium">Average Client Value</label>
                </div>
                <span className="text-lg font-bold text-primary">{formatCurrency(coldClientValue)}</span>
              </div>
              <p className="text-xs text-muted-foreground mb-3">(The price of your product or service)</p>
              <Slider
                value={[coldClientValue]}
                onValueChange={(v) => setColdClientValue(v[0])}
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
            <div className="grid grid-cols-3 gap-3">
              <StatCard icon={MessageSquare} value={coldReplies.toLocaleString()} label="Estimated Replies" />
              <StatCard icon={Target} value={coldLeads.toLocaleString()} label="Leads Generated" />
              <StatCard icon={TrendingUp} value={formatCurrency(coldRevenue)} label="Potential Revenue" />
            </div>
          </div>

          {/* LinkedIn Section */}
          <div className="rounded-2xl bg-background/60 border border-border/50 p-6 sm:p-8 animate-fade-in">
            <div className="flex items-center gap-3 mb-6">
              <div className="h-10 w-10 rounded-xl bg-primary/10 flex items-center justify-center">
                <Linkedin className="h-5 w-5 text-primary" />
              </div>
              <div>
                <h3 className="text-lg font-bold">LinkedIn Outreach</h3>
                <p className="text-xs text-muted-foreground">Monthly projection based on 800 connection requests</p>
              </div>
            </div>

            {/* Fixed Benchmarks */}
            <div className="space-y-3 mb-6">
              <div className="flex justify-between items-center text-sm p-3 rounded-lg bg-muted/30">
                <span className="text-muted-foreground">Monthly Connection Requests</span>
                <span className="font-semibold">800</span>
              </div>
              <div className="flex justify-between items-center text-sm p-3 rounded-lg bg-muted/30">
                <div>
                  <span className="text-muted-foreground">Accept Rate</span>
                  <p className="text-[10px] text-muted-foreground/70">Industry benchmark for targeted outreach</p>
                </div>
                <span className="font-semibold">30%</span>
              </div>
              <div className="flex justify-between items-center text-sm p-3 rounded-lg bg-muted/30">
                <div>
                  <span className="text-muted-foreground">Reply Rate</span>
                  <p className="text-[10px] text-muted-foreground/70">Accepted connections who engage</p>
                </div>
                <span className="font-semibold">15%</span>
              </div>
              <div className="flex justify-between items-center text-sm p-3 rounded-lg bg-muted/30">
                <div>
                  <span className="text-muted-foreground">Close Rate</span>
                  <p className="text-[10px] text-muted-foreground/70">Conversations that become clients</p>
                </div>
                <span className="font-semibold">5%</span>
              </div>
            </div>

            {/* Adjustable Slider */}
            <div className="mb-8">
              <div className="flex justify-between items-center mb-1">
                <div className="flex items-center gap-2">
                  <DollarSign className="h-4 w-4 text-primary" />
                  <label className="text-sm font-medium">Average Client Value</label>
                </div>
                <span className="text-lg font-bold text-primary">{formatCurrency(linkedinClientValue)}</span>
              </div>
              <p className="text-xs text-muted-foreground mb-3">(The price of your product or service)</p>
              <Slider
                value={[linkedinClientValue]}
                onValueChange={(v) => setLinkedinClientValue(v[0])}
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
            <div className="grid grid-cols-3 gap-3">
              <StatCard icon={Users} value={linkedinReplies.toLocaleString()} label="Conversations Started" />
              <StatCard icon={Target} value={linkedinLeads.toLocaleString()} label="Leads Generated" />
              <StatCard icon={TrendingUp} value={formatCurrency(linkedinRevenue)} label="Potential Revenue" />
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
