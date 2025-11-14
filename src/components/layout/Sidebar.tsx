import { Shield, Activity, Lock, Database, Brain } from "lucide-react";
import { cn } from "@/lib/utils";

interface SidebarProps {
  activeModule?: string;
  onModuleChange?: (module: string) => void;
}

const modules = [
  { id: "chronoguard", icon: Brain, label: "ChronoGuard", description: "Predictive Intelligence" },
  { id: "phishnet", icon: Shield, label: "PhishNet", description: "Autonomous Defense" },
  { id: "datacloak", icon: Lock, label: "Data Cloak", description: "Traffic Camouflage" },
  { id: "monitoring", icon: Database, label: "Monitoring", description: "Data Collection" },
];

export function Sidebar({ activeModule = "chronoguard", onModuleChange }: SidebarProps) {
  return (
    <aside className="w-72 bg-sidebar border-r border-sidebar-border flex flex-col">
      {/* Logo Section */}
      <div className="p-6 border-b border-sidebar-border">
        <div className="flex items-center gap-3">
          <div className="relative">
            <Activity className="h-8 w-8 text-primary text-glow" />
            <div className="absolute inset-0 bg-primary/20 blur-xl" />
          </div>
          <div>
            <h1 className="text-2xl font-bold text-primary text-glow">AGIS AI</h1>
            <p className="text-xs text-muted-foreground">Security Intelligence</p>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <nav className="flex-1 p-4 space-y-2">
        {modules.map((module) => {
          const Icon = module.icon;
          const isActive = activeModule === module.id;
          
          return (
            <button
              key={module.id}
              onClick={() => onModuleChange?.(module.id)}
              className={cn(
                "w-full flex items-center gap-4 p-4 rounded-lg transition-all duration-200",
                "hover:bg-sidebar-accent border border-transparent",
                isActive && "bg-sidebar-accent border-primary/30 cyber-glow"
              )}
            >
              <Icon className={cn(
                "h-5 w-5 transition-colors",
                isActive ? "text-primary" : "text-muted-foreground"
              )} />
              <div className="flex-1 text-left">
                <div className={cn(
                  "font-semibold text-sm",
                  isActive ? "text-primary" : "text-sidebar-foreground"
                )}>
                  {module.label}
                </div>
                <div className="text-xs text-muted-foreground">
                  {module.description}
                </div>
              </div>
            </button>
          );
        })}
      </nav>

      {/* Status Footer */}
      <div className="p-4 border-t border-sidebar-border">
        <div className="flex items-center gap-2 p-3 bg-muted/30 rounded-lg border border-border/50">
          <div className="h-2 w-2 rounded-full bg-success animate-pulse" />
          <span className="text-xs font-mono text-muted-foreground">
            All Systems Operational
          </span>
        </div>
      </div>
    </aside>
  );
}
