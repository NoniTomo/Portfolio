import React from 'react'

import { ThemeContext } from './ThemeContext'

export const useTheme = () => {
  const themeContext = React.useContext(ThemeContext)

  const set = (theme: Theme) => themeContext.set(theme)

  const toggle = () => set(themeContext.value === 'light' ? 'dark' : 'light')

  return {
    value: themeContext.value,
    toggle,
    set
  }
}
