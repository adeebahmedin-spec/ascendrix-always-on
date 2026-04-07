import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Slider } from "@/components/ui/slider";
import { Mail, Linkedin, DollarSign, MessageSquare, Target, TrendingUp, Users } from "lucide-react";

const formatCurrency = (value: number) =>
  new Intl.NumberFormat("en-GB", { style: "currency", currency: "GBP", maximumFractionDigits: 0 }).format(value);

export const ROICalculator = () => {
  const [clientValue, setClientValue] = useState(2000);

  // Cold Email - fixed benchmarks
  const coldMonthlyEmails = 25000;
  const coldReplyRate = 2.5;
  const coldCloseRate = 5;
  const coldReplies = Math.round(coldMonthlyEmails * (coldReplyRate / 100));
  const coldLeads = Math.round(coldReplies * (coldCloseRate / 100));
  const coldRevenue = coldLeads * clientValue;

  // LinkedIn - fixed benchmarks
  const linkedinMonthlyRequests = 800;
  const linkedinAcceptRate = 30;
  const linkedinReplyRate = 15;
  const linkedinCloseRate = 5;
  const linkedinAccepts = Math.round(linkedinMonthlyRequests * (linkedinAcceptRate / 100));
  const linkedinReplies = Math.round(linkedinAccepts * (linkedinReplyRate / 100));
  const linkedinLeads = Math.round(linkedinReplies * (linkedinCloseRate / 100));
  const linkedinRevenue = linkedinLeads * clientValue;

  const totalLeads = coldLeads + linkedinLeads;
  const totalRevenue = coldRevenue + linkedinRevenue;
  const totalReplies = coldReplies + linkedinReplies;

  return (
    <section id="roi-calculator" className="py-16 sm:py-24 lg:py-32">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10 sm:mb-14 animate-fade-in max-w-3xl mx-auto">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight mb-3 sm:mb-4">
            See What Our Campaigns Could Generate for You
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground">
            Adjust your average client value and see realistic projections based on industry benchmarks across both channels.
          </p>
        </div>

        <div className="max-w-4xl mx-auto rounded-2xl bg-background/60 border border-border/50 p-6 sm:p-10 animate-fade-in">
          {/* Slider */}
          <div className="mb-10 max-w-xl mx-auto">
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

          {/* Channel Breakdown */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
            {/* Cold Email */}
            <div className="rounded-xl border border-border/40 bg-muted/20 p-5 sm:p-6">
              <div className="flex items-center gap-3 mb-5">
                <div className="h-9 w-9 rounded-lg bg-primary/10 flex items-center justify-center">
                  <Mail className="h-4 w-4 text-primary" />
                </div>
                <h3 className="font-bold">Cold Email</h3>
              </div>
              <div className="space-y-2 text-sm mb-5">
                <div className="flex justify-between p-2.5 rounded-lg bg-background/50">
                  <span className="text-muted-foreground">Monthly Emails Sent</span>
                  <span className="font-semibold">25,000</span>
                </div>
                <div className="flex justify-between p-2.5 rounded-lg bg-background/50">
                  <span className="text-muted-foreground">Reply Rate</span>
                  <span className="font-semibold">2.5%</span>
                </div>
                <div className="flex justify-between p-2.5 rounded-lg bg-background/50">
                  <span className="text-muted-foreground">Close Rate</span>
                  <span className="font-semibold">5%</span>
                </div>
              </div>
              <div className="grid grid-cols-3 gap-2 text-center">
                <div className="p-3 rounded-lg bg-background/40 border border-border/30">
                  <MessageSquare className="mx-auto h-4 w-4 text-primary mb-1" />
                  <p className="text-lg font-bold">{coldReplies}</p>
                  <p className="text-[10px] text-muted-foreground">Replies</p>
                </div>
                <div className="p-3 rounded-lg bg-background/40 border border-border/30">
                  <Target className="mx-auto h-4 w-4 text-primary mb-1" />
                  <p className="text-lg font-bold">{coldLeads}</p>
                  <p className="text-[10px] text-muted-foreground">Leads</p>
                </div>
                <div className="p-3 rounded-lg bg-background/40 border border-border/30">
                  <TrendingUp className="mx-auto h-4 w-4 text-primary mb-1" />
                  <p className="text-lg font-bold">{formatCurrency(coldRevenue)}</p>
                  <p className="text-[10px] text-muted-foreground">Revenue</p>
                </div>
              </div>
            </div>

            {/* LinkedIn */}
            <div className="rounded-xl border border-border/40 bg-muted/20 p-5 sm:p-6">
              <div className="flex items-center gap-3 mb-5">
                <div className="h-9 w-9 rounded-lg bg-primary/10 flex items-center justify-center">
                  <Linkedin className="h-4 w-4 text-primary" />
                </div>
                <h3 className="font-bold">LinkedIn Outreach</h3>
              </div>
              <div className="space-y-2 text-sm mb-5">
                <div className="flex justify-between p-2.5 rounded-lg bg-background/50">
                  <span className="text-muted-foreground">Monthly Requests</span>
                  <span className="font-semibold">800</span>
                </div>
                <div className="flex justify-between p-2.5 rounded-lg bg-background/50">
                  <span className="text-muted-foreground">Accept Rate</span>
                  <span className="font-semibold">30%</span>
                </div>
                <div className="flex justify-between p-2.5 rounded-lg bg-background/50">
                  <span className="text-muted-foreground">Reply Rate</span>
                  <span className="font-semibold">15%</span>
                </div>
                <div className="flex justify-between p-2.5 rounded-lg bg-background/50">
                  <span className="text-muted-foreground">Close Rate</span>
                  <span className="font-semibold">5%</span>
                </div>
              </div>
              <div className="grid grid-cols-3 gap-2 text-center">
                <div className="p-3 rounded-lg bg-background/40 border border-border/30">
                  <Users className="mx-auto h-4 w-4 text-primary mb-1" />
                  <p className="text-lg font-bold">{linkedinReplies}</p>
                  <p className="text-[10px] text-muted-foreground">Conversations</p>
                </div>
                <div className="p-3 rounded-lg bg-background/40 border border-border/30">
                  <Target className="mx-auto h-4 w-4 text-primary mb-1" />
                  <p className="text-lg font-bold">{linkedinLeads}</p>
                  <p className="text-[10px] text-muted-foreground">Leads</p>
                </div>
                <div className="p-3 rounded-lg bg-background/40 border border-border/30">
                  <TrendingUp className="mx-auto h-4 w-4 text-primary mb-1" />
                  <p className="text-lg font-bold">{formatCurrency(linkedinRevenue)}</p>
                  <p className="text-[10px] text-muted-foreground">Revenue</p>
                </div>
              </div>
            </div>
          </div>

          {/* Combined Total */}
          <div className="rounded-xl bg-primary/5 border border-primary/20 p-6 text-center">
            <p className="text-sm text-muted-foreground mb-3 font-medium">Combined Monthly Projection</p>
            <div className="grid grid-cols-3 gap-4 max-w-lg mx-auto">
              <div>
                <p className="text-2xl sm:text-3xl font-bold text-primary">{totalReplies}</p>
                <p className="text-xs text-muted-foreground mt-1">Total Responses</p>
              </div>
              <div>
                <p className="text-2xl sm:text-3xl font-bold text-primary">{totalLeads}</p>
                <p className="text-xs text-muted-foreground mt-1">Total Leads</p>
              </div>
              <div>
                <p className="text-2xl sm:text-3xl font-bold text-primary">{formatCurrency(totalRevenue)}</p>
                <p className="text-xs text-muted-foreground mt-1">Total Revenue</p>
              </div>
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
