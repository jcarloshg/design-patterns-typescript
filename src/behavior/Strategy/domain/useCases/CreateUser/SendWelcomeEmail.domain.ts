import { Repository } from "../../commons/Repository";
import { UserModel } from "../../models/User.model";

// request
export type SendWelcomeEmailRequest = Pick<UserModel, "email">;

// response
export type SendWelcomeEmailRes = void;

export class SendWelcomeEmailDomain
  implements Repository<SendWelcomeEmailRequest, SendWelcomeEmailRes>
{
  public async run(item: SendWelcomeEmailRequest): Promise<void> {
    throw new Error("Method not implemented.");
  }

  public getMessageBody(item: SendWelcomeEmailRequest): string {
    return `
      <html>
      <body>
        <h1>Welcome to our service!</h1>
        <p>We're glad to have you on board, <strong>${item.email}</strong>.</p>
        <p>If you have any questions, feel free to contact us.</p>
      </body>
      </html>
    `;
  }
}
