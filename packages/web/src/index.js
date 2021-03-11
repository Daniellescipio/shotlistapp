import React from "react";
import { render } from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import App from "./components/App";

const theme = extendTheme({
  colors: {
    brand: {
      primary: "#FCC201",
      secondary: "#B78628",
    },
  },
  config: { initialColorMode: "dark" },
  components: {
    Button: {
      variants: {
        primary: {
          textTransform: "uppercase",
          py: 7,
          bgGradient: "linear(to-b, brand.secondary, brand.primary)",
          color: "black",
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
      <App />
    </ChakraProvider>
  </Router>
);

render(<Root />, document.getElementById("root"));
