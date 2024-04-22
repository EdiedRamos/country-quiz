import type { CountriesType } from "@/types";
import { getRandom } from "@/utils";

export interface CountryServiceI {
  getAllCountries(): CountriesType;
  getRandomCountries(length: number): CountriesType;
}

export class CountryService implements CountryServiceI {
  private countries: CountriesType;

  constructor(countries: CountriesType) {
    this.countries = countries;
  }

  public getAllCountries(): CountriesType {
    return this.countries;
  }

  public getRandomCountries(length: number): CountriesType {
    const countries: CountriesType = [];
    for (let i = 0; i < length; i++) {
      const random = getRandom(this.countries.length - 1);
      countries.push(this.countries[random]);
    }
    return countries;
  }
}
