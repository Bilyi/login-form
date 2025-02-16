import { Button } from 'components/buttons/Button'
import { NavButton } from 'components/buttons/NavButton'
import { Card } from 'components/card/Card'
import { Error } from 'components/errors/Error'
import { SvgIconBack } from 'components/svg/SvgIconBack'
import * as routes from 'constants/routes'
import styles from 'pages/profile/Profile.module.scss'
import { useAppDispatch, useAppSelector } from 'state/app'
import { logoutUser, selectCurrentUser } from 'state/auth'

export const Profile = () => {
  const dispatch = useAppDispatch()
  const currentUser = useAppSelector(selectCurrentUser)

  const handleLogout = () => dispatch(logoutUser())

  return (
    <Card direction="column" justify="start" align="center" gap={32}>
      <NavButton className={styles.backBtn} rout={routes.HOME}>
        <SvgIconBack className={styles.svg} />
      </NavButton>
      {currentUser?.image && (
        <div className={styles.imageWrapper}>
          <img className={styles.image} src={currentUser.image} alt={currentUser.firstName} />
        </div>
      )}
      <h2 className={styles.userName}>{`Hi, ${currentUser?.firstName} ${currentUser?.lastName}`}</h2>
      <Error />
      <Button
        className={styles.logoutBtn}
        onClick={handleLogout}
        text="Logout"
        type="button"
        loading={false}
        disabled={false}
      />
    </Card>
  )
}
