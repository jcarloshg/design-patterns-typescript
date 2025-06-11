import { UserState } from "./User.state";
import {
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
import { User } from "./utils/Storage.utils";

export class UserAdminState extends UserState {
  constructor() {
    super("ADMIN");
  }

  async createUser(req: CreateUserReq): Promise<CreateUserRes> {
    if (!this.context) {
      return {
        success: false,
        message: "Context is not set.",
      };
    }
    this.context.users.push(req.user);
    return {
      success: true,
      message: "User created successfully.",
    };
  }

  async getUser(req: GetUserReq): Promise<GetUserRes> {
    const user = this.context?.users ?? [];
    const foundUser = user.find((u) => u.username === req.username);
    return {
      message: foundUser ? "User retrieved successfully." : "User not found.",
      user: foundUser || null,
    };
  }

  async getAll(): Promise<GetAllRes> {
    if (!this.context) {
      return {
        message: "Context is not set.",
        users: [],
      };
    }
    return {
      message: "Users retrieved successfully.",
      users: this.context.users,
    };
  }

  async updateUser(req: UpdateUserReq): Promise<UpdateUserRes> {
    if (!this.context) {
      return {
        success: false,
        message: "Context is not set.",
      };
    }

    const getUserRes = await this.getUser({ username: req.user.username });
    const user = getUserRes.user;
    if (!user)
      return {
        success: false,
        message: "User not found.",
      };

    const newUser: User = {
      ...user,
      ...req.user,
    };

    this.context.users = this.context.users.map((u) =>
      u.username === newUser.username ? newUser : u
    );

    return {
      success: true,
      message: "User updated successfully.",
      user: newUser,
    };
  }

  async deleteUser(req: DeleteUserReq): Promise<DeleteUserRes> {
    if (!this.context) {
      return {
        success: false,
        message: "Context is not set.",
      };
    }

    const getUserRes = await this.getUser({ username: req.username });
    const user = getUserRes.user;
    if (!user)
      return {
        success: false,
        message: "User not found.",
      };

    const deletedUser = this.context.users.filter(
      (u) => u.username !== req.username
    );

    return {
      success: true,
      message: "User deleted successfully.",
      user: user,
    };
  }
}
