import { LoggerDomain } from "../../../../domain/commons/Logger.domain";
import {
  SendWelcomeEmailDomain,
  SendWelcomeEmailRequest,
} from "../../../../domain/useCases/CreateUser/functions/SendWelcomeEmail.domain";

export class SendWelcomeEmailTwilio implements SendWelcomeEmailDomain {
  public readonly LoggerDomain: LoggerDomain;

  constructor(loggerDomain: LoggerDomain) {
    this.LoggerDomain = loggerDomain;
  }

  public async run(item: SendWelcomeEmailRequest): Promise<boolean> {
    const messageBody = this.getMessageBody(item);
    const body = {
      from: "admin@strategy.com", // Replace with your Twilio verified sender email
      to: item.email,
      body: messageBody,
    };
    try {
      // Simulate sending email using Twilio's API

      this.LoggerDomain.log({
        message: `Email sent to ${item.email} with body: ${JSON.stringify(
          body
        )}`,
      });
      // Here you would typically call Twilio's API to send the email
      // await twilioClient.messages.create(body);

      return true;
    } catch (error) {
      this.LoggerDomain.error({
        message: `Failed to send email to ${item.email}`,
        error: error,
      });
      return false;
    }
  }

  public getMessageBody(item: SendWelcomeEmailRequest): string {
    return `
      <html>
      <body style="font-family: Arial, sans-serif; color: #333;">
        <h2>Welcome to Strategy!</h2>
        <p>Hi <strong>${item.email}</strong>,</p>
        <p>We're excited to have you on board. If you have any questions, feel free to reach out to our support team.</p>
        <p>Best regards,<br/>The Strategy Team</p>
      </body>
      </html>
    `;
  }
}
