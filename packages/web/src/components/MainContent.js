import { Heading, Grid, Box, Button, Icon, Text } from "@chakra-ui/react";
import ProductionCard from "../components/ProductionsCard";
import { ReactComponent as SlateIcon } from "../assets/slate-icon.svg";
import { useContext, useEffect } from "react";
import { ProductionContext } from "../context/productionContext";
const MainContent = () => {
  const { productions, getAllProductions } = useContext(ProductionContext);

  useEffect(() => {
    getAllProductions();
  }, []);

  return (
    <Box paddingTop={10} paddingBottom={20}>
      <Heading
        py={8}
        px={{ base: 5, sm: 10, md: 50, xl: 100 }}
        size="lg"
        textTransform="uppercase"
        fontWeight="light"
      >
        Current Productions
      </Heading>

      <Grid
        templateColumns={{
          base: "repeat(auto-fit, 300px)",
          sm: "repeat(auto-fit, 360px)",
          md: "repeat(auto-fit, 460px)",
        }}
        gap={{ base: 10, md: 20, lg: 20 }}
        gridAutoFlow="row"
        justifyContent="center"
        w="full"
        justify={["center", "center", "start", "center"]}
        px={[5, 10, 50, 100]}
      >
        {productions.map(production => (
          <ProductionCard key={production._id} data={production} />
        ))}
      </Grid>
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
