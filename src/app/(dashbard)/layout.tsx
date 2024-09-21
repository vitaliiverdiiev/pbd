import { DashboardHeader, DashboardSidebar } from "@/app/layouts";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "pbd. | Dashboard",
  description: "Something should be managed properly.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="dashboard"> 
      <DashboardHeader />
      <DashboardSidebar />
      <main className="dashboard-main">{children}</main>
    </div>
  );
}
