import { NavButton } from 'components/buttons/NavButton'
import { Card } from 'components/card/Card'
import * as routes from 'constants/routes'

export const NotFound = () => {
  return (
    <Card justify="center" align="center" direction="column" gap={20}>
      Page Not found
      <div>
        <NavButton rout={routes.HOME}>Go home</NavButton>
      </div>
    </Card>
  )
}
