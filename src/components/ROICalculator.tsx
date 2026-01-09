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
import { Calculator, DollarSign, Clock, TrendingUp } from "lucide-react";

interface ROIResults {
  monthlySavings: number;
  annualSavings: number;
  hoursReclaimed: number;
  roi: number;
}

export const ROICalculator = () => {
  const [open, setOpen] = useState(false);
  const [teamSize, setTeamSize] = useState<string>("");
  const [hourlyRate, setHourlyRate] = useState<string>("");
  const [hoursOnManualTasks, setHoursOnManualTasks] = useState<string>("");
  const [currentToolCosts, setCurrentToolCosts] = useState<string>("");
  const [results, setResults] = useState<ROIResults | null>(null);

  const calculateROI = () => {
    const team = parseFloat(teamSize) || 0;
    const rate = parseFloat(hourlyRate) || 0;
    const manualHours = parseFloat(hoursOnManualTasks) || 0;
    const toolCosts = parseFloat(currentToolCosts) || 0;

    // Assume AI automation saves 60% of manual task time
    const automationEfficiency = 0.6;
    const hoursReclaimed = team * manualHours * automationEfficiency * 4; // Monthly hours saved
    const laborSavings = hoursReclaimed * rate;
    const toolSavings = toolCosts * 0.3; // Assume 30% tool cost reduction

    const monthlySavings = laborSavings + toolSavings;
    const annualSavings = monthlySavings * 12;

    // Assume average implementation cost for ROI calculation
    const estimatedImplementationCost = 5000;
    const roi = ((annualSavings - estimatedImplementationCost) / estimatedImplementationCost) * 100;

    setResults({
      monthlySavings,
      annualSavings,
      hoursReclaimed,
      roi: Math.max(0, roi),
    });
  };

  const resetCalculator = () => {
    setTeamSize("");
    setHourlyRate("");
    setHoursOnManualTasks("");
    setCurrentToolCosts("");
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
            AI Implementation ROI Calculator
          </DialogTitle>
        </DialogHeader>

        {!results ? (
          <div className="space-y-4 py-4">
            <p className="text-sm text-muted-foreground">
              Estimate how much you could save by implementing our AI solutions into your business.
            </p>

            <div className="space-y-3">
              <div className="space-y-2">
                <Label htmlFor="teamSize">Team Size</Label>
                <Input
                  id="teamSize"
                  type="number"
                  min="1"
                  placeholder="e.g., 10"
                  value={teamSize}
                  onChange={(e) => setTeamSize(e.target.value)}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="hourlyRate">Average Hourly Rate ($)</Label>
                <Input
                  id="hourlyRate"
                  type="number"
                  min="1"
                  placeholder="e.g., 50"
                  value={hourlyRate}
                  onChange={(e) => setHourlyRate(e.target.value)}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="manualTasks">Hours/Week on Manual Tasks (per person)</Label>
                <Input
                  id="manualTasks"
                  type="number"
                  min="1"
                  placeholder="e.g., 15"
                  value={hoursOnManualTasks}
                  onChange={(e) => setHoursOnManualTasks(e.target.value)}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="toolCosts">Current Monthly Tool Costs ($)</Label>
                <Input
                  id="toolCosts"
                  type="number"
                  min="0"
                  placeholder="e.g., 500"
                  value={currentToolCosts}
                  onChange={(e) => setCurrentToolCosts(e.target.value)}
                />
              </div>
            </div>

            <Button
              onClick={calculateROI}
              className="w-full"
              disabled={!teamSize || !hourlyRate || !hoursOnManualTasks}
            >
              Calculate Savings
            </Button>
          </div>
        ) : (
          <div className="space-y-6 py-4">
            <div className="grid grid-cols-2 gap-4">
              <div className="rounded-lg bg-primary/10 p-4 text-center">
                <DollarSign className="mx-auto h-6 w-6 text-primary" />
                <p className="mt-2 text-2xl font-bold text-primary">
                  {formatCurrency(results.monthlySavings)}
                </p>
                <p className="text-sm text-muted-foreground">Monthly Savings</p>
              </div>

              <div className="rounded-lg bg-primary/10 p-4 text-center">
                <TrendingUp className="mx-auto h-6 w-6 text-primary" />
                <p className="mt-2 text-2xl font-bold text-primary">
                  {formatCurrency(results.annualSavings)}
                </p>
                <p className="text-sm text-muted-foreground">Annual Savings</p>
              </div>

              <div className="rounded-lg bg-secondary p-4 text-center">
                <Clock className="mx-auto h-6 w-6 text-secondary-foreground" />
                <p className="mt-2 text-2xl font-bold">
                  {Math.round(results.hoursReclaimed)}
                </p>
                <p className="text-sm text-muted-foreground">Hours Saved/Month</p>
              </div>

              <div className="rounded-lg bg-secondary p-4 text-center">
                <TrendingUp className="mx-auto h-6 w-6 text-secondary-foreground" />
                <p className="mt-2 text-2xl font-bold">
                  {Math.round(results.roi)}%
                </p>
                <p className="text-sm text-muted-foreground">First Year ROI</p>
              </div>
            </div>

            <p className="text-center text-sm text-muted-foreground">
              Ready to start saving? Book a free discovery call to discuss your specific needs.
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
                Book Discovery Call
              </Button>
            </div>
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
};
