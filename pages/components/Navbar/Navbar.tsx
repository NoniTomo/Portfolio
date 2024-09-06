import React from 'react'
import { ReactComponent as BurgerIcon } from '@assets/icons/Burger.svg'
import { Box } from '@src/shared/components'
import clsx from 'clsx'

import { buttons } from './constants/index'
import { NavButton, ThemeToggle } from './components'

import styles from './Navbar.module.css'

export const Navbar = () => {
  const [open, setOpen] = React.useState(true)

  return (
    <Box component="nav" className={styles.container}>
      <ul>
        <li className={clsx(styles.button, styles.burger)}>
          <NavButton onClick={() => setOpen(!open)} icon={BurgerIcon} />
        </li>
        {buttons.map((button) => (
          <li
            key={button.to}
            className={clsx(styles.button, {
              [styles.container_open]: open,
              [styles.container_close]: !open
            })}
          >
            <NavButton to={button.to} icon={button.icon} text={button.text} />
          </li>
        ))}
        <li className={styles.button}>
          <ThemeToggle
            className={clsx(styles.button, {
              [styles.container_open]: open,
              [styles.container_close]: !open
            })}
          />
        </li>
      </ul>
    </Box>
  )
}
