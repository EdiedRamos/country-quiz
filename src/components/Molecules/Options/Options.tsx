import { Button } from "@/components/Atoms";

import "./Options.scss";

type OptionsProps = {
  className?: string;
};

export const Options = ({ className }: OptionsProps) => {
  const options = ["Sweden", "Vietnam", "Malaysia", "Austria"];

  return (
    <div className={`options ${className}`}>
      {options.map((option) => (
        <Button key={option}>{option}</Button>
      ))}
    </div>
  );
};
