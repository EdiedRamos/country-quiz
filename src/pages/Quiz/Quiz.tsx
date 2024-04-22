import { useEffect } from "react";

import { QuizMaker } from "@/services";

import "./Quiz.scss";

import { Question } from "@/components/Organisms";

export const Quiz = () => {
  useEffect(() => {
    QuizMaker.createQuestions(10).then((quiz) => console.log({ quiz }));
  }, []);

  return (
    <section className="quiz">
      <Question />
    </section>
  );
};
