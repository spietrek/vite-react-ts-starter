import { render, screen } from '@testing-library/react'
import { ALERT_VARIANT } from '../../../constants/common/alert'
import InsightAlertset from '../InsightAlertset'

describe('InsightAlertset component', () => {
  const args = {
    alerts: [
      {
        id: 1,
        label: 'Alert Text',
        variant: ALERT_VARIANT[0],
        visible: true,
      },
    ],
    onAlertClose: jest.fn(),
  }

  test('should render an alert', () => {
    render(<InsightAlertset {...args} />)
    expect(screen.getByTestId('insightAlertset')).toBeInTheDocument()
    expect(screen.getByText('Alert Text')).toBeInTheDocument()
  })
})
