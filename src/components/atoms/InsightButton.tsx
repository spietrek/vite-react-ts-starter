import type { PropsWithChildren } from 'react'
import clsx from 'clsx'
import {
  BUTTON_SIZE_CONFIG,
  BUTTON_VARIANT_CONFIG,
} from '../../constants/common/button'
import type {
  BUTTON_SIZE,
  BUTTON_TYPE,
  BUTTON_VARIANT,
} from '../../constants/common/button'
import type { ButtonAriaPopup } from '../../types/common/button.type'

interface IProps {
  ariaControls?: string | undefined
  ariaHasPopup?: ButtonAriaPopup
  ariaExpanded?: boolean | undefined
  children?: React.ReactNode
  className?: string
  disabled?: boolean
  endIcon?: React.ReactNode
  fullWidth?: boolean
  loading?: boolean
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void
  size?: typeof BUTTON_SIZE[number]
  startIcon?: React.ReactNode
  style?: React.CSSProperties
  tabIndex?: number | undefined
  type?: typeof BUTTON_TYPE[number]
  variant?: typeof BUTTON_VARIANT[number]
}

const InsightButton = ({
  ariaControls = undefined,
  ariaHasPopup = undefined,
  ariaExpanded = undefined,
  children,
  className,
  disabled = false,
  endIcon = null,
  fullWidth = false,
  loading = false,
  onClick,
  size = 'medium',
  startIcon = null,
  style = {},
  tabIndex = undefined,
  type = 'button',
  variant = 'primary',
}: PropsWithChildren<IProps>): JSX.Element => {
  const variantClass = BUTTON_VARIANT_CONFIG[variant]
  const sizeClass = BUTTON_SIZE_CONFIG[size]
  const fullWidthClass = fullWidth ? 'w-full' : ''
  const loadingClass = loading ? 'btn-loading' : ''
  const classNames = clsx(
    'btn',
    className,
    variantClass,
    sizeClass,
    fullWidthClass,
    loadingClass,
  )

  return (
    <button
      aria-controls={ariaControls}
      aria-haspopup={ariaHasPopup}
      aria-expanded={ariaExpanded}
      className={classNames}
      disabled={disabled}
      onClick={onClick}
      style={style}
      tabIndex={tabIndex}
      type={type}
    >
      {startIcon !== null && <div className="w-6">{startIcon}</div>}
      {children}
      {endIcon !== null && <div className="w-6">{endIcon}</div>}
    </button>
  )
}

export default InsightButton
