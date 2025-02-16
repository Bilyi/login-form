export interface User {
  email: string
  firstName: string
  gender: string
  id: number
  image: string
  lastName: string
  username: string
}

export interface AuthUser extends User {
  accessToken: string
  refreshToken: string
}
