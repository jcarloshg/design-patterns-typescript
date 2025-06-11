import { UserState } from "./User.state";
import { GetAllRes } from "./utils/Actions.utils";

export class CommonUserState extends UserState {
  constructor() {
    super("USER");
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
}
