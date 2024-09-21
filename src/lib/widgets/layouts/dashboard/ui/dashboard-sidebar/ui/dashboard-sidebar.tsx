import { cn } from "@/shared/utils";
import { appRoutes } from "@/shared/config";
import { DashboardSidebarLink } from "./dashboard-sidebar-link";

export const DashboardSidebar: React.FC = () => {
  console.log("Render: ", "Dashboard Sidebar");

  return (
    <aside className="dashboard-sidebar">
      <div className={cn(
        "flex flex-col",
        "rounded-xl bg-[--bg-s]",
        "min-w-[80px] w-[240px] h-full"
      )}>
        <DashboardSidebarLink href={appRoutes.dashboard.path()} label="Dashboard" isActive />
        <DashboardSidebarLink href={appRoutes.todos.path()} label="Todos" isActive />
        <DashboardSidebarLink href={appRoutes.test.path()} label="Test" isActive />
      </div>
    </aside>
  );
};
