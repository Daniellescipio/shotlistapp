import React from "react";
import {
  Box,
  Text,
  AspectRatio,
  Image,
  VStack,
  Heading,
  Spacer,
  HStack,
} from "@chakra-ui/react";
const MainContent = () => {
  return (
    <VStack>
      <Heading size="lg">Current Productions</Heading>
      <ProductionCard />
    </VStack>
  );
};

const ProductionCard = ({}) => {
  return (
    <Box
      boxShadow="dark-lg"
      w={64}
      h={48}
      borderRadius={14}
      bgColor="brand.primary"
      bgGradient="linear(to-b, brand.secondary, brand.primary)"
      // bgImage="url('https://images.unsplash.com/photo-1518929458119-e5bf444c30f4?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2467&q=80')"
      bgSize="cover"
    >
      <AspectRatio maxW="400px" ratio={16 / 9}>
        <Image
          borderTopRadius={14}
          objectFit="cover"
          src="https://images.unsplash.com/photo-1518929458119-e5bf444c30f4?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2467&q=80"
        />
      </AspectRatio>

      <Box w="full">
        <Text color="black" fontWeight="bold" align="left" fontSize="sm" px={4}>
          Production Title
        </Text>
        <HStack w="full" px={4}>
          <Text color="black" fontSize="sm">
            03/11/21
          </Text>
          <Spacer />
          <Text color="black" fontSize="sm">
            Scenes: 20
          </Text>
        </HStack>
      </Box>
    </Box>
  );
};

export default MainContent;
