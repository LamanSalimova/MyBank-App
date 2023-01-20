import { Box, Flex, Img, Stack, Text } from "@chakra-ui/react";
import React from "react";
import Button from "./Button";
import { card } from "../assets";
export default function CardDeals() {
  return (
    <Flex
      as="section"
      flexDirection={{ base: "column", md: "row", xl: "row" }}
      py={[16, 6, 6]}
    >
      <Stack flex="1" justify="center" align="start">
        <Text
          as="h2"
          fontFamily="poppins"
          fontWeight="500"
          color="#FFF"
          width="full"
          fontSize={{ base: "40px", md: "48px" }}
          lineHeight={{ base: "67px", md: "77px" }}
        >
          Find a better card deal <br className="sm:block hidden" /> in few easy
          steps.
        </Text>
        <Text
          as="p"
          fontFamily="poppins"
          fontSize="18px"
          color="#696969"
          maxWidth="470px"
          mt={5}
        >
          Arcu tortor, purus in mattis at sed integer faucibus. Aliquet quis
          aliquet eget mauris tortor.ç Aliquet ultrices ac, ametau.
        </Text>
        <Button />
      </Stack>
      <Flex
        flex="1"
        position="relative"
        mr={{ base: 0, md: 10 }}
        mt={{ base: 10, md: 0 }}
      >
        <Img src={card} alt="card" width="100%" height="100%" />
      </Flex>
    </Flex>
  );
}
