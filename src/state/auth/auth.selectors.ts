import { AppState } from 'state/app'

export const selectCurrentUser = (state: AppState) => state.auth.user
export const selectIsAuthenticated = (state: AppState) => state.auth.isAuthenticated
export const selectAuthError = (state: AppState) => state.auth.authError
