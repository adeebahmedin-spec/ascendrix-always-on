import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Calculator, DollarSign, CalendarCheck, TrendingUp } from "lucide-react";

interface ROIResults {
  monthlyRevenue: number;
  annualRevenue: number;
  meetingsPerMonth: number;
  roi: number;
}

export const ROICalculator = () => {
  const [open, setOpen] = useState(false);
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
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button variant="outline" className="gap-2">
          <Calculator className="h-4 w-4" />
          Calculate Your ROI
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-lg">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2 text-xl">
            <Calculator className="h-5 w-5 text-primary" />
            Lead Gen ROI Calculator
          </DialogTitle>
        </DialogHeader>

        {!results ? (
          <div className="space-y-4 py-4">
            <p className="text-sm text-muted-foreground">
              See what consistent qualified meetings could mean for your revenue.
            </p>

            <div className="space-y-3">
              <div className="space-y-2">
                <Label htmlFor="dealValue">Average Deal Value ($)</Label>
                <Input
                  id="dealValue"
                  type="number"
                  min="1"
                  placeholder="e.g., 25000"
                  value={avgDealValue}
                  onChange={(e) => setAvgDealValue(e.target.value)}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="closeRate">Your Close Rate (%)</Label>
                <Input
                  id="closeRate"
                  type="number"
                  min="1"
                  max="100"
                  placeholder="e.g., 20"
                  value={closeRate}
                  onChange={(e) => setCloseRate(e.target.value)}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="meetings">Meetings Booked Per Week</Label>
                <Input
                  id="meetings"
                  type="number"
                  min="1"
                  placeholder="e.g., 2"
                  value={meetingsPerWeek}
                  onChange={(e) => setMeetingsPerWeek(e.target.value)}
                />
              </div>
            </div>

            <Button
              onClick={calculateROI}
              className="w-full"
              disabled={!avgDealValue || !closeRate}
            >
              Calculate Potential Revenue
            </Button>
          </div>
        ) : (
          <div className="space-y-6 py-4">
            <div className="grid grid-cols-2 gap-4">
              <div className="rounded-lg bg-primary/10 p-4 text-center">
                <DollarSign className="mx-auto h-6 w-6 text-primary" />
                <p className="mt-2 text-2xl font-bold text-primary">
                  {formatCurrency(results.monthlyRevenue)}
                </p>
                <p className="text-sm text-muted-foreground">Potential Monthly Revenue</p>
              </div>

              <div className="rounded-lg bg-primary/10 p-4 text-center">
                <TrendingUp className="mx-auto h-6 w-6 text-primary" />
                <p className="mt-2 text-2xl font-bold text-primary">
                  {formatCurrency(results.annualRevenue)}
                </p>
                <p className="text-sm text-muted-foreground">Potential Annual Revenue</p>
              </div>

              <div className="rounded-lg bg-secondary p-4 text-center">
                <CalendarCheck className="mx-auto h-6 w-6 text-secondary-foreground" />
                <p className="mt-2 text-2xl font-bold">
                  {Math.round(results.meetingsPerMonth)}
                </p>
                <p className="text-sm text-muted-foreground">Meetings/Month</p>
              </div>

              <div className="rounded-lg bg-secondary p-4 text-center">
                <TrendingUp className="mx-auto h-6 w-6 text-secondary-foreground" />
                <p className="mt-2 text-2xl font-bold">
                  {Math.round(results.roi)}%
                </p>
                <p className="text-sm text-muted-foreground">Estimated ROI</p>
              </div>
            </div>

            <p className="text-center text-sm text-muted-foreground">
              These estimates are based on the numbers you provided. Actual results depend on your market, offer, and sales process.
            </p>

            <div className="flex gap-3">
              <Button variant="outline" onClick={resetCalculator} className="flex-1">
                Recalculate
              </Button>
              <Button
                className="flex-1"
                onClick={() => {
                  setOpen(false);
                  document.getElementById("discovery-call")?.scrollIntoView({ behavior: "smooth" });
                }}
              >
                Book a Free Demo
              </Button>
            </div>
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
};
