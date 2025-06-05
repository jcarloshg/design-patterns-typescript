import fs from "fs-extra";
import path from "path";
import {
  RegisterUserDomain,
  RegisterUserRequest,
} from "../../../../domain/useCases/CreateUser/functions/RegisterUser.domain";
import { UserModel } from "../../../../domain/models/businessEntities/User.model";
import { LoggerDomain } from "../../../../domain/commons/Logger.domain";

export class RegisterUserJson implements RegisterUserDomain {
  public readonly LoggerDomain: LoggerDomain;

  constructor(loggerDomain: LoggerDomain) {
    this.LoggerDomain = loggerDomain;
  }

  public async run(item: RegisterUserRequest): Promise<UserModel | null> {
    try {
      // read the file path
      const filePath = path.resolve(__dirname, "users.json");
      let users: UserModel[] = [];

      // Leer usuarios existentes
      if (await fs.pathExists(filePath)) {
        const data = await fs.readFile(filePath, "utf-8");
        if (data.trim().length > 0) {
          users = JSON.parse(data);
        }
      }

      this.LoggerDomain.log({ message: "read the json correctly" });

      // Generar nuevo id
      const newId =
        users.length > 0 ? Math.max(...users.map((u) => u.id)) + 1 : 1;
      const newUser: UserModel = {
        id: newId,
        name: item.name,
        email: item.email,
        availability: true,
      };

      this.LoggerDomain.log({ message: JSON.stringify(newUser) });

      users.push(newUser);
      await fs.writeFile(filePath, JSON.stringify(users, null, 2));
      this.LoggerDomain.log({ message: "write in the json correctly" });
      return newUser;
    } catch (error) {
      this.LoggerDomain.error({
        message: "Failed to register user",
        error: error,
      });
      return null;
    }
  }
}
