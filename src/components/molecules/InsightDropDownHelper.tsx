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
    <div className="flex" data-testid="insightDropDownHelper">
      {children}
      <div className="dropdown-end dropdown">
        <label
          tabIndex={0}
          className="text-accent2-200 btn-ghost btn-xs btn-circle btn"
        >
          <InformationCircleIcon className="h-6 w-6" />
        </label>
        <div
          tabIndex={0}
          className="card dropdown-content rounded-box card-compact w-64 border-2 bg-white shadow "
        >
          <div className="card-body">
            <h4
              className="card-title"
              data-testid="insightDrowDownHelper-title"
            >
              {title}
            </h4>
            <p data-testid="insightDrowDownHelper-description">{description}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default InsightDropDownHelper
