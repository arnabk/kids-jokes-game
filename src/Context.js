import { createContext } from "react";

export const Context = createContext({
  questionNr: 0,
  checkAnswer: false,
  userAnswer: '',
  setQuestionNr: () => {},
  setCheckAnswer: () => {},
  setUserAnswer: () => {},
  score: 0,
  setScore: () => {},
});

export const Provider = Context.Provider;
