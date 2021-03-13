import React from "react";
import { render } from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import App from "./components/App";
import { ProductionProvider } from "./context/productionContext";
const theme = extendTheme({
  colors: {
    brand: {
      primary: "#FCC201",
      secondary: "#B78628",
      darkGradDark: "#3D3D3D",
      darkGradLight: "#484848",
    },
  },
  config: { initialColorMode: "dark" },
  components: {
    Button: {
      variants: {
        primary: {
          textTransform: "uppercase",
          minWidth: "300px",
          py: 7,
          bgGradient: "linear(to-b, black, brand.darkGradDark)",
          color: "brand.primary",
          _hover: {
            bgGradient: "linear(to-b, black, brand.darkGradLight)",
          },
        },
        "outline-highlight": {
          textTransform: "uppercase",
          borderWidth: 3,
          borderRadius: 0,
          borderColor: "transparent",
          _hover: {
            borderColor: "brand.primary",
          },
        },
      },
    },
  },
});

const Root = () => (
  <Router>
    <ChakraProvider theme={theme}>
      <ProductionProvider>
        <App />
      </ProductionProvider>
    </ChakraProvider>
  </Router>
);

render(<Root />, document.getElementById("root"));
