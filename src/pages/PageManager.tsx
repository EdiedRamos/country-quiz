import { Question, Result } from "@/components/Organisms";
import { useQuiz } from "@/hooks/useQuiz";

export const PageManager = () => {
  const x = useQuiz();

  // return <Result />;
  return <Question />;
};
