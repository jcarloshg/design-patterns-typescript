export type LOGGER_CATEGORY = "CREATE_USER" | "UNSUBSCRIBE_USER";
export type LOGGER_INFRASTRUCTURE = "Sentry" | "CloudWatch";

export interface LogMessage {
  message: string;
  second?: string;
  error?: any; // can be a string or an Error object
}

export class LoggerDomain {
  public readonly CATEGORY: LOGGER_CATEGORY;
  public readonly INFRASTRUCTURE: LOGGER_INFRASTRUCTURE;

  constructor(
    category: LOGGER_CATEGORY,
    infrastructure: LOGGER_INFRASTRUCTURE
  ) {
    this.CATEGORY = category;
    this.INFRASTRUCTURE = infrastructure;
  }

  public async log(msg: LogMessage): Promise<void> {
    throw new Error("Method not implemented.");
  }

  public async error(msg: LogMessage): Promise<void> {
    throw new Error("Method not implemented.");
  }

  public async warn(msg: LogMessage): Promise<void> {
    throw new Error("Method not implemented.");
  }
}
