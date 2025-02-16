import { configureStore } from '@reduxjs/toolkit'
import createSagaMiddleware from 'redux-saga'

import { appReducer as reducer, RootState } from 'state/app/app.reducer'
import { appSagas } from 'state/app/app.sagas'

const sagaMiddleware = createSagaMiddleware()

const store = configureStore({
  reducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      thunk: false,
      immutableCheck: false,
      serializableCheck: false,
    }).concat(sagaMiddleware),
  devTools: process.env.NODE_ENV === 'development',
})

export const initializeAppStore = () => {
  sagaMiddleware.run(appSagas)
  return store
}

export type AppState = RootState
export type AppDispatch = typeof store.dispatch
