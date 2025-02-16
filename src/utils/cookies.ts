import Cookies from 'js-cookie'

import { REFRESH_TOKEN_EXP_TIME, SESSION_TOKEN_EXP_TIME } from 'constants/auth'

export const setTokensToCookies = ({ accessToken, refreshToken }: { accessToken: string; refreshToken: string }) => {
  Cookies.set('sessionToken', accessToken, {
    expires: SESSION_TOKEN_EXP_TIME,
    secure: true,
    sameSite: 'Strict',
  })
  Cookies.set('refreshToken', refreshToken, {
    expires: REFRESH_TOKEN_EXP_TIME,
    secure: true,
    sameSite: 'Strict',
  })
}

export const removeTokensFromCookies = () => {
  Cookies.remove('refreshToken')
  Cookies.remove('sessionToken')
}

export const getTokensFromCookies = (): { accessToken?: string; refreshToken?: string } => {
  const accessToken = Cookies.get('sessionToken')
  const refreshToken = Cookies.get('refreshToken')

  return {
    accessToken,
    refreshToken,
  }
}
