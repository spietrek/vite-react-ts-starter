import { render, screen } from '@testing-library/react'
import InsightPill from '../InsightPill'

describe('InsightPill component', () => {
  const pillText = 'Hello World'

  test('should render a pill', () => {
    render(<InsightPill label={pillText} />)
    expect(screen.getByText(pillText)).toBeInTheDocument()
  })
})
