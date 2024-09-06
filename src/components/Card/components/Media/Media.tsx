import type { BoxProps } from '@src/shared/components'
import { Box } from '@src/shared/components'
import clsx from 'clsx'

import styles from './Media.module.css'

export type MediaProps<T extends React.ElementType> = {
  children?: React.ReactNode
  className?: string
  component?: T
} & BoxProps<T>

export const Media = <T extends React.ElementType = 'img'>({
  children,
  className,
  component,
  ...props
}: MediaProps<T>) => (
  <Box component={component ?? 'img'} className={clsx(styles.card__media, className)} {...props}>
    {children}
  </Box>
)
