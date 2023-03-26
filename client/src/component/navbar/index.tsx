import Box from "../ui/Box";
import Flex from "../ui/Flex";
import Logo from "../icons/Logo";
import { Link } from "react-router-dom";
import NavLink from "./NavLink";
import Switcher from "../ui/Switcher";

type Props = {};

const Navbar = (props: Props) => {
  return (
    <Box className="border-b border-gray-100 py-4">
      <Flex className="container" justify="between" align="center">
        <Link to="/">
          <Logo />
        </Link>
        <Flex gap="4">
          <NavLink to="/">Dashboard</NavLink>
          <NavLink to="/predictions">Predictions</NavLink>
          <Switcher />
        </Flex>
      </Flex>
    </Box>
  );
};

export default Navbar;
