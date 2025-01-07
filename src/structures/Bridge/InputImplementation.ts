
type InputData<T> = {
    value: T,
    error?: String,
}

export interface InputImplementation<T> {
    data: InputData<T>,
    messageError?: String,
    render(inputName: String): void,
    setData(value: T): void,
    validator?: (value: T) => boolean
}
