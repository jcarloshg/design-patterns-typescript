import {
  SendWelcomeEmailDomain,
  SendWelcomeEmailRequest,
  SendWelcomeEmailRes,
} from "../../../../domain/useCases/CreateUser/SendWelcomeEmail.domain";

export class SendWelcomeEmailTwilio extends SendWelcomeEmailDomain {
  public async run(
    item: SendWelcomeEmailRequest
  ): Promise<SendWelcomeEmailRes> {
    const messageBody = this.getMessageBody(item);
    const body = {
      from: "admin@strategy.com", // Replace with your Twilio verified sender email
      to: item.email,
      body: messageBody,
    };
    try {
      // Simulate sending email using Twilio's API
      console.log("Sending email via Twilio:", body);
      // Here you would typically call Twilio's API to send the email
      // await twilioClient.messages.create(body);
    } catch (error) {
      console.error("Error sending email:", error);
      throw new Error("Failed to send welcome email");
    }
  }
}
