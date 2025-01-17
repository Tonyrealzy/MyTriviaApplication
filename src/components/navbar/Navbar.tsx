import { Box, Flex, Link } from "@chakra-ui/react";
import React from "react";
import { useColorMode, useColorModeValue } from "../ui/color-mode";

const Navbar: React.FC = () => {
  // const { toggleColor } = useColorMode();
  const bg = useColorModeValue('white', 'black');
  const color = useColorModeValue('black', 'white');

  return (
    <Box bg={bg} boxShadow="md">
      <Flex h={16} alignItems='center' justifyContent='space-between'>
        <Link fontSize='lg' fontWeight='bold' color={color} href="#">TrivQuest</Link>
        <Link fontSize='lg' fontWeight='bold' color={color} href="#">Trivia</Link>
        <Link fontSize='lg' fontWeight='bold' color={color} href="#">Quiz</Link>
      </Flex>
    </Box>
  );
};

export default Navbar;
