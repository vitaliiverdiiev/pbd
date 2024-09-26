"use client";

import { cn } from "@/shared/utils";
import { appRoutes } from "@/shared/config";
import { DashboardSidebarLink } from "./dashboard-sidebar-link";
import { usePathname } from "next/navigation";

export const DashboardSidebar: React.FC = () => {
  console.log("Render: ", "Dashboard Sidebar");
  const pathname = usePathname();
  const isActive = (path: string) => path === pathname;

  return (
    <aside className="dashboard-sidebar px-4">
      <div className="bg-bg-s h-full">
        <div
          className={cn(
            "flex flex-col",
            "rounded-xl bg-[--bg-s] py-10",
            "min-w-[80px] w-[240px] h-full"
          )}
        >
          <DashboardSidebarLink
            href={appRoutes.dashboard.path()}
            label="Dashboard"
            isActive={isActive(appRoutes.dashboard.path())}
          />
          <DashboardSidebarLink
            href={appRoutes.todos.path()}
            label="Todos"
            isActive={isActive(appRoutes.todos.path())}
          />
          <DashboardSidebarLink
            href={appRoutes.test.path()}
            label="Test"
            isActive={isActive(appRoutes.test.path())}
          />
        </div>
      </div>
    </aside>
  );
};
