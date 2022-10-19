import type { PropsWithChildren } from 'react'
import { XMarkIcon } from '@heroicons/react/24/outline'
import { clsx } from 'clsx'
import { ALERT_VARIANT_CONFIG, ALERT_ICON_CONFIG } from '../../constants/alert'
import type { AlertVariants } from '../../types/common/alert.type'

interface IProps {
  label: string
  variant: AlertVariants
}

const InsightAlert = ({
  label = '',
  variant = 'info',
}: PropsWithChildren<IProps>): JSX.Element => {
  const variantClass = ALERT_VARIANT_CONFIG[variant]
  const classNames = clsx('alert rounded-none', variantClass)
  const icon = ALERT_ICON_CONFIG[variant]

  return (
    <div className={classNames}>
      <div>
        {icon}
        <span>{label}</span>
      </div>
      <div className="flex-none">
        <button className="btn btn-ghost btn-sm">View</button>
        <button className="btn btn-ghost btn-sm">
          <XMarkIcon className="h-4 w-4 cursor-pointer rounded-full hover:text-red-500" />
        </button>
      </div>
    </div>
  )
}

export default InsightAlert
