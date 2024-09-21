import { LinkProps } from "next/link";
import { PropsWithClassName } from "@/shared/types";

export type DashboardSidebarLinkProps = LinkProps & PropsWithClassName & {
  label: string;
  isActive: boolean;
}