import { CreateUserUseCase } from "../domain/useCases/CreateUser/CreateUser.UseCase";
import { RegisterUserJson } from "../infrastructure/useCases/CreateUser/json/RegisterUser.json";
import { SendWelcomeEmailTwilio } from "../infrastructure/useCases/CreateUser/twilio/SendWelcomeEmail.twilio";

const registerUserJson = new RegisterUserJson();
const sendWelcomeEmailTwilio = new SendWelcomeEmailTwilio();

const CreateUserApplication = new CreateUserUseCase(
  registerUserJson,
  sendWelcomeEmailTwilio
);

export default CreateUserApplication;
