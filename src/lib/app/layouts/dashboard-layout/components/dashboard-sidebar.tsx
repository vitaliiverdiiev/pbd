import { SquaresFour } from '@phosphor-icons/react/dist/ssr';
import Link, { LinkProps } from 'next/link';
import { cloneElement, PropsWithChildren, ReactElement } from 'react';
import { tv } from 'tailwind-variants';

export const linkVariants = tv({
  base: '',
  slots: {
    linkWrapper:
      'group flex gap-3 items-center hover:bg-white rounded-2xl py-3 px-4',
    icon: 'text-[#4FD1C5] group-hover:text-[#ffffff]',
    iconWrapper:
      'flex-center rounded-xl bg-white group-hover:bg-[#4FD1C5] min-w-[30px] w-[30px] min-h-[30px] h-[30px]',
    linkText: 'font-bold text-[#A0AEC0] group-hover:text-[#2D3748] text-xs',
  },
});

export type DashboardSidebarLinkProps = LinkProps &
  PropsWithChildren & {
    icon?: ReactElement;
    iconPosition?: 'left' | 'right';
    label?: string;
  };

export const DashboardSidebarLink = ({
  href,
  icon,
  iconPosition = 'left',
  label,
}: DashboardSidebarLinkProps) => {
  const styles = linkVariants();

  const clonedIcon = icon
    ? cloneElement(icon, {
        size: 20,
        className: `${styles.icon()}`,
      })
    : null;

  const iconWrapped = <div className={styles.iconWrapper()}>{clonedIcon}</div>;

  return (
    <Link href={href} className={styles.linkWrapper()}>
      {icon && iconPosition === 'left' && iconWrapped}
      <span className={styles.linkText()}>{label}</span>
      {icon && iconPosition === 'right' && iconWrapped}
    </Link>
  );
};

export const DashboardSidebar = () => {
  return (
    <aside className="dashboard-sidebar w-[264px] p-8">
      <DashboardSidebarLink
        href="dashboard"
        icon={<SquaresFour />}
        label="Dashboard"
      />
    </aside>
  );
};
