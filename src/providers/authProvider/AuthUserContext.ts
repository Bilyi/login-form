import { createContext } from 'react'

import { MayBeNull } from 'types/types'
import { User } from 'types/user'

export type AuthContextProps = User | 'loading'

export interface AuthContextValue {
  user: User
}

export const AuthUserContext = createContext<MayBeNull<AuthContextValue>>(null)
