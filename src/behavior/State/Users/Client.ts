import { CommonUserState } from "./CommonUser.state";
import { ManageUsersContext } from "./ManageUsers.context";
import { UserAdminState } from "./UserAdmin.state";
import { ViewerState } from "./Viewer.state";

export const Client = async () => {
  const viewer = new ViewerState();
  const context = new ManageUsersContext(viewer);

  console.log(`// ============================================================`);
  console.log(`// Viewer `);
  console.log(`// ============================================================`);

  const getAllRes = await context.getAll();
  console.log(`[getAllRes] -> `, getAllRes);

  const getUserRes = await context.getUser({ username: "john_doe" });
  console.log(`[getUserRes] -> `, getUserRes);

  const createUserRes = await context.createUser({
    user: {
      role: "USER",
      username: "john_doe",
    },
  });
  console.log(`[createUserRes] -> `, createUserRes);

  const updateUserRes = await context.updateUser({
    user: {
      role: "USER",
      username: "john_doe",
    },
  });
  console.log(`[updateUserRes] -> `, updateUserRes);

  const deleteUserRes = await context.deleteUser({
    username: "john_doe",
  });
  console.log(`[deleteUserRes] -> `, deleteUserRes);



  console.log(`// ============================================================`);
  console.log(`// User State `);
  console.log(`// ============================================================`);
  const user = new CommonUserState();
  context.setUserState(user);

  const userGetAllRes = await context.getAll();
  console.log(`[userGetAllRes] -> `, userGetAllRes);

  const userGetUserRes = await context.getUser({ username: "john_doe" });
  console.log(`[userGetUserRes] -> `, userGetUserRes);

  const userCreateUserRes = await context.createUser({
    user: {
      role: "USER",
      username: "john_doe_8742",
    }
  })
  console.log(`[userCreateUserRes] -> `, userCreateUserRes);
  const userUpdateUserRes = await context.updateUser({
    user: {
      role: "USER",
      username: "john_doe_8742",
    }
  });
  console.log(`[userUpdateUserRes] -> `, userUpdateUserRes);
  const userDeleteUserRes = await context.deleteUser({
    username: "john_doe_8742",
  });
  console.log(`[userDeleteUserRes] -> `, userDeleteUserRes);


  console.log(`// ============================================================`);
  console.log(`// Common Admin State `);
  console.log(`// ============================================================`);
  const admin = new UserAdminState();
  context.setUserState(admin);

  const adminGetAllRes = await context.getAll();
  console.log(`[adminGetAllRes] -> `, adminGetAllRes);

  const adminGetUserRes = await context.getUser({ username: "john_doe" });
  console.log(`[adminGetUserRes] -> `, adminGetUserRes);

  const adminCreateUserRes = await context.createUser({
    user: {
      role: "USER",
      username: "pedro9898",
    }
  });
  console.log(`[adminCreateUserRes] -> `, adminCreateUserRes);

  const adminUpdateUserRes = await context.updateUser({
    user: {
      role: "USER",
      username: "pedro9898",
    }
  });
  console.log(`[adminUpdateUserRes] -> `, adminUpdateUserRes);

  const adminDeleteUserRes = await context.deleteUser({
    username: "pedro9898",
  });
  console.log(`[adminDeleteUserRes] -> `, adminDeleteUserRes);
};

(async () => {
  await Client();
})();
