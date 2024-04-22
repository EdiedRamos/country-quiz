import type { Country } from "./countryApi.type";

export enum Category {
  "capital",
  "country",
  "flag",
}

export interface QuestionServiceI {
  getQuestion: (countries: Country[]) => QuestionI;
}

export interface QuestionI {
  id: string;
  statement: string;
  options: Array<OptionsI>;
  image?: string;
  correct: string;
}

export interface OptionsI {
  id: string;
  content: string;
}
