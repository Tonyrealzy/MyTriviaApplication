import { Flex, Link, Text } from "@chakra-ui/react";
import React from "react";

export interface Height {
  height: string;
}
const Navbar: React.FC<Height> = ({ height }) => {
  return (
    <Flex
      as="nav"
      w="100%"
      h={height}
      bg="tealBlue"
      px={24}
      py={4}
      color="whitesmoke"
      align="center"
      justify="space-between"
      position="fixed"
      top={0}
    >
      <Text fontSize="28px" fontWeight="bold" color="orange" fontStyle="italic">
        TrivQuest
      </Text>
      <Flex gap={12}>
        <Link
          fontSize="sm"
          fontWeight="bold"
          color="snowWhite"
          href="#"
          _active={{ color: "orange", textDecoration: "none" }}
          _focus={{ color: "orange", boxShadow: "none" }}
          _hover={{ color: "orange" }}
        >
          Trivia
        </Link>
        <Link
          fontSize="sm"
          fontWeight="bold"
          color="snowWhite"
          href="#"
          _active={{ color: "orange", textDecoration: "none" }}
          _focus={{ color: "orange", boxShadow: "none" }}
          _hover={{ color: "orange" }}
        >
          Quiz
        </Link>
        <Link
          fontSize="sm"
          fontWeight="bold"
          color="snowWhite"
          href="#"
          _active={{ color: "orange", textDecoration: "none" }}
          _focus={{ color: "orange", boxShadow: "none" }}
          _hover={{ color: "orange" }}
        >
          Contact Us
        </Link>
      </Flex>
    </Flex>
  );
};

export default Navbar;
