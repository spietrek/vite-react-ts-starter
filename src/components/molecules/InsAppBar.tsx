import { AppBar, styled, Toolbar } from '@mui/material'

const AppBarWrapper = styled(AppBar)(
  ({ theme }) => `
  background-color: ${theme.palette.background.default}
`,
) as typeof AppBar

interface IProps {
  color?: 'inherit' | 'default' | 'primary' | 'secondary'
  component?: React.ElementType
  elevation?: number
  position?: 'fixed' | 'absolute' | 'sticky' | 'static' | 'relative'
  children?: React.ReactNode
  style?: object
}

const InsAppBar = ({
  color = 'default',
  component = 'header',
  elevation = 1,
  position = 'static',
  children = null,
  style,
}: IProps): JSX.Element => {
  return (
    <AppBarWrapper
      color={color}
      component={component}
      elevation={elevation}
      position={position}
      style={style}
    >
      <Toolbar style={{ padding: '16px' }}>{children}</Toolbar>
    </AppBarWrapper>
  )
}

export default InsAppBar
