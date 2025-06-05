import { CustomResponse } from "./CustomResponse.domain";

export const GetError400 = (msg: string): CustomResponse => {
  return {
    httpCode: 400,
    data: null,
    messages: {
      userMessage: "Something went wrong. Please try again later.",
      developerMessage: msg,
    },
  };
};
