import { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'

import { ins } from 'api/axios'
import { GET_USER_URL, REFRESH_TOKEN_URL } from 'constants/auth'
import { AuthContextProps } from 'providers/authProvider/AuthUserContext'
import { useAppDispatch } from 'state/app'
import { logoutUser, setAuth, setUser } from 'state/auth'
import { AuthResponse } from 'state/auth/auth.types'
import { getTokensFromCookies, removeTokensFromCookies, setTokensToCookies } from 'utils/cookies'

export const useAuth = (): AuthContextProps => {
  const [authUser, setAuthUser] = useState<AuthContextProps>('loading')
  const dispatch = useAppDispatch()
  const location = useLocation()

  useEffect(() => {
    const checkAuth = async () => {
      const { accessToken, refreshToken } = getTokensFromCookies()

      if (!accessToken && refreshToken) {
        try {
          const response: AuthResponse = await ins.post(REFRESH_TOKEN_URL, { refreshToken })
          if (response.data) {
            const { accessToken, refreshToken, ...rest } = response.data
            setTokensToCookies({ accessToken, refreshToken })
            setAuthUser(rest)
            dispatch(setUser(rest))
            dispatch(setAuth(true))
          }
        } catch (error) {
          console.error('Token refresh failed:', error)
          removeTokensFromCookies()
          dispatch(logoutUser())
        }
      }

      if (accessToken) {
        try {
          const response = await ins.get(GET_USER_URL, {
            headers: { Authorization: `Bearer ${accessToken}` },
          })
          setAuthUser(response.data)
          dispatch(setUser(response.data))
          dispatch(setAuth(true))
        } catch (error) {
          console.error('Failed to fetch user:', error)
          removeTokensFromCookies()
          dispatch(logoutUser())
        }
      }

      setAuthUser(null)
    }

    checkAuth()
  }, [dispatch, location.pathname])

  return authUser
}
