import React from "react";
import { Flex, Link } from "@chakra-ui/react";
export default function Button() {
  return (
    <Flex
      mt={10}
      py={4}
      px={6}
      className="bg-blue-gradient"
      fontFamily="poppins"
      fontSize="18px"
      color="#000"
      outline="none"
      maxW="200px"
      cursor="pointer"
      justify="center"
      align="centers"
      borderRadius="5px"
    >
      <Link to="#" style={{ textDecoration: "none" }}>
        {" "}
        Get Started
      </Link>
    </Flex>
  );
}
