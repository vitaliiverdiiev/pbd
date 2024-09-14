import { cn } from '@/shared/utils';
import { SquaresFour, TagSimple } from '@phosphor-icons/react/dist/ssr';
import Link from 'next/link';

export const DashboardSidebar = () => {
  return (
    <aside className="dashboard-sidebar w-[300px] border-r-2 pr-4 border-slate-200">
      <div className="">
        <p className="text-slate-600 text-md uppercase">Main</p>
        <Link
          href="/dashboard"
          className={cn(
            'hover:bg-slate-100 flex items-center gap-2 text-xl leading-none',
            'border-l-8 border-transparent px-2 py-4 hover:text-purple-300 hover:border-blue-400 rounded-tr-md rounded-br-md'
          )}
        >
          <SquaresFour size={24} />
          Dashboard
        </Link>
        <Link
          href="/hekko"
          className={cn(
            'hover:bg-slate-100 flex items-center gap-2 text-xl leading-none',
            'border-l-8 border-transparent px-2 py-4 hover:text-purple-300 hover:border-blue-400 rounded-tr-md rounded-br-md'
          )}
        >
          <TagSimple size={24} />
          Hekko
        </Link>
      </div>
    </aside>
  );
};
