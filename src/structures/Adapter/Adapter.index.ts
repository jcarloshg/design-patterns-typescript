import { AuthAdapter } from "./AuthAdapter";
import { AuthGoogle } from "./AuthGoogle.adapter";

const useAuthAPI = async (authAdapter: AuthAdapter) => {

    const EMAIL = 'pepe123@gmail.com'
    const NEW_EMAIL = 'rosa456@gmail.com'
    const PASSWORD = 'pass123!'

    console.log(`\n\n\n// ============================================================`);
    console.log(`// login `);
    console.log(`// ============================================================`);

    const responseLogin = await authAdapter.logIn({ email: EMAIL, pass: PASSWORD });
    console.log(`[login] -> `, responseLogin);

    if (responseLogin.code !== 200) {
        console.log(responseLogin.message)
        return
    }

    let token = responseLogin.data!

    console.log(`\n\n\n// ============================================================`);
    console.log(`// do task logged `);
    console.log(`// ============================================================`);
    console.log(`[currentPermission] -> `, (await authAdapter.getCurrentPermissions(token)))
    console.log(`[fullName] -> `, (await authAdapter.getFullName(token)).data)


    console.log(`\n\n\n// ============================================================`);
    console.log(`// change email `);
    console.log(`// ============================================================`);
    console.log(`[changeEmail] -> `, (await authAdapter.changeEmail({ token, newEmail: NEW_EMAIL })).message)

    console.log(`\n\n\n// ============================================================`);
    console.log(`// do task with the email changed `);
    console.log(`// ============================================================`);
    console.log(`[currentPermission] -> `, (await authAdapter.getCurrentPermissions(token)))
    console.log(`[fullName] -> `, (await authAdapter.getFullName(token)))



    console.log(`\n\n\n// ============================================================`);
    console.log(`// login again`);
    console.log(`// ============================================================`);
    const responseLogin01 = await authAdapter.logIn({ email: EMAIL, pass: PASSWORD });
    console.log(`[login] -> `, responseLogin01);

    if (responseLogin01.code !== 200) {
        console.log(responseLogin01.message)
        return
    }

    console.log(`\n\n\n// ============================================================`);
    console.log(`// do task logged `);
    console.log(`// ============================================================`);
    token = responseLogin01.data!
    console.log(`[currentPermission] -> `, (await authAdapter.getCurrentPermissions(token)).data)
    console.log(`[fullName] -> `, (await authAdapter.getFullName(token)).data)

}

(
    async () => {
        await useAuthAPI(new AuthGoogle())
    }
)()



