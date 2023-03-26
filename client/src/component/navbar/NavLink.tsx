import { ReactNode } from "react";
import { Link, useLocation } from "react-router-dom";
import classNames from "@/utils/ClassesUtils";

type Props = {
  children: ReactNode;
  to: string;
};

const NavLink = ({ children, to }: Props) => {
  const location = useLocation();

  const isCurrent = (to: string): boolean => {
    return location.pathname === to;
  };

  return (
    <Link
      to={to}
      className={classNames(
        "h-fit text-base font-medium text-black dark:text-white transition-colors hover:text-gray-500",
        isCurrent(to) && "border-b border-black dark:border-b dark:border-white"
      )}
    >
      {children}
    </Link>
  );
};

export default NavLink;
