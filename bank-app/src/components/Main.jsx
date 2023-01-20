import React from "react";
import { Flex, Img, Text, Box } from "@chakra-ui/react";
import { discount, robot } from "../assets";
import GetStarted from "./GetStarted";
export default function Main() {
  return (
    <Box
      as="section"
      id="home"
      display="flex"
      flexDirection={{ base: "column", md: "row", xl: "row" }}
      py={{ base: 16, md: 6, xl: 6 }}
    >
      <Flex
        flex="1"
        justify="center"
        alignItems="start"
        flexDirection="column"
        px={{ base: 16, md: 6, xl: 0 }}
      >
        <Flex
          alignItems="center"
          px={4}
          py="6px"
          mb={2}
          borderRadius="10px"
          bg=" linear-gradient(360deg, #1C1C1C 30%, #494949 360%)"
        >
          <Img src={discount} alt="discount" width="32px" height="32px" />
          <Text as="p" fontSize="18px" color="#696969">
            {" "}
            <Text as="span" color="#FFF">
              20%
            </Text>{" "}
            Discount for{" "}
            <Text as="span" color="#FFF">
              1 Month{" "}
            </Text>
            Account
          </Text>
        </Flex>
        <Flex justifyContent="space-between" alignItems="center" width="full">
          <Text
            as="h1"
            fontSize="52px"
            fontWeight="600"
            color="#FFF"
            fontFamily="poppins"
            flex="1"
          >
            The Next <br />
            <Text as="span" className="text-gradient">
              Generation <br />
            </Text>{" "}
          </Text>
          <Box
            mr={{ base: 0, md: 4, xl: 4 }}
            display={{ base: "none", md: "block", xl: "block" }}
          >
            <GetStarted />
          </Box>
        </Flex>
        <Text
          as="h1"
          fontSize="52px"
          fontWeight="600"
          color="#FFF"
          fontFamily="poppins"
        >
          Payment Method.
        </Text>
        <Text
          as="p"
          mt={5}
          maxW="470px"
          fontFamily="poppins"
          fontSize="18px"
          color="#696969"
        >
          {" "}
          Our team of experts uses a methodology to identify the credit cards
          most likely to fit your needs. We examine annual percentage rates,
          annual fees.
        </Text>
      </Flex>
      <Flex
        position="relative"
        my={{ base: 10, md: 0 }}
        justifyContent="center"
        alignItems="center"
        flex="1"
      >
        <Img
          ml={20}
          src={robot}
          alt="billing"
          position="relative"
          z-index="5"
          width="70%"
          height="100%"
        />
        <Box
          width="40%"
          height="35%"
          position="absolute"
          top="0"
          z-index={0}
          className="pink__gradient"
        />
        <Box
          width="80%"
          height="80%"
          position="absolute"
          bottom={40}
          borderRadius="50%"
          z-index={1}
          className="white__gradient"
        />
        <Box
          width="50%"
          height="50%"
          position="absolute"
          right={20}
          bottom={20}
          z-index={0}
          className="blue__gradient"
        ></Box>
      </Flex>
      <Box margin="0 auto" display={{ base: "block", md: "none", xl: "none" }}>
        <GetStarted />
      </Box>
    </Box>
  );
}
