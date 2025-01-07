import { SPACE, Validator, ValidatorName } from "./Validator";

export class ZipCode implements Validator<Number> {
  name: ValidatorName = "ZIP_CODE";
  value: Number;

  constructor(value: Number) {
    this.value = value;
  }

  public isValid(): boolean {
    const regex = /^[0-9]{5}$/;
    return regex.test(this.value.toString());
  }

  public print(level: number = 0): void {
    console.log(`${SPACE.repeat(level * 2)}${this.name}: ${this.value}`);
  }
}
