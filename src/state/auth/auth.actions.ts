import { FormValues } from 'pages/login/utils'
import {
  IS_AUTHENTICATED,
  LOGIN_USER,
  LoginUser,
  LOGOUT_USER,
  LogoutUser,
  SET_AUTH_ERROR,
  SET_USER,
  SetUser,
  SetAuth,
  SetAuthError,
} from 'state/auth/auth.types'
import { User } from 'types/user'

export const setAuth = (condition: boolean): SetAuth => {
  return {
    type: IS_AUTHENTICATED,
    payload: condition,
  }
}

export const setAuthError = (reason: string): SetAuthError => {
  return {
    type: SET_AUTH_ERROR,
    payload: reason,
  }
}

export const setUser = (user: User | null): SetUser => {
  return {
    type: SET_USER,
    payload: user,
  }
}

export const logoutUser = (): LogoutUser => {
  return {
    type: LOGOUT_USER,
  }
}

export const loginUser = (user: FormValues): LoginUser => {
  return {
    type: LOGIN_USER,
    payload: user,
  }
}
