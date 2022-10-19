import type { PropsWithChildren } from 'react'
import { InformationCircleIcon } from '@heroicons/react/24/outline'

interface IProps {
  children?: React.ReactNode
  title?: string
  description?: string
}

const InsightDropDownHelper = ({
  children,
  title = 'Not set',
  description = 'Not set',
}: PropsWithChildren<IProps>): JSX.Element => {
  return (
    <div className="flex">
      {children}
      <div className="dropdown-end dropdown">
        <label
          tabIndex={0}
          className="btn btn-ghost btn-circle btn-xs text-info"
        >
          <InformationCircleIcon className="h-6 w-6" />
        </label>
        <div
          tabIndex={0}
          className="card-compact card dropdown-content rounded-box w-64 bg-base-100 shadow"
        >
          <div className="card-body">
            <h4 className="card-title">{title}</h4>
            <p>{description}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default InsightDropDownHelper
