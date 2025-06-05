import { LoggerDomain } from "../../../commons/Logger.domain";
import { UserModel } from "../../../models/businessEntities/User.model";

// request
export type SendWelcomeEmailRequest = Pick<UserModel, "email">;

export interface SendWelcomeEmailDomain {
  LoggerDomain: LoggerDomain;
  run(item: SendWelcomeEmailRequest): Promise<boolean>;
  getMessageBody(item: SendWelcomeEmailRequest): string;
}
