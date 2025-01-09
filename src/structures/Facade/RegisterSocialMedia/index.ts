import { GitHubRegister } from "./GitHubRegister";
import { GoogleRegister } from "./GoogleRegister";
import { RegisterRequest } from "./RegisterFacade";

(async () => {
  const registerRequest: RegisterRequest = {
    username: "user123",
    password: "pass123",
    email: "user123@example.com",
  };

  console.log(`// \n\n register with GitHub `);
  const githubRegister = new GitHubRegister();
  const githubRegisterResponse = await githubRegister.register(registerRequest);
  console.log(`// =========================================================`);
  console.log(githubRegisterResponse);
  console.log(`// =========================================================`);

  console.log(`// \n\n register with Google `);
  const googleRegister = new GoogleRegister();
  const googleRegisterResponse = await googleRegister.register(registerRequest);
  console.log(`// =========================================================`);
  console.log(googleRegisterResponse);
  console.log(`// =========================================================`);
})();
