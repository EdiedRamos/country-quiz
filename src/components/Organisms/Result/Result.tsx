import { CongratsImg } from "@/assets";
import { Button } from "@/components/Atoms";

export const Result = () => {
  return (
    <section>
      <img src={CongratsImg} alt="Congrats icon" />
      <h2>Congrats! You completed the quiz.</h2>
      <p>You answer 4/10 correctly</p>
      <Button>Play again</Button>
    </section>
  );
};
