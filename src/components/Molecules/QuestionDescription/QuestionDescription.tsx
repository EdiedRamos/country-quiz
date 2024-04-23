import { useQuiz } from "@/hooks/useQuiz";
import { QuestionI } from "@/types";
import React from "react";
import { Image } from "@/components/Atoms";

const renderDescription = (
  question: QuestionI | null | undefined
): React.ReactNode => {
  if (!question) return "";

  const FLAG = "{__flag__}";
  if (!question.statement.includes(FLAG)) return question.statement;

  const parts = question.statement.split(FLAG);

  if (!question.image) return "";

  return (
    <span>
      {parts[0]} <Image src={question.image} /> {parts[1]}{" "}
    </span>
  );
};

export const QuestionDescription = () => {
  const quizState = useQuiz();

  return (
    <p className="question__description">
      {renderDescription(quizState?.currentQuestion)}
    </p>
  );
};
