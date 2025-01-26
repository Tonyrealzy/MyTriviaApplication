import {
  Button,
  Container,
  Flex,
  HStack,
  Stack,
  Text,
  VStack,
} from "@chakra-ui/react";
import React from "react";
import LayeredBackground from "./layers/LayeredBackground";
import { GameBg } from "../assets/images";
import GameLayer from "./layers/GameLayer";
import { useDispatch, useSelector } from "react-redux";
import { logger } from "../services/logger";
import { nextQuestion } from "../services/slices/questionSlice";
import {
  ProgressCircleRing,
  ProgressCircleRoot,
} from "../components/ui/progress-circle";

const GamePage: React.FC = () => {
  const dispatch = useDispatch();
  const { questions, currentIndex } = useSelector(
    (state: any) => state.questions
  );
  logger(questions, currentIndex);

  const handleNext = () => {
    dispatch(nextQuestion());
  };
  const capitalise = (string: String) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  return (
    <LayeredBackground url={`${GameBg}`}>
      <GameLayer>
        <Container color="snowWhite">
          <HStack justifyContent={"space-between"} m={6}>
            <VStack align={"start"}>
              <Text fontSize="lg" fontWeight="bold">
                Category: {questions[currentIndex]?.category}
              </Text>
              <Text>
                Difficulty: {capitalise(questions[currentIndex]?.difficulty)}{" "}
              </Text>
            </VStack>
            <VStack align={"start"} display={"flex"} justifyContent={"center"}>
              <Text fontWeight="bold">
                Question {currentIndex + 1} / {questions?.length}
              </Text>
              <Flex display={"flex"} justifyContent={"center"} w={"full"}>
                <ProgressCircleRoot
                  value={((currentIndex + 1) / questions?.length) * 100}
                  size="sm"
                >
                  <ProgressCircleRing color="teal" />
                </ProgressCircleRoot>
              </Flex>
            </VStack>
          </HStack>
        </Container>
      </GameLayer>
    </LayeredBackground>
  );
};

export default GamePage;
