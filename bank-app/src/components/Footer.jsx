import {
  Flex,
  Stack,
  Text,
  Img,
  List,
  ListItem,
  Link,
  Box,
} from "@chakra-ui/react";
import React from "react";
// import { logo } from "../assets";
import { footerLinks, socialMedia } from "../constants/featureData";

export default function Footer() {
  return (
    <Stack
      as="section"
      justify="center"
      items="center"
      p={{ base: 6, md: 16, xl: 16 }}
    >
      <Flex
        mb={8}
        width="full"
        justify="center"
        align="center"
        flexDirection={{ base: "column", md: "row" }}
      >
        <Stack flex="1" justify="start" mr={10}>
          <Box width="266px" height="72px">
            <Text
              className="text-gradient"
              fontWeight="800"
              fontSize="32px"
              fontFamily="poppins"
            >
              MyBank
            </Text>
          </Box>
          <Text
            as="p"
            mt={4}
            fontFamily="poppins"
            fontSize="18px"
            color="#F8F8F8"
            maxWidth="310px"
          >
            {" "}
            A new wa to make the payments easy, reliable and secure.
          </Text>
        </Stack>
        <Flex
          flex="1.5"
          w="full"
          justify="space-between"
          flexWrap="wrap"
          mt={[10, 0]}
        >
          {footerLinks.map((footerLink) => (
            <Stack key={footerLink.key} my={[0, 4]} minW="150px">
              <Text as="h4" color="#F8F8F8" fontSize="18px" fontWeight="500">
                {footerLink.title}
              </Text>
              <List mt={4}>
                {footerLink.links.map((link, index) => (
                  <ListItem
                    key={link.name}
                    fontFamily="poppins"
                    fontSize="16px"
                    lineHeight="24px"
                    color="#F8F8F8"
                    _hover={{ color: "#3FBFD4" }}
                    mb={4}
                  >
                    <Link> {link.name}</Link>
                  </ListItem>
                ))}
              </List>
            </Stack>
          ))}
        </Flex>
      </Flex>

      <Flex
        w="full"
        justify="space-between"
        alignItems="center"
        flexDirection={{ base: "column", md: "row" }}
        pt={6}
        bt="1px solid #3F3E45"
      >
        <Text
          as="p"
          fontFamily="poppins"
          items="center"
          fontSize="18px"
          fontWeight="27px"
          color="#FFF"
        >
          {" "}
          Copyright Ⓒ 2022 MyBank. All Rights Reserved.
        </Text>
        {/* <Flex mt={[6, 0]}>
          {socialMedia.map((social) => (
            <Img
              key={social.id}
              src={social.icon}
              alt={social.icon}
              width="21px"
              height="21px"
              objectFit="contain"
              mr={6}
            />
          ))}
        </Flex> */}
      </Flex>
    </Stack>
  );
}
