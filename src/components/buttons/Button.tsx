import clsx from 'clsx'

import styles from 'components/buttons/Buttons.module.scss'

interface Props {
  text: string
  type: 'button' | 'submit'
  loading?: boolean
  disabled?: boolean
  onClick?: () => void
  className?: string
}

export const Button = ({ text, disabled, loading, type, onClick, className }: Props) => {
  return (
    <button type={type} disabled={disabled} className={clsx(styles.primary, className)} onClick={onClick}>
      {loading ? 'Loading' : text}
    </button>
  )
}
