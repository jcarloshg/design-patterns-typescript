import { SPACE, Validator, ValidatorName } from "./Validator";

export type Countries = "USA" | "CANADA" | "MEXICO";

export class Country implements Validator<Countries> {
  name: ValidatorName = "COUNTRY";
  value: Countries;

  constructor(value: Countries) {
    this.value = value;
  }

  public isValid(): boolean {
    return ["USA", "CANADA", "MEXICO"].includes(this.value);
  }

  public print(level: number = 0): void {
    console.log(`${SPACE.repeat(level * 2)}${this.name}: ${this.value}`);
  }
}
