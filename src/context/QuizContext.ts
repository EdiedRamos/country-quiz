import { createContext } from "react";

interface QuizContext {}

export const QuizContext = createContext<QuizContext | undefined>(undefined);
