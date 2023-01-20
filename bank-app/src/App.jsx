import React from "react";
import styles from "./style";
import {
  Navbar,
  Statics,
  Business,
  Billing,
  CardDeals,
  Testimonials,
  Clients,
  ClickToAction,
  Main,
  Footer,
} from "./components";
import { Box, Flex } from "@chakra-ui/react";

export default function App() {
  return (
    <Box overflow="hidden" width="100%" bgColor="#01030F">
      <Flex
        justifyContent="center"
        alignItems="center"
        px={{ base: 16, md: 6, xl: 6 }}
      >
        <Box
          width={{ base: "full", md: "full", xl: "1280px" }}
          bgColor="#01030F"
        >
          <Navbar />
        </Box>
      </Flex>
      <Flex justifyContent="center" alignItems="start" bgColor="#01030F">
        <Box width={{ base: "full", md: "full", xl: "1280px" }}>
          <Main />
        </Box>
      </Flex>
      <Flex
        bgColor="#01030F"
        justifyContent="center"
        alignItems="start"
        px={{ base: 16, md: 6, xl: 6 }}
      >
        <Box width={{ base: "full", md: "full", xl: "1280px" }}>
          <Statics />
          <Business />
          <Billing />
          <CardDeals />
          <Testimonials />
          <Clients />
          <ClickToAction />
          <Footer />
        </Box>
      </Flex>
    </Box>
  );
}
