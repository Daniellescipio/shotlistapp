import { Heading, Wrap, Box, Button, Icon, Text } from "@chakra-ui/react";
import ProductionCard from "../components/ProductionsCard";
import { ReactComponent as SlateIcon } from "../assets/slate-icon.svg";

const MainContent = () => {
  return (
    <Box paddingTop={10} paddingBottom={20}>
      <Heading
        py={8}
        px={100}
        size="lg"
        textTransform="uppercase"
        fontWeight="light"
      >
        Current Productions
      </Heading>

      <Wrap w="full" spacing={16} justify="center">
        <ProductionCard />
        <ProductionCard />
        <ProductionCard />
        <ProductionCard />
      </Wrap>
    </Box>
  );
};

const emptyState = () => {
  return (
    <Box>
      <Text>You don't have any active productions. Create one here.</Text>
      <Button variant="primary" leftIcon={<Icon as={SlateIcon} boxSize={8} />}>
        Create a New Production
      </Button>
    </Box>
  );
};

export default MainContent;
