import {
  Box,
  Button,
  Container,
  Flex,
  HStack,
  Text,
  VStack,
} from "@chakra-ui/react";
import { Radio, RadioGroup } from "../components/ui/radio";
import React from "react";
import LayeredBackground from "./layers/LayeredBackground";
import { GameBg } from "../assets/images";
import GameLayer from "./layers/GameLayer";
import { useDispatch, useSelector } from "react-redux";
import { logger } from "../services/logger";
import {
  nextQuestion,
  resetQuestions,
  updateScore,
} from "../services/slices/questionSlice";
import {
  ProgressCircleRing,
  ProgressCircleRoot,
} from "../components/ui/progress-circle";
import { toaster } from "../components/ui/toaster";
import { useNavigate } from "react-router-dom";
import { decodeHtml } from "../services/formatter/responseFormatter";

const GamePage: React.FC = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [options, setOptions] = React.useState<string[]>([]);
  const [optionChosen, setOptionChosen] = React.useState<string>("");
  const { questions, currentIndex, score } = useSelector(
    (state: any) => state.questions
  );
  logger("My Redux state: ", questions, currentIndex, score);

  const handleNext = () => {
    if (currentIndex >= 9) {
      if (score >= 5) {
        dispatch(resetQuestions());
        navigate("/");
        toaster.create({
          title: `You scored ${score} out of 10!`,
          type: "success",
        });
      } else {
        dispatch(resetQuestions());
        navigate("/");
        toaster.create({
          title: `You scored ${score} out of 10!`,
          type: "error",
        });
      }
    } else {
      if (optionChosen === questions[currentIndex]?.correct_answer) {
        toaster.create({
          title: "Correct answer!",
          type: "success",
        });
        dispatch(updateScore(1));
      } else if (optionChosen !== questions[currentIndex]?.correct_answer) {
        toaster.create({
          title: "Wrong answer!",
          type: "error",
        });
      }
      dispatch(nextQuestion());
      setOptionChosen("");
    }
  };
  const onQuit = () => {
    dispatch(resetQuestions());
    navigate("/");
  };

  const capitalise = (string: String) => {
    return string?.charAt(0).toUpperCase() + string?.slice(1);
  };

  React.useEffect(() => {
    const reshuffleOptions = (
      string: string,
      array: string[] = []
    ): string[] => {
      if (!Array.isArray(array)) {
        console.warn("Input is not an array. Defaulting to an empty array.");
        array = [];
      }
      const combined: string[] = [...array, string];
      for (let i = combined.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [combined[i], combined[j]] = [combined[j], combined[i]];
      }
      return combined;
    };

    const optionsToChooseFrom = reshuffleOptions(
      questions[currentIndex]?.correct_answer,
      questions[currentIndex]?.incorrect_answers
    );
    setOptions(optionsToChooseFrom);
  }, [currentIndex]);

  return (
    <LayeredBackground url={`${GameBg}`}>
      <GameLayer>
        <Container color="snowWhite">
          <HStack justifyContent={"space-between"} m={6}>
            <VStack
              align={"start"}
              flex={1}
              display={"flex"}
              justifyContent={"center"}
              w={"full"}
            >
              <Text fontSize="lg" fontWeight="bold">
                Category: {questions[currentIndex]?.category}
              </Text>
              <Text>
                Difficulty: {capitalise(questions[currentIndex]?.difficulty)}{" "}
              </Text>
            </VStack>
            <VStack
              align={"start"}
              display={"flex"}
              justifyContent={"center"}
              flex={1}
            >
              <Text
                fontWeight="bold"
                display={"flex"}
                justifyContent={"center"}
                w={"full"}
              >
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
            <VStack
              align={"start"}
              display={"flex"}
              justifyContent={"center"}
              flex={1}
            >
              <Text
                fontWeight="bold"
                display={"flex"}
                justifyContent={"center"}
                w={"full"}
              >
                Score
              </Text>
              <Flex display={"flex"} w={"full"} justifyContent={"center"}>
                <Text
                  border={"1px solid transparent"}
                  borderRadius={"50%"}
                  bg={"teal.800"}
                  color={"white"}
                  fontWeight="bold"
                  fontSize={"2xl"}
                  display={"flex"}
                  h={20}
                  w={20}
                  alignItems={"center"}
                  justifyContent={"center"}
                >
                  {score} / {questions?.length}
                </Text>
              </Flex>
            </VStack>
          </HStack>
          <Box p={6} borderWidth={1} borderRadius="lg" mb={6}>
            <Text fontSize="xl" fontWeight="bold">
              {decodeHtml(questions[currentIndex]?.question)}
            </Text>
            <RadioGroup
              colorPalette="green"
              defaultChecked={!optionChosen}
              defaultValue={""}
              onValueChange={({ value }) => {
                setOptionChosen(value);
              }}
              m={2}
            >
              <HStack gap={8}>
                {options.map((option, index) => (
                  <Radio key={index} value={option}>
                    {decodeHtml(option)}
                  </Radio>
                ))}
              </HStack>
            </RadioGroup>
          </Box>
          <HStack justify="space-between" w={"40%"} justifySelf={"center"}>
            <Button w={32} color="white" bg={"orange"} onClick={onQuit}>
              Quit
            </Button>
            <Button
              w={32}
              color="white"
              bg={"orange"}
              onClick={handleNext}
              disabled={!optionChosen}
            >
              {currentIndex < 10 ? "Submit" : "Next"}
            </Button>
          </HStack>
        </Container>
      </GameLayer>
    </LayeredBackground>
  );
};

export default GamePage;
