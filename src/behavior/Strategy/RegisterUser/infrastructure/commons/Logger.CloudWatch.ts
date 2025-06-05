import {
  LOGGER_CATEGORY,
  LOGGER_INFRASTRUCTURE,
  LoggerDomain,
  LogMessage,
} from "../../domain/commons/Logger.domain";

export class LoggerCloudWatch implements LoggerDomain {
  public CATEGORY: LOGGER_CATEGORY;
  public INFRASTRUCTURE: LOGGER_INFRASTRUCTURE;

  private readonly TITLE: string;
  constructor(
    category: LOGGER_CATEGORY,
    infrastructure: LOGGER_INFRASTRUCTURE
  ) {
    this.CATEGORY = category;
    this.INFRASTRUCTURE = infrastructure;
    this.TITLE = `[${this.CATEGORY} - ${this.INFRASTRUCTURE}]`;

    // add logic to initialize CloudWatch client
    // const region = process.env.AWS_REGION || 'us-west-2'; // default region
    // const key = process.env.AWS_ACCESS_KEY_ID;
    // e.g., this.cloudWatchClient = new CloudWatchClient({ region: 'us-west-2' });
  }

  public async log(msg: LogMessage): Promise<void> {
    // Here you would typically send the log message to CloudWatch
    // For example, using the AWS SDK:
    // const params = {
    //   LogGroupName: 'your-log-group',
    //   LogStreamName: 'your-log-stream',
    //   LogEvents: [
    //     {
    //       message: `${this.TITLE} LOG ${message}`,
    //       timestamp: Date.now(),
    //     },
    //   ],
    // };
    // await this.cloudWatchClient.send(new PutLogEventsCommand(params));
    // For this example, we'll just log to the console
    console.log(
      `sending to ${this.INFRASTRUCTURE}:  ${this.TITLE} LOG ${msg.message} ${
        msg.error ? `- ${msg.error}` : ""
      }`
    );
  }

  public async error(msg: LogMessage): Promise<void> {
    let errorMessage = "";
    const errorProperty = msg.error;
    if (errorProperty === undefined) errorMessage = "Unknown error";
    if (errorProperty === null) errorMessage = "Null error";
    if (errorProperty instanceof Error) errorMessage = errorProperty.message;
    if (typeof errorProperty === "string") errorMessage = errorProperty;

    console.log(
      `sending to ${this.INFRASTRUCTURE}:  ${this.TITLE} ERROR ${msg.message} ${
        msg.error ? `- ${errorMessage}` : ""
      }`
    );
  }

  public async warn(msg: LogMessage): Promise<void> {
    console.log(
      `sending to ${this.INFRASTRUCTURE}:  ${this.TITLE} ERROR ${msg.message} ${
        msg.error ? `- ${msg.error}` : ""
      }`
    );
  }
}
