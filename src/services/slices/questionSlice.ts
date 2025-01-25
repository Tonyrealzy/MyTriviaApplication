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
}

const initialState: QuestionState = {
  questions: [],
  currentIndex: 0,
};

const questionSlice = createSlice({
  name: "questions",
  initialState,
  reducers: {
    setQuestions(state, action: PayloadAction<Question[]>) {
      state.questions = action.payload;
      state.currentIndex = 0;
    },
    nextQuestion(state) {
      if (state.currentIndex < state.questions.length - 1) {
        state.currentIndex += 1;
      }
    },
    resetQuestions(state) {
      state.questions = [];
      state.currentIndex = 0;
    },
  },
});

export default questionSlice.reducer;
export const { setQuestions, nextQuestion, resetQuestions } =
  questionSlice.actions;
