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

  render(inputName: String): void {

    const inputLength = 50;
    const inputBorders = `=`.repeat(inputLength);

    const inputValueStart = `|| `
    const inputValueMiddle = `${this.data.value}`;
    const inputValueEnd = ` ||`
    const inputValueMiddleLength = `${this.data.value}`.length;
    const inputSpaces = ' '.repeat(inputLength - inputValueMiddleLength - inputValueStart.length - inputValueEnd.length);
    const inputBordersMiddle = `${inputValueStart}${inputValueMiddle}${inputSpaces}${inputValueEnd}`;

    console.log('');
    console.log(`${inputName} *`);
    console.log(inputBorders);
    console.log(inputBordersMiddle);
    console.log(inputBorders);
    this.data.error && console.log(`* ${this.data.error}`);
    console.log('');


    // console.log(`==============================`);
    // console.log(`|| ${this.data.value}`);
    // console.log(`==============================`);
    // console.log('');
  }

  setData(value: T): void {
    const isValidData = this.validator(value)
    this.data = {
      value: value,
      error: isValidData ? undefined : this.messageError
    }
  }

}