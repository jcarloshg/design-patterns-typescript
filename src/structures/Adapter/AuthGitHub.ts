import { AuthAdapter, CHANGE_EMAIL_SUCCESS, CustomResponse, ERROR_MESSAGE, LOGIN_ERROR, LOGIN_SUCCESS, SUCCESS_MESSAGE, Token, TOKEN_EXPIRED } from './AuthAdapter';
import { AuthGitHubAPI } from './AuthGitHub.api';

export class AuthGitHub implements AuthAdapter {

  token?: String | undefined;
  private readonly _authGitHubAPI: AuthGitHubAPI

  constructor() {
    this._authGitHubAPI = new AuthGitHubAPI()
  }

  async logIn({ email, pass }: { email: String; pass: String; }): Promise<CustomResponse<Token>> {

    try {

      const token = await this._authGitHubAPI.logIn({ email, password: pass })
      this.token = token
      const response: CustomResponse<Token> = { message: LOGIN_SUCCESS, code: 200, data: this.token }
      return response

    } catch (error) {

      return { message: LOGIN_ERROR, code: 401 }

    }

  }

  async getCurrentPermissions(token: String): Promise<CustomResponse<String[]>> {

    try {

      const userData = await this._authGitHubAPI.getUserData(token)
      const currentPermissions = userData.permissions_assigned
      const response: CustomResponse<String[]> = { message: SUCCESS_MESSAGE, code: 200, data: currentPermissions }
      return response

    } catch (error) {

      const RESPONSE_TOKEN_INVALID = "Token not valid"
      const messageError = (error as Error).message
      if (messageError === RESPONSE_TOKEN_INVALID) return { message: TOKEN_EXPIRED, code: 401 }
      return { message: ERROR_MESSAGE, code: 500 }

    }

  }

  async getFullName(token: String): Promise<CustomResponse<String>> {

    try {

      const userData = await this._authGitHubAPI.getUserData(token)
      const fullName = `${userData.first_name} ${userData.middle_name} ${userData.last_name}`
      const response: CustomResponse<String> = { message: SUCCESS_MESSAGE, code: 200, data: fullName }
      return response

    } catch (error) {

      const RESPONSE_TOKEN_INVALID = "Token not valid"
      const messageError = (error as Error).message
      if (messageError === RESPONSE_TOKEN_INVALID) return { message: TOKEN_EXPIRED, code: 401 }
      return { message: ERROR_MESSAGE, code: 500 }

    }

  }

  async changeEmail({ token, newEmail }: { token: String; newEmail: String; }): Promise<CustomResponse<void>> {

    try {

      await this._authGitHubAPI.updateCredentials({ email: newEmail, token })
      return { message: CHANGE_EMAIL_SUCCESS, code: 200, }

    } catch (error) {

      return { message: ERROR_MESSAGE, code: 500, }

    }

  }


}