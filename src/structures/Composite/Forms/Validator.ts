export const SPACE = "  ";

export type ValidatorName =
  | "FIRST_NAME"
  | "LAST_NAME"
  | "EMAIL"
  | "PASSWORD"
  | "CONFIRM_PASSWORD"
  | "PHONE_NUMBER"
  | "ADDRESS"
  | "CITY"
  | "STATE"
  | "ZIP_CODE"
  | "COUNTRY"
  | "CREDIT_CARD"
  | "EXPIRATION_DATE"
  | "CVV"
  | "TERMS_AND_CONDITIONS"
  | "BIG_FORM"
  | "PERSONAL_INFO"
  | string;

export interface Validator<T> {
  value: T;
  name: ValidatorName;
  isValid: () => boolean;
  print: (level: number) => void;
}

export abstract class CompositeValidator<T> implements Validator<T> {
  value: T;
  name: ValidatorName;
  protected _children: Validator<any>[];

  constructor(value: T, name: ValidatorName) {
    this.value = value;
    this.name = name;
    this._children = [];
  }

  public isValid(): boolean {
    return this._children.every((child) => child.isValid());
  }

  public addChild(child: Validator<any>): void {
    this._children.push(child);
  }

  public removeChild(name: ValidatorName) {
    this._children = this._children.filter((child) => child.name !== name);
  }

  public print(level: number = 0): void {
    console.log(`${SPACE.repeat(level * 2)}${this.name}`);
    this._children.forEach((child) => child.print(level + 1));
  }
}
