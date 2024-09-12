
type UserKeys = { userName: string, token: string };

export class UserSingleton {

    private keys?: UserKeys;

    private constructor() { }

    static get instance(): UserSingleton {
        return new UserSingleton()
    }

    public setKeys(keys: UserKeys) {
        this.keys = keys
    }


    public getKeys(): UserKeys | undefined {
        return this.keys
    }

}