import InsightButton from '../atoms/InsightButton'
import type { ITabButton } from '../../types/common/tabButton.type'

const InsightTabButton = ({
  currentTab,
  label = 'Not Provided',
  onClick,
}: ITabButton): JSX.Element => (
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
)

export default InsightTabButton
