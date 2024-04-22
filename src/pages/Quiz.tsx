import { QuizMaker } from "@/services";
import { useEffect } from "react";

export const Quiz = () => {
  useEffect(() => {
    QuizMaker.createQuestions(10).then((quiz) => console.log({ quiz }));
  }, []);

  return <div>Quiz</div>;
};
