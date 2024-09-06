import type { BoxProps } from '@src/shared/components'
import clsx from 'clsx'

import styles from './Content.module.css'

export type CardContentProps<T extends React.ElementType> = {
  children?: React.ReactNode
  component?: T
  className?: string | undefined
} & BoxProps<T>

export const Content = <T extends React.ElementType>({
  children,
  className,
  component,
  ...props
}: CardContentProps<T>) => {
  const Component = component ?? 'div'
  return (
    <Component
      component={component ?? 'div'}
      className={clsx(styles.card__content, className && className)}
      {...props}
    >
      {children}
    </Component>
  )
}
