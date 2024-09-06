import React from 'react'

import { ThemeProvider } from './shared/contexts'

export interface ProvidersProps {
  children: React.ReactNode
}

const defaultTheme =
  localStorage.getItem('theme') === 'dark' || localStorage.getItem('theme') === 'light'
    ? localStorage.getItem('theme')
    : undefined

export const Providers = ({ children }: ProvidersProps) => {
  return <ThemeProvider defaultTheme={defaultTheme as Theme}>{children}</ThemeProvider>
}
