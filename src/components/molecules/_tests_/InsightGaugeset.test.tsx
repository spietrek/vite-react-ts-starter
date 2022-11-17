import { render, screen } from '@testing-library/react'
import InsightGaugeset from '../InsightGaugeset'

describe('InsightGaugeset component', () => {
  const args = {
    items: [
      {
        value: 50,
      },
    ],
  }
  test('should render set of gauges', () => {
    render(<InsightGaugeset {...args} />)
    expect(screen.getByTestId('insightGaugeSet')).toBeInTheDocument()
  })
})
