import {
  Box,
  Text,
  AspectRatio,
  Image,
  Spacer,
  HStack,
} from "@chakra-ui/react";

const ProductionCard = ({ data: { name, thumbnail, scenes, startDate } }) => {
  const date = new Date(startDate).toLocaleString("en-US");

  return (
    <Box
      boxShadow="dark-lg"
      // maxw="460px"
      // maxh="320px"
      w={{ base: "300px", sm: "360px", md: "460px" }}
      h={{ base: "230px", sm: "260px", md: "320px" }}
      // w={["300px", "360px", "280px", null, "460px"]}
      // h={["230px", "260px", "210px", null, "320px"]}
      borderRadius={14}
      bgColor="brand.primary"
      bgGradient="linear(to-b, brand.secondary, brand.primary)"
      bgSize="cover"
    >
      <AspectRatio maxW="500px" ratio={16 / 9}>
        <Image borderTopRadius={14} objectFit="cover" src={thumbnail} />
      </AspectRatio>

      <Box w="full" paddingTop={2}>
        <Text color="black" fontWeight="bold" align="left" fontSize="sm" px={4}>
          {name}
        </Text>
        <HStack w="full" px={4}>
          <Text color="black" fontSize="sm">
            {date}
          </Text>
          <Spacer />
          <Text color="black" fontSize="sm">
            Scenes: {scenes.length}
          </Text>
        </HStack>
      </Box>
    </Box>
  );
};
export default ProductionCard;
