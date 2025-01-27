import React from "react";
import {
  ProgressCircleRing,
  ProgressCircleRoot,
} from "../components/ui/progress-circle";
import { Container } from "@chakra-ui/react";

const LoadingPage: React.FC = () => {
  return (
      <Container
        display="flex"
        justifyContent="center"
        alignItems="center"
        h="100vh"
        w='100vw'
        marginTop={{base:4, md: 32}}
      >
        <ProgressCircleRoot value={null} size="lg" colorPalette="teal">
          <ProgressCircleRing cap="round" />
        </ProgressCircleRoot>
      </Container>
  );
};

export default LoadingPage;
