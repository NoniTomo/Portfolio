import React from 'react'
import { NavLink } from 'react-router-dom'
import { Button, Typography } from '@src/shared/components'
import clsx from 'clsx'

import styles from './NavButton.module.css'

type Props = {
  to?: string
  icon?: React.FC<React.SVGProps<SVGSVGElement>>
  text?: React.ReactNode
  className?: string
} & React.ComponentProps<'button'>

export const NavButton = ({ to, icon, text, className, ...props }: Props) => {
  const Icon = icon

  return (
    <>
      {to ? (
        <NavLink className={className} to={to}>
          {({ isActive }) => (
            <Button className={styles.button} {...props} variant="text">
              {isActive
                ? Icon && <Icon className={clsx(styles.icon_active, styles.icon)} />
                : Icon && <Icon className={styles.icon} />}
              {text && (
                <Typography
                  variant="p"
                  className={clsx(styles.text, isActive ? styles.text_active : '')}
                >
                  {text}
                </Typography>
              )}
            </Button>
          )}
        </NavLink>
      ) : (
        <Button className={clsx(styles.button, className)} {...props} variant="text">
          {Icon && <Icon className={styles.icon} />}
          {text && (
            <Typography variant="p" className={styles.text_active}>
              {text}
            </Typography>
          )}
        </Button>
      )}
    </>
  )
}
