import React from 'react'

import { ThemeContext } from './ThemeContext'

export interface ThemeProviderProps {
  children: React.ReactNode
  defaultTheme?: Theme
}

const localTheme = localStorage.getItem('theme')
const defaultValue = localTheme === 'dark' || localTheme === 'light' ? localTheme : 'light'

export const ThemeProvider = ({ children, defaultTheme = defaultValue }: ThemeProviderProps) => {
  const [theme, setTheme] = React.useState(defaultTheme)

  React.useEffect(() => {
    document.querySelector('html')?.setAttribute('data-theme', theme)
    localStorage.setItem('theme', theme)
  }, [theme])

  const value = React.useMemo(() => ({ value: theme, set: setTheme }), [theme])

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
}
