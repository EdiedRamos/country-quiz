import type { QuestionI } from "@/types";

import { useEffect, useState } from "react";

import { QuizContext } from "@/context";
import { QuizMaker } from "@/services";

interface QuizProviderProps {
  children: React.ReactNode;
}

export const QuizProvider = ({ children }: QuizProviderProps) => {
  const [questions, setQuestions] = useState<QuestionI[]>([]);
  const [currentQuestion, setCurrentQuestion] = useState<QuestionI | null>(
    null
  );
  const [currentQuestionId, setCurrentQuestionId] = useState<string>("");
  const [answeredQuestion, setAnsweredQuestion] = useState<string[]>([]);
  const [nextQuestion, setNextQuestion] = useState<number>(0);
  const [score, setScore] = useState<number>(0);

  const handleSelectQuestion = (questionId: string) => {
    const findQuestion = questions.find((q) => q.id === questionId);
    if (!findQuestion) return;
    setCurrentQuestion(findQuestion);
    setCurrentQuestionId(findQuestion.id);
  };

  const handleInitGame = () => {
    QuizMaker.createQuestions(10).then((quiz) => {
      if (!quiz) return;
      setQuestions(quiz);
      setCurrentQuestionId(quiz[0].id);
      setCurrentQuestion(quiz[0]);
    });
  };

  // set the questions
  useEffect(() => {
    handleInitGame();
  }, []);

  const values = {
    questions,
    currentQuestion,
    currentQuestionId,
    answeredQuestion,
    nextQuestion,
    score,
    onSelectedQuestion: handleSelectQuestion,
  };

  return <QuizContext.Provider value={values}>{children}</QuizContext.Provider>;
};
