import type { BoxProps } from '@src/shared/components'
import { Box } from '@src/shared/components'
import clsx from 'clsx'

import styles from './Description.module.css'

export type CardDescriptionProps<T extends React.ElementType> = {
  children?: React.ReactNode
  className?: string
  component?: T
} & BoxProps<T>

export const Description = <T extends React.ElementType = 'div'>({
  children,
  component,
  className,
  ...props
}: CardDescriptionProps<T>) => (
  <Box
    component={component ?? 'div'}
    className={clsx(styles.card__description, className && className)}
    {...props}
  >
    {children}
  </Box>
)
