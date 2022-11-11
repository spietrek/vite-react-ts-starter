import { render, screen } from '@testing-library/react'
import InsightProgress from '../InsightProgress'

describe('InsightProgress component', () => {
  const args = {
    value: 50,
  }
  test('should render progress bar', () => {
    render(<InsightProgress {...args} />)
    expect(screen.getByTestId('progress-container')).toBeInTheDocument()
  })

  describe('progress bar if value is NaN', () => {
    test('should render progress bar with value of 0', () => {
      render(<InsightProgress {...args} value={NaN} />)
      expect(screen.getByTestId('progress-container')).toBeInTheDocument()
    })
  })
})
