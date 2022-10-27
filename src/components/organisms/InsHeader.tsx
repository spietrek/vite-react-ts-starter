import type { PropsWithChildren } from 'react'
import { Link } from 'react-router-dom'
import InsightImage from '../atoms/InsightImage'
import InsightAppBar from '../molecules/InsightAppBar'
import InsightDarkModeToggle from '../molecules/InsightDarkModeToggle'
import InsProfile from './InsProfile'

interface IProps {
  darkMode: boolean
  onToggleDarkMode: () => void
}

const InsHeader = ({
  darkMode,
  onToggleDarkMode,
}: PropsWithChildren<IProps>): JSX.Element => (
  <InsightAppBar>
    <div className="mx-2 flex-1 px-2">
      <Link to="/">
        <InsightImage
          src="assets/images/insight_logo.png"
          altText="Insight"
          width="180"
        />
      </Link>
    </div>
    <div className="flex-none">
      <div className="mr-1">
        <InsightDarkModeToggle
          darkMode={darkMode}
          onToggle={onToggleDarkMode}
        />
      </div>
      <InsProfile className="justify-end" />
    </div>
  </InsightAppBar>
)

export default InsHeader
