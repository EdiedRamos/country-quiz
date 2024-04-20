import { useContext } from "react";

import { QuizContext } from "@/context";

export const useQuiz = () => {
  const context = useContext(QuizContext);
  if (!context) return;
  return context;
};
