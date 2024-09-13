export class AuthGoogleAPI {

    private _token?: String
    private _userGoogle = {
        userPersonalData: {
            firstName: 'Felipe',
            middleName: 'Jose',
            lastName: 'Guevara',
        },
        credentials: {
            email: 'pepe123@gmail.com',
            password: 'pass123!'
        },
        permissions: ["CREATE_TASKS", "UPDATE_TASK", "MARK_COMPLETE_TASK"]
    }

    private _generateNewToken(): String { return JSON.stringify(this._userGoogle) }

    logIn({ email, password }: { email: String; password: String; }): String {

        const isEmailEmpty = email === ''
        const isPassEmpty = password === ''
        if (isEmailEmpty || isPassEmpty) throw new Error('The email or password are wrong')

        this._token = this._generateNewToken()

        return this._token

    }

    getPermissions(token: String): String[] {
        if (this._token !== token) throw new Error('Token invalid')
        return this._userGoogle.permissions
    }

    getUserData(token: String): { firstName: String, middleName: String, lastName: String, } {
        if (this._token !== token) throw new Error('Token invalid')
        return this._userGoogle.userPersonalData
    }

    updateEmail(token: String, newEmail: String): boolean {

        if (this._token !== token) throw new Error('Token invalid')

        const isEmailEmpty = newEmail === ''
        if (isEmailEmpty) throw new Error('The email is invalid')

        this.closeSession()

        return true

    }

    private closeSession() {
        this._token = undefined
    }



}