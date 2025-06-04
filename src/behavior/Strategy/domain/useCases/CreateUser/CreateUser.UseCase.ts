import { RegisterUserDomain } from "./RegisterUser.domain";
import { SendWelcomeEmailDomain } from "./SendWelcomeEmail.domain";

export class CreateUserUseCase {
  public readonly RegisterUser: RegisterUserDomain;
  public readonly SendWelcomeEmail: SendWelcomeEmailDomain;

  constructor(
    registerUserDomain: RegisterUserDomain,
    sendWelcomeEmailDomain: SendWelcomeEmailDomain
  ) {
    this.RegisterUser = registerUserDomain;
    this.SendWelcomeEmail = sendWelcomeEmailDomain;
  }
}
