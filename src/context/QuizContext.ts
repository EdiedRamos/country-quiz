import { createContext } from "react";

import type { QuestionI } from "@/types";

interface QuizContext {
  questions: QuestionI[];
  currentQuestion: QuestionI | null;
  currentQuestionId: string;
  answeredQuestion: string[];
  nextQuestion: number;
  score: number;
}

export const QuizContext = createContext<QuizContext | undefined>(undefined);
