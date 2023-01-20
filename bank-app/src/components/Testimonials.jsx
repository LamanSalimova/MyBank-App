import { Flex, Stack, Box, Text } from "@chakra-ui/react";
import React from "react";
import { FeedbackCard } from ".";
import { feedback } from "../constants/featureData";
// import { FeedbackCard } from "./FeedbackCard";
export default function Testimonials() {
  return (
    <Stack id="clients" justify="center" align="center" py={[16, 6, 6]}>
      <Box
        position="absolute"
        bottom={40}
        right="0"
        zIndex={0}
        width="30%"
        height="30%"
        borderRadius="50%"
        className="blue__gradient"
      />
      <Flex
        justify="space-between"
        align="center"
        width="full"
        flexDirection={{ base: "column", md: "row", xl: "row" }}
        mb={[16, 6, 6]}
        position="relative"
        zIndex="1"
      >
        <Text
          as="h2"
          fontFamily="poppins"
          fontWeight="600"
          color="#FFF"
          width="full"
          fontSize={{ base: "40px", md: "48px" }}
          lineHeight={{ base: "67px", md: "77px" }}
        >
          What People are <br className="sm:block hidden" /> saying about us
        </Text>
        <Box width="full" mt={[6, 0, 0]}>
          <Text
            as="p"
            fontFamily="poppins"
            fontSize="18px"
            color="#F8F8F8"
            maxWidth="450px"
            mt={5}
          >
            Everything you need to accept card payments and grow your business
            anywhere on the planet.
          </Text>
        </Box>
      </Flex>
      <Flex
        flexWrap="wrap"
        justify={{ base: "start", md: "center", xl: "center" }}
        width="full"
        position="relative"
        zIndex="1"
        className="feedback-container"
      >
        {feedback.map((card) => (
          <FeedbackCard key={card.id} {...card} />
        ))}
      </Flex>
    </Stack>
  );
}
