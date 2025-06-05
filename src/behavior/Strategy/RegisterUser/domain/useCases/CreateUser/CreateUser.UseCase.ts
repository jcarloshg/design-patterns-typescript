import {
  CustomResponse,
  GetError400,
  GetGoodResponseDomain,
  GetUnknownError,
} from "../../models/commmons/customResponses";
import {
  RegisterUserDomain,
  RegisterUserRequest,
} from "./functions/RegisterUser.domain";
import { SendWelcomeEmailDomain } from "./functions/SendWelcomeEmail.domain";

export class CreateUserUseCase {
  private readonly RegisterUser: RegisterUserDomain;
  private readonly SendWelcomeEmail: SendWelcomeEmailDomain;

  constructor(
    registerUserDomain: RegisterUserDomain,
    sendWelcomeEmailDomain: SendWelcomeEmailDomain
  ) {
    this.RegisterUser = registerUserDomain;
    this.SendWelcomeEmail = sendWelcomeEmailDomain;
  }

  public async run(request: CreateUserRequest): Promise<CustomResponse> {
    try {
      const createdUser = await this.RegisterUser.run(request.userData);
      if (createdUser === null) return GetError400("User registration failed");

      await this.SendWelcomeEmail.run({ email: createdUser.email });

      return GetGoodResponseDomain("User registered successfully", createdUser);
    } catch (error) {
      return GetUnknownError();
    }
  }
}

export interface CreateUserRequest {
  userData: RegisterUserRequest;
}
