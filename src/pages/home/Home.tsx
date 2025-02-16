import { NavButton } from 'components/buttons/NavButton'
import { Card } from 'components/card/Card'
import * as routes from 'constants/routes'
import { useAppSelector } from 'state/app'
import { selectIsAuthenticated } from 'state/auth'

export const Home = () => {
  const isAuthenticated = useAppSelector(selectIsAuthenticated)
  const buttonText = isAuthenticated ? 'profile' : 'login'

  return (
    <Card align="center" justify="between">
      <NavButton rout={isAuthenticated ? routes.PROFILE : routes.LOGIN}>{`Go to ${buttonText}`} </NavButton>
    </Card>
  )
}
