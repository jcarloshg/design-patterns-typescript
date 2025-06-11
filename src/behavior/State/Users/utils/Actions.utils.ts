import { User } from "./Storage.utils";

export interface ActionsUtils {
  getAll(): Promise<GetAllRes>;
  getUser(req: GetUserReq): Promise<GetUserRes>;
  createUser(req: CreateUserReq): Promise<CreateUserRes>;
  updateUser(req: UpdateUserReq): Promise<UpdateUserRes>;
  deleteUser(req: DeleteUserReq): Promise<DeleteUserRes>;
}

export interface GetAllRes {
  message: string;
  users: User[];
}

export interface GetUserReq {
  username: string;
}
export interface GetUserRes {
  message: string;
  user: User | null;
}

export interface CreateUserReq {
  user: User;
}
export interface CreateUserRes {
  success: boolean;
  message: string;
}

export interface UpdateUserReq {
  user: User;
}
export interface UpdateUserRes {
  success: boolean;
  message: string;
  user?: User;
}

export interface DeleteUserReq {
  username: string;
}

export interface DeleteUserRes {
  success: boolean;
  message: string;
  user?: User;
}
