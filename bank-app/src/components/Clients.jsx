import { Box, Flex, Img } from "@chakra-ui/react";
import React from "react";
import { clients } from "../constants/featureData";
export default function Clients() {
  return (
    <Flex as="section" my={4} justify="center" items="center">
      <Flex justify="center" items="center" width="full" flexWrap="wrap">
        {clients.map((client) => (
          <Flex
            key={client.id}
            flex="1"
            justify="center"
            items="center"
            minW={{ base: "192px", md: "120px", xl: "120px" }}
            m={5}
          >
            <Img
              src={client.logo}
              alt="clientLogo"
              objectFit="contain"
              width={{ base: "192px", md: "100px", xl: "100px" }}
            />
          </Flex>
        ))}
      </Flex>
    </Flex>
  );
}
