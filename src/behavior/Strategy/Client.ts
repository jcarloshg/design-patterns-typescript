import CreateUserApplication from "./application/CreateUser.application";
import { CreateUserUseCase } from "./domain/useCases/CreateUser/CreateUser.UseCase";

export const Client = async (createUserUseCase: CreateUserUseCase) => {
  try {
    const cratedUser = await createUserUseCase.RegisterUser.run({
      name: "John Doe",
      email: "JohnDoe@gmail.com",
    });

    console.log(`[Client - cratedUser] -> `, cratedUser);

    const emailResponse = await createUserUseCase.SendWelcomeEmail.run({
      email: cratedUser.email,
    });

    console.log(`[Client - emailResponse] -> `, emailResponse);
  } catch (error) {
    console.error("Error in Client:", error);
  }
};

(async () => {
  await Client(CreateUserApplication);
})();
