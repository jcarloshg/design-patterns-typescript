import { ManageUsersContext } from "./ManageUsers.context";
import {
  ActionsUtils,
  CreateUserReq,
  CreateUserRes,
  DeleteUserReq,
  DeleteUserRes,
  GetAllRes,
  GetUserReq,
  GetUserRes,
  UpdateUserReq,
  UpdateUserRes,
} from "./utils/Actions.utils";
import { TYPE_USER } from "./utils/Storage.utils";

export class UserState implements ActionsUtils {
  public typeUser: TYPE_USER;
  public context: ManageUsersContext | null = null;

  constructor(typeUser: TYPE_USER) {
    this.typeUser = typeUser;
  }

  public setContext(context: ManageUsersContext) {
    this.context = context;
  }

  async getAll(): Promise<GetAllRes> {
    return {
      message: "The current user has not permission to perform this action.",
      users: [],
    };
  }

  async getUser(req: GetUserReq): Promise<GetUserRes> {
    return {
      message: "The current user has not permission to perform this action.",
      user: null,
    };
  }

  async createUser(req: CreateUserReq): Promise<CreateUserRes> {
    return {
      success: false,
      message: "The current user has not permission to perform this action.",
    };
  }

  async updateUser(req: UpdateUserReq): Promise<UpdateUserRes> {
    return {
      success: false,
      message: "The current user has not permission to perform this action.",
    };
  }

  async deleteUser(req: DeleteUserReq): Promise<DeleteUserRes> {
    return {
      success: false,
      message: "The current user has not permission to perform this action.",
    };
  }
}
