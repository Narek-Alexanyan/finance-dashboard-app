import { ReactNode } from "react";
import Flex from "../ui/Flex";
import Box from "../ui/Box";
import Typography from "../ui/Typography";

type Props = {
  title: string;
  subtitle?: string;
  sideText?: string;
  icon?: ReactNode;
};

const BoxHeader = ({ icon, title, subtitle, sideText }: Props) => {
  return (
    <Flex justify="between" align="center" className="mt-4 mx-4">
      <Flex>
        {icon}
        <Box className="w-full">
          <Typography variant="h4" color="text-gray-400">{title}</Typography>
          <Typography variant="h6" color="text-gray-400">{subtitle}</Typography>
        </Box>
      </Flex>
      <Typography variant="h5" weight="font-bold" color="text-secondary-500">{sideText}</Typography>
    </Flex>
  );
};

export default BoxHeader;
