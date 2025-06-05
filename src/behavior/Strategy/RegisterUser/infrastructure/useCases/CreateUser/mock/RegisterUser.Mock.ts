import { LoggerDomain } from "../../../../domain/commons/Logger.domain";
import { UserModel } from "../../../../domain/models/businessEntities/User.model";
import {
  RegisterUserDomain,
  RegisterUserRequest,
} from "../../../../domain/useCases/CreateUser/functions/RegisterUser.domain";

export class RegisterUserMock implements RegisterUserDomain {
  public LoggerDomain: LoggerDomain;

  constructor(loggerDomain: LoggerDomain) {
    this.LoggerDomain = loggerDomain;
  }

  public async run(item: RegisterUserRequest): Promise<UserModel | null> {
    const userMock: UserModel = {
      id: 99999,
      name: "Mock User",
      email: "mockUser@mock.com",
      availability: true,
    };
    this.LoggerDomain.log({
      message: "RegisterUserMock.run called",
      second: JSON.stringify(item),
    });
    return userMock;
  }
}
