import { CompositeValidator, ValidatorName } from "./Validator";

export class AddressComposite extends CompositeValidator<any> {
  constructor() {
    super("any", "ADDRESS");
  }
}
