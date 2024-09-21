import { cn } from "@/shared/utils";
import { DashboardSidebarLink } from "./dashboard-sidebar-link";

export const DashboardSidebar: React.FC = () => {
  return (
    <aside className="dashboard-sidebar">
      <div className={cn(
        "flex flex-col",
        "rounded-xl bg-[--bg-s]",
        "min-w-[80px] w-[240px] h-full"
      )}>
        <DashboardSidebarLink href="/dashboard" label="Dashboard" isActive />
        <DashboardSidebarLink href="/test" label="Test" isActive />
      </div>
    </aside>
  );
};
