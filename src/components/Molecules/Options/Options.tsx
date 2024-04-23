import { Button } from "@/components/Atoms";

import { CheckRound, CloseRound } from "@/assets";

import "./Options.scss";
import { useQuiz } from "@/hooks/useQuiz";

type OptionsProps = {
  className?: string;
};

const renderCorrect = (condition: boolean) =>
  condition && <img src={CheckRound} />;

const renderIncorrect = (condition: boolean) =>
  condition && <img src={CloseRound} />;

export const Options = ({ className }: OptionsProps) => {
  const quizState = useQuiz();

  return (
    <div className={`options ${className}`}>
      {quizState?.currentQuestion?.options.map((option, index) => (
        <Button className={""} key={option.id}>
          {option.content}
        </Button>
      ))}
    </div>
  );
};
