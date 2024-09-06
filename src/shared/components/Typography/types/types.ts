import type React from 'react'

export type VariantTypography = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p'

export type TypographyProps = {
  variant?: VariantTypography
  children?: React.ReactNode
  wrap?: boolean
  bold?: boolean
  align?: 'left' | 'justify'
  className?: string
} & React.ComponentProps<'p'> &
  React.ComponentProps<'h1'> &
  React.ComponentProps<'h2'> &
  React.ComponentProps<'h3'> &
  React.ComponentProps<'h4'> &
  React.ComponentProps<'h5'> &
  React.ComponentProps<'h6'>
