import type { PropsWithChildren } from 'react'
import { ChevronDownIcon } from '@heroicons/react/24/outline'
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

interface IProps {
  children?: React.ReactNode
  className?: string
  disabled?: boolean
  fullWidth?: boolean
  menuItems?: React.ReactNode
  size?: typeof BUTTON_SIZE[number]
  type?: typeof BUTTON_TYPE[number]
  variant?: typeof BUTTON_VARIANT[number]
}

const InsightDropDown = ({
  children,
  className = '',
  disabled = false,
  fullWidth = false,
  menuItems = null,
  size = 'medium',
  variant = 'primary',
}: PropsWithChildren<IProps>): JSX.Element => {
  const disabledClass = disabled ? 'btn-disabled' : ''
  const fullWidthClass = fullWidth ? 'w-full' : ''
  const sizeClass = BUTTON_SIZE_CONFIG[size]
  const variantClass = BUTTON_VARIANT_CONFIG[variant]
  const classNames = clsx(
    'btn',
    className,
    disabledClass,
    fullWidthClass,
    sizeClass,
    variantClass,
  )

  return (
    <div className="dropdown-end dropdown">
      <label tabIndex={0} className={classNames}>
        {children}
        <div className="w-6">
          <ChevronDownIcon className="h-5 w-5" />
        </div>
      </label>
      <ul
        tabIndex={0}
        className="dropdown-content menu menu-compact m-0 w-full bg-white p-2 text-black dark:bg-gray-900 dark:text-white"
      >
        {menuItems}
      </ul>
    </div>
  )
}

export default InsightDropDown
