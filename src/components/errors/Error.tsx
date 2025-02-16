import styles from 'components/errors/Error.module.scss'
import { SvgIconInfo } from 'components/svg/SvgIconInfo'
import { useAppSelector } from 'state/app'
import { selectAuthError } from 'state/auth'

export const Error = () => {
  const authError = useAppSelector(selectAuthError)

  if (!authError) {
    return null
  }

  return (
    <div className={styles.error}>
      <SvgIconInfo className={styles.svg} />
      {authError}
    </div>
  )
}
