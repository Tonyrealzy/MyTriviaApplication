import {
  Box,
  Collapsible,
  Flex,
  HStack,
  IconButton,
  Link,
  Text,
  useBreakpointValue,
  useDisclosure,
  VStack,
} from "@chakra-ui/react";
import React from "react";
import HamburgerIcon from "../../assets/svgs/HamburgerIcon";
import CloseIcon from "../../assets/svgs/CloseIcon";

export interface Height {
  height: string;
}
const Navbar: React.FC<Height> = ({ height }) => {
  const isMobile = useBreakpointValue({ base: true, md: false });
  const { open, onToggle } = useDisclosure();

  return (
    <Box
      as="nav"
      w="100%"
      h={height}
      bg="tealBlue"
      px={{ base: 0, md: 24 }}
      color="whitesmoke"
      alignContent="center"
      justifyContent={"center"}
      position="fixed"
      top={0}
    >
      <Collapsible.Root>
        {isMobile ? (
          <Flex justify="space-between" alignItems="center" w="100%">
            <Collapsible.Trigger>
              <IconButton
                aria-label="Open Menu"
                variant="outline"
                bg="orange"
                onClick={onToggle}
              >
                {open ? (
                  <CloseIcon width={10} height={10} />
                ) : (
                  <HamburgerIcon width={10} height={10} />
                )}
              </IconButton>
            </Collapsible.Trigger>
            <Text
              fontSize="28px"
              fontWeight="bold"
              color="orange"
              fontStyle="italic"
              px={4}
            >
              TrivQuest
            </Text>
          </Flex>
        ) : (
          <Flex justify="space-between" w="100%">
            <Text
              fontSize="28px"
              fontWeight="bold"
              color="orange"
              fontStyle="italic"
            >
              TrivQuest
            </Text>
            <HStack gap={12}>
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
            </HStack>
          </Flex>
        )}

        {isMobile && (
          <Collapsible.Content>
            <VStack
              bg="transparent"
              gap={4}
              px={{ base: 0, md: 4 }}
              position={"absolute"}
              zIndex={"4"}
              h={"100vh"}
              w={"100vw"}
              shadow="lg"
              rounded="md"
              display={open ? "flex" : "none"}
              justifyContent={"center"}
            >
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
            </VStack>
          </Collapsible.Content>
        )}
      </Collapsible.Root>
    </Box>
  );
};

export default Navbar;
