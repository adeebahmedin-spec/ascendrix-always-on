import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { Shield, CheckCircle, XCircle, AlertTriangle, Search } from "lucide-react";

interface DnsResult {
  spf: "pass" | "fail" | "missing";
  dkim: "pass" | "fail" | "missing";
  dmarc: "pass" | "fail" | "missing";
  overall: "healthy" | "at-risk" | "critical";
}

const statusConfig = {
  pass: { icon: CheckCircle, label: "Configured", className: "text-green-400" },
  fail: { icon: XCircle, label: "Misconfigured", className: "text-red-400" },
  missing: { icon: AlertTriangle, label: "Not Found", className: "text-yellow-400" },
};

const overallConfig = {
  healthy: { label: "Healthy", description: "Your domain's email authentication is properly configured. Emails sent from this domain are much more likely to land in the inbox.", className: "text-green-400 border-green-400/30 bg-green-400/10" },
  "at-risk": { label: "At Risk", description: "Some records are missing or misconfigured. Your emails may end up in spam folders or get rejected by certain providers.", className: "text-yellow-400 border-yellow-400/30 bg-yellow-400/10" },
  critical: { label: "Needs Attention", description: "Critical authentication records are missing. Your emails are very likely landing in spam or being blocked entirely.", className: "text-red-400 border-red-400/30 bg-red-400/10" },
};

export const InboxHealthScanner = () => {
  const [domain, setDomain] = useState("");
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<DnsResult | null>(null);
  const [error, setError] = useState("");

  const checkDomain = async () => {
    const cleaned = domain.trim().replace(/^https?:\/\//, "").replace(/\/.*$/, "");
    if (!cleaned || !cleaned.includes(".")) {
      setError("Please enter a valid domain (e.g. yourdomain.com)");
      return;
    }

    setLoading(true);
    setError("");
    setResult(null);

    try {
      const [spfRes, dmarcRes] = await Promise.all([
        fetch(`https://dns.google/resolve?name=${cleaned}&type=TXT`).then(r => r.json()),
        fetch(`https://dns.google/resolve?name=_dmarc.${cleaned}&type=TXT`).then(r => r.json()),
      ]);

      const txtRecords: string[] = (spfRes.Answer || []).map((a: any) => a.data || "");
      const dmarcRecords: string[] = (dmarcRes.Answer || []).map((a: any) => a.data || "");

      const hasSPF = txtRecords.some((r: string) => r.toLowerCase().includes("v=spf1"));
      const hasDKIM = txtRecords.some((r: string) => r.toLowerCase().includes("dkim")) || true; // DKIM requires selector, give benefit of doubt
      const hasDMARC = dmarcRecords.some((r: string) => r.toLowerCase().includes("v=dmarc1"));

      // Check for DKIM by trying common selectors
      let dkimFound = false;
      const selectors = ["default", "google", "selector1", "selector2", "k1", "mandrill", "s1", "s2"];
      const dkimChecks = await Promise.all(
        selectors.slice(0, 4).map(sel =>
          fetch(`https://dns.google/resolve?name=${sel}._domainkey.${cleaned}&type=TXT`)
            .then(r => r.json())
            .catch(() => null)
        )
      );
      dkimFound = dkimChecks.some(res => res?.Answer && res.Answer.length > 0);

      const spf: DnsResult["spf"] = hasSPF ? "pass" : "missing";
      const dkim: DnsResult["dkim"] = dkimFound ? "pass" : "missing";
      const dmarc: DnsResult["dmarc"] = hasDMARC ? "pass" : "missing";

      const scores = [spf, dkim, dmarc];
      const passCount = scores.filter(s => s === "pass").length;
      const overall: DnsResult["overall"] = passCount === 3 ? "healthy" : passCount >= 1 ? "at-risk" : "critical";

      setResult({ spf, dkim, dmarc, overall });
    } catch {
      setError("Something went wrong. Please check the domain and try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="inbox-scanner" className="py-16 sm:py-24 lg:py-32 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10 sm:mb-14 max-w-2xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            <Shield className="w-4 h-4" />
            Free Tool
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight mb-3 sm:mb-4">
            Inbox Health Scanner
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground">
            Find out if your emails are actually reaching inboxes. Enter your domain below and we'll check your SPF, DKIM, and DMARC records in seconds.
          </p>
        </div>

        <div className="max-w-xl mx-auto">
          <div className="flex gap-3 mb-8">
            <Input
              type="text"
              placeholder="yourdomain.com"
              value={domain}
              onChange={(e) => setDomain(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && checkDomain()}
              className="h-12 text-base bg-secondary/50 border-border"
            />
            <Button
              onClick={checkDomain}
              disabled={loading}
              className="h-12 px-6 whitespace-nowrap"
            >
              {loading ? (
                <span className="flex items-center gap-2">
                  <span className="w-4 h-4 border-2 border-primary-foreground/30 border-t-primary-foreground rounded-full animate-spin" />
                  Scanning
                </span>
              ) : (
                <span className="flex items-center gap-2">
                  <Search className="w-4 h-4" />
                  Scan Domain
                </span>
              )}
            </Button>
          </div>

          {error && (
            <p className="text-red-400 text-sm text-center mb-4">{error}</p>
          )}

          {result && (
            <div className="space-y-4 animate-fade-in">
              <Card className={`border ${overallConfig[result.overall].className}`}>
                <CardContent className="p-5 text-center">
                  <p className="text-lg font-semibold mb-1">
                    Overall: {overallConfig[result.overall].label}
                  </p>
                  <p className="text-sm text-muted-foreground">
                    {overallConfig[result.overall].description}
                  </p>
                </CardContent>
              </Card>

              <div className="grid grid-cols-3 gap-3">
                {(["spf", "dkim", "dmarc"] as const).map((record) => {
                  const status = result[record];
                  const config = statusConfig[status];
                  const Icon = config.icon;
                  return (
                    <Card key={record} className="border-border">
                      <CardContent className="p-4 text-center">
                        <Icon className={`w-6 h-6 mx-auto mb-2 ${config.className}`} />
                        <p className="text-xs uppercase tracking-wider text-muted-foreground mb-1">{record}</p>
                        <p className={`text-sm font-medium ${config.className}`}>{config.label}</p>
                      </CardContent>
                    </Card>
                  );
                })}
              </div>

              {result.overall !== "healthy" && (
                <div className="text-center pt-4">
                  <p className="text-sm text-muted-foreground mb-3">
                    Want us to fix this for you? Proper email setup is included in every campaign.
                  </p>
                  <Button
                    onClick={() => {
                      const el = document.getElementById("calendly");
                      if (el) el.scrollIntoView({ behavior: "smooth" });
                    }}
                    variant="outline"
                    size="lg"
                  >
                    Book a Free Demo
                  </Button>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
