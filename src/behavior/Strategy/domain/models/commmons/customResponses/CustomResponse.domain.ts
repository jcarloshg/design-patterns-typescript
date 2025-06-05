export interface CustomResponse {
  httpCode: number;
  data: any;
  messages: {
    userMessage: string;
    developerMessage: string;
  };
}
