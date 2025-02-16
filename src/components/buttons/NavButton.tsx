import clsx from 'clsx'
import { PropsWithChildren } from 'react'
import { NavLink } from 'react-router-dom'

import styles from 'components/buttons/Buttons.module.scss'

interface Props {
  rout: string
  className?: string
}

export const NavButton = ({ rout, children, className }: PropsWithChildren<Props>) => {
  return (
    <NavLink to={rout} className={clsx(styles.primary, className)}>
      {children}
    </NavLink>
  )
}
