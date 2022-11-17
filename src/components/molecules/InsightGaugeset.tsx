import type { PropsWithChildren } from 'react'
import InsightGauge from './InsightGauge'
import type { IGauge } from '../../types/common/gauge.type'

interface IProps {
  items: IGauge[]
}

const InsightGaugeset = ({ items }: PropsWithChildren<IProps>): JSX.Element => (
  <>
    {items.map((item, index) => (
      <div
        key={index}
        className="w-full text-center"
        data-testid="insightGaugeSet"
      >
        <InsightGauge
          value={item.value}
          color={item.color}
          label={item.label}
          opacity={item.opacity}
          size="160px"
        />
      </div>
    ))}
  </>
)

export default InsightGaugeset
