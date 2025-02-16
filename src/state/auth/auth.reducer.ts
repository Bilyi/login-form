import { AuthActions, AuthState, IS_AUTHENTICATED, SET_AUTH_ERROR, SET_USER } from 'state/auth/auth.types'

export const INITIAL_STATE: AuthState = {
  isAuthenticated: false,
  authError: null,
  user: null,
}

export function authReducer(state: AuthState = INITIAL_STATE, action: AuthActions): AuthState {
  switch (action.type) {
    case IS_AUTHENTICATED:
      return { ...state, isAuthenticated: action.payload }
    case SET_AUTH_ERROR:
      return { ...state, authError: action.payload }
    case SET_USER:
      return { ...state, user: action.payload }

    default:
      return state
  }
}
