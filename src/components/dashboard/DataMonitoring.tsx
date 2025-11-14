import { Card } from "@/components/ui/card";
import { Database, Activity, Cpu, HardDrive, Wifi } from "lucide-react";
import { Switch } from "@/components/ui/switch";
import { Progress } from "@/components/ui/progress";
import { LineChart, Line, ResponsiveContainer } from "recharts";

const systemMetrics = {
  packetIntake: "2.4M/s",
  cpuLoad: 67,
  networkLoad: 54,
  storageUsed: 78,
  activeSensors: 12,
  totalSensors: 15,
};

const dataSources = [
  { name: "Network Traffic Monitor", type: "network", status: true, rate: "2.4M pkt/s" },
  { name: "Endpoint Sensors", type: "endpoint", status: true, rate: "842K evt/s" },
  { name: "Firewall Logs", type: "firewall", status: true, rate: "156K log/s" },
  { name: "DNS Query Logger", type: "dns", status: true, rate: "89K qry/s" },
  { name: "Application Telemetry", type: "app", status: false, rate: "0 evt/s" },
];

const miniChartData = Array.from({ length: 20 }, (_, i) => ({
  value: Math.random() * 100,
}));

export function DataMonitoring() {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold text-primary text-glow flex items-center gap-2">
            <Database className="h-6 w-6" />
            Data Monitoring
          </h2>
          <p className="text-sm text-muted-foreground">System-wide Telemetry & Data Collection</p>
        </div>
        <div className="flex items-center gap-2 px-4 py-2 bg-success/20 border border-success/30 rounded-lg">
          <Activity className="h-4 w-4 text-success animate-pulse" />
          <span className="text-sm font-semibold text-success">Collecting</span>
        </div>
      </div>

      {/* System Metrics Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <Card className="p-4 bg-card border-border cyber-glow">
          <div className="flex items-center justify-between mb-3">
            <div className="h-10 w-10 rounded-lg bg-primary/20 flex items-center justify-center">
              <Activity className="h-5 w-5 text-primary" />
            </div>
            <ResponsiveContainer width={60} height={30}>
              <LineChart data={miniChartData}>
                <Line type="monotone" dataKey="value" stroke="hsl(var(--primary))" strokeWidth={2} dot={false} />
              </LineChart>
            </ResponsiveContainer>
          </div>
          <div className="text-sm text-muted-foreground">Packet Intake</div>
          <div className="text-2xl font-bold text-foreground">{systemMetrics.packetIntake}</div>
        </Card>

        <Card className="p-4 bg-card border-border cyber-glow">
          <div className="flex items-center justify-between mb-3">
            <div className="h-10 w-10 rounded-lg bg-warning/20 flex items-center justify-center">
              <Cpu className="h-5 w-5 text-warning" />
            </div>
            <div className="text-right">
              <div className="text-xs text-muted-foreground">Load</div>
              <div className="text-lg font-bold text-foreground">{systemMetrics.cpuLoad}%</div>
            </div>
          </div>
          <div className="text-sm text-muted-foreground mb-2">CPU Utilization</div>
          <Progress value={systemMetrics.cpuLoad} className="h-2" />
        </Card>

        <Card className="p-4 bg-card border-border cyber-glow">
          <div className="flex items-center justify-between mb-3">
            <div className="h-10 w-10 rounded-lg bg-accent/20 flex items-center justify-center">
              <Wifi className="h-5 w-5 text-accent" />
            </div>
            <div className="text-right">
              <div className="text-xs text-muted-foreground">Load</div>
              <div className="text-lg font-bold text-foreground">{systemMetrics.networkLoad}%</div>
            </div>
          </div>
          <div className="text-sm text-muted-foreground mb-2">Network Load</div>
          <Progress value={systemMetrics.networkLoad} className="h-2" />
        </Card>

        <Card className="p-4 bg-card border-border cyber-glow">
          <div className="flex items-center justify-between mb-3">
            <div className="h-10 w-10 rounded-lg bg-secondary/20 flex items-center justify-center">
              <HardDrive className="h-5 w-5 text-secondary" />
            </div>
            <div className="text-right">
              <div className="text-xs text-muted-foreground">Used</div>
              <div className="text-lg font-bold text-foreground">{systemMetrics.storageUsed}%</div>
            </div>
          </div>
          <div className="text-sm text-muted-foreground mb-2">Storage</div>
          <Progress value={systemMetrics.storageUsed} className="h-2" />
        </Card>
      </div>

      {/* Data Sources */}
      <Card className="p-6 bg-card border-border cyber-glow">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-lg font-semibold text-foreground">Data Collection Sources</h3>
          <div className="text-sm text-muted-foreground">
            <span className="text-success font-semibold">{systemMetrics.activeSensors}</span> / {systemMetrics.totalSensors} active
          </div>
        </div>

        <div className="space-y-3">
          {dataSources.map((source, idx) => (
            <div 
              key={idx}
              className="flex items-center justify-between p-4 rounded-lg bg-muted/20 border border-border hover:border-primary/30 transition-all duration-200"
            >
              <div className="flex items-center gap-4 flex-1">
                <div className={`h-3 w-3 rounded-full ${source.status ? 'bg-success animate-pulse' : 'bg-muted-foreground'}`} />
                <div className="flex-1">
                  <div className="font-medium text-foreground">{source.name}</div>
                  <div className="text-xs text-muted-foreground flex items-center gap-2">
                    <span className="uppercase">{source.type}</span>
                    <span>•</span>
                    <span className="font-mono">{source.rate}</span>
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <span className={`text-xs font-semibold uppercase ${source.status ? 'text-success' : 'text-muted-foreground'}`}>
                  {source.status ? 'Active' : 'Disabled'}
                </span>
                <Switch checked={source.status} />
              </div>
            </div>
          ))}
        </div>
      </Card>

      {/* Telemetry Feed Preview */}
      <Card className="p-6 bg-card border-border cyber-glow">
        <h3 className="text-lg font-semibold text-foreground mb-4 flex items-center gap-2">
          <Activity className="h-5 w-5 text-primary" />
          Live Telemetry Feed
        </h3>
        <div className="space-y-2 font-mono text-xs">
          <div className="flex items-center gap-2 text-muted-foreground">
            <span className="text-success">[OK]</span>
            <span className="text-muted-foreground opacity-60">2024-11-14 15:42:18</span>
            <span>Network sensor heartbeat received</span>
          </div>
          <div className="flex items-center gap-2 text-muted-foreground">
            <span className="text-warning">[WARN]</span>
            <span className="text-muted-foreground opacity-60">2024-11-14 15:42:17</span>
            <span>High packet rate detected: 2.8M pkt/s</span>
          </div>
          <div className="flex items-center gap-2 text-muted-foreground">
            <span className="text-success">[OK]</span>
            <span className="text-muted-foreground opacity-60">2024-11-14 15:42:16</span>
            <span>Firewall logs synchronized</span>
          </div>
          <div className="flex items-center gap-2 text-muted-foreground">
            <span className="text-success">[OK]</span>
            <span className="text-muted-foreground opacity-60">2024-11-14 15:42:15</span>
            <span>Endpoint sensors reporting normal activity</span>
          </div>
          <div className="flex items-center gap-2 text-muted-foreground">
            <span className="text-primary">[INFO]</span>
            <span className="text-muted-foreground opacity-60">2024-11-14 15:42:14</span>
            <span>DNS query rate: 89.4K qry/s</span>
          </div>
        </div>
      </Card>
    </div>
  );
}
