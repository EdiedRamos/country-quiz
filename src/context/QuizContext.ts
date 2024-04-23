import { createContext } from "react";

import type { QuestionI } from "@/types";

interface QuizContext {
  questions: QuestionI[];
  currentQuestion: QuestionI | null;
  currentQuestionId: string;
  answeredQuestion: string[];
  score: number;
  correctAnswer: string;
  onSelectedQuestion: (questionId: string) => void;
  onAnswer: (answerId: string) => void;
  onRestart: () => void;
}

export const QuizContext = createContext<QuizContext | undefined>(undefined);
