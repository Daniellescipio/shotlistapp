import React, { useRef } from "react";
import { Link } from "react-router-dom";
import {
  Center,
  HStack,
  VStack,
  Spacer,
  Button,
  IconButton,
  Image,
  useBreakpointValue,
  useDisclosure,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  DrawerHeader,
  DrawerBody,
} from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";
import ShotListLogo from "../assets/logo.svg";

const Header = () => {
  return (
    <Center bg="black" px={[5, 10, 50, 100]}>
      <HStack w={"100%"} maxW="80em" py={5}>
        <Logo />
        <Spacer />
        <NavBar />
      </HStack>
    </Center>
  );
};

const Logo = () => {
  return <Image src={ShotListLogo} />;
};

const NavBar = () => {
  const showHamburger = useBreakpointValue({ base: true, md: false });
  const { isOpen, onOpen, onClose } = useDisclosure();
  const buttonRef = useRef();
  if (showHamburger)
    return (
      <>
        <IconButton
          aria-label="Open Menu"
          icon={<HamburgerIcon />}
          ref={buttonRef}
          onClick={onOpen}
        />
        <Drawer
          isOpen={isOpen}
          placement="right"
          onClose={onClose}
          finalFocusRef={buttonRef}
        >
          <DrawerOverlay>
            <DrawerContent bg="black">
              <DrawerCloseButton />
              <DrawerHeader></DrawerHeader>

              <DrawerBody>
                <VStack spacing={5} align="end" py={50}>
                  <NavLink>Add New Production</NavLink>
                  <NavLink>Current Production</NavLink>
                  <NavLink>Contact List</NavLink>
                </VStack>
              </DrawerBody>
            </DrawerContent>
          </DrawerOverlay>
        </Drawer>
      </>
    );
  return (
    <HStack spacing={[null, null, null, null, 10]}>
      <NavLink to="#">Add New Production</NavLink>
      <NavLink to="#">Current Production</NavLink>
      <NavLink to="#">Contact List</NavLink>
    </HStack>
  );
};

const NavLink = ({ children, ...rest }) => {
  return (
    <Link {...rest}>
      <Button variant="outline-highlight">{children}</Button>
    </Link>
  );
};

export default Header;
