import { ReactNode } from "react";
import Box from "../ui/Box";
import classNames from "@/utils/ClassesUtils";

type Props = {
  children?: ReactNode;
  className?: string;
};

const DashboardBox = ({ children, className }: Props) => {
  return (
    <Box
      className={classNames(
        "bg-background-light rounded-2xl shadow-dashboard-box-shadow shadow-black/80",
        className
      )}
    >
      {children}
    </Box>
  );
};

export default DashboardBox;
