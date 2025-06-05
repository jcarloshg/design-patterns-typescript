import { CustomResponse } from "./CustomResponse.domain";

export const GetUnknownError = (): CustomResponse => {
  return {
    httpCode: 500,
    data: null,
    messages: {
      userMessage: "An unexpected error occurred. Please try again later.",
      developerMessage: `An unexpected error occurred in the system.`,
    },
  };
};
