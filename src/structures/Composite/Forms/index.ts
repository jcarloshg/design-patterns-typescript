import { BigForm } from "./BigForm";
import { SmallForm } from "./SmallForm";

console.log("\n\n");

const bigForm = new BigForm();
console.log("BigForm is valid: ", bigForm.isValid());
bigForm.print();

console.log("\n\n");

const smallForm = new SmallForm();
console.log("SmallForm is valid: ", smallForm.isValid());
smallForm.print();
