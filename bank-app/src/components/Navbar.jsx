import {
  Box,
  Flex,
  Img,
  List,
  ListItem,
  Link,
  Stack,
  Text,
} from "@chakra-ui/react";
// import { Link, Link as RouterLink } from "react-router-dom";
import React from "react";
import { useState } from "react";
import { logo, close, menu } from "../assets";

// import { navLinks } from "../constants";

export default function Navbar() {
  const [toggle, setToggle] = useState(false);
  return (
    <Flex
      width="full"
      py={6}
      justify="space-between"
      alignItems="center"
      className="navbar"
    >
      <Box width="140px" height="28px">
        <Text
          className="text-gradient"
          fontWeight="800"
          fontSize="32px"
          fontFamily="poppins"
        >
          MyBank
        </Text>
      </Box>
      <nav>
        <Box display={{ base: "none", md: "block", xl: "block" }}>
          <List
            color="#FFF"
            fontSize="16px"
            display="flex"
            justifyContent="end"
            alignItems="center"
            visibility={{ base: "hidden", md: "visible", xl: "visible" }}
          >
            <ListItem mr={10}>
              <Link to="#">Home</Link>
            </ListItem>
            <ListItem mr={10}>
              <Link to="#">Features</Link>
            </ListItem>
            <ListItem mr={10}>
              <Link to="#">Product</Link>
            </ListItem>
            <ListItem>
              <Link to="#">Clients</Link>
            </ListItem>
          </List>
        </Box>
        <Box display={{ base: "block", md: "none", xl: "none" }}>
          <Img src={toggle ? close : menu} onClick={() => setToggle(!toggle)} />
          <Box
            display={toggle ? "block" : "none"}
            p={6}
            // bg=" linear-gradient(360deg, #1C1C1C 30%, #494949 360%)"
            position="absolute"
            top={20}
            right={0}
            mx={4}
            my={2}
            minW="140px"
            color="#FFF"
            borderRadius={4}
            className="bg-black-gradient sidebar"
          >
            <Stack alignItems="center" justify="center">
              <List
                color="#FFF"
                fontSize="16px"
                display="flex"
                justifyContent="end"
                alignItems="center"
              >
                <Stack alignItems="center" justify="center">
                  <ListItem>
                    <Link to="#">Home</Link>
                  </ListItem>
                  <ListItem>
                    <Link to="#">Features</Link>
                  </ListItem>
                  <ListItem>
                    <Link to="#">Product</Link>
                  </ListItem>
                  <ListItem>
                    <Link to="#">Clients</Link>
                  </ListItem>
                </Stack>
              </List>
            </Stack>
          </Box>
        </Box>
      </nav>
    </Flex>
  );
}
