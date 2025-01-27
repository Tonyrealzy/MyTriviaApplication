import { Container, Text } from "@chakra-ui/react";
import React from "react";

const LeftSection: React.FC = () => {
  return (
    <Container w={{ base: "100%", md: "50%" }}>
      <Text
        fontWeight="bold"
        fontSize={{ base: "3xl", md: "5xl", lg: "6xl"  }}
        color="snowWhite"
        lineHeight={1}
      >
        Test Your Knowledge!
      </Text>
      <Text fontSize={{ base: "md", md: "xl" }} color="snowWhite" py={8}>
        Welcome to TrivQuest, the ultimate trivia platform where knowledge and
        fun collide. Challenge yourself across various topics and test your
        skills!
      </Text>
    </Container>
  );
};

export default LeftSection;
