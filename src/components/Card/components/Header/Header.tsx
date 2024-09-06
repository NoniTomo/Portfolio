import type { BoxProps } from '@src/shared/components'
import { Box } from '@src/shared/components'
import clsx from 'clsx'

import styles from './Header.module.css'

export type CardHeaderProps<T extends React.ElementType> = {
  children?: React.ReactNode
  component?: T
  className?: string
} & BoxProps<T>

export const Header = <T extends React.ElementType = 'div'>({
  children,
  component,
  className,
  ...props
}: CardHeaderProps<T>) => (
  <Box
    component={component ?? 'div'}
    className={clsx(styles.card__header, className && className)}
    {...props}
  >
    {children}
  </Box>
)
