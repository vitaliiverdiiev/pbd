import Link from "next/link";
import { cn } from "@/shared/utils";
import { DashboardSidebarLinkProps } from "../model/dashboard-sidebar-link-props";

export const DashboardSidebarLink: React.FC<DashboardSidebarLinkProps> = ({
  isActive,
  className,
  label,
  ...props
}) => {
  console.log("Render: ", "Dashboard Sidebar Link");

  return (
    <Link
      className={cn(
        "p-4",
        "transition-colors",
        isActive ? "sidebar-link-active active-link" : "",
        // isActive ? "bg-slate-700 text-bg border-l-4 border-red-500" : "",
        className
      )}
      {...props}
    >
      {label}
    </Link>
  );
};
