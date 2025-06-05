import {
  CreateUseApplicationV1,
  GetCreateUserApplicationV2,
} from "./application/CreateUser.application";
import { CreateUserUseCase } from "./domain/useCases/CreateUser/CreateUser.UseCase";

export const Client = async (createUserUseCase: CreateUserUseCase) => {
  const response = await createUserUseCase.run({
    userData: {
      name: "John Doe",
      email: "JohnDoe@strategy.com",
    },
  });
  console.log(`[Client - response] -> `, response);
};

(async () => {
  // const createUseApplicationV1 = await CreateUseApplicationV1();
  // await Client(createUseApplicationV1);

  const createUseApplicationV2 = await GetCreateUserApplicationV2();
  await Client(createUseApplicationV2);
})();
