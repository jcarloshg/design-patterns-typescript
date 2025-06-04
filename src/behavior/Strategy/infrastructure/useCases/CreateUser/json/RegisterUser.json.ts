import fs from "fs-extra";
import path from "path";

import {
  RegisterUserDomain,
  RegisterUserRequest,
  CreatedUser,
} from "../../../../domain/useCases/CreateUser/RegisterUser.domain";

export class RegisterUserJson implements RegisterUserDomain {
  public async run(item: RegisterUserRequest): Promise<CreatedUser> {
    // read the file path
    const filePath = path.resolve(__dirname, "users.json");
    let users: CreatedUser[] = [];

    // Leer usuarios existentes
    if (await fs.pathExists(filePath)) {
      const data = await fs.readFile(filePath, "utf-8");
      if (data.trim().length > 0) {
        users = JSON.parse(data);
      }
    }

    // Generar nuevo id
    const newId =
      users.length > 0 ? Math.max(...users.map((u) => u.id)) + 1 : 1;
    const newUser: CreatedUser = {
      id: newId,
      name: item.name,
      email: item.email,
      availability: true,
    };
    users.push(newUser);
    await fs.writeFile(filePath, JSON.stringify(users, null, 2));
    return newUser;
  }
}
