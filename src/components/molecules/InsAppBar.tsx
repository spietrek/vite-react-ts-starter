import { AppBar, Toolbar } from '@mui/material'

interface IProps {
  color?: 'inherit' | 'default' | 'primary' | 'secondary'
  component?: React.ElementType
  elevation?: number
  position?: 'fixed' | 'absolute' | 'sticky' | 'static' | 'relative'
  children?: React.ReactNode
  style?: object
}

const InsAppBar = ({
  color = 'inherit',
  component = 'header',
  elevation = 1,
  position = 'static',
  children = null,
  style,
}: IProps): JSX.Element => (
  <AppBar
    color={color}
    component={component}
    elevation={elevation}
    position={position}
    style={style}
  >
    <Toolbar style={{ padding: '16px' }}>{children}</Toolbar>
  </AppBar>
)

export default InsAppBar
