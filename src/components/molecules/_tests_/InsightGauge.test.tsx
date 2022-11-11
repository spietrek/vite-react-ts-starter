import { render, screen } from '@testing-library/react'
import InsightGauge from '../InsightGauge'

describe('InsightGauge component', () => {
  const args = {
    value: 50,
  }
  test('should render gauge representing a value', () => {
    render(<InsightGauge {...args} />)
    expect(screen.getByTestId('insightGauge')).toBeInTheDocument()
  })
})
