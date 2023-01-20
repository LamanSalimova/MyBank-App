import { Flex, Text, Stack, Img, Box } from "@chakra-ui/react";
import React from "react";
import Button from "./Button";
import { featureData } from "../constants/featureData";

const FeatureCard = ({ icon, title, content, index }) => (
  <Flex p={6} borderRadius="20px" mb={6} className="feature-card">
    <Flex
      width="64px"
      height="64px"
      borderRadius="50%"
      justify="center"
      align="center"
      bg="#0E2433"
    >
      <Img src={icon} alt="icon" object="contain" width="50%" height="50%" />
    </Flex>
    <Stack flex="1" ml={3}>
      <Text
        as="h4"
        fontFamily="poppins"
        fontSize="18px"
        fontWeight="500"
        color="#FFF"
        lineHeight="23px"
        mb={1}
      >
        {title}
      </Text>
      <Text
        as="p"
        fontFamily="poppins"
        fontSize="16px"
        color="#C7C7C7"
        lineHeight="24px"
        mb={1}
      >
        {content}
      </Text>
    </Stack>
  </Flex>
);

export default function Business() {
  return (
    <Flex
      as="section"
      id="features"
      flexDirection={{ base: "column", md: "row" }}
      py={{ base: 16, md: 6 }}
    >
      <Stack flex="1" justify="center" items="start">
        <Text
          as="h2"
          fontFamily="poppins"
          fontWeight="500"
          fontSize={{ base: "40px", md: "48px" }}
          color="#FFF"
        >
          You do the business, <br display={{ base: "none", md: "block" }} />{" "}
          we’ll handle the money.
        </Text>
        <Text
          as="p"
          fontFamily="poppins"
          fontSize="18px"
          color="#696969"
          maxWidth="470px"
          mt={5}
        >
          With the right credit card, you can improve your financial life by
          building credit, earning rewards and saving money. But with hundreds
          of credit cards on the market.
        </Text>
        <Button />
      </Stack>
      <Stack
        flex="1"
        justify="center"
        align="center"
        position="relative"
        ml={{ base: 0, md: 10 }}
        mt={{ base: 10, md: 0 }}
      >
        {featureData.map((feature, index) => (
          <FeatureCard key={feature.id} {...feature} index={index} />
        ))}
      </Stack>
    </Flex>
  );
}
