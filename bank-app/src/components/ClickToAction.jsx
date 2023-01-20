import { Flex, Stack, Text } from "@chakra-ui/react";
import React from "react";
import Button from "./Button";
export default function ClickToAction() {
  return (
    <Flex
      as="section"
      justify="center"
      align="center"
      my={[6, 16, 16]}
      px={[6, 16, 16]}
      py={[4, 12, 12]}
      flexDirection={{ base: "column", md: "row", xl: "row" }}
      className="bg-black-gradient-2 box-shadow"
      borderRadius="20px"
    >
      <Stack flex={1}>
        <Text
          as="h2"
          fontFamily="poppins"
          fontWeight="500"
          color="#FFF"
          width="full"
          fontSize={{ base: "40px", md: "48px" }}
          lineHeight={{ base: "67px", md: "77px" }}
        >
          Let’s try our service now!
        </Text>
        <Text
          as="p"
          fontFamily="poppins"
          fontSize="18px"
          color="#696969"
          maxWidth="470px"
          mt={5}
        >
          Everything you need to accept card payments and grow your business
          anywhere on the planet.
        </Text>
      </Stack>
      <Flex justify="center" align="center" ml={[0, 10, 10]} mt={[10, 0, 0]}>
        <Button />
      </Flex>
    </Flex>
  );
}
