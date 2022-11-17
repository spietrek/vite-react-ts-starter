import type { CSSProperties } from 'react'
import InsightTypography from '../atoms/InsightTypography'
import type { IGauge } from '../../types/common/gauge.type'

const InsightGauge = ({
  size = '160px',
  value,
  label = '',
  color = '#00dea9',
  opacity = 1,
}: IGauge): JSX.Element => {
  const gaugeStyles = {
    '--size': size,
    '--thickness': '10px',
    '--value': value,
    color,
  } as CSSProperties

  return (
    <div
      className="relative inline-flex"
      style={{ opacity }}
      data-testid="insightGauge"
    >
      <div
        className="radial-progress"
        style={gaugeStyles}
        data-testid="gauge-styles"
      />
      <div className="absolute top-0 left-0 bottom-0 right-0 flex items-center justify-center">
        <div className="text-slate-600 dark:text-slate-300">
          <InsightTypography level="h4">{label}</InsightTypography>
        </div>
      </div>
    </div>
  )
}

export default InsightGauge
