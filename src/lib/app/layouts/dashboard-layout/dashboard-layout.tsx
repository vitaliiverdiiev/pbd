import { PropsWithChildren } from "react";
import { DashboardHeader, DashboardSidebar } from "./components";

export const DashboardLayout = ({ children }: PropsWithChildren) => {
  return (
    <div className="dashboard-wrapper">
      <DashboardHeader />
      <DashboardSidebar />
      <section className="dashboard-main">{children}</section>
    </div>
  );
};