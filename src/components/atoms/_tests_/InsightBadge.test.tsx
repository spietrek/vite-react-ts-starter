import { render, screen } from '@testing-library/react'
import InsightBadge from '../InsightBadge'

describe('InsightBadge component', () => {
  const badgeText = 'Hello World'

  test('should render a badge', () => {
    render(<InsightBadge>{badgeText}</InsightBadge>)
    expect(screen.getByText(badgeText)).toBeInTheDocument()
  })

  describe('when variant prop is not passed', () => {
    test('should have a class of "badge-primary"', () => {
      render(<InsightBadge>{badgeText}</InsightBadge>)
      expect(screen.getByText(badgeText)).toHaveClass('badge-primary')
    })
  })

  describe('when size prop is not passed', () => {
    test('should have a class of "badge-md"', () => {
      render(<InsightBadge>{badgeText}</InsightBadge>)
      expect(screen.getByText(badgeText)).toHaveClass('badge-md')
    })
  })
})
