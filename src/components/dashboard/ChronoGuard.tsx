import { Card } from "@/components/ui/card";
import { LineChart, Line, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Area, AreaChart } from "recharts";
import { TrendingUp, AlertTriangle, Shield } from "lucide-react";

const anomalyData = [
  { time: "00:00", score: 23 },
  { time: "04:00", score: 18 },
  { time: "08:00", score: 42 },
  { time: "12:00", score: 67 },
  { time: "16:00", score: 89 },
  { time: "20:00", score: 54 },
  { time: "Now", score: 31 },
];

const threatProbability = [
  { type: "DDoS", probability: 78 },
  { type: "Phishing", probability: 62 },
  { type: "Intrusion", probability: 45 },
  { type: "Malware", probability: 34 },
  { type: "Data Breach", probability: 28 },
];

const heatmapData = [
  { hour: "00", Mon: 12, Tue: 15, Wed: 8, Thu: 22, Fri: 18, Sat: 5, Sun: 7 },
  { hour: "06", Mon: 25, Tue: 28, Wed: 19, Thu: 35, Fri: 42, Sat: 12, Sun: 10 },
  { hour: "12", Mon: 45, Tue: 52, Wed: 48, Thu: 67, Fri: 78, Sat: 28, Sun: 22 },
  { hour: "18", Mon: 38, Tue: 42, Wed: 35, Thu: 56, Fri: 62, Sat: 35, Sun: 28 },
];

export function ChronoGuard() {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold text-primary text-glow flex items-center gap-2">
            <TrendingUp className="h-6 w-6" />
            ChronoGuard
          </h2>
          <p className="text-sm text-muted-foreground">Predictive Attack Intelligence via Temporal Transformer Analysis</p>
        </div>
        <div className="flex items-center gap-2 px-4 py-2 bg-warning/20 border border-warning/30 rounded-lg">
          <AlertTriangle className="h-4 w-4 text-warning" />
          <span className="text-sm font-semibold text-warning">High Alert</span>
        </div>
      </div>

      {/* Main Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Anomaly Score Timeline */}
        <Card className="p-6 bg-card border-border cyber-glow">
          <h3 className="text-lg font-semibold text-foreground mb-4 flex items-center gap-2">
            Real-time Anomaly Score
            <span className="text-xs font-normal text-muted-foreground">(Last 24h)</span>
          </h3>
          <ResponsiveContainer width="100%" height={250}>
            <AreaChart data={anomalyData}>
              <defs>
                <linearGradient id="anomalyGradient" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="hsl(var(--primary))" stopOpacity={0.8}/>
                  <stop offset="95%" stopColor="hsl(var(--primary))" stopOpacity={0}/>
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
              <XAxis dataKey="time" stroke="hsl(var(--muted-foreground))" style={{ fontSize: '12px' }} />
              <YAxis stroke="hsl(var(--muted-foreground))" style={{ fontSize: '12px' }} />
              <Tooltip 
                contentStyle={{ 
                  backgroundColor: 'hsl(var(--card))', 
                  border: '1px solid hsl(var(--border))',
                  borderRadius: '8px'
                }} 
              />
              <Area 
                type="monotone" 
                dataKey="score" 
                stroke="hsl(var(--primary))" 
                strokeWidth={2}
                fill="url(#anomalyGradient)" 
              />
            </AreaChart>
          </ResponsiveContainer>
        </Card>

        {/* Attack Type Likelihood */}
        <Card className="p-6 bg-card border-border cyber-glow">
          <h3 className="text-lg font-semibold text-foreground mb-4">Attack Type Likelihood</h3>
          <ResponsiveContainer width="100%" height={250}>
            <BarChart data={threatProbability} layout="vertical">
              <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
              <XAxis type="number" stroke="hsl(var(--muted-foreground))" style={{ fontSize: '12px' }} />
              <YAxis dataKey="type" type="category" stroke="hsl(var(--muted-foreground))" style={{ fontSize: '12px' }} width={100} />
              <Tooltip 
                contentStyle={{ 
                  backgroundColor: 'hsl(var(--card))', 
                  border: '1px solid hsl(var(--border))',
                  borderRadius: '8px'
                }} 
              />
              <Bar dataKey="probability" fill="hsl(var(--primary))" radius={[0, 8, 8, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </Card>
      </div>

      {/* Prediction Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card className="p-4 bg-card border-border hover:cyber-glow transition-all duration-200">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm font-medium text-muted-foreground">Next Attack Window</span>
            <AlertTriangle className="h-4 w-4 text-warning" />
          </div>
          <div className="text-2xl font-bold text-foreground">2h 34m</div>
          <div className="text-xs text-muted-foreground mt-1">Confidence: 87%</div>
        </Card>

        <Card className="p-4 bg-card border-border hover:cyber-glow transition-all duration-200">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm font-medium text-muted-foreground">Risk Level</span>
            <Shield className="h-4 w-4 text-destructive" />
          </div>
          <div className="text-2xl font-bold text-destructive">High</div>
          <div className="text-xs text-muted-foreground mt-1">Score: 78/100</div>
        </Card>

        <Card className="p-4 bg-card border-border hover:cyber-glow transition-all duration-200">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm font-medium text-muted-foreground">Threats Prevented</span>
            <TrendingUp className="h-4 w-4 text-success" />
          </div>
          <div className="text-2xl font-bold text-foreground">1,247</div>
          <div className="text-xs text-success mt-1">+23% from yesterday</div>
        </Card>
      </div>
    </div>
  );
}
