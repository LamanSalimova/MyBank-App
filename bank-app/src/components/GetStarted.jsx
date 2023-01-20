import React from "react";
import { Flex, Img, Text, Stack } from "@chakra-ui/react";
import { arrowUp } from "../assets";
export default function GetStarted() {
  return (
    <Flex
      justifyContent="center"
      alignItems="center"
      width="140px"
      height="140px"
      p="2px"
      cursor="pointer"
      borderRadius="50%"
      className="bg-blue-gradient"
    >
      <Stack
        justifyContent="center"
        alignItems="center"
        width="full"
        height="full"
        borderRadius="50%"
        bgColor="#01030F"
      >
        <Flex justifyContent="center" alignItems="start">
          <Flex fontFamily="poppins" fontSize="18px">
            <Text as="span" className="text-gradient" mr={2}>
              Get
            </Text>
            <Img
              src={arrowUp}
              alt="arrow"
              width="23px"
              height="23px"
              object="contain"
            />
          </Flex>
        </Flex>
        <Text as="p" fontFamily="poppins" fontSize="18px">
          <Text as="span" className="text-gradient">
            started
          </Text>
        </Text>
      </Stack>
    </Flex>
  );
}
