import { Options, Pagination } from "@/components/Molecules";
import "./Question.scss";
import { QuestionDescription } from "@/components/Atoms";

export const Question = () => {
  return (
    <section className="question">
      <h3 className="question__title">Country Quiz</h3>
      <Pagination className="question__pagination" />
      <QuestionDescription />
      <Options className="question__options" />
    </section>
  );
};
