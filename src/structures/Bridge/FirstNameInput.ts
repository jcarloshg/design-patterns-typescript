import { InputAbstract } from "./InputAbstract";
import { InputImplementation } from "./InputImplementation";

export class FirstNameInput extends InputAbstract<String> {
    protected name: String = "First Name";

    constructor(inputAbstract: InputImplementation<String>) {
        super(inputAbstract);
    }

    public renderInput(): void {
        this.inputImplementation.render(this.name);
    }
}
