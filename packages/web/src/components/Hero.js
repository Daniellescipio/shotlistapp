import React from "react";
import {
  VStack,
  Stack,
  Center,
  Icon,
  Heading,
  Button,
  Spacer,
} from "@chakra-ui/react";
import { ReactComponent as SlateIcon } from "../assets/slate-icon.svg";
import { IoPersonAdd } from "react-icons/io5";
import HeroImage from "../assets/hero-image.webp";

const Hero = () => {
  return (
    <Center
      h="50vh"
      bgImage={`url('${HeroImage}')`}
      bgPosition="center"
      bgRepeat="no-repeat"
      bgSize="cover"
      p={[5, 10, 50, 100]}
    >
      <VStack
        spacing={100}
        w="100%"
        maxW="80em"
        align={[null, null, null, "start"]}
      >
        <Heading>
          Keep your film or photography projects organized with Shot List Pro!
        </Heading>
        <Buttons />
      </VStack>
    </Center>
  );
};

const Buttons = () => (
  <Stack
    w={[null, null, null, "100%"]}
    direction={["column", null, "row"]}
    align="start"
  >
    <Button variant="primary" leftIcon={<Icon as={SlateIcon} boxSize={8} />}>
      Create a New Production
    </Button>
    <Spacer d={[null, null, null, null, "none"]} />
    <Button variant="primary" leftIcon={<Icon as={IoPersonAdd} boxSize={8} />}>
      Create a New Contact
    </Button>
  </Stack>
);

export default Hero;
