import InsightButton from '../atoms/InsightButton'
import type { ITabButton } from '../../types/common/tabButton.type'

const InsightTabButton = ({
  currentTab,
  label,
  onClick,
}: ITabButton): JSX.Element => {
  return (
    <div data-testid="insightTabButton">
      <InsightButton
        size="large"
        variant={currentTab ? 'secondary' : 'ghost'}
        onClick={onClick}
        style={{
          width: '100%',
          fontSize: '18px',
          border: 'none',
          fontWeight: currentTab ? 'bold' : 'normal',
        }}
      >
        {label}
      </InsightButton>
    </div>
  )
}

export default InsightTabButton
