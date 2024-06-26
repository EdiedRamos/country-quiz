export type CountryApiType = Array<Country>;

export type CountriesType = Array<Country>;

export interface Country {
  flags: Flags;
  name: Name;
  capital: string[];
}

export interface Flags {
  png: string;
  svg: string;
  alt: string;
}

export interface Name {
  common: string;
  official: string;
  nativeName: { [key: string]: NativeName };
}

export interface NativeName {
  official: string;
  common: string;
}
