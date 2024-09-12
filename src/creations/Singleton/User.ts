
type UserKeys = { userName: string, token: string };

export class UserSingleton {

    private keys?: UserKeys;
    private static _instance?: UserSingleton

    private constructor() { }

    static get instance(): UserSingleton {
        if (!this._instance) this._instance = new UserSingleton()
        return this._instance
    }

    public setKeys(keys: UserKeys) {
        this.keys = keys
    }


    public getKeys(): UserKeys | undefined {
        return this.keys
    }

}