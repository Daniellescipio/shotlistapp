import React from "react";
import { Link } from "react-router-dom";
import { Center, HStack, Spacer, Button, Image } from "@chakra-ui/react";
import ShotListLogo from "../assets/logo.svg";

const Header = () => {
  return (
    <Center bg="black" px={100}>
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
  return (
    <HStack spacing={10}>
      <NavLink>Add New Production</NavLink>
      <NavLink>Current Production</NavLink>
      <NavLink>Contact List</NavLink>
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
