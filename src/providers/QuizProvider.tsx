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
  const [score, setScore] = useState<number>(0);
  const [correctAnswer, setCorrectAnswer] = useState<string>("");

  const handleSelectQuestion = (questionId: string) => {
    const findQuestion = questions.find((q) => q.id === questionId);
    if (!findQuestion) return;
    setCurrentQuestion(findQuestion);
    setCurrentQuestionId(findQuestion.id);
    setCorrectAnswer("");
  };

  const handleInitGame = () => {
    setScore(0);
    setCorrectAnswer("");
    QuizMaker.createQuestions(10).then((quiz) => {
      if (!quiz) return;
      setQuestions(quiz);
      setCurrentQuestionId(quiz[0].id);
      setCurrentQuestion(quiz[0]);
    });
  };

  const handleVerifyAnswer = (answerId: string) => {
    if (!currentQuestion) return;

    setAnsweredQuestion((prev) => [...prev, currentQuestion.id]);
    setCorrectAnswer(currentQuestion.correct);
    setScore((prev) => prev + (currentQuestion.correct === answerId ? 1 : 0));
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
    score,
    correctAnswer,
    onSelectedQuestion: handleSelectQuestion,
    onAnswer: handleVerifyAnswer,
  };

  return <QuizContext.Provider value={values}>{children}</QuizContext.Provider>;
};
