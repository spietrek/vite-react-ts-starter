import { Button } from '@mui/material'
import {
  ButtonAriaPopus,
  ButtonColors,
  ButtonSizes,
  ButtonVariants,
} from '../../types'

interface IProps {
  ariaControls?: string | undefined
  ariaHasPopup?: ButtonAriaPopus
  ariaExpanded?: boolean | undefined
  children?: React.ReactNode
  color?: ButtonColors
  disabled?: boolean
  endIcon?: React.ReactNode
  fullWidth?: boolean
  href?: string | undefined
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void
  size?: ButtonSizes
  startIcon?: React.ReactNode
  style?: object
  tabIndex?: number | undefined
  type?: 'button' | 'submit' | 'reset'
  variant?: ButtonVariants
}

const InsButton = ({
  ariaControls = undefined,
  ariaHasPopup = undefined,
  ariaExpanded = undefined,
  children,
  color = 'inherit',
  disabled = false,
  endIcon = null,
  fullWidth = false,
  href = undefined,
  onClick,
  size = 'medium',
  startIcon = null,
  style = {},
  tabIndex = undefined,
  type = 'button',
  variant = 'text',
}: IProps): JSX.Element => {
  return (
    <Button
      aria-controls={ariaControls}
      aria-haspopup={ariaHasPopup}
      aria-expanded={ariaExpanded}
      color={color}
      disabled={disabled}
      endIcon={endIcon}
      fullWidth={fullWidth}
      href={href}
      onClick={onClick}
      size={size}
      startIcon={startIcon}
      style={style}
      tabIndex={tabIndex}
      type={type}
      variant={variant}
    >
      {children}
    </Button>
  )
}

export default InsButton
