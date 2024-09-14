import { InputAbstract } from "./InputAbstract";
import { InputImplementation } from "./InputImplementation";

export class EmailInput extends InputAbstract<String> {

    protected name: String = 'Email';

    constructor(inputImplementation: InputImplementation<String>) {
        super(inputImplementation)
    }

    public renderInput(): void {
        console.log(`---${this.name}---`);
        this.inputImplementation.render()
    }

}