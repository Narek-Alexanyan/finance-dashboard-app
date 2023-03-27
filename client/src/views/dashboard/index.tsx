import DashboardBox from "@/component/dashboard/DashboardBox";
import Box from "@/component/ui/Box";
import useMediaQuery from "@/hooks/useMediaQuery";
import classNames from "@/utils/ClassesUtils";

type Props = {};

const index = (props: Props) => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const matches = useMediaQuery("(min-width: 1023px)");

  return (
    <Box
      className={classNames(
        "h-full container py-5 grid grid-areas-dashboard-layout gap-6 lg:grid-areas-dashboard-layout-slim  lg:auto-cols-dashboard-layout-responsive lg:auto-rows-dashboard-layout-responsive",
        matches && "grid-cols-dashboard-layout grid-rows-dashboard-layout"
      )}
    >
      <DashboardBox className="grid-in-a"></DashboardBox>
      <DashboardBox className="grid-in-b"></DashboardBox>
      <DashboardBox className="grid-in-c"></DashboardBox>
      <DashboardBox className="grid-in-d"></DashboardBox>
      <DashboardBox className="grid-in-e"></DashboardBox>
      <DashboardBox className="grid-in-f"></DashboardBox>
      <DashboardBox className="grid-in-g"></DashboardBox>
      <DashboardBox className="grid-in-h"></DashboardBox>
      <DashboardBox className="grid-in-i"></DashboardBox>
      <DashboardBox className="grid-in-j"></DashboardBox>
    </Box>
  );
};

export default index;
