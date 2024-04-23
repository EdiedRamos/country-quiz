import { Question, Result } from "@/components/Organisms";
import { useQuiz } from "@/hooks/useQuiz";

export const PageManager = () => {
  const quizState = useQuiz();

  return quizState?.answeredQuestion.length === quizState?.questions.length ? (
    <Result />
  ) : (
    <Question />
  );
};
