export const MIN_CHARACTERS_COUNT = 3
export const MIN_PASSWORD_CHARACTERS_COUNT = 6

export interface FormValues {
  username: string
  password: string
}

export const getDefaultValues = (): FormValues => {
  return {
    username: '',
    password: '',
  }
}
