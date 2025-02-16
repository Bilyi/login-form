import clsx from 'clsx'
import { CSSProperties, PropsWithChildren } from 'react'

import styles from 'components/card/Card.module.scss'

interface Pops {
  gap?: number
  justify?: 'start' | 'center' | 'end' | 'between' | 'around'
  align?: 'start' | 'center' | 'end' | 'baseline'
  direction?: 'row' | 'column'
  style?: CSSProperties
  className?: string
}

export const Card = ({ children, gap, justify, style, align, direction, className }: PropsWithChildren<Pops>) => {
  return (
    <div
      style={{
        ...style,
        ...(!!gap && { gap: `${gap}px` }),
      }}
      className={clsx(
        styles.card,
        {
          [styles.column]: direction === 'column',
          [styles[`align-${align}`]]: !!align,
          [styles[`justify-${justify}`]]: !!justify,
        },
        className,
      )}
    >
      {children}
    </div>
  )
}
