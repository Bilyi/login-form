import { combineReducers } from 'redux'

import { authReducer } from 'state/auth/auth.reducer'

export const appReducer = combineReducers({
  auth: authReducer,
})

export type RootState = ReturnType<typeof appReducer>
