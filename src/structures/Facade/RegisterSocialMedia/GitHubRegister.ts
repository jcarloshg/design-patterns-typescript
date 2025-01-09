import {
  RegisterFacade,
  RegisterRequest,
  RegisterResponse,
} from "./RegisterFacade";

export interface GitHubRegisterResponse {
  id: number;
  email: string;
  user_name: string;
  role: "user" | "admin";
  created_at: string;
}

export class GitHubRegister implements RegisterFacade {
  public async register(request: RegisterRequest): Promise<RegisterResponse> {
    const userData = {
      email: request.email,
      user_name: request.username,
      pass: request.password,
    };

    const response = await this._sendRequest(userData);

    console.log(`[request github] -> `, request);
    console.log(`[response github] -> `, response);

    return {
      success: true,
      message: "User registered successfully",
      data: {
        id: response.id,
        email: response.email,
        username: response.user_name,
      },
    };
  }

  private _sendRequest(userData: any): Promise<GitHubRegisterResponse> {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const response: GitHubRegisterResponse = {
          id: 10987,
          email: userData.email,
          user_name: userData.user_name,
          role: "user",
          created_at: new Date().toISOString(),
        };

        resolve(response);
      }, 1000);
    });
  }
}
