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
import { UserState } from "./User.state";
import { currentUser, User } from "./utils/Storage.utils";

export class ManageUsersContext implements ActionsUtils {
  private userState: UserState;
  public users: User[] = currentUser;

  constructor(userState: UserState) {
    this.userState = userState;
    this.userState.setContext(this);
  }

  public setUserState(userState: UserState) {
    this.userState = userState;
    this.userState.setContext(this);
  }

  async getAll(): Promise<GetAllRes> {
    return await this.userState.getAll();
  }

  async getUser(req: GetUserReq): Promise<GetUserRes> {
    return await this.userState.getUser(req);
  }

  async createUser(req: CreateUserReq): Promise<CreateUserRes> {
    return await this.userState.createUser(req);
  }

  updateUser(req: UpdateUserReq): Promise<UpdateUserRes> {
    return this.userState.updateUser(req);
  }

  deleteUser(req: DeleteUserReq): Promise<DeleteUserRes> {
    return this.userState.deleteUser(req);
  }
}
