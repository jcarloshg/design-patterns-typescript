import {
  LOGGER_CATEGORY,
  LOGGER_INFRASTRUCTURE,
  LoggerDomain,
  LogMessage,
} from "../../domain/commons/Logger.domain";

export class LoggerSentry implements LoggerDomain {
  public CATEGORY: LOGGER_CATEGORY;
  public INFRASTRUCTURE: LOGGER_INFRASTRUCTURE;

  constructor(
    category: LOGGER_CATEGORY,
    infrastructure: LOGGER_INFRASTRUCTURE
  ) {
    this.CATEGORY = category;
    this.INFRASTRUCTURE = infrastructure;

    // Initialize Sentry client here if needed
    // For example, you might use Sentry.init({ dsn: 'your-dsn' });
    // Sentry.init({
    //   dsn: 'your-dsn',
    //   integrations: [new Sentry.Integrations.Http({ tracing: true })],
    //   tracesSampleRate: 1.0, // Adjust this value as needed
    // });
  }

  public async log(msg: LogMessage): Promise<void> {
    // Here you would typically send the log message to Sentry
    // For example, using the Sentry SDK:
    // Sentry.captureMessage(`${this.CATEGORY} LOG: ${message}`);
    console.log(
      `sending to ${this.INFRASTRUCTURE}: LOG ${msg.message} ${
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
      `sending to ${this.INFRASTRUCTURE}: ERROR ${msg.message} ${errorMessage}`
    );
  }

  public async warn(msg: LogMessage): Promise<void> {
    console.log(
      `sending to ${this.INFRASTRUCTURE}: WARN ${msg.message} ${
        msg.error ? `- ${msg.error}` : ""
      }`
    );
  }
}
