import { render, screen } from '@testing-library/react'
import InsightDrawer from '../InsightDrawer'

describe('InsightDrawer component', () => {
  test('should render drawer', () => {
    render(<InsightDrawer />)
    expect(screen.getByTestId('insightDrawer')).toBeInTheDocument()
  })
})
