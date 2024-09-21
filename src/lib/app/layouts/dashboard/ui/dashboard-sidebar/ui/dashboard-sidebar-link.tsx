import Link from "next/link";
import { cn } from "@/shared/utils";
import { DashboardSidebarLinkProps } from "../model/dashboard-sidebar-link-props";

export const DashboardSidebarLink: React.FC<DashboardSidebarLinkProps> = ({ isActive, className, label, ...props }) => {
  return (
    <Link className={cn("p-4", isActive ? "" : "underline underline-offset-2", className)} {...props}>
      {label}
    </Link>
  );
};
