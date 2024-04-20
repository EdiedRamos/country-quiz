import { QuizContext } from "@/context";

interface QuizProviderProps {
  children: React.ReactNode;
}

export const QuizProvider = ({ children }: QuizProviderProps) => {
  return (
    <QuizContext.Provider value={undefined}>{children}</QuizContext.Provider>
  );
};
