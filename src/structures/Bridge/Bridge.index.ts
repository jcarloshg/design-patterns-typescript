import { EmailInput } from "./EmailInput"
import { FirstNameInput } from "./FirstNameInput";
import { InputAbstract } from "./InputAbstract";
import { InputImplementationOptional } from './InputImplementationOptional';
import { InputImplementationRequired } from "./InputImplementationRequired";

const tests = (input: InputAbstract<String>) => {

    input.renderInput()
    console.log(`[status] -> `, input.getData())
    console.log('\n\n');

    input.renderInput()
    input.setIsAble(false)
    console.log(`[status] -> `, input.getData())
    console.log('\n\n');

    input.renderInput()
    input.setIsAble(true)
    console.log(`[status] -> `, input.getData())
    console.log('\n\n');

    input.setValue('pedro')
    input.renderInput()
    console.log(`[status] -> `, input.getData())
    console.log('\n\n');

    input.setValue('')
    input.renderInput()
    console.log(`[status] -> `, input.getData())
    console.log('\n\n');

    input.setValue('pedro123@gmail.com')
    input.renderInput()
    console.log(`[status] -> `, input.getData())
    console.log('\n\n');

}


const inputEmailOptional = new InputImplementationOptional({ value: '' })
const inputEmailRequired = new InputImplementationRequired<String>({
    messageError: 'El correo debe contener números y letras. Ej. user123@email.com',
    validator: (value) => value.includes('@'),
    value: '',
})
const emailInputOptional = new EmailInput(inputEmailOptional)
const emailInputRequired = new EmailInput(inputEmailRequired)

console.log("//")
console.log(`// input email optional `);
console.log("//")
tests(emailInputOptional)

console.log("//")
console.log(`// input email required `);
console.log("//")
tests(emailInputRequired);



const inputFirstNameOptional = new InputImplementationOptional({ value: '' })
const inputFirstNameRequired = new InputImplementationRequired<String>({
    messageError: 'El nombre debe contener solo letras',
    validator: (value) => /^[a-zA-Z]+$/.test(value.toString()),
    value: '',
})
const firstNameInputOptional = new FirstNameInput(inputFirstNameOptional)
const firstNameInputRequired = new FirstNameInput(inputFirstNameRequired)

console.log("//")
console.log(`// input first name optional `);
console.log("//")
tests(firstNameInputOptional)

console.log("//")
console.log(`// input first name required `);
console.log("//")
tests(firstNameInputRequired);