import { ReactComponent as MoonIcon } from '@assets/icons/Moon.svg'
import { ReactComponent as SunIcon } from '@assets/icons/Sun.svg'
import { Box, Button, Typography } from '@src/shared/components'
import { useTheme } from '@src/shared/contexts'

import styles from './ThemeToggle.module.css'

export type ThemeToggleProps = {
  className?: string
}

export const ThemeToggle = ({ className }: ThemeToggleProps) => {
  const { value, toggle } = useTheme()

  return (
    <Box className={className}>
      <Button className={styles.button} variant="text" onClick={() => toggle()}>
        {value === 'dark' ? <SunIcon className={styles.icon} /> : <MoonIcon className={styles.icon} />}
        <Typography variant="p" className={styles.text}>
          Сменить тему
        </Typography>
      </Button>
    </Box>
  )
}
