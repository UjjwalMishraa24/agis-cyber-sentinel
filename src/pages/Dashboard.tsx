import { useState } from "react";
import { Sidebar } from "@/components/layout/Sidebar";
import { TopBar } from "@/components/layout/TopBar";
import { ChronoGuard } from "@/components/dashboard/ChronoGuard";
import { PhishNet } from "@/components/dashboard/PhishNet";
import { DataCloak } from "@/components/dashboard/DataCloak";
import { DataMonitoring } from "@/components/dashboard/DataMonitoring";

export default function Dashboard() {
  const [activeModule, setActiveModule] = useState("chronoguard");

  const renderModule = () => {
    switch (activeModule) {
      case "chronoguard":
        return <ChronoGuard />;
      case "phishnet":
        return <PhishNet />;
      case "datacloak":
        return <DataCloak />;
      case "monitoring":
        return <DataMonitoring />;
      default:
        return <ChronoGuard />;
    }
  };

  return (
    <div className="min-h-screen flex w-full bg-background">
      <Sidebar activeModule={activeModule} onModuleChange={setActiveModule} />
      
      <div className="flex-1 flex flex-col">
        <TopBar />
        
        <main className="flex-1 p-8 overflow-auto cyber-grid">
          <div className="max-w-7xl mx-auto">
            {renderModule()}
          </div>
        </main>
      </div>
    </div>
  );
}
