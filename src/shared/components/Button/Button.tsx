import React from 'react'
import { useTheme } from '@src/shared/contexts'
import clsx from 'clsx'

import styles from './Button.module.css'

export type ButtonProps = {
  variant?: 'contained' | 'outlined' | 'text'
  children?: React.ReactNode
  className?: string
} & React.ComponentProps<'button'>

export const Button = ({ variant = 'contained', className, children, ...props }: ButtonProps) => {
  const { value } = useTheme()

  return (
    <button
      data-theme={value}
      {...props}
      className={clsx(styles.button, className && className, {
        [styles.button__contained]: variant === 'contained',
        [styles.button__outlined]: variant === 'outlined',
        [styles.button__text]: variant === 'text'
      })}
    >
      {children}
    </button>
  )
}
