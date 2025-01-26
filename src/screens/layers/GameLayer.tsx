import { Box } from "@chakra-ui/react";
import React from "react";

interface GameLayerProps {
  children: React.ReactElement;
}
const GameLayer: React.FC<GameLayerProps> = ({ children }) => {
  return (
    <Box
      h="400px"
      w="800px"
      backgroundColor="blackAlpha.700"
      mx="auto"
      display="flex"
      borderRadius={20}
      justifyItems="center"
      alignItems="center"
    >
      {children}
    </Box>
  );
};

export default GameLayer;
