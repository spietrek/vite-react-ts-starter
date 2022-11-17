import type { PropsWithChildren } from 'react'
import { XMarkIcon } from '@heroicons/react/24/outline'
import { clsx } from 'clsx'
import {
  ALERT_VARIANT_CONFIG,
  ALERT_ICON_CONFIG,
} from '../../constants/common/alert'
import type { ALERT_VARIANT } from '../../constants/common/alert'

interface IProps {
  id: number
  label: string
  variant: typeof ALERT_VARIANT[number]
  onClose: (id: number) => void
}

const InsightAlert = ({
  id,
  label = '',
  variant = 'info',
  onClose,
}: PropsWithChildren<IProps>): JSX.Element => {
  const variantClass = ALERT_VARIANT_CONFIG[variant]
  const classNames = clsx('alert rounded-none flex-row', variantClass)
  const icon = ALERT_ICON_CONFIG[variant]

  const handleClose = (): void => {
    onClose(id)
  }

  return (
    <div className={classNames} data-testid="insightAlert">
      <div className="flex">
        <div className="w-[30px]" data-testid="insightAlert-icon">
          {icon}
        </div>
        {label}
      </div>
      <div className="flex">
        <button className="btn-ghost btn-sm btn">View</button>
        <button
          className="btn-ghost btn-sm btn"
          onClick={handleClose}
          data-testid="insightAlert-closeButton"
        >
          <XMarkIcon className="h-4 w-4 cursor-pointer rounded-full hover:text-red-500" />
        </button>
      </div>
    </div>
  )
}

export default InsightAlert
