import { render, screen } from '@testing-library/react'
import InsightIndicator from '../InsightIndicator'

describe('InsightIndicator component', () => {
  const args = {
    isLoading: true,
  }
  test('should render indicator spinner', () => {
    render(<InsightIndicator {...args} />)
    expect(screen.getByTestId('insightIndicator')).toBeInTheDocument()
    expect(
      screen.queryByTestId('insightIndicator-children'),
    ).not.toBeInTheDocument()
  })

  describe('indicator after loading success', () => {
    test('should load childern and no indicator', () => {
      render(<InsightIndicator {...args} isLoading={false} />)
      expect(
        screen.getByTestId('insightIndicator-children'),
      ).toBeInTheDocument()
    })
  })
})
