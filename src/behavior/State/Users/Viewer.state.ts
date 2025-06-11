import { UserState } from "./User.state";

export class ViewerState extends UserState {
  constructor() {
    super("VIEWER");
  }
}
