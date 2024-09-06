import React from 'react'
import { useTheme } from '@src/shared/contexts'

export type BoxProps<T extends React.ElementType> = {
  children?: React.ReactNode
  component?: T
} & React.ComponentPropsWithoutRef<T>

export const Box = <T extends React.ElementType = 'div'>({
  children,
  component,
  ...props
}: BoxProps<T>) => {
  const { value } = useTheme()
  const Component = component ?? 'div'
  return (
    <Component data-theme={value} {...props}>
      {children}
    </Component>
  )
}
