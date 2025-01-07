import { InputImplementation } from "./InputImplementation";

export class InputImplementationOptional<T> implements InputImplementation<T> {

    data: { value: T; };

    constructor({ value, }: { value: T; }) {
        this.data = { value, }
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
        console.log(`${inputName}`);
        console.log(inputBorders);
        console.log(inputBordersMiddle);
        console.log(inputBorders);
        console.log('');

    }

    setData(value: T): void {
        this.data.value = value
    }

}