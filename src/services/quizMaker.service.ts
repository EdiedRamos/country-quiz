import type { QuestionsType } from "@/types";
import { CountryApiService } from "./country-api.service";
import { QuestionService } from "./question.service";
import { QuizService } from "./quiz.service";
import { CountryService } from "./country.service";

export class QuizMaker {
  public static async createQuestions(
    numberOfQuestions: number
  ): Promise<QuestionsType | null> {
    const countries = await CountryApiService.getCountries();

    if (!countries) return null;

    const country = new CountryService(countries);
    const question = new QuestionService();

    const quiz = new QuizService(country, question);

    const questions = await quiz.getQuestions(numberOfQuestions);

    return questions;
  }
}
