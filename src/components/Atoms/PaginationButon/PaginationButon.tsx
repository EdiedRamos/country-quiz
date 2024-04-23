import React from "react";

import "./PaginationButon.scss";
import { useQuiz } from "@/hooks/useQuiz";

type PaginationButtonProps = {
  children: React.ReactNode;
  questionId: string;
};

export const PaginationButon = ({
  children,
  questionId,
}: PaginationButtonProps) => {
  const quizState = useQuiz();

  const isDisabled: boolean =
    quizState?.answeredQuestion.includes(questionId) ?? false;

  return (
    <button
      disabled={isDisabled}
      onClick={() => quizState?.onSelectedQuestion(questionId)}
      className={`pagination__button ${
        questionId === quizState?.currentQuestionId
          ? "pagination__button--active"
          : ""
      } ${isDisabled ? "pagination__button--disabled" : ""}`}
    >
      {children}
    </button>
  );
};
