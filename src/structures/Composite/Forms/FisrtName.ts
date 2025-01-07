import { SPACE, Validator, ValidatorName } from "./Validator";

export class FirstName implements Validator<String> {
  name: ValidatorName = "FIRST_NAME";
  value: String;

  constructor(value: String) {
    this.value = value;
  }

  public isValid(): boolean {
    const regex = /^[a-zA-Z]+$/;
    return regex.test(this.value.toString());
  }

  public print(level: number = 0): void {
    console.log(`${SPACE.repeat(level * 2)}${this.name}: ${this.value}`);
  }
}
