import type { PropsWithChildren } from 'react'
import { SunIcon, MoonIcon } from '@heroicons/react/24/outline'
import InsightIconButton from '../atoms/InsightIconButton'

interface IProps {
  darkMode: boolean
  onToggle: () => void
}

const InsightDarkModeToggle = ({
  darkMode,
  onToggle,
}: PropsWithChildren<IProps>): JSX.Element => {
  const icon = darkMode ? (
    <SunIcon className="h-6 w-6" />
  ) : (
    <MoonIcon className="h-6 w-6" />
  )
  return (
    <InsightIconButton
      variant="ghost"
      onClick={onToggle}
      size="small"
      className="dark:bg-black dark:text-white dark:hover:bg-gray-900"
    >
      {icon}
    </InsightIconButton>
  )
}

export default InsightDarkModeToggle
