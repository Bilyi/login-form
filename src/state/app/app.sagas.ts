import { all } from 'redux-saga/effects'

import authSagas from 'state/auth/auth.sagas'

export function* appSagas() {
  yield all([authSagas()])
}
