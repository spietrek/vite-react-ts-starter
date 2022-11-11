import { render, screen } from '@testing-library/react'
import InsightSpinner from '../InsightSpinner'

describe('InsightSpinner component', () => {
  test('should render a spinner', () => {
    render(<InsightSpinner />)
    expect(screen.getByTestId('insightSpinner')).toBeInTheDocument()
  })
})
