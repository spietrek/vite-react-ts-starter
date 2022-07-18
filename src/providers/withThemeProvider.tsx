/* eslint-disable @typescript-eslint/explicit-function-return-type */
/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useContext } from 'react'
import { CssBaseline } from '@mui/material'
import { ThemeProvider } from '@mui/material/styles'
import useLocalStorage from '../hooks/useLocalStorage'
import darkTheme from '../themes/dark'
import defaultTheme from '../themes/default'

interface ContextProps {
  darkMode: boolean
  setDarkMode: (darkMode: boolean) => void
}

const Context = React.createContext<ContextProps>({
  darkMode: false,
  setDarkMode: () => null,
})

interface Props {
  children?: React.ReactNode
}

const Provider: React.FC<Props> = ({ children }) => {
  const [darkMode, setDarkMode] = useLocalStorage('insight_dark_mode', false)

  return (
    <Context.Provider
      value={{
        darkMode,
        setDarkMode,
      }}
    >
      {children}
    </Context.Provider>
  )
}

export const useDarkMode = () => useContext(Context)

export function withProvider(Component: any) {
  return function WrapperComponent(props: any) {
    return (
      <Provider>
        <Component {...props} />
      </Provider>
    )
  }
}

export { Context, Provider }

export const useApp = () => {
  const { darkMode, setDarkMode } = useDarkMode()

  return {
    darkMode,
    setDarkMode,
  }
}

export const withThemeProvider = (Component: any) => {
  const WrapperComponent = ({ props }: any): JSX.Element => {
    const { darkMode } = useApp()
    const theme = darkMode ? darkTheme : defaultTheme

    // update html element for tailwind to pick up
    const root = window.document.documentElement
    root.classList.remove(darkMode ? 'light' : 'dark')
    root.classList.add(darkMode ? 'dark' : 'light')

    return (
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Component {...props} />
      </ThemeProvider>
    )
  }
  return withProvider(WrapperComponent)
}
