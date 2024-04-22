import { Button } from "@/components/Atoms";

import { CheckRound, CloseRound } from "@/assets";

import "./Options.scss";

type OptionsProps = {
  className?: string;
};

const renderCorrect = (condition: boolean) =>
  condition && <img src={CheckRound} />;

const renderIncorrect = (condition: boolean) =>
  condition && <img src={CloseRound} />;

export const Options = ({ className }: OptionsProps) => {
  const options = ["Sweden", "Vietnam", "Malaysia", "Austria"];

  return (
    <div className={`options ${className}`}>
      {options.map((option, index) => (
        <Button className={index === 1 ? "button--selected" : ""} key={option}>
          {option} {renderCorrect(index === 3)}
          {renderIncorrect(index === 1)}
        </Button>
      ))}
    </div>
  );
};
