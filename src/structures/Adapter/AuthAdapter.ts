

export type Token = String
export type CustomResponse<T> = { data?: T, message: String, code: 200 | 401 | 500 }

export const SUCCESS_MESSAGE = 'All right'
export const ERROR_MESSAGE = 'Something was wrong. Please, try it again later'
export const TOKEN_EXPIRED = "The token expired"

export const LOGIN_ERROR = 'The credentials are wrong'
export const LOGIN_SUCCESS = 'The credentials are right'

export const CHANGE_EMAIL_SUCCESS = 'The email was changed 🥳'
export const CHANGE_EMAIL_ERROR_INVALID = 'The email is invalid 😥'


export interface AuthAdapter {
    token?: Token,
    logIn: ({ email, pass }: { email: String, pass: String }) => Promise<CustomResponse<Token>>,
    getCurrentPermissions: (token: String) => Promise<CustomResponse<String[]>>,
    getFullName: (token: String) => Promise<CustomResponse<String>>,
    changeEmail: ({ token, newEmail }: { token: String, newEmail: String }) => Promise<CustomResponse<void>>,
}