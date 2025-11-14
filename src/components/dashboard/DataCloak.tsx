import { Card } from "@/components/ui/card";
import { Lock, Eye, EyeOff, Activity } from "lucide-react";
import { Progress } from "@/components/ui/progress";

export function DataCloak() {
  const cloakStatus = {
    active: true,
    invisibility: 94,
    encrypted: 98.7,
    obfuscated: 87,
    activeConnections: 1247,
  };

  const trafficFlow = [
    { direction: "Outbound", packets: "2.4M", encrypted: 99, status: "cloaked" },
    { direction: "Inbound", packets: "1.8M", encrypted: 97, status: "cloaked" },
    { direction: "Internal", packets: "842K", encrypted: 100, status: "secured" },
  ];

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold text-primary text-glow flex items-center gap-2">
            <Lock className="h-6 w-6" />
            Data Cloak
          </h2>
          <p className="text-sm text-muted-foreground">Outbound Traffic Camouflage & Encryption</p>
        </div>
        <div className="flex items-center gap-2 px-4 py-2 bg-primary/20 border border-primary/30 rounded-lg">
          <EyeOff className="h-4 w-4 text-primary animate-pulse" />
          <span className="text-sm font-semibold text-primary">Cloak Active</span>
        </div>
      </div>

      {/* Main Status Card */}
      <Card className="p-8 bg-card border-border cyber-glow-strong">
        <div className="text-center mb-6">
          <div className="relative inline-block mb-4">
            <div className="h-32 w-32 rounded-full border-4 border-primary/30 flex items-center justify-center relative">
              <div className="absolute inset-0 bg-primary/10 rounded-full animate-pulse" />
              <Lock className="h-16 w-16 text-primary relative z-10" />
            </div>
            <div className="absolute -top-2 -right-2 h-6 w-6 bg-success rounded-full border-2 border-background animate-pulse" />
          </div>
          <h3 className="text-3xl font-bold text-foreground mb-2">Cloak Status</h3>
          <p className="text-sm text-muted-foreground">All outbound traffic is masked and encrypted</p>
        </div>

        {/* Metrics Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
          <div className="text-center p-4 bg-muted/20 rounded-lg border border-border">
            <div className="text-4xl font-bold text-primary mb-1">{cloakStatus.invisibility}%</div>
            <div className="text-sm text-muted-foreground">Traffic Invisibility</div>
            <Progress value={cloakStatus.invisibility} className="mt-2 h-2" />
          </div>

          <div className="text-center p-4 bg-muted/20 rounded-lg border border-border">
            <div className="text-4xl font-bold text-accent mb-1">{cloakStatus.encrypted}%</div>
            <div className="text-sm text-muted-foreground">Encryption Rate</div>
            <Progress value={cloakStatus.encrypted} className="mt-2 h-2" />
          </div>

          <div className="text-center p-4 bg-muted/20 rounded-lg border border-border">
            <div className="text-4xl font-bold text-secondary mb-1">{cloakStatus.obfuscated}%</div>
            <div className="text-sm text-muted-foreground">Obfuscation Level</div>
            <Progress value={cloakStatus.obfuscated} className="mt-2 h-2" />
          </div>
        </div>

        {/* Active Connections */}
        <div className="text-center p-4 bg-primary/10 rounded-lg border border-primary/30">
          <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground mb-2">
            <Activity className="h-4 w-4 text-primary" />
            Active Cloaked Connections
          </div>
          <div className="text-3xl font-bold text-foreground">{cloakStatus.activeConnections.toLocaleString()}</div>
        </div>
      </Card>

      {/* Traffic Flow Analysis */}
      <Card className="p-6 bg-card border-border cyber-glow">
        <h3 className="text-lg font-semibold text-foreground mb-4 flex items-center gap-2">
          <Activity className="h-5 w-5 text-primary" />
          Live Cloak Activity
        </h3>
        <div className="space-y-4">
          {trafficFlow.map((flow, idx) => (
            <div key={idx} className="p-4 rounded-lg bg-muted/20 border border-border">
              <div className="flex items-center justify-between mb-3">
                <div>
                  <div className="font-semibold text-foreground">{flow.direction} Traffic</div>
                  <div className="text-sm text-muted-foreground">{flow.packets} packets/sec</div>
                </div>
                <div className="text-right">
                  <div className="text-sm font-mono text-primary">{flow.encrypted}% encrypted</div>
                  <div className="text-xs text-success uppercase">{flow.status}</div>
                </div>
              </div>
              <Progress value={flow.encrypted} className="h-2" />
            </div>
          ))}
        </div>
      </Card>

      {/* Encryption Methods */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Card className="p-4 bg-card border-border hover:cyber-glow transition-all duration-200">
          <div className="flex items-center gap-3 mb-2">
            <div className="h-10 w-10 rounded-lg bg-primary/20 flex items-center justify-center">
              <Lock className="h-5 w-5 text-primary" />
            </div>
            <div>
              <div className="font-semibold text-foreground">AES-256 Encryption</div>
              <div className="text-xs text-success">Active</div>
            </div>
          </div>
          <div className="text-xs text-muted-foreground">Military-grade encryption applied to all data streams</div>
        </Card>

        <Card className="p-4 bg-card border-border hover:cyber-glow transition-all duration-200">
          <div className="flex items-center gap-3 mb-2">
            <div className="h-10 w-10 rounded-lg bg-accent/20 flex items-center justify-center">
              <Eye className="h-5 w-5 text-accent" />
            </div>
            <div>
              <div className="font-semibold text-foreground">Traffic Obfuscation</div>
              <div className="text-xs text-success">Active</div>
            </div>
          </div>
          <div className="text-xs text-muted-foreground">Pattern masking and traffic shaping enabled</div>
        </Card>
      </div>
    </div>
  );
}
