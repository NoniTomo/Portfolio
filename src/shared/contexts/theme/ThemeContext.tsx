import React from 'react'

export interface ThemeContextProps {
  value: Theme
  set: (theme: Theme) => void
}

export const ThemeContext = React.createContext<ThemeContextProps>({
  value: 'light',
  set: () => {}
})
