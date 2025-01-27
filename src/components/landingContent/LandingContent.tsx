import React from "react";
import { LandingPageBg } from "../../assets/images";
import LeftSection from "./LeftSection";
import RightSection from "./RightSection";
import LayeredBackground from "../../screens/layers/LayeredBackground";
import { Container } from "@chakra-ui/react";

const LandingContent: React.FC = ({}) => {
  const [category, setCategory] = React.useState<string[]>([]);
  const [difficulty, setDifficulty] = React.useState<string[]>([]);
  const [questionType, setQuestionType] = React.useState<string>("");

  return (
    <LayeredBackground url={`${LandingPageBg}`}>
      <Container display={"flex"} flexDirection={{ base: "column", md: "row" }} overflowX={"hidden"} >
        <LeftSection />
        <RightSection
          category={category}
          difficulty={difficulty}
          questionType={questionType}
          setCategory={setCategory}
          setDifficulty={setDifficulty}
          setQuestionType={setQuestionType}
        />
      </Container>
    </LayeredBackground>
  );
};

export default LandingContent;
