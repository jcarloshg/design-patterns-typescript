import { AuthAdapter, CHANGE_EMAIL_SUCCESS, CustomResponse, ERROR_MESSAGE, LOGIN_ERROR, LOGIN_SUCCESS, SUCCESS_MESSAGE, Token, TOKEN_EXPIRED } from './AuthAdapter';
import { AuthGoogleAPI } from "./AuthGoogle.api";

export class AuthGoogle implements AuthAdapter {

    token?: Token;
    private readonly _authGoogleAPI: AuthGoogleAPI

    constructor() {
        this._authGoogleAPI = new AuthGoogleAPI()
    }

    async logIn({ email, pass }: { email: String; pass: String; }): Promise<CustomResponse<Token>> {

        try {

            const token = this._authGoogleAPI.logIn({ email, password: pass })
            this.token = token
            const response: CustomResponse<Token> = { message: LOGIN_SUCCESS, code: 200, data: this.token }
            return response

        } catch (error) {

            return { message: LOGIN_ERROR, code: 401 }

        }

    }

    async getCurrentPermissions(token: String): Promise<CustomResponse<String[]>> {

        try {

            const currentPermissions = this._authGoogleAPI.getPermissions(token)
            const response: CustomResponse<String[]> = { message: SUCCESS_MESSAGE, code: 200, data: currentPermissions }
            return response

        } catch (error) {

            const RESPONSE_TOKEN_INVALID = "Token invalid"
            const messageError = (error as Error).message
            if (messageError === RESPONSE_TOKEN_INVALID) return { message: TOKEN_EXPIRED, code: 401 }
            return { message: ERROR_MESSAGE, code: 500 }

        }

    }

    async getFullName(token: String): Promise<CustomResponse<String>> {

        try {

            const userData = await this._authGoogleAPI.getUserData(token)
            const fullName = `${userData.firstName} ${userData.middleName} ${userData.lastName}`
            const response: CustomResponse<String> = { message: SUCCESS_MESSAGE, code: 200, data: fullName }
            return response

        } catch (error) {

            const RESPONSE_TOKEN_INVALID = "Token invalid"
            const messageError = (error as Error).message
            if (messageError === RESPONSE_TOKEN_INVALID) return { message: TOKEN_EXPIRED, code: 401 }
            return { message: ERROR_MESSAGE, code: 500 }

        }

    }

    async changeEmail({ token, newEmail }: { token: String; newEmail: String; }): Promise<CustomResponse<void>> {

        try {

            const wasChangedEmail = this._authGoogleAPI.updateEmail(token, newEmail)
            return { message: CHANGE_EMAIL_SUCCESS, code: 200, }

        } catch (error) {

            return { message: ERROR_MESSAGE, code: 500, }

        }

    }

}