import Link from "next/link";
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  IconButton,
  Flex,
  Box,
  Spacer,
} from "@chakra-ui/react";
import { FcMenu, FcHome } from "react-icons/fc";
import { FaMoneyBillWave } from "react-icons/fa";
import { BsSearch } from "react-icons/bs";
import { FiKey } from "react-icons/fi";

const Navbar = () => (
  <Flex p="2" borderBottom="1px" borderColor="gray.100">
    <Box fontSize="4xl" color="blue.400" fontWeight="bold">
      <Link href="/" paddingLeft="2">
        Reality
      </Link>
    </Box>
    <Spacer />
    <Box>
      <Menu>
        <MenuButton
          as={IconButton}
          icon={<FcMenu />}
          variant="outlined"
          color="red.400"
          fontSize="2xl"
        />
        <MenuList>
          <Link href="/" passHref>
            <MenuItem icon={<FcHome />} fontSize="2xl">
              {" "}
              Home{" "}
            </MenuItem>
          </Link>
          <Link href="/search" passHref>
            <MenuItem icon={<BsSearch color="blue" />} fontSize="2xl">
              {" "}
              Search{" "}
            </MenuItem>
          </Link>
          <Link href="/search?purpose=for-sale" passHref>
            <MenuItem icon={<FaMoneyBillWave color="green" />} fontSize="2xl">
              {" "}
              Buy Property{" "}
            </MenuItem>
          </Link>
          <Link href="/search?purpose=for-rent" passHref>
            <MenuItem icon={<FiKey color="orange" />} fontSize="2xl">
              {" "}
              Rent Property{" "}
            </MenuItem>
          </Link>
        </MenuList>
      </Menu>
    </Box>
  </Flex>
);

export default Navbar;
