import { SunIcon, MoonIcon } from '@heroicons/react/24/outline'
import {
  withThemeProvider,
  useDarkMode,
} from '../../providers/withThemeProvider'
import InsightIconButton from '../atoms/InsightIconButton'

const InsightDarkModeToggle = (): JSX.Element => {
  const { darkMode, setDarkMode } = useDarkMode()

  const handleToggleDarkMode = (): void => {
    const value = !darkMode
    setDarkMode(value)
  }

  const icon = darkMode ? (
    <SunIcon className="h-6 w-6" data-testid="insightLightMode" />
  ) : (
    <MoonIcon className="h-6 w-6" data-testid="insightDarkMode" />
  )

  return (
    <InsightIconButton
      variant="ghost"
      onClick={handleToggleDarkMode}
      size="small"
      className="dark:bg-black dark:text-white dark:hover:bg-gray-900"
    >
      {icon}
    </InsightIconButton>
  )
}

export default withThemeProvider(InsightDarkModeToggle)
