import { useForm, FormProvider } from 'react-hook-form'

import { Button } from 'components/buttons/Button'
import { Card } from 'components/card/Card'
import { Error } from 'components/errors/Error'
import { TextInput } from 'components/textInput/TextInput'
import { FormValues, getDefaultValues, MIN_CHARACTERS_COUNT, MIN_PASSWORD_CHARACTERS_COUNT } from 'pages/login/utils'
import { useAppDispatch } from 'state/app'
import { loginUser, setAuthError } from 'state/auth'

export const Login = () => {
  const dispatch = useAppDispatch()

  const form = useForm<FormValues>({
    defaultValues: getDefaultValues(),
  })

  const {
    handleSubmit,
    register,
    formState: { isSubmitting, errors },
  } = form

  const onSubmit = async (values: FormValues) => {
    try {
      const { username, password } = values
      dispatch(loginUser({ username, password }))
    } catch (e) {
      dispatch(setAuthError('Something went wrong'))
    }
  }

  return (
    <FormProvider {...form}>
      <form onSubmit={handleSubmit(onSubmit)} data-testid="hierarchy-settings-page">
        <Card direction="column" justify="center" align="center" gap={12}>
          <TextInput
            name="username"
            alias="Username"
            register={register}
            validation={{
              required: true,
              minLength: MIN_CHARACTERS_COUNT,
            }}
            error={errors.username}
            placeholder="Enter username"
          />
          <TextInput
            name="password"
            alias="Password"
            register={register}
            validation={{
              required: true,
              minLength: MIN_PASSWORD_CHARACTERS_COUNT,
            }}
            error={errors.password}
            placeholder="Enter password"
          />
          <Error />
          <Button type="submit" text="Login" loading={isSubmitting} disabled={isSubmitting} />
        </Card>
      </form>
    </FormProvider>
  )
}
