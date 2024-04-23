import { QuizProvider } from "@/providers/QuizProvider";

import "./Quiz.scss";
import { PageManager } from "../PageManager";

export const Quiz = () => {
  return (
    <section className="quiz">
      <QuizProvider>
        <PageManager />
      </QuizProvider>
    </section>
  );
};
