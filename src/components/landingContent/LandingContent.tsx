import React from "react";
import { LandingPageBg } from "../../assets/images";
import LeftSection from "./LeftSection";
import RightSection from "./RightSection";
import LayeredBackground from "../../screens/layers/LayeredBackground";

const LandingContent: React.FC = ({}) => {
  const [category, setCategory] = React.useState<string[]>([]);
  const [difficulty, setDifficulty] = React.useState<string[]>([]);
  const [questionType, setQuestionType] = React.useState<string>("");

  return (
    <LayeredBackground url={`${LandingPageBg}`}>
      <LeftSection />
      <RightSection
        category={category}
        difficulty={difficulty}
        questionType={questionType}
        setCategory={setCategory}
        setDifficulty={setDifficulty}
        setQuestionType={setQuestionType}
      />
    </LayeredBackground>
  );
};

export default LandingContent;
