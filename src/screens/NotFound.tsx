import React from "react";
import LayeredBackground from "./layers/LayeredBackground";
import { GameBg } from "../assets/images";
import { Container, Flex, Button, Text } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

const NotFound: React.FC = () => {
  const navigate = useNavigate();
  return (
    <LayeredBackground url={`${GameBg}`}>
      <Container
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
        h="full"
        w="100%"
      >
        <Text fontWeight="bold" fontSize="4xl" color="snowWhite">
          Sorry, the page you are looking for does not exist.
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
          onClick={() => navigate("/")}
        >
          Back to Home
        </Button>
      </Container>
    </LayeredBackground>
  );
};

export default NotFound;
