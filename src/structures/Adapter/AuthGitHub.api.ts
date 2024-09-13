
export class AuthGitHubAPI {

    private _token_user_web?: String
    private _user = {
        first_name: 'Felipe',
        middle_name: 'Jose',
        last_name: 'Guevara',
        email: 'pepe123@gmail.com',
        password: 'pass123!',
        permissions_assigned: ["CREATE_TASKS", "UPDATE_TASK", "MARK_COMPLETE_TASK"]
    }

    constructor() { }

    private _generateNewToken(): String { return JSON.stringify(this._token_user_web) }

    logIn({ email, password }: { email: String; password: String; }): String {

        const isEmailEmpty = email === ''
        const isPassEmpty = password === ''
        if (isEmailEmpty || isPassEmpty) throw new Error('The email or password are wrong')

        this._token_user_web = this._generateNewToken()

        return this._token_user_web

    }

    async getUserData(token: String) {
        if (this._token_user_web !== token) throw new Error('Token not valid')
        return await this._user
    }

    async updateCredentials({ email, token }: { email: String, token: String, }) {

        if (this._token_user_web !== token) throw new Error('Token not valid')

        const isEmailEmpty = email === ''
        if (isEmailEmpty) throw new Error('The data is invalid')

    }

}