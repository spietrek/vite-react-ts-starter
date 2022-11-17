import type { PropsWithChildren } from 'react'
import clsx from 'clsx'
import {
  BUTTON_SIZE_CONFIG,
  BUTTON_VARIANT_CONFIG,
} from '../../constants/common/button'
import type { BUTTON_SIZE, BUTTON_VARIANT } from '../../constants/common/button'
import type { ButtonAriaPopup } from '../../types/common/button.type'

interface IProps {
  ariaControls?: string | undefined
  ariaHasPopup?: ButtonAriaPopup
  ariaExpanded?: boolean | undefined
  children?: React.ReactNode | object
  className?: string
  disabled?: boolean
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void
  size?: typeof BUTTON_SIZE[number]
  variant?: typeof BUTTON_VARIANT[number]
}

const InsightIconButton = ({
  ariaControls = undefined,
  ariaHasPopup = undefined,
  ariaExpanded = undefined,
  children,
  className = '',
  disabled = false,
  onClick,
  size = 'medium',
  variant = 'primary',
}: PropsWithChildren<IProps>): JSX.Element => {
  const sizeClass = BUTTON_SIZE_CONFIG[size]
  const variantClass = BUTTON_VARIANT_CONFIG[variant]
  const classNames = clsx('btn', 'gap-2', className, sizeClass, variantClass)

  return (
    <button
      type="button"
      className={classNames}
      aria-controls={ariaControls}
      aria-haspopup={ariaHasPopup}
      aria-expanded={ariaExpanded}
      disabled={disabled}
      onClick={onClick}
      data-testid="insightIconButton"
    >
      {children}
    </button>
  )
}

export default InsightIconButton
