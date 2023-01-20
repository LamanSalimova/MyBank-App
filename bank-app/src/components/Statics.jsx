import { Flex, Box, Text } from "@chakra-ui/react";
import React from "react";

export default function Statics() {
  return (
    <Flex
      as="section"
      mb={{ base: 20, md: 6, xl: 6 }}
      flexWrap="wrap"
      justify="center"
      align="center"
    >
      <Flex flex="1" justify="start" items="center" m={3}>
        <Text
          as="h4"
          fontFamily="poppins"
          color="#FFF"
          fontWeight="500"
          fontSize={{ base: "31px", md: "41px" }}
        >
          3800+
        </Text>
        <Text
          as="p"
          fontFamily="poppins"
          color="#FFF"
          fontWeight="500"
          fontSize={{ base: "16px", md: "21px" }}
          className="text-gradient"
          textTransform="uppercase"
          ml={3}
          mt={3}
        >
          User Active
        </Text>
      </Flex>
      <Flex flex="1" justify="start" items="center" m={3}>
        <Text
          as="h4"
          fontFamily="poppins"
          color="#FFF"
          fontWeight="500"
          fontSize={{ base: "31px", md: "41px" }}
        >
          230+
        </Text>
        <Text
          as="p"
          fontFamily="poppins"
          color="#FFF"
          fontWeight="500"
          fontSize={{ base: "16px", md: "21px" }}
          className="text-gradient"
          textTransform="uppercase"
          ml={3}
          mt={3}
        >
          Trusted by Company
        </Text>
      </Flex>
      <Flex flex="1" justify="start" items="center" m={3}>
        <Text
          as="h4"
          fontFamily="poppins"
          color="#FFF"
          fontWeight="500"
          fontSize={{ base: "31px", md: "41px" }}
        >
          $230M+
        </Text>
        <Text
          as="p"
          fontFamily="poppins"
          color="#FFF"
          fontWeight="500"
          fontSize={{ base: "16px", md: "21px" }}
          className="text-gradient"
          textTransform="uppercase"
          ml={3}
          mt={3}
        >
          Transaction
        </Text>
      </Flex>
    </Flex>
  );
}
