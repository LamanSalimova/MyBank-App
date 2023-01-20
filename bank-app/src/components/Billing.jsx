import { Flex, Img, Box, Stack, Text } from "@chakra-ui/react";
import React from "react";
import { apple, bill, google } from "../assets";
export default function Billing() {
  return (
    <Flex
      as="section"
      id="product"
      flexDirection={{ base: "column-reverse", md: "row" }}
      py={{ base: 16, md: 6 }}
    >
      <Flex
        flex="1"
        position="relative"
        mr={{ base: 0, md: 10 }}
        mt={{ base: 10, md: 0 }}
      >
        <Img
          src={bill}
          alt="billing"
          width="100%"
          height="100%"
          position="relative"
          zIndex={5}
        />
        <Box
          position="absolute"
          zIndex={3}
          left="50%"
          className="white__gradient"
          width="50%"
          height="50%"
          borderRadius="50%"
        ></Box>
        <Box
          position="absolute"
          zIndex={0}
          bottom="0"
          className="pink__gradient"
          width="50%"
          height="50%"
          borderRadius="50%"
        ></Box>
      </Flex>
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
          Easily control your <br className="sm:block hidden" /> billing &
          invoicing
        </Text>
        <Text
          as="p"
          fontFamily="poppins"
          fontSize="18px"
          color="#696969"
          maxWidth="470px"
          mt={5}
        >
          Elit enim sed massa etiam. Mauris eu adipiscing ultrices ametodio
          aenean neque. Fusce ipsum orci rhoncus aliporttitor integer platea
          placerat.
        </Text>
        <Flex flexWrap="wrap" mt={10}>
          <Img
            src={apple}
            alt="google_play"
            mt={5}
            mr={5}
            cursor="pointer"
            width="129px"
            height="43px"
            objectFit="contain"
          />
          <Img
            src={google}
            alt="google_play"
            cursor="pointer"
            width="144px"
            height="44px"
            mt={5}
            objectFit="contain"
          />
        </Flex>
      </Stack>
    </Flex>
  );
}
