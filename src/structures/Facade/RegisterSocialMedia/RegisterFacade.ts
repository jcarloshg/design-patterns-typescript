export interface RegisterResponse {
  success: boolean;
  message: "User registered successfully" | "User registration failed";
  data: {
    id: number;
    email: string;
    username: string;
  };
}

export interface RegisterRequest {
  email: string;
  username: string;
  password: string;
}

export interface RegisterFacade {
  register(request: RegisterRequest): Promise<RegisterResponse>;
}
