import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Slider } from "@/components/ui/slider";
import { Mail, MessageSquare, Target, TrendingUp, Calendar, Info, Linkedin, Users, Send } from "lucide-react";

const formatNumber = (value: number) =>
  new Intl.NumberFormat("en-GB").format(value);

const formatCurrency = (value: number) =>
  new Intl.NumberFormat("en-GB", { style: "currency", currency: "GBP", maximumFractionDigits: 0 }).format(value);

export const ROICalculator = () => {
  // Cold Email state
  const [monthlyEmails, setMonthlyEmails] = useState("");
  const [emailClientValue, setEmailClientValue] = useState("");
  const [emailCalculated, setEmailCalculated] = useState(false);
  const [emailShow60Day, setEmailShow60Day] = useState(false);

  // LinkedIn state
  const [monthlyInmails, setMonthlyInmails] = useState("");
  const [monthlyConnections, setMonthlyConnections] = useState("");
  const [linkedinClientValue, setLinkedinClientValue] = useState("");
  const [linkedinCalculated, setLinkedinCalculated] = useState(false);
  const [linkedinShow60Day, setLinkedinShow60Day] = useState(false);

  // Cold Email calculations
  const emailCount = parseInt(monthlyEmails) || 0;
  const emailValue = parseInt(emailClientValue) || 0;
  const emailReplyRate = 3.5;
  const emailCloseRate = 5;
  const emailReplies = Math.round(emailCount * (emailReplyRate / 100));
  const emailLeads = Math.round(emailReplies * (emailCloseRate / 100));
  const emailRevenue = emailLeads * emailValue;
  const emailReplies60 = Math.round(emailReplies * 2.15);
  const emailLeads60 = Math.round(emailLeads * 2.15);
  const emailRevenue60 = emailLeads60 * emailValue;

  // LinkedIn calculations
  const inmailCount = parseInt(monthlyInmails) || 0;
  const connectionCount = parseInt(monthlyConnections) || 0;
  const liValue = parseInt(linkedinClientValue) || 0;
  const linkedinReplyRate = 5;
  const linkedinCloseRate = 5;
  const totalLinkedinOutreach = inmailCount + connectionCount;
  const linkedinReplies = Math.round(totalLinkedinOutreach * (linkedinReplyRate / 100));
  const linkedinLeads = Math.round(linkedinReplies * (linkedinCloseRate / 100));
  const linkedinRevenue = linkedinLeads * liValue;
  const linkedinReplies60 = Math.round(linkedinReplies * 2.15);
  const linkedinLeads60 = Math.round(linkedinLeads * 2.15);
  const linkedinRevenue60 = linkedinLeads60 * liValue;

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

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 max-w-6xl mx-auto">
          {/* Cold Email Calculator */}
          <div className="rounded-2xl bg-background/60 border border-border/50 p-6 sm:p-8 animate-fade-in">
            <div className="flex items-center gap-3 mb-6">
              <Mail className="h-6 w-6 text-primary" />
              <h3 className="text-lg sm:text-xl font-bold">Cold Email Outreach</h3>
            </div>

            <div className="mb-5">
              <div className="flex items-center gap-2 mb-1">
                <Send className="h-4 w-4 text-primary" />
                <label className="text-sm font-semibold">Monthly Emails Sent</label>
              </div>
              <p className="text-xs text-muted-foreground mb-3">Total cold emails sent per month</p>
              <Input
                type="number"
                placeholder="e.g. 10,000"
                value={monthlyEmails}
                onChange={(e) => { setMonthlyEmails(e.target.value); setEmailCalculated(false); }}
                className="text-lg h-12"
                min={0}
              />
            </div>

            <div className="mb-5">
              <div className="flex items-center gap-2 mb-1">
                <TrendingUp className="h-4 w-4 text-primary" />
                <label className="text-sm font-semibold">Average Deal Value (£)</label>
              </div>
              <p className="text-xs text-muted-foreground mb-3">What you typically earn per closed deal</p>
              <Input
                type="number"
                placeholder="e.g. 2,000"
                value={emailClientValue}
                onChange={(e) => { setEmailClientValue(e.target.value); setEmailCalculated(false); }}
                className="text-lg h-12"
                min={0}
              />
            </div>

            <div className="space-y-2 mb-5 text-sm">
              <div className="flex justify-between items-center p-3 rounded-lg bg-muted/30">
                <div className="flex items-center gap-2">
                  <Info className="h-4 w-4 text-muted-foreground" />
                  <span className="text-muted-foreground text-xs sm:text-sm">Reply Rate <span className="text-xs">(Fixed at 3.5% to reflect a realistic industry benchmark for cold email campaigns.)</span></span>
                </div>
                <span className="font-semibold">{emailReplyRate}%</span>
              </div>
              <div className="flex justify-between items-center p-3 rounded-lg bg-muted/30">
                <div className="flex items-center gap-2">
                  <Info className="h-4 w-4 text-muted-foreground" />
                  <span className="text-muted-foreground text-xs sm:text-sm">Close Rate <span className="text-xs">(Fixed at 5% to reflect a realistic industry benchmark for cold email campaigns.)</span></span>
                </div>
                <span className="font-semibold">{emailCloseRate}%</span>
              </div>
            </div>

            <div className="text-center mb-6">
              <Button
                onClick={() => { if (emailCount > 0 && emailValue > 0) setEmailCalculated(true); }}
                className="h-11 px-8 text-sm"
                disabled={emailCount <= 0 || emailValue <= 0}
              >
                Calculate My Results
              </Button>
            </div>

            {emailCalculated && (
              <>
                <h4 className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-3">Estimated 30-Day Results (Your Potential Results)</h4>
                <div className="grid grid-cols-3 gap-3 text-center mb-4 animate-fade-in">
                  <div className="p-4 rounded-xl bg-primary/5 border border-primary/20">
                    <MessageSquare className="mx-auto h-4 w-4 text-primary mb-1" />
                    <p className="text-xl sm:text-2xl font-bold">{formatNumber(emailReplies)}</p>
                    <p className="text-xs text-muted-foreground mt-1">Replies</p>
                  </div>
                  <div className="p-4 rounded-xl bg-primary/5 border border-primary/20">
                    <Target className="mx-auto h-4 w-4 text-primary mb-1" />
                    <p className="text-xl sm:text-2xl font-bold">{formatNumber(emailLeads)}</p>
                    <p className="text-xs text-muted-foreground mt-1">Leads Generated</p>
                  </div>
                  <div className="p-4 rounded-xl bg-primary/5 border border-primary/20">
                    <TrendingUp className="mx-auto h-4 w-4 text-primary mb-1" />
                    <p className="text-xl sm:text-2xl font-bold">{formatCurrency(emailRevenue)}</p>
                    <p className="text-xs text-muted-foreground mt-1">Revenue Potential</p>
                  </div>
                </div>

                <div className="text-center">
                  <Button variant={emailShow60Day ? "default" : "outline"} onClick={() => setEmailShow60Day(!emailShow60Day)} className="gap-2 text-sm">
                    <Calendar className="h-4 w-4" />
                    {emailShow60Day ? "Hide" : "View"} 60-Day Projection
                  </Button>
                </div>

                {emailShow60Day && (
                  <div className="mt-4 p-5 rounded-xl border border-primary/30 bg-primary/5 animate-fade-in">
                    <h4 className="text-xs font-semibold uppercase tracking-wider text-primary mb-3 text-center">60-Day Projection (with campaign optimization)</h4>
                    <div className="grid grid-cols-3 gap-3 text-center">
                      <div>
                        <p className="text-xl sm:text-2xl font-bold">{formatNumber(emailReplies60)}</p>
                        <p className="text-xs text-muted-foreground mt-1">Total Replies</p>
                      </div>
                      <div>
                        <p className="text-xl sm:text-2xl font-bold">{formatNumber(emailLeads60)}</p>
                        <p className="text-xs text-muted-foreground mt-1">Leads Generated</p>
                      </div>
                      <div>
                        <p className="text-xl sm:text-2xl font-bold">{formatCurrency(emailRevenue60)}</p>
                        <p className="text-xs text-muted-foreground mt-1">Revenue Potential</p>
                      </div>
                    </div>
                    <p className="text-xs text-muted-foreground text-center mt-3">Includes a 15% performance uplift in month 2 from A/B testing and list refinement.</p>
                  </div>
                )}
              </>
            )}
          </div>

          {/* LinkedIn Outreach Calculator */}
          <div className="rounded-2xl bg-background/60 border border-border/50 p-6 sm:p-8 animate-fade-in">
            <div className="flex items-center gap-3 mb-6">
              <Linkedin className="h-6 w-6 text-primary" />
              <h3 className="text-lg sm:text-xl font-bold">LinkedIn Outreach</h3>
            </div>

            <div className="mb-5">
              <div className="flex items-center gap-2 mb-1">
                <Send className="h-4 w-4 text-primary" />
                <label className="text-sm font-semibold">Monthly InMails Sent</label>
              </div>
              <p className="text-xs text-muted-foreground mb-3">Total InMails sent per month</p>
              <Input
                type="number"
                placeholder="e.g. 500"
                value={monthlyInmails}
                onChange={(e) => { setMonthlyInmails(e.target.value); setLinkedinCalculated(false); }}
                className="text-lg h-12"
                min={0}
              />
            </div>

            <div className="mb-5">
              <div className="flex items-center gap-2 mb-1">
                <Users className="h-4 w-4 text-primary" />
                <label className="text-sm font-semibold">Monthly Connection Requests Sent</label>
              </div>
              <p className="text-xs text-muted-foreground mb-3">Total connection requests sent per month</p>
              <Input
                type="number"
                placeholder="e.g. 800"
                value={monthlyConnections}
                onChange={(e) => { setMonthlyConnections(e.target.value); setLinkedinCalculated(false); }}
                className="text-lg h-12"
                min={0}
              />
            </div>

            <div className="mb-5">
              <div className="flex items-center gap-2 mb-1">
                <TrendingUp className="h-4 w-4 text-primary" />
                <label className="text-sm font-semibold">Average Deal Value (£)</label>
              </div>
              <p className="text-xs text-muted-foreground mb-3">What you typically earn per closed deal</p>
              <Input
                type="number"
                placeholder="e.g. 2,000"
                value={linkedinClientValue}
                onChange={(e) => { setLinkedinClientValue(e.target.value); setLinkedinCalculated(false); }}
                className="text-lg h-12"
                min={0}
              />
            </div>

            <div className="space-y-2 mb-5 text-sm">
              <div className="flex justify-between items-center p-3 rounded-lg bg-muted/30">
                <div className="flex items-center gap-2">
                  <Info className="h-4 w-4 text-muted-foreground" />
                  <span className="text-muted-foreground text-xs sm:text-sm">Reply Rate <span className="text-xs">(Fixed at 5% to reflect a realistic industry benchmark for LinkedIn outreach.)</span></span>
                </div>
                <span className="font-semibold">{linkedinReplyRate}%</span>
              </div>
              <div className="flex justify-between items-center p-3 rounded-lg bg-muted/30">
                <div className="flex items-center gap-2">
                  <Info className="h-4 w-4 text-muted-foreground" />
                  <span className="text-muted-foreground text-xs sm:text-sm">Close Rate <span className="text-xs">(Fixed at 5% to reflect a realistic industry benchmark for LinkedIn outreach.)</span></span>
                </div>
                <span className="font-semibold">{linkedinCloseRate}%</span>
              </div>
            </div>

            <div className="text-center mb-6">
              <Button
                onClick={() => { if (totalLinkedinOutreach > 0 && liValue > 0) setLinkedinCalculated(true); }}
                className="h-11 px-8 text-sm"
                disabled={totalLinkedinOutreach <= 0 || liValue <= 0}
              >
                Calculate My Results
              </Button>
            </div>

            {linkedinCalculated && (
              <>
                <h4 className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-3">Estimated 30-Day Results (Your Potential Results)</h4>
                <div className="grid grid-cols-3 gap-3 text-center mb-4 animate-fade-in">
                  <div className="p-4 rounded-xl bg-primary/5 border border-primary/20">
                    <MessageSquare className="mx-auto h-4 w-4 text-primary mb-1" />
                    <p className="text-xl sm:text-2xl font-bold">{formatNumber(linkedinReplies)}</p>
                    <p className="text-xs text-muted-foreground mt-1">Replies</p>
                  </div>
                  <div className="p-4 rounded-xl bg-primary/5 border border-primary/20">
                    <Target className="mx-auto h-4 w-4 text-primary mb-1" />
                    <p className="text-xl sm:text-2xl font-bold">{formatNumber(linkedinLeads)}</p>
                    <p className="text-xs text-muted-foreground mt-1">Leads Generated</p>
                  </div>
                  <div className="p-4 rounded-xl bg-primary/5 border border-primary/20">
                    <TrendingUp className="mx-auto h-4 w-4 text-primary mb-1" />
                    <p className="text-xl sm:text-2xl font-bold">{formatCurrency(linkedinRevenue)}</p>
                    <p className="text-xs text-muted-foreground mt-1">Revenue Potential</p>
                  </div>
                </div>

                <div className="text-center">
                  <Button variant={linkedinShow60Day ? "default" : "outline"} onClick={() => setLinkedinShow60Day(!linkedinShow60Day)} className="gap-2 text-sm">
                    <Calendar className="h-4 w-4" />
                    {linkedinShow60Day ? "Hide" : "View"} 60-Day Projection
                  </Button>
                </div>

                {linkedinShow60Day && (
                  <div className="mt-4 p-5 rounded-xl border border-primary/30 bg-primary/5 animate-fade-in">
                    <h4 className="text-xs font-semibold uppercase tracking-wider text-primary mb-3 text-center">60-Day Projection (with campaign optimization)</h4>
                    <div className="grid grid-cols-3 gap-3 text-center">
                      <div>
                        <p className="text-xl sm:text-2xl font-bold">{formatNumber(linkedinReplies60)}</p>
                        <p className="text-xs text-muted-foreground mt-1">Total Replies</p>
                      </div>
                      <div>
                        <p className="text-xl sm:text-2xl font-bold">{formatNumber(linkedinLeads60)}</p>
                        <p className="text-xs text-muted-foreground mt-1">Leads Generated</p>
                      </div>
                      <div>
                        <p className="text-xl sm:text-2xl font-bold">{formatCurrency(linkedinRevenue60)}</p>
                        <p className="text-xs text-muted-foreground mt-1">Revenue Potential</p>
                      </div>
                    </div>
                    <p className="text-xs text-muted-foreground text-center mt-3">Includes a 15% performance uplift in month 2 from A/B testing and outreach refinement.</p>
                  </div>
                )}
              </>
            )}
          </div>
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
