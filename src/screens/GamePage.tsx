import { Box, Button, Flex } from "@chakra-ui/react";
import React from "react";
import LayeredBackground from "./layers/LayeredBackground";
import { GameBg } from "../assets/images";
import GameLayer from "./layers/GameLayer";

const GamePage: React.FC = () => {
  return (
    <LayeredBackground url={`${GameBg}`}>
      <GameLayer>
        <>
        <Flex>My start page</Flex>
        <Button>Start Here</Button>
        </>
      </GameLayer>
    </LayeredBackground>
  );
};

export default GamePage;
