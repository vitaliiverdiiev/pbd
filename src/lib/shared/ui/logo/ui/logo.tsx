import Link from "next/link";
import { LogoProps } from "../types/logo-props";

export const Logo: React.FC<LogoProps> = ({ href }) => {
  console.log("Render: ", "Logo");

  return (
    <Link href={href ?? "/dashboard"} className="text-2xl font-extrabold">
      pbd.code  
    </Link>
  );
};
