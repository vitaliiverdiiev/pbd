import { ThemeSwitcher } from '@/features';

export const DashboardHeader = () => {
  return (
    <header className="dashboard-header border-b-2 border-slate-200">
      <span className="text-2xl leading-1 text-foreground">pbd.</span>
      <ThemeSwitcher />
    </header>
  );
};
