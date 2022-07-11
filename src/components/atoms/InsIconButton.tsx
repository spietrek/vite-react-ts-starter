import { IconButton } from '@mui/material'
import { ButtonAriaPopus, ButtonColors, ButtonSizes } from '../../types'

interface IProps {
  ariaControls?: string | undefined
  ariaHasPopup?: ButtonAriaPopus
  ariaExpanded?: boolean | undefined
  children?: React.ReactNode
  color?: ButtonColors
  disabled?: boolean
  size?: ButtonSizes
  style?: object
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void
}

const InsIconButton = ({
  ariaControls = undefined,
  ariaHasPopup = undefined,
  ariaExpanded = undefined,
  children,
  color = 'inherit',
  disabled = false,
  onClick,
  size = 'medium',
  style = {},
}: IProps): JSX.Element => {
  return (
    <IconButton
      aria-controls={ariaControls}
      aria-haspopup={ariaHasPopup}
      aria-expanded={ariaExpanded}
      color={color}
      disabled={disabled}
      onClick={onClick}
      size={size}
      style={style}
    >
      {children}
    </IconButton>
  )
}

export default InsIconButton
