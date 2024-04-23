import { Question, Result } from "@/components/Organisms";
import { useQuiz } from "@/hooks/useQuiz";

export const PageManager = () => {
  const quizState = useQuiz();

  if (!quizState) return <></>;

  return quizState.answeredQuestion.length === quizState.questions.length &&
    quizState.questions.length > 0 ? (
    <Result />
  ) : (
    <Question />
  );
};
