import { CustomResponse } from "./CustomResponse.domain";

export function GetGoodResponseDomain(msg: string, data: any): CustomResponse {
  return {
    httpCode: 200,
    data: data,
    messages: {
      userMessage: msg,
      developerMessage: msg,
    },
  };
}
