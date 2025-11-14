import { Cpu, Zap } from "lucide-react";

export function TopBar() {
  return (
    <header className="h-16 bg-card border-b border-border flex items-center justify-between px-6">
      {/* AI Status */}
      <div className="flex items-center gap-4">
        <div className="flex items-center gap-2">
          <div className="relative">
            <Cpu className="h-5 w-5 text-primary" />
            <div className="absolute inset-0 bg-primary/30 blur-lg animate-pulse" />
          </div>
          <div>
            <div className="text-sm font-semibold text-foreground">AGIS Neural Engine</div>
            <div className="text-xs text-success font-mono flex items-center gap-1">
              <div className="h-1.5 w-1.5 rounded-full bg-success pulse-glow" />
              Active
            </div>
          </div>
        </div>
      </div>

      {/* Real-time Stats */}
      <div className="flex items-center gap-6">
        <div className="flex items-center gap-2">
          <Zap className="h-4 w-4 text-warning" />
          <div>
            <div className="text-xs text-muted-foreground">Processing</div>
            <div className="text-sm font-mono font-semibold text-foreground">1.2M ops/s</div>
          </div>
        </div>
        
        <div className="h-8 w-px bg-border" />
        
        <div>
          <div className="text-xs text-muted-foreground">Threats Blocked</div>
          <div className="text-sm font-mono font-semibold text-success">247 today</div>
        </div>
        
        <div className="h-8 w-px bg-border" />
        
        <div>
          <div className="text-xs text-muted-foreground">Latency</div>
          <div className="text-sm font-mono font-semibold text-primary">12ms</div>
        </div>
      </div>

      {/* Current Time */}
      <div className="text-right">
        <div className="text-xs text-muted-foreground">System Time</div>
        <div className="text-sm font-mono font-semibold text-foreground">
          {new Date().toLocaleTimeString('en-US', { hour12: false })}
        </div>
      </div>
    </header>
  );
}
