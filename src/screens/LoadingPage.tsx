import React from "react";
import LayeredBackground from "./layers/LayeredBackground";
import { GameBg } from "../assets/images";
import {
  ProgressCircleRing,
  ProgressCircleRoot,
} from "../components/ui/progress-circle";
import { Container } from "@chakra-ui/react";

const LoadingPage: React.FC = () => {
  return (
    <LayeredBackground url={`${GameBg}`}>
      <Container
        display="flex"
        justifyContent="center"
        alignItems="center"
        h="full"
        marginTop={20}
      >
        <ProgressCircleRoot value={null} size="lg" colorPalette="teal">
          <ProgressCircleRing cap="round" />
        </ProgressCircleRoot>
      </Container>
    </LayeredBackground>
  );
};

export default LoadingPage;
