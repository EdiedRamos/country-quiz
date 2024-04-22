import {
  Category,
  OptionsI,
  type Country,
  type QuestionI,
  type QuestionServiceI,
} from "@/types";
import { getRandom } from "@/utils";

export class QuestionService implements QuestionServiceI {
  private createOption(content: string): OptionsI {
    return {
      id: crypto.randomUUID(),
      content,
    };
  }

  private getCategoryLength(): number {
    return Object.keys(Category).length / 2;
  }

  private getQuestionCategory(): Category {
    const categoryLength = this.getCategoryLength();
    const random = getRandom(categoryLength - 1);
    return random;
  }

  public getQuestion(countries: Country[]): QuestionI {
    const category = this.getQuestionCategory();
    const question: QuestionI = {
      id: crypto.randomUUID(),
      statement: "",
      options: [],
      correct: "",
    };

    // take a random index for the question
    const selected = getRandom(countries.length - 1);
    const country = countries[selected];

    switch (category) {
      case Category.capital:
        question.statement = `Which is the capital of ${country.name.official}?`;
        question.options = countries.map((country) =>
          this.createOption(country.capital[0])
        );
        break;

      case Category.country:
        question.statement = `Which country is ${country.capital[0]} the capital?`;
        question.options = countries.map((country) =>
          this.createOption(country.name.common)
        );
        break;

      case Category.flag:
        question.statement = `Which country does this flag {__flag__} belong to?`;
        question.image = country.flags.png;
        question.options = countries.map((country) =>
          this.createOption(country.name.common)
        );
        break;
    }

    question.correct = question.options[selected].id;

    return question;
  }
}
