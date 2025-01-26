import { Box, Button, Container, HStack, Text } from "@chakra-ui/react";
import React from "react";
import { useNavigate } from "react-router-dom";
import {
  SelectContent,
  SelectItem,
  SelectLabel,
  SelectRoot,
  SelectTrigger,
  SelectValueText,
} from "../ui/select";
import {
  categoryTypes,
  difficultyLevels,
  questionTypes,
} from "../../services/queryInputs";
import { Radio, RadioGroup } from "../ui/radio";
import { useLazyGetByParamsQuery } from "../../services/api/apiSlice";
import { toaster } from "../ui/toaster";
import { ProgressCircleRing, ProgressCircleRoot } from "../ui/progress-circle";
import { logger } from "../../services/logger";
import { useDispatch } from "react-redux";
import { setQuestions } from "../../services/slices/questionSlice";

interface RightSectionProps {
  category: string[];
  difficulty: string[];
  questionType: string;
  setCategory: React.Dispatch<React.SetStateAction<string[]>>;
  setDifficulty: React.Dispatch<React.SetStateAction<string[]>>;
  setQuestionType: React.Dispatch<React.SetStateAction<string>>;
}

const RightSection: React.FC<RightSectionProps> = ({
  category,
  difficulty,
  questionType,
  setCategory,
  setDifficulty,
  setQuestionType,
}) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [triggerQuery, { data, error, isLoading }] = useLazyGetByParamsQuery();

  if (error) {
    logger(error);
    toaster.create({
      title: "An error occurred while processing the request!",
      type: "error",
    });
  } else if (data?.results) {
    logger(data?.results);
    dispatch(setQuestions(data?.results));
    navigate("/start");
  }

  const handleStartClick = async () => {
    if (category.length === 0) {
      toaster.create({
        title: "Select a category of questions!",
        type: "error",
      });
    } else if (difficulty.length === 0) {
      toaster.create({
        title: "Select a difficulty level!",
        type: "error",
      });
    } else if (!questionType) {
      toaster.create({
        title: "Select a question type!",
        type: "error",
      });
    } else {
      triggerQuery({
        amount: "10",
        category: category[0],
        difficulty: difficulty[0],
        type: questionType,
      });
    }
  };

  return (
    <Container w="50%" color="snowWhite">
      <Box mb={4}>
        <SelectRoot
          collection={categoryTypes}
          size="sm"
          width="320px"
          value={category}
          onValueChange={(e) => {
            setCategory(e.value);
          }}
        >
          <SelectLabel>Choose a category:</SelectLabel>
          <SelectTrigger>
            <SelectValueText placeholder="Select a category" />
          </SelectTrigger>
          <SelectContent height="200px" overflow-y="scroll">
            {categoryTypes.items.map((type) => (
              <SelectItem item={type} key={type.value}>
                {type.key}
              </SelectItem>
            ))}
          </SelectContent>
        </SelectRoot>
      </Box>
      <Box mb={4}>
        <SelectRoot
          collection={difficultyLevels}
          size="sm"
          width="320px"
          value={difficulty}
          onValueChange={(e) => {
            setDifficulty(e.value);
          }}
        >
          <SelectLabel>Choose difficulty level:</SelectLabel>
          <SelectTrigger>
            <SelectValueText placeholder="Select difficulty" />
          </SelectTrigger>
          <SelectContent overflow-y="scroll">
            {difficultyLevels.items.map((level) => (
              <SelectItem item={level} key={level.value}>
                {level.label}
              </SelectItem>
            ))}
          </SelectContent>
        </SelectRoot>
      </Box>
      <Box mb={4}>
        <Text mb={2}>Question Type:</Text>
        <RadioGroup
          colorPalette="green"
          onValueChange={({ value }) => {
            setQuestionType(value);
          }}
        >
          <HStack gap="6">
            {questionTypes.map((type) => (
              <Radio key={type.value} value={type.value}>
                {type.label}
              </Radio>
            ))}
          </HStack>
        </RadioGroup>
      </Box>
      <Button
        bg="orange"
        border="2px solid"
        borderColor="orange"
        color="white"
        fontSize="lg"
        marginTop="15px"
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
        onClick={handleStartClick}
      >
        {isLoading ? (
          <ProgressCircleRoot value={null} size="xs">
            <ProgressCircleRing color="snowWhite" />
          </ProgressCircleRoot>
        ) : (
          "Start Now!"
        )}
      </Button>
    </Container>
  );
};

export default RightSection;
