import { CompositeValidator } from "./Validator";

export class PersonalDataComposite extends CompositeValidator<any> {
  constructor() {
    super("any", "PERSONAL_INFO");
  }
}
