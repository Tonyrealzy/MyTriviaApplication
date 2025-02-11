import { Box } from "@chakra-ui/react";
import React from "react";
import LandingContent from "../components/landingContent/LandingContent";

const LandingPage: React.FC = () => {
  return (
    <Box position={'relative'}>
      <LandingContent />
    </Box>
  );
};

export default LandingPage;
