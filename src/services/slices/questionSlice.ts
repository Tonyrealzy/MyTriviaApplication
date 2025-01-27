import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface Question {
  category: string;
  correct_answer: string;
  difficulty: string;
  incorrect_answers: string[];
  question: string;
  type: string;
}

interface QuestionState {
  questions: Question[];
  currentIndex: number;
  score: number;
  apiCalled: boolean;
}

const initialState: QuestionState = {
  questions: [],
  currentIndex: 0,
  score: 0,
  apiCalled: false,
};

const questionSlice = createSlice({
  name: "questions",
  initialState,
  reducers: {
    setQuestions(state, action: PayloadAction<Question[]>) {
      state.questions = action.payload;
      state.currentIndex = 0;
      state.score = 0;
      state.apiCalled = true;
    },
    updateScore(state, action: PayloadAction<number>) {
      state.score += action.payload;
    },
    nextQuestion(state) {
      if (state.currentIndex < state.questions.length - 1) {
        state.currentIndex += 1;
      }
    },
    resetQuestions(state) {
      state.questions = [];
      state.currentIndex = 0;
      state.score = 0;
      state.apiCalled = false;
    },
  },
});

export default questionSlice.reducer;
export const { setQuestions, nextQuestion, resetQuestions, updateScore } =
  questionSlice.actions;
