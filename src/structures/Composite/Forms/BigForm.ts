import { AddressComposite } from "./AddressComposite";
import { Country } from "./Country";
import { FirstName } from "./FisrtName";
import { LastName } from "./LastName";
import { PersonalDataComposite } from "./PersonalDataComposite";
import { CompositeValidator, ValidatorName } from "./Validator";
import { ZipCode } from "./ZipCode";

export class BigForm extends CompositeValidator<any> {
  name: ValidatorName = "BIG_FORM";

  constructor() {
    super("any", "BIG_FORM");

    const personalDataComposite = new PersonalDataComposite();
    personalDataComposite.addChild(new FirstName("Jose"));
    personalDataComposite.addChild(new LastName("Huerta"));

    this.addChild(personalDataComposite);

    const addressComposite = new AddressComposite();
    addressComposite.addChild(new ZipCode(72123));
    addressComposite.addChild(new Country("MEXICO"));

    this.addChild(addressComposite);

    this.addChild(new FirstName("Jose"));
  }
}
