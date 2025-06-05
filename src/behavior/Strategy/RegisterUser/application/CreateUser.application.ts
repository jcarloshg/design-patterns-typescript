import { CreateUserUseCase } from "../domain/useCases/CreateUser/CreateUser.UseCase";
import { LoggerSentry } from "../infrastructure/commons/Logger.Sentry";
import { RegisterUserJson } from "../infrastructure/useCases/CreateUser/json/RegisterUser.json";
import { SendWelcomeEmailTwilio } from "../infrastructure/useCases/CreateUser/twilio/SendWelcomeEmail.twilio";
import { LoggerCloudWatch } from "../infrastructure/commons/Logger.CloudWatch";
import { RegisterUserMock } from "../infrastructure/useCases/CreateUser/mock/RegisterUser.Mock";
import { SendWelcomeEmailMock } from "../infrastructure/useCases/CreateUser/mock/SendWelcomeEmail.Mock";

export const CreateUseApplicationV1 = async (): Promise<CreateUserUseCase> => {
  const loggerSentry = new LoggerSentry("CREATE_USER", "Sentry");
  const registerUserJson = new RegisterUserJson(loggerSentry);

  const loggerCloudWatch = new LoggerCloudWatch("CREATE_USER", "CloudWatch");
  const sendWelcomeEmailTwilio = new SendWelcomeEmailTwilio(loggerCloudWatch);

  const CreateUserApplication = new CreateUserUseCase(
    registerUserJson,
    sendWelcomeEmailTwilio
  );

  return CreateUserApplication;
};

export const GetCreateUserApplicationV2 =
  async (): Promise<CreateUserUseCase> => {
    const loggerCloudWatch = new LoggerCloudWatch("CREATE_USER", "CloudWatch");
    const registerUserJson = new RegisterUserMock(loggerCloudWatch);

    const loggerSentry = new LoggerSentry("CREATE_USER", "Sentry");
    const sendWelcomeEmailTwilio = new SendWelcomeEmailMock(loggerSentry);

    const CreateUserApplication = new CreateUserUseCase(
      registerUserJson,
      sendWelcomeEmailTwilio
    );

    return CreateUserApplication;
  };
