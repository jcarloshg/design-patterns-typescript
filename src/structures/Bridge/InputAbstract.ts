import { InputImplementation } from "./InputImplementation";

export class InputAbstract<T> {

    protected _isAble: boolean = true;
    protected name: String = "input_name"
    protected inputImplementation: InputImplementation<T>

    constructor(inputImplementation: InputImplementation<T>) {
        this.inputImplementation = inputImplementation
    }

    public renderInput() {
        this.inputImplementation.render(this.name)
    }

    public setValue(data: T) { this.inputImplementation.setData(data) }
    public setIsAble(value: boolean) { this._isAble = value }

    public getData() {
        return {
            name: this.name,
            isAble: this._isAble,
            value: this.inputImplementation.data.value,
            errors: this.inputImplementation.data.error,
        }
    }

}