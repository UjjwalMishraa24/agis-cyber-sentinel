import { Card } from "@/components/ui/card";
import { Shield, Ban, AlertCircle, CheckCircle } from "lucide-react";
import { cn } from "@/lib/utils";

const blockedSources = [
  { ip: "203.0.113.45", country: "Unknown", threat: "DDoS", status: "blocked", time: "2m ago" },
  { ip: "198.51.100.23", country: "RU", threat: "Malware", status: "blocked", time: "5m ago" },
  { ip: "192.0.2.67", country: "CN", threat: "Phishing", status: "isolating", time: "8m ago" },
  { ip: "203.0.113.89", country: "Unknown", threat: "Intrusion", status: "blocked", time: "12m ago" },
  { ip: "198.51.100.45", country: "Unknown", threat: "Exploit", status: "secured", time: "15m ago" },
];

const autoResponses = [
  { action: "Firewall Rule Added", target: "203.0.113.0/24", time: "1m ago", status: "active" },
  { action: "Node Isolated", target: "Server-03", time: "6m ago", status: "active" },
  { action: "Traffic Rerouted", target: "Primary Gateway", time: "10m ago", status: "completed" },
  { action: "Alert Sent", target: "Admin Team", time: "14m ago", status: "completed" },
];

export function PhishNet() {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold text-primary text-glow flex items-center gap-2">
            <Shield className="h-6 w-6" />
            PhishNet
          </h2>
          <p className="text-sm text-muted-foreground">Autonomous Defense & Response System</p>
        </div>
        <div className="flex items-center gap-2 px-4 py-2 bg-success/20 border border-success/30 rounded-lg">
          <CheckCircle className="h-4 w-4 text-success" />
          <span className="text-sm font-semibold text-success">Defense Active</span>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card className="p-4 bg-card border-border cyber-glow">
          <div className="flex items-center gap-2 mb-2">
            <Ban className="h-4 w-4 text-destructive" />
            <span className="text-sm font-medium text-muted-foreground">Blocked</span>
          </div>
          <div className="text-3xl font-bold text-foreground">247</div>
          <div className="text-xs text-success mt-1">↑ 12% last hour</div>
        </Card>

        <Card className="p-4 bg-card border-border cyber-glow">
          <div className="flex items-center gap-2 mb-2">
            <AlertCircle className="h-4 w-4 text-warning" />
            <span className="text-sm font-medium text-muted-foreground">Isolating</span>
          </div>
          <div className="text-3xl font-bold text-foreground">3</div>
          <div className="text-xs text-muted-foreground mt-1">In progress</div>
        </Card>

        <Card className="p-4 bg-card border-border cyber-glow">
          <div className="flex items-center gap-2 mb-2">
            <CheckCircle className="h-4 w-4 text-success" />
            <span className="text-sm font-medium text-muted-foreground">Secured</span>
          </div>
          <div className="text-3xl font-bold text-foreground">1,842</div>
          <div className="text-xs text-success mt-1">All time</div>
        </Card>

        <Card className="p-4 bg-card border-border cyber-glow">
          <div className="flex items-center gap-2 mb-2">
            <Shield className="h-4 w-4 text-primary" />
            <span className="text-sm font-medium text-muted-foreground">Auto Actions</span>
          </div>
          <div className="text-3xl font-bold text-foreground">18</div>
          <div className="text-xs text-muted-foreground mt-1">Last 24h</div>
        </Card>
      </div>

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Blocked Sources */}
        <Card className="p-6 bg-card border-border cyber-glow">
          <h3 className="text-lg font-semibold text-foreground mb-4 flex items-center gap-2">
            <Ban className="h-5 w-5 text-destructive" />
            Blocked Malicious Sources
          </h3>
          <div className="space-y-3">
            {blockedSources.map((source, idx) => (
              <div 
                key={idx} 
                className={cn(
                  "flex items-center justify-between p-3 rounded-lg border transition-all duration-200",
                  source.status === "blocked" && "bg-destructive/10 border-destructive/30",
                  source.status === "isolating" && "bg-warning/10 border-warning/30",
                  source.status === "secured" && "bg-success/10 border-success/30"
                )}
              >
                <div className="flex items-center gap-3">
                  <div className={cn(
                    "h-2 w-2 rounded-full",
                    source.status === "blocked" && "bg-destructive animate-pulse",
                    source.status === "isolating" && "bg-warning animate-pulse",
                    source.status === "secured" && "bg-success"
                  )} />
                  <div>
                    <div className="font-mono text-sm text-foreground">{source.ip}</div>
                    <div className="text-xs text-muted-foreground flex items-center gap-2">
                      <span>{source.threat}</span>
                      {source.country !== "Unknown" && (
                        <>
                          <span>•</span>
                          <span>{source.country}</span>
                        </>
                      )}
                    </div>
                  </div>
                </div>
                <div className="text-right">
                  <div className={cn(
                    "text-xs font-semibold uppercase",
                    source.status === "blocked" && "text-destructive",
                    source.status === "isolating" && "text-warning",
                    source.status === "secured" && "text-success"
                  )}>
                    {source.status}
                  </div>
                  <div className="text-xs text-muted-foreground">{source.time}</div>
                </div>
              </div>
            ))}
          </div>
        </Card>

        {/* Auto Response Actions */}
        <Card className="p-6 bg-card border-border cyber-glow">
          <h3 className="text-lg font-semibold text-foreground mb-4 flex items-center gap-2">
            <Shield className="h-5 w-5 text-primary" />
            Autonomous Response Actions
          </h3>
          <div className="space-y-3">
            {autoResponses.map((response, idx) => (
              <div 
                key={idx} 
                className="flex items-center justify-between p-3 rounded-lg bg-muted/30 border border-border hover:border-primary/30 transition-all duration-200"
              >
                <div className="flex items-center gap-3">
                  <div className={cn(
                    "h-8 w-8 rounded-full flex items-center justify-center",
                    response.status === "active" && "bg-primary/20 text-primary",
                    response.status === "completed" && "bg-success/20 text-success"
                  )}>
                    {response.status === "active" ? (
                      <AlertCircle className="h-4 w-4" />
                    ) : (
                      <CheckCircle className="h-4 w-4" />
                    )}
                  </div>
                  <div>
                    <div className="text-sm font-medium text-foreground">{response.action}</div>
                    <div className="text-xs text-muted-foreground">{response.target}</div>
                  </div>
                </div>
                <div className="text-right">
                  <div className={cn(
                    "text-xs font-semibold uppercase mb-1",
                    response.status === "active" && "text-primary",
                    response.status === "completed" && "text-success"
                  )}>
                    {response.status}
                  </div>
                  <div className="text-xs text-muted-foreground">{response.time}</div>
                </div>
              </div>
            ))}
          </div>
        </Card>
      </div>
    </div>
  );
}
