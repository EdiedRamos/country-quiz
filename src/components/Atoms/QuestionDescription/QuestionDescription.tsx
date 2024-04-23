import { useQuiz } from "@/hooks/useQuiz";

export const QuestionDescription = () => {
  const quizState = useQuiz();

  return (
    <p className="question__description">
      {quizState?.currentQuestion?.statement}
    </p>
  );
};
