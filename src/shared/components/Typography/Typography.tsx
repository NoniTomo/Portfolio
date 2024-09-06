import { useTheme } from '@src/shared/contexts'
import clsx from 'clsx'

import type { TypographyProps } from './types/types'

import styles from './Typography.module.css'

export const Typography = ({
  variant = 'p',
  children,
  className,
  bold = false,
  wrap = true,
  align = 'left',
  ...props
}: TypographyProps) => {
  const Component = variant
  const { value } = useTheme()

  return (
    <Component
      className={clsx(
        styles.typography,
        {
          [styles.typography_wrap]: wrap,
          [styles.typography_bold]: bold,
          [styles.typography_justify]: align === 'justify',
          [styles.typography_left]: align === 'left'
        },
        className && className
      )}
      data-theme={value}
      {...props}
    >
      {children}
    </Component>
  )
}
