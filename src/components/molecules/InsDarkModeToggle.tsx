import Brightness4Icon from '@mui/icons-material/Brightness4'
import Brightness7Icon from '@mui/icons-material/Brightness7'
import InsIconButton from '../atoms/InsIconButton'

interface IProps {
  darkMode: boolean
  style?: React.CSSProperties
  onToggle: () => void
}

const InsDarkModeToggle = ({
  darkMode,
  style,
  onToggle,
}: IProps): JSX.Element => {
  return (
    <InsIconButton onClick={onToggle} style={style}>
      {darkMode ? <Brightness7Icon /> : <Brightness4Icon />}
    </InsIconButton>
  )
}

export default InsDarkModeToggle
