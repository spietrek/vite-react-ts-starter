import type { PropsWithChildren } from 'react'
import InsightAlert from '../atoms/InsightAlert'
import type { IAlert } from '../../types/common/alert.type'

interface IProps {
  alerts: IAlert[]
  onAlertClose: (id: number) => void
}

const InsightAlertset = ({
  alerts,
  onAlertClose,
}: PropsWithChildren<IProps>): JSX.Element => (
  <>
    {alerts
      .filter(item => item.visible)
      .map(alert => (
        <div key={alert.id} className="mb-2" data-testid="insightAlertset">
          <InsightAlert
            id={alert.id}
            label={alert.label}
            variant={alert.variant}
            onClose={onAlertClose}
          />
        </div>
      ))}
  </>
)

export default InsightAlertset
