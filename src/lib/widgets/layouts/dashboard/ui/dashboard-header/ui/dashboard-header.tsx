import { Logo } from "@/shared/ui";

export const DashboardHeader: React.FC = () => {
  console.log("Render: ", "Dashboard Header");
  return (
    <header className="dashboard-header p-4">
      <div className="bg-[--bg-s] px-4  min-h-[60px] flex items-center rounded-lg">
        <Logo />
      </div>
    </header>
  );
}