import { render, screen } from '@testing-library/react'
import InsightAppBar from '../InsightAppBar'

describe('InsightAppBar component', () => {
  test('should render App Bar', () => {
    render(<InsightAppBar />)
    expect(screen.getByTestId('insightAppBar')).toBeInTheDocument()
    expect(screen.getByTestId('insightAppBar-icon')).toBeInTheDocument()
  })
})
