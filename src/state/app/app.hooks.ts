import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux'

import { AppState, AppDispatch } from 'state/app/app.store'

export const useAppDispatch = () => useDispatch<AppDispatch>()
export const useAppSelector: TypedUseSelectorHook<AppState> = useSelector
