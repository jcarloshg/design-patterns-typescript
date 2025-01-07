import { Country } from "./Country";
import { FirstName } from "./FisrtName";
import { LastName } from "./LastName";
import { CompositeValidator } from "./Validator";

export class SmallForm extends CompositeValidator<any> {
  constructor() {
    super("any", "SMALL_FORM");

    this.addChild(new FirstName("Jose"));
    this.addChild(new LastName("Huerta"));
    this.addChild(new Country("MEXICO"));
  }
}
