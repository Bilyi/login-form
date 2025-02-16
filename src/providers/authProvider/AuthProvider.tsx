import { FC, PropsWithChildren } from 'react'

import { Loading } from 'components/loading/Loading'
import { useAuth } from 'hooks/useAuth'
import { AuthUserContext } from 'providers/authProvider/AuthUserContext'

const AuthProviderView: PropsWithChildren<FC> = ({ children }) => {
  const authUser = useAuth()

  if (authUser === 'loading') {
    return <Loading />
  }

  return <AuthUserContext.Provider value={{ user: authUser }}>{children}</AuthUserContext.Provider>
}

export const AuthProvider = AuthProviderView
