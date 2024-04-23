import { useQuiz } from "@/hooks/useQuiz";
import "./Pagination.scss";
import { PaginationButon } from "@/components/Atoms";

type PaginationProps = {
  className?: string;
};

export const Pagination = ({ className }: PaginationProps) => {
  const quizState = useQuiz();

  return (
    <div className={`pagination ${className}`}>
      {quizState?.questions.map((question, index) => (
        <PaginationButon key={question.id} questionId={question.id}>
          {index + 1}
        </PaginationButon>
      ))}
    </div>
  );
};
