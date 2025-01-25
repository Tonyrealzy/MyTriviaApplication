import React from "react";
import { Box, Container } from "@chakra-ui/react";

interface LinkProps {
  url: string;
  children: React.ReactNode;
}

const LayeredBackground: React.FC<LinkProps> = ({ url, children }) => {
  return (
    <Box w="100%" h="100vh" position="relative" overflow-x="hidden">
      <Box
        bgImage={`url(${url})`}
        backgroundSize="cover"
        backgroundPosition="center"
        backgroundRepeat="no-repeat"
        display="flex"
        justifyContent="left"
        alignItems="center"
        width="100%"
        height="100%"
        position="absolute"
        top="0"
        left="0"
        zIndex="1"
      />
      <Box
        bg="rgba(0, 0, 0, 0.6)"
        zIndex="2"
        width="100%"
        height="100%"
        position="absolute"
        top="0"
        left="0"
      />
      <Container
        w="100%"
        px={4}
        alignItems="center"
        justifyContent="space-evenly"
        position="fixed"
        display="flex"
        gap={8}
        top="25%"
        zIndex="3"
      >
        {children}
      </Container>
    </Box>
  );
};

export default LayeredBackground;
