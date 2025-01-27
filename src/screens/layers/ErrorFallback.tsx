import React from "react";
import { Box, Container, Button, Text } from "@chakra-ui/react";

const ErrorFallback: React.FC = () => {
  return (
    <Box bg="rgba(0, 0, 0, 0.6)" width="100vw" height="100vh">
      <Container
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
        color="snowWhite"
        h="100%"
        w="100%"
      >
        <Text fontWeight="bold" fontSize="4xl" color="white">
          Ooppsss! An error occurred...
        </Text>
        <Button
          bg="orange"
          border="2px solid"
          borderColor="orange"
          color="white"
          fontSize="lg"
          marginTop="30px"
          width="320px"
          height="50px"
          _focus={{
            backgroundColor: "transparent",
            borderColor: "snowWhite",
            color: "snowWhite",
            boxShadow: "none",
          }}
          _hover={{
            backgroundColor: "transparent",
            borderColor: "snowWhite",
            color: "snowWhite",
            boxShadow: "none",
          }}
          onClick={() => window.location.replace("/")}
        >
          Back to Home
        </Button>
      </Container>
    </Box>
  );
};

export default ErrorFallback;
