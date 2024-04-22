import { Options, Pagination } from "@/components/Molecules";
import "./Question.scss";

export const Question = () => {
  return (
    <section className="question">
      <h3 className="question__title">Country Quiz</h3>
      <Pagination className="question__pagination" />
      <p className="question__description">
        Which country is Kuala Lumpur the capital?
      </p>
      <Options />
    </section>
  );
};
