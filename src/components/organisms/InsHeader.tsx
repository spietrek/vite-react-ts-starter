import { MenuOutlined } from '@mui/icons-material'
import { Switch } from '@mui/material'
import { Link } from 'react-router-dom'
import InsIconButton from '../atoms/InsIconButton'
import InsImage from '../atoms/InsImage'
import InsAppBar from '../molecules/InsAppBar'
import InsProfile from './InsProfile'

interface IProps {
  darkMode: boolean
  onToggleDarkMode: () => void
  onToggleDrawer: () => void
}

const InsHeader = ({
  darkMode,
  onToggleDarkMode,
  onToggleDrawer,
}: IProps): JSX.Element => {
  return (
    <InsAppBar
      position="static"
      style={{ backgroundColor: 'background.default', boxShadow: 'none' }}
    >
      <div className="xs:block lg:hidden">
        <InsIconButton
          style={{ color: '#000', marginRight: '12px' }}
          onClick={onToggleDrawer}
        >
          <MenuOutlined />
        </InsIconButton>
      </div>

      <Link to="/">
        <InsImage
          src="assets/images/Insight_logo.svg"
          alt="Insight"
          width="200"
        />
      </Link>
      <div className="flex-grow" />
      <Switch checked={darkMode} onChange={onToggleDarkMode} />
      <InsProfile className="justify-end" />
    </InsAppBar>
  )
}

export default InsHeader
