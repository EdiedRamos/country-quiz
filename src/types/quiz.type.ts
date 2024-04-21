export interface QuestionI {
  id: string;
  statement: string;
  options: Array<string>;
}

export type QuestionsType = Array<QuestionI>;
