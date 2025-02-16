import { AuthUser, User } from 'types/user'

export const IS_AUTHENTICATED = 'IS_AUTHENTICATED'
export const SET_AUTH_ERROR = 'SET_AUTH_ERROR'
export const SET_USER = 'SET_USER'
export const LOGOUT_USER = 'LOGOUT_USER'
export const LOGIN_USER = 'LOGIN_USER'

export interface AuthState {
  isAuthenticated: boolean
  authError: string | null
  user: User | null
}

export interface SetAuth {
  type: typeof IS_AUTHENTICATED
  payload: boolean
}

export interface SetAuthError {
  type: typeof SET_AUTH_ERROR
  payload: string
}

export interface SetUser {
  type: typeof SET_USER
  payload: User | null
}

export interface LogoutUser {
  type: typeof LOGOUT_USER
}

export interface LoginUser {
  type: typeof LOGIN_USER
  payload: any
}

export interface AuthResponse {
  data: AuthUser
  status: number
  statusText: string
}

export type AuthActions = SetAuth | SetAuthError | SetUser | LogoutUser | LoginUser
