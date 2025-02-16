import { call, put, takeEvery } from 'redux-saga/effects'

import { ins } from 'api/axios'
import { AUTH_USER_URL } from 'constants/auth'
import { setAuth, setAuthError, setUser } from 'state/auth/auth.actions'
import { LOGOUT_USER, LOGIN_USER, LoginUser, LogoutUser, AuthResponse } from 'state/auth/auth.types'
import { removeTokensFromCookies, setTokensToCookies } from 'utils/cookies'

export function* logoutUser(action: LogoutUser) {
  try {
    yield put(setUser(null))
    yield put(setAuth(false))
    yield put(setAuthError(''))
    removeTokensFromCookies()
  } catch (e) {
    yield put(setAuthError('Something went wrong'))
  }
}

export function* loginUser(action: LoginUser) {
  try {
    const user = action.payload
    if (user) {
      const response: AuthResponse = yield call(ins.post, AUTH_USER_URL, action.payload)
      if (response.data) {
        const { accessToken, refreshToken, ...rest } = response.data
        yield put(setAuth(true))
        yield put(setUser(rest))
        yield put(setAuthError(''))
        setTokensToCookies({ accessToken, refreshToken })
      }
    }
  } catch (e) {
    if (e?.response?.data?.message) {
      yield put(setAuthError(e.response.data.message))
    } else {
      yield put(setAuthError('Failed login'))
    }
  }
}

export default function* watcher() {
  yield takeEvery(LOGOUT_USER, logoutUser)
  yield takeEvery(LOGIN_USER, loginUser)
}
