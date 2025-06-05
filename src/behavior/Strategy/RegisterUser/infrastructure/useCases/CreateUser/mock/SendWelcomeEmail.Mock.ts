import { LoggerDomain } from "../../../../domain/commons/Logger.domain";
import {
  SendWelcomeEmailDomain,
  SendWelcomeEmailRequest,
} from "../../../../domain/useCases/CreateUser/functions/SendWelcomeEmail.domain";

export class SendWelcomeEmailMock implements SendWelcomeEmailDomain {
  LoggerDomain: LoggerDomain;

  constructor(loggerDomain: LoggerDomain) {
    this.LoggerDomain = loggerDomain;
  }

  public async run(item: SendWelcomeEmailRequest): Promise<boolean> {
    this.LoggerDomain.log({
      message: "SendWelcomeEmailMock.run called",
      second: JSON.stringify(item),
    });
    return true;
  }

  getMessageBody(item: SendWelcomeEmailRequest): string {
    return `body mocked for email to ${item.email}`;
  }
}
