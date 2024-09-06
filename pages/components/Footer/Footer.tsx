import React from 'react'
import type { BoxProps } from '@src/shared/components'
import { Box } from '@src/shared/components'

export type FooterProps = {
  children?: React.ReactNode
} & BoxProps

export const Footer = ({ children, ...props }: FooterProps) => (
  <Box component="footer" {...props}>
    {children}
  </Box>
)
