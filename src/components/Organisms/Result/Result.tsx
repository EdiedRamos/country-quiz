import { CongratsImg } from "@/assets";
import { Button } from "@/components/Atoms";

import "./Result.scss";

export const Result = () => {
  return (
    <section className="result">
      <img src={CongratsImg} alt="Congrats icon" />
      <h2 className="result__congrats">Congrats! You completed the quiz.</h2>
      <p className="result__result">You answer 4/10 correctly</p>
      <Button className="button--selected result__play-again">
        Play again
      </Button>
    </section>
  );
};
