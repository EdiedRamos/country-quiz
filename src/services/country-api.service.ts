import type { CountryApiType } from "@/types";

export const CountryApiService = {
  async getCountries(): Promise<CountryApiType | null> {
    try {
      const response = await fetch(
        "https://restcountries.com/v3.1/all?fields=name,capital,flags"
      );
      const data = await response.json();
      return data as CountryApiType;
    } catch {
      return null;
    }
  },
};
