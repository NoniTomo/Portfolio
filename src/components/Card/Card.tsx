import React from 'react'
import type { BoxProps } from '@src/shared/components'
import { Box } from '@src/shared/components'
import clsx from 'clsx'

import { Content, Description, Header, Media } from './components'

import styles from './Card.module.css'

export type CardProps<T extends React.ElementType> = {
  children?: React.ReactNode
  className?: string
  component?: T
  direction?: 'row' | 'column'
} & BoxProps<T>

const Card = <T extends React.ElementType = 'div'>({
  children,
  className,
  component,
  direction = 'column',
  ...props
}: CardProps<T>) => (
  <Box
    component={component ?? 'div'}
    className={clsx(styles.card, direction === 'row' ? styles.card_row : styles.card_column, className)}
    {...props}
  >
    {children}
  </Box>
)

Card.Header = Header
Card.Description = Description
Card.Media = Media
Card.Content = Content

export { Card }
