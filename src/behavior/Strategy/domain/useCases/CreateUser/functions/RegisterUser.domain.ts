import { LoggerDomain } from "../../../commons/Logger.domain";
import { UserModel } from "../../../models/businessEntities/User.model";

// request
export type RegisterUserRequest = Pick<UserModel, "name" | "email">;

export interface RegisterUserDomain {
  LoggerDomain: LoggerDomain;
  run(item: RegisterUserRequest): Promise<UserModel | null>;
}
