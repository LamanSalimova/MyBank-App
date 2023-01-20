import { Stack, Img, Text, Flex, Box } from "@chakra-ui/react";
import React from "react";
import { quotes } from "../assets";
export default function Feedback({ content, name, title, img }) {
  return (
    <Stack
      justify="space-between"
      px={10}
      py={12}
      borderRadius="20px"
      maxW="370px"
      mr={[5, 10, 0]}
      className="feedback-card"
    >
      <Img
        src={quotes}
        alt="double_quotes"
        width="42px"
        height="27px"
        objectFit="contain"
      />
      <Text
        as="p"
        fontSize="18px"
        lineHeight="32px"
        fontFamily="poppins"
        color="#FFF"
        my={10}
      >
        {content}
      </Text>
      <Flex>
        <Img
          src={img}
          alt={name}
          width="48px"
          height="48px"
          borderRadius="50%"
        />
        <Stack ml={4}>
          <Text
            as="h4"
            fontFamily="poppins"
            fontWeight="500"
            color="#FFF"
            fontSize="20px"
            lineHeight="32px"
          >
            {name}
          </Text>
          <Text
            as="h4"
            fontFamily="poppins"
            fontWeight="500"
            color="#696969"
            fontSize="16px"
            lineHeight="24px"
          >
            {title}
          </Text>
        </Stack>
      </Flex>
    </Stack>
  );
}
