import type { PropsWithChildren } from 'react'
import clsx from 'clsx'
import {
  BUTTON_SIZE_CONFIG,
  BUTTON_VARIANT_CONFIG,
} from '../../constants/button'
import type {
  ButtonAriaPopus,
  ButtonSizes,
  ButtonVariants,
} from '../../types/common/button.type'

interface IProps {
  ariaControls?: string | undefined
  ariaHasPopup?: ButtonAriaPopus
  ariaExpanded?: boolean | undefined
  children?: React.ReactNode | object
  className?: string
  disabled?: boolean
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void
  size?: ButtonSizes
  variant?: ButtonVariants
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
    >
      {children}
    </button>
  )
}

export default InsightIconButton
