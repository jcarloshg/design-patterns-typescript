import { EmailInput } from "./EmailInput"
import { InputAbstract } from "./InputAbstract";
import { InputImplementationOptional } from './InputImplementationOptional';
import { InputImplementationRequired } from "./InputImplementationRequired";

const userUseEmailInput = (input: InputAbstract<String>) => {

    input.renderInput()
    console.log(`[status] -> `, input.getData())
    console.log('\n\n');

    input.setIsAble(false)
    console.log(`[status] -> `, input.getData())
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


const inputOptional = new InputImplementationOptional({ value: '' })
const inputRequired = new InputImplementationRequired<String>({
    messageError: 'El correo debe contener números y letras. Ej. user123@email.com',
    validator: (value) => value.includes('@'),
    value: '',
})
const emailInputOptional = new EmailInput(inputOptional)
const emailInputRequired = new EmailInput(inputRequired)

console.log(`// ============================================================` );
console.log(`// input optional ` );
console.log(`// ============================================================` );
userUseEmailInput(emailInputOptional)

console.log(`// ============================================================` );
console.log(`// input required ` );
console.log(`// ============================================================` );
userUseEmailInput(emailInputRequired)