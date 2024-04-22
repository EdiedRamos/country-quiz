import type { QuestionServiceI, QuestionsType } from "@/types";
import { type CountryServiceI } from "./country.service";

export class QuizService {
  private country: CountryServiceI;
  private question: QuestionServiceI;

  constructor(country: CountryServiceI, question: QuestionServiceI) {
    this.country = country;
    this.question = question;
  }

  public async getQuestions(
    questionsLength: number
  ): Promise<QuestionsType | null> {
    const quiz: QuestionsType = [];
    for (let i = 0; i < questionsLength; i++) {
      const randomCountries = this.country.getRandomCountries(4);
      quiz.push(this.question.getQuestion(randomCountries));
    }
    return quiz;
  }
}
