import { InputImplementation } from "./InputImplementation";

export class InputImplementationRequired<T> implements InputImplementation<T> {

  data: { value: T; error?: String; };
  messageError?: String
  validator: (value: T) => boolean;

  constructor({ value, error, messageError, validator }: { value: T; error?: String; messageError: String, validator: (value: T) => boolean }) {
    this.data = { value, error }
    this.messageError = messageError
    this.validator = validator
  }

  render(): void {
    console.log(`[${this.data.value}]`);
    this.data.error && console.log(`* ${this.data.error}`);
    console.log('');
  }

  setData(value: T): void {
    const isValidData = this.validator(value)
    this.data = {
      value: value,
      error: isValidData ? undefined : this.messageError
    }
  }

}