import { MenuOutlined } from '@mui/icons-material'
import { Link } from 'react-router-dom'
import InsIconButton from '../atoms/InsIconButton'
import InsImage from '../atoms/InsImage'
import InsAppBar from '../molecules/InsAppBar'
import InsProfile from './InsProfile'

interface IProps {
  onToggleDrawer: () => void
}

const InsHeader = ({ onToggleDrawer }: IProps): JSX.Element => {
  return (
    <InsAppBar
      position="static"
      style={{ backgroundColor: 'inherit', boxShadow: 'none' }}
    >
      <div className="xs:tw-block lg:tw-hidden">
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
      <div className="tw-flex-grow" />
      <InsProfile className="tw-justify-end" />
    </InsAppBar>
  )
}

export default InsHeader
