import { CongratsImg } from "@/assets";
import { Button } from "@/components/Atoms";

import "./Result.scss";

export const Result = () => {
  return (
    <section className="result">
      <img src={CongratsImg} alt="Congrats icon" />
      <h2>Congrats! You completed the quiz.</h2>
      <p>You answer 4/10 correctly</p>
      <Button className="button--selected">Play again</Button>
    </section>
  );
};
