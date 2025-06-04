import { Repository } from "../../commons/Repository";
import { UserModel } from "../../models/User.model";

// request
export type RegisterUserRequest = Pick<UserModel, "name" | "email">;
// response
export type CreatedUser = UserModel;

export class RegisterUserDomain
  implements Repository<RegisterUserRequest, CreatedUser>
{
  public async run(item: RegisterUserRequest): Promise<UserModel> {
    throw new Error("Method not implemented.");
  }
}
