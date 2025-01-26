import { Container, Text } from "@chakra-ui/react";
import React from "react";

const LeftSection: React.FC = () => {
  return (
    <Container w="50%">
      <Text fontWeight="bold" fontSize="6xl" color="snowWhite" lineHeight={1}>
        Test Your Knowledge!
      </Text>
      <Text fontSize="xl" color="snowWhite" py={8}>
        Welcome to TrivQuest, the ultimate trivia platform where knowledge and
        fun collide. Challenge yourself across various topics and test your
        skills!
      </Text>
    </Container>
  );
};

export default LeftSection;
