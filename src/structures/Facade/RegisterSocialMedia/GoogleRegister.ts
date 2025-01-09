import { GitHubRegister } from "./GitHubRegister";
import {
  RegisterFacade,
  RegisterRequest,
  RegisterResponse,
} from "./RegisterFacade";

export interface GoogleRegisterResponse {
  user_data: {
    id: number;
    email: string;
    username: string;
    profile_img_url: string;
    lastName: string | null;
    firstName: string | null;
  };
  created_at: string;
  zone: "google";
}

export class GoogleRegister implements RegisterFacade {
  private _TOKEN: string;

  constructor() {
    // this could be read by variables environment
    this._TOKEN = "google_token";
  }

  public async register(request: RegisterRequest): Promise<RegisterResponse> {
    const response = await this._sendRequest(request);

    console.log(`[request] -> `, request);
    console.log(`[response] -> `, response);

    return {
      success: true,
      message: "User registered successfully",
      data: {
        id: response.user_data.id,
        email: response.user_data.email,
        username: response.user_data.username,
      },
    };
  }
  private _sendRequest(
    request: RegisterRequest
  ): Promise<GoogleRegisterResponse> {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const response: GoogleRegisterResponse = {
          user_data: {
            id: 1,
            email: request.email,
            username: request.username,
            profile_img_url: "https://google.com",
            lastName: null,
            firstName: null,
          },
          created_at: new Date().toISOString(),
          zone: "google",
        };

        resolve(response);
      }, 1000);
    });
  }
}
