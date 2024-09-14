import { InputImplementation } from "./InputImplementation";

export class InputImplementationOptional<T> implements InputImplementation<T> {

    data: { value: T; };

    constructor({ value, }: { value: T; }) {
        this.data = { value, }
    }

    render(): void {
        console.log(`[${this.data.value}]`);
        console.log('');
    }

    setData(value: T): void {
        this.data.value = value
    }

}