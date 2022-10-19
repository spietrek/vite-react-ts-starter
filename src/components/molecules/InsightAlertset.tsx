import type { PropsWithChildren } from 'react'
import InsightAlert from '../atoms/InsightAlert'
import type { IAlert } from '../../types/common/alert.type'

interface IProps {
  alerts: IAlert[]
}

const InsightAlertset = ({
  alerts,
}: PropsWithChildren<IProps>): JSX.Element => (
  <>
    {alerts
      .filter(item => item.enabled)
      .map(alert => (
        <div key={alert.id} className="mb-2">
          <InsightAlert label={alert.label} variant={alert.variant} />
        </div>
      ))}
  </>
)

export default InsightAlertset
