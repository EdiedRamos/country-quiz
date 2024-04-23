import { Button } from "@/components/Atoms";

import { CheckRound, CloseRound } from "@/assets";

import "./Options.scss";
import { useQuiz } from "@/hooks/useQuiz";
import { useState } from "react";

type OptionsProps = {
  className?: string;
};

const renderCorrect = (condition: boolean) =>
  condition && <img src={CheckRound} />;

const renderIncorrect = (condition: boolean) =>
  condition && <img src={CloseRound} />;

export const Options = ({ className }: OptionsProps) => {
  const quizState = useQuiz();

  const [selected, setSelected] = useState<string>("");

  return (
    <div className={`options ${className}`}>
      {quizState?.currentQuestion?.options.map((option) => (
        <Button
          disabled={quizState.correctAnswer !== ""}
          className={option.id === selected ? "button--selected" : ""}
          key={option.id}
          onClick={() => {
            quizState.onAnswer(option.id);
            setSelected(option.id);
          }}
        >
          {option.content}
          {renderCorrect(option.id === quizState.correctAnswer)}
          {renderIncorrect(
            option.id === selected && option.id !== quizState.correctAnswer
          )}
        </Button>
      ))}
    </div>
  );
};
